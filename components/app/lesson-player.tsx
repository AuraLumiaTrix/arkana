interface LessonPlayerProps {
  mediaType: 'video' | 'audio' | 'text';
  mediaUrl?: string;
  title: string;
}

export function LessonPlayer({ mediaType, mediaUrl, title }: LessonPlayerProps) {
  if (!mediaUrl) {
    return (
      <div className="w-full aspect-video bg-gradient-to-br from-[#EDE8F5] to-[#DDD0B8] rounded-2xl flex items-center justify-center">
        <div className="text-center px-6">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">
            <span className="text-3xl">
              {mediaType === 'video' ? '🎬' : mediaType === 'audio' ? '🎧' : '📖'}
            </span>
          </div>
          <p className="text-sm text-[#7A6C60] font-body">
            {mediaType === 'video' ? 'Video' : mediaType === 'audio' ? 'Audio' : 'Text'} wird in Kürze verfügbar sein.
          </p>
        </div>
      </div>
    );
  }

  if (mediaType === 'audio') {
    return (
      <div className="w-full bg-gradient-to-br from-[#EDE8F5] to-[#F5EEE2] rounded-2xl p-8 border border-[#DDD0B8]">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-[#4A3272] flex items-center justify-center flex-shrink-0 shadow">
            <span className="text-2xl">🎧</span>
          </div>
          <div>
            <p className="text-xs text-[#7A6C60] font-body mb-1">Audio-Lektion</p>
            <p className="font-heading text-lg text-[#28201A]">{title}</p>
          </div>
        </div>
        <audio controls className="w-full" src={mediaUrl}>
          <track kind="captions" />
          Dein Browser unterstützt kein Audio-Element.
        </audio>
      </div>
    );
  }

  // Video — support iframe embeds (Vimeo, YouTube) and direct video
  const isEmbed = mediaUrl.includes('vimeo.com') || mediaUrl.includes('youtube.com') || mediaUrl.includes('youtu.be');

  if (isEmbed) {
    const src = getEmbedUrl(mediaUrl);
    return (
      <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-md">
        <iframe
          src={src}
          title={title}
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-md bg-black">
      <video controls className="w-full h-full" src={mediaUrl}>
        <track kind="captions" />
        Dein Browser unterstützt kein Video-Element.
      </video>
    </div>
  );
}

function getEmbedUrl(url: string): string {
  // Vimeo
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?h=0&autoplay=0`;

  // YouTube
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;

  return url;
}
