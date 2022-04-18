import {rejects} from "assert";
import {log} from "util";

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


// let promise = new Promise((resolve, reject) => {
//     setTimeout((response) => {
//         if (response.httpStatus >= 200 && response.httpStatus < 400) {
//             resolve(response.data)
//         } else {
//             reject(response.error)
//         }
//
//     }, 2000, {httpStatus: 200, data: {userName: 'Yo', id: 'tytui678', status: 'active'}, error: {}})
// })
//0. Куда отправляем запрос
const requestURL = 'https://jsonplaceholder.typicode.com/users/1/posts'
// 1. Создаём новый XMLHttpRequest-объект
// let xhr = new XMLHttpRequest();
// //console.dir(xhr)
// // 2. Настраиваем его: GET-запрос по URL /article/.../load
// xhr.open('GET', requestURL);
// // 2.1. Обработка response (какой тип данных хотим получить)
// // xhr.onload = () => {
// //     console.log(xhr.response) //возвращается всегда строка по умолчанию
// //     console.log(typeof xhr.response) //возвращается всегда строка по умолчанию
// // }
//
// // 2.2. Чтобы получить нужный тип данных, обращаемся к методу responseType перед тем, как отослать запрос
// xhr.responseType = 'json'
// console.log(xhr.response)
// // 3. Отсылаем запрос
// xhr.send();
//
// // 4. Этот код сработает после того, как мы получим ответ сервера
// xhr.onload = function () {
//     if (xhr.status >= 400) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
//         alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
//     } else { // если всё прошло гладко, выводим результат
//         alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
//     }
// };
//
// xhr.onprogress = function (event) {
//     console.log(event)
//     if (event.lengthComputable) {
//         alert(`Получено ${event.loaded} из ${event.total} байт`);
//     } else {
//         alert(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
//     }
//
// };
// // Ошибка по неправильному URL (Network ошибки), т.е. не связанные с HTTP-статусами
// xhr.onerror = function () {
//     alert("Запрос не удался");
// };

// Чтобы взаимодействовать с промисами, а не с бесконечными колбэками,
// обернем все это в функцию, которая возвращает промис, весь асинхронный код обернем к промисе:
// function sendRequest(method: string, url: string, body : {name:string, age: number} | null = null) {
//     return new Promise((resolve, reject) => {
//         let xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.responseType = 'json'
//         //нужно явно указать, что мы отправляем данные, которые находятся в формате JSON
//         //установить Header, которые отправляются с запросом
//         xhr.setRequestHeader('Content-Type', 'application/json')
//         xhr.onload = function () {
//             if (xhr.status >= 400) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
//                 reject(xhr.response); // Например, 404: Not Found
//             } else { // если всё прошло гладко, вызываем метод resolve
//                 resolve(xhr.response); // response -- это ответ сервера
//             }
//         };
//         xhr.onerror = function () {
//             reject(xhr.response);
//         };
//         //отправлять нужно строку
//         xhr.send(JSON.stringify(body));
//     })
// }

// такие функции лежат под капотом в библиотеках, это что касается GET-запроса
// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// для POST-запроса нужно передавать body
let body = {
    name: 'Nastya',
    age: 24
}

// sendRequest('POST', requestURL, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//

// fetch возвращает promise
// по умолчанию GET-запрос
// function sendRequest(method: string, url: string, body: { name: string, age: number } | null = null) {
//     return fetch(url)
// }
// // получаем response некий объект, где есть body: ReadableStream
// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// function sendRequest(method: string, url: string, body: { name: string, age: number } | null = null) {
//     //можно сразу получить объект, используя метод json
//     return fetch(url).then(response => response.json())
// }
// получаем response некий объект, где есть body: ReadableStream
// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// POST
function sendRequest(method: string, url: string, body: { name: string, age: number } | null = null) {
    //нужно передать объект для POST fetch
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    })//обработка ошибок:
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            return response.json().then(error =>{
                const e = new Error('Что-то пошло не так')
                e.name = error
                throw e
            })
        })
}

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))


// just a plug
export default () => {
};