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

const newCategory = async(category_id) =>{
    toogleSpinner(true);
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    const res = await fetch(url)
    const newsData = await res.json()
    newsCategoryDisplay(newsData.data);
}

const newsCategoryDisplay = (newses,categorys) =>{
    const countNews = document.getElementById('count');
    countNews.innerHTML = `<h3 class="text-dark">${newses.length} items found</h3>`
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    newses.forEach(news =>{
        // console.log(news)
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
        <h6>${news.author.name ? news.author.name : 'No data available'}</h6>
        <p>${news.author.published_date ? news.author.published_date : 'No data available'}</p>
        </div>
        <div>
        <i class="fa-solid fa-eye"></i>
        <span>${news.total_view ? news.total_view : 'Not found'} Views </span>
        </div>
        </div>
        <button onclick="loadNewsdetails('${news._id}')" href="#" class="btn btn-info text-light w-50 mx-auto my-2" data-bs-toggle="modal" data-bs-target="#newsDetailbtn">News Details</button>
        </div>
        `
        newsContainer.appendChild(divUser);

    })
    toogleSpinner(false);
    
}

const loadNewsdetails = async(news_id) =>{
    const url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    const res = await fetch(url)
    const detailData = await res.json()
    displayNewsdetails(detailData.data[0]);
}

const displayNewsdetails = news =>{
    const newsDetailbtnLabel = document.getElementById('newsDetailbtnLabel');
    newsDetailbtnLabel.innerText = `
    HeadLine:
    ${news.title}
    `
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
    <img class="img-fluid w-25" src="${news.author.img}">
    <p class="fw-bold">${news.author.name ? news.author.name : 'No data available'}</p>
    <p>${news.author.published_date ? news.author.published_date : 'No data available'}</p>
    <p <i class="fa-solid fa-eye"></i> ${news.total_view ? news.total_view : 'Not found'} Views</p>
    <p>${news.details}</p>
    `
}

const toogleSpinner = isLoading =>{
    const loaderSection = document.getElementById('loader');
    if (isLoading){
        loaderSection.classList.remove('d-none');
    }
    else{
        loaderSection.classList.add('d-none');
    }
}

categoryLoaded();
newCategory('08');