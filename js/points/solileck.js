import area from '../areas/solileck.js';

export const solileckPoint = {
    coord: [51.156360, 54.994278],
    type: 'office',
    mainPoint: true,
    zindex: 106,
    name:'г. Соль-Илецк',
    address: 'ул. Советская, 6/1',
    phone: '(353-36) 2-20-09',
    work: {
        monday: 'с 8:30 до 17:30',
        tuesday: 'с 8:30 до 17:30',
        wednesday: 'с 8:30 до 17:30',
        thursday: 'с 8:30 до 17:30',
        friday: 'с 8:30 до 16:15',
        saturday: 'Выходной',
        sunday: 'Выходной',
        other: ''
    },
    boss: area.boss,
    areaName: area.areaName,
    pointColor: area.areaColor,
    pointImage: '/mapimages/solileck_main_short.jpg',
}
export const solileckTerminalPoint = {
    coord: [51.152586, 55.012945],
    type: 'terminal',
    zindex: 21,
    name:'г. Соль-Илецк',
    address: 'пер.Степной,1-а',
    phone: '',
    work: {
        monday: 'с 8:30 до 17:30',
        tuesday: 'с 8:30 до 17:30',
        wednesday: 'с 8:30 до 17:30',
        thursday: 'с 8:30 до 17:30',
        friday: 'с 8:30 до 16:15',
        saturday: 'Выходной',
        sunday: 'Выходной',
        other: ''
    },
    boss: area.boss,
    areaName: area.areaName,
    pointColor: area.areaColor,
    pointImage: '/mapimages/solileck_gro.jpg',
}

export const akbulakPoint = {
    coord: [51.001153, 55.613999],
    type: 'office',
    name:'п. Акбулак',
    address: 'ул. Терещенко, 24а',
    phone: '(353-35) 2-50-49',
    work: {
        monday: 'с 8:30 до 17:30',
        tuesday: 'с 8:30 до 17:30',
        wednesday: 'с 8:30 до 17:30',
        thursday: 'с 8:30 до 17:30',
        friday: 'с 8:30 до 16:15',
        saturday: 'Выходной',
        sunday: 'Выходной',
        other: ''
    },
    boss: area.boss,
    areaName: area.areaName,
    pointColor: area.areaColor,
}