//USEREF
// const App = () => {
//   const namaRef = React.useRef(null);
//   // React.useEffect(() => {
//   //   console.log(namaRef);
//   // });
//   function ketikaSubmit(e) {
//     e.preventDefault();
//     console.log(namaRef.current.value);
//   }
//   return (
//     <form action="">
//       <label>Nama: </label>
//       <input type="text" ref={namaRef} />
//       <button type="submit" onClick={ketikaSubmit}>
//         Kirim
//       </button>
//     </form>
//   );
// };
//USESTATE
const App = () => {
  const [name, setName] = React.useState("");

  function ketikaSubmit(e) {
    e.preventDefault();
    console.log(name);
  }

  return /*#__PURE__*/React.createElement("form", {
    onSubmit: ketikaSubmit
  }, /*#__PURE__*/React.createElement("label", null, "Nama: "), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: name,
    onChange: e => {
      // console.log(e.target.value); //tracking huruf demi huruf
      setName(e.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Kirim"));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));