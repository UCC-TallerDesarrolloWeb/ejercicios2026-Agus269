/**
 * Convierte unidades entre metros, pulgadas, pies y yardas.
 * Dependiendo del campo modificado, calcula los valores
 * correspondientes para las otras unidades.
 *
 * @method cambioUnidades
 * @param {number} valor - Valor ingresado por el usuario.
 * @param {string} unidad - Unidad modificada por el usuario.
 * @return {void} La funcion no retorna ningun valor.
 */
function cambioUnidades(valor, unidad) {

    let metro = document.getElementById("metro");
    let pulgada = document.getElementById("pulgada");
    let pie = document.getElementById("pie");
    let yarda = document.getElementById("yarda");

    if (isNaN(valor)) {

        alert("Se ingreso un valor invalido en " + unidad);

        metro.value = "";
        pulgada.value = "";
        pie.value = "";
        yarda.value = "";

    } else if (unidad == "metro") {

        pulgada.value = valor * 39.3701;
        pie.value = valor * 3.28084;
        yarda.value = valor * 1.09361;

    } else if (unidad == "pulgada") {

        metro.value = valor * 0.0254;
        pie.value = valor * 0.08333;
        yarda.value = valor * 0.027778;

    } else if (unidad == "pie") {

        metro.value = valor * 0.3048;
        pulgada.value = valor * 12;
        yarda.value = valor * 0.333333;

    } else if (unidad == "yarda") {

        metro.value = valor * 0.9144;
        pulgada.value = valor * 36;
        pie.value = valor * 3;
    }
}