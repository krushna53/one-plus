import React from "react";

function OurService() {
  return (
    <>
      <div className="our-service" id="service">
        <div className="container">
          <div className="our-service-wrapper d-flex flex-column justify-content-center align-items-center section-title">
            <h2 className="pb-4">OUR SERVICES</h2>
            <div className="our-service-flex">
              <div className="our-service-box">
                <h3>Evaluate & Define</h3>
                <p>We Diagnose the right areas of development and revealing insights to unlock growth. We audit and define how customers interact with your brand to co-create marketing objectives with your team.</p>
                <ul>
                  <li>Customer Insights</li>
                  <li>Market Insights</li>
                  <li>Consumer Journey Mapping</li>
                </ul>
              </div>
              <div className="our-service-box">
                <h3>
                  Strategize
                </h3>
                <p>We Create the most compelling way to affect how consumers think, feel and act on your product & your brand.</p>
                <ul>
                  <li>Branding Strategy</li>
                  <li>Consumer Marketing Strategy</li>
                  <li>Content Strategy</li>
                  <li>Digital & Performance marketing Strategy</li>
                  <li>Performance Marketing Strategy</li>
                </ul>
              </div>
              <div className="our-service-box" s>
                <h3>Design & Execute</h3>
                <p>We execute the strategies by working with your in-house team or our network of creative talent.</p>
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