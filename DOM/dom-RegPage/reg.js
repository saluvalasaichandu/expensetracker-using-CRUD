
localStorage.setItem('userdetailsname','name')
localStorage.setItem('userdetailsemail','email')

var names=document.getElementById('name')
var email=document.getElementById('email')


var myForm=document.querySelector('#my-form');
myForm.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault();
    if(names.value==='' || email.value==='')
    {
        alert('please enter the values')
    }
    else
    {
        localStorage.setItem('userdetailsname',names.value)
        localStorage.setItem('userdetailsemail',email.value)
        
            }
        }