// Variáveis de controle
let isPlaying = false;  // Estado da música (tocando ou pausado)
let currentSongIndex = 0;  // Índice da música atual (para controle de próxima e anterior)
let songsPlayed = 0;  // Contador de músicas tocadas

// Lista de músicas (com src de áudio, capa da música e nome)
const songs = [
    { title: "Don’t Matter To Me - Drake ft. Michael Jackson", src: 'musicas/Drake Michael Jackson.mp3', cover: 'fotos/Xh6H.gif' },
    { title: "Sacrifice The Weeknd", src: 'musicas/The Weeknd, Swedish House Mafia - Sacrifice.mp3', cover: 'fotos/sacrifice.gif' },
    { title: "Chris Stapleton - Cold", src: 'musicas/Chris Stapleton - Cold (CMA Awards 2021).mp3', cover: 'fotos/sad.gif' },
    { title: "The Weeknd - The Hills", src: 'musicas/The Weeknd - The Hills.mp3', cover: 'fotos/hills.gif' },
    { title: "The Weeknd - In The Night", src: 'musicas/The Weeknd - In The Night.mp3', cover: 'fotos/1GP7.gif' },
    { title: "Michael Jackson - Bilie Jean", src: 'musicas/BILLIE JEAN.mp3', cover: 'fotos/jean.gif' },
    { title: "The Weeknd - Take My Breath", src: 'musicas/The Weeknd - Take My Breath.mp3', cover: 'fotos/break.gif' },
    { title: "50 Cent feat. Justin Timberlake - Ayo Technology", src: 'musicas/50 Cent feat. Justin Timberlake - Ayo Technology.mp3', cover: 'fotos/j.gif' },
    { title: "Phil Collins - In The Air Tonight", src: 'musicas/Phil Collins - In The Air Tonight.mp3', cover: 'fotos/l.gif' },
    { title: "Muddy Waters - Mannish Boy.mp3", src: 'musicas/Muddy Waters - Mannish Boy.mp3', cover: 'fotos/guitar.gif' },
    { title: "Eagles - Hotel California.mp3", src: 'musicas/Eagles - Hotel California.mp3', cover: 'fotos/rapido.gif' },
    { title: "Kool & The Gang - Celebration.mp3", src: 'musicas/Kool & The Gang - Celebration.mp3', cover: 'fotos/celebrar.gif' },
    { title: "Kool & The Gang - Get Down On It.mp3", src: 'musicas/Kool & The Gang - Get Down On It.mp3', cover: 'fotos/disc.gif' },
    { title: "James Brown - It's A Man's Man's Man's World.mp3", src: 'musicas/James Brown.mp3', cover: 'fotos/cab.gif' },
    { title: "FIM DE TARDE", src: 'musicas/FIM DE TARDE -.mp3', cover: 'fotos/fim.gif' },
    { title: "Earth, Wind & Fire - September.mp3", src: 'musicas/Earth, Wind & Fire - September.mp3', cover: 'fotos/fundo1.jpeg' },
    { title: "Toto - Hold The Line.mp3", src: 'musicas/Toto - Hold The Line.mp3', cover: 'fotos/baixo.gif' },
    { title: "Everybody Wants To Rule The World.mp3", src: 'musicas/Everybody Wants To Rule The World.mp3', cover: 'fotos/luminus.gif' },
    { title: "Van Halen Jump", src: 'musicas/Van Halen Jump.mp3', cover: 'fotos/doido.gif' },
    { title: "Careless Whisper", src: 'musicas/George Michael - Careless Whisper.mp3', cover: 'fotos/sax.gif' },
    { title: "The Outfield - Your Love", src: 'musicas/The Outfield - Your Love.mp3', cover: 'fotos/piu.gif' },
    { title: "Bee Gees - Stayin Alive.mp3", src: 'musicas/Bee Gees - Stayin Alive.mp3', cover: 'fotos/vibe.gif' },
    { title: "The Jacksons - Blame It On the Boogie", src: 'musicas/The Jacksons - Blame It On the Boogie.mp3', cover: 'fotos/gato.gif' },
    { title: "Ain't No Mountain High Enough.mp3", src: 'musicas/Aint No Mountain High Enough.mp3', cover: 'fotos/triste.jpg' },
    { title: "Queen - Somebody To Love.mp3", src: 'musicas/Queen - Somebody To Love.mp3', cover: 'fotos/estrada.gif' },
    { title: "Boney M. - Rasputin", src: 'musicas/Boney M. - Rasputin.mp3', cover: 'fotos/demenor.gif' },
    { title: "Wendel Gama - Underneath the Stars", src: 'musicas/Wendel Gama - Underneath the Stars.mp3', cover: 'fotos/sacada.gif' },
    { title: "Kiss and Say Goodbye", src: 'musicas/The Manhattans - Kiss and Say Goodbye.mp3', cover: 'fotos/tome.gif' },
    { title: "Mint Condition", src: 'musicas/Mint Condition - What Kind.mp3', cover: 'fotos/piscada.gif' },
    { title: "Boyz II Men - End Of The Road.mp3", src: 'musicas/Boyz II Men - End Of The Road.mp3', cover: 'fotos/rua.gif' },
    { title: "Jermaine Jackson - Don't Take It Personal.mp3", src: 'musicas/Jermaine Jackson - Dont Take It Personal.mp3', cover: 'fotos/botas.gif' },
    { title: "The Jacksons - Blame It On the Boogie", src: 'musicas/The Jacksons - Blame It On the Boogie.mp3', cover: 'fotos/feliz.gif' }
];

// Elementos da interface
const playButton = document.getElementById('playButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const coverImage = document.getElementById('coverImage');
const songTitle = document.getElementById('songTitle');
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');
const volumeControl = document.getElementById('volume');



// Função para atualizar a música atual
function updateSong() {
    const currentSong = songs[currentSongIndex];

    // Atualizar a capa da música
    coverImage.src = currentSong.cover;

    // Atualizar o nome da música
    songTitle.textContent = currentSong.title;

    // Atualizar a fonte do áudio
    audioSource.src = currentSong.src;

    // Recarregar o áudio
    audioPlayer.load();

    // Tocar automaticamente se estiver pausado
    if (isPlaying) {
        audioPlayer.play();
    }

    // Atualizar o contador de músicas tocadas
    songsPlayed++;

    // Trocar o background a cada 3 músicas tocadas
    if (songsPlayed % 3 === 0) {
        changeBackground();
    }
}

// Função para avançar para a próxima música
function nextSong() {
    // Avançar para a próxima música (circular)
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSong();
}

// Função para voltar para a música anterior
function prevSong() {
    // Voltar para a música anterior (circular)
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateSong();
}

// Função para iniciar ou pausar a música
function togglePlayPause() {
    if (!isPlaying) {
        audioPlayer.play();
        playButton.textContent = 'Pausar';
        isPlaying = true;
    } else {
        audioPlayer.pause();
        playButton.textContent = 'Play';
        isPlaying = false;
    }
}

// Eventos de controle de música
playButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', nextSong);
prevButton.addEventListener('click', prevSong);

// Evento para quando a música terminar (para avançar automaticamente)
audioPlayer.addEventListener('ended', nextSong);

// Função para ajustar o volume
volumeControl.addEventListener('input', function () {
    audioPlayer.volume = volumeControl.value;
});

// Inicialização
updateSong();  // Carrega a primeira música ao iniciar
