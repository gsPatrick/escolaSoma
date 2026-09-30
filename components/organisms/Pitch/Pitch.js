import Link from "next/link";
import Button from "@/components/atoms/Button/Button";
import Shape from "@/components/atoms/Shape/Shape";
import DeviceFrame from "@/components/molecules/DeviceFrame/DeviceFrame";
import MosaicStrip from "@/components/molecules/MosaicStrip/MosaicStrip";
import PitchNav from "./PitchNav";
import styles from "./Pitch.module.css";

/* ------------------------------------------------------------------
   Conteúdo da apresentação — tudo o que o cliente lê está aqui.
   ------------------------------------------------------------------ */

const DIAGNOSIS = [
  { big: "404", text: "A página inicial do site atual (index.php) está fora do ar." },
  { big: "2015", text: "Layout e rodapé parados no tempo: “Copyright 2015 – 2020”." },
  { big: "0", text: "Menções à Soma Garden e ao Ensino Médio — o site não sabe que a escola cresceu." },
  { big: "964px", text: "Largura fixa, sem versão para celular — onde as famílias mais pesquisam." },
];

const DIAGNOSIS_MORE = [
  "Fotos antigas e pequenas (640px), mostrando salas vazias",
  "Nenhum botão para agendar visita ou ligar com um toque",
  "Horários e calendário soltos em dezenas de PDFs",
  "Identidade visual diferente da que a escola usa hoje no Instagram",
];

const SOURCES = [
  { icon: "magnifier", title: "Site atual", text: "História, equipe, estrutura, ballet e o serviço de assistente social." },
  { icon: "heart", title: "Instagram @escolasoma", text: "A identidade de hoje, as duas unidades, os diferenciais e o bordão “O Soma é lugar de gente feliz”." },
  { icon: "bubble", title: "Manual da Família 2018", text: "A fundadora, professora Débora Melo, e a visão do lúdico em sala de aula." },
  { icon: "star", title: "Portal Abrantes (2019 e 2021)", text: "Os 15 anos em Abrantes e o lançamento do Novo Ensino Médio." },
  { icon: "smile", title: "Fachada e uniformes", text: "As cores e padrões reais que as famílias já reconhecem na rua." },
];

const TIMELINE = [
  { year: "1997", text: "Baixa de Quintas" },
  { year: "2000", text: "Barbalho" },
  { year: "2004", text: "Vila de Abrantes" },
  { year: "2021", text: "Ensino Médio" },
  { year: "Hoje", text: "Vila + Garden" },
];

const COLORS = [
  { name: "Azul SOMA", hex: "#2C559F", role: "Textos, menu e confiança", fg: "#fff" },
  { name: "Vermelho sorriso", hex: "#EA4641", role: "O “S” do símbolo e os botões", fg: "#fff" },
  { name: "Amarelo estrela", hex: "#F6CA46", role: "Alegria, destaques e formas", fg: "#1D3A70" },
  { name: "Creme", hex: "#F9F4AA", role: "Fundos suaves e bilhetes", fg: "#1D3A70" },
  { name: "Céu", hex: "#E2F9FD", role: "Fundo principal do site", fg: "#1D3A70" },
];

const PASTELS = [
  { name: "Infantil", color: "var(--seg-infantil)" },
  { name: "Fund. I", color: "var(--seg-fund1)" },
  { name: "Fund. II", color: "var(--seg-fund2)" },
  { name: "Médio", color: "var(--seg-medio)" },
];

const ELEMENTS = [
  { shape: "star", color: "var(--soma-red)", title: "O “S” com contorno deslocado", text: "Virou a “sombra carimbo” de todos os botões e cards do site." },
  { shape: "smile", color: "var(--soma-blue)", title: "O sorriso", text: "SOMA vem de SOrriso MÁgico — o sorriso aparece como ícone em todo lugar." },
  { shape: "sparkles", color: "var(--soma-yellow)", title: "Os azulejos do Instagram", text: "Estrela, lupa, capelo e meia-lua viraram a faixa colorida da página." },
  { shape: "magnifier", color: "var(--soma-red)", title: "O caderno quadriculado", text: "Fundo de papel de caderno: o site tem cara de escola sem ser infantilizado." },
  { shape: "quarter", color: "var(--soma-blue)", title: "O toldo da fachada", text: "O babado vermelho e amarelo da entrada da escola abre o rodapé." },
  { shape: "heart", color: "var(--soma-red)", title: "O bordão da escola", text: "“O Soma é lugar de gente feliz” ganhou faixa própria e fecha a página." },
];

