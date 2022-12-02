// HEADER MENU

const urlHeader = 'https://api.themoviedb.org/3/movie/popular?api_key=49327861f43138fad2ab20921775f7c2&language=en-US&page=1'
const xhttpHeader = new XMLHttpRequest()
xhttpHeader.onload = function() {
    const response = this.responseText
    const res = JSON.parse(response)
    const data = res.results
    const template = data.map(element => {
        return `
            <div class="header-card">
                <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.title}" class="header-movie">
                <a href="">
                    <div class="header-card-content">
                        <div class="header-card-content-icon">
                            <div class="header-rating">
                                <img src="../public/assets/star.png" alt="Star" class="header-star">
                                <p class="header-rating-text">${(element.vote_average % 1) === 0 ? element.vote_average + '.0': element.vote_average}</p>
                            </div>
                            <p class="header-tahun">${element.release_date.split('-')[0]}</p>
                        </div>
                        <p class="header-judul">${element.title}</p>
                    </div>
                </a>
            </div>`
    })
    document.getElementById('header-menu').innerHTML = template
}
xhttpHeader.open('GET', urlHeader, true)
xhttpHeader.send()



// LATES

const urlLates = 'https://api.themoviedb.org/3/movie/latest?api_key=49327861f43138fad2ab20921775f7c2&language=en-US'
const xhttpLates = new XMLHttpRequest()
xhttpLates.onload = function() {
    const response = this.responseText
    const element = JSON.parse(response)
    const template = `
            <div class="article-movie">
                <img src="https://image.tmdb.org/t/p/w500${element.poster_path || '/xS3ZxllKQDQw55LzM0gOrQ5xnsd.jpg'}" alt="${element.title}" class="article-movie">
            </div>
            <div class="article-desc">
                <h1>${element.title || 'Nama Film Tidak Ada'}</h1>
                <div class="article-info">
                    <p>Status : ${element.status || '-'}</p>
                    <p>Tagline : ${element.tagline || '-'}</p>
                    <p>Rating : ${element.vote_average || '-'}</p>
                    <p>Tanggal Release : ${element.release_date || '-'}</p>
                    <p>Sinopsis : ${element.overwiew || '-'}</p>
                </div>
            </div>
        `
    document.getElementById('lates').innerHTML = template
}
xhttpLates.open('GET', urlLates, true)
xhttpLates.send()



// MAIN MENU

const urlMenu = 'https://api.themoviedb.org/3/movie/top_rated?api_key=49327861f43138fad2ab20921775f7c2&language=en-US&page=1'
const xhttpMenu = new XMLHttpRequest()
xhttpMenu.onload = function() {
    const response = this.responseText
    const res = JSON.parse(response)
    const data = res.results
    const template = data.map((element, index) => {
        if (index < 18) {
            return `
            <div class="main-card">
                <a href="">
                    <div class="main-card-title">
                        <div class="main-icons">
                            <div class="main-rating">
                                <img src="../public/assets/star.png" alt="Rating" class="main-star">
                                <p>${element.vote_average}</p>
                            </div>
                            <div class="main-tahun">
                            ${element.release_date.split('-')[0]}
                            </div>
                        </div>
                        <p class="main-judul">
                            ${element.title}
                        </p>
                    </div>
                </a>
                <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt=" ${element.title}" class="img-movie">
            </div>`
        } else {
            return ``
        }
    })
    document.getElementById('main-menu').innerHTML = template
}
xhttpMenu.open('GET', urlMenu, true)
xhttpMenu.send()



// ASIDE 1

const urlAside1 = 'https://api.themoviedb.org/3/movie/popular?api_key=49327861f43138fad2ab20921775f7c2&language=en-US&page=2'
const xhttpAside1 = new XMLHttpRequest()
xhttpAside1.onload = function() {
    const response = this.responseText
    const res = JSON.parse(response)
    const data = res.results
    const template = data.map((element, index) => {
        if (index < 18) {
            return `
                <div class="aside-card">
                    <a href="">
                        <div class="aside-card-title">
                            <div class="aside-icons">
                                <div class="aside-rating">
                                    <img src="../public/assets/star.png" alt="Rating" class="aside-star">
                                    <p>${element.vote_average}</p>
                                </div>
                                <div class="aside-tahun">
                                    ${element.release_date}
                                </div>
                            </div>
                            <div class="aside-judul">
                                ${element.title}
                            </div>
                        </div>
                    </a>
                    <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.title}" class="aside-movie">
                </div>`
        } else {
            return ``
        }
    })
    document.getElementById('terbaru1').innerHTML = template
}
xhttpAside1.open('GET', urlAside1, true)
xhttpAside1.send()



// ASIDE 2

const urlAside2 = 'https://api.themoviedb.org/3/movie/popular?api_key=49327861f43138fad2ab20921775f7c2&language=en-US&page=3'
const xhttpAside2 = new XMLHttpRequest()
xhttpAside2.onload = function() {
    const response = this.responseText
    const res = JSON.parse(response)
    const data = res.results
    const template = data.map((element, index) => {
        if (index < 18) {
            return `
            <div class="aside-card">
                <a href="">
                    <div class="aside-card-title">
                        <div class="aside-icons">
                            <div class="aside-rating">
                                <img src="../public/assets/star.png" alt="Rating" class="aside-star">
                                <p>${element.vote_average}</p>
                            </div>
                            <div class="aside-tahun">
                                ${element.release_date}
                            </div>
                        </div>
                        <div class="aside-judul">
                            ${element.title}
                        </div>
                    </div>
                </a>
                <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.title}" class="aside-movie">
            </div>`
        } else {
            return ``
        }
    })
    document.getElementById('terbaru2').innerHTML = template
}
xhttpAside2.open('GET', urlAside2, true)
xhttpAside2.send()



// MENU

const urlMenuBar = 'https://api.themoviedb.org/3/tv/popular?api_key=49327861f43138fad2ab20921775f7c2&language=en-US&page=1'
const xhttpMenuBar = new XMLHttpRequest()
xhttpMenuBar.onload = function() {
    const response = this.responseText
    const res = JSON.parse(response)
    const data = res.results
    const template = data.map((element, index) => {
        if (index < 18) {
            return `
                <div class="menu-card">
                    <div class="menu-card-image">
                        <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" alt="${element.name}">
                    </div>
                    <div class="menu-deskripsi">
                        <h1>${element.name}</h1>
                        <p>Rating : ${element.vote_average}</p>
                        <p>Popularity : ${element.popularity}</p>
                        <p>Pertama Siaran : ${element.first_air_date}</p>
                    </div>
                </div>
            </div>`
        } else {
            return ``
        }
    })
    document.getElementById('menuContent').innerHTML = template
}
xhttpMenuBar.open('GET', urlMenuBar, true)
xhttpMenuBar.send()