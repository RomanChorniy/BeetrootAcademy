// ДОМАШНЯ РОБОТА.

// 1. Создать страницу, которая выводит нумерованный список песен:
const playList = [
    { author: "LED ZEPPELIN", song: "STAIRWAY TO HEAVEN" },
    { author: "QUEEN", song: "BOHEMIAN RHAPSODY" },
    { author: "LYNYRD SKYNYRD", song: "FREE BIRD" },
    { author: "DEEP PURPLE", song: "SMOKE ON THE WATER" },
    { author: "JIMI HENDRIX", song: "ALL ALONG THE WATCHTOWER" },
    { author: "AC/DC", song: "BACK IN BLACK" },
    { author: "QUEEN", song: "WE WILL ROCK YOU" },
    { author: "METALLICA", song: "ENTER SANDMAN" }
];
let songList = document.createElement('ol');
document.body.append(songList);
for (let i = 0; i < playList.length; i++) {
    let newLi = document.createElement("li");
    newLi.innerText = `${playList[i].author} - ${playList[i].song}`;
    songList.append(newLi);
};

// 2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне
// должен быть текст и кнопка "Закрыть". Изначально модальное окно не отображается. 
// При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

//створюю і додаю кнопку.
const btnOpen = document.createElement('button');
document.body.append(btnOpen);
btnOpen.innerText = 'Відкрити';
btnOpen.setAttribute('onclick', 'openModal()');

// створюю і додаю мадальне вікно.
const modalbg = document.createElement('div');
document.body.append(modalbg);
const modalbgStyle = {
    display: 'none',
    width: '100vw',
    height: '100vh',
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    position: 'absolute',
    top: 0,
    left: 0,
}
Object.assign(modalbg.style, modalbgStyle);

const modalWind = document.createElement('div');
modalbg.append(modalWind);
const modalWindStyle = {
    maxWidth: '400px',
    backgroundColor: 'white',
    margin: '100px auto',
    padding: '10px',
}
Object.assign(modalWind.style, modalWindStyle);
modalWind.innerText = 'МОДАЛЬНЕ ВІКНО. Щоб закрити дане вікно натисніть на кнопку "Закрити".';

const btnClose = document.createElement('button');
modalWind.append(btnClose);
btnClose.innerText = 'Закрити';
btnClose.style.display = 'block';
btnClose.style.margin = '15px auto';
btnClose.setAttribute('onclick', 'closeModal()');

//Функція відображення модально вікна.
function openModal() {
    modalbg.style.display = 'block';
};
//Функція для закриття модального вікна.
function closeModal() {
    modalbg.style.display = 'none';
};

// 3. Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на
// следующий цвет.
function chengeColor() {
    let svitlo = document.body.querySelectorAll('.svitlo');
    //Шукаю виключене світло
    for (let i = 0; i < svitlo.length; i++) {
        if (svitlo[i].style.backgroundColor === '') {
            svitlo[i].style.backgroundColor = svitlo[i].classList[1];
            break;
        }
        // Якщо знайдене світло включене, тоді воно стане білим.
        else {
            if (i != 2) svitlo[i].style.backgroundColor = 'white';
            //Якщо знайдене світло останє, то всі світла скидають кольори, а перше стає
            //червоним.
            else {
                for (let j = 0; j < svitlo.length; j++) {
                    svitlo[j].style.backgroundColor = '';
                    svitlo[0].style.backgroundColor = svitlo[0].classList[1];
                }
            }
        }
    }
}