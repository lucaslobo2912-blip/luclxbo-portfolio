"use client";

import { useEffect, useRef, useState } from "react";

type ReelPlayerProps = {
  src: string;
  poster: string;
  title: string;
  views?: string;
};

export default function ReelPlayer({ src, poster, title, views }: ReelPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [open, setOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    videoRef.current?.play().catch(() => undefined);
    return () => {
      document.body.style.overflow = previousOverflow;
      videoRef.current?.pause();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => undefined);
    else video.pause();
  };

  return (
    <>
      <button className="reel-cover" type="button" onClick={() => setOpen(true)} aria-label={`Assistir ${title} em tela cheia`}>
        <img src={poster} alt="" loading="lazy" />
        <span className="reel-play" aria-hidden="true"><i>▶</i><b>ASSISTIR</b></span>
        <span className="reel-format">REEL · 9:16</span>
        {views && <span className="reel-views">◉ {views}</span>}
      </button>

      {open && (
        <div className="reel-modal" role="dialog" aria-modal="true" aria-label={`Reel ${title}`}>
          <div className="reel-topbar">
            <button type="button" onClick={() => setOpen(false)} aria-label="Fechar vídeo">←</button>
            <strong>LUCLXBO · REEL</strong>
            <button type="button" onClick={() => setMuted((value) => !value)} aria-label={muted ? "Ativar som" : "Silenciar vídeo"}>{muted ? "SOM" : "MUDO"}</button>
          </div>
          <button className="reel-stage" type="button" onClick={togglePlayback} aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}>
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              playsInline
              muted={muted}
              loop
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onTimeUpdate={(event) => {
                const video = event.currentTarget;
                setProgress(video.duration ? (video.currentTime / video.duration) * 100 : 0);
              }}
            />
            {!playing && <span className="reel-pause-icon" aria-hidden="true">▶</span>}
          </button>
          <div className="reel-bottom">
            <div className="reel-progress"><i style={{ width: `${progress}%` }} /></div>
            <div className="reel-author"><span>LUCLXBO</span>{views && <b>{views}</b>}</div>
            <p>{title} — narrativa, captação e edição para redes sociais.</p>
            <small>TOQUE NO VÍDEO PARA PAUSAR</small>
          </div>
        </div>
      )}
    </>
  );
}

