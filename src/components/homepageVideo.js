import React from 'react';

export default function BackVid() {
    return (
        <video id="background-video" loop autoPlay muted>
            <source src="./HardDrivePhotojpeg.mp4" type="video/mp4" />
            your browser does not support the video tag
        </video>
    )
}