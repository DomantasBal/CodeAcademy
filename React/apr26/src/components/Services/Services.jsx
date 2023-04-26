import Tab from "./Tab"
import "./Services.css"

function Services() {
  return (
    <section id="services">
      <div className="services-left">
        <img src="#" alt="Car" />
        <h2>Auto Diagnostics</h2>
        <p>
          Through True Rich Attended does no end it his mother since favourable
          real had half every him case in packages enquire we up ecstatic.
          Through True Rich Attended does no end it his mother.
        </p>

      </div>

      <div className="services-right">
        <Tab icon="icon" desc="Auto Dignostics" />
        <Tab icon="icon" desc="Auto Dignostics" />
        <Tab icon="icon" desc="Auto Dignostics" />
        <Tab icon="icon" desc="Auto Dignostics" />
        <Tab icon="icon" desc="Auto Dignostics" />
      </div>
    </section>
  );
}

export default Services;
