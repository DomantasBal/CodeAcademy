import "../Hero/Hero.css";
import Button from "../Button/Button"

function Hero() {
  const heroImg = require("../../assets/images/hero-img.png");

  return (
    <section id="hero">
      <div className="hero-slide">
        <div className="hero-left">
          <img src={heroImg} alt="Car mechanic working on car" />
        </div>
        <div className="hero-right">
          <h1>Our Services</h1>
          <p>
            Through True Rich Attended does no end it his mother since real had
            half every him case in packages enquire we up ecstatic unsatiable
            saw Through True Rich Attended does
          </p>
            <Button text="Book Service"/>
        </div>
      </div>
    </section>
  );
}

export default Hero;
