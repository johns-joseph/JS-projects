// Creating element 
const li= document.createElement('li');

li.className = 'collection-item' ;

li.id  ='new-item' ;
li.setAttribute('title' , 'New Item') ;

li.appendChild(document.createTextNode('Hello World'));

const link = document.createElement('a')
link.className ='delete-item secondary-content' ;

link.innerHTML = '<i class="fa fa-remove"></i>'
link.appendChild(link);

document.querySelector('ul.collection').appendChild(li);
console.log(li);