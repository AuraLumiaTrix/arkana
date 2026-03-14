import { FileDown } from 'lucide-react';
import type { Download } from '@/types/course';

interface DownloadCardProps {
  download: Download;
}

export function DownloadCard({ download }: DownloadCardProps) {
  return (
    <a
      href={download.fileUrl}
      download
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 px-5 py-4 bg-white border border-[#DDD0B8] rounded-xl hover:border-[#C8BAE6] hover:bg-[#EDE8F5] transition-all duration-150 group"
    >
      <div className="w-10 h-10 rounded-full bg-[#EBE2A2] flex items-center justify-center flex-shrink-0">
        <FileDown size={18} className="text-[#7A6020]" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[#28201A] font-body group-hover:text-[#4A3272] transition-colors truncate">
          {download.title}
        </p>
        <p className="text-xs text-[#7A6C60] font-body">PDF herunterladen</p>
      </div>
      <FileDown size={16} className="text-[#7A6C60] group-hover:text-[#4A3272] flex-shrink-0 transition-colors" />
    </a>
  );
}

interface DownloadListProps {
  downloads: Download[];
  title?: string;
}

export function DownloadList({ downloads, title = 'Downloads' }: DownloadListProps) {
  if (downloads.length === 0) return null;
  return (
    <div>
      <p className="text-xs font-semibold text-[#7A6C60] uppercase tracking-widest font-body mb-3">
        📎 {title}
      </p>
      <div className="flex flex-col gap-2">
        {downloads.map((d) => (
          <DownloadCard key={d.fileUrl} download={d} />
        ))}
      </div>
    </div>
  );
}
