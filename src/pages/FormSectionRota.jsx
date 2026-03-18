import { useState } from "react";

const steps = [
  {
    question: "Você está grávida atualmente?",
    options: ["Sim", "Não"],
  },
  {
    question: "Você já teve filho recentemente?",
    options: ["Sim", "Não"],
  },
  {
    question: "Você trabalha ou já trabalhou?",
    options: ["Sim", "Não"],
  },
];

export default function AppForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
  });

  function handleAnswer(option) {
    const newAnswers = { ...answers, [step]: option };
    setAnswers(newAnswers);

    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setStep(step + 1); // vai pro formulário
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      answers,
      ...formData,
    };

    localStorage.setItem("lead_maternidade", JSON.stringify(data));

    alert("Dados enviados com sucesso!");
    setStep(step + 1);
  }

  const progress = (step / (steps.length + 1)) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center bg-primaryDark relative py-8 px-4">
      <div className="bg-secondary p-4 absolute top-0 w-full flex items-center justify-center">
        <img
          src="https://fernandesevieiraadvocacia.com.br/assets/logo-BJvYDxCC.webp"
          alt=""
          className="max-w-[107.34px]"
        />
      </div>
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
        {/* Barra de progresso */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Etapas */}
        {step < steps.length && (
          <div className="space-y-4 text-center">
            <h2 className="text-xl font-bold">{steps[step].question}</h2>

            {steps[step].options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {/* Formulário */}
        {step === steps.length && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-xl font-bold text-center">
              Você pode ter direito ao benefício!
            </h2>

            <input
              type="text"
              placeholder="Nome completo"
              required
              className="w-full border p-3 rounded-lg"
              onChange={(e) =>
                setFormData({ ...formData, nome: e.target.value })
              }
            />

            <input
              type="tel"
              placeholder="Telefone"
              required
              className="w-full border p-3 rounded-lg"
              onChange={(e) =>
                setFormData({ ...formData, telefone: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="E-mail"
              required
              className="w-full border p-3 rounded-lg"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
            >
              Ver resultado
            </button>
          </form>
        )}

        {/* Tela final */}
        {step > steps.length && (
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-green-600">
              ✔ Solicitação enviada!
            </h2>
            <p>Em breve entraremos em contato com você via WhatsAppForm.</p>
          </div>
        )}
      </div>
    </div>
  );
}
