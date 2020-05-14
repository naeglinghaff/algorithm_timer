'use strict';

class ApiHandler {

  constructor() {
  }

  send(value){
    var options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(value)
    };
    fetch('/api', options);
  }

  returnTiming(){
    fetch('/api');
  }
}
