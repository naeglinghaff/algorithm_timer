function Spinner() {

  var message = "message";

  return React.createElement(
    "p",
    null,
    message
  );
}

ReactDOM.render(React.createElement(Spinner, null), document.getElementById('spinner'));