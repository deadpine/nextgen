'use client'

import { useState } from 'react'
import Tag from './Tag'

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
    <div className="w-full flex flex-col space-y-4 rounded-3xl p-6 bg-[#F2EEE1]">
      <p className='leading-none text-2xl'>
        Se viene más info.<br/> Mientras, definamos fechas:
      </p>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-5 flex flex-col grow">
          <label htmlFor="nombre" className="block mb-2 text-gray-900">
            Tu nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            className="w-full bg-cream-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300/50"
            placeholder="Nombre"
          />
        
          <label htmlFor="fechas" className="block mb-2 text-gray-900">
            ¿Qué fechas ya sabés que van a ser complicadas?
          </label>
          <textarea
            id="fechas"
            name="fechas"
            rows={5}
            required
            className="w-full grow bg-cream-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300/50"
            placeholder="Ej: del 10 al 20 de octubre"
          />

          <button
            type="submit"
            className="w-full bg-black cursor-pointer text-white font-medium px-6 py-2 rounded-lg hover:bg-gray-700 transition"
          >
            Enviar
          </button>
        </form>
      ) : (
        <div className='flex grow items-center justify-center py-12 md:py-0'>
          <Tag
            text="¡Gracias!"
            rotate="left"
          /> 
        </div>
      )}
    </div>
  )
}
