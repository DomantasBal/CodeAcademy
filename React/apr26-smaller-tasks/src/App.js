// TASK 1
// import Hero from "./components/Hero";
// import Post from "./components/Posts";

// TASK 2
import Content from "./components2/Content";
import Feature from "./components2/Feature";
import Header from "./components2/Header";
import SignUp from "./components2/SignUp";
import Topbar from "./components2/Topbar";

import "./App.css";

const colorSettings = {
  Topbar: "cyan",
  Header: "blue",
  Content: "lightgrey",
  SignUp: "purple",
  Feature: "green",
};

function App() {
  return (
    // =========== TASK 1 =========
    // <div className="App">
    //   <Hero />
    //   <div className="posts-grid">
    //     <Post />
    //     <Post />
    //     <Post />
    //     <Post />
    //     <Post />
    //   </div>
    // </div>

    <div className="App">
      <Topbar background={colorSettings.Topbar} />
      <Header background={colorSettings.Header} />
      <Content background={colorSettings.Content} />
      <SignUp background={colorSettings.SignUp} />
      <Feature background={colorSettings.Feature} />
    </div>
  );
}

export default App;
