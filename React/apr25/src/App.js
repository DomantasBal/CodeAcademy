import Product from "./components/Product";
import "./App.css";

function App() {
  // const input = "12312";

  let data = [
    {
      category: "Canvases",
      title: "OFF-WHITE AIR JORDAN 1 CANVAS",
      stars: "☆☆☆☆☆",
      price: 443,
    },

    {
      category: "Canvases",
      title: "OFF 1 CANVAS",
      stars: "☆☆☆☆☆",
      price: 1123,
    },

    {
      category: "Canvases",
      title: "OFF-BLACK AIR 1 CANVAS",
      stars: "☆☆☆☆☆",
      price: 278,
    },

    {
      category: "Canvases",
      title: " JORDAN 1 CANVAS",
      stars: "☆☆☆☆☆",
      price: 474,
    },

    {
      category: "Canvases",
      title: "OFF-WHITE AIR JORDAN 1 CANVAS",
      stars: "☆☆☆",
      price: 11,
    },

    {
      category: "Canvases",
      title: "OFF-WHITE AIR JORDAN 1 CANVAS",
      stars: "☆☆☆",
      price: 22,
    },

    {
      category: "Canvases",
      title: "OFF-WHITE AIR JORDAN 1 CANVAS",
      stars: "☆☆☆☆",
      price: 44,
    },

    {
      category: "Canvases",
      title: "OFF-WHITE AIR JORDAN 1 CANVAS",
      stars: "☆☆☆☆☆",
      price: 44,
    },

    {
      category: "Canvases",
      title: "OFF-WHITE AIR JORDAN 1 CANVAS",
      stars: "☆☆☆☆☆",
      price: 1,
    },
  ];
  return (
    <div className="App">
      <div>
        <h1>Products</h1>
      </div>

      <div className="productList">
        {data.map((item, index) => (
          <Product
            key={index}
            category={item.category}
            title={item.title}
            stars={item.stars}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
