/**
 * Convierte unidades entre metros, pulgadas, pies y yardas.
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
 * Muestra u oculta un div.
 */
let mostrarOcultarDiv = (opcion) => {

    if (opcion === "val_mostrar") {

        document.getElementById("unDiv").style.display = "block";

    } else if (opcion === "val_ocultar") {

        document.getElementById("unDiv").style.display = "none";
    }
};


/**
 * Formatea un precio con separador de miles y dos decimales.
 */
let formatearPrecio = (precio) => {

    let precioFormateado = new Intl.NumberFormat(
        "es-AR",
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
    ).format(precio);

    return "$" + precioFormateado;
};


/**
 * Actualiza el contador de productos del carrito.
 */
let actualizarContadorCarrito = () => {

    let carrito =
        JSON.parse(localStorage.getItem("carrito")) || [];

    let contador =
        document.getElementById("contadorCarrito");

    if (contador !== null) {

        contador.innerHTML = carrito.length;
    }
};


/**
 * Abre el dialog del producto.
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

        <p>Precio: ${formatearPrecio(producto.precio)}</p>
    `;

    document.getElementById("contenidoDialog").innerHTML = contenido;

    document.getElementById("dialogProducto").showModal();
};


/**
 * Cierra el dialog.
 */
let cerrarDialog = () => {

    document.getElementById("dialogProducto").close();
};


/**
 * Realiza una suma.
 */
let sumar = () => {

    let num1 = Number(document.getElementById("nums1").value);
    let num2 = Number(document.getElementById("nums2").value);

    let resultado = num1 + num2;

    document.getElementById("totalS").innerHTML = resultado;
};


/**
 * Realiza una resta.
 */
let restar = () => {

    let num1 = Number(document.getElementById("numr1").value);
    let num2 = Number(document.getElementById("numr2").value);

    let resultado = num1 - num2;

    document.getElementById("totalR").innerHTML = resultado;
};


/**
 * Realiza una multiplicacion.
 */
let multiplicar = () => {

    let num1 = Number(document.getElementById("numm1").value);
    let num2 = Number(document.getElementById("numm2").value);

    let resultado = num1 * num2;

    document.getElementById("totalM").innerHTML = resultado;
};


/**
 * Realiza una division.
 */
let dividir = () => {

    let num1 = Number(document.getElementById("numd1").value);
    let num2 = Number(document.getElementById("numd2").value);

    let resultado = num1 / num2;

    document.getElementById("totalD").innerHTML = resultado;
};


/**
 * Renderiza los productos recibidos.
 */
let renderizarProductos = (listaProductos = productos) => {

    let contenido = "";

    listaProductos.forEach((producto) => {

        let indiceOriginal = productos.indexOf(producto);

        contenido += `
            <div class="tarjeta">

                <img
                    src="https://ucc-tallerdesarrolloweb.github.io/filminas/images/ejercicios/${producto.imagen}"
                    alt="${producto.nombre}"
                >

                <h2>${producto.nombre}</h2>

                <p>Precio: ${formatearPrecio(producto.precio)}</p>

                <button
                    type="button"
                    onclick="abrirDialog(${indiceOriginal})"
                >
                    Ver detalle de Producto
                </button>

                <button
                    type="button"
                    onclick="agregarAlCarrito(${indiceOriginal})"
                >
                    Agregar al carrito
                </button>

            </div>
        `;
    });

    document.getElementById("productos").innerHTML = contenido;

    actualizarContadorCarrito();
};


/**
 * Ordena una lista de productos.
 */
let ordenarProductos = (listaProductos) => {

    let orden =
        document.getElementById("orden").value;


    if (orden === "precioMenor") {

        listaProductos.sort((a, b) => {

            return a.precio - b.precio;
        });

    } else if (orden === "precioMayor") {

        listaProductos.sort((a, b) => {

            return b.precio - a.precio;
        });

    } else if (orden === "nombreAZ") {

        listaProductos.sort((a, b) => {

            return a.nombre.localeCompare(b.nombre);
        });

    } else if (orden === "nombreZA") {

        listaProductos.sort((a, b) => {

            return b.nombre.localeCompare(a.nombre);
        });
    }


    return listaProductos;
};


/**
 * Filtra los productos del catalogo.
 */
