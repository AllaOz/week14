const filmmakerList = document.getElementById("filmmakers__list");
const topFilmsListElem = document.getElementById("topfilmslist");

let filmMakers = [
  {
    name: 'Стивен Спилберг',
    career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
    films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
    top_rated_film: 'Список Шиндлера'
  },
  {
    name: 'Кристофер Нолан',
    career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
    films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
    top_rated_film: 'Начало'
  },
  {
    name: 'Мартин МакДона',
    career: 'Сценарист, Режиссёр, Продюсер',
    films: 'https://www.film.ru/person/martin-makdonah',
    top_rated_film: 'Три билборда на границе Эббинга, Миссури'
  },
  {
    name: 'Алексей Балабанов',
    career: 'Режиссёр, Сценарист, Актёр, Продюсер',
    films: 'https://www.film.ru/person/aleksey-balabanov',
    top_rated_film: 'Брат'
  },
  {
    name: 'Питер Фаррелли',
    career: 'Продюсер, Режиссёр, Сценарист, Актёр',
    films: 'https://www.film.ru/person/piter-farrelli',
    top_rated_film: 'Зелёная книга'
  },
  {
    name: 'Юрий Быков',
    career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
    films: 'https://www.film.ru/person/yuriy-bykov',
    top_rated_film: 'Дурак'
  },
  {
    name: 'Жан-Марк Валле',
    career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
    films: 'https://www.film.ru/person/zhan-mark-valle',
    top_rated_film: 'Далласский клуб покупателей'
  },
];

    filmMakers.forEach(function(filmMaker) {
      const listItemName = document.createElement("li");
      listItemName.textContent = filmMaker.name;
      const listItemCareer = document.createElement("li");
      listItemCareer.textContent = filmMaker.career;
      const listItemLink = document.createElement("a");
      listItemLink.href = filmMaker.films;  
listItemLink.appendChild(document.createTextNode('Фильмография'));
    
      filmmakerList.appendChild(listItemName);
      filmmakerList.appendChild(listItemCareer);
      filmmakerList.appendChild(listItemLink);
      
      listItemName.style.fontSize = "25px";
      listItemName.style.marginTop = "20px";
      listItemCareer.style.marginBottom = "20px";
      listItemLink.style.float = "right";
    });

const topFilmsList = filmMakers.map(filmMakers => filmMakers.top_rated_film
);
topFilmsListElem.textContent = topFilmsList.join(", ");

//задание со звездочкой (умные люди подсказали, как в одну строку решить//

const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];

// function intersection1 (arr1, arr2) {
// 	return arr1.filter(function (item) {
// 		return arr2.includes(item);
// 	});
// }
// let overlap1 = intersection1(arr1, arr2);
// console.log(overlap1);

// function intersection2 (arr3, arr4, arr5) {
// 	return arr3.filter(function (item) {
// 		return arr4.includes(item);
//     return arr5.includes(item);
   
// 	});
// }
//   let overlap2 = intersection2(arr3, arr4,arr5)
//   console.log(overlap2);

// function intersection3(arr6, arr7, arr8) {
// 	return arr6.filter(function (item) {
// 		return arr7.includes(item);
//     return arr8.includes(item);  
// 	});
// }
//   let overlap3 = intersection3(arr6, arr7,arr8)
//   console.log(overlap3);

const intersection = (...array) => [...new Set(array.reduce((a, b) => a.filter(v => b.includes(v))))];

console.log(intersection(arr1, arr2)) 
console.log(intersection(arr3, arr4, arr5)) 
console.log(intersection(arr6, arr7, arr8)) 




  