
class Book{
    constructor(title,author,id)
    {this.title = title ; this.author = author ; this.isbn = id;}
}
class UI
{
    addBookToList(book)
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

       clearField(){ 
        document.getElementById('title').value ='' ;
        document.getElementById('author').value ='' ;
        document.getElementById('isbn').value = ' ';
    }

    showAlert(message,className){
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
       
       
       deleteBook(target) {
       if(target.className=='delete'){
          target.parentElement.parentElement.remove();
       }
       
       }
       
    
}

class Store
{
    static getBooks(){
        let books;
        if(localStorage.getItem('books')===null)
        {
            books=[]; 
        }
        else{
            books = JSON.parse(localStorage.getItem('books'));

        }
        return books ; 
    }

    static displayBooks(){
        const books =   Store.getBooks();

        books.forEach( function(book)
        {
            const ui = new UI();
            ui.addBookToList(book);
        }
        ) ;
    }

    static addBooks(book){
        const books = Store.getBooks();

        books.push(book);
        localStorage.setItem('books' , JSON.stringify(books));

    }

     static removeBooks(isbn){
     //   console.log(isbn);
        const books = Store.getBooks();
    
           books.forEach( function(book , index)
           {
               if(book.isbn === isbn )
               {
                   books.splice(index , 1);
               }
           }) ;
           localStorage.setItem('books' , JSON.stringify(books));
  
    }
}

document.addEventListener('DOMContentLoaded' , 
Store.displayBooks) ;

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
        Store.addBooks(book);
        ui.showAlert('Book added to list' ,'success')

        ui.clearField();
    }
   

    console.log(ui);


 //   console.log(book);
    e.preventDefault();
})

//delete book
document.getElementById('book-list').addEventListener('click' , 
 function(e)
 {
// console.log('deleted');
const ui = new UI();

ui.deleteBook(e.target);

// remove from Ls
Store.removeBooks(e.target.parentElement.previousElementSibling.textContent);
 ui.showAlert('Book removed' ,'success');

 e.preventDefault();
 }
) ;