

/*const Random = (N = 2) => Math.round(Math.random() * N)
const wait = (sleep = 1) => new Promise(resolve => setTimeout(resolve, sleep * 1e3))
const COLOR_TEMPLATE = [`rgb(${Random(255)}, ${Random(255)}, ${Random(255)} )`, `rgb(${Random(255)},${Random(255)},${Random(255)})`] // 0: PLAYER COLOR | 1: ALGO COLOR 
const Sum = (A, B) => A + B//const clamp = (num, max, min = 0) => Math.max(Math.min(num, max), min)
const CALC_COLUNM = (matrice) => {let sum = 1;matrice[0].forEach((VALUE, IDX) => {(!((matrice[0][IDX] + matrice[1][IDX] + matrice[2][IDX]) ^ 3) ? sum = 0 : 1)});return sum}
const CALC_ROW = (matrice) => {let f = 1;matrice.forEach((VALUE) => VALUE.forEach((V, I) => {!(VALUE.reduce(Sum) ^ 3) ? f = 0 : false }));return f}
const MATRICE = [[0, 0, 0,0, 0, 0,0, 0, 0,], //PLAYER MATRICE[0, 0, 0,0, 0, 0,0, 0, 0,] //ALGO MATRICE]
var Template_Grid;var Turn = Random(); // 0 = Player | 1 = ALGO ;var Template = [];var CHECKED = 0
function Color_Template(T) {T.setAttribute('bin', 1);if (!Turn) {MATRICE[0][T.getAttribute('Index')] = 1;T.style.backgroundColor = COLOR_TEMPLATE[0];T.style.filter = `brightness(0.94) drop-shadow(16px 16px 20px ${COLOR_TEMPLATE[0]})`;T.title = "PLAYER"} else {MATRICE[1][T.getAttribute('Index')] = 1;T.style.backgroundColor = COLOR_TEMPLATE[1];T.style.filter = `brightness(0.94) drop-shadow(16px 16px 20px ${COLOR_TEMPLATE[1]})`;T.title = "ALGO"};T.style.opacity = 1;this.Template.splice(this.Template.indexOf(T.className), 1);CHECKED++;Turn = !Turn};
function MATRICE1D_TO_3D(M) {return M.map((Value, Index) => {if (!((Index + 1) % Math.sqrt(M.length))) return [M[Index - 2], M[Index - 1], Value]}).filter(VALUE => VALUE != undefined ? VALUE : false)}
function CHECK_MATRICE(M) {if (!(CALC_ROW(M) * CALC_COLUNM(M) * ((M[0][0] + M[1][1] + M[2][2]) ^ 3) * ((M[0][2] + M[1][1] + M[2][0]) ^ 3))) {return true}return false}
function CHECK_WINNER() {var PLAYER_MATRICE_3D = CHECK_MATRICE(MATRICE1D_TO_3D(MATRICE[0]));var ALGO_MATRICE_3D = CHECK_MATRICE(MATRICE1D_TO_3D(MATRICE[1]));return PLAYER_MATRICE_3D ? "PLAYER WON !" : ALGO_MATRICE_3D ? "ALGO WON !" : CHECKED >= 9 ? "EGALITY" : false}
function Random_Template() {let Randomed = document.getElementsByClassName(this.Template[Random(this.Template.length - 1)])[0];Color_Template(Randomed)}
async function Check_Turn(Template_Clicked) {if ((Template_Clicked.getAttribute('bin') == '1' || Turn) || CHECKED >= 9) return;Color_Template(Template_Clicked);await wait(0.618);if (CHECKED < 9);Random_Template();let WONNER = CHECK_WINNER();if (WONNER || WONNER == "EGALITY") {CHECKED = 10;document.getElementsByClassName('WON')[0].innerHTML = WONNER} await wait(1.67 - Random(2))}
window.addEventListener('load', () => {Template_Grid = document.getElementsByClassName('BackGround')[0].getElementsByTagName('div');Array.from(Template_Grid).forEach((OBJ, IDX) => {OBJ.setAttribute('bin', 0);OBJ.style.backgroundColor = 'rgb(0, 66, 75, 1)';OBJ.setAttribute('Index', IDX);Template.push(OBJ.className);OBJ.addEventListener('click', () => Check_Turn(OBJ));OBJ.addEventListener('mouseover', () => (!parseInt(OBJ.getAttribute('bin'))) ? OBJ.style.opacity = 0.65 : false);OBJ.addEventListener('mouseleave', () => OBJ.style.opacity = 1)});if (Turn) Random_Template()})*/


