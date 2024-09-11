import { ReactComponent as BtnIcon } from "../../Assets/icons/buttonIcon.svg";
import "./ServiceCard.css";

const ServiceRow = ({
  title,
  description,
  icn,
}: {
  title: string;
  description: string;
  icn: string;
}) => {
  return (
    <div className="service-row">
      <div className="service-icon">
        <img src={icn} alt="Service Icon" />
      </div>
      <div className="service-title">{title}</div>
      <div className="service-description">{description}</div>
      <div className="service-btn-icon">
        <BtnIcon />
      </div>
    </div>
  );
};

export default ServiceRow;
