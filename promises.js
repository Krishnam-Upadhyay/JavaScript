var prom = new Promise(function(resolve,reject){

    var drive = false;
    if (drive){
        resolve("Yes");
    }
    else{
        reject("No");
    }
});

prom.then(function(resolve){
    console.log(resolve+"The User know how to drive");
}).catch(function(reject){
    console.log(reject+"The user does not know how to drive");

})
