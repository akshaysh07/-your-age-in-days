// challenge: your age in days
function ageInDays(){

    var birthyear= prompt('your birthyear ');
    var yourageindays=(2021-birthyear)*365;
    var h1=document.createElement('h1');
    var textanswer=document.createTextNode('you are'  + yourageindays +'days old ');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(h1);
    
}

function reset(){
    document.getElementById('ageInDays').remove();
    
}
 