const pageContent = {
    'html': {
        'head': {
            'title': 'Income Calculator'
        },
        'body': {
            'padding': '1rem',
            'panel': {
                'height': '95%',
                'width': '95%',
                'border': '1px solid black',
                'border-radius': '2rem',
                'background': 'rgba(250,250,250,.2)',
                'margin': 'auto',
                'nav-bar': {
                    'height': '3rem',
                    'width': '100%',
                    'border-radiusTR': '2rem',
                    'border-radiusTL': '2rem',
                    'background': 'rgba(60,60,60,1)',
                }
            }
        },
        'color-cache': {
            'main-color-bg': 'rgba(47,47,47,1)',
            'main-color-txt': 'rgba(210,210,210,1)'
        },
    },
    'head': {
        'color-cache': {

        },
    },
    'body': {
        'color-cache': {

        },
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
var appendMultiple = function (_elm, _arr ) {
    for (let i = 0; i < _arr.length; i++) {
        _elm.appendChild(_arr[i]);
    }
}

var Reset = function (_elm) {
    const _reset = pageContent['reset']['container'];
    _elm.margin = _reset['margin'];
    _elm.padding = _reset['padding'];
    _elm.border = _reset['border'];
    _elm.fontSize = _reset['font-size'];
    _elm.font = _reset['font'];
    _elm.verticalAlign = _reset['vertical-align'];
    _elm.borderStyle = 'border-box';
    return;
}

//html
const __html = document.documentElement;
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

//html
//{
var __htm_attrs = pageContent['html']['color-cache'];
__htm.backgroundColor = __htm_attrs['main-color-bg'];
__htm.color = __htm_attrs['main-color-txt'];

//body
//{
__b.padding = pageContent['html']['body']['padding'];

//panel
//{
const __panel = document.createElement('div');
var __pan = __panel.style;
var __pan_attrs = pageContent['html']['body']['panel'];


__pan.backgroundColor = __pan_attrs['background'];
__pan.width = __pan_attrs['width'];
__pan.height = __pan_attrs['height'];
__pan.margin = __pan_attrs['margin'];
__pan.borderRadius = __pan_attrs['border-radius'];
__pan.border = __pan_attrs['border'];
//text{
const __nav_bar = document.createElement('nav')
var _nb = __nav_bar.style;
var __nav_attrs = pageContent['html']['body']['panel']['nav-bar'];
_nb.height = __nav_attrs['height'];
_nb.width = __nav_attrs['width'];
_nb.backgroundColor = __nav_attrs['background'];
_nb.borderTopRightRadius = __nav_attrs['border-radiusTR'];
_nb.borderTopLeftRadius = __nav_attrs['border-radiusTL'];
const a1 = document.createElement('a');
const a2 = document.createElement('a');
const a3 = document.createElement('a');

a1.textContent = 'Button 1';
a2.textContent = 'Button 2';
a3.textContent = 'Button 3';

appendMultiple(__nav_bar, [a1, a2, a3]);
__panel.appendChild(__nav_bar);

//}

__body.appendChild(__panel);
//}
//}
//}

console.log(__html);
