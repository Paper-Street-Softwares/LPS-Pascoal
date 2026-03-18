import { Instagram, Linkedin } from 'lucide-react'
import content from '../../../content/content'
import emailjs from 'emailjs-com'
import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  const sendToEmail = () => {
    setIsSubmitting(true)
    const validationErrors = {}

    if (!name) validationErrors.name = 'O campo Nome é obrigatório.'
    if (!phone) validationErrors.phone = 'O campo Telefone é obrigatório.'
    if (!email) validationErrors.email = 'O campo Email é obrigatório.'
    if (!message) validationErrors.message = 'O campo Mensagem é obrigatório.'

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setIsSubmitting(false)
      return
    }

    const templateParams = {
      name,
      phone,
      email,
      message,
    }

    emailjs
      .send(
        'service_dd91cs4', // substitua pelo seu Service ID
        'template_7l1ejkm', // substitua pelo seu Template ID
        templateParams,
        'bL24tpiXsEQJ9YhAB', // substitua pela sua Public Key
      )
      .then(
        () => {
          alert('Mensagem enviada por email com sucesso!')
          setIsSubmitting(false)
          // Limpar campos
          setName('')
          setPhone('')
          setEmail('')
          setMessage('')
          setErrors({})
        },
        (error) => {
          alert('Erro ao enviar email: ' + error.text)
          setIsSubmitting(false)
        },
      )
  }

  return (
    <section className="w-full text-white py-16 font-secondFont">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col desktop1:flex-row gap-12 items-center desktop1:items-start justify-between">
          {/* FORM */}
          <form className="space-y-6 w-full max-w-[500px]">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                {' '}
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full border font-mainFont italic border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-700"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    const value = e.target.value
                    setName(value.charAt(0).toUpperCase() + value.slice(1))
                  }}
                />
                {errors.name && (
                  <p className="text-red-500 mt-2">{errors.name}</p>
                )}
              </div>

              <div>
                {' '}
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border font-mainFont italic border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-700"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="text-red-500 mt-2">{errors.email}</p>
                )}
              </div>
            </div>
            <div>
              <input
                type="tel"
                placeholder="Telefone"
                className="w-full border border-gray-300 font-mainFont italic bg-white px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-700"
                id="phone"
                value={phone}
                onChange={(e) => {
                  let value = e.target.value

                  // Remove tudo que não seja número
                  value = value.replace(/\D/g, '')

                  // Limita a 11 dígitos (padrão celular brasileiro)
                  value = value.substring(0, 11)

                  // Aplica a formatação
                  if (value.length > 6) {
                    value = `(${value.substring(0, 2)}) ${value.substring(
                      2,
                      7,
                    )}-${value.substring(7)}`
                  } else if (value.length > 2) {
                    value = `(${value.substring(0, 2)}) ${value.substring(2)}`
                  } else if (value.length > 0) {
                    value = `(${value}`
                  }

                  setPhone(value)
                }}
              />
              {errors.phone && (
                <p className="text-red-500 mt-2">{errors.phone}</p>
              )}
            </div>

            <div>
              <textarea
                rows={5}
                placeholder="Digite sua mensagem aqui..."
                className="w-full resize-none font-mainFont border italic border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-700"
                id="message"
                value={message}
                onChange={(e) => {
                  const value = e.target.value
                  setMessage(value.charAt(0).toUpperCase() + value.slice(1))
                }}
              />
              {errors.message && (
                <p className="text-red-500 mt-2">{errors.message}</p>
              )}
            </div>

            <button
              type="button"
              className="w-full bg-[#4f6f52] py-4 font-semibold uppercase tracking-wide text-white transition hover:bg-[#3f5c42]"
              onClick={sendToEmail}
              disabled={isSubmitting}
            >
              Enviar
            </button>
          </form>

          {/* INFO */}
          {/* <div className="flex flex-col justify-start text-center desktop1:text-start space-y-3 text-sm desktop1:text-xl leading-relaxed text-gray-200">
            <p>
              {' '}
              <p>
                Av. Mendes Sá, 128, Sl. 202, Centro, <br />
                Rio de Janeiro - RJ, CEP: 20230-152
              </p>
            </p>

            <p>
              <span className="font-semibold">Email:</span>{' '}
              {content.texts.infos.emailSecundario}
            </p>

            <p>
              <span className="font-semibold">Tel:</span>{' '}
              {content.texts.infos.phone}
            </p>

            <div className="flex items-center m-auto desktop1:m-0 gap-4 pt-4">
              <a
                href={content.texts.links.instagram}
                aria-label="Instagram"
                className="transition hover:text-pink-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={22} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="transition hover:text-blue-500"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
