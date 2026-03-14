import { course } from '@/content/course-data';
import { Badge } from '@/components/ui/badge';

export function ModulePreview() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-heading text-4xl md:text-5xl text-[#28201A] mb-4">
            Dein Kursinhalt
          </h2>
          <p className="text-base text-[#7A6C60] font-body max-w-xl mx-auto">
            {course.modules.filter((m) => !m.isBonus).length} Module und ein exklusives Bonusmodul –
            vollständig selbstgesteuert und immer zugänglich.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {course.modules.map((mod, i) => (
            <div
              key={mod.slug}
              className="group bg-white border border-[#DDD0B8] rounded-2xl p-6 hover:border-[#C8BAE6] hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#EBE2A2] flex items-center justify-center text-xs font-bold text-[#28201A] font-body">
                    {i + 1}
                  </span>
                  <h3 className="font-heading text-lg text-[#28201A] leading-tight">{mod.title}</h3>
                </div>
                {mod.isBonus && <Badge variant="bonus">Bonus ✨</Badge>}
              </div>
              <p className="text-sm text-[#7A6C60] font-body leading-relaxed mb-3">
                {mod.description}
              </p>
              <p className="text-xs text-[#7A6C60]/70 font-body">
                {mod.lessons.length} {mod.lessons.length === 1 ? 'Lektion' : 'Lektionen'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