const PILLARS = [
  {
    title: "Lúdico",
    color: "var(--soma-yellow)",
    items: ["Formas que flutuam e acompanham o mouse", "Letras do rodapé que pulam: S, O, M, A", "Agendamento como um “passe de visita”"],
  },
  {
    title: "Didático",
    color: "var(--unit-garden)",
    items: ["O nome explicado como continha: SO + MA = SOMA", "Diferenciais em fichas numeradas de 01 a 07", "Linha do tempo que ensina a história da escola"],
  },
  {
    title: "Vivo",
    color: "var(--seg-infantil)",
    items: ["Traço da linha do tempo que se desenha na rolagem", "Fotos reais das crianças no lugar das salas vazias", "Conteúdo atualizado: duas unidades e Ensino Médio"],
  },
];

const SECTIONS = [
  "Hero que cabe inteira na tela, com fotos reais",
  "Nossa história + a continha do nome",
  "Linha do tempo verificada, de 1997 até hoje",
  "Unidades Soma Vila e Soma Garden lado a lado",
  "Faixa “O Soma é lugar de gente feliz!”",
  "7 diferenciais: sócio-interacionismo, bilíngue, Programa Pleno…",
  "Passe de visita com as duas unidades e o mapa",
  "Rodapé com toldo da fachada e o SOMA animado",
];

const MOBILE = [
  "A primeira tela mostra o essencial sem precisar rolar",
  "Menu em tela cheia, fácil de usar com o polegar",
  "Botões grandes: ligar, chamar no Instagram, ver no mapa",
  "No rodapé, o nome vira SO / MA — sorriso e mágico",
];

const TECH = [
  { icon: "star", title: "Rápido", text: "Página inicial gerada com antecedência: abre rápido até no 4G." },
  { icon: "magnifier", title: "Encontrável no Google", text: "Títulos e descrições pensados para busca, e endereço das duas unidades." },
  { icon: "heart", title: "Acessível", text: "Textos alternativos nas fotos e respeito a quem desativa animações no celular." },
  { icon: "phone", title: "Pronto para o celular", text: "Desenhado do celular ao desktop, testado em várias telas." },
  { icon: "cap", title: "Fácil de evoluir", text: "Construído em blocos: novas páginas usam as mesmas peças." },
  { icon: "globe", title: "Hospedagem moderna", text: "No ar com HTTPS e alta disponibilidade, sem servidor para manter." },
];

const ROADMAP = [
  {
    phase: "Fase 1",
    status: "Pronto",
    title: "Identidade + página inicial",
    items: ["Pesquisa e identidade visual", "Página inicial completa", "Versão para celular", "Páginas “em validação”"],
  },
  {
    phase: "Fase 2",
    status: "Próximo",
    title: "Páginas internas",
    items: ["A Escola: proposta e equipe", "Ensino: Infantil, Fund. I, Fund. II e Médio", "Atividades e Galeria", "Famílias: calendário, horários, fardamento"],
  },
  {
    phase: "Fase 3",
    status: "Depois",
    title: "Conectar com as famílias",
    items: ["Formulário de visita com escolha da unidade", "Botão de WhatsApp", "Mapa das duas unidades", "Feed do Instagram no site"],
  },
];

const NEEDS = [
  "Logo em vetor (SVG ou AI)",
  "Fotos recentes em alta resolução",
  "Validação dos textos e da equipe",
  "Número de WhatsApp da secretaria",
  "Ano de abertura da Soma Garden",
];

/* ------------------------------------------------------------------ */

function Slide({ n, tone = "sky", className = "", children, label }) {
  return (
    <section id={`slide-${n}`} data-slide className={`${styles.slide} ${styles[tone]} ${className}`} aria-label={label}>
      <span className={styles.slideNo} aria-hidden="true">
        {String(n).padStart(2, "0")}
      </span>
      <div className={styles.inner}>{children}</div>
    </section>
  );
}

function Kicker({ children }) {
  return <p className={styles.kicker}>{children}</p>;
}

const TOTAL = 11;

