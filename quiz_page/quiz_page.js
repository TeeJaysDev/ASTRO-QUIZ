
const section = document.getElementById('section');
const button1 = document.getElementsByClassName('btn')[0];
const button2 = document.getElementsByClassName('btn')[1];
const button3 = document.getElementsByClassName('btn')[2];

const questions = [
    {
        image: 'https://images-api.nasa.gov/search?nasa_id=PIA00122',
        answers: [
            { text: 'Earth', correct: true },
            { text: 'Sun', correct: false },
            { text: 'Moon', correct: false },
        ]
    },
    {
        image: 'https://images-api.nasa.gov/search?nasa_id=PIA00126',
        answers: [
            { text: 'Mars', correct: false },
            { text: 'Moon', correct: true },
            { text: 'Black Hole', correct: false },
        ]
    },
    {
        image: 'https://images-api.nasa.gov/search?nasa_id=GSFC_20171208_Archive_e001435',
        answers: [
            { text: 'Neutron Star', correct: false },
            { text: 'Sun', correct: true },
            { text: 'Garghantua', correct: false },
        ]
    }
]

const max = questions.length;

const index = (integer) => {
    return Math.floor(Math.random() * integer);
};

fetch(questions[index(max)].image)
.then(response => response.json())
.then(data => {
    const img = document.createElement('img');
    img.src = data.collection.items[0].links[0].href;
    section.appendChild(img);
    console.log(data);
})
.catch(err => console.log(err));