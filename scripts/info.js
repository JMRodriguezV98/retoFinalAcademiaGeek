import { postData } from "../helpers/postData.js";
import { categories } from "../modules/categories.js";
import { cabezero } from "../modules/header.js"

const header = document.getElementById("cabezera");
const categorias = document.getElementById("categories");
const addBag = document.getElementById("addCar");

document.addEventListener('DOMContentLoaded', async() => {
    cabezero(header);
    categories(categorias);
    const goToBack = document.getElementById("logoEbay");
    let campoImage = document.getElementById("infoIMG");
    let campoDescription = document.getElementById("description");
    let campoCondicion = document.getElementById("condition");
    let campoPrecio = document.getElementById("price");

    let objetoInfo = JSON.parse(localStorage.getItem("producto"));
    let descripcion = objetoInfo.descripcion;
    let estado = objetoInfo.estado;
    let nombre = objetoInfo.nombe;
    let precio = objetoInfo.precio;
    let tipo = objetoInfo.tipo;
    let ubicacion = objetoInfo.ubicacion;
    campoImage.setAttribute("src", ubicacion);
    campoDescription.textContent = descripcion;
    campoCondicion.textContent = estado;
    campoPrecio.textContent = `$${precio}`;

    const bag = document.getElementById("bag");
    bag.addEventListener("click", () => {
        location.href = "/pages/bag.html";
    })

    goToBack.addEventListener("click", () => {
        location.href = "/index.html";
    });

    addBag.addEventListener('click', () => {
        
        const cantidad = document.getElementById("select").value;
        const articulo = {
            nombre,
            descripcion,
            estado,
            precio,
            tipo,
            ubicacion,
            cantidad
        }

        postData( articulo );

        Swal.fire(
            'Agregado al carrito con exito',
            'Verifica tus productos en la seccion de bolsa',
            'success'
        )

    });

})

