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

  function startQuiz() {
    setScreen("step1");
  }

  function handleChoice(field, value, nextScreen) {
    const newAnswers = { ...answers, [field]: value };
    setAnswers(newAnswers);
    setScreen(nextScreen);
  }

  function checkQualification() {
    const values = Object.values(answers);
    const hasViolation =
      values.includes("Sim") ||
      answers.jornada === "Mais de 8 horas" ||
      answers.horasExtras === "Não";

    if (hasViolation) {
      setScreen("qualificado");
    } else {
      setScreen("desqualificado_geral");
    }
  }

  useEffect(() => {
    const screens = [
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
    const currentIndex = screens.indexOf(screen);
    if (currentIndex !== -1) {
      const calcProgress = Math.round(
        ((currentIndex + 1) / screens.length) * 100,
      );
      setProgress(calcProgress);
    }
  }, [screen]);

  return (
    <div className="min-h-screen bg-primaryDark flex items-center justify-center p-4 relative">
      <div className="absolute top-0 bg-primaryDark border-b p-4 w-full flex justify-center max-h-[97px]">
        <img src={Logo} alt="Logo" className="max-w-[200px]" />
      </div>

      {/* START */}
      {screen === "start" && (
        <div className="bg-[#FAFBFC] max-w-[672px] h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9]">
          <div className="w-full text-center smooth-pop">
            <h1 className="text-3xl md:text-4xl font-bold text-[#051E3C] mb-4">
              Análise de Direitos Trabalhistas para Motoristas
            </h1>
            <p className="text-[#051E3C] mb-2">
              Motoristas de caminhão podem ter direito a indenizações por horas
              extras e adicionais não pagos.
            </p>
            <p className="text-[#051E3C] mb-8">
              Clique no botão abaixo e faça sua simulação gratuita agora!
            </p>
            <button
              onClick={startQuiz}
              className="inline-flex items-center gap-2 bg-primaryLight text-black font-bold py-4 px-8 rounded-lg hover:shadow-lg hover:bg-primaryLight/90 transition-all duration-200 text-lg"
            >
              INICIAR ANÁLISE AGORA
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* STEP 1 - TIPO TRABALHO */}
      {screen === "step1" && (
        <div className="bg-[#FAFBFC] max-w-[672px] w-full h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9]">
          <div className="w-full mb-6">
            <div className="h-2 bg-[#F1F3F7] rounded-full overflow-hidden">
              <div
                className="h-full bg-primaryLight transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <div className="smooth-pop">
            <p className="text-sm text-gray-600 mb-2">Pergunta 1</p>
            <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
              Você trabalha como motorista de caminhão CLT ou autônomo?
            </h2>
            <div className="space-y-4">
              <button
                onClick={() => handleChoice("tipoTrabalho", "CLT", "step2")}
                className="w-full flex items-center gap-3 p-4 rounded-lg border-2 border-[#E0E2E9] bg-white hover:bg-blue-50 transition-all duration-200 hover:shadow-lg group"
              >
                <span className="text-lg font-medium text-[#051E3C]">
                  Motorista de caminhão CLT
                </span>
              </button>
              <button
                onClick={() => setScreen("desqualificado_clt")}
                className="w-full flex items-center gap-3 p-4 rounded-lg border-2 border-[#E0E2E9] bg-white hover:bg-[#F1F3F7] transition-all duration-200 hover:shadow-lg"
              >
                <span className="text-lg font-medium text-[#051E3C]">
                  Motorista autônomo
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2 - STATUS */}
      {screen === "step2" && (
        <div className="bg-[#FAFBFC] max-w-[672px] w-full h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9]">
          <div className="w-full mb-6">
            <div className="h-2 bg-[#F1F3F7] rounded-full overflow-hidden">
              <div
                className="h-full bg-primaryLight transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <div className="smooth-pop">
            <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
              Você ainda trabalha na empresa ou já foi dispensado?
            </h2>
            <div className="space-y-4">
              <button
                onClick={() =>
                  handleChoice("statusEmprego", "Ativo", "step_data_adm")
                }
                className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white hover:bg-blue-50 transition-all duration-200 text-left font-medium text-[#051E3C]"
              >
                Ainda trabalho
              </button>
              <button
                onClick={() =>
                  handleChoice("statusEmprego", "Dispensado", "step_data_adm")
                }
                className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white hover:bg-[#F1F3F7] transition-all duration-200 text-left font-medium text-[#051E3C]"
              >
                Já fui dispensado
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP DATA ADMISSÃO */}
      {screen === "step_data_adm" && (
        <div className="bg-[#FAFBFC] max-w-[672px] h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9] w-full">
          <div className="w-full mb-6">
            <div className="h-2 bg-[#F1F3F7] rounded-full overflow-hidden">
              <div
                className="h-full bg-primaryLight transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <div className="w-full smooth-pop">
            <h2 className="text-2xl md:text-3xl font-bold text-[#051E3C] mb-8">
              Qual foi sua data de admissão?
            </h2>
            <input
              type="date"
              value={answers.dataAdmissao}
              onChange={(e) =>
                setAnswers({ ...answers, dataAdmissao: e.target.value })
              }
              className="w-full mb-4 pl-4 pr-4 py-4 text-[#051E3C] border-2 border-[#E0E2E9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#308CFF] bg-[#FAFBFC]"
            />
            <button
              onClick={() =>
                setScreen(
                  answers.statusEmprego === "Ativo"
                    ? "step3"
                    : "step_data_saida",
                )
              }
              className="w-full flex items-center justify-center gap-2 bg-primaryLight text-black font-semibold py-4 px-6 rounded-lg hover:shadow-lg transition-all"
            >
              Continuar
            </button>
          </div>
        </div>
      )}

      {/* STEP DATA SAÍDA */}
      {screen === "step_data_saida" && (
        <div className="bg-[#FAFBFC] max-w-[672px] h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9] w-full">
          <div className="w-full mb-6">
            <div className="h-2 bg-[#F1F3F7] rounded-full overflow-hidden">
              <div
                className="h-full bg-primaryLight transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <div className="w-full smooth-pop">
            <h2 className="text-2xl md:text-3xl font-bold text-[#051E3C] mb-8">
              Qual foi sua data de saída?
            </h2>
            <input
              type="date"
              value={answers.dataSaida}
              onChange={(e) =>
                setAnswers({ ...answers, dataSaida: e.target.value })
              }
              className="w-full mb-4 pl-4 pr-4 py-4 text-[#051E3C] border-2 border-[#E0E2E9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#308CFF] bg-[#FAFBFC]"
            />
            <button
              onClick={() => setScreen("step3")}
              className="w-full flex items-center justify-center gap-2 bg-primaryLight text-black font-semibold py-4 px-6 rounded-lg hover:shadow-lg transition-all"
            >
              Continuar
            </button>
          </div>
        </div>
      )}

      {/* STEP 3 - OUTRAS FUNÇÕES */}
      {screen === "step3" && (
        <div className="bg-[#FAFBFC] max-w-[672px] w-full h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9]">
          <div className="smooth-pop">
            <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
              Além de dirigir o caminhão, você fazia outras funções?
            </h2>
            <div className="space-y-4">
              <button
                onClick={() => handleChoice("outrasFuncoes", "Sim", "step4")}
                className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white hover:bg-blue-50 transition-all duration-200 text-left font-medium text-[#051E3C]"
              >
                Sim
              </button>
              <button
                onClick={() => handleChoice("outrasFuncoes", "Não", "step4")}
                className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white hover:bg-[#F1F3F7] transition-all duration-200 text-left font-medium text-[#051E3C]"
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 4 - JORNADA */}
      {screen === "step4" && (
        <div className="bg-[#FAFBFC] max-w-[672px] w-full h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9]">
          <div className="smooth-pop">
            <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
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
          </div>
        </div>
      )}

      {/* STEP 5 - HORAS EXTRAS */}
      {screen === "step5" && (
        <div className="bg-[#FAFBFC] max-w-[672px] w-full h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9]">
          <div className="smooth-pop">
            <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
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
          </div>
        </div>
      )}

      {/* STEP 6 - RODAVA NOITE */}
      {screen === "step6" && (
        <div className="bg-[#FAFBFC] max-w-[672px] w-full h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9]">
          <div className="smooth-pop">
            <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
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
          </div>
        </div>
      )}

      {/* STEP 6 ADICIONAL */}
      {screen === "step6_adicional" && (
        <div className="bg-[#FAFBFC] max-w-[672px] w-full h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9]">
          <div className="smooth-pop">
            <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
              Você recebia corretamente o adicional noturno?
            </h2>
            <div className="space-y-4">
              <button
                onClick={() => handleChoice("adicionalNoturno", "Sim", "step7")}
                className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
              >
                Sim
              </button>
              <button
                onClick={() => handleChoice("adicionalNoturno", "Não", "step7")}
                className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 7 - PERIGOSAS */}
      {screen === "step7" && (
        <div className="bg-[#FAFBFC] max-w-[672px] w-full h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9]">
          <div className="smooth-pop">
            <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
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
                onClick={() => handleChoice("periculosidade", "Não", "step8")}
                className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 7 ADICIONAL */}
      {screen === "step7_perigo" && (
        <div className="bg-[#FAFBFC] max-w-[672px] w-full h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9]">
          <div className="smooth-pop">
            <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
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
          </div>
        </div>
      )}

      {/* STEP 8 - DESCONTOS */}
      {screen === "step8" && (
        <div className="bg-[#FAFBFC] max-w-[672px] w-full h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9]">
          <div className="smooth-pop">
            <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
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
          </div>
        </div>
      )}

      {/* STEP 9 - FORA DE CASA */}
      {screen === "step9" && (
        <div className="bg-[#FAFBFC] max-w-[672px] w-full h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9]">
          <div className="smooth-pop">
            <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
              Você já passou mais de 26 dias seguidos fora de casa por causa da
              jornada de trabalho?
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
          </div>
        </div>
      )}

      {/* STEP 10 - ASSEDIO */}
      {screen === "step10" && (
        <div className="bg-[#FAFBFC] max-w-[672px] w-full h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9]">
          <div className="smooth-pop">
            <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
              Você já sofreu assédio no trabalho?
            </h2>
            <div className="space-y-4">
              <button
                onClick={() => {
                  setAnswers({ ...answers, assedio: "Sim" });
                  checkQualification();
                }}
                className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
              >
                Sim
              </button>
              <button
                onClick={() => {
                  setAnswers({ ...answers, assedio: "Não" });
                  checkQualification();
                }}
                className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TELA QUALIFICADO */}
      {screen === "qualificado" && (
        <div className="bg-[#FAFBFC] max-w-[672px] h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9] w-full">
          <div className="w-full smooth-pop text-center">
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
              equipe vai analisar seu caso com atenção e entrará em contato em
              até 48 horas para te orientar sobre os próximos passos.
            </p>
            <button
              onClick={() => navigate("/sucesso", { state: { answers } })}
              className="w-full bg-primaryLight text-black font-bold py-4 px-6 rounded-lg hover:shadow-lg transition-all"
            >
              FALAR COM ESPECIALISTA
            </button>
          </div>
        </div>
      )}

      {/* TELA DESQUALIFICADO CLT (AUTÔNOMO) */}
      {screen === "desqualificado_clt" && (
        <div className="bg-[#FAFBFC] max-w-[672px] h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9] w-full">
          <div className="w-full smooth-pop text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#F1F3F7] rounded-full flex items-center justify-center">
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
                  className="text-primaryLight"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#051E3C] mb-6">
              Aviso
            </h2>
            <p className="text-[#051E3C] mb-8 leading-relaxed">
              Esta análise é exclusiva para motoristas de caminhão CLT.
              Agradecemos o interesse!
            </p>
            <button
              onClick={() => setScreen("start")}
              className="w-full bg-[#E0E2E9] text-[#051E3C] font-semibold py-4 px-6 rounded-lg hover:bg-gray-300 transition-all"
            >
              Voltar ao início
            </button>
          </div>
        </div>
      )}

      {/* TELA DESQUALIFICADO GERAL (TUDO NÃO) */}
      {screen === "desqualificado_geral" && (
        <div className="bg-[#FAFBFC] max-w-[672px] h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9] w-full">
          <div className="w-full smooth-pop text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#F1F3F7] rounded-full flex items-center justify-center">
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
                  className="text-gray-500"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#051E3C] mb-6">
              Análise Concluída
            </h2>
            <p className="text-[#051E3C] mb-8 leading-relaxed">
              Com base nas suas respostas, não identificamos direitos
              trabalhistas no momento...
            </p>
            <button
              onClick={() => setScreen("start")}
              className="w-full bg-[#E0E2E9] text-[#051E3C] font-semibold py-4 px-6 rounded-lg hover:bg-gray-300 transition-all"
            >
              Voltar ao início
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
