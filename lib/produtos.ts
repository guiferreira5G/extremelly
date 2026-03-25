export type Produto = {
  slug: string;
  nome: string;
  tagline: string;
  descricao: string;
  beneficios: string[];
  cor: string;
  corTexto: string;
  gradiente: string;
  produtos: string[];
  waText: string;
};

export const categorias: Produto[] = [
  {
    slug: "anti-frizz",
    nome: "Anti-frizz e Alisamento",
    tagline: "Diga tchau ao volume descontrolado.",
    descricao:
      "Nossa linha de anti-frizz e alisamento foi desenvolvida para quem quer fios alinhados, sedosos e sem volume — com resultado que dura semanas. Indicada para uso em casa e em salão.",
    beneficios: [
      "Controle de volume desde a primeira aplicação",
      "Alisamento progressivo sem química agressiva",
      "Resultado que dura semanas",
      "Indicada para cabelos naturais e com procedimentos",
      "Fórmula com ingredientes ativos de alta performance",
    ],
    cor: "#E91E8C",
    corTexto: "white",
    gradiente: "from-pink-50 to-rose-100",
    produtos: ["Xnano Caviar", "Sossega Menina", "Super Trat Jara Brasileira"],
    waText:
      "Ol%C3%A1!%20Tenho%20interesse%20na%20linha%20Anti-frizz%20e%20Alisamento.%20Pode%20me%20indicar%20o%20produto%20ideal%3F",
  },
  {
    slug: "hidratacao",
    nome: "Hidratação Profunda",
    tagline: "Para fios que pedem socorro.",
    descricao:
      "Fios ressecados, sem brilho e com pontas duplas pedem hidratação de verdade. Nossa linha repõe a umidade dos fios, restaura o brilho e combate o ressecamento do dia a dia.",
    beneficios: [
      "Hidratação profunda desde a primeira lavagem",
      "Combate ressecamento, pontas duplas e frizz",
      "Brilho imediato e duradouro",
      "Ingredientes naturais como açaí, cupuaçu e semente de abóbora",
      "Indicada para cabelos secos, tingidos e com química",
    ],
    cor: "#1A3A8F",
    corTexto: "white",
    gradiente: "from-blue-50 to-indigo-100",
    produtos: ["Açaí e Cupuaçu", "Semente de Abóbora + Óleo de Coco", "Banana Chic"],
    waText:
      "Ol%C3%A1!%20Tenho%20interesse%20na%20linha%20de%20Hidrata%C3%A7%C3%A3o%20Profunda.%20Pode%20me%20indicar%20o%20produto%20ideal%3F",
  },
  {
    slug: "tratamento",
    nome: "Tratamento e Reconstrução",
    tagline: "Restaura o que o tempo e a química levaram.",
    descricao:
      "Para quem tem cabelo danificado por química, calor ou processos repetitivos. Nossa linha de reconstrução repõe queratina, vitaminas e proteínas para devolver a força e a saúde dos fios.",
    beneficios: [
      "Reconstrução da estrutura capilar danificada",
      "Reposição de queratina e proteínas",
      "Reduz a quebra e queda dos fios",
      "Fórmula com microesferas de liberação gradual",
      "Resultado visível desde a 1ª aplicação",
    ],
    cor: "#B45309",
    corTexto: "white",
    gradiente: "from-amber-50 to-yellow-100",
    produtos: ["Kit Folhas de Mandioca", "Máscara Folhas de Mandioca", "Supremely"],
    waText:
      "Ol%C3%A1!%20Tenho%20interesse%20na%20linha%20de%20Tratamento%20e%20Reconstru%C3%A7%C3%A3o.%20Pode%20me%20indicar%20o%20produto%20ideal%3F",
  },
  {
    slug: "kits",
    nome: "Kits Completos",
    tagline: "Tudo que seu cabelo precisa, num só pedido.",
    descricao:
      "Kits montados para oferecer uma rotina capilar completa com economia. Shampoo, condicionador, máscara e leave-in — tudo integrado para um resultado consistente.",
    beneficios: [
      "Rotina completa num único kit",
      "Produtos desenvolvidos para funcionar juntos",
      "Economia em relação à compra individual",
      "Ideal para presente ou para começar uma rotina nova",
      "Disponível para diferentes tipos de cabelo",
    ],
    cor: "#7C3AED",
    corTexto: "white",
    gradiente: "from-violet-50 to-purple-100",
    produtos: ["Kit Tudão", "Kit Folhas de Mandioca", "Super Trat Jara Brasileira"],
    waText:
      "Ol%C3%A1!%20Tenho%20interesse%20nos%20Kits%20Completos.%20Pode%20me%20indicar%20o%20kit%20ideal%3F",
  },
  {
    slug: "masculina",
    nome: "Linha Masculina",
    tagline: "Cuidado capilar de verdade para homens.",
    descricao:
      "A linha Premium Barber foi desenvolvida para barbearias e homens que levam o cuidado capilar a sério. Fórmulas específicas para os fios masculinos, com resultados profissionais.",
    beneficios: [
      "Desenvolvida especificamente para fios masculinos",
      "Indicada para uso em barbearia e em casa",
      "Controle de oleosidade e frizz",
      "Brilho natural sem pesar os fios",
      "Fragrância masculina de longa duração",
    ],
    cor: "#374151",
    corTexto: "white",
    gradiente: "from-gray-100 to-slate-200",
    produtos: ["Premium Barber Shampoo", "Premium Barber Condicionador", "Premium Barber Pomada"],
    waText:
      "Ol%C3%A1!%20Tenho%20interesse%20na%20Linha%20Masculina%20Premium%20Barber.%20Pode%20me%20dar%20mais%20informa%C3%A7%C3%B5es%3F",
  },
];

export function getCategoriaBySlug(slug: string): Produto | undefined {
  return categorias.find((c) => c.slug === slug);
}
