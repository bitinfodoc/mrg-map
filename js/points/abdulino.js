import area from '../areas/abdulino.js';

    export const abdulinoPoint = {
        coord: [53.658527, 53.636366],
        type: 'office',
        mainPoint: true,
        zindex: 100,
        name: 'г. Абдулино',
        address: 'ул. Сельхозтехника, 1/6',
        phone: '(353-55) 2-69-09',
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
        pointImage: '/mapimages/abdulino_main_short.jpg',
    }
    
    export const ponomarPoint = {
        coord: [53.311964, 54.122463],
        type: 'office',
        zindex: 1,
        name: 'с. Пономаревка',
        address: 'ул. Советская, 58/3',
        phone: '(353-57) 2-08-89',
        work: {
            hide: false,
            monday: 'с 8:30 до 11:00 ',
            tuesday: 'с 8:30 до 11:00 ',
            wednesday: 'с 8:30 до 17:30 ',
            thursday: 'с 8:30 до 11:00 ',
            friday: 'с 8:30 до 16:15',
            saturday: 'Выходной',
            sunday: 'Выходной',
            other: ''
        },
        pointImage: '/mapimages/ponomar.jpg',
        boss: area.boss,
        areaName: area.areaName,
        pointColor: area.areaColor,
    }

    export const matveevPoint = {
        coord: [53.507831, 53.479583],
        type: 'office',
        zindex: 2,
        name: 'с. Матвеевка',
        address: 'ул. Комсомольская улица, 9А',
        phone: '(353-56) 2-70-09',
        work: {
            hide: false,
            monday: 'с 8:30 до 17:30 ',
            tuesday: 'с 8:30 до 11:00 ',
            wednesday: 'с 8:30 до 11:00 ',
            thursday: 'с 8:30 до 17:30 ',
            friday: 'с 8:30 до 11:00',
            saturday: 'Выходной',
            sunday: 'Выходной',
            other: ''
        },
        boss: area.boss,
        areaName: area.areaName,
        pointColor: area.areaColor,
    }
