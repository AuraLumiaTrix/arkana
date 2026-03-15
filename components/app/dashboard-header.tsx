import { ProgressBar } from '@/components/ui/progress-bar';

interface DashboardHeaderProps {
  displayName?: string | null;
  totalProgress: number;
  completedLessons: number;
  totalLessons: number;
}

export function DashboardHeader({
  displayName,
  totalProgress,
  completedLessons,
  totalLessons,
}: DashboardHeaderProps) {
  const greeting = getGreeting();
  const name = displayName?.split(' ')[0] ?? 'du';

  return (
    <div className="bg-gradient-to-br from-[#EDE8F5] to-[#F5EEE2] rounded-3xl p-6 md:p-8 border border-[#DDD0B8]">
      <p className="text-sm text-[#7B60B4] font-body font-medium mb-1">{greeting}</p>
      <h1 className="font-heading text-3xl md:text-4xl text-[#73605a] mb-6">
        Willkommen zurück, {name} ✨
      </h1>
      <div className="space-y-2">
        <ProgressBar
          value={totalProgress}
          label={`${completedLessons} von ${totalLessons} Lektionen abgeschlossen`}
          showLabel
        />
        {totalProgress > 0 && totalProgress < 100 && (
          <p className="text-xs text-[#7A6C60] font-body">
            {getMilestoneMessage(totalProgress)}
          </p>
        )}
        {totalProgress === 100 && (
          <p className="text-xs text-[#4A3272] font-semibold font-body">
            🌟 Du hast den gesamten Kurs abgeschlossen – herzlichen Glückwunsch!
          </p>
        )}
      </div>
    </div>
  );
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 11) return 'Guten Morgen';
  if (hour < 17) return 'Guten Tag';
  return 'Guten Abend';
}

function getMilestoneMessage(progress: number) {
  if (progress < 25) return 'Du hast gerade erst begonnen – jeder Schritt zählt. 🌱';
  if (progress < 50) return 'Du bist auf einem guten Weg. Bleib dir treu. 🌸';
  if (progress < 75) return 'Mehr als die Hälfte geschafft – du machst das wunderbar. ⭐';
  return 'Fast am Ziel. Du hast so vieles bereits geleistet. 🌙';
}
