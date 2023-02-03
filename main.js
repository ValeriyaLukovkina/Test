// 1. Написать метод/функцию, который/которая на вход принимает массив городов. В качестве результата возвращает строку, где города разделены запятыми, а в конце стоит точка. 

let cities = ['Москва', 'Санкт-Петербург', 'Воронеж'];
let resultCities = cities.join(', ').trim() + '.';
console.log('Task 1:');
console.log(resultCities);

// 2. Написать метод/функцию, который/которая на вход принимает число (float), а на выходе получает число, округленное до пятерок. 

// 4 min

const roundNum = (num) => {
    let rest = num % 5
    if (rest === 0) {
        return num;
    } else if (rest >= 2.5) {
        return num - rest + 5;
    } else if (rest < 2.5) {
        return num - rest;
    } else {
        return 'Вы ввели не число';
    }
}

console.log('Task 2:');
console.log(roundNum(27));
console.log(roundNum(27.8));
console.log(roundNum(41.7));

// 3. Написать метод/функцию, который/которая на вход принимает число (int), а на выходе выдает слово “компьютер” в падеже, соответствующем указанному количеству. Например, «25 компьютеров», «41 компьютер», «1048 компьютеров».

// 9 мин

const addingEnds = (num) => {
    let arrWithEndA = [2, 3, 4];
    let arrWithEndAOv = [0, 5, 6, 7, 8, 9];
    let arrWithoutEnd = [1];
    let lastSym = Number(String(num).split('').at(-1));
    let phrase = `${num} компьютер`;

    if (arrWithEndA.includes(lastSym, 0)) {
        return `${phrase}а`;
    } else if (arrWithEndAOv.includes(lastSym, 0)) {
        return `${phrase}ов`;
    } else if (arrWithoutEnd.includes(lastSym, 0)) {
        return phrase;
    } else {
        'Error';
    }
}

console.log('Task 3:');
console.log(addingEnds(25));
console.log(addingEnds(41));
console.log(addingEnds(1048));
console.log(addingEnds(23));

// 4. Написать метод/функцию, который/которая на вход принимает целое число, а на выходе возвращает то, является ли число простым (не имеет делителей кроме 1 и самого себя).

// 5 min

const isSimpleNum = (num) => {
    let flag = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            flag = false;
            break;
        }
    }

    if (flag) {
        return `${num} простое число`;
    } else {
        return `${num} не простое число`;
    }
}

console.log('Task 4:');
console.log(isSimpleNum(7));
console.log(isSimpleNum(9));

// 5. Написать метод, который определяет, какие элементы присутствуют в двух экземплярах в каждом из массивов (= в двух и более, причем в каждом). На вход подаются два массива. На выходе массив с необходимыми совпадениями.

// 16 min

const arr = [7, 17, 1, 9, 1, 17, 56, 56, 23];
const arr2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];

const sortOneArr = (arr) => {
    return arr.filter((el, index, prev) => {
        return prev.indexOf(el, 0) !== index;
    })
}

const sortAllArr = (arr, arr2) => {
    let sortFirst = sortOneArr(arr);
    let sortSecond = sortOneArr(arr2);

    let sorted = sortSecond.filter(el => {
        if (sortFirst.includes(el)) {
            return el;
        } 
    })
    return Array.from(new Set(sorted)).sort((a, b) => a - b);
}

console.log('Task 5:');
console.log(sortAllArr(arr, arr2));

// 6. Написать метод, который в консоль выводит таблицу умножения. На вход метод получает число, до которого выводит таблицу умножения. В консоли должна появиться таблица. Например, если на вход пришло число 5, то получим:

function multiply(num) {
    let print = "";
    for (let i = 1; i <= num; i++) {
        let rows = [];
        for (let k = 1; k <= num; k++) {
            let max = k * num;
            let maxLength = String(max).length;
            let result = (i * k).toString().padStart(maxLength, ' ');
            if (k === 1) {
                result = result + ' ' + result;
            }
            rows.push(result);
        }
         if (i === 1) {
            print = print + rows.join(' ').replace("1", " ") + "\n";
        } 
        print = print + rows.join(' ') + "\n";
    }
    return print;
}

console.log('Task 6:');
console.log(multiply(8));