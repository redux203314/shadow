console.log("Hola desde sw");
self.addEventListener('install',event =>{
    self,skipwaiting
});
self.addEventListener('activate',event=>{
    console.log("hola")
});
self.addEventListener('fetch', event =>{
console.log("Hola");

event.respondWith( fetch(event.request) ); 
return event.request;
if (event.request.url.includes ('http://localhost:8080/images/'))
console.log(event.request.url)
});
