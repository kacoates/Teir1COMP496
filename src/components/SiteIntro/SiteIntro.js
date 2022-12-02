import React from 'react';
import './SiteIntro.css';

const SiteIntro = () => {
    return (
        <>
        <div className="aboutSite_container">
          <div className="aboutSite_card">
            <div className="aboutSite_card__content">
              <h1 className="about_name">Movie Night Site</h1>
              <div
                className="stroke"
                style={{
                  backgroundColor: "white",
                  height: "1px",
                  width: "100%",
                  marginTop: "4px",
                }}
              ></div>
              <br />
              <p>
                We at Tier1 love watching movies but often find ourselves spending more time looking for the right movie. So we sought out to make our own movie recommendation system that is easy to use but effective. 
              </p>
              <p>To use this tool, follow these three easy steps:</p>
              <ol type = '1'>
                <li>Search for at least five of your favorite movies by using the search bar and selecting the title.</li>
                <li>When the five movies are selected, the bar will say "Ready!". Press "Get Recommendations"</li>
                <li>View your recommendations! Press "Reset" if you want to use the tool again.</li>
              </ol>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default SiteIntro;