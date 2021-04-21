var RedIMG = document.createElement('img');
var PrincipalFigure = document.getElementById('principalfigure');
var SmallerFigure1 = document.getElementById('smallerfigure1');
var SmallerFigure2 = document.getElementById('smallerfigure2');
var SmallerFigure3 = document.getElementById('smallerfigure3');
var SmallerFigure4 = document.getElementById('smallerfigure4');

function ZoonIn(){
RedIMG.src = "assets/Grupo novos graficos.svg";
RedIMG.style.position ='absolute';
RedIMG.style.right = '0';
RedIMG.style.top = '-4%';
RedIMG.style.width = '100%';
RedIMG.style.transform = 'scale(1.1)';
RedIMG.style.zIndex = '10';
this.appendChild(RedIMG);
};

function ZoonOut(){
    RedIMG.remove();
};

PrincipalFigure.onmouseover = SmallerFigure1.onmouseover = SmallerFigure2.onmouseover = SmallerFigure3.onmouseover = SmallerFigure4.onmouseover = ZoonIn;
PrincipalFigure.onmouseleave = SmallerFigure1.onmouseleave = SmallerFigure2.onmouseleave = SmallerFigure3.onmouseleave = SmallerFigure4.onmouseleave = ZoonOut;

