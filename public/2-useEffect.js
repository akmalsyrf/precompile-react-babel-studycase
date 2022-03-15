//MENGAPA HARUS ADA LIFECYCLE COMPONENTDIDMOUNT?
// const App = () => {
//   return <h1 id="judul">Hello Bray</h1>;
// };
// setInterval(() => {
//   ReactDOM.render(<App />, document.getElementById("root"));
// }, 1000);
// console.log(document.getElementById("judul")); //null
//MASALAH TADI TERATASI DENGAN
const App = () => {
  //jalan berkali2 (render terus menerus ketika component dimounting /componentDidUpdate)
  // React.useEffect(() => {
  //   console.log(document.getElementById("judul"));
  // });
  //jalan sekali (componentDidMount)
  React.useEffect(() => {
    console.log(document.getElementById("judul"));
  }, []); //parameter ke-2 adalah input elemen yg ingin dirender ketika mounting

  return /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "Hello Bray");
};

setInterval(() => {
  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));
}, 1000);