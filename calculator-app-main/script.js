var display= document.getElementById("display");
var resul = document.getElementsByClassName("resul");
function appendRes(d){
    // if(resul.clicked===true && (display.innerText==="+"||display.innerText==="-"||display.innerText==="/"||display.innerText==="x")){
    //     display.innerText = `0${d}`;
    //     console.log(`0${d}`);
    //     resul.clicked=false;
    // } //--> to handle inputting a char without leftside number
    if(resul.clicked===true||display.innerText==="0"){
        display.innerText = d;
        resul.clicked = false;
    }
    else{
        display.innerText += d;
    }
    adjustFontSize();
}

function resetResl(){
    display.innerText="0"
    display.style.fontSize = "18px";
}

function deleteChar(){
    display.innerText = display.innerText.slice(0, -1);
    adjustFontSize();
}

function adjustFontSize(){
    resContainer = display.parentElement;
    const contentWidth = display.scrollWidth;
    const containerWidth = resContainer.clientWidth;
    let scale = 1;
    if (contentWidth > containerWidth) {
        scale = containerWidth / contentWidth;
    }
    display.style.transform = `scaleX(${scale})`;
}

function calcResl(){
    console.log(display.innerText);
    let equa=display.innerText;
    let f =false;
    let leftSide ="0", rightSide="0";
    for(let i=0;i<equa.length;i++){
        if((!isNaN(parseInt(equa[i])) || equa[i]==='.')&& f!==true){
            // console.log(equa[i]);
            leftSide += equa[i];
        }
        else if((!isNaN(parseInt(equa[i])) || equa[i]==='.')&& f===true){
            // console.log(equa[i]);
            rightSide += equa[i];
        }
        else{
            // console.log(equa[i]);
            char = equa[i];
            f = true;
        }
    }
    leftSide= parseFloat(leftSide);
    rightSide = parseFloat(rightSide);
    console.log(leftSide, rightSide, char);
    let res = 0;
    switch(char){
        case '+':
            res=rightSide + leftSide;
            console.log(res);
            break;
        case '-':
            res=leftSide - rightSide;
            console.log(res);
            break;
        case 'x':
            res = rightSide * leftSide;
            console.log(res);
            break;
        case '/':
            if(rightSide===0){
                res="Cannot divide by zero";
                console.log(res);
            }else{
                res = leftSide / rightSide;
                console.log(res);
            }
            break;
    }
    display.innerText=res;
    resul.clicked=true;
}