const pageContent = {
    'html': {
        'head': {
            'title': 'Income Calculator'
        },
        'body': {
            'panel': {
                'panel-height': '80%',
                'panel-width': '90%',
                'panel-border': '1px solid black',
                'panel-border-radius': '1rem'
            }
        },
        'color-cache': {
            'main-color-bg': 'rgba(47,47,47,1)',
            'main-color-txt': 'rgba(210,210,210,1)'
        },
    },
    'head': {

    },
    'body': {

    },
    'reset': {
        'container': {
            'margin': '0',
            'padding': '0',
            'border': '0',
            'font-size': '100%',
            'font': 'inherit',
            'vertical-align': 'baseline',
            'display': 'block'
        },
        'body': {
            'line-height': '1',

        }

    }
}

document.title = pageContent['html']['head']['title'];

//#region Create>>Find>>Reset
var Reset = function (_elm) {
    const _reset = pageContent['reset']['container'];
    _elm.margin = _reset['margin'];
    _elm.padding = _reset['padding'];
    _elm.border = _reset['border'];
    _elm.fontSize = _reset['font-size'];
    _elm.font = _reset['font'];
    _elm.verticalAlign = _reset['vertical-align'];
    return;
}

//html
const __html = document.documentElement;
var __htm_attrs = pageContent['color-cache'];
var __htm = __html.style;
Reset(__htm);
//head
const __head = document.head;
const __h = __head.style;
Reset(__h);
//body 
const __body = document.body;
var __b = __body.style;
Reset(__b);


//#endregion


__htm.backgroundColor = __htm_attrs['main-color-bg'];
__htm.color = __htm_attrs['main-color-txt'];

const __panel = document.createElement('div');
var __pan = __panel.style;
var __pan_attrs = pageContent['html']['body'];

__pan.borderStyle = 'border-box';
__pan.backgroundColor = 'rgba(250,250,250,.2)';
__pan.width = __pan_attrs['panel-width'];
__pan.height = '10rem';
__body.appendChild(__panel);

console.log(__html);
