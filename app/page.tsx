import MotionEffects from "./MotionEffects";
import Analytics from "./Analytics";
import ReelPlayer from "./ReelPlayer";
import InstagramShowcase from "./InstagramShowcase";

const projects = [
  {
    number: "01",
    category: "LIFESTYLE / HISTÓRIA REAL",
    title: "Me and you",
    description: "Um carrossel pessoal sobre encontro, afeto e os planos inesperados da vida.",
    tone: "project-warm",
    meta: "CARROSSEL · 2026 · DESLIZE PARA VER →",
    type: "gallery" as const,
    media: ["/projects/me-and-you-01.webp", "/projects/me-and-you-02.webp"],
  },
  {
    number: "02",
    category: "TRAVEL / BARILOCHE",
    title: "Warmth in the south",
    description: "Diário visual de viagem pela Patagônia, entre paisagem, atmosfera e memória.",
    tone: "project-cool",
    meta: "CARROSSEL · 2026 · DESLIZE PARA VER →",
    type: "gallery" as const,
    media: ["/projects/bariloche-01.webp", "/projects/bariloche-02.webp"],
  },
  {
    number: "03",
    category: "REEL / VISUAL STORY",
    title: "Encontrei você",
    description: "Narrativa curta, vertical e emocional criada para o ritmo das redes sociais.",
    tone: "project-acid",
    meta: "REEL · 2026 · PLAY NO SITE",
    type: "video" as const,
    media: "/projects/encontrei-voce.mp4",
    poster: "/projects/encontrei-voce-poster.webp",
    views: "5 MIL VISUALIZAÇÕES",
  },
];

const digitalProjects = [
  {
    number: "01",
    type: "FUTEBOL VIRTUAL / CENTRAL EDITORIAL",
    title: "ClubsCenter",
    description: "A central editorial e esportiva do Pro Clubs brasileiro: notícias, jogos, clubes, rankings, transmissões e premiações em um só lugar.",
    contribution: "Produto digital · Direção · UX/UI · Desenvolvimento",
    domain: "clubscenter.com.br",
    url: "https://clubscenter.com.br/",
    visual: "clubscenter",
    image: "/cases/clubscenter-landing.png",
    problem: "A comunidade do futebol virtual estava espalhada entre posts, placares, canais de transmissão e conversas sem uma central editorial própria.",
    solution: "Uma plataforma com cobertura da Super Copa dos Streamers, match center, tabelas, artilharia, rankings, times, canais ao vivo da CCSN e o Golden Awards.",
    delivery: "Conceito editorial · UX/UI · Arquitetura · Desenvolvimento web · Direção de conteúdo",
    result: "Uma central viva para acompanhar a temporada, descobrir histórias e assistir às partidas — com dados, narrativa e espetáculo no mesmo produto.",
    year: "2026",
    role: "Produto + direção + código",
    stack: ["NEXT.JS", "TYPESCRIPT", "UX/UI", "EDITORIAL"],
  },
  {
    number: "02",
    type: "FINTECH / SAAS",
    title: "Zaiko CashGuard",
    description: "Plataforma de recuperação de caixa e inteligência de recebíveis criada para empresas de serviços na Alemanha.",
    contribution: "Produto digital · Experiência · Desenvolvimento",
    domain: "zaiko-cashguard-app",
    url: "https://zaiko-cashguard-app.jomoura37.chatgpt.site/site#product",
    visual: "cashguard",
    image: "/cases/cashguard-landing.webp",
    problem: "Empresas de serviços perdiam previsibilidade ao acompanhar recebíveis, atrasos e recuperação de caixa em processos dispersos.",
    solution: "Uma plataforma que organiza a visão financeira e transforma dados de recebíveis em uma rotina clara de acompanhamento e ação.",
    delivery: "Estratégia de produto · UX/UI · Fluxos financeiros · Aplicação web",
    result: "Mais clareza para priorizar cobranças, acompanhar a operação e tomar decisões financeiras com contexto.",
    year: "2026",
    role: "Estratégia + experiência + código",
    stack: ["FINTECH", "UX/UI", "DASHBOARD", "AUTOMAÇÃO"],
  },
  {
    number: "03",
    type: "BEAUTY TECH / GESTÃO",
    title: "Zaiko Studio",
    description: "Sistema para negócios de beleza reunirem agenda, clientes, financeiro e relacionamento pelo WhatsApp.",
    contribution: "Estratégia · UX/UI · Sistema web",
    domain: "zaikostudio.com.br",
    url: "https://zaikostudio.com.br/",
    visual: "studio",
    image: "/cases/zaiko-studio-landing.webp",
    problem: "Negócios de beleza administravam agenda, clientes, caixa e conversas em ferramentas separadas, aumentando retrabalho e perda de contexto.",
    solution: "Um sistema centralizado para acompanhar a rotina do studio e manter o relacionamento com clientes conectado ao WhatsApp.",
    delivery: "Estratégia · Arquitetura de informação · UX/UI · Sistema web",
    result: "Uma operação mais organizada, com informações essenciais reunidas em uma experiência simples para o dia a dia.",
    year: "2026",
    role: "Produto + UX/UI + sistema",
    stack: ["SAAS", "CRM", "AGENDA", "WHATSAPP"],
  },
  {
    number: "04",
    type: "MARCA / CONVERSÃO",
    title: "Jo Moura Concept",
    description: "Presença digital para um salão de beleza em Teresina, conectando posicionamento, serviços e agendamento.",
    contribution: "Direção digital · Web design · Conversão",
    domain: "jomouraconcept.com.br",
    url: "https://jomouraconcept.com.br/",
    visual: "jomoura",
    image: "/cases/jomoura-landing.png",
    problem: "O salão precisava traduzir sua presença e reputação em uma experiência digital à altura da marca, com caminho direto para o agendamento.",
    solution: "Uma landing page editorial que apresenta posicionamento, serviços, trabalhos e contato em uma narrativa visual elegante e objetiva.",
    delivery: "Direção digital · Identidade aplicada · Web design · Conversão",
    result: "Uma presença digital coerente com a experiência do salão e preparada para transformar descoberta em conversa pelo WhatsApp.",
    year: "2026",
    role: "Direção digital + conversão",
    stack: ["LANDING PAGE", "MARCA", "MOBILE", "CONVERSÃO"],
  },
];

