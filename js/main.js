import { Load, Loading } from "./loading.js";
Loading(4)

const cards = document.querySelector(".products__cards");
const moreBtn = document.querySelector(".more__btn");
const API_URL = "https://fakestoreapi.com";
let limitCard = 4
let count = 1

async function getProduct(api) {
    let data = await fetch(`${api}/products?limit=${limitCard * count}`, {
        method: "GET",
    })

    data
        .json()
        .then(res => mapProducts(res))
        .catch(err => console.log(err))
        .finally(() => {
            moreBtn.innerHTML = "See more"
            moreBtn.removeAttribute("disabled")
            Load.style.display = "none"
        })

}

getProduct(API_URL)

function mapProducts(products) {
    let card = ""

    products.forEach(product => {
        card += `
            <div class="products__card">
                <div class="products__card__img">
                    <img class="card-img" data-id="${product.id}" src=${product.image} alt="img">
                </div>

                <div class="products__card__btns">
                    <button class="products__card__btns-done">
                        <img src="./images/Frame (2).svg" alt="img">
                        В наличии
                    </button>
                    <button class="products__card__btns-gift">
                        <img src="./images/gift 1.svg" alt="img">
                        Подарок
                    </button>
                </div>

                <div class="products__card__sale">
                    <button>SALE</button>
                </div>

                <div class="products__card__info">
                    <div class="products__card__info-reyting">
                        <img src="./images/рейтинг.svg" alt="img">
                        <p>(12) отзывов</p>
                    </div>
                    <h3 class="products__card__title">${product.title}</h3>
                    <div class="products__card__price-box">
                        <span class="products__card__price">${product.price} USD</span>
                        <span class="products__card__old-price">39 000 USD</span>
                    </div>
                </div>
            </div>  
        `
    })

    cards.innerHTML = card
}

moreBtn.addEventListener('click', () => {
    count++
    moreBtn.innerHTML = "Loading..."
    getProduct(API_URL)
    moreBtn.setAttribute("disabled", true)

})


cards.addEventListener('click', (e) => {
    if (e.target.className === "card-img") {
        let id = e.target.dataset.id
        window.open(`./pages/products.html?id=${id}`, "_self")
    }
})