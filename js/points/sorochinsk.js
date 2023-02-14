import area from '../areas/sorochinsk.js';

export const sorochinskPoint = {
    coord: [52.436998, 53.153540],
    type: 'office',
    mainPoint: true,
    zindex: 107,
    name: 'г. Сорочинск',
    address: 'ул. Чапаева, 64',
    phone: '(353-46) 6-00-09',
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
}

export const sorochinskTerminalPoint = {
    coord: [52.409165, 53.160421],
    type: 'terminal',
    mainPoint: false,
    zindex: 98,
    name: 'г. Сорочинск',
    address: 'ул. Фурманова, 107',
    // phone: '(353-46) 6-00-09',
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
    pointImage: '/mapimages/sorochinsk_gro.jpg',
}

export const novosergPoint = {
        coord: [52.098623, 53.641424],
        type: 'office',
        name: 'п. Новосергиевка',
        address: 'ул. Пролетарская, 58а',
        phone: '(353-39) 2-90-99',
        work: {
            hide: false,
            monday: 'Выходной',
            tuesday: 'Выходной',
            wednesday: 'с 8:30 до 17:30 ',
            thursday: 'Выходной',
            friday: 'с 8:30 до 16:15',
            saturday: 'Выходной',
            sunday: 'Выходной',
            other: ''
        },
        boss: area.boss,
        areaName: area.areaName,
        pointColor: area.areaColor,
        pointImage: '/mapimages/novoserg.jpg',
    }

export const pleshanovoPoint = {
        coord: [52.850070, 53.485656],
        type: 'terminal',
        name: 'с. Плешаново',
        address: 'ул. Мира, 6',
        // phone: '(353-45) 3-80-10',
        work: {
            hide: false,
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
        pointImage: '/mapimages/pleshanovo.jpg',
    }

export const tashlaPoint = {
        coord: [51.765624, 52.746235],
        type: 'terminal',
        name: 'с. Ташла',
        address: 'ул. Хлебная, 4',
        // phone: '(353-47) 2-13-89',
        work: {
            hide: false,
            monday: 'с 9:00 до 17:00',
            tuesday: 'с 9:00 до 17:00',
            wednesday: 'с 9:00 до 17:00',
            thursday: 'с 9:00 до 17:00',
            friday: 'с 9:00 до 16:00',
            saturday: 'Выходной',
            sunday: 'Выходной',
            other: ''
        },
        boss: area.boss,
        areaName: area.areaName,
        pointColor: area.areaColor,
        pointImage: '/mapimages/tashla.jpg',
    }
