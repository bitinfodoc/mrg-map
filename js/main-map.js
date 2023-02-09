import regions from './regions/allregions.js'
import points from './points/allpoints.js'


document.getElementById('hello').innerHTML='Привет js';

async function main() {

    let myMap = new ymaps.Map('map', {
        center: [52.486217, 55.874431], // Москва
        zoom: 7
        }, {
            searchControlProvider: 'yandex#search'
    });

    function coordReverse(data) {
        return data.map(i => i.map(i => [i[1], i[0]] ))
     };


    function createRegion(region) {
        region.forEach( (element) => {
            // console.log(element.area.boss.image)

            var BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="margin: 0px 0;">' +
                    '<div style="float: left; margin: 0 10px;">' +
                        'some text for column' +
                    '</div>' +
                    '<div style="float: right; margin: 0 0 0 10px;">' +
                        '<img width="300px" alt="" src="{{properties.bossImage}}" />' +
                    '</div>' +
                '</div>', {
                build: function () {
                    BalloonContentLayout.superclass.build.call(this);
                },
            });

            var newRegion = new ymaps.GeoObject({
                geometry: {
                    type: "Polygon",
                    coordinates: coordReverse(element.polygon),
                    // fillRule: "nonZero"
                },
                properties: {
                    name: element.polygonName,
                    areaName: '',
                    bossName: '',
                    bossImage: element.area && element.area.boss ? element.area.boss.image : '#url',
                    // balloonContent: element.polygonName,
                    hintContent: element.area ? ([element.polygonName, ', абонентский участок ', element.area.areaName]).join('') : element.polygonName
                },
            }, {
                balloonContentLayout: BalloonContentLayout,  
                fillColor: element.area ? element.area.areaColor : element.color,
                strokeColor: '#ffd21d',
                opacity: 0.5,
                strokeWidth: 1,
                strokeStyle: 'solid',
                balloonMaxWidth: 1000,
                balloonMaxHeight: 1000,
                
            });
            myMap.geoObjects.add(newRegion);
        });
    };

    function createPoints(points) {


        points.forEach( (element) => {
            var BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="margin: 10px;">' +
                    '<b>{{properties.name}}</b><br />' +
                    'Адрес: {{properties.address}}<br />' +
                    'Телефон: {{properties.phone}}<br /><br />' +
                    '<b>Режим работы</b><br />' +
                    '<ul>' +
                    '<li>Понедельник: {{properties.work.monday}}</li>' +
                    '<li>Вторник: {{properties.work.tuesday}}</li>' +
                    '<li>Среда: {{properties.work.wednesday}}</li>' +
                    '<li>Четверг: {{properties.work.thursday}}</li>' +
                    '<li>Пятница: {{properties.work.friday}}</li>' +
                    '<li>Суббота: {{properties.work.saturday}}</li>' +
                    '<li>Воскресенье: {{properties.work.sunday}}</li>' +
                    '</ul>' +
                '</div>', {
                build: function () {
                    BalloonContentLayout.superclass.build.call(this);
                },
            });
        
            let newpoint = new ymaps.Placemark(element.coord,  {
                name: element.name,
                address: element.address,
                phone: element.phone,
                work: element.work,
                areaName: element.areaName,
                hintContent: ([element.name, ', абонентский участок ', element.areaName]).join('')
            }, {
                balloonContentLayout: BalloonContentLayout,      
                preset: 'islands#dotIcon',
                iconColor: element.pointColor,
                balloonMaxWidth: 1000,
                balloonMaxHeight: 1000,
            }, {
                preset: 'islands#dotIcon',
                iconColor: element.pointsColor
            })

            myMap.geoObjects.add(newpoint);
        });


        
    } 

    createRegion(regions)
    createPoints(points);
    
};




ymaps.ready(main);