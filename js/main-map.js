import regions from './regions/allregions.js'
import points from './points/allpoints.js'

document.getElementById('hello').innerHTML='Привет js';

async function main() {

    let myMap = new ymaps.Map('map', {
        center: [52.486217, 55.874431],
        controls: ['zoomControl', 'typeSelector',  'fullscreenControl', 'routeButtonControl'],
        zoom: 7
        }, {
            searchControlProvider: 'yandex#search'
    });

    function coordReverse(data) {
        return data.map(i => i.map(i => [i[1], i[0]] ))
     };

    function createRegion(region) {
        region.forEach( (element) => {
            var BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
                (['<div style="margin: 0px 0;">',
                    '<h2 style="margin: 0 10px; padding-bottom: 5px;">{{properties.typeName}} в {{properties.pointName}}</h2>',
                    '<div style="margin: 0 10px 10px;"><i>{{properties.name}}, абонентский участок {{properties.areaName}}</i></div>',
                    '<div style="display: inline-block; vertical-align: top; margin: 10px; max-width: 380px;">',
                        element.regionPoint && '<b>Адрес:</b> {{properties.regionPoint.name}}, {{properties.regionPoint.address}}<br />',
                        element.regionPoint && element.regionPoint.phone && '<b>Телефон:</b> {{properties.regionPoint.phone}}<br />',
                        // element.regionPoint && '<b>Офис обслуживания в вашем районе</b>',
                        // element.regionPoint && '<ul>',
                        // element.regionPoint && '<li>{{properties.regionPoint.name}}, ',
                        // element.regionPoint && '{{properties.regionPoint.address}}</li>',
                        // element.regionPoint && element.regionPoint.phone && '<li>Телефон: {{properties.regionPoint.phone}}</li>',
                        // element.regionPoint && '</ul>',
                        '<br /><b>Режим работы</b><br />',
                        element.regionPoint && !element.regionPoint.work.hide ? '<ul>' : '',
                        element.regionPoint && !element.regionPoint.work.hide ? '<li>Понедельник: {{properties.regionPoint.work.monday}}</li>' : '',
                        element.regionPoint && !element.regionPoint.work.hide ? '<li>Вторник: {{properties.regionPoint.work.tuesday}}</li>' : '',
                        element.regionPoint && !element.regionPoint.work.hide ? '<li>Среда: {{properties.regionPoint.work.wednesday}}</li>' : '',
                        element.regionPoint && !element.regionPoint.work.hide ? '<li>Четверг: {{properties.regionPoint.work.thursday}}</li>' : '',
                        element.regionPoint && !element.regionPoint.work.hide ? '<li>Пятница: {{properties.regionPoint.work.friday}}</li>' : '',
                        element.regionPoint && !element.regionPoint.work.hide ? '<li>Суббота: {{properties.regionPoint.work.saturday}}</li>' : '',
                        element.regionPoint && !element.regionPoint.work.hide ? '<li>Воскресенье: {{properties.regionPoint.work.sunday}}</li>' : '',
                        element.regionPoint && !element.regionPoint.work.hide ? '</ul>' : '',
                        element.regionPoint && element.regionPoint.work.other,
                    '</div>',
                    '<div style="display: inline-block; vertical-align: top; margin: 0 0 0 10px;">',
                        element.regionPoint && element.regionPoint.pointImage && !element.regionPoint.mainPoint ? '<img width="300px" alt="" src="{{properties.regionPoint.pointImage}}" /><br/>' : '',
                        element.regionPoint && element.regionPoint.mainPoint ? '<img style="max-width: 580px" alt="" src="{{properties.bossImage}}" /><br/>' : '',
                        element.regionPoint && element.regionPoint.mainPoint ? '<i>Начальник абонентского участка {{properties.areaName}}</i><br/><b>{{properties.bossName}}</b><br/>' : '',
                    '</div>',
                '</div>']).join(''), {
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
                    areaName: element.area ? element.area.areaName : '#',
                    bossName: element.area && element.area.boss ? element.area.boss.name : '-',
                    bossImage: element.area && element.area.boss ? element.area.boss.image : '#',
                    mainAreaPoint: element.mainAreaPoint,
                    pointName: element.regionPoint.name,
                    regionPoint: element.regionPoint,
                    typeName: element.regionPoint.type === 'office' ? 'Офис обслуживания' : 'Терминал интерактивного приема',
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
                zIndex: element.zIndex
            });
            myMap.geoObjects.add(newRegion);
        });
    };

    function createPoints(points) {
        points.forEach( (element) => {
            var BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
                (['<div style="margin: 0; ">',
                    '<h2 style="margin: 10px 0 0 10px; padding-bottom: 5px">{{properties.typeName}} в {{properties.name}}</h2>',
                    '<span style="margin: 0 10px; "><i>Абонентский участок {{properties.areaName}}</i></span><br />',
                    '<div style="display: inline-block; vertical-align: top; margin: 10px; max-width: 350px;">',
                        '<b>Адрес:</b> {{properties.name}}, {{properties.address}}<br />',
                        element.phone && '<b>Телефон:</b> {{properties.phone}}<br />',
                        // '<ul>',
                        //     '<li>{{properties.name}}, {{properties.address}}</li>',
                        //     '<li>Телефон: {{properties.phone}}</li>',
                        // '</ul>',
                        '<br /><b>Режим работы</b><br />',
                            !element.work.hide ? '<ul>' : '',
                            !element.work.hide ? '<li>Понедельник: {{properties.work.monday}}</li>' : '',
                            !element.work.hide ? '<li>Вторник: {{properties.work.tuesday}}</li>' : '',
                            !element.work.hide ? '<li>Среда: {{properties.work.wednesday}}</li>' : '',
                            !element.work.hide ? '<li>Четверг: {{properties.work.thursday}}</li>' : '',
                            !element.work.hide ? '<li>Пятница: {{properties.work.friday}}</li>' : '',
                            !element.work.hide ? '<li>Суббота: {{properties.work.saturday}}</li>' : '',
                            !element.work.hide ? '<li>Воскресенье: {{properties.work.sunday}}</li>' : '',
                            !element.work.hide ? '</ul>' : '',
                        element.work.other,
                        '</div>',
                        element.mainPoint ? '<div style="display: inline-block; vertical-align: top; margin: 0 0 0 10px;">' : '',
                        element.mainPoint ?'<img style="max-width: 580px" alt="" src="{{properties.bossImage}}" /><br/>' : '',
                        element.mainPoint ?'<i>Начальник абонентского участка {{properties.areaName}}</i><br/><b>{{properties.bossName}}</b><br/>' : '',
                        element.mainPoint ?'</div>' : '',
                        element.pointImage ? '<div style="display: inline-block; vertical-align: top; margin: 0 0 0 10px;">' : '',
                        element.pointImage ?'<img width="300px" alt="" src="{{properties.pointImage}}" /><br/>' : '',
                        // element.pointImage ?'<i>Начальник абонентского участка {{properties.areaName}}</i><br/><b>{{properties.bossName}}</b><br/>' : '',
                        element.pointImage ?'</div>' : '',
                '</div>']).join(''), {
                build: function () {
                    BalloonContentLayout.superclass.build.call(this);
                },
            });
        
            let newpoint = new ymaps.Placemark(element.coord,  {
                name: element.name,
                typeName: element.type === 'office' ? 'Офис обслуживания' : 'Терминал интерактивного приема',
                type: element.type,
                address: element.address,
                phone: element.phone,
                work: element.work,
                areaName: element.areaName,
                bossName: element.boss.name,
                bossImage: element.boss.image,
                pointImage: element.pointImage,
                hintContent: ([element.type === 'office' ? 'Офис обслуживания' : 'Терминал интерактивного приема', ' в ', element.name]).join('')
            }, {
                balloonContentLayout: BalloonContentLayout,      
                preset: element.mainPoint ? 'islands#homeCircleIcon' : element.type === 'terminal' ? 'islands#personCircleIcon' : 'islands#circleIcon',
                // preset: element.type.id === 'office' ? 'islands#pocketIcon' : 'islands#starIcon',
                iconColor: element.pointColor,
                balloonMaxWidth: 1000,
                balloonMaxHeight: 1000,
            }, {
                iconColor: element.pointsColor
            })

            myMap.geoObjects.add(newpoint);

        });
        
    } 

    
    createRegion(regions)
    createPoints(points);

};




ymaps.ready(main);