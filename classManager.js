class MovieManager {
    constructor() {
        this.movies = [];
        this.totalRevenue = 0;
        this.addMovie(
            "Iron Man",
            75,
            120000,
            `Đạo diễn: Jon Favreau <br> Hãng sản xuất: Marvel Studios<br>Thời lượng: 126 phút<br>Thể loại: Hành động`,
            "https://upload.wikimedia.org/wikipedia/vi/7/70/Ironmanposter.JPG"
        );

        this.addMovie(
            "The Cabin in the Woods",
            125,
            110000,
            `Đạo diễn: Drew Goddard<br>Hãng sản xuất: Lionsgate<br>Thời lượng: 95 phút<br>Thể loại: Kinh dị`,
            "https://upload.wikimedia.org/wikipedia/en/8/84/The_Cabin_in_the_Woods_%282012%29_theatrical_poster.jpg"
        );
        this.displayMovies();
    }
    // them phim moi
    addMovie(name, tickets, price, info, poster) {
        if (!name || tickets <= 0 || price <= 0 || !info || !poster) {
            alert("Vui lòng điền đầy đủ vàc chính xác thông tin");
            this.resetInputs();
        } else {
//     them doi tuong phim moi vao mang movie, phan tu la doi tuong gom 5 thuoc tinh
            this.movies.push({name, tickets, price, info, poster});
            this.displayMovies();
            this.resetInputs();
        }
    }
    // show list phim/ cập nhật danh sách hiển thị
    displayMovies() {
        let movieList = document.getElementById('movie-list');
        movieList.innerHTML = '';
        this.movies.forEach((movie, index) => {
            const status = movie.tickets > 0 ? `Số vé còn lại: ${movie.tickets}` : `<span style="color:red;">Hết vé</span>`;
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                    <img src="${movie.poster}" style="width: 100px; height: auto;">
                    <div>
                        <strong>${movie.name}</strong> <br> ${status}, <br> Giá vé: ${movie.price}đ
                        <p><em>${movie.info}</em></p>
                        <input type="number" id="ticket-quantity-${index}" placeholder="Số lượng" min="1" max="${movie.tickets}" ${movie.tickets === 0 ? 'disabled' : ''}>
                        <button onclick="manager.sellTickets(${index}, document.getElementById('ticket-quantity-${index}').value)">Bán vé</button>
                        <button onclick="manager.removeMovie(${index})">Xóa phim</button>
                    </div>
                `;
            movieList.appendChild(listItem);
        }
        );
        document.getElementById("total-revenue").innerText = "Tổng doanh thu: " + this.totalRevenue + "đ";
    }

    removeMovie(index) {
        const movieName = this.movies[index].name;
        if (confirm(`Bạn có chắc muốn xóa phim "${movieName}" không?`)) {
            this.movies.splice(index, 1);
            this.displayMovies();
        }
    }

    sellTickets(index, ticketsToSell) {
        const movie = this.movies[index];
        if (ticketsToSell <= 0 || ticketsToSell > movie.tickets) {
            alert(`Vui lòng nhập số lượng vé hợp lệ (1-${movie.tickets}).`);
        } else {
            var totalSale = ticketsToSell * movie.price;
            movie.tickets -= ticketsToSell;
            this.totalRevenue += totalSale;

            this.addTicketHistory(movie.name, ticketsToSell, movie.price, totalSale);
            alert(`Đã bán ${ticketsToSell} vé cho phim "${movie.name}". Doanh thu: ${totalSale}đ`);
            this.displayMovies();
        }
    }

    addTicketHistory(name, quantity, price, total) {
        const historyTable = document.getElementById('ticket-history');
        const row = document.createElement('tr');
        const currentTime = new Date().toLocaleString();
        row.innerHTML = `
                <td>${name}</td>
                <td>${quantity}</td>
                <td>${price}đ</td>
                <td>${total}đ</td>
                <td>${currentTime}</td>
            `;
        historyTable.appendChild(row);
    }

    resetInputs() {
        document.getElementById('movie-name').value = '';
        document.getElementById('ticket-quantity').value = '';
        document.getElementById('ticket-price').value = '';
        document.getElementById('movie-info').value = '';
        document.getElementById('movie-poster').value = '';
    }
}
