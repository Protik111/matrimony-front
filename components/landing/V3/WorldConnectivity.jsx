import React from "react";

const WorldConnectivity = () => {
  return (
    <div className="world_connectivity">
      <div className="container flex flex-column flex-gap-20">
        <div className="title">
          <h1>World Wide Connectivity</h1>
        </div>
        <div className="right_section">
          <div className="video-thumb">
            <div className="homeVideo2_container">
              <div className="video_container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/UfeKeTWztp8?si=r0SkQYM_Rm2ZrgS6"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldConnectivity;