import React from "react";

function OurService() {
  return (
    <>
      <div className="our-service" id="service">
        <div className="container">
          <div className="our-service-wrapper d-flex flex-column justify-content-center align-items-center section-title">
            <h2>OUR SERVICES</h2>
            <div className="our-service-flex">
              <div className="our-service-box">
                <h1>01</h1>
                <h3>Evaluate & Define</h3>
                <p>We audit how customers interact with your brand and work with your marketing team to define objectives and unlock growth.</p>
                <ul>
                  <li>Customer Insights</li>
                  <li>Market Insights</li>
                  <li>Consumer Journey Mapping</li>
                </ul>
              </div>
              <div className="our-service-box">
                <h1>02</h1>
                <h3>
                  Strategize
                </h3>
                <p>We devise compelling strategies to affect how consumers think, feel and act on your products, services and therefore, your brand.</p>
                <ul>
                  <li>Branding Strategy</li>
                  <li>Consumer Marketing Strategy</li>
                  <li>Content Strategy</li>
                  <li>Digital & Performance marketing Strategy</li>
                  <li>Performance Marketing Strategy</li>
                </ul>
              </div>
              <div className="our-service-box">
                <h1>03</h1>
                <h3>Design & Execute</h3>
                <p>We partner with your team to co-create solutions and deliver them in-house or through our network of creative talent.</p>
                <ul>
                  <li>Brand Identity Design</li>
                  <li>Digital & Social Media Campaigns</li>
                  <li>Digital Campaign & Influencer Planning</li>
                  <li>Influencer Planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default OurService;