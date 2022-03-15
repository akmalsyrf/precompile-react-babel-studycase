//BAGAIMANA CARA MEMANIPULASI DOM DI REACT? (catatan : lihat studycase 1)

// const App = () => {
//   React.useEffect(() => {
//     const judul = document.getElementById("judul");
//     setTimeout(() => {
//       judul.textContent = "Aplikasi";
//     }, 2000);
//   });
//   return <h1 id="judul">Application</h1>;
// };

// ReactDOM.render(<App />, document.getElementById("root"));

//lebih baik gunakan useRef

const App = () => {
  const judulRef = React.useRef(null);
  React.useEffect(() => {
    setTimeout(() => {
      judulRef.current.textContent = "Aplikasi";
    }, 2000);
  });
  return <h1 ref={judulRef}>Application</h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));
