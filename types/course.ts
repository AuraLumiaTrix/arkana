export interface Download {
  title: string;
  fileUrl: string;
}

export interface Lesson {
  slug: string;
  title: string;
  intro: string;
  mediaType: 'video' | 'audio' | 'text';
  mediaUrl?: string;
  durationMinutes?: number;
  summary: string;
  reflectionQuestions: string[];
  downloads: Download[];
}

export interface Module {
  slug: string;
  title: string;
  description: string;
  isBonus: boolean;
  lessons: Lesson[];
}

export interface Course {
  title: string;
  slug: string;
  modules: Module[];
}
