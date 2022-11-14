//console.dir(document);
console.log(document.URL);
console.log(document.title);
document.title="welcome to dom..";
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.forms);
console.log(document.links);

console.log(document.getElementById('header-title'));

var headertitle=document.getElementById('header-title');

headertitle.textContent="changed-newTitle";



var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[2].textContent='group3';
items[2].style.backgroundColor='green';

for(var i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}


var li=document.getElementsByClassName('li');
console.log(li);
console.log(li[1]);
li[2].textContent='group3';
li[2].style.backgroundColor='green';

for(var i=0;i<li.length;i++){
    li[i].style.fontWeight='bold';}

//queryselector's


 var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = "Hello World"

 var submit = document.querySelector('input[type="submit"]');
 submit.value = "SEND"

 var item = document.querySelector('.list-group-item');
 item.style.color = 'red';

var secondItem = document.querySelector('.list-group-item');
item.style.backgroundColor = 'green';

//queryselector's...

var secondItem = document.querySelectorAll('li:nth-child(2)');
 item.style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');


for(var i=0; i<odd.length; i++) 
{
 odd[i].style.backgroundColor = 'green';
 
 }


//dom traversals

var itemList=document.querySelector('#items');
console.log(itemList.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);


var itemList=document.querySelector('#items');
console.log(itemList.parentElement);
console.log(itemList.parentElement.parentElement.parentElement);


console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';



 console.log(itemList.firstChild);


 console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

 lastChild 
console.log(itemList.lastChild);

lastElementChild 
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';


console.log(itemList.nextSibling);
nextElementSibling 
console.log(itemList.nextElementSibling);


 console.log(itemList.previousSibling);
 previousElementSibling 
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

var newdiv=document.createElement('div');
console.log(newdiv);
newdiv.className="hello";
newdiv.id="hello123";
newdiv.setAttribute('title','hellodiv');

var newdivtext=doctype.createElementTextNode("helloworld");
newdiv.append(newdivtext);
console.log(newdiv);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newdiv,h1);
console.log(newdiv);