const services = [
  ["01", "Produtos digitais", "Do problema à experiência: estratégia, interface, desenvolvimento e evolução contínua."],
  ["02", "IA aplicada", "Automações e experiências inteligentes que simplificam trabalho e criam novas possibilidades."],
  ["03", "Software sob medida", "Sites, aplicações e ferramentas digitais construídas com clareza, performance e intenção."],
  ["04", "Fotografia & vídeo", "Direção, fotografia, captação e edição para construir imagens e narrativas com identidade."],
];

const processSteps = [
  ["01", "Diagnóstico", "Entendo o negócio, a audiência, o problema e o resultado que o projeto precisa produzir."],
  ["02", "Direção", "Transformo a descoberta em arquitetura, linguagem visual, narrativa e prioridades claras."],
  ["03", "Construção", "Desenho, desenvolvo, testo e conecto conteúdo, interface, automações e tecnologia."],
  ["04", "Lançamento", "Coloco no ar, acompanho o uso e organizo os próximos ciclos de evolução do produto."],
];

const roadmap = [
  {
    period: "0—30 DIAS",
    title: "Aprenda a enxergar",
    text: "Domine exposição, foco, balanço de branco, enquadramento e movimentos simples. Recrie 10 planos que você admira usando o equipamento que já tem.",
  },
  {
    period: "30—60 DIAS",
    title: "Aprenda a contar",
    text: "Estude roteiro curto, sequência de planos, continuidade e captação de áudio. Produza três vídeos completos: produto, retrato e mini-história.",
  },
  {
    period: "60—90 DIAS",
    title: "Aprenda a entregar",
    text: "Crie briefing, orçamento, contrato, fluxo de aprovação e arquivos finais. Monte um reel de 45–60 segundos apenas com seus melhores planos.",
  },
  {
    period: "PRÓXIMO NÍVEL",
    title: "Escolha um território",
    text: "Aprofunde-se em publicidade, eventos, música, gastronomia, moda ou conteúdo digital. Especialização torna sua comunicação mais clara — sem limitar sua criatividade.",
  },
];

const kit = [
  ["IMAGEM", "Câmera ou celular com controle manual, baterias, cartões e ND quando necessário."],
  ["ÁUDIO", "Lapela ou shotgun, fone fechado e um gravador para situações críticas."],
  ["LUZ", "Uma fonte LED, difusão, rebatedor e extensões resolvem mais do que um kit enorme."],
  ["SUPORTE", "Tripé confiável; estabilizador só quando o movimento tiver função narrativa."],
  ["PÓS", "Computador estável, dois backups e software que você realmente domine."],
];

