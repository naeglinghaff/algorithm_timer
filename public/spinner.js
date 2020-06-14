function Spinner() {

  const message = "message";

  return (
    <p>{message}</p>
  );
}

ReactDOM.render(
  <Spinner />,
  document.getElementById('spinner')
);
