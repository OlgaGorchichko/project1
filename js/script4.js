/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }

        console.log(`Вы посмотрели ${personalMovieDB.count} фильма(ов)`);
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log(`Просмотрено довольно мало фильмов: ${personalMovieDB.count}`); 
        } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
            console.log("Вы классический зритель"); 
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман"); 
        } else {
            console.log("Произошла ошибка");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i<2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '');
            const b = prompt('На сколько оцените его?', '');
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50&& b.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }

        console.log(personalMovieDB);
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log('База открытая');
            console.log(personalMovieDB);
        } else {
            console.log('Защищенные данные');
        }
    },
    /*3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
         Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
         при помощи метода forEach вывести в консоль сообщения в таком виде:
         "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/
    writeYourGenres: function(){
        /*for (let i = 0; i < 3; i++) {
            let a = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
            if (a != null && a != '')
            {
                personalMovieDB.genres[i] = a;
            } else {
                i--;
            }
        }

        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
        
        */

        //другой вариант
        for (let i = 0; i < 1; i++) {
            let genres = prompt('Введите ваши любимые жанры через запятую', '').toLowerCase();
            
            if (genres != null && genres != '')
            {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            } else {
                i--;
            }

        }

        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    },
    /*
        2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
        переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
    */
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    }
};

// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
//personalMovieDB.rememberMyFilms();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.private);
personalMovieDB.writeYourGenres();