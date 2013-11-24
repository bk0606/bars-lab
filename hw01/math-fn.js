"use strict";
/**
 * Результатом выполнения этих заданий будет набор некоторых математических функций.
 */


/**
 * Задание 0. Создать функцию multiply, перемножающаю два числа,
 * переданных в качестве аргументов. Если переданные аргументы не являются
 * конечными числами, выбрасывать ошибку "Invalid arguments"
 * (используйте throw new Error("Invalid arguments")).
 *
 * @example
 * var result = multiply(1,2); // 2
 *
 * @param {Number} a
 * Первое число для перемножения.
 *
 * @param {Number} b
 * Второе число для перемножения (необязательный параметр).
 *
 * @return {Number} Факториал числа.
 */

function multiply(a, b) {
    if (arguments.length < 2) {
        throw new Error("Invalid arguments");
    }

    if (!isNumber(a) || !isNumber(b)) {
        throw new Error("Invalid arguments");
    }

    return a*b;
}
function isNumber(x) {
    return (typeof x === "number") && !isNaN(x) && isFinite(x);
}


/**
 * Задание 1. Создать функцию factorial для подсчета факториала. Функция в качестве параметра
 * принимает целое число. Результатом выполнения будет факториал (произведение всех чисел,
 * начиная с 1 до самого числа включительно) этого числа.
 *
 * @example
 * var fact = factorial(5); // 1*2*3*4*5 = 60
 *
 * @param {Number} n
 * Число, для которого считается факториал.
 *
 * @return {Number} факториал числа.
 */
function factorial (n) {
    if (!isNumber(n)) { 
        throw new Error("Input is not a number"); 
    }
    return (n-1 === 0) ? n : factorial (n-1) * n;
}

/**
 * Задание 2. Создать функцию nfib для подсчета n-го числа Фибоначчи
 * (http://ru.wikipedia.org/wiki/Числа_Фибоначчи)
 * Функция в качестве параметра принимает целое число n.
 * Результатом выполнения будет число Фибоначчи, порядковый номер которого равен n.
 *
 * @example
 * var fith = nfib(5); // 3 (числа Фибоначчи - 0 1 1 2 3 5...)
 *
 * @param {Number} number
 * Порядковый номер.
 *
 * @return {Number} Число Фибоначчи.
 */
function nfib(number) {
    if (!number) {
        throw new Error("Uncorrect input");
    }
    if (!isNumber(number)) { 
        throw new Error("Input is not a number");
    }

    function findFibonacci(number, prev, curr) {
        return number === 2 ? curr : findFibonacci(number-1, curr, prev+curr);
    }

    return findFibonacci(number, 0, 1);
}