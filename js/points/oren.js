import area from '../areas/oren.js';


export const orenPoint = {
    coord: [51.770384, 55.098725],
    zIndex: 100,
    type: 'office',
    mainPoint: true,
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
                '<b>Участком также обслуживаются следующие населенные пункты:</b> п.Бердянка, с.Городище, ст.Каргала, п.Краснохолм, п.Ленинский луч, с.Нижнесакмарский, с.Пруды, п.Самородово, п.Холодные ключи'
        },
        boss: area.boss,
        areaName: area.areaName,
        pointColor: area.areaColor,
}

export const aleksandPoint = {
    coord: [52.683327, 54.412178],
    type: 'office',
    name:'с. Александровка',
    address: 'ул. Маяковского, 10',
    phone: '(353-59) 2-45-06',
    work: {
        monday: 'с 8:30 до 11:00',
        tuesday: 'с 8:30 до 11:00',
        wednesday: 'с 8:30 до 11:00',
        thursday: 'с 8:30 до 11:00',
        friday: 'с 8:30 до 16:15',
        saturday: 'Выходной',
        sunday: 'Выходной',
        other: '<b>Дополнительно прием осуществляется</b> по субботам с 9.00 до 15.00 по адресу г. Оренбург, ул. Пролетарская 72/1.'
    },
    boss: area.boss,
    areaName: area.areaName,
    pointColor: area.areaColor,
    pointImage: '/mapimages/aleksandrovka.jpg',
}

export const sakmaraPoint = {
    coord: [51.985346, 55.327795],
    type: 'office',
    name:'с. Сакмара',
    address: 'ул. Комсомольская, 5',
    phone: '(353-31) 2-22-21',
    work: {
        monday: 'с 8:30 до 11:00',
        tuesday: 'с 8:30 до 11:00',
        wednesday: 'с 8:30 до 11:00',
        thursday: 'с 8:30 до 11:00',
        friday: 'с 8:30 до 16:15',
        saturday: 'Выходной',
        sunday: 'Выходной',
        other: '<b>Дополнительно прием осуществляется</b> по субботам с 9.00 до 15.00 по адресу г. Оренбург, ул. Пролетарская 72/1.'
    },
    boss: area.boss,
    areaName: area.areaName,
    pointColor: area.areaColor,
    pointImage: '/mapimages/sakmara.jpg',
}

export const oktyabrPoint = {
    coord: [52.356153, 55.516019],
    type: 'office',
    name:'с. Октябрьское',
    address: 'ул. Губкина, 1',
    phone: '(353-30) 2-50-06',
    work: {
        monday: 'с 8:30 до 11:00',
        tuesday: 'с 8:30 до 11:00',
        wednesday: 'с 8:30 до 11:00',
        thursday: 'с 8:30 до 11:00',
        friday: 'с 8:30 до 16:15',
        saturday: 'Выходной',
        sunday: 'Выходной',
        other: '<b>Дополнительно прием осуществляется</b> по субботам с 9.00 до 15.00 по адресу г. Оренбург, ул. Пролетарская 72/1.'
    },
    boss: area.boss,
    areaName: area.areaName,
    pointColor: area.areaColor,
    pointImage: '/mapimages/oktyabrskoe.jpg',
}

export const ilekPoint = {
    coord: [51.533036, 53.374849],
    type: 'office',
    name:'с. Илек',
    address: 'ул. Пионерская, 29',
    phone: '(353-37) 2-75-27',
    work: {
        monday: 'с 8:30 до 11:00',
        tuesday: 'с 8:30 до 11:00',
        wednesday: 'с 8:30 до 11:00',
        thursday: 'с 8:30 до 11:00',
        friday: 'с 8:30 до 16:15',
        saturday: 'Выходной',
        sunday: 'Выходной',
        other: '<b>Дополнительно прием осуществляется</b> по субботам с 9.00 до 15.00 по адресу г. Оренбург, ул. Пролетарская 72/1.'
    },
    boss: area.boss,
    areaName: area.areaName,
    pointColor: area.areaColor,
    pointImage: '/mapimages/ilek.jpg',
}

export const perevolotskPoint = {
    coord: [51.882266, 54.185965],
    type: 'office',
    name:'п. Переволоцкий',
    address: 'ул. Восточная, 12б',
    phone: '(353-38) 2-20-13',
    work: {
        monday: 'с 8:30 до 11:00',
        tuesday: 'с 8:30 до 11:00',
        wednesday: 'с 8:30 до 11:00',
        thursday: 'с 8:30 до 11:00',
        friday: 'с 8:30 до 16:15',
        saturday: 'Выходной',
        sunday: 'Выходной',
        other: '<b>Дополнительно прием осуществляется</b> по субботам с 9.00 до 15.00 по адресу г. Оренбург, ул. Пролетарская 72/1.'
    },
    boss: area.boss,
    areaName: area.areaName,
    pointColor: area.areaColor,
    pointImage: '/mapimages/perevolockiy.jpg',
}

export const tulganPoint = {
    coord: [52.346587, 56.153203],
    type: 'office',
    name:'с. Тюльган',
    address: 'пер. Газовый, 5',
    phone: '(353-32) 2-90-20',
    work: {
        monday: 'с 8:30 до 11:00',
        tuesday: 'с 8:30 до 11:00',
        wednesday: 'с 8:30 до 11:00',
        thursday: 'с 8:30 до 11:00',
        friday: 'с 8:30 до 16:15',
        saturday: 'Выходной',
        sunday: 'Выходной',
        other: '<b>Дополнительно прием осуществляется</b> по субботам с 9.00 до 15.00 по адресу г. Оренбург, ул. Пролетарская 72/1.'
    },
    boss: area.boss,
    areaName: area.areaName,
    pointColor: area.areaColor,
    pointImage: '/mapimages/tulgan.jpg',
}

export const sharlikPoint = {
    coord: [52.920802, 54.716770],
    type: 'office',
    name:'с. Шарлык',
    address: 'ул. Автозаправочная, 1',
    phone: '(353-58) 2-60-04',
    work: {
        monday: 'с 8:30 до 11:00',
        tuesday: 'с 8:30 до 11:00',
        wednesday: 'с 8:30 до 11:00',
        thursday: 'с 8:30 до 11:00',
        friday: 'с 8:30 до 16:15',
        saturday: 'Выходной',
        sunday: 'Выходной',
        other: '<b>Дополнительно прием осуществляется</b> по субботам с 9.00 до 15.00 по адресу г. Оренбург, ул. Пролетарская 72/1.'
    },
    boss: area.boss,
    areaName: area.areaName,
    pointColor: area.areaColor,
    pointImage: '/mapimages/sharlik.jpg',
}
