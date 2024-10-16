document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    window.location.href = 'home.html'; // Cambiar a la página de inicio
});

window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('id');

    if (movieId) {
        const movieTitles = {
            1: 'Película 1',
            2: 'Película 2',
            3: 'Película 3'
        };

        const movieDescriptions = {
            1: 'Descripción de la Película 1.',
            2: 'Descripción de la Película 2.',
            3: 'Descripción de la Película 3.'
        };

        document.getElementById('movieTitle').innerText = movieTitles[movieId];
        document.getElementById('movieDescription').innerText = movieDescriptions[movieId];
    }
};
