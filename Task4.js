import fetch from "node-fetch";

function manageErrors(response) { 
    if(!response.ok){
          const responseError = { 
            statusText: response.statusText,
            status: response.status
          };
          throw(responseError); 
    }
    return response;
}
fetch('https://jsonplaceholder.typicode.com/users')  
    .then(manageErrors)  // untuk meng-handle errors
    .then(response => {
        if (response.json)
            response.json().
            then((json) => {
            json.forEach (e => console.log(e.name))});
    }).catch(function(error) {
          console.log('Error Code   : ' + error.status );
          console.log('Error Reason : ' + error.statusText);
    });