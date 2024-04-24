const API_URL = "https://fakestoreapi.com";
const Product = document.querySelector(".product__container");

async function getProducts(api) {
    let paramp = new URLSearchParams(location.search)
    let id = paramp.get('id');
    let data = await fetch(`${api}/products/${id}`, {
        method: 'GET',
    });

    data
        .json()
        .then(res => mapProduct(res))
        .catch(err => console.log(err))
}

getProducts(API_URL)

function mapProduct(products) {
    Product.innerHTML = `
        <div class="product__img">
            <img src=${products.image} alt="img">
        </div>
        <div class="product__info">
            <h2 class="product__title">${products.title}</h2>
            <p class="product__desc">${products.description}</p>
            <div class="product__bottom">
                <p>Цена</p>
                <div>
                    <span class="product__price">${products.price} USD</span>
                    <span class="product__old-price">37000 USD</span>
                </div>
                <div>
                    <button class="product__btn">КОРЗИНКА</button>
                </div>
            </div>
        </div>

    `
}

