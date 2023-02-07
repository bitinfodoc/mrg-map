export function coordReverse(data) {
    return data.map(i => i.map(i => [i[1], i[0]] ))
};

export var borderStyle = {
    // Описываем опции геообъекта.
    // Цвет заливки.
    fillColor: '#00FF00',
    // Цвет обводки.
    strokeColor: '#0000FF',
    // Общая прозрачность (как для заливки, так и для обводки).
    opacity: 0.5,
    // Ширина обводки.
    strokeWidth: 1,
    // Стиль обводки.
    strokeStyle: 'solid'
}