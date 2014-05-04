/**
 * hulk - библиотека для манипуляции DOMом.
 * Ниже описаны функции, которые должны присутствовать в данной библиотеке.
 * Реализовать hulk таким образом, чтобы можно было вызывать цепочку функций:
 * @example hulk.select('some-selector').addClass('cls').append('div')
 */
var hulk = (function () {

    function Hulk(elements) {
        this.elements = elements;
    }

    /**
     * @method select
     * Функция, с которой начинается манипуляция dom-объектов.
     * Возвращает hulk-объект, который содержит массив html-элементов, удовлетворяющих переданному селектору.
     * Все дальнейшие манипуляции из цепочки вызовов будут применены к элементам из данной выборки.
     * @param {String} selector css-селектор.
     */
    Hulk.select = function (selector) {
        if (typeof(selector) !== 'string' || selector === '') {
            throw new Error('Incorrect selector');
        }
        return new Hulk(document.querySelectorAll(selector));
    };

    /**
     * @method addClass
     * Добавляет классы каждому элементу выборки.
     * @param {String} clsNames Имена классов, разделенных пробелом.
     */
    Hulk.prototype.addClass = function(clsNames) {
        this._forEachElement(function (element) {
            element.classList.add(clsNames);
        });
    };

    /**
     * @method append
     * Добавляет дочерний html-элемент каждому элементу выборки.
     * @param {String} tagName Имя тега, добавляемого элемента.
     */
    Hulk.prototype.append = function (tagName) {
        this._forEachElement(function (element) {
            element.appendChild(tagName);
        });
    };

    /**
     * @method attr Если при вызове передается один аргумент, возвращается значение атрибута,
     * если передается два аргумента, то атрибуту присваивается значение второго аргумента.
     * @param {String} attrName Имя атрибута.
     * @param {Number/String} [value] Значение атрибута.
     */
    Hulk.prototype.attr = function (attrName, value) {
        if (arguments.length === 2) {
            this._forEachElement(function (element) {
                element.setAttribute(attrName, value);
            });
        }
        return this.elements[0].getAttribute(attrName);
    };

    /**
     * @method children
     * Возвращает всех непосредственных наследников первого элемента из выборки, обернутых в hulk-объект.
     */
    Hulk.prototype.children = function () {
        return new Hulk(this.elements[0].children);
    };

    /**
     * @method css Если при вызове передается один аргумент, возвращается значение css-атрибута,
     * если передается два аргумента, то css-атрибуту присваивается значение второго аргумента.
     * @param {String} cssAttrName Имя css-атрибута.
     * @param {Number/String} value Значение css-атрибута.
     */
    Hulk.prototype.css = function (cssAttrName, value) {
        if (arguments.length === 2) {
            this._forEachElement(function (element) {
                element.css[cssAttrName] = value;
            });
        }
        return this.elements[0].css[cssAttrName];
    };

    /**
    * @method empty
    * Очищает все внутреннее содержимое элементов из выборки.
    */
    Hulk.prototype.empty = function () {
        this._forEachElement(function (element) {
            element = null;
        });
    };

    /**
     * @method find Производит выборку по дочерним элементам выборки,
     * удовлетворяющим переданному селектору.
     * @param {String} selector css-селектор для выборки.
     */
    Hulk.prototype.find = function (selector) {
        return this.elements[0].querySelectorAll(selector);
    };

    /**
     * @method hasClass
     * Проверяет наличие класса для элементов выборки.
     * @param {String} className Имя класса, наличие которого проверяется.
     * @return {Boolean} Возвращает true, если все элементы выборки содержат переданный класс.
     */
    Hulk.prototype.hasClass = function (className) {
        var hasClass = true;
        this._forEachElement(function (element) {
            hasClass = element.classList.contains(className);
        });
        return hasClass;
    };

    /**
     * @method html
     * Возвращает html-содержимое первого элемента выборки.
     * @return {HTMLElement} html-содержимое первого элемента из выборки.
     */
    Hulk.prototype.html = function () {
        return this.elements[0].innerHTML;
    };

    /**
     * @method on
     * Добавляет подписчика на событие для элементов выборки.
     * @param {String} eventName Имя события, на которое будет производиться подписка.
     * @param {Function} func Функция-подписчик.
     */
    Hulk.prototype.on = function (eventName, func) {
        this._forEachElement(function (element) {
            element.addEventListener(eventName, func);
        });
    };

    /**
     * @method parent
     * Возвращает родительский элемент первого элемента выборки.
     */
    Hulk.prototype.parent = function () {
        return this.elements[0].parentNode;
    };

    /**
     * @method remove
     * Удаляет из документа все DOM-элементы выборки.
     */
    Hulk.prototype.remove = function () {
        this.elements = null;
    };

    /**
     * @method removeAttr
     * Удаляет атрибут из элементов выборки.
     * @param {String} attrName Удаляемый атрибут.
     */
    Hulk.prototype.removeAttr = function (attrName) {
        this._forEachElement(function (element) {
            element.removeAttribute(attrName);
        });
    };

    /**
     * @method removeClass
     * Удаляет css-классы для элементов выборки.
     * @param {String} clsNames Имена классов, разделенных пробелом.
     */
    Hulk.prototype.removeClass = function (clsNames) {
        var clases = clsNames.split(/\s/);
        this._forEachElement(function (element) {
            clases.forEach(function (cl) {
                element.classList.remove(cl);
            });
        });
    };

    /**
     * @method toggleClass
     * Добавляет (если классы отсутствуют) и удаляет (если классы присутствуют) у элементов выборки.
     * @param {String} clsNames Имена классов, разделенных пробелом.
     */
    Hulk.prototype.toggleClass = function (clsNames) {
        var clases = clsNames.split(/\s/);
        this._forEachElement(function (element) {
            clases.forEach(function (cl) {
                if (element.classList.contains(cl)) {
                    element.classList.remove(cl)
                } else {
                    element.classList.add(cl);
                }
            });
        });
    };

    /**
     * @method unbind
     * Удаляет подписчика на событие для элементов выборки.
     * @param {String} eventName Имя события, для которого будет производиться удаление подписчика.
     * @param {Function} func Удаляемая функция-подписчик.
     */
    Hulk.prototype.unbind = function (eventName, func) {
        this._forEachElement(function (element) {
            element.removeEventListener(eventName, func);
        });
    };

    /**
     * @method wrap
     * Оборачивает каждый элемент выборки тегом, имя которого передано в качестве первого аргумента.
     * @param {String} tagName Имя тега.
     */
    Hulk.prototype.wrap = function (tagName) {
        var el = document.createElement(tagName), tmpEl;
        this._forEachElement(function (element) {
            tmpEl = element.cloneNode(true);
            element = el.cloneNode(false);
            element.appendChild(tmpEl);
        });
    };

    /**
     * Use callbackFn on each element in collection
     * @param callbackFn clall on each element in collection
     * @param [context] bind this context
     * @private
     */
    Hulk.prototype._forEachElement = function (callbackFn, context) {
        for (var i = this.elements.length - 1; i >= 0; i--) {
            callbackFn.call(context || this, this.elements[i]);
        }
    };
    
    return Hulk;

})();
