import React from 'react';

const HeroVideo = ({title, videoLink}) => {
    return (
        <>
            <div className='container'>
                <div className="right_section">
                    <div className="video-thumb">
                        <div className='homeVideo2_container'>
                            <h1 className="text-center">{title}</h1>
                            <br></br>
                            <div className='video_container'>
                                {/* <iframe title="vimeo-player" src={videoLink}  width="640"
                                        height="360" frameborder="0" allowfullscreen="allowfullscreen"
                                        mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen"
                                        oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe> */}
                                <iframe width="560" height="315" src={videoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default HeroVideo;