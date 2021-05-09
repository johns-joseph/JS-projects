document.getElementById('button1').addEventListener('click' , loadCustomer);

function loadCustomer()
{
  const xhr = new XMLHttpRequest();

  xhr.open('GET' , 'customer.json' , true) ; //true is for asynchronous operation 
  // instead of local text file we can replace it with public API  

  xhr.onload = function(){
    if(this.status ===200)
    {
      //console.log(this.responseText);
      const customers =JSON.parse(this.responseText);  // data is in json  

      let output = '' ;

     customers.forEach(function(customer){
       output += `
      <ul>
      <li>ID: ${customer.id}</li>
      <li>NAME: ${customer.name}</li>
      <li>Company: ${customer.company}</li>
      <li>Phone: ${customer.phone}</li>
      </ul>
      `;
     })

     

      document.getElementById('customer').innerHTML = output ;
    }
  }
  xhr.send();
}