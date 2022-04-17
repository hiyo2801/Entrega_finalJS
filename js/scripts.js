console.log('Segunda pre entrega');

// Guardar Json Array imagenes
function imgJson() {

const img = [
    {cabeza:'<img src="img/cabeza.png">'},
    {brazos:'<img src="img/brazo.png">'},
    {pecho:'<img src="img/pecho.png">'},
    {espalda:'<img src="img/espalda.png">'},
    {piernas:'<img src="img/pierna.png">'},
    {pies:'<img src="img/pies.png">'},
    {manos:'<img src="img/manos.png">'}
];

const imgJson = JSON.stringify(img)
    localStorage.setItem("imgLocal", imgJson)
}
setTimeout(imgJson, 1500)


const btnReinicio = document.getElementById("reiniciar")
btnReinicio.addEventListener ("click", function reinicio() {
    sessionStorage.clear();
    location.reload();
    console.log('se limpiadorn los datos de usuario');
});
const btnSend = document.getElementById("send")
btnSend.addEventListener("click", (e) =>{
e.preventDefault();

if (campos.nombre && campos.numeros && campos.correo && campos.apellido){
    cliSend();
}
else {
    Swal.fire({
        title: `Por favor Completa todos los campos de Manera correcta`,
        width: 600,
        padding: '3em',
        color: '#E50505',
        confirmButtonColor: '#E50505',
        background: 'url(../img/swa1.png)',
        backdrop: `rgba(0,0,123,0.4)`
    })
}
});

function cliSend() {

           //objeto cliente
let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let años = document.getElementById("edad").value;

    const cliJson = [{
    nom:nombre,
    ape:apellido,
    añ:años
    }]

   // Saludo Cliente
const clienH2 = document.createElement("h2")
clienH2.setAttribute("class", "Cliente");
clienH2.innerHTML = `${nombre} ${apellido}`

const frmsuma = document.getElementById("frmsuma")
row.insertBefore (clienH2, frmsuma);


if (años >= 18) {
    const cliSesion = JSON.stringify(cliJson)
    sessionStorage.setItem("cJses", cliSesion)
    presup();
    imgJsontraer();
}
    else{
        Swal.fire({
            title: `Lo sentimos, ${nombre} ${apellido} pero aun no eres mayor de edad por lo que no podemos realizar
            un presupuesto para tí, de todas formas gracias por contactarte! !!"`,
            width: 600,
            padding: '3em',
            color: '#E50505',
            confirmButtonColor: '#E50505',
            background: 'url(../img/swa1.png)',
            backdrop: `rgba(0,0,123,0.4)`
        })
    }}


