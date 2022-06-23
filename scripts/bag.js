import { cabezero } from "../modules/header.js";
import { categories } from "../modules/categories.js";
import { printImageShop } from "../modules/printImageShop.js";
import { getData } from "../helpers/getData.js";

const header = document.getElementById("cabezera");
const categorias = document.getElementById("categories");
const url = "https://ebay2-mauricio.herokuapp.com/carrito";
const campoImg = document.getElementById("tienda");



document.addEventListener('DOMContentLoaded', async() => {
    try {
        const data = await getData( url );
        printImageShop(data,campoImg);
        categories(categorias);
        cabezero(header);

    } catch (error) {
        console.log(error);
    }

    const goToBack = document.getElementById("logoEbay");

    goToBack.addEventListener("click", () => {
        location.href = "/index.html";
    });

})