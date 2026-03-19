import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/imgs/logo/logoDesktop.webp";

export default function Quiz() {
  const [screen, setScreen] = useState("start");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [alertName, setAlertName] = useState(false);
  const navigate = useNavigate();
  const [dateError, setDateError] = useState(false);
  const [progress, setProgress] = useState(0);
  const [pregnancyMonths, setPregnancyMonths] = useState(null);

  function startQuiz() {
    setScreen("step1");
  }

  function goStep2() {
    if (name.length === 0) {
      setAlertName(true);
      return;
    }
    setScreen("step2");
  }

  function handlePregnancy(answer) {
    if (answer === "nao" || answer === "outro") {
      setScreen("thanks");
    }

    if (answer === "sim") {
      setScreen("step3");
    }

    if (answer === "bebe2026") {
      setScreen("stepbaby");
    }
  }

  function restart() {
    setScreen("start");
    setName("");
  }

  function calculateMonths(birthDate) {
    const birth = new Date(birthDate);
    const today = new Date();

    let months =
      (today.getFullYear() - birth.getFullYear()) * 12 +
      (today.getMonth() - birth.getMonth());

    if (today.getDate() < birth.getDate()) {
      months--;
    }

    return months;
  }

  function formatDate(dateString) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  function goSucessoBaby() {
    if (!birthDate) {
      setDateError(true);
      return;
    }

    setDateError(false);

    const months = calculateMonths(birthDate);
    const formattedDate = formatDate(birthDate);

    const message = `Olá, eu me chamo ${name}. Tive bebê recente e ele tem menos de ${months} meses. Nasceu em ${formattedDate}. Gostaria de receber o salário-maternidade. Pode me ajudar?`;

    navigate("/sucesso", {
      state: {
        months,
        name,
        birthDate: formattedDate,
        message,
      },
    });
  }

  useEffect(() => {
    if (screen === "step1") setProgress(25);
    if (screen === "step2") setProgress(50);
    if (screen === "stepbaby") setProgress(50);
    if (screen === "step3") setProgress(75);
  }, [screen]);

  return (
    <div className="min-h-screen bg-primaryDark flex items-center justify-center p-4 relative">
      <div className="absolute top-0 bg-primaryDark border-b p-4 w-full flex justify-center max-h-[97px]">
        <img src={Logo} alt="Logo" className="max-w-[200px]" />
      </div>
      {/* START (IGUAL AO SEU HTML) */}
      {screen === "start" && (
        <div className="bg-[#FAFBFC] max-w-[672px] h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9]">
          <div className="w-full text-center smooth-pop">
            <h1 className="text-3xl md:text-4xl font-bold text-[#051E3C] mb-4">
              Descubra se você tem direito ao Auxílio Maternidade
            </h1>

            <p className="text-[#051E3C] mb-2">
              Milhares de gestantes estão recebendo até{" "}
              <span className="text-primaryLight font-bold">R$ 6.480,00</span>{" "}
              do governo.
            </p>

            <p className="text-[#051E3C] mb-8">
              Clique no botão abaixo e descubra se você também tem direito!
            </p>

            <button
              onClick={startQuiz}
              className="inline-flex items-center gap-2 bg-primaryLight text-black font-bold py-4 px-8 rounded-lg hover:shadow-lg hover:bg-primaryLight/90 transition-all duration-200 text-lg"
            >
              QUERO SABER SE TENHO DIREITO
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

      {/* STEP 1 */}
      {screen === "step1" && (
        <div className="bg-[#FAFBFC] max-w-[672px] h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9] w-full">
          {/* BARRA DE PROGRESSO */}
          <div className="w-full mb-6">
            <div className="h-2 bg-[#F1F3F7] rounded-full overflow-hidden">
              <div
                className="h-full bg-primaryLight transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="smooth-pop">
            {/* CONTEÚDO */}
            <div className="w-full">
              <p className="text-sm text-gray-600 mb-2">Pergunta 1 de 4</p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#051E3C] mb-8">
                Qual seu nome?
              </h2>

              <div className="space-y-4">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>

                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite seu nome"
                    className="w-full pl-12 pr-4 py-4 h-fit text-[#051E3C] border-2 border-[#E0E2E9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#308CFF] focus:border-primaryLight transition-all bg-[#FAFBFC] max-w-[672px]"
                  />
                </div>
                {alertName && (
                  <p className="text-[#EF4444] font-light">
                    Por favor, digite seu nome
                  </p>
                )}

                <button
                  onClick={goStep2}
                  className="w-full flex items-center justify-center gap-2 bg-primaryLight text-black font-semibold py-4 px-6 rounded-lg hover:shadow-lg hover:bg-primaryLight/90 transition-all duration-200"
                >
                  Continuar
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2 */}
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
            <p className="text-sm text-gray-600 mb-2">Pergunta 2 de 4</p>
            <h2 className="text-2xl font-bold mb-6">Você está grávida?</h2>

            <div className="space-y-4">
              <button
                onClick={() => handlePregnancy("sim")}
                className="w-full flex items-center gap-3 p-4 rounded-lg border-2 border-primaryLight bg-white hover:bg-blue-50 transition-all duration-200 hover:shadow-lg group"
              >
                <span>
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
                    className="lucide lucide-smile text-primaryLight flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" x2="9.01" y1="9" y2="9" />
                    <line x1="15" x2="15.01" y1="9" y2="9" />
                  </svg>
                </span>
                <span className="text-lg font-medium text-[#051E3C]">SIM</span>
              </button>

              <button
                onClick={() => handlePregnancy("nao")}
                className="w-full flex items-center gap-3 p-4 rounded-lg border-2 border-[#E0E2E9] bg-white hover:bg-[#F1F3F7] transition-all duration-200 hover:shadow-lg"
              >
                <span>
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
                    className="lucide lucide-x text-gray-500 flex-shrink-0"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </span>
                <span className="text-lg font-medium text-[#051E3C]">NÃO</span>
              </button>

              <button
                onClick={() => handlePregnancy("bebe2026")}
                className="w-full flex items-center gap-3 p-4 rounded-lg border-2 border-[#E0E2E9] bg-white hover:bg-[#F1F3F7] transition-all duration-200 hover:shadow-lg"
              >
                <span>
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
                    className="lucide lucide-baby text-primaryLight flex-shrink-0"
                  >
                    <path d="M9 12h.01" />
                    <path d="M15 12h.01" />
                    <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
                    <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
                  </svg>
                </span>
                <span className="text-lg font-medium text-[#051E3C]">
                  Meu bebê nasceu em 2026
                </span>
              </button>

              <button
                onClick={() => handlePregnancy("outro")}
                className="w-full flex items-center gap-3 p-4 rounded-lg border-2 border-[#E0E2E9] bg-white hover:bg-[#F1F3F7] transition-all duration-200 hover:shadow-lg"
              >
                <span>
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
                    className="lucide lucide-clock text-gray-500 flex-shrink-0"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </span>
                <span className="text-lg font-medium text-[#051E3C]">
                  Tenho filho mas não nasceu em 2026
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP DATEBABY */}
      {screen === "stepbaby" && (
        <div className="bg-[#FAFBFC] max-w-[672px] h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9] w-full">
          {/* BARRA DE PROGRESSO */}
          <div className="w-full mb-6">
            <div className="h-2 bg-[#F1F3F7] rounded-full overflow-hidden">
              <div
                className="h-full bg-primaryLight transition-all duration-500 ease-out"
                style={{ width: "50%" }}
              />
            </div>
          </div>

          <div className="w-full smooth-pop">
            {/* TEXTO PROGRESSO */}
            <p className="text-sm text-gray-600 mb-2">Pergunta 2 de 4</p>

            {/* TÍTULO */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#051E3C] mb-8">
              Qual a data de nascimento do bebê?
            </h2>

            <div className="space-y-4">
              {/* INPUT DATE */}
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                </svg>

                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  max="2026-12-31"
                  className="w-[200px] pl-12 pr-4 py-4 text-[#051E3C] border-2 border-[#E0E2E9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#308CFF] focus:border-primaryLight transition-all bg-[#FAFBFC] max-w-[672px] h-fit"
                />
              </div>

              {dateError && (
                <p className="text-[#EF4444] font-light">
                  Por favor, insira a data de nascimento do bebê
                </p>
              )}

              {/* BOTÃO */}
              <button
                onClick={goSucessoBaby}
                className="w-full flex items-center justify-center gap-2 bg-primaryLight text-black font-semibold py-4 px-6 rounded-lg hover:shadow-lg hover:bg-primaryLight/90 transition-all duration-200"
              >
                Continuar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
        </div>
      )}

      {/* STEP 3 */}
      {screen === "step3" && (
        <div className="bg-[#FAFBFC] max-w-[672px] h-fit p-8 rounded-2xl w-full">
          <div className="w-full mb-6">
            <div className="h-2 bg-[#F1F3F7] rounded-full overflow-hidden">
              <div
                className="h-full bg-primaryLight transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <div className="smooth-pop">
            <p className="text-sm text-gray-600 mb-2">Pergunta 3 de 4</p>
            <h2 className="text-2xl font-bold mb-6">
              Qual o tempo de gestação?
            </h2>

            <div className="space-y-3">
              <button
                onClick={() => {
                  setPregnancyMonths(6);
                  navigate("/sucesso", { state: { months: 6, name: name } });
                }}
                className="w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:shadow-lg border-[#E0E2E9] bg-white hover:bg-[#F1F3F7]"
              >
                6 meses ou menos
              </button>

              <button
                onClick={() => {
                  setPregnancyMonths(7);
                  navigate("/sucesso", { state: { months: 7, name: name } });
                }}
                className="w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:shadow-lg border-[#E0E2E9] bg-white hover:bg-[#F1F3F7]"
              >
                7 meses
              </button>

              <button
                onClick={() => {
                  setPregnancyMonths(8);
                  navigate("/sucesso", { state: { months: 8, name: name } });
                }}
                className="w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:shadow-lg border-[#E0E2E9] bg-white hover:bg-[#F1F3F7]"
              >
                8 meses
              </button>

              <button
                onClick={() => {
                  setPregnancyMonths(9);
                  navigate("/sucesso", { state: { months: 9, name: name } });
                }}
                className="w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:shadow-lg border-[#E0E2E9] bg-white hover:bg-[#F1F3F7]"
              >
                9 meses
              </button>
            </div>
          </div>
        </div>
      )}

      {/* THANKS */}
      {screen === "thanks" && (
        <div className="bg-[#FAFBFC] max-w-[672px] h-fit rounded-2xl shadow-2xl p-6 md:p-10 border border-[#E0E2E9] w-full">
          <div className="w-full smooth-pop">
            {/* ÍCONE */}
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

            {/* TÍTULO */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#051E3C] mb-6 text-center">
              Obrigado pelo contato!
            </h2>

            {/* TEXTO */}
            <p className="text-[#051E3C] text-center mb-8 leading-relaxed">
              No momento, estamos atendendo somente gestantes ou mães com bebês
              nascidos em 2026 para auxiliar com o auxílio-maternidade. Mas
              fique à vontade para nos acompanhar nas redes sociais para outras
              novidades!
            </p>

            {/* BOTÃO */}
            <button
              onClick={restart}
              className="w-full bg-[#E0E2E9] text-[#051E3C] font-semibold py-4 px-6 rounded-lg hover:bg-gray-300 transition-all duration-200"
            >
              Voltar ao início
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
