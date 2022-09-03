const categoryLoaded = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url)
    const data = await res.json()
    displayCategory(data.data.news_category)
}

const displayCategory = categorys =>{
    // console.log(categorys)
    const Navbar = document.getElementById('Navbar');
    categorys.forEach(category =>{
        const ul = document.createElement('ul');
        ul.classList.add('list-unstyled','p-3')
        ul.innerHTML = `
        <li>
        <a class="nav-link active" aria-current="page" href="#">${category. category_name}</a>
        </li>
        `
        Navbar.appendChild(ul)
    })
}

const categoryNews = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/category/01`;
    const res = await fetch(url)
    const newsdata = await res.json()
    displayCategoryNews(newsdata.data)
}

const displayCategoryNews = newses =>{
    const cardContainer = document.getElementById('card-container');
    newses.forEach(news =>{
        console.log(news);
        const newsContainer = document.getElementById('news-container');
        const divUser = document.createElement('div');
        divUser.classList.add('col');
        divUser.innerHTML = `
        <div class="card h-100">
        <img src="${news.thumbnail_url}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        </div>
        `
        newsContainer.appendChild(divUser)
    })
    
}

categoryNews()

categoryLoaded();