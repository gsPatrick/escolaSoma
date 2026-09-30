import Header from "@/components/organisms/Header/Header";
import Footer from "@/components/organisms/Footer/Footer";
import UnderReview from "@/components/organisms/UnderReview/UnderReview";

/* Qualquer rota que ainda não tem página própria cai aqui
   e mostra o aviso de "em aprovação/validação". */
const PAGES = {
  "a-escola": "A Escola",
  ensino: "Ensino",
  "ensino/educacao-infantil": "Educação Infantil",
  "ensino/fundamental-1": "Ensino Fundamental I",
  "ensino/fundamental-2": "Ensino Fundamental II",
  "ensino/ensino-medio": "Ensino Médio",
  atividades: "Atividades",
  familias: "Famílias",
  galeria: "Galeria",
  contato: "Contato",
};

function pageName(slug = []) {
  const key = slug.join("/");
  if (PAGES[key]) return PAGES[key];
  const last = slug[slug.length - 1] || "Página";
  return decodeURIComponent(last)
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function generateMetadata({ params }) {
  return {
    title: `${pageName(params.slug)} · Em validação · Escola SOMA`,
    robots: { index: false, follow: false },
  };
}

export default function PendingPage({ params }) {
  return (
    <>
      <Header />
      <main>
        <UnderReview name={pageName(params.slug)} />
      </main>
      <Footer />
    </>
  );
}
