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
document.getElementById('book-form').addEventListener('submit' , function(e)
{
    //form value
    const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value ;

    const book = new Book(title , author , isbn);
    const ui = new UI();

    ui.addBookToList(book);
    ui.clearField();
    console.log(ui);


 //   console.log(book);
    e.preventDefault();
})