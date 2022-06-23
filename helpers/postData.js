const url = "https://ebay2-mauricio.herokuapp.com/carrito";

export const postData = async articulo => {
    try {
        await fetch( url, {
            method: 'POST',
            body: JSON.stringify(articulo),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        } );
    } catch (error) {
        console.log(error);
    }
}