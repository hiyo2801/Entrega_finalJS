console.log( 'Json');

function imgJsontraer() {

const imgDejson = JSON.parse(localStorage.getItem("imgLocal"));
console.log(imgDejson);

const cabezaModif = document.querySelector('#cabeza')
const brazosModif = document.querySelector('#brazos')
const pechoModif = document.querySelector('#pecho')
const espaldaModif = document.querySelector('#espalda')
const piernasModif = document.querySelector('#piernas')
const piesModif = document.querySelector('#pies')
const manosModif = document.querySelector('#manos')


cabezaModif.innerHTML =  imgDejson.map(x => x.cabeza)
brazosModif.innerHTML = imgDejson.map(x => x.brazos)
pechoModif.innerHTML = imgDejson.map(x => x.pecho)
espaldaModif.innerHTML = imgDejson.map(x => x.espalda)
piernasModif.innerHTML = imgDejson.map(x => x.piernas)
piesModif.innerHTML = imgDejson.map(x => x.pies)
manosModif.innerHTML = imgDejson.map(x => x.manos)

}

console.log( 'API img');

fetch('https://jsonplaceholder.typicode.com/photos')
    .then( response => response.json())
    .then(data => {
        const datos = data
        console.log(data[26]);
            const url = datos.filter(x => x.id == 26);
            console.log(url);
                const negro = url.map(x=> x.url)
                console.log(negro);

            const negroModif = document.querySelector('#negro')
            negroModif.innerHTML =   `<img src="${negro}"height ="80" width="89">`

})
