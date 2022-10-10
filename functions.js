//global variables
let currentState; 
var myEvent;

//key functions
function pressL(e){
    if(e instanceof KeyboardEvent){
        return e.key == "ArrowLeft";
    }
}
function pressR(e){
    if(e instanceof KeyboardEvent){
        return e.key == "ArrowRight";
    }
}
function pressUp(e){
    if(e instanceof KeyboardEvent){
        return e.key == "ArrowUp";
    }
}
function pressDown(e){
    if(e instanceof KeyboardEvent){
        return e.key == "ArrowDown";
    }
}
function pressSpace(e){
    if(e instanceof KeyboardEvent){
        return e.key == " ";
    }
}

function cycleFun(cycle) {
    if (cycle <= 361 && cycle >= 360){
        cycle = 0;
    }
    else{
        cycle += .01;
    }
    return cycle;
}

function sinFun(sin) {
    if (sin === -180){
        sin = 0;
    }
    else {
        sin -= .01;
    }
    return sin;
}

//rotate functions 
function rotateY(c, n){
    c.rotation.y += n;
    return c; 
}
function rotateX(c, n){
    c.rotation.x += n;
    return c; 
}
function rotateZ(c, n){
    c.rotation.z += n;
    return c; 
}

//constant functions
function pointOne(){
    return 0.1
}
function negpointOne(){
    return -0.1;
}

//error-catching functions
document.onkeydown = function (e) {
    myEvent =  e || window.event; 
};


