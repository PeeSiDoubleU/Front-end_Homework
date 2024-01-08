// 1. Дан объект

//  const car = {
//      model: 'tesla',
//      adress: {
//          country: {
//              city: {
//                  name: 'Boston',
//                  street: {
//                      name: 'pushkina',
//                      number: 2
//                  }
//              }
//          },
//          region: ['Iowa','Texas','California']
//      },
//      specs: {
//          price: {
//              low: 2000,
//              mid: 3000,
//              high: 5000
//          },
//          engine: {
//              power: 400,
//              lowPower: 100
//          }
//      }
//  };

// С помощью деструктуризации запишите в отдельны переменные: 
// 1.1 Название города в котором находится авто 
// 1.2 Четвертый регион из поля region (по умолчанию значение должно быть 'Arizona') 
// 1.3 Поле high, объекта price 
// 1.4 Из объекта specs записать поле fuelConsumption, которое по умолчанию должно являться объектом вида: { city: 12, mix: 10, country: 8 }


// 1.1 
// let {adress: {country: {city: {name}}}} = car;
// console.log(name);

// // 1.2
// let {adress: {region = 'Arizona'}} = car;
// console.log(region);

// // 1.3
// let {specs: {price: {high}}} = car;
// console.log(high);

// // 1.4
// let {specs: {fuelConsumption = {city: 12, mix: 10, country: 8}}} = car;
// console.log(fuelConsumption);


// let {specs: fuelConsumption = {city: 12, mix: 10, country: 8}} = car;
// console.log(fuelConsumption);





// 2. Даны 2 массива:
// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// 2.1 Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.
// 2.2 Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.
// 2.3 Создайте массив только из тех имен, которые совпадают в обоих массивах.
// 2.4 Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.



// 2.1 
// let userInput = prompt('Введите имя');

// for (let i = 0; i < people1.length; i++) {
//    if (userInput === people1[i]) {
//       people2.push(userInput);
//    }
// }



// 2.2 
// let userInput = prompt('Введите имя');

// for (let i = 0; i < people2.length; i++) {
//    if (userInput === people2[i]) {
//       people2.splice(i, 1)
//    }
// }
// console.log(people2);



// 2.3
// const newArr = [];

// for (let i = 0; i < people1.length; i++) {
//    for (let j = 0; j < people2.length; j++) {
//       if (people1[i] === people2[j]){
//          newArr.push(people1[i])
//       }
//    }
// }

// console.log(newArr);



// 2.4
// for (let i = 0; i < people1.length; i++) {
//    for (let j = 0; j < people2.length; j++) {
//       if (people1[i] === people2[j]) {
//          people2.splice(j, 1);
//       }
//    }
// }

// let resultArr = people1.concat(people2);
// console.log(resultArr);


// 3.
// Напишите функцию hyphenDestroyer(), которая преобразует
// строки вида «my-short-string» в «my short string».
// То есть, дефисы удаляются и вместо них появляются пробелы.
// Например:
// hyphenDestroyer ("background-color") === 'background сolor';
// hyphenDestroyer ("list-style-image") === 'list style image';
// hyphenDestroyer ("-webkit-transition") === 'webkit transition';


// function hyphenDestroyer (string) {
//    let split = string.split('-');
//    let result = split.join(' ')
//    return result;
// }

// let a = 'Andrei-Kolas-drug-olejika';
// let b = 'Vladislav-forward-TSMOKI-Minsk';
// let c = 'list-style-image';

// console.log(hyphenDestroyer(a));
// console.log(hyphenDestroyer(b));
// console.log(hyphenDestroyer(c));
// console.log(hyphenDestroyer('ABC-DCET-TEGD'));



// 4. Дан массив сonst arr = [2,5,7,12,62,23,88,153];
// выведите в консоль наибольшее ЧЕТНОЕ число из этого массива


// const arr = [2,5,7,12,62,23,88,153];
// let even = 0;
// let result = 0;

// for(let i = 0; i < arr.length; i++) {

//    if (arr[i] % 2 === 0) {
//       even = arr[i];
//    }

//    if (even > result) {
//     result = even 
//    }
// }

// console.log(result);



// 5. Валерчик и Олежик очень любят поиграть в контр страйк,
// Даны два объекта, в которых записано сколько раз побеждал каждый из них

// const valerchik = {
//     wins: 213,
//     loses: 123
// };

// const olejik = {
//     wins: 51,
//     loses: 64
// };


// cоздать функцию getPercentage() которая принимает любой объект из выше перечисленных и возвращает строку с процентом побед и поражений в  виде 
// 'процент побед 45%, процент поражений 55%'

// function getPercentage (obj1) {
//    sum = obj1.wins + obj1.loses;
//    let percentageWins = Math.round((obj1.wins / sum) * 100);
//    let percentageDefeats = Math.round((obj1.loses / sum) * 100);
//    let result = `Процент побед ${percentageWins}%. Процент поражений ${percentageDefeats}%`;
//    return result;
// }

// console.log(getPercentage(valerchik));
// console.log(getPercentage(olejik));



// 6. Написать функцию которая возвращает годовую оценку по любому предмету (функция должна принимать 4 числа)

// function getGrade (num1, num2, num3, num4) {
//    grade = Math.round((num1 + num2 + num3 + num4) / 4);
//    return grade;
// }

// console.log(getGrade(10, 2, 5 , 7));


// 7. Написать функцию, которая принимает случайный
// двумерный массив (разной длины). Функция
// возвращает тот массив сумма элементов которого
// наибольшая.

// function getSumOfArray ([[...arr1], [...arr2]]) {
//    let sumArr1 = 0;
//    let sumArr2 = 0;
//    let result = 0;
//    for (let i = 0; i < arr1.length; i++) {
//       sumArr1 += arr1[i];
//    }
//    for (let i = 0; i < arr2.length; i++) {
//       sumArr2 += arr2[i];
//    }

//    sumArr1 > sumArr2? result = sumArr1 : result = sumArr2;

//    return result;
// }

// console.log(getSumOfArray([[1,2,3,4,5,20], [5,5,5,5,5]]));