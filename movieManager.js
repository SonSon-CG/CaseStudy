let manager = new MovieManager();

function addMovieBtn() {
    let name = document.getElementById('movie-name').value;
    let tickets = parseInt(document.getElementById('ticket-quantity').value);
    let price = parseFloat(document.getElementById('ticket-price').value);
    let info = document.getElementById('movie-info').value;
    let poster = document.getElementById('movie-poster').value;
    manager.addMovie(name, tickets, price, info, poster);
}
