// Función para encriptar el texto
function encriptarTexto(texto) {
    const llavesEncriptado = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    return texto.replace(/[eioua]/g, function(matched) {
        return llavesEncriptado[matched];
    });
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    const llavesDesencriptado = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    return texto.replace(/enter|imes|ai|ober|ufat/g, function(matched) {
        return llavesDesencriptado[matched];
    });
}

// Agregar eventos a los botones
document.querySelector('.btn-encriptar').addEventListener('click', function() {
    const texto = document.querySelector('.text-area').value;
    const textoEncriptado = encriptarTexto(texto);
    mostrarResultado(textoEncriptado);
});

document.querySelector('.btn-desencriptar').addEventListener('click', function() {
    const texto = document.querySelector('.text-area').value;
    const textoDesencriptado = desencriptarTexto(texto);
    mostrarResultado(textoDesencriptado);
});

// Función para mostrar el resultado en la sección correspondiente
function mostrarResultado(texto) {
    const mensajeElement = document.querySelector('.mensaje');
    mensajeElement.innerHTML = `<p>${texto}</p>`;
}

// Agregar evento al botón de copiar
document.querySelector('.copiar').addEventListener('click', function() {
    const mensajeElement = document.querySelector('.mensaje p');
    if (mensajeElement) {
        navigator.clipboard.writeText(mensajeElement.textContent)
            .then(() => alert('Texto copiado al portapapeles'))
            .catch(err => console.error('Error al copiar el texto:', err));
    }
});
