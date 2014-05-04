ExtJs 4 + Django
================

Инструкции:

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/gYHZNbBasC4/0.jpg)](http://www.youtube.com/watch?v=gYHZNbBasC4)


Зависимости:
* python >= 2.7
* pip

Для запуска:

* Перейдите в папку проекта
```bash
cd extjs-django/marvel
```

* Установите зависимости запустив команду
```bash
pip install -U -r dependencies.txt 
```

* Синхронизируйте базу данных:
```bash
python manage.py syncdb
```

* Запустите сервер:
```bash
python manage.py runserver
```

Приложение "Библиотека" будет доступна по адресу http://localhost:8000/library

API можно посмотреть по адресам:
* http://localhost:8000/library/genres/ - Жанры
* http://localhost:8000/library/authors/ - Авторы
* http://localhost:8000/library/books/ - Книги


