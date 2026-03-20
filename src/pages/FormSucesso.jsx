import { useLocation } from "react-router-dom";

export default function Sucesso() {
  const location = useLocation();

  // Captura o objeto de respostas enviado pelo Quiz
  const answers = location.state?.answers || {};

  // Função para formatar os dados de forma legível para o WhatsApp
  const generateWhatsappMessage = () => {
    // 1. Frase Inicial
    const intro =
      "Olá, sou motorista de caminhão e preciso de ajuda! Poderia me ajudar?\n\n";

    // 2. Dados Pessoais (Organizados no bloco superior)
    const nome = answers.nome ? `*Nome:* ${answers.nome}\n` : "";
    const whatsapp = answers.whatsapp
      ? `*WhatsApp:* ${answers.whatsapp}\n`
      : "";
    const cidade = answers.cidade ? `*Cidade:* ${answers.cidade}\n` : "";
    const estado = answers.estado ? `*Estado:* ${answers.estado}\n` : "";

    const dadosPessoais = `${nome}${whatsapp}${cidade}${estado}\n`;

    // 3. Informações do Formulário (Quiz)
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

    // 4. Filtro para remover os dados acima da lista técnica
    const quizDetails = Object.entries(answers)
      .filter(
        ([key]) => !["nome", "whatsapp", "cidade", "estado"].includes(key),
      )
      .map(([key, value]) => {
        if (!value) return null;
        return `*${labels[key] || key}:* ${value}`;
      })
      .filter(Boolean)
      .join("\n");

    // Montagem final com os blocos bem definidos
    const fullMessage = `${intro}*DADOS DO MOTORISTA:*\n${dadosPessoais}*INFORMAÇÕES DO CASO:*\n${quizDetails}`;

    return encodeURIComponent(fullMessage);
  };
  const whatsappLink = `https://wa.me/5561992781077?text=${generateWhatsappMessage()}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-primaryDark p-4">
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
            Temos ótimas notícias pra você!{" "}
          </h2>

          <p className="text-[#051E3C] mb-8 leading-relaxed">
            Com base nas suas respostas, identificamos indícios de que seus
            direitos trabalhistas podem ter sido violados.
            <span className="font-bold text-lg">
              {" "}
              Clique no botão abaixo para enviar suas informações
            </span>{" "}
            e fique ligado: nossa equipe vai analisar seu caso com atenção e
            entrará em contato em até 48 horas para te orientar sobre os
            próximos passos.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center text-center gap-2 bg-wppLight text-white font-bold py-4 px-6 rounded-lg hover:shadow-lg transition-all"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
              </svg>
            </span>{" "}
            ENVIAR MINHAS INFORMAÇÕES
          </a>
        </div>
      </div>
    </div>
  );
}
