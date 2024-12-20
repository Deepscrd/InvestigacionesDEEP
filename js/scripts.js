/* Importar fuente Poppins desde Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

/* Estilos generales */
body {
    font-family: 'Poppins', sans-serif; /* Fuente moderna y bonita */
    background-color: #f8f9fa;
    color: #5e2785; /* Morado oscuro */
    margin: 0;
    padding: 0;
}

/* Botón para cambiar tema */
#toggle-theme {
    position: absolute;
    top: 15px;
    right: 20px;
    padding: 10px 15px;
    background-color: #5e2785; /* Morado oscuro */
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 0.9em;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

#toggle-theme:hover {
    background-color: #421a60; /* Morado más oscuro */
    transform: translateY(-3px);
}

/* Título principal */
header h1 {
    font-size: 2em;
    color: #d4a017; /* Amarillo oscuro */
    text-align: center;
    margin-bottom: 10px;
}

/* Estilos para el buscador */
#search-bar {
    width: 100%;
    max-width: 600px; /* Ajusta el ancho máximo */
    padding: 15px 20px;
    font-size: 1em;
    border: none; /* Sin borde */
    border-radius: 30px; /* Bordes redondeados */
    background-color: #f2f5fc; /* Fondo claro */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra ligera */
    outline: none;
    margin: 20px auto; /* Centra el buscador */
    display: block; /* Asegura que esté centrado */
    color: #6c757d; /* Color del texto */
    font-family: 'Poppins', sans-serif;
}

/* Efecto al enfocar el buscador */
#search-bar:focus {
    background-color: #e8effc; /* Fondo más claro al enfocar */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada */
    outline: none;
}

/* Contenedor principal */
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Ajusta automáticamente las columnas */
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

/* Tarjetas */
.card {
    display: flex;
    flex-direction: column; /* Cambia a columna en pantallas pequeñas */
    align-items: center;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Imagen dentro de la tarjeta */
.card-img {
    width: 100%; /* Asegura que ocupe todo el ancho en pantallas pequeñas */
    height: auto;
    max-width: 150px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 15px;
}

/* Contenido textual */
.card-content {
    flex: 1;
    text-align: center; /* Centra el texto en pantallas pequeñas */
}

.card-content h3 {
    font-size: 1.1em; /* Tamaño de letra reducido */
    font-weight: 600; /* Resalta el título */
    color: #5e2785; /* Morado oscuro */
    margin: 0 0 10px;
}

.card-content p {
    margin: 5px 0;
    font-size: 0.85em; /* Tamaño más pequeño */
    color: #4a4a4a; /* Gris oscuro */
}

.card-content p strong {
    color: #5e2785; /* Morado oscuro para los textos importantes */
    font-weight: 600;
}

/* Botón */
.link-button {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 15px;
    background-color: #d4a017; /* Amarillo oscuro */
    color: #fff;
    font-size: 0.85em; /* Tamaño más pequeño */
    font-weight: bold;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.link-button:hover {
    background-color: #b38914; /* Amarillo más oscuro */
}

/* Numeración en las tarjetas */
.card::before {
    content: attr(data-id);
    display: inline-block;
    background-color: #5e2785; /* Morado oscuro */
    color: white;
    font-weight: bold;
    font-size: 0.85em; /* Tamaño más pequeño */
    border-radius: 50%;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin-bottom: 10px; /* Ajusta el espacio */
}

/* Tema alto contraste */
body.high-contrast {
    background-color: #000; /* Fondo negro */
    color: #fff; /* Texto blanco */
}

body.high-contrast .card {
    background-color: #333;
    color: #fff;
}

body.high-contrast .card-content p strong {
    color: #f0c808; /* Amarillo alto contraste */
}

body.high-contrast .link-button {
    background-color: #f0c808; /* Amarillo alto contraste */
    color: #000;
}

body.high-contrast .link-button:hover {
    background-color: #d1a406; /* Amarillo más oscuro */
}

body.high-contrast #toggle-theme {
    background-color: #f0c808; /* Amarillo alto contraste */
    color: #000;
}

/* Ajustes responsivos */
@media (max-width: 768px) {
    header h1 {
        font-size: 1.5em;
        margin-bottom: 15px;
    }

    .grid-container {
        padding: 10px;
        gap: 15px;
    }

    .card {
        padding: 15px;
    }

    .card-content h3 {
        font-size: 1em; /* Reduce el tamaño del título */
    }

    .card-content p {
        font-size: 0.8em; /* Reduce el tamaño del texto */
    }

    .link-button {
        font-size: 0.8em; /* Reduce el tamaño del botón */
        padding: 7px 10px; /* Ajusta el padding */
    }

    .card-img {
        max-width: 120px; /* Reduce el tamaño máximo de la imagen */
        margin-bottom: 10px;
    }

    #search-bar {
        max-width: 100%; /* Asegura que ocupe todo el ancho disponible */
        padding: 10px;
    }
}
