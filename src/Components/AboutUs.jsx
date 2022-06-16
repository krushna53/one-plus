import React from "react";
import img3 from "../images/image4.png";

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="accordion-wrapper">
      <div
        className={`accordion-title ${isOpen ? "open" : "open"}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};
const Accodian = () => (
  <div className="wrapper About-section" id="about-us">
    <div className="container row">
      <div className="About-wrapper d-flex flex-column justify-content-end">

      </div>
      <div className="About-flex col-lg-6 d-flex justify-content-center flex-column align-items-center">
        <div className="wrapper">
          <h2>Our approach</h2>
          <Accordion title=" Global experience">
            We are a team of consultants with an immersive experience
            in global businesses. We work with you as partners; to deliver adaptive, effective
            and result-driven solutions.
          </Accordion>
          <Accordion title=" Customised package">
            To match your requirements and budgets, we deliver
            personalised solutions that are objective-driven and ROI-focussed with a sharp
            attention to detail.
          </Accordion>
          <Accordion title=" Cultural integration">
            The Internet has made the world flat. We specialise in
            creating strong brand identities that resonate with audiences across
            geographies, turning customers into loyalists.
          </Accordion>
        </div>

      </div>

      <div className="About-us-img col-lg-6">
        <img src={img3} alt="" />
      </div>

    </div>
{/*  */}
<div className="our-approach-bottom">
                     <div className="our-approach-box">
                        <h1>01</h1>
                        <h4>Evaluate & Define</h4>
                        <p>We audit how customers interact with your brand and work with your marketing team to define objectives and unlock growth. </p>
                     </div>
                     <div className="our-approach-box">
                        <h1>02</h1>
                        <h4>Strategise</h4>
                        <p>We devise compelling strategies to affect how consumers think, feel and act on your products, services and therefore, your brand. </p>
                     </div>
                     <div className="our-approach-box">
                        <h1>03</h1>
                        <h4>Design & Execute</h4>
                        <p>We partner with your team to co-create solutions and deliver them in-house or through our network of creative talent. </p>
                     </div>
                  </div>

    {/*  */}
  </div>
);

export default Accodian;