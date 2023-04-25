import Product from "./components/Product";
import "./App.css";

function App() {
  // const input = "12312";

  let data = [
    {
      category: "Canvases",
      title: "OFF-WHITE AIR JORDAN 1 CANVAS",
      stars: "☆☆☆☆☆",
      price: 32,
    },

    {
      category: "Posters",
      title: "YEEZY BOOST 350 V2 FROZEN YELLOW POSTER",
      stars: "☆☆☆☆☆",
      price: 16,
    },

    {
      category: "Stickers",
      title: "YEEZY 350 V2 ZEBRA STICKER",
      stars: "☆☆☆☆☆",
      price: 5,
    },

    {
      category: "Jordans",
      title: " AIR JORDAN 4 RED SUEDE POSTER",
      stars: "☆☆☆☆☆",
      price: 16,
    },

    {
      category: "Balenciaga",
      title: "BALENCIAGA TRIPLE S POSTER",
      stars: "☆☆☆",
      price: 32,
    },

    {
      category: "Nike",
      title: "NIKE BLAZER MID SACAI POSTER",
      stars: "☆☆☆",
      price: 22,
    },

    {
      category: "Artists",
      title: "LIL PEEP POSTER",
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
        <h1>BEST SELLERS</h1>
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
