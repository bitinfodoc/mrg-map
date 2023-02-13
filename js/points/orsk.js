import area from '../areas/orsk.js';

export const orskPoint = {
        coord: [51.224754, 58.474630],
        type: 'office',
        mainPoint: true,
        name: 'г. Орск',
        address: 'ул. Ленинского Комсомола, 43',
        phone: '(353-7) 20-33-59',
        work: {
            hide: false,
            monday: 'с 8:30 до 17:30 ',
            tuesday: 'с 8:30 до 17:30 ',
            wednesday: 'с 8:30 до 17:30 ',
            thursday: 'с 8:30 до 17:30 ',
            friday: 'с 8:30 до 16:15',
            saturday: 'Выходной',
            sunday: 'Выходной',
            other: ''
        },
        boss: area.boss,
        areaName: area.areaName,
        pointColor: area.areaColor,
        // pointImage: '/mapimages/orsk_main.jpg',
    }

export const dombarovPoint = {
        coord: [50.758650, 59.527177],
        type: 'office',
        name: 'п. Домбаровский',
        address: 'ул. Кирова, 6, тел',
        phone: '(353-67) 2-00-23, (35368) 3-10-09',
        work: {
            hide: false,
            monday: 'с 8:30 до 17:30 ',
            tuesday: 'с 8:30 до 17:30 ',
            wednesday: 'с 8:30 до 17:30 ',
            thursday: 'с 8:30 до 17:30 ',
            friday: 'с 8:30 до 16:15',
            saturday: 'Выходной',
            sunday: 'Выходной',
            other: 'Эл.почта : as_jasnyj@mail.org056.ru'
        },
        boss: area.boss,
        areaName: area.areaName,
        pointColor: area.areaColor,
        pointImage: '/mapimages/dombarov.jpg',
    }

export const svetliyPoint = {
        coord: [50.819703, 60.852587],
        type: 'office',
        name: 'п. Светлый',
        address: 'ул. Торговая, 3',
        phone: '(353-66) 2-50-18',
        work: {
            hide: false,
            monday: 'с 8:30 до 17:30 ',
            tuesday: 'с 8:30 до 12:00 ',
            wednesday: 'с 8:30 до 17:30 ',
            thursday: 'с 8:30 до 12:00 ',
            friday: 'с 8:30 до 16:15',
            saturday: 'Выходной',
            sunday: 'Выходной',
            other: ''
        },
        boss: area.boss,
        areaName: area.areaName,
        pointColor: area.areaColor,
        pointImage: '/mapimages/svetliy.jpg',
    }

export const yasniyPoint = {
        coord: [51.036011, 59.872786],
        type: 'office',
        name: 'г. Ясный',
        address: 'ул. Ленина, 9',
        phone: '(353-68) 3-10-09',
        work: {
            hide: false,
            monday: 'с 8:30 до 17:30 ',
            tuesday: 'с 8:30 до 12:00 ',
            wednesday: 'с 8:30 до 17:30 ',
            thursday: 'с 8:30 до 12:00 ',
            friday: 'с 8:30 до 16:15',
            saturday: 'Выходной',
            sunday: 'Выходной',
            other: ''
        },
        boss: area.boss,
        areaName: area.areaName,
        pointColor: area.areaColor,
        pointImage: '/mapimages/yasniy.jpg',
    }
