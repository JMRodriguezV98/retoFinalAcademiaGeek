export const printImageShop = ( data, container ) => {
    
    data.forEach(product => {
        const {  ubicacion, id, cantidad, nombre, descripcion, precio } = product;
        container.innerHTML += `<div class="containtImages">
                                        <img class="imgProductsShop" src="${ubicacion}" alt="imagen de producto">
                                        <p>${cantidad}</p>
                                        <p>${nombre}</p>
                                        <p>${descripcion}</p>
                                        <p>${precio}</p>
                                        <button id="${id}" class="botonEliminar">Eliminar producto</button>
                                    </div>`

    });
}