export default function Pitch() {
  return (
    <>
      <PitchNav total={TOTAL} />

      <main className={styles.pitch}>
        {/* 01 — Capa */}
        <Slide n={1} tone="blue" className={styles.cover} label="Capa">
          <Shape type="star" color="var(--soma-yellow)" className={`${styles.float} ${styles.coverStar}`} />
          <Shape type="smile" color="var(--soma-sky)" className={`${styles.float} ${styles.coverSmile}`} />
          <Shape type="sparkles" color="var(--soma-red)" className={`${styles.float} ${styles.coverSparkles}`} />

          <div className={styles.coverBadge}>
            <img src="/brand/logo-soma.png" alt="Escola Soma" width="336" height="216" />
          </div>
          <p className={styles.coverKicker}>Proposta de novo site institucional</p>
          <h1 className={styles.coverTitle}>
            Um site à altura de um <span>lugar de gente feliz.</span>
          </h1>
          <p className={styles.coverSub}>Escola SOMA · Soma Vila + Soma Garden · Abrantes, Camaçari-BA</p>
          <p className={styles.coverBy}>Apresentado por Patrick · codebypatrick.dev · 2026</p>
          <p className={styles.scrollHint}>Role ou use as setas do teclado ↓</p>
        </Slide>

        {/* 02 — Diagnóstico */}
        <Slide n={2} tone="paper" label="Diagnóstico">
          <Kicker>O ponto de partida</Kicker>
          <h2 className={styles.title}>
            Hoje, o site conta uma história que <span className={styles.hlRed}>já mudou.</span>
          </h2>
          <p className={styles.lead}>
            A Escola SOMA cresceu — ganhou uma segunda unidade, chegou ao Ensino Médio e tem uma comunidade
            ativa no Instagram. O site não acompanhou.
          </p>
          <div className={styles.stats}>
            {DIAGNOSIS.map((d) => (
              <div key={d.big} className={styles.stat}>
                <strong>{d.big}</strong>
                <span>{d.text}</span>
              </div>
            ))}
          </div>
          <ul className={styles.crossList}>
            {DIAGNOSIS_MORE.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Slide>

        {/* 03 — Pesquisa */}
        <Slide n={3} tone="sky" label="Pesquisa">
          <Kicker>Antes de desenhar</Kicker>
          <h2 className={styles.title}>
            Primeiro, a gente <span className={styles.hlBlue}>escutou a escola.</span>
          </h2>
          <p className={styles.lead}>
            As informações do novo site vieram de fontes da própria escola — e foram conferidas uma a uma.
          </p>
          <div className={styles.sources}>
            {SOURCES.map((s) => (
              <div key={s.title} className={styles.source}>
                <span className={styles.sourceIcon}>
                  <Shape type={s.icon} color="var(--soma-blue-deep)" />
                </span>
                <div>
                  <strong>{s.title}</strong>
                  <span>{s.text}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.miniTimeline}>
            <p>Resultado: uma linha do tempo verificada</p>
            <ol>
              {TIMELINE.map((t) => (
                <li key={t.year}>
                  <strong>{t.year}</strong>
                  <span>{t.text}</span>
                </li>
              ))}
            </ol>
          </div>
        </Slide>

        {/* 04 — Cores e tipografia */}
        <Slide n={4} tone="paper" label="Identidade visual: cores e tipografia">
          <Kicker>Identidade visual</Kicker>
          <h2 className={styles.title}>
            As cores da escola já existiam. <span className={styles.hlRed}>A gente organizou.</span>
          </h2>
          <p className={styles.lead}>
            A paleta foi tirada pixel a pixel dos posts oficiais do Instagram — a mesma que está na fachada, nos
            uniformes e no símbolo.
          </p>
          <div className={styles.swatches}>
            {COLORS.map((c) => (
              <div key={c.hex} className={styles.swatch} style={{ background: c.hex, color: c.fg }}>
                <strong>{c.name}</strong>
                <span>{c.hex}</span>
                <small>{c.role}</small>
              </div>
            ))}
          </div>
          <div className={styles.typeRow}>
            <div className={styles.pastels}>
              <p>Tons pastel dos uniformes → uma cor por segmento</p>
              <div>
                {PASTELS.map((p) => (
                  <span key={p.name} style={{ background: p.color }}>
                    {p.name}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.typeCard}>
              <span className={styles.typeAa}>Aa</span>
              <div>
                <strong>Fredoka</strong> nos títulos — arredondada, amigável e fácil de ler.
                <br />
                <strong className={styles.nunito}>Nunito</strong> nos textos — leve e clara para as famílias.
              </div>
            </div>
          </div>
        </Slide>

        {/* 05 — Linguagem gráfica */}
        <Slide n={5} tone="blue" label="Linguagem gráfica">
          <Kicker>Linguagem gráfica</Kicker>
          <h2 className={styles.title}>
            Cada detalhe do site <span className={styles.hlYellow}>nasceu da própria escola.</span>
          </h2>
          <div className={styles.elements}>
            {ELEMENTS.map((e) => (
              <div key={e.title} className={styles.element}>
                <span className={styles.elementIcon}>
                  <Shape type={e.shape} color={e.color} />
                </span>
                <strong>{e.title}</strong>
                <span>{e.text}</span>
              </div>
            ))}
          </div>
        </Slide>

        {/* 06 — Conceito */}
        <Slide n={6} tone="sky" label="Conceito">
          <Kicker>O conceito</Kicker>
          <h2 className={`${styles.title} ${styles.center}`}>Lúdico. Didático. Vivo.</h2>
          <p className={`${styles.lead} ${styles.center}`}>
            Um site que fala com as crianças e passa confiança para os pais — do jeito que a escola é.
          </p>
          <div className={styles.pillars}>
            {PILLARS.map((p) => (
              <div key={p.title} className={styles.pillar} style={{ "--pc": p.color }}>
                <h3>{p.title}</h3>
                <ul>
                  {p.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Slide>

        {/* 07 — O site no desktop */}
        <Slide n={7} tone="paper" className={styles.showcase} label="O site no computador">
          <div className={styles.showcaseCopy}>
            <Kicker>Veja funcionando</Kicker>
            <h2 className={styles.title}>
              A nova página inicial, <span className={styles.hlBlue}>ao vivo.</span>
            </h2>
            <p className={styles.lead}>Role dentro da tela ao lado — é o site de verdade, não uma imagem.</p>
            <ol className={styles.sectionList}>
              {SECTIONS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>
          <div className={styles.showcaseDevice}>
            <DeviceFrame src="/" type="browser" title="Página inicial da Escola SOMA no computador" />
          </div>
        </Slide>

        {/* 08 — Celular */}
        <Slide n={8} tone="yellow" className={styles.showcase} label="O site no celular">
          <div className={styles.phoneWrap}>
            <DeviceFrame src="/" type="phone" title="Página inicial da Escola SOMA no celular" />
          </div>
          <div className={styles.showcaseCopy}>
            <Kicker>No celular</Kicker>
            <h2 className={styles.title}>
              Pensado para <span className={styles.hlRed}>onde as famílias estão.</span>
            </h2>
            <p className={styles.lead}>
              Muitas famílias vão conhecer a escola pelo celular — entre um post do Instagram e uma
              mensagem. O site foi desenhado para esse momento.
            </p>
            <ul className={styles.checkList}>
              {MOBILE.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        </Slide>

        {/* 09 — Tecnologia */}
        <Slide n={9} tone="paper" label="Por trás do site">
          <Kicker>Por trás do site</Kicker>
          <h2 className={styles.title}>
            Bonito por fora, <span className={styles.hlBlue}>sólido por dentro.</span>
          </h2>
          <div className={styles.tech}>
            {TECH.map((t) => (
              <div key={t.title} className={styles.techItem}>
                <span className={styles.sourceIcon}>
                  <Shape type={t.icon} color="var(--soma-blue-deep)" />
                </span>
                <strong>{t.title}</strong>
                <span>{t.text}</span>
              </div>
            ))}
          </div>
        </Slide>

        {/* 10 — Próximos passos */}
        <Slide n={10} tone="sky" label="Próximos passos">
          <Kicker>Próximos passos</Kicker>
          <h2 className={styles.title}>
            A página inicial é <span className={styles.hlRed}>só o começo.</span>
          </h2>
          <div className={styles.roadmap}>
            {ROADMAP.map((r, i) => (
              <div key={r.phase} className={`${styles.phase} ${i === 0 ? styles.phaseDone : ""}`}>
                <div className={styles.phaseHead}>
                  <span>{r.phase}</span>
                  <em>{r.status}</em>
                </div>
                <h3>{r.title}</h3>
                <ul>
                  {r.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className={styles.needs}>
            <p>Para seguir, precisamos da escola:</p>
            <ul>
              {NEEDS.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
        </Slide>

        {/* 11 — Fechamento */}
        <Slide n={11} tone="blue" className={styles.closing} label="Fechamento">
          <Shape type="star" color="var(--soma-yellow)" className={`${styles.float} ${styles.closeStar}`} />
          <Shape type="heart" color="var(--soma-red)" className={`${styles.float} ${styles.closeHeart}`} />
          <p className={styles.coverKicker}>Vamos juntos?</p>
          <h2 className={styles.closeTitle}>
            Vamos colocar o Soma <span>no ar?</span>
          </h2>
          <p className={styles.closeSub}>
            Um site que mostra para Abrantes o que as famílias da SOMA já sabem:
            <br />
            <strong>o Soma é lugar de gente feliz.</strong>
          </p>
          <div className={styles.closeActions}>
            <Button href="/" size="lg" target="_blank">
              Ver o site completo
            </Button>
            <Button href="https://codebypatrick.dev/" size="lg" variant="secondary" target="_blank" rel="noopener noreferrer">
              Falar com o Patrick
            </Button>
          </div>
          <Link href="/" className={styles.closeLink}>
            escolasoma · feito com carinho para as famílias de Abrantes
          </Link>
        </Slide>

        <MosaicStrip />
      </main>
    </>
  );
}
