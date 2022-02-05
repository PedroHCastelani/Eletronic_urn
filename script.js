//Interface control
let seuVotoPara = document.querySelector('.d-1--1 span');
let cargo = document.querySelector('.d-1--2 span');
let desc = document.querySelector('.d-1--4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1--right');
let numeros = document.querySelector(".d-1--3");


//Variable environment control
let etapaAtual = 0;
let numero = '';
let votoBranco = false

function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHtml = ''; 
    numero = '';
    votoBranco = false;

    for(let i=0;i<etapa.numeros;i++) {    
        if(i === 0) {
            numeroHtml += '<div class="numero pisca"></div>';   
        } else {  
         numeroHtml += '<div class="numero"></div>';
        } 
    }

    seuVotoPara.style.display = "none";
    cargo.innerHTML = etapa.titulo;
    desc.innerHTML = '';
    aviso.style.display = "none";
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if (item.numero === numero) {
            return true;
        } else{
            return false; 
        }
    });

    if(candidato.length > 0) {
        candidato = candidato[0];
        seuVotoPara.style.display = "block";
        aviso.style.display = "block";
        desc.innerHTML = `Name: ${candidato.name}<br/>Partido: ${candidato.partido}`;

        let fotosHtml = '';
        for(let i in candidato.fotos) {
            fotosHtml += `<div class="d-1--image"><img src="images/${candidato.fotos[i].url}"/>${candidato.fotos[i].legenda}</div>`;
        }
        lateral.innerHTML = fotosHtml;
    }   else {
            seuVotoPara.style.display = 'block';
            aviso.style.display ='block';
            desc.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>';

    }
}

//Functions
function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero !== null) {
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca');
        } else{
            atualizaInterface();
        }   
    }    
}
function branco() {
        numero = '';
        votoBranco = true;

        seuVotoPara.style.display = "block";
        aviso.style.display = "block";
        numeros.innerHTML = '';
        lateral.innerHTML = '';
        desc.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';
    
    
}
function corrige() {
    comecarEtapa();
}
function confirma() {
    alert("Clicou em CONFIRMA")
}

comecarEtapa();