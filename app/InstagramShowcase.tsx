"use client";

import { useEffect, useRef, useState } from "react";

const reels = [
  {
    number: "01",
    views: "24,4 MIL",
    label: "REEL MAIS VISTO",
    title: "Eu só preciso vencer!",
    src: "/projects/reel-vencer-vp9.mp4",
    href: "https://www.instagram.com/luclxbo/reel/DZrtAJGOUmo/",
  },
  {
    number: "02",
    views: "11,9 MIL",
    label: "TRAVEL FILM",
    title: "Eu não quero sorte. Quero merecer.",
    src: "/projects/reel-merecer-vp9.mp4",
    href: "https://www.instagram.com/luclxbo/reel/Daogjgevkyw/",
  },
  {
    number: "03",
    views: "11,6 MIL",
    label: "NARRATIVA DE VIAGEM",
    title: "O passado pesa quando você insiste em carregar.",
    src: "/projects/reel-passado-vp9.mp4",
    href: "https://www.instagram.com/luclxbo/reel/DZkAvjhPoqn/",
  },
];

function InstagramReelCard({ reel }: { reel: (typeof reels)[number] }) {
  const cardRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const card = cardRef.current;
    const video = videoRef.current;
    if (!card || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
          video.play().then(() => setPaused(false)).catch(() => setPaused(true));
        } else {
          video.pause();
          setPaused(true);
        }
      },
      { threshold: [0, 0.35, 0.7] },
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().then(() => setPaused(false)).catch(() => setPaused(true));
    else {
      video.pause();
      setPaused(true);
    }
  };

  return (
    <article className="instagram-reel-card" ref={cardRef}>
      <div className="instagram-reel-media">
        <video
          ref={videoRef}
          src={reel.src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`Prévia do Reel: ${reel.title}`}
          onPlay={() => setPaused(false)}
          onPause={() => setPaused(true)}
          onTimeUpdate={(event) => {
            const video = event.currentTarget;
            setProgress(video.duration ? (video.currentTime / video.duration) * 100 : 0);
          }}
        />
        <div className="instagram-reel-shade" />
        <div className="instagram-reel-topline">
          <span><i /> EM EXIBIÇÃO</span>
          <b>{reel.number}</b>
        </div>
        <button type="button" className="instagram-reel-toggle" onClick={togglePlayback} aria-label={paused ? "Reproduzir vídeo" : "Pausar vídeo"}>
          {paused ? "▶" : "Ⅱ"}
        </button>
        <div className="instagram-reel-progress" aria-hidden="true"><i style={{ width: `${progress}%` }} /></div>
      </div>
      <div className="instagram-reel-copy">
        <span>{reel.label}</span>
        <strong data-views={reel.views}>{reel.views}</strong>
        <p>{reel.title}</p>
        <a href={reel.href} target="_blank" rel="noreferrer" aria-label={`Abrir ${reel.title} no Instagram`}>
          VER REEL NO INSTAGRAM <b>↗</b>
        </a>
      </div>
    </article>
  );
}

export default function InstagramShowcase() {
  return (
    <div className="instagram-showcase">
      <div className="instagram-showcase-orbit" aria-hidden="true" />
      <div className="instagram-showcase-head">
        <div className="instagram-showcase-title">
          <span>MAIS VISTOS NO INSTAGRAM</span>
          <h3>
            <b>O trabalho também</b>
            <em>fala em números.</em>
          </h3>
        </div>
        <p>Vídeos em exibição contínua. Cada peça abre diretamente no Reel original do perfil <strong>@luclxbo</strong>.</p>
      </div>
      <div className="instagram-reels">
        {reels.map((reel) => <InstagramReelCard reel={reel} key={reel.href} />)}
      </div>
      <div className="photo-manifesto"><span>FOTO NÃO É EXTRA.</span><p>É direção, composição, luz e memória — o mesmo olhar que conduz meus vídeos também constrói cada fotografia.</p></div>
    </div>
  );
}

