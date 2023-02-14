import area from '../areas/mednogorsk.js';

export const mednogorskPoint = {
        coord: [51.408289, 57.581920],
        type: 'office',
        mainPoint: true,
        zindex: 104,
        name: 'г. Медногорск',
        address: 'ул. Кирова, 2',
        phone: '(353-79) 3-95-09',
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
        pointImage: '/mapimages/mednogorsk_main_short.jpg',
    }

export const belyaevkaPoint = {
        coord: [51.395489, 56.419760],
        type: 'office',
        zindex: 41,
        name: 'п. Беляевка',
        address: 'ул. Лесная, 51а',
        phone: '(353-34) 2-22-48',
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
        pointImage: '/mapimages/belyaevka.jpg',

    }

    export const kuvaPoint = {
        coord: [51.477283, 57.350505],
        type: 'office',
        zindex: 42,
        name: 'г. Кувандык',
        address: 'ул. Лесная, 51а',
        phone: '(353-61) 2-62-34',
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
        pointImage: '/mapimages/kuva.jpg',
    }

    
export const saraktashPoint = {
    coord: [51.791117, 56.362044],
    type: 'office',
    zindex: 43,
    name: 'с. Саракташ',
    address: 'ул. Коммунальная улица, 19',
    phone: '(353-33) 6-51-62',
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
    pointImage: '/mapimages/saraktash.jpg',
}