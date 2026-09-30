/* Mapa do site institucional. As rotas ainda não existem —
   ficam como âncoras até cada página ser construída. */
export const NAV = [
  {
    label: "A Escola",
    color: "var(--soma-red)",
    items: [
      { label: "Nossa história", href: "/#historia", hint: "Desde 1997, o Sorriso Mágico" },
      { label: "Proposta pedagógica", href: "/a-escola#proposta", hint: "Sócio-interacionismo na prática" },
      { label: "Equipe", href: "/a-escola#equipe", hint: "Quem cuida de tudo" },
      { label: "Galeria", href: "/galeria", hint: "O dia a dia em fotos" },
    ],
  },
  {
    label: "Unidades",
    color: "var(--soma-yellow)",
    items: [
      { label: "Soma Vila", href: "/#unidades", hint: "Grupo 2 ao Ensino Médio", dot: "var(--unit-vila)" },
      { label: "Soma Garden", href: "/#unidades", hint: "Grupo 2 ao 5º ano · integral", dot: "var(--unit-garden)" },
    ],
  },
  {
    label: "Ensino",
    color: "var(--soma-blue)",
    items: [
      { label: "Educação Infantil", href: "/ensino/educacao-infantil", hint: "A partir do Grupo 2", dot: "var(--seg-infantil)" },
      { label: "Fundamental I", href: "/ensino/fundamental-1", hint: "1º ao 5º ano", dot: "var(--seg-fund1)" },
      { label: "Fundamental II", href: "/ensino/fundamental-2", hint: "6º ao 9º ano", dot: "var(--seg-fund2)" },
      { label: "Ensino Médio", href: "/ensino/ensino-medio", hint: "Projeto de vida · Soma Vila", dot: "var(--seg-medio)" },
    ],
  },
  { label: "Atividades", href: "/atividades", color: "var(--soma-red)" },
  {
    label: "Famílias",
    color: "var(--soma-yellow)",
    items: [
      { label: "Calendário", href: "/familias#calendario", hint: "Datas do ano letivo" },
      { label: "Horários", href: "/familias#horarios", hint: "Por série e turno" },
      { label: "Fardamento", href: "/familias#fardamento", hint: "Padrão do uniforme" },
      { label: "Sistema isaac", href: "/familias#isaac", hint: "Financeiro na palma da mão" },
    ],
  },
  { label: "Contato", href: "/contato", color: "var(--soma-blue)" },
];

export const CONTACT = {
  phone: "(71) 3623-2358",
  phoneHref: "tel:+557136232358",
  place: "Unidades Vila e Garden · Abrantes, Camaçari-BA",
  instagram: "https://www.instagram.com/escolasoma/",
};
