// ДОМАШНЯ РОБОТА.

// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, 
// который содержит название продукта, необходимое количество и куплен или нет. 
// Написать несколько функций для работы с таким массивом.
let productList = [
    { name: 'Tomato', quantity: 2, status: true },
    { name: 'Potato', quantity: 10, status: false },
    { name: 'Beetroot', quantity: 3, status: true },
    { name: 'Cabbage', quantity: 2, status: true },
    { name: 'Carrot', quantity: 5, status: false }]
// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, 
// а потом – купленные.
function showNoBuyList(arr) {
    let noBuy = arr.slice().sort(function (a, b) {
        if (a.status > b.status) return 1;
        if (a.status < b.status) return -1;
    });
    return noBuy;
}

// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим
// в списке продуктом, необходимо увеличивать количество в существующей покупке, 
// а не добавлять новую.
function addProduct(productName, arr) {
    if (!arr.find(function (product) {
        if (product.name === productName) {
            product.quantity++;
            return product
        }
    }
    )
    )
        arr.push({ name: productName, quantity: 1, status: false });
}
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
function buyProduct(productName, arr) {
    arr.find(function (product) {
        if (product.name === productName) {
            product.status = true;
            return product
        }
    }
    )
}
// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из 
// названия товара, количества и цены за единицу товара. Написать следующие функции:
let shopChek = [
    { name: 'Pen', quantity: 2, price: 2.10 },
    { name: 'Pensil', quantity: 3, price: 0.50 },
    { name: 'Map', quantity: 1, price: 12.40 },
    { name: 'Book', quantity: 2, price: 60 },
    { name: 'Notebook', quantity: 5, price: 4.60 }]

// Распечатка чека на экран;
function showShopChek(array) {
    array.forEach(element => console.log(element));
}

// Подсчет общей суммы покупки;
function calcChekSum(array) {

    let arraySum = array.reduce((sum, current) => {
        current = current.quantity * current.price;
        return sum + current
    }, 0)

    return arraySum;
}
// Получение самой дорогой покупки в чеке;
function getBiggestPrice(array) {
    array.sort((a, b) => a.price - b.price)
    return array[array.length - 1]
}
// Подсчет средней стоимости одного товара в чеке.
function calcAverageCost(array) {
    return calcChekSum(array) / array.length;
}

// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). 
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение 
// стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с 
// помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми 
// стилями, перечисленными в массиве.
let cssStyleList = [
    { name: "color", value: 'red' },
    { name: "font-size", value: '26px' },
    { name: "text-align", value: 'center' },
    { name: "text-decoration", value: 'underline' }];
let textUser = "Some Text";


function addStyle(array, text) {
    // перетворюю масив у стрінг
    let cssStyleListString = [' style="']
    for (pos in array) {
        cssStyleListString += toStr(array[pos]);
    }
    cssStyleListString += '"';
    // розбиваю тест на елементи
    let textArr = "<p>" + text + "</p>";
    textArr = textArr.split('');
    // додаю стиль
    textArr.splice(2, 0, cssStyleListString);
    textArr = textArr.join('');
    // записую в html
    document.write(textArr);
}

function toStr(item) {
    return `${item.name}: ${item.value}; `
}

// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, 
// количества посадочных мест (от 10 до 20) и названия факультета, для которого она 
// предназначена. Написать несколько функций для работы с ним^
let auditoris = [
    { name: 'A', sits: 10, fac: 'IT' },
    { name: 'B', sits: 20, fac: 'Math' },
    { name: 'C', sits: 10, fac: 'Urist' }
]
// Вывод на экран всех аудиторий;
function showAuditois(obj) {
    obj.forEach(element => console.log(element))
}
// Вывод на экран аудиторий для указанного факультета;
let needFac = "Urist"
function showAudForFac(obj, text) {
    let objNew = obj.filter(item => item.fac === text);
    showAuditois(objNew);
}

// Вывод на экран только тех аудиторий, которые подходят для переданной группы. 
// Объект-группа состоит из названия, количества студентов и названия факультета;
let groupUser = { name: "UP-08-3", studentsQ: 9, fac: 'Urist' };
function showAudForFac(obj1, obj2) {
    let objNew = obj1.filter(function (item) {
        if (item.fac === obj2.fac && item.sits >= obj2.studentsQ) return item;
    });
    showAuditois(objNew);
}

// Функция сортировки аудиторий по количеству мест;
function sortBySits(obj) {
    obj.sort(function (a, b) {
        if (a.sits > b.sits) {
            return -1;
        }
        if (a.sits < b.sits) {
            return 1;
        }
        return 0;
    });
}
// Функция сортировки аудиторий по названию (по алфавиту).
function sortByName(obj) {
    obj.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });
}