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
        <a onclick="newCategory('${category.category_id}')" class="nav-link active" aria-current="page" href="#">${category. category_name}</a>
        </li>
        `
        Navbar.appendChild(ul)
    })
}

const newCategory = async(news_id) =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${news_id}`
    const res = await fetch(url)
    const newsData = await res.json()
    newsCategoryDisplay(newsData.data);
}

const newsCategoryDisplay = newses =>{
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    newses.forEach(news =>{
        console.log(news)
        const divUser = document.createElement('div');
        divUser.classList.add('col');
        divUser.innerHTML = `
        <div class="card">
        <img src="${news.image_url
        }" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${news.title}</h5>
        <p class="card-text">${news.details.slice(0,80)+'....'}</p>
        </div>
        <div class="container-fluid d-flex">
        <div>
        <img src="${news.author.img}" alt="" width="50" height="50" class="d-inline-block align-text-top rounded-5">
        </div>
        <div class="mx-2">
        <h6>${news.author.name}</h6>
        <p>${news.author.published_date}</p>
        </div>
        <div>
        <i class="fa-solid fa-eye"></i>
        <span>${news.total_view+'Views'}</span>
        </div>
        </div>
        </div>
        `
        newsContainer.appendChild(divUser);
    })
}

categoryLoaded();