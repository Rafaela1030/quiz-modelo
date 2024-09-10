const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "Você jogaria na seleção brasileira?",
        alternativas: [
            {         
                texto: "Sim,jogaria na seleção,poque os jogadores parecem ser simpaticos e jogam muito bem. Tenho disposição e treino bastante.",
                afirmacao: "Você tem um ótimo  potencial para entrar na seleção. "
            },
            {
                texto: "Acho legal entrar para a seleção, mas nao tenho treino sulficiente para acompanhar os jogadores",
                afirmacao: "Porém vc não tem um fisico adequado  ."
            }
        ]
    },
    {
        enunciado: "Você prefere jogar vôlei ou futebol na seleção ?",
        alternativas: [
            {         
                texto: "Prefiro entrar na seleção para jogar vôlei,admiro o esporte.",
                afirmacao: "Você prefire vôlei do que futebol."
            },
            {
                texto: "Admiro o futebol,por isso jogaria para ele",
                afirmacao: "Você prefire futebol do que vôlei."
            }
        ]
    },
    {
        enunciado: "Como o esporte interferiu em sua vida?",
        alternativas: [
            {          
                texto: "De modo positivo,pois pratico esports, como futebol,vôlei,para desenvolver habilidade",
                afirmacao: "O esporte ajudou na constancia e habilidade"
            },
            {
                texto: "Ajuda a ocupar a minha mente,ajudando saude fisica e mental",
                afirmacao: "O esporte trouxe uma melhoria na saude."
            }
        ]
    },
      
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = " Um ano depois...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
