import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import videoBackground from "../../assets/Videos/Apresentacao.mp4";
import Logo from "../../assets/Logo/Logo.png";

const Home = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleCanPlay = () => {
        video.play().catch((err) => {
          console.log("Autoplay não permitido:", err);
          video.muted = true;
          setIsMuted(true);
        });
      };

      video.addEventListener("canplay", handleCanPlay);

      return () => {
        video.removeEventListener("canplay", handleCanPlay);
      };
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
      } else {
        videoRef.current.pause();
      }
      setIsPlaying(!videoRef.current.paused);
    }
  };

  return (
    <div className="home-container">
      <div className="welcome-section">
        <img src={Logo} alt="Adopet Logo" className="logo-img-home" />
        <p className="apresentacao">Encontre seu novo amigo peludo aqui.</p>
      </div>

      <div className="video-container">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="centered-video"
          onClick={togglePlayPause}
        >
          <source src={videoBackground} type="video/mp4" />
        </video>

        <div className="video-controls">
          <button onClick={togglePlayPause} className="control-button">
            {isPlaying ? "⏸" : "▶"}
          </button>
          <button onClick={toggleMute} className="control-button">
            {isMuted ? "🔇" : "🔊"}
          </button>
        </div>
      </div>

      <div className="login-button-container">
        <button onClick={handleLoginClick} className="login-button">
          Saiba mais
        </button>
      </div>
    </div>
  );
};

export default Home;
