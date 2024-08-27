const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "Você jogaria na seleção brasileira?",
        alternativas: [ A)Sim,jogaria na seleção,porque os jogadores parecem ser simpaticos e jogam muito bem.Tenho disposição e treino bastante.
            {         B)Acho legal entrar para a seleção,mas não tenho treino sulficiente para acompanhar os jogadores.
                texto: "sim,gostaria muito de jogar na seleção",
                afirmacao: "você tem um ótimo potencial para entrar na seleção. "
            },
            {
                texto: "Acho legal,mas não tenho treino suficiente",
                afirmacao: "porém vc não tem um fisico adequado  ."
            }
        ]
    },
    {
        enunciado: "Você prefere jogar vôlei ou futebol na seleção ?",
        alternativas: [ A)Prefiro entrar na seleção para jogar vôlei,admiro o esporte.
            {           B)Admiro o futebol,por isso jogaria para else.
                texto: "gostaria de jogar no time de vôlei",
                afirmacao: "prefiro vôlei do que futebol."
            },
            {
                texto: "admiro o futebol",
                afirmacao: "gosto mais de futebol do que de vôlei"
            }
        ]
    },
    {
        enunciado: "como o esporte interferiu em sua vida?",
        alternativas: [a)De modo positivo,pois pratico esports, como futebol,vôlei,para desenvolver habilidade
            {          b)Ajuda a ocupar a minha mente,ajudando saude fisica e mental
                texto: "de modo positivo",
                afirmacao: "ajuda na constancia e habilidade"
            },
            {
                texto: "ocupa minha mente",
                afirmacao: "a melhoria da saude."
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
