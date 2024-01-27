
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';



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
const ul = document.querySelector('.promo__interactive-list')
const promoBg = document.querySelector('.promo__bg')
const dd = document.querySelector(".promo__genre")
const title = document.querySelector(".promo__title")
const descr = document.querySelector(".promo__descr")


function reload() {

    ul.innerHTML=""


    for (let movie of movies) {
        let idx = movies.indexOf(movie) 
        let li = document.createElement('li')
        let del = document.createElement('div')
    
    
    
    
        li.classList.add('promo__interactive-item')
        del.classList.add('delete')
    
    
        li.innerHTML = `${idx + 1}. ${movie.Title}`
    
        li.append(del)
        ul.append(li)
    
        del.onclick = () => {
           movies.splice(idx, 1)
            reload()
        }


        li.onclick = () => {
            promoBg.style.background = `url(${movie.Poster}) no-repeat center/cover`
            dd.innerHTML = movie.Genre
            title.innerHTML = movie.Title
            descr.innerHTML = movie.Plot



        }        


    }
    
}
reload()
   











