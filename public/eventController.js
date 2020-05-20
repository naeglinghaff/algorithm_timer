'use strict';

class EventController {

  constructor(apihandler = new ApiHandler){
    this._apihandler = apihandler;
  }

// listens for change in selection, sends value to server via apihandler object
  dropDown(){
    let object = this;
    var menu = document.getElementById("methods");
    menu.addEventListener("input", function() {
      var value = menu.options[menu.selectedIndex].text;
      if(value == 'choose an option'){
        document.getElementById("message").innerHTML = "Please select the name of a function";
      } else {
      object._apihandler.send(value);
      document.getElementById("message").innerHTML = "Sit tight, results are on their way!";
      }
    })
  }

}

const eventController = new EventController;
eventController.dropDown();
