const section = document.getElementById('section');
const button1 = document.getElementsByClassName('btn')[0];
const button2 = document.getElementsByClassName('btn')[1];
const button3 = document.getElementsByClassName('btn')[2];
const img = document.querySelector('#img-quiz');
const counter = document.querySelector('#counter');

let questions = [
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

const qLen = questions.length

let points = 0

const verify = (status) => {
    if(status){
        points += 1;

        renderQuestion(getRandomIndex())
    }
}

const getRandomIndex = () => {
    return questions.length === 0 ? null : Math.floor(Math.random() * qLen);
};

const renderImage = (index) => {
    fetch(questions[index].image)
    .then(response => response.json())
    .then(data => {
        img.src = data.collection.items[0].links[0].href;
        console.log(data);
    })
    .catch(err => console.log(err));
}

const renderButtons = (index) => {
    questions[index].answers.map((item, i) => {
        const btn = document.getElementsByClassName('btn')[i];
        if(btn){
            btn.innerHTML=item.text
            btn.onclick = () => verify(item.correct)
        }
    })
}

const renderCounter = () => {
    counter.innerText = `${points}/${qLen}`
}

const start = () => {
    document.querySelector('#quiz-end').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
}

const finish = () => {
    document.querySelector('#quiz').style.display = 'none';
    renderCounter();
    document.querySelector('#quiz-end').style.display = 'grid';
    document.querySelector('footer').style.display = 'grid';
}

const renderQuestion = (index) => {
    renderCounter();
    if(index === null){
        finish();
    }else{
        start();
        renderImage(index);
        renderButtons(index);
        questions = questions.filter((_, i) => i !== index)
    }
}

renderQuestion(getRandomIndex())