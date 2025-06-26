import Card from "@/components/Card";
import Divider from "@/components/Divider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center sm:items-start">
      
      <section className="w-full max-w-7xl mx-auto py-40">
        <div className="flex gap-6">
          <div className="w-full">
            <p>¿Cómo?</p>
            <p>Mediante dos formatos complementarios:</p>
          </div>
          <Card
            title="Bootcamps"
            image="/images/rock-1.png"
            description="Entrenamientos para activar habilidades en torno a la negociación, la gestión patrimonial y la gobernanza. "
          />
          <Card
            title="Skill labs"
            image="/images/rock-1.png"
            description="Espacios para romper esquemas, desafiar perspectivas, provocar ideas y ganar herramientas."
          />
        </div>
      </section>

      <Divider 
        quote="[ Lo importante no es saber todo, sino desarrollar las herramientas para crecer en cada rol que elijamos habitar ]"
      />

      <section className="w-full max-w-7xl mx-auto py-40">
        <p>¿Qué van a encontrar?</p>
        <div className="flex gap-6">
          <Card
            title="Herramientas"
            image="/images/rock-1.png"
            description="Contenido personalizado, anclado en desafíos reales, para leer contextos y decidir cómo y cuándo involucrarse."
          />
          <Card
            title="Experiencias"
            image="/images/rock-1.png"
            description="Diseñadas por referentes para despertar miradas, preguntas y curiosidad que generen movimiento."
          />
          <Card
            title="Pertenencia"
            image="/images/rock-1.png"
            description="Espacios de aprendizaje compartidos para potenciar el equipo de primos y generar comunidad con pares."
          />
        </div>
      </section>

      <Divider 
        quote="[Cuando las ideas se cruzan con miradas distintas, el aprendizaje se vuelve real y aparece el valor]"
      />
    </main>
  );
}
