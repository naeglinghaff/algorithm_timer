'use strict';

class ApiHandler {

  constructor() {
  }

  send(value){
    var newvalue = { value };
    var options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newvalue)
    };
    fetch('/api', options);
  }
  
}
