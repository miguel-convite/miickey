
// ======================================
// 1. SELECIONANDO OS ELEMENTOS DO HTML
// ======================================

const telaInicial = document.getElementById("tela-inicial");

const telaVideo = document.getElementById("tela-video");

const telaConvite = document.getElementById("tela-convite");

const telaPresentes = document.getElementById("tela-presentes");


const botaoIniciar = document.getElementById("botao-iniciar");

const botaoPular = document.getElementById("botao-pular");

const botaoVoltarPresentes =
    document.getElementById("botao-voltar-presentes");


const video = document.getElementById("video-abertura");



// ======================================
// 2. CONFIGURAÇÕES DO CONVITE
// ======================================


// ---------- WHATSAPP ----------

// Número no formato:
// 55 + DDD + número
const telefoneWhatsApp = "5521967166292";


// Mensagem que será preenchida
// automaticamente no WhatsApp
const mensagemWhatsApp =
    "Olá! Confirmo minha presença no safari do Miguel. " +
    "Por favor, informe abaixo:\n\n" +
    "Nomes e idades das crianças:\n\n" +
    "Nomes dos adultos:\n\n" +
    "Nos vemos na savana!";



// ---------- GOOGLE MAPS ----------

// Link direto para o local da festa
const linkGoogleMaps =
    "https://www.google.com/maps/search/?api=1&query=Sal%C3%A3o%20Mel%20Festas&query_place_id=ChIJ12lllmALmQARHqJ5KUhmXkA";



// ======================================
// 3. FUNÇÃO PARA MOSTRAR O CONVITE
// ======================================

function mostrarConvite() {

    // Para o vídeo
    video.pause();

    // Esconde a tela do vídeo
    telaVideo.hidden = true;

    // Mostra o convite principal
    telaConvite.hidden = false;

}



// ======================================
// 4. INICIAR O CONVITE
// ======================================

botaoIniciar.addEventListener("click", function () {

    // Esconde a tela inicial
    telaInicial.hidden = true;

    // Mostra a tela do vídeo
    telaVideo.hidden = false;

    // Começa o vídeo do início
    video.currentTime = 0;


    // Tenta reproduzir o vídeo
    video.play().catch(function () {

        alert(
            "Não foi possível reproduzir o vídeo. Tente novamente."
        );

    });

});



// ======================================
// 5. PULAR A ABERTURA
// ======================================

botaoPular.addEventListener("click", function () {

    mostrarConvite();

});



// ======================================
// 6. QUANDO O VÍDEO TERMINAR
// ======================================

video.addEventListener("ended", function () {

    mostrarConvite();

});



// ======================================
// 7. CONFIRMAR PRESENÇA NO WHATSAPP
// ======================================

document
    .getElementById("botao-whatsapp")
    .addEventListener("click", function () {


        // Codifica a mensagem para poder
        // ser utilizada na URL
        const mensagem =
            encodeURIComponent(mensagemWhatsApp);


        // Monta o link do WhatsApp
        const linkWhatsApp =
            `https://wa.me/${telefoneWhatsApp}?text=${mensagem}`;


        // Abre o WhatsApp em uma nova aba/janela
        window.open(linkWhatsApp, "_blank");

    });



// ======================================
// 8. ABRIR SUGESTÕES DE PRESENTES
// ======================================

document
    .getElementById("botao-presentes")
    .addEventListener("click", function () {

        // Esconde o convite principal
        telaConvite.hidden = true;

        // Mostra a tela de presentes
        telaPresentes.hidden = false;

    });



// ======================================
// 9. VOLTAR DOS PRESENTES
// ======================================

botaoVoltarPresentes.addEventListener("click", function () {

    // Esconde a tela de presentes
    telaPresentes.hidden = true;

    // Mostra novamente o convite principal
    telaConvite.hidden = false;

});



// ======================================
// 10. ABRIR LOCALIZAÇÃO NO GOOGLE MAPS
// ======================================

document
    .getElementById("botao-localizacao")
    .addEventListener("click", function () {

        // Abre diretamente o local
        // informado no Google Maps
        window.open(linkGoogleMaps, "_blank");

    });