//OBFS USING -> https://obfuscator.io/ | |JS
const _0x1be32e=_0x3e06;(function(_0x1ed195,_0x433a74){const _0x5d3ec1=_0x3e06,_0x34400e=_0x1ed195();while(!![]){try{const _0x182d48=parseInt(_0x5d3ec1(0x19a))/0x1*(parseInt(_0x5d3ec1(0x197))/0x2)+-parseInt(_0x5d3ec1(0x172))/0x3+parseInt(_0x5d3ec1(0x185))/0x4*(parseInt(_0x5d3ec1(0x17f))/0x5)+parseInt(_0x5d3ec1(0x195))/0x6+-parseInt(_0x5d3ec1(0x170))/0x7+-parseInt(_0x5d3ec1(0x174))/0x8*(parseInt(_0x5d3ec1(0x188))/0x9)+parseInt(_0x5d3ec1(0x19b))/0xa;if(_0x182d48===_0x433a74)break;else _0x34400e['push'](_0x34400e['shift']());}catch(_0x50f1de){_0x34400e['push'](_0x34400e['shift']());}}}(_0x4a0c,0xa0e92));const Random=(_0x4bef92=0x2)=>Math[_0x1be32e(0x192)](Math[_0x1be32e(0x193)]()*_0x4bef92),wait=(_0x586100=0x1)=>new Promise(_0x12839b=>setTimeout(_0x12839b,_0x586100*0x3e8)),COLOR_TEMPLATE=['rgb('+Random(0xff)+',\x20'+Random(0xff)+',\x20'+Random(0xff)+'\x20)',_0x1be32e(0x177)+Random(0xff)+','+Random(0xff)+','+Random(0xff)+')'],Sum=(_0x46d51f,_0x4261d4)=>_0x46d51f+_0x4261d4,CALC_COLUNM=_0x2f04f9=>{const _0x4a87bf=_0x1be32e;let _0x22e9e7=0x1;return _0x2f04f9[0x0][_0x4a87bf(0x183)]((_0x3f2c4a,_0x5d3d1c)=>{!(_0x2f04f9[0x0][_0x5d3d1c]+_0x2f04f9[0x1][_0x5d3d1c]+_0x2f04f9[0x2][_0x5d3d1c]^0x3)?_0x22e9e7=0x0:0x1;}),_0x22e9e7;},CALC_ROW=_0x4e85c2=>{const _0x2f2a40=_0x1be32e;let _0x49283d=0x1;return _0x4e85c2['forEach'](_0x468280=>_0x468280[_0x2f2a40(0x183)]((_0x284ed0,_0x5101bf)=>{const _0x420765=_0x2f2a40;!(_0x468280[_0x420765(0x187)](Sum)^0x3)?_0x49283d=0x0:![];})),_0x49283d;},MATRICE=[[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0],[0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0]];var Template_Grid,Turn=Random(),Template=[],CHECKED=0x0;function Color_Template(_0x2502f0){const _0x5824c1=_0x1be32e;_0x2502f0[_0x5824c1(0x17a)](_0x5824c1(0x198),0x1);!Turn?(MATRICE[0x0][_0x2502f0['getAttribute']('Index')]=0x1,_0x2502f0[_0x5824c1(0x18d)][_0x5824c1(0x17c)]=COLOR_TEMPLATE[0x0],_0x2502f0[_0x5824c1(0x18d)]['filter']=_0x5824c1(0x18f)+COLOR_TEMPLATE[0x0]+')',_0x2502f0[_0x5824c1(0x16d)]=_0x5824c1(0x17d)):(MATRICE[0x1][_0x2502f0[_0x5824c1(0x182)](_0x5824c1(0x194))]=0x1,_0x2502f0[_0x5824c1(0x18d)][_0x5824c1(0x17c)]=COLOR_TEMPLATE[0x1],_0x2502f0[_0x5824c1(0x18d)][_0x5824c1(0x173)]=_0x5824c1(0x18f)+COLOR_TEMPLATE[0x1]+')',_0x2502f0[_0x5824c1(0x16d)]=_0x5824c1(0x191));;_0x2502f0[_0x5824c1(0x18d)][_0x5824c1(0x178)]=0x1,this[_0x5824c1(0x179)]['splice'](this[_0x5824c1(0x179)][_0x5824c1(0x180)](_0x2502f0['className']),0x1),CHECKED++,Turn=!Turn;};function MATRICE1D_TO_3D(_0x53004d){const _0x843c3a=_0x1be32e;return _0x53004d[_0x843c3a(0x184)]((_0x20a8af,_0x4710f1)=>{const _0x4d9334=_0x843c3a;if(!((_0x4710f1+0x1)%Math[_0x4d9334(0x189)](_0x53004d[_0x4d9334(0x186)])))return[_0x53004d[_0x4710f1-0x2],_0x53004d[_0x4710f1-0x1],_0x20a8af];})[_0x843c3a(0x173)](_0x26053d=>_0x26053d!=undefined?_0x26053d:![]);}function CHECK_MATRICE(_0x361c1c){if(!(CALC_ROW(_0x361c1c)*CALC_COLUNM(_0x361c1c)*(_0x361c1c[0x0][0x0]+_0x361c1c[0x1][0x1]+_0x361c1c[0x2][0x2]^0x3)*(_0x361c1c[0x0][0x2]+_0x361c1c[0x1][0x1]+_0x361c1c[0x2][0x0]^0x3)))return!![];return![];}function _0x3e06(_0x53c061,_0x27b300){const _0x4a0c3a=_0x4a0c();return _0x3e06=function(_0x3e064a,_0x15e22f){_0x3e064a=_0x3e064a-0x16d;let _0x1f03d3=_0x4a0c3a[_0x3e064a];return _0x1f03d3;},_0x3e06(_0x53c061,_0x27b300);}function CHECK_WINNER(){const _0x53fd1d=_0x1be32e;var _0x4ff3a8=CHECK_MATRICE(MATRICE1D_TO_3D(MATRICE[0x0])),_0x45fb34=CHECK_MATRICE(MATRICE1D_TO_3D(MATRICE[0x1]));return _0x4ff3a8?_0x53fd1d(0x176):_0x45fb34?'ALGO\x20WON\x20!':CHECKED>=0x9?_0x53fd1d(0x18b):![];}function Random_Template(){const _0x121881=_0x1be32e;let _0x3a4ad4=document[_0x121881(0x199)](this[_0x121881(0x179)][Random(this[_0x121881(0x179)][_0x121881(0x186)]-0x1)])[0x0];Color_Template(_0x3a4ad4);}async function Check_Turn(_0x2b2039){const _0x21ad73=_0x1be32e;if(_0x2b2039[_0x21ad73(0x182)](_0x21ad73(0x198))=='1'||Turn||CHECKED>=0x9)return;Color_Template(_0x2b2039),await wait(0.618);if(CHECKED<0x9);Random_Template();let _0x46e69c=CHECK_WINNER();(_0x46e69c||_0x46e69c=='EGALITY')&&(CHECKED=0xa,document[_0x21ad73(0x199)]('WON')[0x0][_0x21ad73(0x175)]=_0x46e69c),await wait(1.67-Random(0x2));}function _0x4a0c(){const _0xd84e8b=['style','push','brightness(0.94)\x20drop-shadow(16px\x2016px\x2020px\x20','className','ALGO','round','random','Index','2493108QBNfdC','rgb(0,\x2066,\x2075,\x201)','2TeYXGs','bin','getElementsByClassName','19549LJqUDw','8842090mYaqJs','title','load','getElementsByTagName','2767506EweoiI','mouseleave','2865849uoCGeL','filter','24ZqgKLs','innerHTML','PLAYER\x20WON\x20!','rgb(','opacity','Template','setAttribute','div','backgroundColor','PLAYER','mouseover','785CxumHq','indexOf','click','getAttribute','forEach','map','25412yRNMyY','length','reduce','920898TGFrQc','sqrt','BackGround','EGALITY','addEventListener'];_0x4a0c=function(){return _0xd84e8b;};return _0x4a0c();}window[_0x1be32e(0x18c)](_0x1be32e(0x16e),()=>{const _0x1dafa6=_0x1be32e;Template_Grid=document[_0x1dafa6(0x199)](_0x1dafa6(0x18a))[0x0][_0x1dafa6(0x16f)](_0x1dafa6(0x17b)),Array['from'](Template_Grid)[_0x1dafa6(0x183)]((_0x1c165c,_0x4d99da)=>{const _0x1e9e71=_0x1dafa6;_0x1c165c['setAttribute'](_0x1e9e71(0x198),0x0),_0x1c165c[_0x1e9e71(0x18d)]['backgroundColor']=_0x1e9e71(0x196),_0x1c165c['setAttribute']('Index',_0x4d99da),Template[_0x1e9e71(0x18e)](_0x1c165c[_0x1e9e71(0x190)]),_0x1c165c[_0x1e9e71(0x18c)](_0x1e9e71(0x181),()=>Check_Turn(_0x1c165c)),_0x1c165c[_0x1e9e71(0x18c)](_0x1e9e71(0x17e),()=>!parseInt(_0x1c165c[_0x1e9e71(0x182)]('bin'))?_0x1c165c['style'][_0x1e9e71(0x178)]=0.65:![]),_0x1c165c[_0x1e9e71(0x18c)](_0x1e9e71(0x171),()=>_0x1c165c[_0x1e9e71(0x18d)]['opacity']=0x1);});if(Turn)Random_Template();});

