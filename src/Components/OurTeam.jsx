import React from "react";
import img1 from "../images/teammember1.jfif";
import img2 from "../images/teammember2.png";
import img3 from "../images/teammember3.jpeg";
// import img3 from "../images/KOICHIYOKOZEKI.jpeg";




function OurTeam(){
    return(
        <>
            <div className="our-team-section" id="Team">
                <div className="container">
                <div className="section-title"><h2>OUR TEAM</h2></div>

               <div id="row">
                <div className="team">
                    <div className="thumbnail">
                    <img src={img1} alt=".." className="team-img" /> 
                        <div className="caption">
                        <h4>XINGNA FU</h4>
                        <p>CEO & Founder</p>
                        <a href="https://www.linkedin.com/in/xingna-fu-15b453195/" target="blank"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
                        </div>

                    </div>
                </div>
                <div className="team">
                    <div className="thumbnail">
                    <img src={img2} alt=".." className="team-img" /> 
                        <div className="caption">
                        <h4>ADITI AYARE</h4>
                        <p>Partner & Project Lead</p>
                        <a href="https://www.linkedin.com/in/aditiayare/" target="blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
                        </div>

                    </div>
                
                </div>
                 <div className="team">
                     <div className="thumbnail">
                         <img src={img3} alt=".." className="team-img" />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                         <div className="caption">
                         <h4>EMMA DAVIES</h4>
                         <p>Marketing & Strategy Consultant </p>
                        
                         <a href="https://www.linkedin.com/in/emma-davies-co-uk/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in" aria-hidden="true" target="_blank"></i></a>
                         </div>

                     </div>
                 </div>
               </div>
              
                </div>
            </div>
        </>
    )
};

export default OurTeam;
