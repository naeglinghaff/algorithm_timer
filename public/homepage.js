'use strict';

class EventController {

  constructor(apihandler = new ApiHandler){
    this._apihandler = apihandler;
  }

  dropDown(){
    let object = this;
    var menu = document.getElementById("methods");
    menu.addEventListener("input", function() {
      var value = menu.options[menu.selectedIndex].text;
      object._apihandler.send(value);
    })
  }
}

const eventController = new EventController;
eventController.dropDown();
