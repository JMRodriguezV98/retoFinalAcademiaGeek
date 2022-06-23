export const printImage = ( data, container, containerHistories ) => {
    
    data.forEach(product => {
        const {  ubicacion, id, nombe, precio } = product;
        if ( id <= 2 ){
            container.innerHTML += `<div class="containtImages">
                                        <img id="${id}" class="imgProducts" src="${ubicacion}" alt="imagen de producto">
                                    </div>`
        }else if ( id > 2 || id <= 7 ){
            containerHistories.innerHTML += `<div class="histories">
                                                <img id=${id} class="imagenRedonda" src="${ubicacion}" alt="imagen de producto">
                                                <div>
                                                    <p>${nombe}</p>
                                                    <p class="precio">$${precio}</p>
                                                </div>
                                            </div>`
        }

    });
}