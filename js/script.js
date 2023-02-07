import { orenRegion, solIleckRegion, sakmaraRegion, ilekRegion, tashlaRegion} from './coordinates.js';
import { perevolRegion } from './points/perevolotskiy.js';
import { novosergRegion } from './points/novoserg.js';
import { buzulukRegion } from './points/buzuluk.js';
import { tockiyRegion } from './points/tockiy.js';
import { sorochRegion } from './points/soroch.js';
import { krasnogvaRegion } from './points/krasnogva.js';
import { grachevRegion } from './points/grachev.js';
import { pervomaiRegion } from './points/pervomai.js';
import { kurmanRegion } from './points/kurman.js';
import { abdulinoRegion } from './points/abdulino.js';
import { bugurusRegion } from './points/bugurus.js';
// import * from 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=ae8fe14-201f-4fa1-9244-3b9372c1bd44';
    
    
    document.getElementById('hello').innerHTML='Привет js';

    function glubina(arr){
        if(arr.filter(i => i.constructor.name === "Array").length != 0){
           return 1 + glubina([].concat(...arr.filter(i => i.constructor.name === "Array")));
        } else {
           return 0;
        }
     }

    function coordReverse(data) {
        console.log(glubina(data))
        return data.map(i => i.map(i => [i[1], i[0]] ))
     };
    function coordReverseDeep(data) {
        console.log(glubina(data))
        return data.map(i => {
            console.log(glubina(i))
            return i.map(i => i.map(i => [i[1], i[0]] ) );
        })
     };

     
    // console.log(coordReverseDeep(orenCity));
    async function main() {
        let myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [51.770384, 55.098725], // Москва
        zoom: 7
        }, {
            searchControlProvider: 'yandex#search'
        });

    var borderStyle = {
        // Описываем опции геообъекта.
        // Цвет заливки.
        fillColor: '#00FF00',
        // Цвет обводки.
        strokeColor: '#0000FF',
        // Общая прозрачность (как для заливки, так и для обводки).
        opacity: 0.5,
        // Ширина обводки.
        strokeWidth: 1,
        // Стиль обводки.
        strokeStyle: 'solid'
    }

    // Создаем многоугольник, используя класс GeoObject.
    var orenRegionCreate = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: coordReverse(orenRegion),
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Оренбургский район"
        }
    }, borderStyle);

    var sakmaraRegionCreate = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: coordReverse(sakmaraRegion),
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Сакмарский район"
        }
    }, borderStyle);

    var solIleckRegionCreate = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: coordReverse(solIleckRegion),
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Соль-Илецкий район"
        }
    }, borderStyle);

    var ilekRegionCreate = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: coordReverse(ilekRegion),
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Соль-Илецкий район"
        }
    }, borderStyle);

    var ilekRegionCreate = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: coordReverse(ilekRegion),
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Илекский район"
        }
    }, borderStyle);

    var tashlaRegionCreate = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: coordReverse(tashlaRegion),
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Ташлинский район"
        }
    }, borderStyle);

    var perevolRegionCreate = new ymaps.GeoObject({
        geometry: {
            type: "Polygon",
            coordinates: coordReverse(perevolRegion),
            fillRule: "nonZero"
        },
        properties:{
            balloonContent: "Переволоцкий район"
        }
    }, borderStyle);

    var novosergRegionCreate = new ymaps.GeoObject({
      geometry: {
          type: "Polygon",
          coordinates: coordReverse(novosergRegion),
          fillRule: "nonZero"
      },
      properties:{
          balloonContent: "Новосергиевский район"
      }
    }, borderStyle);

    var buzulukRegionCreate = new ymaps.GeoObject({
      geometry: {
          type: "Polygon",
          coordinates: coordReverse(buzulukRegion),
          fillRule: "nonZero"
      },
      properties:{
          balloonContent: "Бузулукский район"
      }
    }, borderStyle);

    var tockiyRegionCreate = new ymaps.GeoObject({
      geometry: {
          type: "Polygon",
          coordinates: coordReverse(tockiyRegion),
          fillRule: "nonZero"
      },
      properties:{
          balloonContent: "Тоцкий район"
      }
    }, borderStyle);

    var sorochRegionCreate = new ymaps.GeoObject({
      geometry: {
          type: "Polygon",
          coordinates: coordReverse(sorochRegion),
          fillRule: "nonZero"
      },
      properties:{
          balloonContent: "Сорочинский район"
      }
    }, borderStyle);

    var krasnogvaRegionCreate = new ymaps.GeoObject({
      geometry: {
          type: "Polygon",
          coordinates: coordReverse(krasnogvaRegion),
          fillRule: "nonZero"
      },
      properties:{
          balloonContent: "Красногвардейский район"
      }
    }, borderStyle);

    var grachevRegionCreate = new ymaps.GeoObject({
      geometry: {
          type: "Polygon",
          coordinates: coordReverse(grachevRegion),
          fillRule: "nonZero"
      },
      properties:{
          balloonContent: "Грачёвский район"
      }
    }, borderStyle);

    var pervomaiRegionCreate = new ymaps.GeoObject({
      geometry: {
          type: "Polygon",
          coordinates: coordReverse(pervomaiRegion),
          fillRule: "nonZero"
      },
      properties:{
          balloonContent: "Первомайский район"
      }
    }, borderStyle);

    var kurmanRegionCreate = new ymaps.GeoObject({
      geometry: {
          type: "Polygon",
          coordinates: coordReverse(kurmanRegion),
          fillRule: "nonZero"
      },
      properties:{
          balloonContent: "Курманаевский район"
      }
    }, borderStyle);

    var abdulinoRegionCreate = new ymaps.GeoObject({
      geometry: {
          type: "Polygon",
          coordinates: coordReverse(abdulinoRegion),
          fillRule: "nonZero"
      },
      properties:{
          balloonContent: "Абдулинский район"
      }
    }, borderStyle);

    var bugurusRegionCreate = new ymaps.GeoObject({
      geometry: {
          type: "Polygon",
          coordinates: coordReverse(bugurusRegion),
          fillRule: "nonZero"
      },
      properties:{
          balloonContent: "Бугурусланский район"
      }
    }, borderStyle);

  //   bugurusRegionCreate.events.add('click', function () {

  //     console.log('polygon clicked');
  
  // });

    myMap.geoObjects.add(orenRegionCreate);
    myMap.geoObjects.add(sakmaraRegionCreate);
    myMap.geoObjects.add(solIleckRegionCreate);
    myMap.geoObjects.add(ilekRegionCreate);
    myMap.geoObjects.add(tashlaRegionCreate);
    myMap.geoObjects.add(tashlaRegionCreate);
    myMap.geoObjects.add(perevolRegionCreate);
    myMap.geoObjects.add(novosergRegionCreate);
    myMap.geoObjects.add(buzulukRegionCreate);
    myMap.geoObjects.add(tockiyRegionCreate);
    myMap.geoObjects.add(sorochRegionCreate);
    myMap.geoObjects.add(krasnogvaRegionCreate);
    myMap.geoObjects.add(grachevRegionCreate);
    myMap.geoObjects.add(pervomaiRegionCreate);
    myMap.geoObjects.add(kurmanRegionCreate);
    myMap.geoObjects.add(abdulinoRegionCreate);
    myMap.geoObjects.add(bugurusRegionCreate);

    }


    ymaps.ready(main);
