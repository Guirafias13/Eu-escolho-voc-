/* ==========================================================================
   1. BANCO DE DADOS LOCAL RELACIONAL (60 RECEITAS COM CATEGORIAS)
   ========================================================================== */
const BANCO_RECEITAS = [{
        titulo: "Salada de Grão-de-Bico com Abacate",
        dieta: "vegan",
        tempo: 20,
        refeicao: "almoco",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 xícara de grão-de-bico cozido", "Metade de um abacate em cubos", "1 tomate picado", "1 colher de sopa de azeite", "Suco de 1 limão", "1 pitada de sal"],
        preparo: ["Em uma tigela, misture o grão-de-bico, o tomate e o abacate.", "Tempere com o azeite, o suco de limão e o sal.", "Misture delicadamente e sirva frio."]
    },
    {
        titulo: "Omelete Nutritivo com Espinafre",
        dieta: "ketogenic",
        tempo: 20,
        refeicao: "cafe-manha",
        restricoes: ["gluten", "dairy", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["2 ovos inteiros", "1 xícara de folhas de espinafre picadas", "1 colher de chá de azeite de oliva", "1 pitada de sal e pimenta"],
        preparo: ["Bata os ovos em uma tigela com uma pitada de sal.", "Adicione o espinafre picado.", "Aqueça o azeite em uma frigideira, despeje a mistura e cozinhe dos dois lados."]
    },
    {
        titulo: "Frango Grelhado com Purê de Batata Doce",
        dieta: "high-protein",
        tempo: 45,
        refeicao: "jantar",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["150g de peito de frango em bifes", "1 batata doce média", "1 colher de chá de azeite", "Alho picado e sal"],
        preparo: ["Cozinhe a batata doce descascada até ficar bem macia e amasse com um garfo.", "Tempere o frango com alho e sal.", "Grelhe o frango no azeite até dourar e monte o prato com o purê."]
    },
    {
        titulo: "Iogurte Natural com Chia e Morangos",
        dieta: "balanced",
        tempo: 20,
        refeicao: "cafe-tarde",
        restricoes: ["gluten", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 pote de iogurte natural integral", "1 colher de sopa de sementes de chia", "4 morangos picados"],
        preparo: ["Em um copo ou tigela, coloque o iogurte natural.", "Misture a chia delicadamente.", "Adicione os morangos picados por cima e deixe descansar por 5 minutos antes de comer."]
    },
    {
        titulo: "Peixe Assado com Legumes no Vapor",
        dieta: "balanced",
        tempo: 45,
        refeicao: "almoco",
        restricoes: ["gluten", "dairy", "eggs", "soy", "peanut", "nuts"],
        ingredientes: ["1 filé de peixe tilápia", "Meia xícara de brócolis picado", "Meia cenoura em rodelas", "1 colher de azeite", "Suco de limão e sal"],
        preparo: ["Tempere o peixe com sal e limão e leve ao forno médio por 20 minutos.", "Cozinhe os legumes no vapor até ficarem macios.", "Regue tudo com azeite de oliva e sirva."]
    },
    {
        titulo: "Mix de Castanhas com Coco Queimado",
        dieta: "ketogenic",
        tempo: 20,
        refeicao: "cafe-tarde",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut"],
        ingredientes: ["1 punhado de castanhas de caju", "1 punhado de amêndoas", "Fitas de coco seco desidratado"],
        preparo: ["Misture as castanhas, amêndoas e o coco em um potinho.", "Excelente opção de lanche prático e rápido para levar para qualquer lugar."]
    },
    {
        titulo: "Macarrão Integral com Molho de Tomate",
        dieta: "balanced",
        tempo: 45,
        refeicao: "jantar",
        restricoes: ["dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 xícara de macarrão integral", "3 tomates maduros picados", "1 dente de alho picado", "Manjericão fresco e sal"],
        preparo: ["Cozinhe o macarrão em água fervente com sal até ficar al dente.", "Em outra panela, refogue o alho, adicione os tomates e cozinhe até virar um molho.", "Misture o macarrão ao molho e finalize com manjericão."]
    },
    {
        titulo: "Crepioca de Frango Desfiado",
        dieta: "high-protein",
        tempo: 20,
        refeicao: "cafe-manha",
        restricoes: ["gluten", "dairy", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 ovo", "2 colheres de sopa de goma de tapioca", "3 colheres de sopa de frango desfiado temperado"],
        preparo: ["Bata o ovo com a tapioca e uma pitada de sal em um prato.", "Derrube na frigideira antiaderente quente até firmar e vire.", "Adicione o frango desfiado como recheio, dobre ao meio e sirva."]
    },
    {
        titulo: "Sopa de Lentilha Nutritiva",
        dieta: "vegan",
        tempo: 45,
        refeicao: "jantar",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 xícara de lentilha crua", "1 cenoura cortada em cubos", "1 batata cortada em cubos", "Alho, cebola e sal"],
        preparo: ["Deixe a lentilha de molho por 1 hora e escorra.", "Refogue o alho e a cebola, junte a lentilha, a cenoura e a batata.", "Cubra com água e cozinhe por 25 minutos até tudo amolecer."]
    },
    {
        titulo: "Guacamole Cremoso com Chips",
        dieta: "vegan",
        tempo: 20,
        refeicao: "cafe-tarde",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 abacate maduro", "Metade de uma cebola picada", "1 tomate em cubos", "Suco de 1 limão", "1 colher de azeite", "1 pitada de sal"],
        preparo: ["Em uma tigela grande, amasse o abacate com um garfo.", "Misture a cebola, o tomate, o suco de limão e o azeite.", "Misture tudo muito bem e sirva com chips de milho sem glúten."]
    },
    {
        titulo: "Patê de Atum com Torradas de Arroz",
        dieta: "high-protein",
        tempo: 20,
        refeicao: "cafe-tarde",
        restricoes: ["gluten", "dairy", "eggs", "soy", "peanut", "nuts"],
        ingredientes: ["1 lata de atum escorrido", "2 colheres de sopa de azeite de oliva", "Salsinha picada e sal", "4 torradas de arroz integral"],
        preparo: ["Em um pote pequeno, amasse o atum com o azeite usando um garfo.", "Adicione o sal e a salsinha, misturando até virar uma pasta homogênea.", "Passe por cima das torradas de arroz e consuma na hora."]
    },
    {
        titulo: "Arroz de Forno Prático com Tofu",
        dieta: "vegan",
        tempo: 45,
        refeicao: "almoco",
        restricoes: ["gluten", "dairy", "eggs", "fish", "peanut", "nuts"],
        ingredientes: ["2 xícaras de arroz cozido", "150g de tofu picado em cubos", "Meia xícara de milho verde", "Molho de tomate e orégano"],
        preparo: ["Em um refratário, misture o arroz cozido, os cubos de tofu e o milho.", "Regue com o molho de tomate e salpique orégano por cima.", "Leve ao forno por 15 minutos apenas para aquecer bem e sirva."]
    },
    {
        titulo: "Iogurte de Soja com Amendoim",
        dieta: "vegan",
        tempo: 20,
        refeicao: "cafe-manha",
        restricoes: ["gluten", "dairy", "eggs", "fish", "nuts"],
        ingredientes: ["1 pote de iogurte à base de soja", "2 colheres de sopa de amendoim torrado e moído"],
        preparo: ["Coloque o iogurte de soja em uma taça pequena.", "Salpique o amendoim triturado por cima.", "Misture levemente na hora de comer para manter a crocância."]
    },
    {
        titulo: "Bife de Patinho Acebolado",
        dieta: "high-protein",
        tempo: 25,
        refeicao: "almoco",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["150g de bife de patinho bovino", "Metade de uma cebola fatiada em rodelas", "1 dente de alho amassado", "1 colher de chá de azeite", "1 pitada de sal"],
        preparo: ["Tempere o bife de carne vermelha com o alho amassado e sal.", "Aqueça a frigideira com o azeite e doure a carne dos dois lados.", "Retire a carne, jogue as rodelas de cebola na mesma frigideira para dourar e jogue por cima do bife."]
    },
    {
        titulo: "Panqueca Doce Fit",
        dieta: "vegetarian",
        tempo: 20,
        refeicao: "cafe-manha",
        restricoes: ["dairy", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 banana madura", "1 ovo inteiro", "2 colheres de sopa de farelo de aveia"],
        preparo: ["Em um prato fundo, misture bem a banana amassada, o ovo e a aveia com um garfo.", "Aqueça uma frigideira antiaderente levemente untada.", "Coloque pequenas porções da massa, doure dos dois lados em fogo baixo e sirva."]
    },
    {
        titulo: "Espetinho de Queijo Coalho com Melaço",
        dieta: "vegetarian",
        tempo: 20,
        refeicao: "cafe-tarde",
        restricoes: ["gluten", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["2 espetos de queijo coalho", "1 colher de sopa de melaço de cana"],
        preparo: ["Aqueça uma frigideira antiaderente e grelhe o queijo coalho de todos os lados até dourar.", "Retire da frigideira, coloque em um prato e finalize regando o melaço por cima."]
    },
    {
        titulo: "Carne Moída com Abóbora Cabotiá",
        dieta: "high-protein",
        tempo: 45,
        refeicao: "jantar",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["150g de patinho moído", "1 xícara de abóbora cabotiá em cubos", "Azeite, cebola, alho e sal", "Salsinha picada"],
        preparo: ["Refogue o alho e a cebola no azeite, adicione a carne moída e cozinhe até secar a água.", "Adicione os cubos de abóbora e um pouquinho de água.", "Tampe a panela e cozinhe em fogo baixo até a abóbora amaciar."]
    },
    {
        titulo: "Purê de Grão-de-Bico (Homus)",
        dieta: "vegan",
        tempo: 20,
        refeicao: "cafe-tarde",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 xícara de grão-de-bico cozido", "1 colher de sopa de pasta de gergelim (tahine)", "1 dente de alho pequeno", "Suco de meio limão", "Azeite de oliva e sal"],
        preparo: ["Bata o grão-de-bico, o tahine, o alho e o suco de limão no liquidificador ou processador.", "Vá adicionando azeite aos poucos até virar uma pasta bem lisa e homogênea.", "Sirva com palitos de cenoura ou pepino."]
    },
    {
        titulo: "Sopa Creme de Abóbora",
        dieta: "ketogenic",
        tempo: 45,
        refeicao: "jantar",
        restricoes: ["gluten", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["2 xícaras de abóbora picada", "2 colheres de sopa de creme de leite", "1 colher de sopa de manteiga", "Água e sal"],
        preparo: ["Cozinhe a abóbora na água com sal até desmanchar.", "Bata a abóbora com um pouco da água no liquidificador.", "Volte para a panela, misture a manteiga e o creme de leite e aqueça em fogo baixo."]
    },
    {
        titulo: "Abobrinha Recheada com Ricota",
        dieta: "vegetarian",
        tempo: 45,
        refeicao: "jantar",
        restricoes: ["gluten", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 abobrinha média", "4 colheres de sopa de ricota esfarelada", "Azeite de oliva", "Sal, pimenta e orégano"],
        preparo: ["Corte a abobrinha ao meio no sentido do comprimento e retire o miolo com uma colher.", "Misture a ricota esfarelada com o azeite, sal e orégano.", "Preencha as cavidades da abobrinha com a ricota e leve ao forno por 25 minutos."]
    }, {
        titulo: "Smoothie de Abacate de Caneca",
        dieta: "ketogenic",
        tempo: 20,
        refeicao: "cafe-manha",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["Metade de um abacate maduro", "1 xícara de leite de coco", "Adoçante de sua preferência"],
        preparo: ["Coloque todos os ingredientes no liquidificador ou use um mixer de mão.", "Bata até virar um creme uniforme e grosso.", "Consuma bem gelado."]
    }, {
        titulo: "Strogonoff de Cogumelo Paris",
        dieta: "vegetarian",
        tempo: 45,
        refeicao: "almoco",
        restricoes: ["gluten", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 xícara de cogumelos paris fatiados", "3 colheres de sopa de molho de tomate", "2 colheres de creme de leite", "Cebola, azeite e sal"],
        preparo: ["Refogue a cebola no azeite e junte os cogumelos até murcharem.", "Adicione o molho de tomate e deixe apurar por 5 minutos.", "Desligue o fogo, misture o creme de leite delicadamente e sirva."]
    }, {
        titulo: "Salmão Grelhado ao Molho de Limão",
        dieta: "high-protein",
        tempo: 25,
        refeicao: "jantar",
        restricoes: ["gluten", "dairy", "eggs", "soy", "peanut", "nuts"],
        ingredientes: ["1 filé de salmão fresco", "Suco de 1 limão", "1 colher de chá de azeite", "Sal e raspas de limão"],
        preparo: ["Tempere o filé de salmão com sal e um pouco do limão.", "Grelhe na frigideira com o azeite, deixando dourar por 4 minutos de cada lado.", "Finalize jogando o restante do suco e as raspas por cima."]
    }, {
        titulo: "Quibe de Berinjela Assado",
        dieta: "vegan",
        tempo: 45,
        refeicao: "jantar",
        restricoes: ["dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 berinjela grande cozida e amassada", "Meia xícara de trigo para quibe hidratado", "Hortelã picada", "Cebola, sal e azeite"],
        preparo: ["Misture muito bem a berinjela amassada com o trigo hidratado e temperos.", "Espalhe a massa em uma assadeira untada com bastante azeite.", "Faça cortes diagonais por cima e leve ao forno médio por 30 minutos."]
    }, {
        titulo: "Ovos Mexidos Cremosos",
        dieta: "ketogenic",
        tempo: 20,
        refeicao: "cafe-manha",
        restricoes: ["gluten", "dairy", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["2 ovos inteiros", "1 colher de chá de azeite de oliva", "1 pitada de sal"],
        preparo: ["Bata os ovos levemente em uma tigela com o sal.", "Aqueça o azeite em fogo bem baixo e despeje os ovos.", "Mexa sem parar devagar até os ovos firmarem, mas continuarem úmidos."]
    }, {
        titulo: "Arroz Integral com Lentilha",
        dieta: "vegan",
        tempo: 45,
        refeicao: "almoco",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 xícara de arroz integral cozido", "Meia xícara de lentilha cozida", "1 cebola grande fatiada", "1 colher de sopa de azeite"],
        preparo: ["Em uma frigideira, doure a cebola no azeite em fogo bem baixo até caramelizar.", "Misture o arroz integral quente com a lentilha em uma travessa.", "Coloque as cebolas douradas por cima e sirva."]
    }, {
        titulo: "Tapioca com Pasta de Amendoim",
        dieta: "vegan",
        tempo: 20,
        refeicao: "cafe-manha",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "nuts"],
        ingredientes: ["3 colheres de sopa de goma de tapioca", "1 colher de sopa de pasta de amendoim"],
        preparo: ["Peneire a goma na frigideira quente fazendo um disco uniforme.", "Deixe firmar de um lado, vire e cozinhe por mais 1 minuto.", "Espalhe a pasta de amendoim por dentro, dobre e coma morno."]
    }, {
        titulo: "Iogurte com Amêndoas Laminadas",
        dieta: "balanced",
        tempo: 20,
        refeicao: "cafe-tarde",
        restricoes: ["gluten", "eggs", "soy", "fish", "peanut"],
        ingredientes: ["1 pote de iogurte natural integral", "1 colher de sopa de amêndoas laminadas torradas"],
        preparo: ["Coloque o iogurte natural em uma taça pequena.", "Adicione as amêndoas por cima para dar o efeito crocante e consuma imediatamente."]
    }, {
        titulo: "Tofu Mexido com Cúrcuma",
        dieta: "vegan",
        tempo: 20,
        refeicao: "cafe-manha",
        restricoes: ["gluten", "dairy", "eggs", "fish", "peanut", "nuts"],
        ingredientes: ["150g de tofu firme amassado", "Meia colher de chá de cúrcuma", "1 colher de azeite", "Sal e cheiro-verde picado"],
        preparo: ["Aqueça o azeite e jogue o tofu amassado.", "Adicione a cúrcuma e o sal, mexendo bem por 5 minutos até dourar como se fosse ovo.", "Finalize com cheiro-verde picado."]
    }, {
        titulo: "Sardinha Grelhada com Alho",
        dieta: "high-protein",
        tempo: 25,
        refeicao: "almoco",
        restricoes: ["gluten", "dairy", "eggs", "soy", "peanut", "nuts"],
        ingredientes: ["2 filés de sardinha limpos", "1 dente de alho picado", "1 colher de sopa de azeite", "Suco de limão e sal"],
        preparo: ["Tempere a sardinha com alho, sal e suco de limão.", "Aqueça uma grelha ou frigideira com o azeite.", "Grelhe os filés por 3 minutos de cada lado com cuidado para não desmanchar e sirva."]
    }, {
        titulo: "Coxas de Frango com Páprica",
        dieta: "high-protein",
        tempo: 45,
        refeicao: "jantar",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["2 coxas de frango limpas", "1 colher de chá de páprica doce", "1 colher de sopa de azeite", "Sal, alho e cebola em pó"],
        preparo: ["Tempere as coxas de frango com o alho, sal, cebola e a páprica doce.", "Regue com o azeite de oliva e misture bem.", "Leve ao forno médio pré-aquecido por 35 minutos até ficarem bem douradas e cozidas."]
    }, {
        titulo: "Panqueca Vegana de Grão-de-Bico",
        dieta: "vegan",
        tempo: 20,
        refeicao: "cafe-manha",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["3 colheres de sopa de farinha de grão-de-bico", "4 colheres de sopa de água", "1 pitada de sal e orégano"],
        preparo: ["Em uma xícara, misture bem a farinha de grão-de-bico, a água, o sal e o orégano até virar uma massa lisa.", "Aqueça uma frigideira antiaderente untada com gotas de azeite.", "Derrube a massa, cozinhe em fogo baixo até firmar, vire do outro lado e sirva."]
    }, {
        titulo: "Espetinho de Tomate com Tofu",
        dieta: "vegan",
        tempo: 20,
        refeicao: "cafe-tarde",
        restricoes: ["gluten", "dairy", "eggs", "fish", "peanut", "nuts"],
        ingredientes: ["6 tomates cereja", "100g de tofu em cubos", "Folhas de manjericão", "Azeite e sal"],
        preparo: ["Monte os espetinhos em palitos de dente alternando o tomate, o cubo de tofu e a folha de manjericão.", "Coloque em um prato e tempere salpicando sal por cima.", "Regue com um fio de azeite de oliva e sirva como um lanche prático."]
    }, {
        titulo: "Salada de Atum com Abacate",
        dieta: "ketogenic",
        tempo: 20,
        refeicao: "jantar",
        restricoes: ["gluten", "dairy", "eggs", "soy", "peanut", "nuts"],
        ingredientes: ["1 lata de atum escorrido", "2 colheres de sopa de abacate maduro amassado", "Gotas de limão", "Sal e pimenta"],
        preparo: ["Em uma tigela, misture o abacate amassado com gotas de limão e sal até virar um creme.", "Adicione o atum escorrido e misture muito bem.", "Consuma puro ou como recheio de folhas de alface."]
    }, {
        titulo: "Espaguete de Abobrinha ao Alho",
        dieta: "vegan",
        tempo: 20,
        refeicao: "jantar",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 abobrinha em formato de espaguete", "2 dentes de alho fatiados", "1 colher de sopa de azeite", "Sal e salsinha"],
        preparo: ["Aqueça o azeite em uma frigideira e doure as fatias de alho.", "Adicione a abobrinha ralada e refogue por apenas 3 minutos para não soltar muita água.", "Tempere com sal, salpique salsinha por cima e sirva imediatamente."]
    }, {
        titulo: "Sopa Creme de Ervilha Seca",
        dieta: "vegan",
        tempo: 45,
        refeicao: "jantar",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 xícara de ervilha seca hidratada", "Meia cebola picada", "1 dente de alho", "Caldo de legumes e sal"],
        preparo: ["Cozinhe a ervilha seca na panela de pressão com água e sal por 15 minutos.", "Refogue o alho e a cebola em outra panela e junte a ervilha cozida.", "Bata tudo no liquidificador até virar um creme grosso e aqueça antes de servir."]
    }, {
        titulo: "Iogurte Natural com Nozes",
        dieta: "balanced",
        tempo: 20,
        refeicao: "cafe-tarde",
        restricoes: ["gluten", "eggs", "soy", "fish", "peanut"],
        ingredientes: ["1 pote de iogurte natural integral", "3 nozes picadas", "1 fio de mel"],
        preparo: ["Coloque o iogurte natural integral em uma tigela de sobremesa.", "Adicione as nozes picadas por cima para trazer gorduras boas e crocância.", "Finalize com o mel e consuma."]
    }, {
        titulo: "Palitos de Cenoura Assados",
        dieta: "vegan",
        tempo: 45,
        refeicao: "cafe-tarde",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["2 cenouras em formato de palito", "1 colher de chá de alecrim", "1 colher de sopa de azeite", "Sal"],
        preparo: ["Coloque os palitos de cenoura em uma forma.", "Regue com o azeite de oliva, o sal e salpique as folhas de alecrim.", "Leve ao forno médio por 30 minutos até ficarem macias por dentro e douradas por fora."]
    }, {
        titulo: "Crepioca de Carne Moída",
        dieta: "high-protein",
        tempo: 20,
        refeicao: "cafe-manha",
        restricoes: ["gluten", "dairy", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 ovo inteiro", "2 colheres de sopa de goma de tapioca", "3 colheres de carne moída cozida"],
        preparo: ["Bata o ovo e a tapioca em um prato com uma pitada de sal usando um garfo.", "Aqueça a frigideira e doure a massa dos dois lados.", "Adicione a carne moída aquecida no centro, feche a massa e consuma."]
    }, {
        titulo: "Purê de Batata com Carne Moída",
        dieta: "balanced",
        tempo: 45,
        refeicao: "almoco",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["2 batatas médias cozidas", "100g de carne moída cozida", "1 colher de chá de azeite", "Sal e temperos"],
        preparo: ["Amasse as batatas cozidas ainda quentes com um garfo e misture o azeite e sal até virar um purê.", "Coloque o purê de batata na base de um prato.", "Adicione a carne moída temperada por cima e consuma quente."]
    }, {
        titulo: "Tiras de Carne com Pimentão",
        dieta: "ketogenic",
        tempo: 25,
        refeicao: "almoco",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["150g de alcatra em tiras", "Meio pimentão verde fatiado", "Metade de uma cebola", "Azeite e sal"],
        preparo: ["Tempere as tiras de carne vermelha com sal.", "Aqueça bem uma frigideira com azeite e sele a carne rapidamente.", "Junte o pimentão e a cebola na mesma frigideira, refogando até ficarem macios."]
    }, {
        titulo: "Docinho Fit de Banana",
        dieta: "vegan",
        tempo: 20,
        refeicao: "cafe-tarde",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 banana madura", "2 colheres de sopa de coco ralado seco"],
        preparo: ["Coloque a banana descascada em um prato e leve ao micro-ondas por 1 minuto para amaciar.", "Amasse bem a banana aquecida com um garfo.", "Misture o coco ralado seco até virar uma massinha espessa e consuma morno com colher."]
    }, {
        titulo: "Ovos Cozidos com Orégano",
        dieta: "ketogenic",
        tempo: 20,
        refeicao: "cafe-manha",
        restricoes: ["gluten", "dairy", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["2 ovos inteiros", "1 colher de chá de azeite", "Sal e orégano"],
        preparo: ["Cozinhe os ovos em água fervente por 9 minutos.", "Descasque os ovos e corte-os ao meio, colocando em um prato.", "Tempere jogando o sal, o orégano e finalizando com o fio de azeite por cima."]
    }, {
        titulo: "Arroz Integral com Brócolis",
        dieta: "vegan",
        tempo: 45,
        refeicao: "almoco",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 xícara de arroz integral cozido", "Meia xícara de brócolis picado", "1 dente de alho", "Azeite e sal"],
        preparo: ["Refogue o alho picado em uma panela pequena com um pouco de azeite.", "Adicione o brócolis bem picadinho e refogue por 2 minutos.", "Junte o arroz integral cozido quente, misture bem para pegar o sabor e sirva."]
    }, {
        titulo: "Filé de Frango ao Molho de Tomate",
        dieta: "high-protein",
        tempo: 25,
        refeicao: "jantar",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["150g de filé de peito de frango", "4 colheres de sopa de molho de tomate", "1 colher de azeite", "Sal e orégano"],
        preparo: ["Grelhe o filé de frango temperado com sal no azeite até ficar cozido e dourado.", "Despeje o molho de tomate por cima do frango ainda na frigideira quente.", "Salpique orégano, tampe a panela por 2 minutos em fogo baixo para o molho encorpar e sirva."]
    }, {
        titulo: "Coxinha Fit de Frango",
        dieta: "high-protein",
        tempo: 45,
        refeicao: "cafe-tarde",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 xícara de batata doce amassada", "100g de frango desfiado temperado", "1 colher de farinha de linhaça"],
        preparo: ["Abra porções da batata doce amassada na mão e recheie com o frango desfiado.", "Feche moldando no formato de coxinha.", "Passe na farinha de linhaça e leve à airfryer ou forno por 20 minutos até dourar."]
    }, {
        titulo: "Mingau de Aveia Vegano",
        dieta: "vegan",
        tempo: 20,
        refeicao: "cafe-manha",
        restricoes: ["dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 xícara de leite de coco", "3 colheres de sopa de farelo de aveia", "1 colher de chá de canela"],
        preparo: ["Em uma panela pequena, misture o leite vegetal e o farelo de aveia.", "Leve ao fogo baixo mexendo sempre até engrossar e virar um mingau.", "Coloque em uma tigela e salpique a canela em pó por cima antes de consumir."]
    }, {
        titulo: "Chips de Abobrinha Assada",
        dieta: "ketogenic",
        tempo: 45,
        refeicao: "cafe-tarde",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 abobrinha em rodelas", "1 colher de sopa de azeite de oliva", "Sal e orégano"],
        preparo: ["Disponha as rodelas de abobrinha em uma assadeira sem sobrepor uma à outra.", "Pincele o azeite e salpique o sal e o orégano.", "Leve ao forno baixo por 30 minutos, virando na metade do tempo até ficarem crocantes."]
    }, {
        titulo: "Wrap de Alface com Carne",
        dieta: "ketogenic",
        tempo: 20,
        refeicao: "jantar",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["4 folhas de alface americana", "150g de carne moída cozida"],
        preparo: ["Abra as folhas de alface em um prato plano.", "Distribua a carne moída bem quente no centro de cada folha.", "Enrole as folhas como se fossem panquecas ou wraps e consuma com as mãos."]
    }, {
        titulo: "Purê de Abóbora com Carne Seca",
        dieta: "balanced",
        tempo: 45,
        refeicao: "almoco",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["2 xícaras de abóbora cozida", "100g de carne seca desfiada", "Azeite, alho e sal"],
        preparo: ["Amasse a abóbora cozida com um garfo até virar um purê liso.", "Refogue o alho no azeite e junte a carne seca desfiada para dourar.", "Sirva o purê de abóbora com a carne seca acebolada por cima."]
    }, {
        titulo: "Tofu Grelhado ao Shoyu",
        dieta: "vegan",
        tempo: 20,
        refeicao: "jantar",
        restricoes: ["gluten", "dairy", "eggs", "fish", "peanut", "nuts"],
        ingredientes: ["150g de tofu firme fatiado", "1 colher de sopa de molho shoyu sem glúten", "Azeite de oliva"],
        preparo: ["Aqueça uma frigideira antiaderente com um fio de azeite.", "Grelhe as fatias de tofu por 3 minutos de cada lado até ficarem firmes e douradas.", "Regue com o molho shoyu na própria frigideira, espere secar levemente e sirva."]
    }, {
        titulo: "Salada Verde com Codorna",
        dieta: "ketogenic",
        tempo: 20,
        refeicao: "jantar",
        restricoes: ["gluten", "dairy", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 xícara de alface e rúcula", "6 ovos de codorna cozidos", "Azeite e vinagre"],
        preparo: ["Monte uma cama de folhas verdes em uma saladeira pequena.", "Corte os ovos de codorna ao meio e distribua por cima das folhas.", "Tempere regando com o azeite de oliva, o vinagre de maçã e uma pitada de sal."]
    }, {
        titulo: "Banana Amassada com Girassol",
        dieta: "vegan",
        tempo: 20,
        refeicao: "cafe-tarde",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 banana prata madura", "1 colher de sementes de girassol"],
        preparo: ["Descasque a banana em um prato e amasse completamente usando um garfo.", "Salpique as sementes de girassol por cima para trazer crocância e fibras.", "Consuma imediatamente de colher."]
    }, {
        titulo: "Sopa de Ervilha com Bacon",
        dieta: "balanced",
        tempo: 45,
        refeicao: "jantar",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 xícara de ervilhas cozidas", "20g de cubos de bacon fritos", "Alho, cebola e sal"],
        preparo: ["Bata as ervilhas cozidas com um pouco da água do cozimento no liquidificador.", "Refogue o alho e a cebola na gordura do bacon, junte o creme de ervilhas e ferva por 5 minutos.", "Sirva na xícara com os cubos crocantes de bacon por cima."]
    }, {
        titulo: "Iogurte com Sementes de Abóbora",
        dieta: "balanced",
        tempo: 20,
        refeicao: "cafe-tarde",
        restricoes: ["gluten", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 pote de iogurte natural", "1 colher de sementes de abóbora"],
        preparo: ["Despeje o iogurte natural desnatado em uma taça pequena.", "Adicione as sementes de abóbora crocantes no topo.", "Misture na hora de comer para criar um contraste de texturas."]
    }, {
        titulo: "Posta de Cação ao Molho",
        dieta: "high-protein",
        tempo: 25,
        refeicao: "almoco",
        restricoes: ["gluten", "dairy", "eggs", "soy", "peanut", "nuts"],
        ingredientes: ["1 posta de peixe cação", "4 colheres de molho de tomate", "Pimentão e coentro"],
        preparo: ["Tempere a posta de cação com sal e limão.", "Em uma panela pequena, coloque o molho de tomate, o pimentão e acomode o peixe por cima.", "Tampe a panela e cozinhe em fogo baixo por 12 minutos, finalizando com o coentro fresco."]
    }, {
        titulo: "Arroz Integral com Cenoura",
        dieta: "vegan",
        tempo: 45,
        refeicao: "almoco",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 xícara de arroz integral cozido", "2 colheres de cenoura ralada", "Salsinha e azeite"],
        preparo: ["Em uma tigela pequena, junte o arroz integral cozido e a cenoura ralada.", "Adicione a salsinha picada e misture tudo muito bem.", "Regue com algumas gotas de azeite para dar brilho e sirva."]
    }, {
        titulo: "Tiras de Frango Aceboladas",
        dieta: "high-protein",
        tempo: 25,
        refeicao: "jantar",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["150g de peito de frango", "Meia cebola fatiada", "Azeite, alho e sal"],
        preparo: ["Tempere as tiras de frango com uma pitada de sal e alho.", "Aqueça a frigideira com o azeite e grelhe o frango até ficar bem dourado.", "Adicione as fatias de cebola na mesma panela e mexa até que fiquem macias."]
    }, {
        titulo: "Tapioca com Ovo Mexido",
        dieta: "vegetarian",
        tempo: 20,
        refeicao: "cafe-manha",
        restricoes: ["gluten", "dairy", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["3 colheres de goma de tapioca", "1 ovo mexido pronto"],
        preparo: ["Faça o disco de tapioca na frigideira antiaderente aquecida virando os dois lados.", "Coloque o ovo mexido bem quente dentro da tapioca.", "Dobre ao meio e consuma morno no café da manhã."]
    }, {
        titulo: "Maçã Assada com Canela",
        dieta: "vegan",
        tempo: 25,
        refeicao: "cafe-tarde",
        restricoes: ["gluten", "dairy", "eggs", "soy", "fish", "peanut", "nuts"],
        ingredientes: ["1 maçã inteira", "Meia colher de chá de canela em pó"],
        preparo: ["Retire o miolo e as sementes da maçã usando uma faca pequena com cuidado.", "Coloque a maçã em um refratário pequeno e salpique a canela por dentro e por fora.", "Leve ao forno por 20紋 em fogo médio até a polpa amaciar."]
    }
];

/* ==========================================================================
   2. CAPTURA DOS FILTROS DO FORMULÁRIO (SEGURO E ESTRITO)
   ========================================================================== */
const formulario = document.getElementById('formulario-cardapio');
const containerResultado = document.getElementById('resultado-cardapio');

if (formulario) {
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log("🔍 Filtrando cardápio com base na seleção exata...");

        const dieta = document.getElementById('dieta')?.value || 'any';
        const tempo = document.getElementById('tempo-preparo')?.value || 'any';

        // Captura quais refeições foram marcadas (ex: ["almoco", "jantar"])
        const refeicoes = [...document.querySelectorAll('input[name="refeicoes"]:checked')].map(item => item.value);

        // Captura quais restrições foram marcadas
        const restricoes = [...document.querySelectorAll('input[name="restricoes"]:checked')].map(item => item.value);

        filtrarEMostrarCardapio(dieta, tempo, refeicoes, restricoes);
    });
}

function filtrarEMostrarCardapio(dieta, tempo, refeicoes, restricoes) {
    if (containerResultado) containerResultado.innerHTML = "";

    // Se o usuário não marcou nenhuma caixinha de refeição, avisa na tela e para o código
    if (refeicoes.length === 0) {
        containerResultado.innerHTML = `
            <p class="resumo-escolhas" style="text-align: center; color: var(--cor-destaque); font-family: 'Capriola', sans-serif;">
                Por favor, selecione ao menos uma refeição (ex: Almoço, Jantar) para gerar o cardápio! 🧐
            </p>
        `;
        return;
    }

    let receitasEscolhidasDoDia = [];
    let todosOsIngredientesDaSessao = [];

    // LÓGICA ESTRITA: O código vai rodar uma vez para CADA refeição que você marcou na tela
    refeicoes.forEach(function (tipoRefeicao) {

        // Filtra o banco procurando pratos específicos para aquela categoria
        let opcoesValidas = BANCO_RECEITAS.filter(function (receita) {
            // 1. Filtro de Categoria Obrigatório (ex: bater almoco com almoco)
            if (receita.refeicao !== tipoRefeicao) return false;

            // 2. Filtro de Estilo Alimentar (Dieta)
            let atendeDieta = false;
            if (dieta === "any" || dieta === "") {
                atendeDieta = true;
            } else if (dieta === "balanced" && ["balanced", "vegetarian", "vegan", "high-protein"].includes(receita.dieta)) {
                atendeDieta = true; // Dieta balanceada aceita quase tudo saudável
            } else if (dieta === "vegetarian" && ["vegetarian", "vegan"].includes(receita.dieta)) {
                atendeDieta = true; // Vegetarianos comem pratos veganos
            } else {
                atendeDieta = (receita.dieta === dieta);
            }

            // 3. Filtro de Tempo (Ajustado para ler os números 20 e 45 do HTML)
            let atendeTempo = (tempo === "any" || receita.tempo <= parseInt(tempo));

            // 4. Filtro de Restrições (Exclui pratos que contenham alérgenos marcados)
            let atendeRestricoes = true;
            restricoes.forEach(function (alergia) {
                if (receita.restricoes.includes(alergia)) {
                    atendeRestricoes = false; // Se a receita tem o ingrediente proibido, ela roda fora
                }
            });

            return atendeDieta && atendeTempo && atendeRestricoes;
        });

        // Margem de segurança: Se o filtro for muito rígido e zerar a categoria, pegamos uma geral daquela refeição
        if (opcoesValidas.length === 0) {
            opcoesValidas = BANCO_RECEITAS.filter(r => r.refeicao === tipoRefeicao);
        }

        // SORTEIO ALEATÓRIO: Escolhe um prato aleatório dentre os válidos encontrados
        if (opcoesValidas.length > 0) {
            const receitaSorteada = opcoesValidas[Math.floor(Math.random() * opcoesValidas.length)];
            receitasEscolhidasDoDia.push(receitaSorteada);

            // Junta os ingredientes da receita sorteada na lista de compras geral
            receitaSorteada.ingredientes.forEach(ing => todosOsIngredientesDaSessao.push(ing));
        }
    });

    // --- CONSTRUÇÃO DO VISUAL DOS CARDS CLICÁVEIS (ORGANIZADO) ---
    let htmlCardapio = `
        <div class="card-resultado animate-fade-in" style="max-width: 650px; margin: 0 auto;">
            <h3 style="font-size: 1.4rem; text-align: center; margin-bottom: 5px; color: var(--cor-principal);">Seu Menu Personalizado</h3>
            <p class="resumo-escolhas" style="font-size: 0.9rem; text-align: center; margin-bottom: 20px; color: #718096;">Clique em cima de qualquer card para ver a receita completa!</p>
            <div class="lista-refeicoes">
    `;

    receitasEscolhidasDoDia.forEach(function (receita) {
        let rotuloRefeicao = "🍽️ Refeição";
        if (receita.refeicao === "cafe-manha") rotuloRefeicao = "☕ Café da Manhã";
        if (receita.refeicao === "almoco") rotuloRefeicao = "🍛 Almoço";
        if (receita.refeicao === "cafe-tarde") rotuloRefeicao = "🥪 Lanche da Tarde";
        if (receita.refeicao === "jantar") rotuloRefeicao = "🥗 Jantar";

        const dadosTexto = encodeURIComponent(JSON.stringify(receita));

        htmlCardapio += `
            <div class="item-refeicao-clicavel" onclick="abrirModalReceita('${dadosTexto}')">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                    <div>
                        <span class="tag-categoria-refeicao">${rotuloRefeicao}</span>
                        <h4 class="titulo-prato-resultado">${receita.titulo}</h4>
                    </div>
                    <span class="badge-tempo">⏱️ ${receita.tempo} min</span>
                </div>
            </div>
        `;
    });

    // --- CONSTRUÇÃO DA LISTA DE COMPRAS COM CONTADOR DE RECEITAS (SEM ERROS) ---
    // Criamos um objeto para contar quantas vezes cada ingrediente essencial aparece
    let dicionarioCompras = {};

    todosOsIngredientesDaSessao.forEach(function (ingredienteCru) {
        let textoMinusculo = ingredienteCru.toLowerCase();
        let nomeUnificado = ingredienteCru; // Padrão se não bater em nada

        // Identifica e unifica os ingredientes pelas palavras-chave principais
        if (textoMinusculo.includes("azeite")) nomeUnificado = "Azeite de oliva";
        else if (textoMinusculo.includes("sal") || textoMinusculo.includes("pimenta") || textoMinusculo.includes("orég")) {
            nomeUnificado = "Temperos (Sal, Pimenta, Orégano)";
        } else if (textoMinusculo.includes("cebola")) nomeUnificado = "Cebola";
        else if (textoMinusculo.includes("alho")) nomeUnificado = "Alho";
        else if (textoMinusculo.includes("ovo")) nomeUnificado = "Ovos";
        else if (textoMinusculo.includes("frango")) nomeUnificado = "Peito de Frango";
        else if (textoMinusculo.includes("tomate")) nomeUnificado = "Tomate";
        else if (textoMinusculo.includes("limão")) nomeUnificado = "Limão";
        else if (textoMinusculo.includes("abacate")) nomeUnificado = "Abacate";
        else if (textoMinusculo.includes("batata doce")) nomeUnificado = "Batata Doce";
        else if (textoMinusculo.includes("tapioca")) nomeUnificado = "Goma de Tapioca";
        else if (textoMinusculo.includes("iogurte")) nomeUnificado = "Iogurte Natural";
        else if (textoMinusculo.includes("grão-de-bico")) nomeUnificado = "Grão-de-Bico";

        // Conta quantas vezes esse ingrediente aparece no total de receitas sorteadas
        if (dicionarioCompras[nomeUnificado]) {
            dicionarioCompras[nomeUnificado] += 1;
        } else {
            dicionarioCompras[nomeUnificado] = 1;
        }
    });

    // Monta o HTML final formatando os textos sem erros numéricos
    let htmlListaCompras = "";

    for (let ingrediente in dicionarioCompras) {
        let repeticoes = dicionarioCompras[ingrediente];
        let textoExibicao = ingrediente;

        // Se o ingrediente aparecer em mais de uma receita, avisa o usuário de forma amigável
        if (repeticoes > 1) {
            textoExibicao = ingrediente + " (usado em " + repeticoes + " receitas)";
        }

        htmlListaCompras += `
            <li class="item-compra-check">
                <input type="checkbox" id="ing-${encodeURIComponent(ingrediente)}"> 
                <label for="ing-${encodeURIComponent(ingrediente)}" style="cursor:pointer; font-weight: normal; font-size: 14px; margin: 0; font-family: 'Poppins', sans-serif;">${textoExibicao}</label>
            </li>
        `;
    }

    htmlCardapio += `
            </div>

            <!-- Bloco de Compras Estilizado -->
            <div class="bloco-lista-compras">
                <h4>Sua Lista de Compras:</h4>
                <p style="font-size: 0.85rem; color: #718096; margin-bottom: 15px; font-family: 'Poppins', sans-serif;">Vá marcando os ingredientes que você já tem em casa:</p>
                <ul>
                    ${htmlListaCompras}
                </ul>
            </div>

            <!-- Botão: Limpar Resultados e resetar a tela -->
            <div style="text-align: center; margin-top: 25px;">
                <button onclick="limparResultadosNaTela()" style="background-color: transparent; color: #718096; border: 1px solid #CBD5E0; padding: 10px 20px; border-radius: 6px; font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.backgroundColor='#FFF5F5'; this.style.color='var(--cor-principal)'; this.style.borderColor='var(--cor-principal)'" onmouseout="this.style.backgroundColor='transparent'; this.style.color='#718096'; this.style.borderColor='#CBD5E0'">
                    Limpar Menu e Recomeçar
                </button>
            </div>

        </div>
    `;

    if (containerResultado) containerResultado.innerHTML = htmlCardapio;
}

/* ==========================================================================
   4. SISTEMA DE POP-UP DA RECEITA DETALHADA (MODAL VISUAL)
   ========================================================================== */
function abrirModalReceita(dadosCodificados) {
    // Decodifica os dados do card e transforma de volta no objeto original da receita
    const receita = JSON.parse(decodeURIComponent(dadosCodificados));

    // Constrói a lista de ingredientes em tópicos
    let htmlIngredientes = "";
    receita.ingredientes.forEach(function (ingrediente) {
        htmlIngredientes += `<li style="margin-bottom: 6px;">${ingrediente}</li>`;
    });

    // Constrói a lista numerada do passo a passo do preparo
    let htmlPreparo = "";
    receita.preparo.forEach(function (passo) {
        htmlPreparo += `<li style="margin-bottom: 10px; padding-left: 4px;">${passo}</li>`;
    });

    // Verifica se o container do modal já existe no HTML, senão cria um do zero
    let modal = document.getElementById('modal-receita-flutuante');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal-receita-flutuante';
        document.body.appendChild(modal);
    }

    // Estilização direta da janela de fundo (Fundo escuro transparente e fixo)
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(28, 35, 43, 0.6)'; 
    modal.style.backdropFilter = 'blur(4px)'; 
    modal.style.display = 'flex';
    modal.style.justifyContent = 'center';
    modal.style.alignItems = 'center';
    modal.style.zIndex = '10000';
    modal.style.padding = '20px';
    modal.style.overflowY = 'auto';
    modal.style.webkitOverflowScrolling = 'touch'; 


    // Injeta a estrutura interna da caixinha branca da receita (Agora com a nova sombra escura)
    modal.innerHTML = `
        <div class="animate-fade-in" style="background-color: #ffffff; width: 100%; max-width: 520px; max-height: 85vh; overflow-y: auto; padding: 30px; border-radius: 12px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.45); position: relative; font-family: 'Poppins', sans-serif;">
            
            <!-- Botão de fechar no topo superior direito (✕) -->
            <button onclick="fecharModalReceita()" style="position: absolute; top: 15px; right: 18px; background: none; border: none; font-size: 1.3rem; cursor: pointer; color: #A0AEC0; transition: color 0.1s;" onmouseover="this.style.color='var(--cor-principal)'" onmouseout="this.style.color='#A0AEC0'">✕</button>
            
            <!-- Título do Prato -->
            <h3 style="font-size: 1.35rem; color: var(--cor-principal); font-family: 'Capriola', sans-serif; margin-bottom: 4px; padding-right: 25px; line-height: 1.3;">${receita.titulo}</h3>
            <span class="badge-tempo" style="margin-bottom: 20px;">⏱️ Pronto em: ${receita.tempo} min</span>

            <!-- Bloco de Resumo Simples -->
            <div style="margin-bottom: 20px; background-color: var(--cor-fundo); padding: 12px; border-radius: 6px;">
                <p style="font-size: 0.85rem; color: var(--cor-texto-mutado); margin: 0; line-height: 1.5;">
                    <strong>Resumo do Rango:</strong> Um prato equilibrado, planejado sob medida para a categoria de dieta <em>"${receita.dieta}"</em> e livre das restrições marcadas no seu perfil.
                </p>
            </div>

            <!-- Seção de Ingredientes -->
            <div style="margin-bottom: 22px;">
                <strong style="font-size: 0.95rem; color: var(--cor-texto); display: block; margin-bottom: 6px;">🛒 Ingredientes Necessários:</strong>
                <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem; color: #4A5568; line-height: 1.5;">
                    ${htmlIngredientes}
                </ul>
            </div>

            <!-- Seção de Modo de Preparo -->
            <div style="margin-bottom: 5px;">
                <strong style="font-size: 0.95rem; color: var(--cor-texto); display: block; margin-bottom: 6px;">🍳 Modo de Preparo:</strong>
                <ol style="margin: 0; padding-left: 20px; font-size: 0.9rem; color: #4A5568; line-height: 1.6;">
                    ${htmlPreparo}
                </ol>
            </div>
            
            <!-- Botão de Fechar inferior -->
            <button onclick="fecharModalReceita()" style="width: 100%; margin-top: 25px; padding: 12px; background-color: var(--cor-principal); color: white; border: none; border-radius: 8px; font-weight: 600; font-size: 15px; cursor: pointer; transition: background-color 0.15s;" onmouseover="this.style.backgroundColor='var(--cor-destaque)'" onmouseout="this.style.backgroundColor='var(--cor-principal)'">Fechar Receita</button>
        </div>
    `;

    // Força o modal a ficar visível caso estivesse oculto
    modal.style.display = 'flex';
}

function fecharModalReceita() {
    const modal = document.getElementById('modal-receita-flutuante');
    if (modal) {
        modal.style.display = 'none';
    }
}
/* ==========================================================================
   5. FUNÇÃO AUXILIAR: LIMPAR RESULTADOS DO APLICATIVO
   ========================================================================== */
function limparResultadosNaTela() {
    console.log("🗑️ Resetando a área de resultados e limpando o formulário...");

    // 1. Apaga os cards de receitas e a lista de compras da tela
    if (containerResultado) {
        containerResultado.innerHTML = "";
    }

    // 2. Desmarca automaticamente todos os checkboxes e selects do formulário HTML
    const formularioOriginal = document.getElementById('formulario-cardapio');
    if (formularioOriginal) {
        formularioOriginal.reset();
    }
}
