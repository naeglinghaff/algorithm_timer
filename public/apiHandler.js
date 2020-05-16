'use strict';

class ApiHandler {

  constructor(mapper = new ChartMapper) {
    this._mapper = mapper;
  }

// sends value to server side timer, returns results and calls chartmapper
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
    // console.log(data);
    this._mapper.map(data);
    };
  }
