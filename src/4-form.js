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
  return (
    <form onSubmit={ketikaSubmit}>
      <label>Nama: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          // console.log(e.target.value); //tracking huruf demi huruf
          setName(e.target.value);
        }}
      />
      <button type="submit">Kirim</button>
    </form>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
