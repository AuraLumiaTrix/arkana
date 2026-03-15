'use client';

import { course } from '@/content/course-data';
import { DownloadCard } from '@/components/app/download-card';
import type { Download } from '@/types/course';

export default function DownloadsPage() {
  // Collect all downloads from all lessons
  const allDownloads: { download: Download; moduleName: string; lessonName: string }[] = [];
  for (const mod of course.modules) {
    for (const lesson of mod.lessons) {
      for (const dl of lesson.downloads) {
        allDownloads.push({
          download: dl,
          moduleName: mod.title,
          lessonName: lesson.title,
        });
      }
    }
  }

  // Group by module
  const grouped: Record<string, { download: Download; lessonName: string }[]> = {};
  for (const item of allDownloads) {
    if (!grouped[item.moduleName]) grouped[item.moduleName] = [];
    grouped[item.moduleName].push({ download: item.download, lessonName: item.lessonName });
  }

  return (
    <div className="pb-12 max-w-3xl mx-auto">
      <h1 className="font-heading text-3xl text-[#73605a] mb-2">Downloads</h1>
      <p className="text-sm text-[#7A6C60] font-body mb-8">
        Alle Workbooks, Journal-Vorlagen und Materialien an einem Ort.
      </p>

      {Object.keys(grouped).length === 0 && (
        <p className="text-sm text-[#7A6C60] font-body">
          Noch keine Downloads verfügbar.
        </p>
      )}

      <div className="space-y-8">
        {Object.entries(grouped).map(([moduleName, items]) => (
          <div key={moduleName}>
            <h2 className="font-heading text-xl text-[#73605a] mb-3">{moduleName}</h2>
            <div className="flex flex-col gap-2">
              {items.map(({ download }) => (
                <DownloadCard key={download.fileUrl} download={download} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
