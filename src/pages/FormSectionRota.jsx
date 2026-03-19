import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/imgs/logo/logoDesktop.webp";

export default function Quiz() {
  const [screen, setScreen] = useState("start");
  const [answers, setAnswers] = useState({
    tipoTrabalho: "",
    statusEmprego: "",
    dataAdmissao: "",
    dataSaida: "",
    outrasFuncoes: "",
    jornada: "",
    horasExtras: "",
    rodavaNoite: "",
    adicionalNoturno: "",
    periculosidade: "",
    recebiaPericulosidade: "",
    descontos: "",
    foraDeCasa: "",
    assedio: "",
  });

  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  // Mapeamento de todas as telas de pergunta para cálculo da barra
  const questionScreens = [
    "step1",
    "step2",
    "step_data_adm",
    "step_data_saida",
    "step3",
    "step4",
    "step5",
    "step6",
    "step6_adicional",
    "step7",
    "step7_perigo",
    "step8",
    "step9",
    "step10",
  ];

  function startQuiz() {
    setScreen("step1");
  }

  function handleChoice(field, value, nextScreen) {
    const newAnswers = { ...answers, [field]: value };
    setAnswers(newAnswers);
    setScreen(nextScreen);
  }

  function checkFinalStep(lastValue) {
    const updatedAnswers = { ...answers, assedio: lastValue };

    // Perguntas específicas para a regra de qualificação
    const checkFields = [
      updatedAnswers.outrasFuncoes,
      updatedAnswers.rodavaNoite,
      updatedAnswers.periculosidade,
      updatedAnswers.descontos,
      updatedAnswers.foraDeCasa,
      updatedAnswers.assedio,
    ];

    const hasAnySim = checkFields.includes("Sim");

    if (hasAnySim) {
      navigate("/sucesso", { state: { answers: updatedAnswers } });
    } else {
      setScreen("final_aviso");
    }
  }

  useEffect(() => {
    const currentIndex = questionScreens.indexOf(screen);
    if (currentIndex !== -1) {
      const calcProgress = Math.round(
        ((currentIndex + 1) / questionScreens.length) * 100,
      );
      setProgress(calcProgress);
    }
  }, [screen]);

  // Componente da Barra de Progresso para evitar repetição
  const ProgressBar = () => (
    <div className="w-full mb-6">
      <div className="h-2 bg-[#F1F3F7] rounded-full overflow-hidden">
        <div
          className="h-full bg-primaryLight transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-primaryDark flex items-center justify-center p-4 relative">
      <div className="absolute top-0 bg-primaryDark border-b p-4 w-full flex justify-center max-h-[97px]">
        <img src={Logo} alt="Logo" className="max-w-[200px]" />
      </div>

      {/* TELA INICIAL */}
      {screen === "start" && (
        <div className="bg-[#FAFBFC] max-w-[672px] h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9]">
          <div className="w-full text-center smooth-pop">
            <h1 className="text-3xl md:text-4xl font-bold text-[#051E3C] mb-4">
              Análise de Direitos Trabalhistas
            </h1>
            <p className="text-[#051E3C] mb-8">
              Clique no botão abaixo e faça sua simulação gratuita agora!
            </p>
            <button
              onClick={startQuiz}
              className="bg-primaryLight text-black font-bold py-4 px-8 rounded-lg hover:shadow-lg transition-all text-lg"
            >
              INICIAR ANÁLISE AGORA
            </button>
          </div>
        </div>
      )}

      {/* PERGUNTAS (Com Barra de Progresso) */}
      {questionScreens.includes(screen) && (
        <div className="bg-[#FAFBFC] max-w-[672px] w-full h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9]">
          <ProgressBar />

          <div className="smooth-pop">
            {screen === "step1" && (
              <>
                <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
                  Você trabalha como motorista de caminhão CLT ou autônomo?
                </h2>
                <div className="space-y-4">
                  <button
                    onClick={() => handleChoice("tipoTrabalho", "CLT", "step2")}
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Motorista de caminhão CLT
                  </button>
                  <button
                    onClick={() => setScreen("desqualificado_clt")}
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Motorista autônomo
                  </button>
                </div>
              </>
            )}

            {screen === "step2" && (
              <>
                <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
                  Você ainda trabalha na empresa ou já foi dispensado?
                </h2>
                <div className="space-y-4">
                  <button
                    onClick={() =>
                      handleChoice("statusEmprego", "Ativo", "step_data_adm")
                    }
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Ainda trabalho
                  </button>
                  <button
                    onClick={() =>
                      handleChoice(
                        "statusEmprego",
                        "Dispensado",
                        "step_data_adm",
                      )
                    }
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Já fui dispensado
                  </button>
                </div>
              </>
            )}

            {screen === "step_data_adm" && (
              <>
                <h2 className="text-2xl font-bold text-[#051E3C] mb-8">
                  Qual foi sua data de admissão?
                </h2>
                <input
                  type="date"
                  value={answers.dataAdmissao}
                  onChange={(e) =>
                    setAnswers({ ...answers, dataAdmissao: e.target.value })
                  }
                  className="w-full mb-4 p-4 border-2 border-[#E0E2E9] rounded-lg"
                />
                <button
                  onClick={() =>
                    setScreen(
                      answers.statusEmprego === "Ativo"
                        ? "step3"
                        : "step_data_saida",
                    )
                  }
                  className="w-full bg-primaryLight text-black font-semibold py-4 rounded-lg"
                >
                  Continuar
                </button>
              </>
            )}

            {screen === "step_data_saida" && (
              <>
                <h2 className="text-2xl font-bold text-[#051E3C] mb-8">
                  Qual foi sua data de saída?
                </h2>
                <input
                  type="date"
                  value={answers.dataSaida}
                  onChange={(e) =>
                    setAnswers({ ...answers, dataSaida: e.target.value })
                  }
                  className="w-full mb-4 p-4 border-2 border-[#E0E2E9] rounded-lg"
                />
                <button
                  onClick={() => setScreen("step3")}
                  className="w-full bg-primaryLight text-black font-semibold py-4 rounded-lg"
                >
                  Continuar
                </button>
              </>
            )}

            {screen === "step3" && (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Além de dirigir o caminhão, você fazia outras funções?
                </h2>
                <div className="space-y-4">
                  <button
                    onClick={() =>
                      handleChoice("outrasFuncoes", "Sim", "step4")
                    }
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Sim
                  </button>
                  <button
                    onClick={() =>
                      handleChoice("outrasFuncoes", "Não", "step4")
                    }
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Não
                  </button>
                </div>
              </>
            )}

            {screen === "step4" && (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Qual era a sua jornada de trabalho diária?
                </h2>
                <div className="space-y-4">
                  <button
                    onClick={() =>
                      handleChoice("jornada", "Menos de 8 horas", "step5")
                    }
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Menos de 8 horas
                  </button>
                  <button
                    onClick={() => handleChoice("jornada", "8 horas", "step5")}
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    8 horas
                  </button>
                  <button
                    onClick={() =>
                      handleChoice("jornada", "Mais de 8 horas", "step5")
                    }
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Mais de 8 horas
                  </button>
                </div>
              </>
            )}

            {screen === "step5" && (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Você recebia corretamente pelas horas extras?
                </h2>
                <div className="space-y-4">
                  <button
                    onClick={() => handleChoice("horasExtras", "Sim", "step6")}
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Sim
                  </button>
                  <button
                    onClick={() => handleChoice("horasExtras", "Não", "step6")}
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Não
                  </button>
                </div>
              </>
            )}

            {screen === "step6" && (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Você rodava à noite (22h às 5h)?
                </h2>
                <div className="space-y-4">
                  <button
                    onClick={() =>
                      handleChoice("rodavaNoite", "Sim", "step6_adicional")
                    }
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Sim
                  </button>
                  <button
                    onClick={() => handleChoice("rodavaNoite", "Não", "step7")}
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Não
                  </button>
                </div>
              </>
            )}

            {screen === "step6_adicional" && (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Você recebia corretamente o adicional noturno?
                </h2>
                <div className="space-y-4">
                  <button
                    onClick={() =>
                      handleChoice("adicionalNoturno", "Sim", "step7")
                    }
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Sim
                  </button>
                  <button
                    onClick={() =>
                      handleChoice("adicionalNoturno", "Não", "step7")
                    }
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Não
                  </button>
                </div>
              </>
            )}

            {screen === "step7" && (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Você transportava combustível ou cargas perigosas?
                </h2>
                <div className="space-y-4">
                  <button
                    onClick={() =>
                      handleChoice("periculosidade", "Sim", "step7_perigo")
                    }
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Sim
                  </button>
                  <button
                    onClick={() =>
                      handleChoice("periculosidade", "Não", "step8")
                    }
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Não
                  </button>
                </div>
              </>
            )}

            {screen === "step7_perigo" && (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Você recebia o adicional de 30%?
                </h2>
                <div className="space-y-4">
                  <button
                    onClick={() =>
                      handleChoice("recebiaPericulosidade", "Sim", "step8")
                    }
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Sim
                  </button>
                  <button
                    onClick={() =>
                      handleChoice("recebiaPericulosidade", "Não", "step8")
                    }
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Não
                  </button>
                </div>
              </>
            )}

            {screen === "step8" && (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Já fizeram descontos sem sua autorização?
                </h2>
                <div className="space-y-4">
                  <button
                    onClick={() => handleChoice("descontos", "Sim", "step9")}
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Sim
                  </button>
                  <button
                    onClick={() => handleChoice("descontos", "Não", "step9")}
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Não
                  </button>
                </div>
              </>
            )}

            {screen === "step9" && (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Já ficou mais de 26 dias fora de casa?
                </h2>
                <div className="space-y-4">
                  <button
                    onClick={() => handleChoice("foraDeCasa", "Sim", "step10")}
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Sim
                  </button>
                  <button
                    onClick={() => handleChoice("foraDeCasa", "Não", "step10")}
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Não
                  </button>
                </div>
              </>
            )}

            {screen === "step10" && (
              <>
                <h2 className="text-2xl font-bold mb-6">
                  Você já sofreu assédio no trabalho?
                </h2>
                <div className="space-y-4">
                  <button
                    onClick={() => checkFinalStep("Sim")}
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Sim
                  </button>
                  <button
                    onClick={() => checkFinalStep("Não")}
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Não
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* TELA FINAL (TODOS NÃO) */}
      {screen === "final_aviso" && (
        <div className="w-full max-w-2xl bg-[#FAFBFC] rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9]">
          <div className="w-full text-center smooth-pop">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-x-icon lucide-x"
                  className="text-red-500"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#051E3C] mb-6">
              Indícios não Identificados!
            </h2>
            <p className="text-[#051E3C] leading-relaxed">
              Com base nas suas respostas, não conseguimos identificar nenhum
              direito trabalhista para analisar agora. Mas fique ligado, porque
              sempre tem novidade sobre os direitos dos motoristas.
              <br />
              <br />
              Se ainda quiser falar com nosso escritório e tirar suas dúvidas,
              entre em contato pelo WhatsApp: (15) 99746-2217. Estamos prontos
              para te orientar.
            </p>
            {/* <button
              onClick={() => navigate("/sucesso", { state: { answers } })}
              className="w-full bg-primaryLight text-black font-bold py-4 px-6 rounded-lg hover:shadow-lg transition-all"
            >
              FALAR COM ESPECIALISTA
            </button> */}
          </div>
        </div>
      )}

      {/* DESQUALIFICADO CLT */}
      {screen === "desqualificado_clt" && (
        <div className="bg-[#FAFBFC] smooth-pop max-w-[672px] h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9] w-full text-center">
          <div className="w-16 h-16 bg-[#E0E2E9] mx-auto mb-4 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-info-icon lucide-info"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-6">
            Esta análise é exclusiva para motoristas de caminhão CLT.
            Agradecemos o interesse!
          </h2>
          <button
            onClick={() => setScreen("start")}
            className="w-full bg-[#E0E2E9] text-[#051E3C] font-semibold py-4 px-6 rounded-lg transition-all"
          >
            Voltar ao início
          </button>
        </div>
      )}
    </div>
  );
}
