import { perevolotskRegion } from './regions/perevolotsk.js';
import { novosergRegion } from './regions/novoserg.js';
import { buzulukRegion } from './regions/buzuluk.js';
import { tockiyRegion } from './regions/tockiy.js';
import { sorochRegion } from './regions/soroch.js';
import { krasnogvaRegion } from './regions/krasnogva.js';
import { grachevRegion } from './regions/grachev.js';
import { pervomaiRegion } from './regions/pervomai.js';
import { kurmanRegion } from './regions/kurman.js';
import { abdulinoRegion } from './regions/abdulino.js';
import { bugurusRegion } from './regions/bugurus.js';
import { sharlikRegion } from './regions/sharlik.js';
import { tashlaRegion } from './regions/tashla.js';
import { ilekRegion } from './regions/ilek.js';
import { sakmaraRegion } from './regions/sakmara.js';
import { solIleckRegion } from './regions/solIleck.js';
import { ponomarRegion } from './regions/ponomar.js';
import { aleksandRegion } from './regions/aleksand.js';
import { asekeevoRegion } from './regions/asekeevo.js';
import { matveevRegion } from './regions/matveev.js';
import { oktyabrRegion } from './regions/oktyabr.js';
import { saraktashRegion } from './regions/saraktash.js';
import { belyaevRegion } from './regions/belyaev.js';
import { orenRegion } from './regions/oren.js';
import { orenburgRegion } from './regions/orenburg.js';
import { tulganRegion } from './regions/tulgan.js';
import { kuvaRegion } from './regions/kuva.js';
import { mednoRegion } from './regions/medno.js';
import { akbulakRegion } from './regions/akbulak.js';
import { novotroickRegion } from './regions/novotroick.js';
import { gaiRegion } from './regions/gai.js';
import { orskRegion } from './regions/orsk.js';
import { dombarovRegion } from './regions/dombarov.js';
import { svetliyRegion } from './regions/svetliy.js';
import { yasniyRegion } from './regions/yasniy.js';
import { kvarkenoRegion } from './regions/kvarkeno.js';
import { novoorskRegion } from './regions/novoorsk.js';
import { adamovkaRegion } from './regions/adamovka.js';
import { severniyRegion } from './regions/severniy.js';



document.getElementById('hello').innerHTML='Привет js';



async function main(regions) {
    let myMap = new ymaps.Map('map', {
        center: [51.770384, 55.098725], // Москва
        zoom: 7
        }, {
            searchControlProvider: 'yandex#search'
    });

    function coordReverse(data) {
        return data.map(i => i.map(i => [i[1], i[0]] ))
     };


    function createRegion(region) {
        region.forEach( (element) => {
            var newRegion = new ymaps.GeoObject({
                geometry: {
                    type: "Polygon",
                    coordinates: coordReverse(element.polygon),
                    // fillRule: "nonZero"
                },
                properties:{
                    balloonContent: element.polygonName
                }
            }, {
                fillColor: element.color ? element.color : '#00FF00',
                strokeColor: '#ffd21d',
                opacity: 0.5,
                strokeWidth: 1,
                strokeStyle: 'solid'
            });
            myMap.geoObjects.add(newRegion);
        });
    };

    var regions =  [
        // orenRegion, 
        sakmaraRegion, 
        solIleckRegion, 
        ilekRegion, 
        tashlaRegion, 
        perevolotskRegion, 
        novosergRegion, 
        buzulukRegion, 
        tockiyRegion, 
        sorochRegion, 
        krasnogvaRegion, 
        grachevRegion,
        pervomaiRegion,
        kurmanRegion,
        abdulinoRegion,
        bugurusRegion,
        sharlikRegion,
        ponomarRegion,
        aleksandRegion,
        asekeevoRegion,
        matveevRegion,
        oktyabrRegion,
        saraktashRegion,
        belyaevRegion,
        orenRegion,
        orenburgRegion,
        tulganRegion,
        kuvaRegion,
        mednoRegion,
        akbulakRegion,
        novotroickRegion,
        gaiRegion,
        orskRegion,
        dombarovRegion,
        svetliyRegion,
        yasniyRegion,
        kvarkenoRegion,
        novoorskRegion,
        adamovkaRegion,
        severniyRegion
    ];
    createRegion(regions)

    let newpoint = new ymaps.Placemark([53.651798, 52.437026], {
        balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
    }, {
        preset: 'islands#icon',
        iconColor: '#0095b6'
    })

    myMap.geoObjects.add(newpoint);
};




ymaps.ready(main);