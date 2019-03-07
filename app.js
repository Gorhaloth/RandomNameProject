var button = document.getElementById('button');
var name = document.getElementById('Name');
var pre = "";
var mid = "";
var suf = "";
var pre1 = "A";
var mid1 = "dell";
var suf1 = "am";
var pre2 = "Ma";
var mid2 = "quil";
var suf2 = "ess";
var preR = ['A', 'Ma'];
var midR = ['dell', 'quil']
var sufR = ['am', 'ess']


function CreateName(){
    event.preventDefault;
    var random = Math.floor(Math.random() * 2)
    var random2 = Math.floor(Math.random() * 2)
    var random3 = Math.floor(Math.random() * 2)
    console.log(random);
    console.log(random2);
    console.log(random3);
    if(random == 0){
        pre = pre1;
    }else if(random == 1){
        pre = pre2;
    }
    if(random2 == 0){
        mid = mid1;
    }else if(random2 == 1){
        mid = mid2;
    }
    if(random3 == 0){
        suf = suf1;
    }else if(random3 == 1){
        suf = suf2;
    }
    Name.innerHTML = pre + mid + suf;
}


button.onclick = function(){
    CreateName();
}