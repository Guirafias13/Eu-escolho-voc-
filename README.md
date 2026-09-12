# 🍳 Rango Certo — Eu Escolho Você!

O **Rango Certo** é um aplicativo web interativo desenvolvido para simplificar a decisão alimentar diária. O sistema permite que o usuário filtre receitas de forma inteligente com base em seus objetivos, restrições alimentares e tempo disponível. Ao final, ele gera um menu personalizado e constrói automaticamente uma lista de compras unificada e otimizada para o supermercado.

---

## 🚀 Funcionalidades Principais

*   **Filtro Estrito de Preferências:** Busca receitas cruzando dados de estilo alimentar, nível de habilidade e tempo de preparo.
*   **Gerenciamento de Alergias:** Sistema inteligente que exclui automaticamente pratos que contenham ingredientes marcados como restrições pelo usuário.
*   **Menu por Refeição:** Gera um cardápio focado estritamente nas refeições selecionadas (Café da Manhã, Almoço, Lanche ou Jantar).
*   **Sorteio Dinâmico:** O algoritmo rotaciona os pratos de forma aleatória a cada busca com base em um banco de dados interno de 60 receitas.
*   **Visualização Detalhada em Modal:** Exibe ingredientes e modo de preparo em uma janela flutuante moderna com efeito de desfoque de fundo (*glassmorphism*) e rolagem isolada.
*   **Lista de Compras Inteligente:** Agrupa ingredientes semelhantes por palavras-chave e contabiliza a repetição dos itens para evitar redundâncias.
*   **Reset de Interface:** Botão funcional para limpar os resultados exibidos e redefinir o formulário simultaneamente.

---

## 🛠️ Tecnologias Utilizadas

*   **HTML5:** Estruturação semântica dos formulários, seletores e áreas de injeção de conteúdo.
*   **CSS3:** Estilização modular, uso de variáveis globais, sombras em camadas tridimensionais, efeito *Glassmorphism* e fundo geométrico personalizado.
*   **JavaScript (ES6+):** Manipulação do DOM, laços de repetição para processamento de listas, arrays relacionais e controle de fluxo do navegador.

---

## 📁 Estrutura do Projeto

```bytecode
├── index.html   # Contém o esqueleto da aplicação, formulários e o container de resultados.
├── style.css    # Responsável por toda a identidade visual, tipografia e design responsivo.
└── script.js    # Centraliza a lógica de negócio, banco de dados de receitas e motores de filtragem.
```

---

## 📦 Como Executar o Projeto

1. Baixe os arquivos do projeto para o seu computador ou clone o repositório.
2. Certifique-se de que os três arquivos (`index.html`, `style.css` e `script.js`) estão salvos juntos no mesmo diretório.
3. Abra o arquivo `index.html` em qualquer navegador web moderno.
4. Utilize o atalho `Ctrl + F5` (ou `Cmd + Shift + R` no Mac) para garantir a limpeza do cache durante os testes.
