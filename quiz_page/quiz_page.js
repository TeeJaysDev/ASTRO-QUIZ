const image = document.getElementsByClassName('img');
const button1 = document.getElementsByClassName('btn1');
const button2 = document.getElementsByClassName('btn2');
const button3 = document.getElementsByClassName('btn3');

const array = ['PIA00122', 'PIA00126', 'GSFC_20171208_Archive_e001435']

var id = array[Math.floor(Math.random()*array.length)];

const getSuggestions = async() => {
    const endpoint = `https://images-api.nasa.gov/search?nasa_id=${id}`
    try {
        const response = await fetch(endpoint, {cache: 'no-cache'})
        if (response.ok) {
            const jsonResponse = await response.json()
            renderResponse(jsonResponse)
        }
    } catch(error) {
        console.log(error)
    }
}