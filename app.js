var button = document.getElementById('button');
var Name = document.getElementById('name');
var statButton = document.getElementById('statButton');
var pre = "";
var mid = "";
var suf = "";
var preR = ['', 'A', 'Ma', 'El', 'Pa', 'Ta', 'Si', 'Va', 'O', 'Re', 'Na', 'La', 'De', 'Be', 'Fa', 'Ki', 'Jo'];
var midR = ['dell', 'quil', 'kel', 'shen', 'far', 'ched', 'bar', 'gran', 'hal', 'jen', 'lim', 'mor', 'net', 'penn', 'rond', 'sark', 'tur', 'vash', 'yor', 'zen'];
var sufR = ['', 'am', 'ess', 'in', 'us', 'ic', 'ar', 'a', 'ac', 'ai', 'al', 'an', 'ea', 'el', 'er', 'ett', 'id', 'il', 'is', 'or'];
var R11;
var R12;
var R13;

function CreateName(){
    event.preventDefault;
    var random = Math.floor(Math.random() * 17);
    var random2 = Math.floor(Math.random() * 20);
    var random3 = Math.floor(Math.random() * 20);
    pre = preR[random];
    mid = midR[random2];
    suf = sufR[random3]; 
    Name.innerHTML = pre + mid + suf;
}

function CreateStats(){
    event.preventDefault();
    randomRoll(); 
    RSTR = R11;
    randomRoll(); 
    RDEX = R11;
    randomRoll(); 
    RCON = R11;
    randomRoll(); 
    RINT = R11;
    randomRoll(); 
    RWIS = R11;
    randomRoll(); 
    RCHA = R11;
    STR.innerHTML = RSTR;
    DEX.innerHTML = RDEX;
    CON.innerHTML = RCON;
    INT.innerHTML = RINT;
    WIS.innerHTML = RWIS;
    CHA.innerHTML = RCHA;
}

function randomRoll(){
   var numbers =[ 
    R1 = Math.floor(Math.random() * 6) + 1,
    R2 = Math.floor(Math.random() * 6) + 1,
    R3 = Math.floor(Math.random() * 6) + 1,
    R4 = Math.floor(Math.random() * 6) + 1];
    var i;
    console.log([1]);
    for (i = 0; i < numbers.length; i++) {
        console.log(numbers[1]);
      }
}

statButton.onclick= function(){
    CreateStats();
}

button.onclick = function(){
    CreateName();
}