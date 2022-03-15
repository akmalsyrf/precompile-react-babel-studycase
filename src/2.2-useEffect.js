const App = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("init carousel"); //componentDidMount
    return () => {
      console.log("destroy carousel"); //componentWillUnmount
    };
  });

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Gabut aja yg penting biar ada state</button>
      <span>{count}</span>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
