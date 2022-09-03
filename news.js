const categoryLoaded = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    const res = await fetch(url)
    const data = await res.json()
    displayCategory(data.data.news_category)
}

const displayCategory = categorys =>{
    console.log(categorys)
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


categoryLoaded();