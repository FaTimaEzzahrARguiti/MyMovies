const submit= document.getElementById('btn');
const listMovies = document.getElementById('listMovie');
let dataMovie= localStorage.getItem('movieDetails') ? JSON.parse(localStorage.getItem('movieDetails')) : [];


if (submit) {
    submit.addEventListener('click', function() {
let newmovie={
    nom: document.getElementById('nom')?.value,
    histoir: document.getElementById('histoir')?.value,
    realisateur: document.getElementById('realisateur')?.value,
    annee: document.getElementById('annee')?.value,
    genre: document.getElementById('genre')?.value,
    image: document.getElementById('image')?.value,
    url: document.getElementById('url')?.value,

}
        dataMovie.push(newmovie);
        localStorage.setItem('movieDetails', JSON.stringify(dataMovie));
        showData();
    });
}