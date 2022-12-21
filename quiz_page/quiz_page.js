const image = document.getElementsByClassName('img');
const button1 = document.getElementsByClassName('btn1');
const button2 = document.getElementsByClassName('btn2');
const button3 = document.getElementsByClassName('btn3');

const array = ['PIA00122', 'PIA00126', 'GSFC_20171208_Archive_e001435']
const id = array[0]

fetch(`https://images-api.nasa.gov/search?nasa_id=${id}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));