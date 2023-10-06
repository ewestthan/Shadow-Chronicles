import "./Card.css"
import FadeInSection from "./FadeInSection.jsx";
import React from 'react';

export default function Card() {

    return(
        <FadeInSection
        >

            <div className="Card">
                <div className="description-container">
                    <h2 className="card-title">
                        Title of video
                    </h2>
                    <p className="card-description">
                        This is a short description that might be longer in the future?
                    </p>
                </div>
                <iframe src='https://www.youtube.com/embed/Rx6GPpO37C4'
                    frameborder='0'
                    allow='autoplay; encrypted-media'
                    allowfullscreen
                    title='video'
                    className="card-video"
                />
            </div>
            </FadeInSection>

    )
}