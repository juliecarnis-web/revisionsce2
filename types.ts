
export type SubjectId = 'francais' | 'maths';

export type SubSubjectId = 
  | 'etude-langue' | 'vocabulaire' | 'orthographe' | 'lecture' | 'production'
  | 'numeration' | 'calcul' | 'mesure' | 'geometrie';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  hint: string;
}

export interface Series {
  id: number;
  title: string;
  type: 'cours' | 'application';
  questions: Question[];
}

export interface Chapter {
  id: string;
  title: string;
  subSubjectId: SubSubjectId;
  series: Series[];
}

export interface UserProgress {
  stars: number;
  chapters: {
    [chapterId: string]: {
      seriesCompleted: number; // 0 to 4
      scores: number[]; // Scores for each series
    }
  };
}

export interface UserProfile {
  id: string;
  name: string;
  pin: string;
  progress: UserProgress;
}

export interface AppState {
  profiles: UserProfile[];
  currentProfileId: string | null;
  view: 'landing' | 'subject-select' | 'sub-subject-select' | 'chapter-list' | 'exercise' | 'teacher-dashboard';
  currentSubject: SubjectId | null;
  currentSubSubject: SubSubjectId | null;
  currentChapterId: string | null;
  currentSeriesIdx: number | null;
}
