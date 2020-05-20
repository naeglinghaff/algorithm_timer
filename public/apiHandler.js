'use strict';

class ApiHandler {

  constructor(mapper = new ChartMapper) {
    this._mapper = mapper;
  }

// sends value to server side timer, returns results and calls chartmapper
   async send(value){
    var userSelection = { value };
    var options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(userSelection)
    };
    let response = await fetch('/api', options);
    let data = await response.json();
    if(this._mapper._graph != undefined){
      this._mapper.clearMap();
    }
    this._mapper.map(data);
    };
  }
