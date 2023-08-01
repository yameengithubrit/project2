import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { FaFlag } from 'react-icons/fa';

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
export default function Footer() {
  const handleFlagSelect = (countryCode) => {
    console.log(`Selected country code: ${countryCode}`);
  };
  return (
    <div id="footer">
      <div className="footer-container">
        <footer className="footr">
          <div className="row" id="row">
            <div className="col">
              <img src="logo1.png" alt="" />
              <p>
                We offer a full life-cycle of network integration services –
                design, build, operate and support of customer networks. With a
                unique operational model, best of breed portfolio and technical
                expertise around complex networking.
              </p>
            </div>

            <div className="col">
              <h3>Links</h3>

              <ul>
                <li>
                  <a href="#">Header</a>
                </li>
                <li>
                  <a href="#">Feactures</a>
                </li>
                <li>
                  <a href="#">Offer</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h3>Social Media Links</h3>
              <div className="social-links">
                <FaGithub className="ic1" />
                <FaInstagram className="ic2" />
                <FaLinkedin className="ic3" />
              </div>
            </div>
          </div>

          <div class="row" id="row1">
            <div className="col-sm">
              <h3>Locations</h3>
            </div>
            <div class="col-sm">
              <div>
                <h4 className="loc1">Canada</h4>
                <img
  alt="United States"
  src="Canada.png"/>
                
                <span>
                  {" "}
                  5-1788 Drew Road, Mississauga, <br/>
ON L5S1L7, Canada
                </span>
              </div>
            </div>
            <div class="col-sm">
              <div>
                <h4 className="loc1">UK</h4>
                <img
  alt="United States"
  src="uk.jpg"/>
                <span>
                  {" "}
                  268 Bath Road Slough SL14DX, <br/>London, UK
                </span>
              </div>
            </div>
            <div class="col-sm">
              <div>
                <h4 className="loc1">Pakistan</h4>
                <img
  alt="United States"
  src="pak.png"/>
                <span>
                  {" "}

                  3rd Floor, Al-baber Centre,<br/>
F-8 markaz, Islamabad
Pakistan
                </span>
              </div>
            </div>

            <div class="col-sm">
              <div>
                <h4 className="loc1">UAE</h4>
                <img
  alt="United States"
  src="uae.png"/>
                <span>
                  {" "}
                  920 9th Floor, Burjuman Business<br/>
Towers, Dubai, UAE
                </span>
              </div>
            </div>
          </div>

          <div>
          <div>

      
    </div>
    </div>

        </footer>
      </div>
    </div>
  );
}
