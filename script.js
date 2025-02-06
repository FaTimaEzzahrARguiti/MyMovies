
const submit = document.getElementById('btn');
const listMovies = document.getElementById('listMovie');
let dataMovie = localStorage.getItem('movieDetails') ? JSON.parse(localStorage.getItem('movieDetails')) : [];

// Function to display movies in the list
function showData() {
    if (listMovies) {
        listMovies.innerHTML = '';
        dataMovie.forEach((movie, index) => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('card');
            movieElement.innerHTML = `
          <div class="card">
        <img src="${movie.image}" class="card-img-top" alt="" id="image">
        <div class="card-body">  
          <a href="detail.html" onclick="showdetail"><img src="/assets/icon/add-to-playlist.png" alt="" style="width: 40px; height: 40px;"></a>
          <a href="" ><img src="/assets/icon/pencil_7797848.png" alt="" style="width: 40px; height: 40px;"></a>
          <a href="#" onclick="supprimerFilm(${index})"><img src="/assets/icon/bin_10020353.png" alt="" style="width: 40px; height: 40px;"></a>
        </div>
        </div>
      </div>
            `;
            listMovies.appendChild(movieElement);
        });
    }
}


function showdetail(index) {
    const info = document.getElementById('info');
    if (info) {
        info.innerHTML = '';
        dataMovie.forEach((movie, index) => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('info');
            info.innerHTML = '';
            movieElement.innerHTML = `
         <div class="container">
        <div class="row row-cols-2">
            <img src="${movie.image}" alt=""  class="image">

          <div class="col"><h1>${movie.nom}</h1>
            <p>Genre: <span>${movie.genre}</span></p>
            <p>Réalisateur: <span>${movie.realisateur}</span></p>
            <p>Année de sortie: <span>${movie.annee}</span></p>
            <p>Histoire: <span>${movie.histoir}</span></p>
                <a href="/index.html"><button type="button" class="btn" id="btn">Retour</button></a>
            
    </div>
        </div>
      </div>
            `;
            info.appendChild(movieElement);
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('movie-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            const imgInput = document.getElementById("image");
            const reader = new FileReader();
            reader.onload = function (e) {
                let newMovie = {
                    nom: document.getElementById('nom').value,
                    histoir: document.getElementById('histoir').value,
                    realisateur: document.getElementById('realisateur').value,
                    annee: document.getElementById('annee').value,
                    genre: document.getElementById('genre').value,
                    image: e.target.result, // Base64 encoded image
                };
                dataMovie.push(newMovie);
                localStorage.setItem('movieDetails', JSON.stringify(dataMovie));
                showData();
                window.location.href = "index.html"; // Redirect to index.html
            };

            if (imgInput.files[0]) {
                reader.readAsDataURL(imgInput.files[0]);
            }
        });
    }

    // Call showData to display movies on page load
    showData();
});

// Fonction pour supprimer un film
function supprimerFilm(index) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce film ?')) {
        dataMovie.splice(index, 1);
        localStorage.setItem('movieDetails', JSON.stringify(dataMovie));
        showData();
    }
}