interface ReflectionBoxProps {
  questions: string[];
}

export function ReflectionBox({ questions }: ReflectionBoxProps) {
  if (questions.length === 0) return null;
  return (
    <div className="bg-[#EDE8F5] border border-[#C8BAE6]/40 rounded-2xl p-6">
      <p className="text-xs font-semibold text-[#4A3272] uppercase tracking-widest font-body mb-4">
        🌿 Reflexionsfragen
      </p>
      <ul className="flex flex-col gap-3">
        {questions.map((q, i) => (
          <li key={i} className="flex gap-3">
            <span className="w-5 h-5 rounded-full bg-[#C8BAE6]/30 text-[#4A3272] flex items-center justify-center text-xs font-bold font-body flex-shrink-0 mt-0.5">
              {i + 1}
            </span>
            <p className="text-sm text-[#28201A] font-body leading-relaxed">{q}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
