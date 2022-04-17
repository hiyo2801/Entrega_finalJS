console.log('Local storage');

if (sessionStorage.getItem ('cJses')) {

    $('.pop-up').removeClass('show');
    $('.pop-up-wrap').removeClass('show');

const clidDejson = JSON.parse(sessionStorage.getItem("cJses"));
console.log(clidDejson);

let nombre = clidDejson.map (x=> x.nom)
console.log(nombre);
let apellido = clidDejson.map (x=> x.ape)
console.log(apellido);
let años = parseInt(clidDejson.map (x=> x.añ))
console.log(años);
presup(nombre, años, apellido);
const clienH2 = document.createElement("h2")
clienH2.setAttribute("class", "Cliente");
clienH2.innerHTML = `${nombre} ${apellido}`

const frmsuma = document.getElementById("frmsuma")
row.insertBefore (clienH2, frmsuma);
imgJsontraer()
presup()
}
else{
    $(document).ready(function () {
        $('.pop-up').addClass('show');
        $('.pop-up-wrap').addClass('show');
        });
        }