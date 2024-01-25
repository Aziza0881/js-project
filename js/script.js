/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};



//1
let delet = document.querySelectorAll('.promo__adv img') 

delet.forEach((element)=>{
    element.remove();
})


//2


let genre = document.querySelector('.promo__genre')



genre.innerHTML='драма'

//3
let bg = document.querySelector('.promo__bg')
bg.style.background = 'url("./img/bg.jpg") center/cover no-repeat';




//4
for (let movie of movieDB.movies) {
    let idx = movieDB.movies.indexOf(movie) + 1
    let promo_interactive = document.querySelector('.promo__interactive-list')
    let li = document.createElement('li')

    li.style.fontSize = "30px"
    li.style.textDecoration = "underline yellow"
    li.innerHTML = idx + '. ' + movie

    promo_interactive.append(li)
}
   











