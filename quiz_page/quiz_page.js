const section = document.getElementById('section');
const button1 = document.getElementsByClassName('btn1');
const button2 = document.getElementsByClassName('btn2');
const button3 = document.getElementsByClassName('btn3');

const array = ['PIA00122', 'PIA00126', 'GSFC_20171208_Archive_e001435']
let id = []

array.forEach(element => {
    id = element
})

fetch(`https://images-api.nasa.gov/search?nasa_id=${id}`)
.then(response => response.json())
.then(data => {
    let img=document.createElement('img');
    img.src = data.collection.items[0].links[0].href;
    section.appendChild(img);
    console.log(data);
})
.catch(err => console.log(err));
