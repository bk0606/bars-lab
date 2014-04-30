describe('Hulk.js', function() {
    var el = document.createElement('DIV'), h;
    el.id = 'testDiv';
    el.innerHTML = '<ul id="testUl"><li>1</li><li>2</li></ul>';

    it('hulk должен быть определен', function() {
        document.body.appendChild(el);
        expect(hulk).toBeDefined();
    });

    it(
        'Статический метод select должен получать коллекцию html элементов',
        function () {
            h = hulk.select('#testDiv');
            expect(h.elements[0]).toEqual(el);
        }
    );

    it(
        'Функция addClass должна изменять класс всех элементов в коллекции',
        function () {
            h.addClass('someCl')
            expect(h.elements[0].classList.contains('someCl')).toEqual(true);
        }
    );

    it(
        'Функция append должна добавлять еэлемент каждому элементу выборки',
        function () {
            var div = document.createElement('DIV');
            h.append(div);
            expect(h.elements[0].lastChild).toEqual(div);
        }
    );

    it(
        '',
        function () {

        }
    );

    it(
        '',
        function () {

        }
    );

    it(
        '',
        function () {

        }
    );

    it(
        '',
        function () {

        }
    );

    it(
        '',
        function () {

        }
    );

    it(
        '',
        function () {

        }
    );

    it(
        '',
        function () {

        }
    );

    it(
        '',
        function () {

        }
    );

    it(
        '',
        function () {

        }
    );

    it(
        '',
        function () {

        }
    );

    it(
        '',
        function () {

        }
    );

    it(
        '',
        function () {

        }
    );

    it(
        '',
        function () {

        }
    );

    it(
        '',
        function () {

        }
    );

    it(
        '',
        function () {

        }
    );

});