'use strict';

class ApiHandler {

  constructor(mapper = new ChartMapper) {
    this._mapper = mapper;
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
    this._mapper.map(data);
    };
  }
