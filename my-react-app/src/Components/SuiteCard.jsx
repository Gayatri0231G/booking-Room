import React from "react";
import "./SuiteCard.css";
import { FaRegBookmark } from "react-icons/fa";
// import { Coffee, ArrowRight } from "lucide-react";
import { FaWifi, FaBed, FaWineGlass, FaHome, FaTv, FaDoorClosed, FaMapMarkerAlt, FaRulerCombined, FaShower, FaUser } from "react-icons/fa";

import { FaMugHot, FaArrowRight } from "react-icons/fa";
import { FaArrowLeft,} from "react-icons/fa";

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
      <FaMugHot className="icons" />
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
        {/* <div className="suite-content">
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
        
        <div className="accommodations">
          <FaWifi /> <FaBed /> <FaWineGlass /> <FaHome /> <FaTv /> <FaDoorClosed />
        </div>

        <p className="details">
          Sophisticated and cozy, these suites were designed to envelop your senses, enabling you to relax and enjoy a complete experience.
        </p>

        <button className="book-btn">Book the room</button>
      </div> */}
      <div className="suite-container">
      
      {/* Suite Content in One Box */}
      <div className="suite-box">
        <h2 className="suite-title">
          Suite <span className="price">$160 <small>High season</small></span>
        </h2>
        
        <p className="location">
          <FaMapMarkerAlt /> Viana do Castelo, Portugal
        </p>

        {/* Suite Info */}
        <div className="suite-info">
          <span><FaUser /> 3</span>
          <span><FaBed /> 2+2</span>
          <span><FaShower /> 1</span>
          <span><FaRulerCombined /> 53.75 sqm</span>
        </div>

        {/* Accommodations */}
        <h3 className="accommodation-title">Accommodations</h3>
        <div className="accommodations">
          <div className="accommodation-item"><FaWifi /><span>Wi-Fi</span></div>
          <div className="accommodation-item"><FaBed /><span>King size bed</span></div>
          <div className="accommodation-item"><FaWineGlass /><span>Minibar</span></div>
          <div className="accommodation-item"><FaHome /><span>Sea view balcony</span></div>
          <div className="accommodation-item"><FaTv /><span>Digital safe</span></div>
          <div className="accommodation-item"><FaDoorClosed /><span>Soundproof windows</span></div>
        </div>

        {/* Description */}
        <p className="details">
          Sophisticated and cozy, these suites were designed to envelop your senses, enabling you to free your mind, relax and enjoy a complete experience.
        </p>

        {/* Book Button */}
        <button className="book-btn">Book the room</button>
      </div>
    </div>
  
      
    </div>
  );
};

export default SuiteCard;
