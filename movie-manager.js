class MovieManager {
    constructor() {
        this.movies = [];
        this.totalRevenue = 0;
    }

    // them phim moi
    addMovie(name, tickets, price, info, poster) {
        if (!name || tickets <= 0 || price <= 0 || !info || !poster) {
            alert("Vui long dien day du va chinh xac thong tin");
        }
//     them doi tuong phim moi vao mang movie, phan tu la doi tuong gom 5 thuoc tinh
        this.movies.push({name, tickets, price, info, poster});
//     hien thi
//     resetinput
    }

    // xoa phim
    removeMovie(index){
        this.movies.splice(index, 1);
    }
    //                               XEM LAI

// ban ve
    sellTickets(index, ticketsToSell){
        const movie = this.movies[index];
        if (ticketsToSell <= 0 || ticketsToSell > movie.tickets) {
            alert(`Vui lòng nhập số lượng vé hợp lệ (1-${movie.tickets}).`);
        }
        var totalSale = ticketsToSell * movie.price;
        movie.tickets -= ticketsToSell;
        this.totalRevenue += totalSale;

    }

    // show list phim
    // show tong doanh thu
    // them lich su ban

    // reset input
    resetInputs() {
        document.getElementById('movie-name').value = " ";
        document.getElementById('ticket-quantity').value = " ";
        document.getElementById('ticket-price').value = " ";
        document.getElementById('movie-info').value = " ";
        document.getElementById('movie-poster').value = " ";
    }
    // san su kien vao nut " them phim"
}

let manager = new MovieManager();