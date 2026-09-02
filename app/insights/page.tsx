import type { Metadata } from "next";
import { count, countDistinct, desc, eq } from "drizzle-orm";
import { getDb } from "../../db";
import { analyticsEvents } from "../../db/schema";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Insights — LUCLXBO", robots: { index: false, follow: false } };

export default async function Insights() {
  const db = getDb();
  const [[views], [visitors], [whatsapp], [projects], devices, cases] = await Promise.all([
    db.select({ value: count() }).from(analyticsEvents).where(eq(analyticsEvents.event, "page_view")),
    db.select({ value: countDistinct(analyticsEvents.sessionId) }).from(analyticsEvents),
    db.select({ value: count() }).from(analyticsEvents).where(eq(analyticsEvents.event, "whatsapp_click")),
    db.select({ value: count() }).from(analyticsEvents).where(eq(analyticsEvents.event, "case_open")),
    db.select({ label: analyticsEvents.device, value: count() }).from(analyticsEvents).where(eq(analyticsEvents.event, "page_view")).groupBy(analyticsEvents.device).orderBy(desc(count())),
    db.select({ label: analyticsEvents.label, value: count() }).from(analyticsEvents).where(eq(analyticsEvents.event, "case_open")).groupBy(analyticsEvents.label).orderBy(desc(count())).limit(8),
  ]);
  return <main className="insights-page">
    <header className="insights-head"><a className="brand" href="/"><span className="brand-symbol" aria-hidden="true"><i /></span><span className="brand-word">LUCLXBO<sup>®</sup></span></a><span>ANALYTICS ANÔNIMO</span></header>
    <section className="insights-hero"><span className="kicker">PAINEL / VISÃO GERAL</span><h1>O que chama<br /><em>atenção.</em></h1><p>Acessos e ações registradas sem coletar nome, telefone ou endereço IP.</p></section>
    <section className="insights-cards">
      <article><small>VISUALIZAÇÕES</small><strong>{views?.value ?? 0}</strong></article>
      <article><small>VISITANTES</small><strong>{visitors?.value ?? 0}</strong></article>
      <article><small>CLIQUES NO WHATSAPP</small><strong>{whatsapp?.value ?? 0}</strong></article>
      <article><small>PROJETOS ABERTOS</small><strong>{projects?.value ?? 0}</strong></article>
    </section>
    <section className="insights-breakdown">
      <article><span className="kicker">DISPOSITIVOS</span>{devices.length ? devices.map((item) => <div key={item.label}><b>{item.label}</b><strong>{item.value}</strong></div>) : <p>Aguardando os primeiros acessos.</p>}</article>
      <article><span className="kicker">CASES MAIS ABERTOS</span>{cases.length ? cases.map((item) => <div key={item.label}><b>{item.label || "Projeto"}</b><strong>{item.value}</strong></div>) : <p>Aguardando os primeiros cliques.</p>}</article>
    </section>
    <a className="button primary insights-back" href="/">Voltar ao portfólio <span>↗</span></a>
  </main>;
}

