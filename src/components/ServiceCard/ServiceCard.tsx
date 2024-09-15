import { Link } from "react-router-dom";
import { ReactComponent as BtnIcon } from "../../Assets/icons/buttonIcon.svg";
import "./ServiceCard.css";

const ServiceRow = ({
  title,
  description,
  icn,
  path,
}: {
  title: string;
  description: string;
  icn: string;
  path: string;
}) => {
  return (
    <div className="service-row">
      <div className="service-icon">
        <img src={icn} alt="Service Icon" style={{ marginBottom: "unset" }} />
      </div>
      <div className="service-title">{title}</div>
      <div className="service-description">{description}</div>
      <Link to={path}>
        <div className="service-btn-icon">
          <BtnIcon />
        </div>
      </Link>
    </div>
  );
};

export default ServiceRow;
