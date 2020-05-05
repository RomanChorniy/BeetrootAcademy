// ДОМАШНЯ РОБОТА.

// 1. Создать HTML - страницу для отображения / редактирования текста.При открытии страницы 
// текст отображается с помощью тега div.При нажатии Ctrl + E, вместо div появляется textarea 
// с тем же текстом, который теперь можно редактировать.При нажатии Ctrl + , вместо textarea 
// появляется div с уже измененным текстом.Не забудьте выключить поведение по умолчанию для 
// этих сочетаний клавиш.
document.onkeydown = function (e) {
    switch (true) {
        // Перевірка на комбінацію клавіш і елемент DIV.
        case e.ctrlKey &&
            (e.keyCode == 69) &&
            (document.querySelector('#text').tagName == 'DIV'):
            e.preventDefault();
            const div = document.querySelector('#text');
            // Перетворення в textarea.
            div.outerHTML = `<textarea id="text">${div.innerText}</textarea>`;
            //Вставка курсору у кінець textarea.
            document.querySelector('#text').focus();
            document.querySelector('#text').selectionStart = document.querySelector('#text').value.length;
            break;
        // Перевірка на комбінацію клавіш і на елемент textarea.
        case e.ctrlKey &&
            (e.keyCode == 187) &&
            (document.querySelector('#text').tagName == 'TEXTAREA'):
            e.preventDefault();
            const textarea = document.querySelector('#text');
            // перетворення у div
            textarea.outerHTML = `<div id="text">${textarea.value}</div>`;
    }
}

// 2. Создать HTML - страницу с большой таблицей.При клике по заголовку колонки, необходимо
// отсортировать данные по этой колонке.Учтите, что числовые значения должны сортироваться как 
// числа, а не как строки.
let tableUser = document.querySelector('#bigTable');
let clicker = 0;

tableUser.addEventListener('click', {
    handleEvent(e) {
        if (e.target.tagName == 'TH') {
            clicker++
            sortTable(e.target.cellIndex);
        }
    }
});

function sortTable(kolon) {
    if (clicker % 2 == 0) {
        for (let i = 1; i < tableUser.rows.length; i++) {
            for (let j = i + 1; j < tableUser.rows.length; j++) {
                let a = +tableUser.rows[i].cells[kolon].innerText || tableUser.rows[i].cells[kolon].innerText;
                let b = +tableUser.rows[j].cells[kolon].innerText || tableUser.rows[j].cells[kolon].innerText;
                if (a < b) {
                    tableUser.rows[i].parentNode.insertBefore(tableUser.rows[j], tableUser.rows[i]);
                }
            }
        }
    }
    else {
        for (let i = 1; i < tableUser.rows.length; i++) {
            for (let j = i + 1; j < tableUser.rows.length; j++) {
                let a = +tableUser.rows[i].cells[kolon].innerText || tableUser.rows[i].cells[kolon].innerText;
                let b = +tableUser.rows[j].cells[kolon].innerText || tableUser.rows[j].cells[kolon].innerText;
                if (a > b) {
                    tableUser.rows[i].parentNode.insertBefore(tableUser.rows[j], tableUser.rows[i]);
                }
            }
        }
    }

}

// 3. Создать HTML - страницу с блоком текста в рамочке.Реализовать возможность изменять
// размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.



// textResize.addEventListener('mousedown', {
//     handleEvent(e) {
//         if (e.offsetX > (e.target.clientWidth - 7) && e.offsetY > (e.target.clientHeight - 7)) {
//             console.log('Popav');
//             document.addEventListener('mousemove', {
//                 resising(e) {
//                     console.log('Move');
//                     textResize.style.width = event.clientX - textResize.getBoundingClientRect().left + 'px'
//                     textResize.style.height = event.clientY - textResize.getBoundingClientRect().top + 'px'
//                 }
//             });
//             document.addEventListener('mouseup', {
//                 stop(e) {
//                     document.removeEventListener('mousemove', resising(e))
//                 }
//             });
//         }

//     }
// });

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const div = document.querySelector('#textResize');

function resize(event) {
    div.style.width = event.clientX - div.getBoundingClientRect().left + 'px'
    div.style.height = event.clientY - div.getBoundingClientRect().top + 'px'
}

function stopResize() {
    document.removeEventListener('mousemove', resize)
}

// div.addEventListener('mousedown', activeArea => {
//     document.addEventListener('mousemove', resize);

// });
div.addEventListener('mousedown', {
    activeArea(e) {
        return document.addEventListener('mousemove', resize);
    }
});
document.addEventListener('mouseup', stopResize);
