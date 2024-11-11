// Variáveis de controle
let isPlaying = false;  // Estado da música (tocando ou pausado)
let currentSongIndex = 0;  // Índice da música atual (para controle de próxima e anterior)
let songsPlayed = 0;  // Contador de músicas tocadas

// Lista de músicas (com src de áudio, capa da música e nome)
const songs = [
    { title: "Don’t Matter To Me - Drake ft. Michael Jackson", src: 'musicas/Drake Michael Jackson.mp3', cover: 'fotos/Xh6H.gif' },
    { title: "Sacrifice The Weeknd", src: 'musicas/The Weeknd, Swedish House Mafia - Sacrifice.mp3', cover: 'fotos/the-weeknd-sacrifice.gif' },
    { title: "Chris Stapleton - Cold", src: 'musicas/Chris Stapleton - Cold (CMA Awards 2021).mp3', cover: 'fotos/sad.gif' },
    { title: "The Weeknd - The Hills", src: 'musicas/The Weeknd - The Hills.mp3', cover: 'fotos/hills.gif' },
    { title: "The Weeknd - In The Night", src: 'musicas/The Weeknd - In The Night.mp3', cover: 'fotos/1GP7.gif' },
    { title: "Michael Jackson - Bilie Jean", src: 'musicas/BILLIE JEAN.mp3', cover: 'fotos/mj.jpg' },
    { title: "The Weeknd - Take My Breath", src: 'musicas/The Weeknd - Take My Breath.mp3', cover: 'fotos/sol.gif' },
    { title: "50 Cent feat. Justin Timberlake - Ayo Technology", src: 'musicas/50 Cent feat. Justin Timberlake - Ayo Technology.mp3', cover: 'fotos/red.jpg' },
    { title: "Phil Collins - In The Air Tonight", src: 'musicas/Phil Collins - In The Air Tonight.mp3', cover: 'fotos/ondas.gif' },
    { title: "Muddy Waters - Mannish Boy.mp3", src: 'musicas/Muddy Waters - Mannish Boy.mp3', cover: 'fotos/guitar-fire.gif' },
    { title: "Eagles - Hotel California.mp3", src: 'musicas/Eagles - Hotel California.mp3', cover: 'fotos/musica boa.gif' },
    { title: "Kool & The Gang - Celebration.mp3", src: 'musicas/Kool & The Gang - Celebration.mp3', cover: 'fotos/celebrar.gif' },
    { title: "Kool & The Gang - Get Down On It.mp3", src: 'musicas/Kool & The Gang - Get Down On It.mp3', cover: 'fotos/disc.gif' },
    { title: "James Brown - It's A Man's Man's Man's World.mp3", src: 'musicas/James Brown.mp3', cover: 'fotos/james.gif' },
    { title: "Whitney Houston - It Not Right But Its Okay", src: 'musicas/Whitney Houston - It Not Right But Its Okay.mp3', cover: 'fotos/bass.gif' },
    { title: "Earth, Wind & Fire - September.mp3", src: 'musicas/Earth, Wind & Fire - September.mp3', cover: 'fotos/vadame.gif' },
    { title: "Toto - Hold The Line.mp3", src: 'musicas/Toto - Hold The Line.mp3', cover: 'fotos/baixo.gif' },
    { title: "Everybody Wants To Rule The World.mp3", src: 'musicas/Everybody Wants To Rule The World.mp3', cover: 'fotos/city.webp' },
    { title: "Van Halen Jump", src: 'musicas/Van Halen Jump.mp3', cover: 'fotos/8Mw.gif' },
    { title: "Careless Whisper", src: 'musicas/George Michael - Careless Whisper.mp3', cover: 'fotos/whisper.jpg' },
    { title: "The Outfield - Your Love", src: 'musicas/The Outfield - Your Love.mp3', cover: 'fotos/piu.gif' },
    { title: "Bee Gees - Stayin Alive.mp3", src: 'musicas/Bee Gees - Stayin Alive.mp3', cover: 'fotos/gato.gif' },
    { title: "The Jacksons - Blame It On the Boogie", src: 'musicas/The Jacksons - Blame It On the Boogie.mp3', cover: 'fotos/boogie.gif' },
    { title: "Ain't No Mountain High Enough.mp3", src: 'musicas/Aint No Mountain High Enough.mp3', cover: 'fotos/natural.jpg' },
    { title: "Queen - Somebody To Love.mp3", src: 'musicas/Queen - Somebody To Love.mp3', cover: 'fotos/freddie.gif' },
    { title: "Boney M. - Rasputin", src: 'musicas/Boney M. - Rasputin.mp3', cover: 'fotos/demenor.gif' },
    { title: "Wendel Gama - Underneath the Stars", src: 'musicas/Wendel Gama - Underneath the Stars.mp3', cover: 'fotos/sacada.gif' },
    { title: "Kiss and Say Goodbye", src: 'musicas/The Manhattans - Kiss and Say Goodbye.mp3', cover: 'fotos/tome.gif' },
    { title: "Mint Condition", src: 'musicas/Mint Condition - What Kind.mp3', cover: 'fotos/piscada.gif' },
    { title: "Boyz II Men - End Of The Road.mp3", src: 'musicas/Boyz II Men - End Of The Road.mp3', cover: 'fotos/rua.gif' },
    { title: "Jermaine Jackson - Don't Take It Personal.mp3", src: 'musicas/Jermaine Jackson - Dont Take It Personal.mp3', cover: 'fotos/botas.gif' },
    { title: "Mariah Carey - We Belong Together", src: 'musicas/Mariah Carey - We Belong Together.mp3', cover: 'fotos/feliz.gif' },
    { title: "Whitney Houston - Run To You", src: 'musicas/Whitney Houston - Run To You.mp3', cover: 'fotos/surpreso.gif' },
    { title: "Brian McKnight - Back At One", src: 'musicas/Brian McKnight - Back At One.mp3', cover: 'fotos/dec.jfif' },
    { title: "Whitney Houston - I Have Nothing.mp3", src: 'musicas/Whitney Houston - I Have Nothing.mp3', cover: 'fotos/whitney.gif' },
    { title: "In The EndLinkin Park", src: 'musicas/In The EndLinkin Park.mp3', cover: 'fotos/final.jfif' },
    { title: "musica  Michael Jackson - Dont Walk Away", src: 'musicas/(A.I) Michael Jackson - Dont Walk Away.mp3', cover: 'fotos/grafico.gif' },
    { title: "Aerosmith - I Dont Want to Miss a Thing", src: 'musicas/Aerosmith - I Dont Want to Miss a Thing.mp3', cover: 'fotos/plant.jpg' },
    { title: "Extreme - More Than Words", src: 'musicas/Extreme - More Than Words.mp3', cover: 'fotos/no ar.jpeg' },
    { title: "Evanescence - Bring Me To Life", src: 'musicas/Evanescence - Bring Me To Life.mp3', cover: 'fotos/fundo2.gif' },





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
