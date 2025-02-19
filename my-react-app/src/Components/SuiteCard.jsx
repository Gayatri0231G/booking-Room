import React from "react";
import "./SuiteCard.css";
import { FaRegBookmark } from "react-icons/fa";
import { RiStarFill } from "react-icons/ri";
import { FaWifi, FaBed, FaWineGlass, FaHome, FaTv, FaDoorClosed, FaMapMarkerAlt, FaRulerCombined, FaShower, FaUser } from "react-icons/fa";
import { FaMugHot, FaArrowRight } from "react-icons/fa";
import { FaArrowLeft,} from "react-icons/fa";


const SuiteCard = () => {
  return (
    <div className="suite-container">
      <div className="suite-top-icons">
        <FaArrowLeft className="icon-left" />
        <FaRegBookmark className="icon-right" />
      </div>
      <div className="suite-image">
        <img src="https://th.bing.com/th/id/OIP.3Z-3upFWjxaa24IxwigmmgHaFj?pid=ImgDet&w=191&h=143&c=7" alt="Suite" />
          <button className="tour-button">
            <FaMugHot className="icons" />
            <span>Take a 360° tour of the suite.</span>
            <FaArrowRight className="icon1" />
          </button> 
      </div>
      <div className="suite-container1">
        <div className="suite-info-box">
          <h2 className="suite-title">
          Suite <span className="price">$160 </span></h2>
          <div className="Location">
            <p className="location"><FaMapMarkerAlt /> Viana do Castelo, Portugal<a className="high">High season</a></p>
          </div>
          <div className="suite-info">
            <span><FaUser /><a>3</a> </span>
            <span><FaBed /><a>2+2</a></span>
            <span><FaShower /><a>1</a> </span>
            <span><FaRulerCombined /><a>53.75sqm</a></span>
            <span className="star"><RiStarFill /><a className="star">4.7</a></span>
          </div>
        </div>
        <h3 className="accommodation-title">Accommodations</h3>
          <div className="accommodations">
            <div className="accommodation-item"><FaWifi /><span>Wi-Fi</span></div>
            <div className="accommodation-item"><FaBed /><span>King size bed</span></div>
            <div className="accommodation-item"><FaWineGlass /><span>Minibar</span></div>
            <div className="accommodation-item"><FaHome /><span>Sea view balcony</span></div>
            <div className="accommodation-item"><FaTv /><span>Digital safe</span></div>
            <div className="accommodation-item"><FaDoorClosed /><span>Soundproof windows</span></div>
          </div>
          <span className="details-title">Details</span>
            <p className="details">Sophisticated and cozy, these suites were designed to envelop your senses, enabling you to free your mind, relax and enjoy a complete experience.</p>
          <button className="book-btn">Book the room</button>
      </div>
    </div>
  );
};

export default SuiteCard;
