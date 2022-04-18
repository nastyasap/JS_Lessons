console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
// function sum(a: number) {
//     function inner(b:number) {
//         let c = a + b
//         return c
//     }
//     return inner
// }

function sum(arg: number) {
    return function (arg2: number) {
        return arg + arg2
    }
}

console.log(sum(3)(6))

// let a = 100
//
// function someFunc(callback: Function) {
//     let a = 10
//     return callback(a)
// }
//
// let call = (arg: number) => {
//     console.log(a)
//     console.log(arg)
// }
//
// console.log(someFunc(call))


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// let globalScope = {
//     outerScope: null,
//     makeCounter: 'Function',
//     counter: 'Function'
//
// }
//
// function makeCounter() {
//     let fScope = {
//         outerScope: globalScope,
//         function: 'Function',
//         a: 2, // 0 -> 1 -> 2
//     }
//     let a = 0
//     return function () {
//         let innerFScope = {
//             outerScope: fScope
//         }
//         return a+=1
//     }
// }
//
// const counter = makeCounter()
// counter()
// counter()

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// function makeCounter(arg: number) {
//     return {
//         increase: function () {
//             return arg += 1
//         },
//         decrease: function () {
//             return arg -= 1
//         },
//         reset: function () {
//             return arg = 0
//         },
//         set: function (arg2: number) {
//             return arg = arg2
//         },
//     }
// }

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function superSum(n: number) {
    if (n <= 0) return (num: number) => 0
    if (n === 1) return (num: number) => num

    let outerParams: number[] = []

    function inner(...arg: number[]) {
        outerParams = [...outerParams, ...arg]
        if (outerParams.length >= n) {
            outerParams.length = n
            outerParams.reduce((acc, el) => acc + el)
        } else {
            return inner
        }
    }

    return inner
}

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};