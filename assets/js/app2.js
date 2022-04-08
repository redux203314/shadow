if (navigator.serviceWorker) {
    //console.log("Soporta SW ");
    navigator.serviceWorker.register("sw1.js");
}
    else{
        console.log("no soportasw");
    
}