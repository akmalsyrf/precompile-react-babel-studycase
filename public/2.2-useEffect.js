const App = () => {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log("init carousel"); //componentDidMount

    return () => {
      console.log("destroy carousel"); //componentWillUnmount
    };
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "Gabut aja yg penting biar ada state"), /*#__PURE__*/React.createElement("span", null, count));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));