function presup() {

    $('.pop-up').removeClass('show');
    $('.pop-up-wrap').removeClass('show');

    const clidDejson = JSON.parse(sessionStorage.getItem("cJses"));
    console.log(clidDejson);

let nombre = clidDejson.map (x=> x.nom)
let apellido = clidDejson.map (x=> x.ape)
let años = parseInt(clidDejson.map (x=> x.añ))
    console.log( `Cliente: ${nombre} ${apellido} ${años} años`);

//variables Botones
const precioLineacm2 = 20;
const zonatext = document.getElementById('zonatext');
const tipoText = document.getElementById('tipoText');
const btnCabeza = document.getElementById("cabeza");
const btnBrazos = document.getElementById("brazos");
const btnPecho = document.getElementById("pecho");
const btnEspalda = document.getElementById("espalda");
const btnPiernas = document.getElementById("piernas");
const btnPies = document.getElementById("pies");
const btnManos = document.getElementById("manos");
const btnLinea = document.getElementById("linea");
const btnNegro = document.getElementById("negro");
const btnColor = document.getElementById("color");
const inlargo = document.getElementById ("cmLargo");
const inAncho = document.getElementById ("cmAncho");
const btnCalcular = document.getElementById("calcular")



// Funciones de Botones
btnCabeza.onclick = function (e){
    zonatext.textContent= 'Cabeza';
    Toastify({
        text: "Seleccionaste sección Cabeza",
        duration: 2000,
        position: "center",
        style: {
            background: "linear-gradient(to right, #4C0101, #B60909)",
        }
    }).showToast();
}
btnBrazos.onclick = function (e){
    zonatext.textContent= 'Brazos';
    Toastify({
        text: "Seleccionaste sección Brazos",
        duration: 2000,
        position: "center",
        style: {
            background: "linear-gradient(to right, #4C0101, #B60909)",
        }
    }).showToast();
}
btnPecho.onclick = function (e){
    zonatext.textContent= 'Pecho';
    Toastify({
        text: "Seleccionaste sección Pecho",
        duration: 2000,
        position: "center",
        style: {
            background: "linear-gradient(to right, #4C0101, #B60909)",
        }
    }).showToast();
}
btnEspalda.onclick = function (e){
    zonatext.textContent= 'Espalda';
    Toastify({
        text: "Seleccionaste sección Espalda",
        duration: 2000,
        position: "center",
        style: {
            background: "linear-gradient(to right, #4C0101, #B60909)",
        }
    }).showToast();
}
btnPiernas.onclick = function (e){
    zonatext.textContent= 'Piernas';
    Toastify({
        text: "Seleccionaste sección Piernas",
        duration: 2000,
        position: "center",
        style: {
            background: "linear-gradient(to right, #4C0101, #B60909)",
        }
    }).showToast();
}
btnPies.onclick = function (e){
    zonatext.textContent= 'Pies';
    Toastify({
        text: "Seleccionaste sección Pies",
        duration: 2000,
        position: "center",
        style: {
            background: "linear-gradient(to right, #4C0101, #B60909)",
        }
    }).showToast();
}

btnManos.onclick = function (e){
    zonatext.textContent= 'Manos';
    Toastify({
        text: "Seleccionaste sección Manos",
        duration: 2000,
        position: "center",
        style: {
            background: "linear-gradient(to right, #4C0101, #B60909)",
        }
    }).showToast();
}

btnLinea.onclick = function (e){
    tipoText.textContent= 'Linea';
    Toastify({
        text: "Seleccionaste Linea",
        duration: 2000,
        position: "center",
        style: {
            background: "linear-gradient(to right, #4C0101, #B60909)",
        }
    }).showToast();
}

btnNegro.onclick = function (e){
    tipoText.textContent= 'Negro';
    Toastify({
        text: "Seleccionaste escala de grises",
        duration: 2000,
        position: "center",
        style: {
            background: "linear-gradient(to right, #4C0101, #B60909)",
        }
    }).showToast();
}

btnColor.onclick = function (e){
    tipoText.textContent= 'Color';
    Toastify({
        text: "Seleccionaste Color",
        duration: 2000,
        position: "center",
        style: {
            background: "linear-gradient(to right, #4C0101, #B60909)",
        }
    }).showToast();
}

// Funcion calcular
btnCalcular.onclick = function(e){

    if(campos.cmLargo && campos.cmAncho){

    const largo = parseInt(inlargo.value);
    const ancho = parseInt(inAncho.value);
    const preciozona = [
        {zona: 'cabeza', linea: 20, grises: 40, color: 60},
        {zona: 'brazos', linea: 0, grises: 15, color: 25},
        {zona: 'pecho', linea: 0, grises: 15, color: 25},
        {zona: 'espalda', linea: 0, grises: 15, color: 25},
        {zona: 'piernas', linea: 0, grises: 15, color: 25},
        {zona: 'pies', linea: 10, grises: 30, color: 40},
        {zona: 'manos', linea: 10, grises: 30, color: 40}
    ];

    const zonatatoo = preciozona.filter(x => x.zona == zonatext.innerText.toLocaleLowerCase());
    console.log(zonatatoo);
    const incrementoLinea = parseInt(zonatatoo.map(x=> x.linea));
    const incrementoGrises = parseInt(zonatatoo.map(x=> x.grises));
    const incrementoColor = parseInt(zonatatoo.map(x=> x.color));

console.log('% incremento ' + incrementoLinea);
console.log('% incremento ' + incrementoGrises);
console.log('% incremento ' + incrementoColor);
const precioinIcial= parseInt(precioLineacm2) * (largo * ancho);
console.log('Precio inicia ' + precioinIcial);

function regresaPprecioTotal (x){
    return (n) => (x * (n));
}

const preciototal = regresaPprecioTotal(precioinIcial);
console.log('Precio tatuaje de líneas = $' + preciototal((incrementoLinea/100) + 1));

const lineaTotal = preciototal((incrementoLinea/100) + 1)
const grisesTotal = preciototal((incrementoGrises/100) + 1)
const colorTotal = preciototal((incrementoColor/100) + 1)

console.log('Precio linea $' + lineaTotal);
console.log('Precio grises $' + grisesTotal);
console.log('Precio color $' + colorTotal);

if (tipoText.innerText == 'Linea') {
    Swal.fire({
        title: `Muchas gracias por contactarte con nosotros ${nombre} ${apellido},
        el precio aproximado para tu tatuaje es de $ ${lineaTotal}`,
        width: 600,
        padding: '3em',
        color: '#E50505',
        confirmButtonColor: '#E50505',
        background: 'url(../img/swa1.png)',
        backdrop: `rgba(0,0,123,0.4)`
    })
}
else if (tipoText.innerText == 'Negro') {
    console.log('Precio Negro $ ' + grisesTotal);
    Swal.fire({
        title: `Muchas gracias por contactarte con nosotros ${nombre} ${apellido},
        el precio aproximado para tu tatuaje es de $ ${grisesTotal}`,
        width: 600,
        padding: '3em',
        color: '#E50505',
        confirmButtonColor: '#E50505',
        background: 'url(../img/swa1.png)',
        backdrop: `rgba(0,0,123,0.4)`
    })
}

else if(tipoText.innerText == 'Color') {
    Swal.fire({
        title: `Muchas gracias por contactarte con nosotros ${nombre} ${apellido},
        el precio aproximado para tu tatuaje es de $ ${colorTotal}`,
        width: 600,
        padding: '3em',
        color: '#E50505',
        confirmButtonColor: '#E50505',
        background: 'url(../img/swa1.png)',
        backdrop: `rgba(0,0,123,0.4)`
    })
}

}

else {
    Swal.fire({
        title: `Por favor completa las Dimensiones de tu tatuaje`,
        width: 600,
        padding: '3em',
        color: '#E50505',
        confirmButtonColor: '#E50505',
        background: 'url(../img/swa1.png)',
        backdrop: `rgba(0,0,123,0.4)`
    })
}}}
