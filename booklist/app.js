function Book(title , author , id)
{
 this.title = title ; 
 this.author = author ; 
 this.isbn = id 
}

function UI() {}

UI.prototype.addBookToList = function(book)
{
 const list = document.getElementById('book-list');

 const row = document.createElement('tr');
 row.innerHTML = `
 <td>${book.title}</td>
 <td>${book.author}</td>
 <td>${book.isbn}</td>
 <td><a href="#" class="delete">X</a></td>
 `;
 list.appendChild(row);
}

UI.prototype.clearField = ()=> { 
    document.getElementById('title').value ='' ;
    document.getElementById('author').value ='' ;
    document.getElementById('isbn').value = ' ';

}

UI.prototype.showAlert = (message,className) => {
 const div =document.createElement('div');
 div.className = `alert ${className}` ;
 div.appendChild(document.createTextNode(message));

 const container = document.querySelector('.container');

 const form = document.querySelector('#book-form');

 container.insertBefore(div, form);

 setTimeout(() => {
     document.querySelector('.alert').remove();
 }, 3000);
}

document.getElementById('book-form').addEventListener('submit' , function(e)
{
    //form value
    const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value ;

    const book = new Book(title , author , isbn);
    const ui = new UI();
   
    if(title=='' || author == '' || isbn==''){
        ui.showAlert('Fill all the fields' ,'error')
    }
    else{
        ui.addBookToList(book);
        ui.clearField();
    }
   

    console.log(ui);


 //   console.log(book);
    e.preventDefault();
})