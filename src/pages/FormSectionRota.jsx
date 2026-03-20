import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/imgs/logo/logoDesktop.webp";
import { ArrowLeft } from "lucide-react";

export default function Quiz() {
  const [screen, setScreen] = useState("start");
  const [answers, setAnswers] = useState({
    nome: "", // Adicionado
    whatsapp: "", // Adicionado
    cidade: "", // Adicionado
    estado: "", // Adicionado
    nome: "",
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

  const questionScreens = [
    "start",
    "step1",
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

  function handleBack() {
    const currentIndex = questionScreens.indexOf(screen);

    if (currentIndex <= 0) return;

    let prevStep = questionScreens[currentIndex - 1];

    if (
      screen === "step_data_saida" &&
      answers.statusEmprego === "Dispensado"
    ) {
      prevStep = "step2";
    }

    if (screen === "step3" && answers.statusEmprego === "Ativo") {
      prevStep = "step_data_adm";
    }

    if (screen === "step3" && answers.statusEmprego === "Dispensado") {
      prevStep = "step_data_saida";
    }

    if (screen === "step7" && answers.rodavaNoite === "Não") {
      prevStep = "step6";
    }

    if (screen === "step8" && answers.periculosidade === "Não") {
      prevStep = "step7";
    }

    setScreen(prevStep);
  }

  function handleChoice(field, value, nextScreen) {
    setAnswers((prev) => ({ ...prev, [field]: value }));

    if (field === "statusEmprego" && value === "Dispensado") {
      setScreen("step_data_saida");
    } else {
      setScreen(nextScreen);
    }
  }

  function checkFinalStep(lastValue) {
    setAnswers((prev) => {
      const updatedAnswers = { ...prev, assedio: lastValue };
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
      return updatedAnswers;
    });
  }

  useEffect(() => {
    const currentIndex = questionScreens.indexOf(screen);
    if (currentIndex !== -1) {
      const calcProgress = Math.round(
        (currentIndex / (questionScreens.length - 1)) * 100,
      );
      setProgress(calcProgress);
    }
  }, [screen]);

  const ProgressBar = () => {
    if (screen === "start") return null; // Não renderiza no start

    return (
      <div className="w-full mb-6">
        <div className="h-2 bg-[#F1F3F7] rounded-full overflow-hidden">
          <div
            className="h-full bg-primaryLight transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    );
  };

  const formatWhatsApp = (value) => {
    if (!value) return "";
    const phoneNumber = value.replace(/\D/g, ""); // Remove tudo que não é número
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 3) return phoneNumber;
    if (phoneNumberLength < 7)
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
  };

  const BackButton = () => (
    <button
      onClick={handleBack}
      className={`flex items-center gap-2 text-gray-400 hover:text-primaryDark mb-2 transition-colors w-fit ${screen === "start" ? "invisible" : ""}`}
    >
      <ArrowLeft size={18} />
      <span className="text-sm font-medium">Voltar</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-primaryDark flex items-center justify-center p-4 relative">
      <div className="absolute top-0 bg-primaryDark border-b p-4 w-full flex justify-center max-h-[97px]">
        <img src={Logo} alt="Logo" className="max-w-[200px]" />
      </div>

      {questionScreens.includes(screen) && (
        <div
          key={screen}
          className="bg-[#FAFBFC] max-w-[672px] w-full h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9]"
        >
          <ProgressBar />

          <div className="smooth-pop">
            <BackButton />

            {screen === "start" && (
              <div className="w-full text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-[#051E3C] mb-6">
                  Motorista de caminhão CLT: Descubra agora se os seus direitos
                  estão sendo respeitados
                </h2>
                <p className="text-[#051E3C] mb-8 leading-relaxed">
                  Em poucos segundos, confira se a empresa está respeitando seus
                  direitos trabalhistas.
                </p>

                {/* Formulário de Identificação */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
                  <div className="md:col-span-2">
                    <label className="text-sm font-semibold text-[#051E3C]">
                      Nome completo:
                    </label>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      className="w-full p-3 border-2 border-[#E0E2E9] rounded-lg focus:border-primaryLight outline-none"
                      value={answers.nome}
                      onChange={(e) =>
                        setAnswers({ ...answers, nome: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[#051E3C]">
                      WhatsApp com DDD:
                    </label>
                    <input
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="w-full p-3 border-2 border-[#E0E2E9] rounded-lg focus:border-primaryLight outline-none"
                      value={answers.whatsapp}
                      onChange={(e) => {
                        const formattedValue = formatWhatsApp(e.target.value);
                        setAnswers({ ...answers, whatsapp: formattedValue });
                      }}
                      maxLength={15} // Limita para não passar do formato (99) 99999-9999
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-[#051E3C]">
                      Cidade:
                    </label>
                    <input
                      type="text"
                      placeholder="Sua cidade"
                      className="w-full p-3 border-2 border-[#E0E2E9] rounded-lg focus:border-primaryLight outline-none"
                      value={answers.cidade}
                      onChange={(e) =>
                        setAnswers({ ...answers, cidade: e.target.value })
                      }
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-semibold text-[#051E3C]">
                      Estado:
                    </label>
                    <input
                      type="text"
                      placeholder="Seu estado"
                      className="w-full p-3 border-2 border-[#E0E2E9] rounded-lg focus:border-primaryLight outline-none"
                      value={answers.estado}
                      onChange={(e) =>
                        setAnswers({ ...answers, estado: e.target.value })
                      }
                    />
                  </div>
                </div>

                <button
                  onClick={() => setScreen("step1")}
                  disabled={
                    !answers.nome ||
                    !answers.whatsapp ||
                    !answers.cidade ||
                    !answers.estado
                  }
                  className={`w-full md:w-auto font-bold py-4 px-8 rounded-lg transition-all text-lg ${
                    !answers.nome ||
                    !answers.whatsapp ||
                    !answers.cidade ||
                    !answers.estado
                      ? "bg-gray-300 cursor-not-allowed text-gray-500"
                      : "bg-primaryLight text-black hover:shadow-lg"
                  }`}
                >
                  Responder Agora
                </button>
              </div>
            )}

            {/* {screen === "step1" && (
              <>
                <p className="mb-2 text-gray-400">Pergunta 1 de 13</p>
                <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
                  Qual o seu nome?
                </h2>
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  value={answers.nome}
                  onChange={(e) =>
                    setAnswers({ ...answers, nome: e.target.value })
                  }
                  className="w-full mb-6 p-4 border-2 border-[#E0E2E9] rounded-lg focus:border-primaryLight outline-none"
                />
                <button
                  onClick={() => {
                    if (answers.nome.trim()) setScreen("step1");
                  }}
                  className={`w-full font-semibold py-4 rounded-lg transition-all ${
                    !answers.nome.trim()
                      ? "bg-gray-300 cursor-not-allowed text-gray-500"
                      : "bg-primaryLight text-black"
                  }`}
                >
                  Continuar
                </button>
              </>
            )} */}

            {screen === "step1" && (
              <>
                <p className="mb-2 text-gray-400">Pergunta 1 de 13</p>
                <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
                  Você trabalha como motorista de caminhão CLT ou autônomo?
                </h2>
                <div className="space-y-4">
                  <button
                    onClick={() => handleChoice("tipoTrabalho", "CLT", "step2")}
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Motorista de caminhão CLT ✅
                  </button>
                  <button
                    onClick={() => setScreen("desqualificado_clt")}
                    className="w-full p-4 rounded-lg border-2 border-[#E0E2E9] bg-white text-left font-medium"
                  >
                    Motorista autônomo ❌
                  </button>
                </div>
              </>
            )}

            {screen === "step2" && (
              <>
                <p className="mb-2 text-gray-400">Pergunta 2 de 13</p>
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
                    Ainda trabalho na empresa
                  </button>
                  <button
                    onClick={() =>
                      handleChoice(
                        "statusEmprego",
                        "Dispensado",
                        "step_data_saida",
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
                <p className="mb-2 text-gray-400">Pergunta 3 de 13</p>
                <h2 className="text-2xl font-bold text-[#051E3C] mb-8">
                  Qual a data em que você começou a trabalhar na empresa?
                </h2>
                <input
                  type="date"
                  required
                  value={answers.dataAdmissao}
                  onChange={(e) =>
                    setAnswers({ ...answers, dataAdmissao: e.target.value })
                  }
                  className="w-full mb-4 p-4 border-2 border-[#E0E2E9] rounded-lg"
                />
                <button
                  onClick={() => {
                    if (answers.dataAdmissao) setScreen("step3");
                  }}
                  className={`w-full font-semibold py-4 rounded-lg transition-opacity ${!answers.dataAdmissao ? "opacity-50 cursor-not-allowed bg-gray-300" : "bg-primaryLight text-black"}`}
                >
                  Continuar
                </button>
              </>
            )}

            {screen === "step_data_saida" && (
              <>
                <p className="mb-2 text-gray-400">Pergunta 3 de 13</p>
                <h2 className="text-2xl font-bold text-[#051E3C] mb-8">
                  Qual a data em que seu contrato foi encerrado?
                </h2>
                <input
                  type="date"
                  required
                  value={answers.dataSaida}
                  onChange={(e) =>
                    setAnswers({ ...answers, dataSaida: e.target.value })
                  }
                  className="w-full mb-4 p-4 border-2 border-[#E0E2E9] rounded-lg"
                />
                <button
                  onClick={() => {
                    if (answers.dataSaida) setScreen("step3");
                  }}
                  className={`w-full font-semibold py-4 rounded-lg transition-opacity ${!answers.dataSaida ? "opacity-50 cursor-not-allowed bg-gray-300" : "bg-primaryLight text-black"}`}
                >
                  Continuar
                </button>
              </>
            )}

            {screen === "step3" && (
              <>
                <p className="mb-2 text-gray-400">Pergunta 4 de 13</p>
                <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
                  Além de dirigir o caminhão, você fazia outras funções, como
                  carregar, descarregar ou conferir carga?
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
                <p className="mb-2 text-gray-400">Pergunta 5 de 13</p>
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
              </>
            )}

            {screen === "step5" && (
              <>
                <p className="mb-2 text-gray-400">Pergunta 6 de 13</p>
                <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
                  Você recebia corretamente pelas horas extras e pelo tempo de
                  espera para carga e descarga?
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
                <p className="mb-2 text-gray-400">Pergunta 7 de 13</p>
                <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
                  Você roda à noite, entre 22h e 5h?
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
                <p className="mb-2 text-gray-400">Pergunta 8 de 13</p>
                <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
                  Você recebia corretamente o adicional noturno pelo trabalho
                  nesse período?
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
                <p className="mb-2 text-gray-400">Pergunta 9 de 13</p>
                <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
                  Você transportava combustível ou cargas perigosas
                  regularmente?
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
                <p className="mb-2 text-gray-400">Pergunta 10 de 13</p>
                <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
                  Você recebia corretamente o adicional de periculosidade de 30%
                  por transportar combustível ou cargas perigosas?
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
                <p className="mb-2 text-gray-400">Pergunta 11 de 13</p>
                <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
                  Já fizeram algum desconto em seu salário sem a sua
                  autorização?
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
                <p className="mb-2 text-gray-400">Pergunta 12 de 13</p>
                <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
                  Você já passou mais de 26 dias seguidos fora de casa por causa
                  da jornada de trabalho?
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
                <p className="mb-2 text-gray-400">Pergunta 13 de 13</p>
                <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
                  Você já sofreu assédio no trabalho, sendo humilhado,
                  pressionado ou constrangido na frente dos colegas?
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

      {screen === "final_aviso" && (
        <div className="w-full max-w-2xl bg-[#FAFBFC] rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9]">
          <div className="w-full text-center">
            {/* <h2 className="text-2xl md:text-3xl font-bold text-[#051E3C] mb-6">
              Indícios não Identificados!
            </h2> */}
            <p className="text-[#051E3C] leading-relaxed">
              Com base nas suas respostas, não conseguimos identificar nenhum
              direito trabalhista para analisar agora.
              <br />
              <br />
              Se ainda quiser falar com nosso escritório, entre em contato pelo
              WhatsApp: <br /> (15) 99746-2217.
            </p>
          </div>
        </div>
      )}

      {screen === "desqualificado_clt" && (
        <div className="bg-[#FAFBFC] max-w-[672px] h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9] w-full text-center">
          <h2 className="text-2xl font-bold mb-6 text-[#051E3C]">
            Esta análise é exclusiva para motoristas de caminhão CLT.
            Agradecemos o interesse!
          </h2>
          <button
            onClick={() => setScreen("start")}
            className="w-full bg-[#E0E2E9] text-[#051E3C] font-semibold py-4 px-6 rounded-lg"
          >
            Voltar ao início
          </button>
        </div>
      )}
    </div>
  );
}
