import { useLocation } from "react-router-dom";

export default function Sucesso() {
  const location = useLocation();

  const name = location.state?.name;
  const months = location.state?.months;
  const message = location.state?.message;

  const finalMessage =
    message ||
    `Olá, eu me chamo ${name}.
Estou grávida de até ${months || 6} meses.
Gostaria de receber o salário-maternidade. Pode me ajudar?`;

  const whatsappLink = `https://wa.me/553196385637?text=${encodeURIComponent(
    finalMessage,
  )}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#051E3C] p-4">
      <div className="w-full max-w-2xl bg-[#FAFBFC] rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9]">
        <div className="w-full text-center soft-enter">
          {/* ÍCONE */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-check-big text-[#1B5E20]"
              >
                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                <path d="m9 11 3 3L22 4" />
              </svg>
            </div>
          </div>

          {/* TÍTULO */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#051E3C] mb-6">
            Temos ótimas notícias para você!
          </h2>

          {/* TEXTO 1 */}
          <p className="text-[#051E3C] text-lg mb-8 leading-relaxed">
            Você tem direito a <span className="font-bold">R$ 6.484,00</span> de
            Salário-maternidade que devem ser pagos pelo Governo. Iremos te
            passar tudo via Whatsapp.
          </p>

          {/* TEXTO 2 */}
          <p className="text-[#051E3C] text-lg mb-8 leading-relaxed">
            Clique no botão abaixo e iremos te atender neste exato momento e te
            explicar. Não deixa pra depois,{" "}
            <span className="font-bold">CLIQUE AGORA! 👇</span>
          </p>

          {/* BOTÃO WHATSAPP */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-[#1B5E20] text-white font-bold py-5 px-6 rounded-lg hover:bg-green-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
          >
            <img
              src="https://paperstreet.com.br/iconewhatsapp.png"
              alt="WhatsApp Logo"
              width="28"
              height="28"
              className="w-7 h-7"
            />
            SEJA ATENDIDA AGORA NO WHATSAPP
          </a>
        </div>
      </div>
    </div>
  );
}
