"use strict";
/**
 * Результатом выполнения этих заданий будет набор функций-утилит
 * для работы со строками.
 */

/**
 * Задание 1. Создать функцию format, позволяющую форматировать строку.
 * В качестве первого параметра принимается строка-шаблон в форамте 'blah-blah {0}, blah {1}...',
 * следом в функцию передаются параметры, общее количество которых должно соответствовать вставок {x}
 * в строке-шаблоне. Возможно здесь пригодятся регулярные выражения
 * см. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 * Если передаваемых параметров не хватает (см. пример ниже), то выбрасывается исключение
 * (для этого используйте след. код: throw new Error("Invalid arguments count")).
 *
 * @example
 * var txt = format('Hello, {0} {1}', 'JS', 'World'); // значение txt равно 'Hello, JS World'
 * var errorArgs = format('Hello, {0} {1}', 'JS'); // в консоли ошибка 'Error: Invalid arguments count'
 *
 * @param {String} sLine
 * Строка-шаблон.
 *
 * @param {Mixed...} sValues
 * Значения, которые заменят {0}, {1}... в строке-шаблоне.
 *
 * @return {String} отформатированная строка.
 */

function format(sLine, sValues) {
	var line = "",
        tokens = new Int8Array(arguments.length),
        index = 0, tokenCnt = 0, i = 0, len = 0;
	// chek input
    line = (typeof sLine == "string") && sLine;
    if (!line) {
        throw new Error("Uncorrect input");
    }
    // Find tokenCnt. Split helps to find the number of occur of a regexp
    tokenCnt = line.split(/[{]\s*\d+\s*[}]/).length-1;
    if (tokenCnt === 0) {
        return line;
    }
    if (tokenCnt !== arguments.length-1) {
        throw new Error("Invalid arguments count");
    }
    for (i = 1, len = arguments.length; i < len; i++) {
        tokens = /[{]\s*\d+\s*[}]/.exec(line);
        index = tokens[0].replace(/[{}]/g, "");
        line  = line.replace(tokens[0], arguments[+index+1]);
    };

    return line;
}


/**
 * Задание 2. Создать функцию repeat.
 *
 * @example
 * var txt = repeat('hello', 3, '-'); // 'hello-hello-hello'
 * var txt2 = repeat('hello', 3); // 'hellohellohello'
 *
 * @param {String} str
 * Строка, которая будет повторяться.
 *
 * @param {Number} count
 * Количество повторений.
 *
 * @param {String} [sSep]
 * Разделитель (необязательный параметр).
 *
 * @return {String} Строка с повотрениями.
 */

function repeat(str, count, sSep) {
	// first create empty array, then join it with divider - '|||',
	// then split str to array by divider and join str by @param sSep
    return new Array(count+1).join(str+"|||").split("|||", count).join(sSep || '');
}

/**
 * Задание 3. Создать функцию toGetParams, формирующую из
 * объекта строку параметров для GET-запроса.
 *
 * @example
 * var params = toGetParams({p1: 1, p2: 'hello'}); // p1=1&p2=hello
 *
 * @param {Object} obj
 * Объект, из которого будут формироваться строка параметров.
 *
 * @return {String} строка параметров.
 */

function toGetParams(obj) {
	var key = null,
		sGetRqst = "",
		amp = "";
	for (key in obj) {
		sGetRqst += amp + key + "=" + obj[key];
		amp = "&";
	}

    return sGetRqst; // JSON.stringify(obj).replace(/[{}'"]/g, '').replace(/[:]/g, '=').replace(/[,]/g, '&')
}

/**
 * Задание 4. Создать функцию formatUrl, формирующую из базового url и объекта
 * строку GET-запроса.
 *
 * @example
 * var getUrl = formatUrl('http://example.com', {a: 1, b: 2}); // 'http://example.com?a=1&b=2'
 *
 * @param {String} url
 * Базовый url
 *
 * @param {Object} obj
 * Объект, из которого будут формироваться строка параметров.
 *
 * @return {String} сформированный url.
 */

function formatUrl(sUrl, obj) {
    return sUrl + '?' + toGetParams(obj);
}

/**
 * Задание 5. Создать функцию startsWith, возвращающая true, если строка, переданная
 * в качестве первого аргумента начинается со строки, переданной в качестве второго аргумента,
 * false в противном случае.
 *
 * @example
 * var start = startsWith('homework', 'home'); // true
 * var dontStart = startsWith('homework', 'house'); // false
 *
 * @param {String} str
 * Строка для проверки.
 *
 * @param {String} prefix
 * Строка - кандидат на роль префикса.
 *
 * @return {Boolean} Результат проверки.
 */

function startsWith(str, sPrefix) {
    return str.indexOf(sPrefix) === 0 ? true : false;
}

/**
 * Задание 6. Создать функцию endsWith, возвращающая true, если строка, переданная
 * в качестве первого аргумента оканчивается на строку, переданную в качестве второго аргумента,
 * false в противном случае.
 *
 * @example
 * var end = endsWith('homework', 'work'); // true
 * var dontEnd = endsWith('homework', 'task'); // false
 *
 * @param {String} str
 * Строка для проверки.
 *
 * @param {String} suffix
 * Строка - кандидат на роль суффикса.
 *
 * @return {Boolean} Результат проверки.
 */

function endsWith(str, sPrefix) {
    return str.lastIndexOf(sPrefix) === (str.length - sPrefix.length) ? true : false;
}