let filtrarProductos = () => {

    let palabra = document
        .getElementById("buscar")
        .value
        .toLowerCase();

    let minimoTexto =
        document.getElementById("minimo").value;

    let maximoTexto =
        document.getElementById("maximo").value;

    let marca =
        document.getElementById("marca").value;

    let protectores =
        document.getElementById("protectores").checked;

    let entrenamiento =
        document.getElementById("entrenamiento").checked;

    let dobok =
        document.getElementById("dobok").checked;


    let productosFiltrados = productos.filter((producto) => {

        let coincidePalabra =
            producto.nombre
                .toLowerCase()
                .includes(palabra);


        let coincideMinimo =
            minimoTexto === "" ||
            producto.precio >= Number(minimoTexto);


        let coincideMaximo =
            maximoTexto === "" ||
            producto.precio <= Number(maximoTexto);


        let coincideMarca =
            marca === "" ||
            producto.marca === marca;


        let hayCategoriaSeleccionada =
            protectores ||
            entrenamiento ||
            dobok;


        let coincideCategoria =
            !hayCategoriaSeleccionada ||
            (protectores &&
                producto.categoria === "Protectores") ||
            (entrenamiento &&
                producto.categoria === "Entrenamiento") ||
            (dobok &&
                producto.categoria === "Dobok");


        return (
            coincidePalabra &&
            coincideMinimo &&
            coincideMaximo &&
            coincideMarca &&
            coincideCategoria
        );
    });


    productosFiltrados =
        ordenarProductos(productosFiltrados);


    renderizarProductos(productosFiltrados);
};


/**
 * Agrega un producto al carrito.
 */
let agregarAlCarrito = (indice) => {

    let carrito =
        JSON.parse(localStorage.getItem("carrito")) || [];

    let producto = productos[indice];

    carrito.push(producto);

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    actualizarContadorCarrito();

    alert("Producto agregado al carrito");
};


/**
 * Muestra los productos del carrito, la cantidad y el total.
 */
let mostrarCarrito = () => {

    let carrito =
        JSON.parse(localStorage.getItem("carrito")) || [];

    let contenido = "";

    let productosAgrupados = [];

    let total = 0;


    carrito.forEach((producto) => {

        total += producto.precio;

        let encontrado = false;


        productosAgrupados.forEach((elemento) => {

            if (elemento.producto.nombre === producto.nombre) {

                elemento.cantidad++;

                encontrado = true;
            }
        });


        if (!encontrado) {

            productosAgrupados.push({
                producto: producto,
                cantidad: 1
            });
        }
    });


    productosAgrupados.forEach((elemento) => {

        let producto = elemento.producto;

        let cantidad = elemento.cantidad;

        let subtotal =
            producto.precio * cantidad;


        contenido += `
            <div class="tarjeta">

                <img
                    src="https://ucc-tallerdesarrolloweb.github.io/filminas/images/ejercicios/${producto.imagen}"
                    alt="${producto.nombre}"
                >

                <h2>${producto.nombre}</h2>

                <p>Precio: ${formatearPrecio(producto.precio)}</p>

                <p>Cantidad: ${cantidad}</p>

                <p>Subtotal: ${formatearPrecio(subtotal)}</p>

                <button
                    type="button"
                    onclick="eliminarProducto('${producto.nombre}')"
                >
                    Eliminar producto
                </button>

            </div>
        `;
    });


    document.getElementById("productosCarrito").innerHTML =
        contenido;


    document.getElementById("totalCarrito").innerHTML =
        "Total: " + formatearPrecio(total);


    actualizarContadorCarrito();
};


/**
 * Elimina una unidad de un producto del carrito.
 */
let eliminarProducto = (nombreProducto) => {

    let carrito =
        JSON.parse(localStorage.getItem("carrito")) || [];

    let indice = -1;


    carrito.forEach((producto, posicion) => {

        if (
            producto.nombre === nombreProducto &&
            indice === -1
        ) {

            indice = posicion;
        }
    });


    if (indice !== -1) {

        carrito.splice(indice, 1);
    }


    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );


    mostrarCarrito();
};


/**
 * Vacia el carrito.
 */
let vaciarCarrito = () => {

    localStorage.removeItem("carrito");

    mostrarCarrito();
};