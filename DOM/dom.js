//console.dir(document);
console.log(document.URL);
console.log(document.title);
document.title="welcome to dom...";
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.forms);
console.log(document.links);

console.log(document.getElementById('header-title'));

var headertitle=document.getElementById('header-title');

headertitle.textContent="changed-newTitle";