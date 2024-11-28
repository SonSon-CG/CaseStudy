class MovieManager {
    constructor() {
        this.movies = [];
        this.totalRevenue = 0;
    }
// 1111111111111
    // them phim moi
    addMovie(name, tickets, price, info, poster) {
        if (!name || tickets <= 0 || price <= 0 || !info || !poster) {
            alert("Vui long dien day du va chinh xac thong tin");
            this.resetInputs();
        } else {
//     them doi tuong phim moi vao mang movie, phan tu la doi tuong gom 5 thuoc tinh
            this.movies.push({name, tickets, price, info, poster});
//     hien thi
//     resetinput
            this.displayMovies();
            this.resetInputs();
        }
    }


    // show list phim
    displayMovies() {
        const movieList = document.getElementById('movie-list');
        movieList.innerHTML = '';
        this.movies.forEach((movie, index) => {
            const status = movie.tickets > 0 ? `Số vé còn lại: ${movie.tickets}` : `<span style="color:red;">Hết vé</span>`;
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                    <img src="${movie.poster}" style="width: 100px; height: auto;">
                    <div>
                        <strong>${movie.name}</strong> - ${status}, Giá vé: ${movie.price}đ
                        <p><em>${movie.info}</em></p>
                        <input type="number" id="ticket-quantity-${index}" placeholder="Số lượng" min="1" max="${movie.tickets}" ${movie.tickets === 0 ? 'disabled' : ''}>
                        <button onclick="manager.sellTickets(${index}, document.getElementById('ticket-quantity-${index}').value)">Bán vé</button>
                        <button onclick="manager.removeMovie(${index})">Xóa phim</button>
                    </div>
                `;
            listItem.style.display = "flex";
            movieList.appendChild(listItem);
        });
    }

    // xoa phim
    removeMovie(index){
        this.movies.splice(index, 1);
        this.displayMovies();

    }
    //                               XEM LAI

// ban ve
    sellTickets(index, ticketsToSell){
        const movie = this.movies[index];
        if (ticketsToSell <= 0 || ticketsToSell > movie.tickets) {
            alert(`Vui lòng nhập số lượng vé hợp lệ (1-${movie.tickets}).`);
        }else{
        var totalSale = ticketsToSell * movie.price;
        movie.tickets -= ticketsToSell;
        this.totalRevenue += totalSale;


        alert(`Đã bán ${ticketsToSell} vé cho phim "${movie.name}". Doanh thu: ${totalSale}đ`);
        this.displayMovies();
    }
}
    // show tong doanh thu
    // them lich su ban

    // reset input
    resetInputs() {
        document.getElementById('movie-name').value = '';
        document.getElementById('ticket-quantity').value = '';
        document.getElementById('ticket-price').value = '';
        document.getElementById('movie-info').value = '';
        document.getElementById('movie-poster').value = '';
    }
    // san su kien vao nut " them phim"
}
let manager = new MovieManager();

function addMovieBtn(){
    let name = document.getElementById('movie-name').value;
    let tickets = parseInt(document.getElementById('ticket-quantity').value);
    let price = parseFloat(document.getElementById('ticket-price').value);
    let info = document.getElementById('movie-info').value;
    let poster = document.getElementById('movie-poster').value;
    manager.addMovie(name, tickets, price, info, poster);
}


