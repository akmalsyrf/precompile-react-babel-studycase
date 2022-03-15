// class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			count: 0,
// 		};
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<p>{this.state.count}</p>
// 				<button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
// 				<button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
// 			</div>
// 		);
// 	}
// }
function App() {
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count - 1)
  }, "Minus"), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "Plus"));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#root"));