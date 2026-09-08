/* ==========================================================================
   CONFIGURAÇÃO DA API (INTERNET)
   ========================================================================== */
// INSIRA SUA CHAVE DA SPOONACULAR AQUI ENTRE AS ASPAS:
const API_KEY = "COLE_SUA_CHAVE_AQUI";

const formulario = document.getElementById('formulario-cardapio');
const containerResultado = document.getElementById('resultado-cardapio');

/* ==========================================================================
   EVENTO DE ENVIO DO FORMULÁRIO
   ========================================================================== */
formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede a página de recarregar

    // 1. Capturando as preferências do usuário nos Selects
    const dieta = document.getElementById('dieta').value;
    const tempoMaximo = document.getElementById('tempo-preparo').value;
    const quantidadeRefeicoes = document.getElementById('quantidade').value;

    // 2. Capturando as Restrições/Alergias (Checkboxes)
    const checkboxesRestricoes = document.querySelectorAll('input[name="restricoes"]:checked');
    const restricoesAtivas = [];
    checkboxesRestricoes.forEach(function (item) {
        restricoesAtivas.push(item.value);
    });

    // Mostra uma mensagem de "Carregando" na tela enquanto busca na internet
    containerResultado.innerHTML = `<p class="resumo-escolhas">Buscando as melhores receitas na internet... Aguarde. 🍳</p>`;

    // Chama a função assíncrona que vai buscar os dados no servidor externo
    buscarReceitasDaInternet(dieta, tempoMaximo, quantidadeRefeicoes, restricoesAtivas);
});

/* ==========================================================================
   BUSCA DOS DADOS NA API (FETCH)
   ========================================================================== */
async function buscarReceitasDaInternet(dieta, tempo, quantidade, restricoes) {
    // Juntamos a lista de restrições por vírgula (ex: "gluten,dairy"), formato exigido pela API
    const restricoesTexto = restricoes.join(',');

    // Montamos o link de pedido personalizado com base nos filtros do usuário.
    // Pedimos também que a API já envie as informações completas de preparo (addRecipeInformation=true)
    // Substitua temporariamente a linha da URL dentro da função buscarReceitasDaInternet por esta:
    let url = `https://spoonacular.com{quantidade}&addRecipeInformation=true&apiKey=${API_KEY}`;

    // Adiciona os filtros no link apenas se o usuário tiver escolhido algo diferente de "Qualquer um"
    if (dieta !== "any") url += `&diet=${dieta}`;
    if (tempo !== "any") url += `&maxReadyTime=${tempo}`;
    if (restricoesTexto !== "") url += `&intolerances=${restricoesTexto}`;

    try {
        // Envia o pedido para o servidor da internet e aguarda a resposta
        const resposta = await fetch(url);
        const dados = await resposta.json();

        // Armazena a lista de receitas que retornou do site
        const receitasEncontradas = dados.results;

        // Se o servidor não achar nada, avisa o usuário na tela
        if (!receitasEncontradas || receitasEncontradas.length === 0) {
            containerResultado.innerHTML = `<p class="resumo-escolhas">Nenhum rango encontrado para esses filtros na internet. Tente mudar as opções!</p>`;
            return;
        }

        // Desenha os resultados reais na tela
        exibirReceitasNaTela(receitasEncontradas);

    } catch (erro) {
        console.error("Erro na busca de receitas:", erro);
        containerResultado.innerHTML = `<p class="resumo-escolhas" style="color: var(--cor-principal);">Ops! Ocorreu um erro ao conectar com o servidor de receitas. Verifique sua chave da API ou sua conexão.</p>`;
    }
}

/* ==========================================================================
   EXIBIÇÃO DOS RESULTADOS E MODO DE PREPARO (DOM)
   ========================================================================== */
function exibirReceitasNaTela(receitas) {
    // Abre a estrutura do Card de Resultado principal
    let htmlResultado = `
        <div class="card-resultado animate-fade-in">
            <h3>Seu Cardápio Gerado da Internet</h3>
            <p class="resumo-escolhas">Selecionamos ${receitas.length} prato(s) sob medida para você:</p>
            <div class="lista-refeicoes">
    `;

    // Passa por cada receita real trazida da internet
    receitas.forEach(function (receita) {
        // A API envia o modo de preparo em um resumo em HTML. Se não houver, criamos um texto padrão.
        const resumoPreparo = receita.summary ? receita.summary : "Modo de preparo detalhado disponível no site oficial.";

        htmlResultado += `
            <div class="item-refeicao" style="margin-bottom: 20px; padding-bottom: 15px;">
                <!-- Exibe a foto oficial do prato que vem da internet -->
                <img src="${receita.image}" alt="${receita.title}" style="width: 100%; max-height: 200px; object-fit: cover; border-radius: 8px; margin-bottom: 10px;">
                
                <h4>${receita.title}</h4>
                <span class="badge-tempo">⏱️ Pronto em: ${receita.readyInMinutes} min</span>
                
                <!-- Pequena seção ensinando a receita / mostrando o resumo do prato -->
                <div class="instrucoes-prato" style="margin-top: 10px; font-size: 0.9rem; color: #555;">
                    <strong>Sobre o prato:</strong>
                    <p>${resumoPreparo.substring(0, 250)}...</p> 
                </div>

                <!-- Link direto para a página original que criou a receita -->
                <a href="${receita.sourceUrl}" target="_blank" style="display: inline-block; margin-top: 10px; color: var(--cor-principal); font-weight: 600; text-decoration: underline;">
                    Ver receita completa no site oficial ➔
                </a>
            </div>
        `;
    });

    htmlResultado += `
            </div>
        </div>
    `;

    // Injeta todo esse conteúdo vivo na sua página
    containerResultado.innerHTML = htmlResultado;
}
