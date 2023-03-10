import area from '../areas/orenburg.js';


export const proletarskayaPoint = {
    coord: [51.770384, 55.098725],
    type: 'office',
    mainPoint: true,
    zindex: 150,
    area,
    name:'г. Оренбург',
    address: 'ул. Пролетарская, 72/1',
    phone: '(3532) 444-009',
    work: {
        hide: true, // спрятать режим по дням, оставить только other
        monday: null,
        tuesday: null,
        wednesday: null,
        thursday: null,
        friday: null,
        saturday: null,
        sunday: null,
        other: '<p><strong>с 1-го по 14-ое число месяца:</strong></p>' +
                '<ul>' + 
                    '<li>Понедельник - Четверг&nbsp;с 8:30 до 17:30</li>' +
                    '<li>Пятница с 8:30 до 16:15</li>' +
                    '<li>Суббота с 9:00 до 15:00</li>' +
                    '<li>Воскресенье -выходной</li>' +
                '</ul>' +
                '<p><strong>с 15-го по последнее число месяца:</strong></p>' +
                '<ul>' +
                    '<li>Понедельник - Пятница с 8:30 до 20:00</li>' +
                    '<li>Суббота с 9:00 до 15:00</li>' +
                    '<li>Воскресенье -выходной</li>' +
                '</ul>'+
                '<b>Участком также обслуживаются следующие населенные пункты:</b> п.Благословенка, п.Весенний, п.Ивановка, п.Куйбышева, п.Приуралье, п.Перовский, п.Ростоши, п.Солнечный, п.Чкалов, п.Экодолье'
        },
        boss: area.boss,
        areaName: area.areaName,
        pointColor: area.areaColor,
        pointImage: '/mapimages/orenburg_main_short.jpg'
}

export const samolyotnayaPoint = {
    coord: [51.788198, 55.126402],
    type: 'terminal',
    zindex: 140,
    name:'г. Оренбург',
    address: 'ул. Самолетная , 83',
    // phone: '(3532) 444-009',
    work: {
        monday: 'с 8:30 до 20:00',
        tuesday: 'с 8:30 до 17:30',
        wednesday: 'с 8:30 до 17:30',
        thursday: 'с 8:30 до 17:30',
        friday: 'с 8:30 до 16:30',
        saturday: 'Выходной',
        sunday: 'Выходной',
        other: ''
    },
    boss: area.boss,
    areaName: area.areaName,
    pointColor: area.areaColor,
}


