import { getData } from "../helpers/getData.js";
import { categories } from "../modules/categories.js";
import { cabezero } from "../modules/header.js";
import { printImage } from "../modules/printImage.js";

const containerw = document.getElementById("imagesPopularProducts");
const containerHistories = document.getElementById("containtMoreitems");
const header = document.getElementById("cabezera");
const categorias = document.getElementById("categories");

const url = "https://ebay2-mauricio.herokuapp.com/productos";

document.addEventListener('DOMContentLoaded', async() => {
    try {
        const data = await getData( url );
        printImage( data, containerw, containerHistories );
        categories(categorias);
        cabezero(header);
        const bag = document.getElementById("bag");
        bag.addEventListener("click", () => {
            location.href = "/pages/bag.html";
        })
    } catch (error) {
        
    }
})

document.addEventListener('click', async( {target} ) => {
    const data = await getData( url );
    data.forEach(element => {
        if( target.id == element.id ){
            localStorage.setItem("producto", JSON.stringify(element));
            location.href = "/pages/info.html"
        }
    });
})