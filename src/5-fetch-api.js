const App = () => {
  const [kotaa, setKota] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function getData() {
      const request = await fetch("https://api.banghasan.com/sholat/format/json/kota");
      const response = await request.json();

      setTimeout(() => {
        setKota(response.kota);
        setLoading(false);
      }, 2000);
    }
    getData();
  }, []);

  return (
    <>
      <h1>Data Fetch</h1>
      {loading ? (
        <i>Loading data ... </i>
      ) : (
        <ul>
          {kotaa.map((kota) => {
            return <li key={kota.id}>{kota.nama}</li>;
          })}
        </ul>
      )}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
