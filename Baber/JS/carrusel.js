let indice = 0;

function cambiarImagen(direccion) {
    const imagenes = document.querySelector('.imagenes');
    const totalImagenes = imagenes.children.length;

    indice += direccion;

    if (indice < 0) {
        indice = totalImagenes - 1;
    } else if (indice >= totalImagenes) {
        indice = 0;
    }

    imagenes.style.transform = `translateX(${-indice * 100}%)`;
}

