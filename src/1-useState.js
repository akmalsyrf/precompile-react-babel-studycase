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
	return (
		<div>
			<button onClick={() => setCount(count - 1)}>Minus</button>
			<span>{count}</span>
			<button onClick={() => setCount(count + 1)}>Plus</button>
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector("#root"));
