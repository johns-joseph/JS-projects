document.querySelector('.get-jokes').addEventListener('click', loadJokes);

function loadJokes(e){
 const number =document.querySelector('input[type="number"]').value;
 
 //console.log(number);
 const xhr = new XMLHttpRequest();
 xhr.open('GET' ,`http://api.icndb.com/jokes/random/${number}` ,true) ;
 
 

 xhr.onload = function(){
   if(this.status===200){
     const response = JSON.parse(this.responseText) ;
     //console.log(response);
 let output = '';

      if(response.type==='success'){
    response.value.forEach( function(joke){    //value.foreach  as we only need to loop through the value of arrays   
        output  += `<li>${joke.joke}</li>`
    })
      }
      else
       output += '<li>Somwthing went wrong</li>'
       
       document.querySelector('.jokes').innerHTML = output ; 
   }
 }

 xhr.send();
  e.preventDefault();
}








// document.querySelector('.get-jokes').addEventListener('click', getJokes);

// function getJokes(e) {
//   const number = document.querySelector('input[type="number"]').value;

//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

//   xhr.onload = function() {
//     if(this.status === 200) {
//       const response = JSON.parse(this.responseText);
      
//       let output = '';

//       if(response.type === 'success') {
//         response.value.forEach(function(joke){
//           output += `<li>${joke.joke}</li>`;
//         });
//       } else {
//         output += '<li>Something went wrong</li>';
//       }

//       document.querySelector('.jokes').innerHTML = output;
//     }
//   }

//   xhr.send();

//   e.preventDefault();
// }