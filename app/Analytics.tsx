"use client";

import { useEffect } from "react";

type TrackEvent = "page_view" | "case_open" | "whatsapp_click" | "instagram_click";

function sessionId() {
  const key = "luclxbo_analytics_session";
  const existing = sessionStorage.getItem(key);
  if (existing) return existing;
  const created = crypto.randomUUID();
  sessionStorage.setItem(key, created);
  return created;
}

function deviceType() {
  if (window.innerWidth < 600) return "mobile";
  if (window.innerWidth < 1000) return "tablet";
  return "desktop";
}

function send(event: TrackEvent, label = "") {
  let referrer = "direct";
  try { if (document.referrer) referrer = new URL(document.referrer).hostname; } catch {}
  const body = JSON.stringify({ event, label, path: location.pathname, referrer, device: deviceType(), sessionId: sessionId() });
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/analytics", new Blob([body], { type: "application/json" }));
    return;
  }
  void fetch("/api/analytics", { method: "POST", headers: { "content-type": "application/json" }, body, keepalive: true });
}

export default function Analytics() {
  useEffect(() => {
    send("page_view");
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-track]");
      if (!target) return;
      send(target.dataset.track as TrackEvent, target.dataset.trackLabel ?? "");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}

