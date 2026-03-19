import { useLocation } from "react-router-dom";

export default function Sucesso() {
  const location = useLocation();

  // Captura o objeto de respostas enviado pelo Quiz
  const answers = location.state?.answers || {};

  // Função para formatar os dados de forma legível para o WhatsApp
  const generateWhatsappMessage = () => {
    const intro =
      "Olá, vim através do site, poderia me ajudar? Essas são minhas informações:\n\n";

    // Mapeamento para nomes amigáveis na mensagem
    const labels = {
      tipoTrabalho: "Tipo de Trabalho",
      statusEmprego: "Status Atual",
      dataAdmissao: "Data de Admissão",
      dataSaida: "Data de Saída",
      outrasFuncoes: "Fazia outras funções",
      jornada: "Jornada diária",
      horasExtras: "Recebia Horas Extras",
      rodavaNoite: "Rodava à Noite",
      adicionalNoturno: "Recebia Adicional Noturno",
      periculosidade: "Carga Perigosa",
      recebiaPericulosidade: "Recebia Adicional 30%",
      descontos: "Descontos Indevidos",
      foraDeCasa: "26+ dias fora de casa",
      assedio: "Sofreu Assédio",
    };

    // Filtra apenas o que foi respondido e formata a lista
    const details = Object.entries(answers)
      .map(([key, value]) => {
        if (!value) return null;
        return `*${labels[key] || key}:* ${value}`;
      })
      .filter(Boolean)
      .join("\n");

    const fullMessage = intro + details;

    // Retorna a URL codificada para o link
    return encodeURIComponent(fullMessage);
  };

  const whatsappLink = `https://wa.me/5515997462217?text=${generateWhatsappMessage()}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#051E3C] p-4">
      <div className="w-full max-w-2xl bg-[#FAFBFC] rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9]">
        <div className="w-full text-center smooth-pop self-enter">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green-600"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#051E3C] mb-6">
            Indícios Identificados!
          </h2>

          <p className="text-[#051E3C] mb-8 leading-relaxed">
            Com base nas suas respostas, identificamos indícios de que seus
            direitos trabalhistas podem ter sido violados. Fique ligado: nossa
            equipe vai analisar seu caso com atenção e entrará em contato em até
            48 horas para te orientar sobre os próximos passos.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-block text-center bg-primaryLight text-black font-bold py-4 px-6 rounded-lg hover:shadow-lg transition-all"
          >
            FALAR COM ESPECIALISTA
          </a>
        </div>
      </div>
    </div>
  );
}
