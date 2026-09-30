import Pitch from "@/components/organisms/Pitch/Pitch";

export const metadata = {
  title: "Proposta de novo site · Escola SOMA",
  description: "Apresentação do novo site institucional da Escola SOMA: pesquisa, identidade visual, conceito e próximos passos.",
  robots: { index: false, follow: false },
};

export default function ApresentacaoPage() {
  return <Pitch />;
}
