/**
 * Convierte unidades entre metros, pulgadas, pies y yardas.
 *
 * @method cambioUnidades
 * @param {number} valor - Valor ingresado por el usuario.
 * @param {string} unidad - Unidad modificada por el usuario.
 * @return {void}
 */
let cambioUnidades = (valor, unidad) => {

    let metro;
    let pulgada;
    let pie;
    let yarda;

    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }

    if (isNaN(valor)) {

        alert("Se ingreso un valor invalido en " + unidad);

        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";

    } else if (unidad == "metro") {

        metro = valor;
        pulgada = valor * 39.3701;
        pie = valor * 3.28084;
        yarda = valor * 1.09361;

    } else if (unidad == "pulgada") {

        pulgada = valor;
        metro = valor * 0.0254;
        pie = valor * 0.08333;
        yarda = valor * 0.027778;

    } else if (unidad == "pie") {

        pie = valor;
        metro = valor * 0.3048;
        pulgada = valor * 12;
        yarda = valor * 0.333333;

    } else if (unidad == "yarda") {

        yarda = valor;
        metro = valor * 0.9144;
        pulgada = valor * 36;
        pie = valor * 3;
    }

    if (metro !== "") {
        metro = Math.round(metro * 100) / 100;
        pulgada = Math.round(pulgada * 100) / 100;
        pie = Math.round(pie * 100) / 100;
        yarda = Math.round(yarda * 100) / 100;
    }

    document.getElementById("metro").value = metro;
    document.getElementById("pulgada").value = pulgada;
    document.getElementById("pie").value = pie;
    document.getElementById("yarda").value = yarda;
};


/**
 * Convierte grados a radianes y radianes a grados.
 *
 * @method convertirGradosRadianes
 * @param {number} valor - Valor ingresado por el usuario.
 * @param {string} unidad - Campo modificado por el usuario.
 * @return {void}
 */
function convertirGradosRadianes(valor, unidad) {

    let grados = document.getElementById("grados");
    let radianes = document.getElementById("radianes");

    if (isNaN(valor)) {

        alert("Se ingreso un valor invalido");

        grados.value = "";
        radianes.value = "";

    } else if (unidad == "grados") {

        radianes.value = valor * Math.PI / 180;

    } else if (unidad == "radianes") {

        grados.value = valor * 180 / Math.PI;
    }
}


/**
 * Muestra u oculta el div dependiendo del radio button seleccionado.
 *
 * @method mostrarOcultarDiv
 * @param {string} opcion - Opcion seleccionada por el usuario.
 * @return {void}
 */
let mostrarOcultarDiv = (opcion) => {

    if (opcion === "val_mostrar") {

        document.getElementById("unDiv").style.display = "block";

    } else if (opcion === "val_ocultar") {

        document.getElementById("unDiv").style.display = "none";
    }
};


/**
 * Abre el dialog y muestra la informacion del producto seleccionado.
 *
 * @method abrirDialog
 * @param {number} indice - Posicion del producto en el array.
 * @return {void}
 */
let abrirDialog = (indice) => {

    let producto = productos[indice];

    let contenido = `
        <h2>${producto.nombre}</h2>

        <img
            src="https://ucc-tallerdesarrolloweb.github.io/filminas/images/ejercicios/${producto.imagen}"
            alt="${producto.nombre}"
        >

        <p>${producto.description}</p>

        <p>Categoria: ${producto.categoria}</p>

        <p>Marca: ${producto.marca}</p>

        <p>Precio: $${producto.precio}</p>
    `;

    document.getElementById("contenidoDialog").innerHTML = contenido;

    document.getElementById("dialogProducto").showModal();
};


/**
 * Cierra el dialog.
 *
 * @method cerrarDialog
 * @return {void}
 */
let cerrarDialog = () => {

    document.getElementById("dialogProducto").close();
};


/**
 * Realiza la suma de dos numeros.
 *
 * @method sumar
 * @return {void}
 */
let sumar = () => {

    let num1 = document.getElementById("nums1").value;
    let num2 = document.getElementById("nums2").value;

    num1 = Number(num1);
    num2 = Number(num2);

    let resultado = num1 + num2;

    document.getElementById("totalS").innerHTML = resultado;
};


/**
 * Realiza la resta de dos numeros.
 *
 * @method restar
 * @return {void}
 */
let restar = () => {

    let num1 = document.getElementById("numr1").value;
    let num2 = document.getElementById("numr2").value;

    num1 = Number(num1);
    num2 = Number(num2);

    let resultado = num1 - num2;

    document.getElementById("totalR").innerHTML = resultado;
};


/**
 * Realiza la multiplicacion de dos numeros.
 *
 * @method multiplicar
 * @return {void}
 */
let multiplicar = () => {

    let num1 = document.getElementById("numm1").value;
    let num2 = document.getElementById("numm2").value;

    num1 = Number(num1);
    num2 = Number(num2);

    let resultado = num1 * num2;

    document.getElementById("totalM").innerHTML = resultado;
};


/**
 * Realiza la division de dos numeros.
 *
 * @method dividir
 * @return {void}
 */
let dividir = () => {

    let num1 = document.getElementById("numd1").value;
    let num2 = document.getElementById("numd2").value;

    num1 = Number(num1);
    num2 = Number(num2);

    let resultado = num1 / num2;

    document.getElementById("totalD").innerHTML = resultado;
};


/**
 * Genera dinamicamente las tarjetas de productos.
 *
 * @method renderizarProductos
 * @return {void}
 */
let renderizarProductos = () => {

    let contenido = "";

    productos.forEach((producto, indice) => {

        contenido += `
            <div class="tarjeta">

                <img
                    src="https://ucc-tallerdesarrolloweb.github.io/filminas/images/ejercicios/${producto.imagen}"
                    alt="${producto.nombre}"
                >

                <h2>${producto.nombre}</h2>

                <p>Precio: $${producto.precio}</p>

                <button
                    type="button"
                    onclick="abrirDialog(${indice})"
                >
                    Ver detalle de Producto
                </button>

            </div>
        `;
    });

    document.getElementById("productos").innerHTML = contenido;
};