import area from './../areas/bugurus.js';

export const buguruslanPoint = {
    coord: [53.651798, 52.437026],
    type: 'office',
    mainPoint: true,
    zindex: 101,
    name: 'г. Бугуруслан',
    address: 'ул. Красногвардейская, 63',
    phone: '(35352) 6-60-10',
    work: {
        hide: false, // спрятать режим по дням, оставить только other
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
    pointImage: '/mapimages/buguruslan_main_short.jpg',
}

export const asekeevoPoint = {
    coord: [53.576171, 52.804347],
    type: 'office',
    zindex: 11,
    name: 'с. Асекеево',
    address: 'ул. Садовая, 9',
    phone: '(353-51) 2-80-09',
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
    pointImage: '/mapimages/asekeevo.jpg',
}
// export const mordvoDobrinoPoint = {
//     coord: [54.133130, 53.022435],
//     type: 'office',
//     name: 'с. Мордово-Добрино',
//     address: 'ул. Центральная, 21б',
//     phone: '(353-54) 2-42-65',
//     work: {
//         hide: false,
//         monday: 'с 8:30 до 17:30 ',
//         tuesday: 'с 8:30 до 17:30 ',
//         wednesday: 'с 8:30 до 17:30 ',
//         thursday: 'с 8:30 до 17:30 ',
//         friday: 'с 8:30 до 16:15',
//         saturday: 'Выходной',
//         sunday: 'Выходной',
//         other: ''
//     },
//     boss: area.boss,
//     areaName: area.areaName,
//     pointColor: area.areaColor,
// }
export const severnoePoint = {
    coord: [54.092179, 52.542209],
    type: 'office',
    zindex: 12,
    name: 'с. Северное',
    address: 'ул. Советская, 24А',
    phone: '(353-54) 2-22-20',
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
    pointImage: '/mapimages/severnoe.jpg',
}