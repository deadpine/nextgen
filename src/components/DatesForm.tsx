'use client'

import { useState } from 'react'

export default function DatesForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    fetch('https://formsubmit.co/ajax/ckenny@puertoasis.com', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    })
      .then(response => {
        if (response.ok) {
          setSubmitted(true)
          form.reset()
        } else {
          alert('Hubo un problema al enviar el formulario.')
        }
      })
      .catch(() => alert('Hubo un error inesperado.'))
  }

  return (
    <div className="w-full space-y-4 rounded-3xl p-6 bg-[#F2EEE1]">
      <h4>Coordinemos fechas:</h4>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium text-sm text-gray-700">
              Tu nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Nombre"
            />
          </div>

          <div>
            <label htmlFor="description" className="block mb-1 font-medium text-sm text-gray-700">
              ¿Qué fechas ya sabés que van a ser complicadas? 
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              required
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Ej: del 10 al 20 de octubre"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white font-medium px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Enviar
          </button>
        </form>
      ) : (
        <p className="text-green-700 text-lg font-medium">
          ¡Gracias!
        </p>
      )}
    </div>
  )
}
