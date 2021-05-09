function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this; // for confinig scope of  'this' inside onload  variable  or use arrow function 
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

// Make an HTTP POST Request
easyHTTP.prototype.post = function(url,data ,callback ){
this.http.open('POST', url , true) ;
this.http.setRequestHeader('Content-type','application/json'); //what i s this  function ? 

let self = this;  //or you can use arrow function to deal scopes of this 
this.http.onload = function(){
callback(null , self.http.responseText);
}

this.http.send(JSON.stringify(data));
}


// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url,data ,callback){
  this.http.open('PUT',url , true);
  this.http.setRequestHeader('Content-type','application/json'); 
 
   let self =this;
   this.http.onload = function(){
    callback(null , self.http.responseText);
    }
 
     this.http.send(JSON.stringify(data));
}


// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url,callback){
  this.http.open('DELETE' ,url ,callback);
  //this.http.setRequestHeader('Content-type','application/json');

 let self = this ;
 this.http.onload = function(){
   if(self.http.status === 200){
     callback(null , self.http.responseText + 'this Post is Deleted');
   }
   else { 
    callback('Error' + self.http.status) ;}
 }
   this.http.send();

}
