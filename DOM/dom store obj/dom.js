
localStorage.setItem('userdetailsname','name')
localStorage.setItem('userdetailsemail','email')

var names=document.getElementById('name')
var email=document.getElementById('email')

var myForm=document.querySelector('#my-form');
myForm.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    if(names.value==='' || email.value===''){
        alert('please enter fields')
    }
    else{
let myObj={
    name:names.value,
    email:email.value
}
let myobj_serialized=JSON.stringify(myObj);
localStorage.setItem("myObj",myobj_serialized);
let myobj_deserialized=JSON.parse(localStorage.getItem("myObj"))
    }
}