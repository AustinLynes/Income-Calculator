document.title = pageContent['html']['head']['title'];

var u_name;

var USERS = ['Austin']


var CheckUserName = (name)=>{
    if(USERS.includes(name)){
        var __day = new Date();
        alert(`Welcome ${name} How is your ${__day.getDay()}?`)

    }else{
        alert('You Are not Signed in Please Try Again');
        __htm.display = 'none';
    }
}

addEventListener('load', (event) => {
    var psuedo = prompt('Hello Welcome To my Web Development Engine!\nPlease Sign In to continue!', 'username');
    u_name = psuedo;

    CheckUserName(u_name);
});

//#region Create>>Find>>Reset
var appendMultiple = (_elm, _arr) => {
    for (let i = 0; i < _arr.length; i++) {
        _elm.appendChild(_arr[i]);
    }
}

var applyStyle = (_elm, _style, _all = false) => {
    _elm.height = _style['height'];
    _elm.width = _style['width'];
    _elm.backgroundColor = _style['background'];
    __pan.border = __pan_attrs['border'];
    if (_all) {
        _elm.borderTopRightRadius = _style['border-radiusTR'];
        _elm.borderTopLeftRadius = _style['border-radiusTL'];
        _elm.borderBottomRightRadius = _style['border-radiusBR'];
        _elm.borderBottomLeftRadius = _style['border-radiusBR'];
    } else {
        _elm.borderRadius = __pan_attrs['border-radius'];
    }
}

var CreateAnchor = (anch, name) => {
    anch.textContent = name;
    anch.href = '#';
    anch.style.padding = '1rem';
    anch.style.border = 'rgba(0,0,0,1)';
    anch.style.margin = '.1rem';
    anch.style.textDecoration = 'none';
    anch.style.color = 'rgba(110,110,110,1)';
    anch.style.background = 'rgba(27,27,27,.8)';
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

//html ---------------------------------------
const __html = document.documentElement;
var __htm = __html.style;
Reset(__htm);
__htm.padding = '0 10px';
//head ---------------------------------------
const __head = document.head;
const __h = __head.style;
Reset(__h);
//body ----------------------------------------
const __body = document.body;
var __b = __body.style;
Reset(__b);

//#endregion

//html
//{
var __htm_attrs = pageContent['html']['color-cache'];
__htm.backgroundColor = __htm_attrs['bg-color'];
__htm.color = __htm_attrs['font-color'];

const __nav_ct = document.createElement('div');
var __nav = __nav_ct.style;
__nav.background = 'rgba(47,47,47,1)';
__nav.width = '95%';
__nav.height = '3rem';
__nav.padding = '.3rem 1rem';
__nav.borderBottom = '1px solid black';
__nav.borderRight = '1px solid black';
__nav.borderLeft = '1px solid black';
__nav.borderBottomRightRadius = '.7rem';
__nav.borderBottomLeftRadius = '.7rem';
__nav.display = 'flex';
__nav.justifyContent = 'flex-end';


const __logo_ct = document.createElement('img');
var _logo = __logo_ct.style;
__logo_ct.src = './img/logo/lambda.png';
_logo.order = '1';
_logo.background = 'rgba(36,36,36,.6)';
_logo.height = '2rem';
_logo.width = '2rem';
_logo.borderRadius = '1rem';
_logo.padding = '.5rem';

__nav_ct.appendChild(__logo_ct);
__body.appendChild(__nav_ct);

const nav = document.createElement('nav');
nav.style.padding = '1rem .2rem';
__nav_ct.style.justifyContent = 'space-between';
__nav_ct.appendChild(nav);

const anc_1 = document.createElement('a');
CreateAnchor(anc_1, 'Sign In')
const anc_2 = document.createElement('a');
CreateAnchor(anc_2, 'About Us');
const anc_3 = document.createElement('a');
CreateAnchor(anc_3, 'Create a Page');

var anchors = [anc_1, anc_2, anc_3];

for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('mouseover', (event) => {
        anchors[i].style.background = 'red';
        anchors[i].style.fontWeight = 'bold';
        anchors[i].style.color = 'rgba(27,27,27,.8)';
    });
    anchors[i].addEventListener('mouseout', (event) => {
        anchors[i].style.background = 'rgba(27,27,27,.8)'
        anchors[i].style.fontWeight = 'normal';
        anchors[i].style.color = __htm_attrs['font-color'];
    });


}


appendMultiple(nav, anchors)

//}

console.log(__html);
