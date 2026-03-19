import { useLocation } from "react-router-dom";

export default function Sucesso() {
  const location = useLocation();

  const name = location.state?.name;
  const months = location.state?.months;
  const message = location.state?.message;

  const whatsappLink = `https://wa.me/553196385637?text=${encodeURIComponent()}`;

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
            className="w-full bg-primaryLight text-black font-bold py-4 px-6 rounded-lg hover:shadow-lg transition-all"
          >
            FALAR COM ESPECIALISTA
          </a>
        </div>
      </div>
    </div>
  );
}
