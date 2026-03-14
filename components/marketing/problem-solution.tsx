import { Heart, Wind, Zap } from 'lucide-react';

const problems = [
  {
    icon: Heart,
    title: 'Du fühlst dich festgesteckt',
    text: 'Manche Muster kehren immer wieder zurück – in Beziehungen, bei Geld, in der Arbeit. Als ob etwas Unsichtbares dich zurückhält.',
  },
  {
    icon: Wind,
    title: 'Du trägst Dinge, die nicht deine sind',
    text: 'Glaubenssätze, Ängste, Überzeugungen – viele davon wurden uns weitergegeben, ohne dass wir es gemerkt haben.',
  },
  {
    icon: Zap,
    title: 'Du weißt nicht, wo du anfangen sollst',
    text: 'Du spürst, dass sich etwas verändern muss – aber die Tiefe dieser Arbeit fühlt sich überwältigend an.',
  },
];

export function ProblemSolution() {
  return (
    <section className="py-24 px-6 bg-[#EDE8F5]">
      <div className="max-w-5xl mx-auto">
        {/* Problem */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-[#EBE2A2] mb-4">
            Erkennst du das?
          </h2>
          <p className="text-base text-[#7A6C60] font-body max-w-xl mx-auto">
            Du bist nicht allein. Viele Frauen tragen diese Schwere – ohne zu wissen, woher sie kommt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {problems.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-[#DDD0B8]">
              <div className="w-10 h-10 rounded-full bg-[#EDE8F5] flex items-center justify-center mb-4">
                <Icon size={20} className="text-[#7B60B4]" />
              </div>
              <h3 className="font-heading text-xl text-[#28201A] mb-2">{title}</h3>
              <p className="text-sm text-[#7A6C60] font-body leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* Solution */}
        <div className="bg-gradient-to-br from-[#4A3272] to-[#301850] rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="font-heading text-4xl md:text-5xl mb-6 text-white">
            Dieser Kurs ist dein geführter Weg ins Loslassen
          </h2>
          <p className="text-base md:text-lg leading-relaxed opacity-90 font-body max-w-2xl mx-auto mb-8">
            Mit Tarot als Spiegel deiner Seele, dem Konzept der Ahnenheilung und einer liebevollen
            Begleitung durch deine Glaubenssätze – machst du dich frei. In deinem Tempo.
            Ohne Druck. Aber mit Tiefe.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Sanft & tiefgehend', 'Selbststudium', 'Für Anfänger geeignet', 'Mit Workbooks'].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-white/20 text-white text-sm font-body px-4 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
