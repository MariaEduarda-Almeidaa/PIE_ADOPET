import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import videoBackground from "../../assets/Videos/Apresentacao.mp4";
import Logo from "../../assets/Logo/Logo.png";

const Home = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const enableSound = async () => {
        try {
          await video.play();
          video.muted = false;
          setIsPlaying(true);
        } catch (err) {
          console.log("Autoplay com som não permitido:", err);
          video.muted = true;
          setIsMuted(true);
        }
      };
      enableSound();
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="home-container">
      <div className="welcome-section">
        <img src={Logo} alt="Adopet Logo" className="logo-img" />
        <p>Encontre seu novo amigo peludo aqui.</p>
      </div>
      
      <div 
        className="video-container"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="centered-video"
          controls={false}
          onClick={togglePlayPause}
        >
          <source src={videoBackground} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>

        {/* Botão de pause centralizado */}
        {(!isPlaying || showControls) && (
          <div className="center-play-button" onClick={togglePlayPause}>
            <button className="play-pause-button">
              {isPlaying ? '⏸' : '▶'}
            </button>
          </div>
        )}

        {/* Botão de mute no canto */}
        <div className="mute-button">
          <button onClick={toggleMute} className="control-button">
            {isMuted ? '🔇' : '🔊'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;