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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Data Fetch"), loading ? /*#__PURE__*/React.createElement("i", null, "Loading data ... ") : /*#__PURE__*/React.createElement("ul", null, kotaa.map(kota => {
    return /*#__PURE__*/React.createElement("li", {
      key: kota.id
    }, kota.nama);
  })));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));