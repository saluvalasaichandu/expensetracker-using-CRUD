var form=document.getElementById('addForm')
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');
//form submit event
form.addEventListener('submit', addItem);
itemList.addEventListener('click',removeItem)
filter.addEventListener('keyup',filterItems);
function addItem(e){
    e.preventDefault();
// get input value
var newItem=document.getElementById('item').value;
//creat new li element
var li=document.createElement('li');
//add class
li.className='list-group-item';

//add text node with input value
li.appendChild(document.createTextNode(newItem));
//create del button element
var deletebtn=document.createElement('button');
//add classes to del button
deletebtn.className='btn btn-danger btn-sm float-right delete';


deletebtn.appendChild(document.createTextNode('x'))

li.appendChild(deletebtn)
itemList.appendChild(li);
}

//remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
function filterItems(e){
    var text=e.target.value.toLowerCase();
    console.log(text);
    var items=itemList.getElementById('li');
    console.log(items);

    Array.from(items).forEach(function(item){
    var itemName=item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display='block';
    }
    else{
        item.style.display='none';
    }

});

}