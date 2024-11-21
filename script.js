let selectField=document.getElementById('select-field');
let selectText=document.getElementById('select-text');
let options=document.getElementsByClassName('options');
let list =document.getElementById('list')
let arrowIcon =document.getElementById('arrowIcon')

selectField.onclick= function(){
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
}

for(e of options){
    e.onclick=function (){  
        selectText.innerHTML=this.textContent;
        list.classList.toggle('hide');
        arrowIcon.classList.toggle('rotate');
    }
}
