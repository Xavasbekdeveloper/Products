export const Load = document.querySelector(".loading")


export function Loading(load) {
    let loading = ""
    for (let i = 0; i < load; i++) {
        loading += `
            <div class="loading__card">
                    <div class="loading__img"></div>
                <div class="loading__info">
                    <div class="loading__title"></div>
                    <div class="loading__title"></div>
                </div>
            </div>
        `
    }
    Load.innerHTML = loading
}
