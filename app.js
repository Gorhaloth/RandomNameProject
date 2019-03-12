var button = document.getElementById('button');
var Name = document.getElementById('name');
var statButton = document.getElementById('statButton');
var pre = "";
var mid = "";
var suf = "";
var preR = ['', 'A', 'Ma', 'El', 'Pa', 'Ta', 'Si', 'Va', 'O', 'Re', 'Na', 'La', 'De', 'Be', 'Fa', 'Ki', 'Jo'];
var midR = ['dell', 'quil', 'kel', 'shen', 'far', 'ched', 'bar', 'gran', 'hal', 'jen', 'lim', 'mor', 'net', 'penn', 'rond', 'sark', 'shen', 'tur', 'vash', 'yor', 'zen'];
var sufR = ['', 'am', 'ess', 'in', 'us', 'ic', 'ar', 'a', 'ac', 'ai', 'al', 'an', 'ea', 'el', 'er', 'ett', 'id', 'il', 'is', 'or'];

function CreateName(){
    event.preventDefault;
    var random = Math.floor(Math.random() * 17);
    var random2 = Math.floor(Math.random() * 21);
    var random3 = Math.floor(Math.random() * 20);
    console.log(random);
    console.log(random2);
    console.log(random3);
    if(random == 0){
        pre = preR[0];
    }else if(random == 1){
        pre = preR[1];
    }else if(random == 2){
        pre = preR[2];
    }else if(random == 3){
        pre = preR[3];
    }else if(random == 4){
        pre = preR[4];
    }else if(random == 5){
        pre = preR[5];
    }else if(random == 6){
        pre = preR[6];
    }else if(random == 7){
        pre = preR[7];
    }else if(random == 8){
        pre = preR[8];
    }else if(random == 9){
        pre = preR[9];
    }else if(random == 10){
        pre = preR[10];
    }else if(random == 11){
        pre = preR[11];
    }else if(random == 12){
        pre = preR[12];
    }else if(random == 13){
        pre = preR[13];
    }else if(random == 14){
        pre = preR[14];
    }else if(random == 15){
        pre = preR[15];
    }else if(random == 16){
        pre = preR[16];
    }

    if(random2 == 0){
        mid = midR[0];
    }else if(random2 == 1){
        mid = midR[1];
    }else if(random2 == 2){
        mid = midR[2];
    }else if(random2 == 3){
        mid = midR[3];
    }else if(random2 == 4){
        mid = midR[4];
    }else if(random2 == 5){
        mid = midR[5];
    }else if(random == 6){
        pre = preR[6];
    }else if(random == 7){
        pre = preR[7];
    }else if(random == 8){
        pre = preR[8];
    }else if(random2 == 9){
        mid = midR[9];
    }else if(random2 == 10){
        mid = midR[10];
    }else if(random2 == 11){
        mid = midR[11];
    }else if(random2 == 12){
        mid = midR[12];
    }else if(random2 == 13){
        mid = midR[13];
    }else if(random == 14){
        pre = preR[14];
    }else if(random == 15){
        pre = preR[15];
    }else if(random == 16){
        pre = preR[16];
    }else if(random2 == 17){
        mid = midR[17];
    }else if(random == 18){
        pre = preR[18];
    }else if(random == 19){
        pre = preR[19];
    }else if(random == 20){
        pre = preR[20];
    }

    if(random3 == 0){
        suf = sufR[0];
    }else if(random3 == 1){
        suf = sufR[1];
    }else if(random3 == 2){
        suf = sufR[2];
    }else if(random3 == 3){
        suf = sufR[3];
    }else if(random3 == 4){
        suf = sufR[4];
    }else if(random3 == 5){
        suf = sufR[5];
    }else if(random3 == 6){
        suf = sufR[6];
    }else if(random3 == 7){
        suf = sufR[7];
    }else if(random3 == 8){
        suf = sufR[8];
    }else if(random3 == 9){
        suf = sufR[9];
    }else if(random3 == 10){
        suf = sufR[10];
    }else if(random3 == 11){
        suf = sufR[11];
    }else if(random3 == 12){
        suf = sufR[12];
    }else if(random3 == 13){
        suf = sufR[13];
    }else if(random3 == 14){
        suf = sufR[14];
    }else if(random3 == 15){
        suf = sufR[15];
    }else if(random3 == 16){
        suf = sufR[16];
    }else if(random3 == 17){
        suf = sufR[17];
    }else if(random3 == 18){
        suf = sufR[18];
    }else if(random3 == 19){
        suf = sufR[19];
    }

    Name.innerHTML = pre + mid + suf;
}

function CreateStats(){
    event.preventDefault();
    var RSTR = Math.floor(Math.random() * 16) + 3;
    var RDEX = Math.floor(Math.random() * 16) + 3;
    var RCON = Math.floor(Math.random() * 16) + 3;
    var RINT = Math.floor(Math.random() * 16) + 3;
    var RWIS = Math.floor(Math.random() * 16) + 3;
    var RCHA = Math.floor(Math.random() * 16) + 3;
    STR.innerHTML = RSTR;
    DEX.innerHTML = RDEX;
    CON.innerHTML = RCON;
    INT.innerHTML = RINT;
    WIS.innerHTML = RWIS;
    CHA.innerHTML = RCHA;
}

statButton.onclick= function(){
    CreateStats();
}

button.onclick = function(){
    CreateName();
}