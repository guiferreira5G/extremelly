import { Users, Clock, Truck, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "+10 mil",
    label: "salões e clientes atendidos",
  },
  {
    icon: Clock,
    value: "13 anos",
    label: "de mercado e resultado",
  },
  {
    icon: Truck,
    value: "Todo o Brasil",
    label: "envio para qualquer estado",
  },
  {
    icon: Award,
    value: "Distribuidor Oficial",
    label: "preço direto de fábrica",
  },
];

export default function AuthorityBar() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.value}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-pale flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-[#E91E8C]" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-gray-dark leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-mid mt-0.5 leading-snug">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
