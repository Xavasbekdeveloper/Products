const cards = document.querySelector(".products__cards");
const API_URL = "https://fakestoreapi.com/products";

async function getProduct(api) {
    let data = await fetch(api, {
        method: "GET",
    })

    data
        .json()
        .then(res => mapProducts(res))
        .catch(err => console.log(err))

}

getProduct(API_URL)

function mapProducts(products) {
    let card = ""

    products.slice(0, 10).forEach(product => {
        card += `
          <div class="products__card">
                <div class="products__card__img">
                    <img src=${product.image} alt="img">
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