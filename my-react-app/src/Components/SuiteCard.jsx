import React from "react";
import "./SuiteCard.css";
import { FaRegBookmark } from "react-icons/fa";
// import { Coffee, ArrowRight } from "lucide-react";
import { FaMugHot, FaArrowRight } from "react-icons/fa";
import { FaMapMarkerAlt, FaUsers, FaBed, FaRulerCombined, FaStar } from "react-icons/fa";
import { FaArrowLeft, FaWifi, FaWineGlass, FaHome, FaTv, FaDoorClosed,  } from "react-icons/fa";

// import { FaWifi, FaBed, FaWineGlass, FaHome, FaTv, FaDoorClosed, FaMapMarkerAlt, FaRulerCombined, FaShower, FaUser } from "react-icons/fa";

const SuiteCard = () => {
  return (
    <div className="suite-container">
        <div className="suite-top-icons">
        <FaArrowLeft className="icon-left" />
        {/* <FaBookmark className="icon-right" /> */}
        <FaRegBookmark className="icon-right" />
      </div>
      {/* Image without import */}
      <div className="suite-image">
        <img src="https://th.bing.com/th/id/OIP.3Z-3upFWjxaa24IxwigmmgHaFj?pid=ImgDet&w=191&h=143&c=7" alt="Suite" />
        {/* <div className="">
        <button className="tour-btn">Take a 360° tour of the suite</button>
        </div> */}
         <button className="tour-button">
      <FaMugHot className="icon" />
      <span>Take a 360° tour of the suite.</span>
      <FaArrowRight className="icon1" />
    </button> 
      </div>

      
        {/* <h2>Suite <span className="price">$160</span></h2>
        <p className="location"><FaMapMarkerAlt /> Viana do Castelo, Portugal</p>

        <div className="suite-info">
          <span><FaUser /> 3</span>
          <span><FaBed /> 2+2</span>
          <span><FaShower /> 1</span>
          <span><FaRulerCombined /> 53.75 sqm</span>
        </div> */}
        <div className="suite-card">
      <div className="suite-header">
        <h2 className="suite-title">Suite</h2>
        <h2 className="suite-price">$160</h2>
      </div>
      <p className="suite-location">
        <FaMapMarkerAlt className="icon" /> Viana do Castelo, Portugal
      </p>
      <div className="suite-details">
        <span><FaUsers className="icon" /> 3</span>
        <span><FaBed className="icon" /> 2+2</span>
        <span><FaBed className="icon" /> 1</span>
        <span><FaRulerCombined className="icon" /> 53.75 sqm</span>
      </div>
      <div className="suite-footer">
        <span className="high-season">High season</span>
        <span className="rating">
          <FaStar className="star-icon" /> 4.9
        </span>
      </div>
    </div>
        <div className="suite-content">
        <div className="accommodations">
          <FaWifi /> <FaBed /> <FaWineGlass /> <FaHome /> <FaTv /> <FaDoorClosed />
        </div>

        <p className="details">
          Sophisticated and cozy, these suites were designed to envelop your senses, enabling you to relax and enjoy a complete experience.
        </p>

        <button className="book-btn">Book the room</button>
      </div>
    </div>
  );
};

export default SuiteCard;