const whatsappUrl =
  "https://wa.me/5586998120345?text=Ol%C3%A1%2C%20Lucas!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar%20sobre%20um%20projeto.";

const githubUrl = "https://github.com/lucaslobo2912-blip";
const portfolioRepoUrl = `${githubUrl}/luclxbo-portfolio`;

export default function Home() {
  return (
    <main>
      <MotionEffects />
      <Analytics />
      <header className="nav shell">
        <a className="brand" href="#inicio" aria-label="Lucas Lobo, início">
          <span className="brand-symbol" aria-hidden="true"><i /></span>
          <span className="brand-word">LUCLXBO<sup>®</sup></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sites">Sites</a>
          <a href="#presenca">Presença</a>
          <a href="#sobre">Sobre</a>
          <a href="#guia">Guia</a>
          <a className="nav-cta" href="#contato">Vamos criar</a>
        </nav>
      </header>

      <section className="hero shell" id="inicio">
        <div className="eyebrow"><span /> LUCAS LOBO · SOFTWARE + IA + FILME + FOTOGRAFIA</div>
        <div className="hero-grid">
          <div>
            <h1>Sites, sistemas,<br />filmes &amp; fotos que<br />fazem ideias <em>avançarem.</em></h1>
            <p className="hero-copy">Eu uno desenvolvimento, inteligência artificial, videomaking e fotografia para transformar ideias em produtos e narrativas digitais prontos para vender, operar, emocionar e crescer.</p>
            <div className="hero-expertise" aria-label="Principais especialidades">
              <span>SITES DE CONVERSÃO</span>
              <span>SISTEMAS SOB MEDIDA</span>
              <span>IA APLICADA</span>
              <span>VIDEOMAKING</span>
              <span>FOTOGRAFIA</span>
            </div>
          </div>
          <div className="creative-stage" data-tilt aria-label="Objeto 3D interativo representando a transformação de uma ideia em resultado">
            <div className="stage-grid" />
            <div className="stage-status"><i /> LUCLXBO CREATIVE ENGINE</div>
            <div className="stage-rec"><i /> REC <span>00:00:08</span></div>
            <div className="stage-frame" aria-hidden="true"><i /><i /><i /><i /></div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="creative-core">
              <small>FROM</small>
              <strong>IDEA</strong>
              <span>→</span>
              <b>RESULTADO</b>
            </div>
            <span className="floating-chip chip-code">CODE / 01</span>
            <span className="floating-chip chip-ai">AI / 02</span>
            <span className="floating-chip chip-film">FILM / 03</span>
            <span className="floating-chip chip-photo">PHOTO / 04</span>
            <div className="stage-caption">MOVA O CURSOR · EXPLORE EM 3D</div>
          </div>
        </div>
        <div className="hero-footer">
          <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer" data-track="whatsapp_click" data-track-label="hero">Começar um projeto <span>↗</span></a>
          <a className="text-link" href="#sites">Ver projetos selecionados <span>↘</span></a>
          <div className="scroll-note">ROLE PARA EXPLORAR <span>↓</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Especialidades">
        <div className="ticker-track">
          {[0, 1, 2, 3].map((copy) => (
            <div className="ticker-group" aria-hidden={copy !== 0} key={copy}>
              SOFTWARE <span>✦</span> PRODUTOS DIGITAIS <span>✦</span> INTELIGÊNCIA ARTIFICIAL <span>✦</span> DESIGN <span>✦</span> FOTOGRAFIA <span>✦</span> VIDEOMAKING <span>✦</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="about-aurora" aria-hidden="true" />
        <div className="about-grid-lines" aria-hidden="true" />
        <div className="shell about-grid">
          <div className="portrait-frame" data-tilt>
            <div className="portrait-halo" aria-hidden="true" />
            <div className="portrait-placeholder">
              <img src="/lucas-lobo-portrait.webp" alt="Retrato de Lucas Lobo" />
              <span className="portrait-shine" aria-hidden="true" />
            </div>
            <span className="portrait-chip chip-builder">BUILD / 01</span>
            <span className="portrait-chip chip-ai-about">AI + PRODUCT</span>
            <span className="portrait-label">LUCAS LOBO / FOUNDER &amp; SOFTWARE DEVELOPER</span>
          </div>
          <div className="about-copy">
            <div className="availability"><i /> DISPONÍVEL PARA PROJETOS SELECIONADOS</div>
            <span className="kicker">01 / SOBRE</span>
            <h2>Código com<br /><em>repertório.</em></h2>
            <p className="lead bio-current">
              Founder &amp; Software Developer<br />
              Building SaaS &amp; AI products<br />
              Tech • Business • Lifestyle<br />
              Brazil 🇧🇷
            </p>
            <p className="about-detail">Atuo entre produto, tecnologia e direção criativa. Posso entrar desde a definição da ideia, organizar a experiência, construir a interface e o sistema, produzir a imagem e acompanhar o lançamento. O objetivo é simples: transformar intenção em algo claro, utilizável e publicável.</p>
            <div className="facts">
              <div className="fact-card"><strong>3</strong><span>TERRITÓRIOS<br />TECH · BUSINESS · LIFE</span></div>
              <div className="fact-card"><strong>1</strong><span>MENTALIDADE<br />BUILD &amp; SHIP</span></div>
              <div className="fact-card"><strong>∞</strong><span>CURIOSIDADE<br />PARA CRIAR</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell web-work" id="sites">
        <div className="section-heading">
          <div><span className="kicker">02 / PRODUTOS DIGITAIS</span><h2>Sites &amp;<br />sistemas</h2></div>
          <p>Projetos que unem estratégia, experiência e desenvolvimento para transformar operação, marca e oportunidade em resultado.</p>
        </div>
        <div className="web-cases">
          {digitalProjects.map((project) => (
            <article className={`web-case case-${project.visual}`} data-tilt key={project.number}>
              <a className="case-window" href={project.url} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.title}`} data-track="case_open" data-track-label={project.title}>
                <div className="browser-chrome"><span /><span /><span /><b>{project.domain}</b></div>
                <div className="case-screen">
                  <img src={project.image} alt={`Landing page do projeto ${project.title}`} loading="lazy" />
                  <span className="case-open">ABRIR PROJETO ↗</span>
                </div>
              </a>
              <div className="case-copy">
                <div className="case-index"><span>{project.number}</span><small>{project.type}</small></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="case-meta-row" aria-label={`Detalhes do projeto ${project.title}`}>
                  <span><small>ANO</small>{project.year}</span>
                  <span><small>MEU PAPEL</small>{project.role}</span>
                  <span><small>STATUS</small>PUBLICADO</span>
                </div>
                <div className="case-stack" aria-label={`Competências aplicadas em ${project.title}`}>
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <details className="case-study">
                  <summary>Ver estudo do projeto <span>+</span></summary>
                  <div className="case-study-grid">
                    <div><small>DESAFIO</small><p>{project.problem}</p></div>
                    <div><small>SOLUÇÃO</small><p>{project.solution}</p></div>
                    <div><small>ENTREGAS</small><p>{project.delivery}</p></div>
                    <div><small>RESULTADO</small><p>{project.result}</p></div>
                  </div>
                </details>
                <div className="case-footer"><span>{project.contribution}</span><a href={project.url} target="_blank" rel="noreferrer" data-track="case_open" data-track-label={project.title}>{project.visual === "clubscenter" ? "Abrir ClubsCenter ↗" : "Ver ao vivo ↗"}</a></div>
              </div>
            </article>
          ))}
        </div>
        <div className="hire-strip">
          <div><span>PRECISA DE UM SITE OU SISTEMA?</span><h3>Eu transformo a ideia em algo pronto para usar.</h3></div>
          <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer" data-track="whatsapp_click" data-track-label="projects">Quero conversar <span>↗</span></a>
        </div>
      </section>

      <section className="section shell" id="trabalhos">
        <div className="section-heading">
          <div><span className="kicker">03 / FILME + FOTOGRAFIA</span><h2>Filmes &amp;<br />fotografia</h2></div>
          <p>Direção de olhar em movimento e em imagem fixa — viagens, retratos, atmosfera e histórias reais fotografadas e editadas por mim.</p>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <article className={`project ${project.tone}`} key={project.number}>
              <div className="project-visual">
                <span className="project-number">{project.number}</span>
                {project.type === "gallery" ? (
                  <div className="media-strip" tabIndex={0} aria-label={`Galeria ${project.title}; deslize para ver as fotos`}>
                    {project.media.map((image, index) => (
                      <img
                        src={image}
                        alt={`${project.title}, foto ${index + 1} de ${project.media.length}`}
                        loading="lazy"
                        key={image}
                      />
                    ))}
                  </div>
                ) : (
                  <ReelPlayer src={project.media} poster={project.poster} title={project.title} views={project.views} />
                )}
              </div>
              <div className="project-info">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <small>{project.meta}</small>
              </div>
            </article>
          ))}
        </div>
        <InstagramShowcase />
      </section>

      <section className="section shell presence" id="presenca">
        <div className="section-heading compact">
          <div><span className="kicker">04 / PROJETOS &amp; PRESENÇA</span><h2>Onde eu<br /><em>coloco a mão.</em></h2></div>
          <p>Produtos, sites e experiências em que participei da ideia à entrega — com estratégia, interface, código e direção criativa.</p>
        </div>
        <div className="presence-grid">
          <article className="presence-card presence-github">
            <div className="presence-card-top"><span>GITHUB / @LUCASLOBO2912-BLIP</span><b>GH</b></div>
            <h3>Código visível,<br /><em>trabalho real.</em></h3>
            <p>Uma visão transparente da minha forma de construir: arquitetura, interface, responsividade, motion e código do portfólio que você está vendo agora.</p>
            <div className="github-repos" aria-label="Tecnologias do repositório">
              <span>REACT 19</span><span>NEXT.JS 16</span><span>TYPESCRIPT</span><span>CLOUDFLARE</span>
            </div>
            <div className="github-mark" aria-hidden="true">⌘</div>
            <div className="github-actions">
              <a href={portfolioRepoUrl} target="_blank" rel="noreferrer">VER CÓDIGO <span>↗</span></a>
              <a href={githubUrl} target="_blank" rel="noreferrer">ABRIR PERFIL <span>↗</span></a>
            </div>
          </article>
          <div className="presence-list">
            <article className="presence-featured"><span>04</span><div><small>NOVO PROJETO · FUTEBOL VIRTUAL</small><h3>ClubsCenter</h3><p>A central editorial da Super Copa dos Streamers, com notícias, resultados, clubes, rankings, transmissões CCSN e Golden Awards.</p><mark>ABRIR PROJETO ↗</mark></div><a href="https://clubscenter.com.br/" target="_blank" rel="noreferrer" aria-label="Abrir o projeto ClubsCenter">↗</a></article>
            <article><span>01</span><div><small>PRODUTO DIGITAL · FINTECH</small><h3>Zaiko CashGuard</h3><p>Conceito, experiência e desenvolvimento de uma plataforma de recuperação de caixa e inteligência de recebíveis.</p></div><a href="https://zaiko-cashguard-app.jomoura37.chatgpt.site/site#product" target="_blank" rel="noreferrer" aria-label="Abrir Zaiko CashGuard">↗</a></article>
            <article><span>02</span><div><small>SISTEMA WEB · BEAUTY TECH</small><h3>Zaiko Studio</h3><p>Sistema para reunir agenda, clientes, financeiro e relacionamento pelo WhatsApp em uma única rotina.</p></div><a href="https://zaikostudio.com.br/" target="_blank" rel="noreferrer" aria-label="Abrir Zaiko Studio">↗</a></article>
            <article><span>03</span><div><small>MARCA · CONVERSÃO</small><h3>Jo Moura Concept</h3><p>Direção digital e web design para transformar presença, serviços e agendamento em uma experiência coerente.</p></div><a href="https://jomouraconcept.com.br/" target="_blank" rel="noreferrer" aria-label="Abrir Jo Moura Concept">↗</a></article>
          </div>
        </div>
      </section>

      <section className="section shell process-section" id="processo">
        <div className="section-heading compact">
          <div><span className="kicker">05 / PROCESSO</span><h2>Como eu<br />faço acontecer.</h2></div>
          <p>Um processo direto para reduzir dúvida, acelerar decisões e manter estratégia, visual e tecnologia apontando para o mesmo resultado.</p>
        </div>
        <div className="process-grid">
          {processSteps.map(([number, title, text]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading compact">
          <div><span className="kicker">06 / O QUE EU CONSTRUO</span><h2>Da ideia<br />ao mundo.</h2></div>
          <p>Estratégia, tecnologia e criação trabalhando juntas para lançar coisas úteis e memoráveis.</p>
        </div>
        <div className="services">
          {services.map(([number, title, text]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p><i>↗</i></article>
          ))}
        </div>
      </section>

      <section className="guide" id="guia">
        <div className="shell">
          <div className="guide-intro">
            <span className="kicker light">07 / GUIA DE CAMPO</span>
            <h2>Quer ser<br /><em>videomaker?</em></h2>
            <p>Comece com narrativa e consistência. Equipamento importa, mas repertório, processo e confiança são o que transformam imagens em profissão.</p>
          </div>

          <div className="roadmap">
            {roadmap.map((item, index) => (
              <article key={item.period}>
                <span className="step">0{index + 1}</span>
                <div><small>{item.period}</small><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>

          <div className="field-grid">
            <div>
              <span className="kicker light">KIT ESSENCIAL</span>
              <h3>Compre para resolver,<br />não para impressionar.</h3>
              <div className="kit-list">
                {kit.map(([name, text]) => <div key={name}><strong>{name}</strong><p>{text}</p></div>)}
              </div>
            </div>
            <aside className="checklist">
              <span>CHECKLIST DE GRAVAÇÃO</span>
              <h3>Antes do REC</h3>
              <ul>
                <li>Briefing e objetivo definidos</li>
                <li>Roteiro e lista de planos</li>
                <li>Baterias e cartões checados</li>
                <li>Áudio monitorado com fone</li>
                <li>Exposição e balanço de branco</li>
                <li>Autorização de uso de imagem</li>
                <li>Backup antes de formatar</li>
              </ul>
              <div className="check-footer">SALVE. REPITA. NÃO IMPROVISE O BÁSICO.</div>
            </aside>
          </div>

          <div className="business">
            <div><span className="kicker light">VIDEOMAKER COMO NEGÓCIO</span><h3>Preço não é só diária.</h3></div>
            <div className="formula">
              <span>PRÉ</span><b>+</b><span>PRODUÇÃO</span><b>+</b><span>PÓS</span><b>+</b><span>CUSTOS</span><b>+</b><span>MARGEM</span>
            </div>
            <p>Calcule horas de reunião, roteiro, deslocamento, equipe, aluguel, captação, edição, revisões, música, impostos e margem. Defina por escrito entregas, prazos, número de alterações, formato e direitos de uso.</p>
          </div>
        </div>
      </section>

      <section className="section shell faq-section">
        <div><span className="kicker">08 / PERGUNTAS REAIS</span><h2>Sem atalhos.<br />Com direção.</h2></div>
        <div className="faq">
          <details><summary>Preciso de uma câmera cara para começar?<span>+</span></summary><p>Não. Use o celular ou câmera que você já tem e invista primeiro em áudio, luz simples e prática. Troque de equipamento quando ele limitar uma necessidade concreta do trabalho.</p></details>
          <details><summary>Qual programa devo aprender?<span>+</span></summary><p>DaVinci Resolve, Premiere Pro ou Final Cut são caminhos válidos. Escolha um, domine organização, corte, áudio, cor e exportação; depois amplie suas ferramentas.</p></details>
          <details><summary>Como consigo os primeiros clientes?<span>+</span></summary><p>Crie três projetos autorais no nicho desejado, publique o processo e faça propostas específicas para negócios que você realmente entende. Indicação vem de boa entrega, comunicação e prazo.</p></details>
          <details><summary>O que entra em um bom portfólio?<span>+</span></summary><p>De quatro a oito trabalhos fortes, seu papel em cada projeto, um reel curto, bastidores, resultados quando existirem e um contato fácil. Qualidade e clareza vencem quantidade.</p></details>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="shell contact-inner">
          <span className="kicker light">09 / PRÓXIMO PROJETO</span>
          <h2>Tem uma ideia?<br /><em>Vamos construir.</em></h2>
          <p>Software, IA, conteúdo ou vídeo: fale comigo diretamente pelo WhatsApp.</p>
          <div className="contact-actions">
            <a className="button light-button" href={whatsappUrl} target="_blank" rel="noreferrer" data-track="whatsapp_click" data-track-label="contact">Falar no WhatsApp <span>↗</span></a>
            <a className="instagram" href="https://instagram.com/luclxbo" target="_blank" rel="noreferrer" data-track="instagram_click" data-track-label="contact">@luclxbo</a>
            <a className="instagram" href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </div>
      </section>

      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Conversar com Lucas Lobo pelo WhatsApp" data-track="whatsapp_click" data-track-label="floating">
        <span>WA</span><b>WhatsApp</b>
      </a>

      <footer className="footer shell">
        <a className="brand" href="#inicio" aria-label="LUCLXBO, voltar ao início"><span className="brand-symbol" aria-hidden="true"><i /></span><span className="brand-word">LUCLXBO<sup>®</sup></span></a>
        <p>SOFTWARE · IA · DESIGN · AUDIOVISUAL<br />BRASIL</p>
        <p className="footer-right">© 2026 LUCAS LOBO<br /><a href="#inicio">VOLTAR AO TOPO ↑</a></p>
      </footer>
    </main>
  );
}

