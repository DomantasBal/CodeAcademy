import Tab from "./Tab";
import "./Services.css";

// IMAGES
import car from "../../assets/images/car.png";

// ICONS
import carDiagnosticIcon from "../../assets/icons/car-diagnostic.svg";
import engineRepairIcon from "../../assets/icons/engine-repair.svg";
import carIcon from "../../assets/icons/car-icon.svg";
import batteryIcon from "../../assets/icons/battery.svg";

function Services() {
  return (
    <section id="services">
      <div className="services-left">
        <img src={car} alt="Car" />
        <h2>Auto Diagnostics</h2>
        <p>
          Through True Rich Attended does no end it his mother since favourable
          real had half every him case in packages enquire we up ecstatic.
          Through True Rich Attended does no end it his mother.
        </p>
      </div>

      <div className="services-right">
        <Tab icon={carDiagnosticIcon} desc="Auto Dignostics" />
        <Tab icon={engineRepairIcon} desc="Engine Repair" />
        <Tab icon={carIcon} desc="Body Work" />
        <Tab icon={batteryIcon} desc="Batteries" />
        <Tab icon={carDiagnosticIcon} desc="Car Wash" />
        <Tab icon={engineRepairIcon} desc="AC Repair" />
      </div>
    </section>
  );
}

export default Services;
