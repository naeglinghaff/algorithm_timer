'use strict';

class ApiHandler {

  constructor() {
  }

   async send(value){
    var newvalue = { value };
    var options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newvalue)
    };
    let response = await fetch('/api', options);
    let data = await response.json();
    console.log(data);
    };
  }
