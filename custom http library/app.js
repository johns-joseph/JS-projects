const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });


//for single post

http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

const data = {
  title:'Custom post' ,
  body: ' This is my custom POST'
} ;

//CREAte post  inside fake json  API
// http.post('https://jsonplaceholder.typicode.com/posts',data , function(err,post){
//   if(err) {
//         console.log(err);
//       } else {
//         console.log(post   );
//       }
// });


//PUT request custom 
// http.put('https://jsonplaceholder.typicode.com/posts/1' ,data , function(err,post){
//   if(err)
//   console.log(err);
//   else
//   console.log(post);

// }) ; 

 //delete post
 http.delete('https://jsonplaceholder.typicode.com/posts/1' ,
 function(err,response){
 if(err){
   console.log(err);
 }
 else{
   console.log(response);
 }
 });