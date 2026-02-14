
import React, { useState, useEffect, useMemo } from 'react';
import { 
  AppState, UserProfile, SubjectId, SubSubjectId, Chapter, Series, Question, UserProgress 
} from './types';
import { 
  SUBJECT_HIERARCHY, COLORS, TEACHER_PASSWORD, POSITIVE_FEEDBACKS 
} from './constants';
import { INITIAL_CHAPTERS } from './data';

const STORAGE_KEY = 'ce2_revision_app_data';

// --- COMPOSANTS DE L'INTERFACE ---

const SecurityOverlay = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  placeholder 
}: { 
  isOpen: boolean, 
  onClose: () => void, 
  onConfirm: (val: string) => void,
  title: string,
  placeholder: string
}) => {
  const [value, setValue] = useState('');
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-blue-900/40 backdrop-blur-md animate-pop text-center">
      <div className="bg-white w-full max-w-sm rounded-[3rem] p-10 shadow-2xl border-4 border-blue-100">
        <h3 className="text-2xl font-black text-gray-800 mb-6">{title}</h3>
        <input 
          autoFocus
          type="password"
          placeholder={placeholder}
          className="w-full p-5 bg-gray-50 border-4 border-transparent focus:border-blue-400 focus:bg-white rounded-[1.5rem] outline-none transition-all font-black text-2xl text-center tracking-widest mb-6"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && onConfirm(value)}
        />
        <div className="flex gap-4">
          <button 
            onClick={onClose}
            className="flex-1 py-4 bg-gray-100 text-gray-500 rounded-[1.2rem] font-black hover:bg-gray-200 transition-all active:scale-95"
          >
            ANNULER
          </button>
          <button 
            onClick={() => onConfirm(value)}
            className="flex-1 py-4 bg-blue-600 text-white rounded-[1.2rem] font-black shadow-lg hover:bg-blue-700 transition-all active:scale-95"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

const ConfirmModal = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message 
}: { 
  isOpen: boolean, 
  onClose: () => void, 
  onConfirm: () => void,
  title: string,
  message: string
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-red-900/20 backdrop-blur-sm animate-pop text-center">
      <div className="bg-white w-full max-w-sm rounded-[3rem] p-10 shadow-2xl border-4 border-red-50">
        <h3 className="text-2xl font-black text-gray-800 mb-2 tracking-tighter">{title}</h3>
        <p className="text-gray-500 font-medium mb-8 leading-tight italic">{message}</p>
        <div className="flex flex-col gap-3">
          <button 
            onClick={onConfirm}
            className="w-full py-5 bg-red-600 text-white rounded-[1.5rem] font-black text-lg shadow-xl hover:bg-red-700 transition-all active:scale-95"
          >
            OUI, QUITTER
          </button>
          <button 
            onClick={onClose}
            className="w-full py-4 bg-gray-100 text-gray-400 rounded-[1.5rem] font-black hover:bg-gray-200 transition-all active:scale-95"
          >
            NON, RESTER
          </button>
        </div>
      </div>
    </div>
  );
};

const Header = ({ 
  activeProfile, 
  setView, 
  onLogoutRequest, 
  onOpenTeacherAuth 
}: { 
  activeProfile?: UserProfile, 
  setView: (v: AppState['view']) => void, 
  onLogoutRequest: () => void,
  onOpenTeacherAuth: () => void
}) => (
  <div className="flex justify-between items-center bg-white p-4 shadow-sm mb-6 rounded-2xl border border-gray-100 w-full">
    <div className="flex items-center gap-3">
      {activeProfile && (
        <button 
          onClick={() => setView('subject-select')}
          className="bg-gray-100 p-3 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all active:scale-90 text-xl"
        >
          🏠
        </button>
      )}
      <h1 className="text-xl font-black text-gray-800 hidden sm:block tracking-tighter">CE2 Révisions</h1>
    </div>
    
    <div className="flex items-center gap-2 sm:gap-4">
      {activeProfile && (
        <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1.5 rounded-xl border border-yellow-200">
          <span className="text-lg">⭐</span>
          <span className="font-black text-yellow-700">{activeProfile.progress.stars}</span>
          <span className="mx-1 text-gray-300">|</span>
          <span className="font-bold text-gray-600 truncate max-w-[80px] sm:max-w-none">{activeProfile.name}</span>
        </div>
      )}
      
      {activeProfile && (
        <button 
          onClick={onLogoutRequest}
          className="bg-red-50 text-red-600 p-3 rounded-xl hover:bg-red-100 transition-all active:scale-90 text-xl"
          title="Se déconnecter"
        >
          🚪
        </button>
      )}

      <button 
        onClick={onOpenTeacherAuth}
        className="ml-2 p-3 text-xl bg-gray-50 rounded-xl text-gray-300 hover:text-gray-500 hover:bg-gray-100 transition-all active:scale-90"
      >
        ⚙️
      </button>
    </div>
  </div>
);

const LandingView = ({ 
  profiles, 
  onAddPlayer,
  onSelectProfile,
  onOpenTeacherAuth 
}: { 
  profiles: UserProfile[], 
  onAddPlayer: (n: string, p: string) => void, 
  onSelectProfile: (p: UserProfile) => void,
  onOpenTeacherAuth: () => void
}) => {
  const [name, setName] = useState('');
  const [pin, setPin] = useState('');

  return (
    <div className="flex flex-col items-center w-full animate-pop">
      <div className="max-w-md w-full p-8 bg-white rounded-[3rem] shadow-xl text-center relative border border-gray-50">
        <div className="relative inline-block mb-6">
          <img 
            src="https://lh3.googleusercontent.com/sitesv/APaQ0SQfRdE2kqswpsldPCIJsY8O2ngx6ab3w5T6mImfzk4HZQDKRO2SW444t7FYuQPczujR92pll-X5oTbVTce3GQ37gHFK4kHK0rCkplNKjDT9NXo9vTVikYYTGHYCY3PynGW3MuumBdnN1NkWB2uKG2595tA3EXcGRE3PUq-1FvKOcw-Pd0WJsZ2DYJMYE-niXSmM1gUJcWDFyOSgwVCa9JvAJttL80pxmtjY_vU=w1280" 
            className="mx-auto rounded-full border-8 border-blue-50 shadow-md w-40 h-40 object-cover" 
            alt="Mascotte CE2" 
          />
          <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg border-4 border-white">🎓</div>
        </div>
        
        <h2 className="text-4xl font-black text-blue-600 mb-2 tracking-tighter">Je révise le CE2</h2>
        <p className="text-gray-400 mb-10 font-medium italic">Ta classe t'attend !</p>

        {profiles.length > 0 && (
          <div className="mb-10 text-left">
            <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4 px-2">Choisis ton profil</h3>
            <div className="grid grid-cols-2 gap-4">
              {profiles.map(p => (
                <button
                  key={p.id}
                  onClick={() => onSelectProfile(p)}
                  className="bg-blue-50 hover:bg-blue-600 hover:text-white p-5 rounded-3xl border-2 border-blue-100 font-black text-blue-700 transition-all transform hover:scale-105 shadow-sm active:scale-95 text-lg"
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="border-t-2 border-gray-50 pt-10 mt-6 text-left">
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6 px-2">Nouveau Joueur</h3>
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Ton Prénom" 
              className="w-full p-5 bg-gray-50 border-4 border-transparent focus:border-blue-400 focus:bg-white rounded-[1.5rem] outline-none transition-all font-bold text-lg"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Code secret" 
              className="w-full p-5 bg-gray-50 border-4 border-transparent focus:border-blue-400 focus:bg-white rounded-[1.5rem] outline-none transition-all font-bold text-lg text-center tracking-widest"
              value={pin}
              onChange={e => setPin(e.target.value)}
            />
            <button 
              disabled={!name || !pin}
              onClick={() => onAddPlayer(name, pin)}
              className="w-full bg-blue-600 text-white py-5 rounded-[1.5rem] font-black text-xl shadow-lg hover:bg-blue-700 disabled:opacity-30 transition-all transform active:scale-95 mt-4"
            >
              C'est parti !
            </button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={onOpenTeacherAuth}
        className="mt-12 px-6 py-4 bg-white/50 hover:bg-white rounded-2xl text-gray-400 hover:text-gray-600 font-black tracking-widest uppercase text-xs transition-all shadow-sm border border-transparent hover:border-gray-200 active:scale-95"
      >
        ⚙️ Accès Enseignant
      </button>
    </div>
  );
};

// --- COMPOSANT PRINCIPAL ---

const App: React.FC = () => {
  const [profiles, setProfiles] = useState<UserProfile[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [currentProfileId, setCurrentProfileId] = useState<string | null>(null);
  const [view, setView] = useState<AppState['view']>('landing');
  const [currentSubject, setCurrentSubject] = useState<SubjectId | null>(null);
  const [currentSubSubject, setCurrentSubSubject] = useState<SubSubjectId | null>(null);
  const [currentChapterId, setCurrentChapterId] = useState<string | null>(null);
  const [currentSeriesIdx, setCurrentSeriesIdx] = useState<number | null>(null);

  // États pour les Modals
  const [securityModal, setSecurityModal] = useState<{
    isOpen: boolean;
    type: 'teacher' | 'student';
    targetId?: string;
    targetName?: string;
  }>({ isOpen: false, type: 'teacher' });

  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
  }>({ isOpen: false, title: '', message: '', onConfirm: () => {} });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profiles));
  }, [profiles]);

  const activeProfile = profiles.find(p => p.id === currentProfileId);

  const handleAuthConfirm = (val: string) => {
    if (securityModal.type === 'teacher') {
      if (val === TEACHER_PASSWORD) {
        setSecurityModal({ isOpen: false, type: 'teacher' });
        setView('teacher-dashboard');
      } else {
        alert("Code incorrect.");
      }
    } else if (securityModal.type === 'student' && securityModal.targetId) {
      const p = profiles.find(prof => prof.id === securityModal.targetId);
      if (p && val === p.pin) {
        setCurrentProfileId(p.id);
        setSecurityModal({ isOpen: false, type: 'teacher' });
        setView('subject-select');
      } else {
        alert("Code secret incorrect.");
      }
    }
  };

  const executeLogout = () => {
    setCurrentProfileId(null);
    setCurrentSubject(null);
    setCurrentSubSubject(null);
    setCurrentChapterId(null);
    setCurrentSeriesIdx(null);
    setView('landing');
    setConfirmModal({ ...confirmModal, isOpen: false });
  };

  const handleLogoutRequest = () => {
    setConfirmModal({
      isOpen: true,
      title: "Changer d'élève ?",
      message: "Veux-tu vraiment quitter ta session en cours ?",
      onConfirm: executeLogout
    });
  };

  const updateProgress = (chapterId: string, seriesIdx: number, score: number) => {
    if (!currentProfileId) return;
    setProfiles(prev => prev.map(p => {
      if (p.id !== currentProfileId) return p;
      const chapterProgress = p.progress.chapters[chapterId] || { seriesCompleted: 0, scores: [] };
      const newScores = [...chapterProgress.scores];
      newScores[seriesIdx] = Math.max(newScores[seriesIdx] || 0, score);
      let newSeriesCompleted = chapterProgress.seriesCompleted;
      if (score >= 4 && seriesIdx === chapterProgress.seriesCompleted) {
        newSeriesCompleted = Math.min(4, seriesIdx + 1);
      }
      const starGain = score >= 4 ? (score === 5 ? 3 : 1) : 0;
      return {
        ...p,
        progress: {
          ...p.progress,
          stars: p.progress.stars + starGain,
          chapters: { ...p.progress.chapters, [chapterId]: { seriesCompleted: newSeriesCompleted, scores: newScores } }
        }
      };
    }));
  };

  const recommended = useMemo(() => {
    if (!activeProfile) return null;
    let worstScore = 1;
    let worstChapter: Chapter | null = null;
    INITIAL_CHAPTERS.forEach(c => {
      const prog = activeProfile.progress.chapters[c.id];
      if (prog && prog.scores.length > 0) {
        const avg = prog.scores.reduce((a, b) => a + (b || 0), 0) / (prog.scores.length * 5);
        if (avg < worstScore) {
          worstScore = avg;
          worstChapter = c;
        }
      }
    });
    return worstChapter;
  }, [activeProfile]);

  return (
    <div className="min-h-screen p-4 sm:p-12 max-w-6xl mx-auto flex flex-col items-center w-full">
      <SecurityOverlay 
        isOpen={securityModal.isOpen}
        title={securityModal.type === 'teacher' ? "Code Enseignant" : `Code de ${securityModal.targetName}`}
        placeholder="****"
        onClose={() => setSecurityModal({ ...securityModal, isOpen: false })}
        onConfirm={handleAuthConfirm}
      />

      <ConfirmModal 
        isOpen={confirmModal.isOpen}
        title={confirmModal.title}
        message={confirmModal.message}
        onConfirm={confirmModal.onConfirm}
        onClose={() => setConfirmModal({ ...confirmModal, isOpen: false })}
      />

      <div className="w-full flex flex-col items-center">
        {view === 'landing' ? (
          <LandingView 
            profiles={profiles} 
            onAddPlayer={(name, pin) => {
              const newP = { id: Date.now().toString(), name, pin, progress: { stars: 0, chapters: {} } };
              setProfiles([...profiles, newP]);
              setCurrentProfileId(newP.id);
              setView('subject-select');
            }}
            onSelectProfile={(p) => setSecurityModal({ isOpen: true, type: 'student', targetId: p.id, targetName: p.name })}
            onOpenTeacherAuth={() => setSecurityModal({ isOpen: true, type: 'teacher' })}
          />
        ) : (
          <>
            <Header 
              activeProfile={activeProfile} 
              setView={setView} 
              onLogoutRequest={handleLogoutRequest} 
              onOpenTeacherAuth={() => setSecurityModal({ isOpen: true, type: 'teacher' })} 
            />
            
            {view === 'subject-select' && (
              <div className="animate-pop w-full">
                {recommended && (
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-4 border-white p-6 rounded-[2rem] mb-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm">💡</div>
                      <div>
                        <p className="text-orange-900 font-black text-lg">Un petit rappel ?</p>
                        <p className="text-orange-700 font-medium">Révisons ensemble : <strong>{recommended.title}</strong></p>
                      </div>
                    </div>
                    <button 
                      onClick={() => {
                        setCurrentChapterId(recommended.id);
                        setCurrentSubject(recommended.subSubjectId.startsWith('etude') || recommended.subSubjectId.startsWith('voca') || recommended.subSubjectId.startsWith('ortho') || recommended.subSubjectId.startsWith('lect') || recommended.subSubjectId.startsWith('prod') ? 'francais' : 'maths');
                        setCurrentSubSubject(recommended.subSubjectId);
                        setView('chapter-list');
                      }}
                      className="bg-orange-500 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-orange-600 shadow-xl transition-all transform hover:scale-105 active:scale-95 w-full sm:w-auto"
                    >
                      C'est parti !
                    </button>
                  </div>
                )}
                <h2 className="text-3xl font-black text-gray-800 mb-10 text-center tracking-tighter uppercase">Quelle matière choisis-tu ?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {(Object.entries(SUBJECT_HIERARCHY) as [SubjectId, any][]).map(([id, data]) => (
                    <button
                      key={id}
                      onClick={() => { setCurrentSubject(id); setView('sub-subject-select'); }}
                      className={`${data.color} min-h-[250px] rounded-[3rem] shadow-2xl flex flex-col items-center justify-center gap-6 text-white transform transition-all hover:scale-[1.03] active:scale-95 border-8 border-white/10`}
                    >
                      <div className="p-2 bg-white rounded-[2rem] shadow-inner">
                        <img src={data.icon} className="rounded-[1.5rem] shadow-sm w-32 h-32 object-cover" alt={data.label} />
                      </div>
                      <span className="text-5xl font-black uppercase tracking-tighter">{data.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {view === 'sub-subject-select' && currentSubject && (
              <div className="animate-pop w-full">
                <div className="flex items-center gap-5 mb-10">
                  <button onClick={() => setView('subject-select')} className="bg-white p-3 rounded-2xl shadow-sm text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all active:scale-90 font-black">←</button>
                  <h2 className="text-4xl font-black text-gray-800 tracking-tighter uppercase">{SUBJECT_HIERARCHY[currentSubject].label}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {SUBJECT_HIERARCHY[currentSubject].subSubjects.map(sub => (
                    <button
                      key={sub.id}
                      onClick={() => { setCurrentSubSubject(sub.id as SubSubjectId); setView('chapter-list'); }}
                      className={`${COLORS[sub.id]} min-h-[160px] rounded-[2.5rem] shadow-xl p-6 flex items-center gap-6 text-white transform transition-all hover:scale-105 active:scale-95 border-4 border-white/10`}
                    >
                      <div className="bg-white p-1 rounded-2xl shadow-sm shrink-0">
                        <img src={sub.icon} className="rounded-xl w-20 h-20 object-cover" alt={sub.label} />
                      </div>
                      <span className="text-2xl font-black leading-tight text-left tracking-tight">{sub.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {view === 'chapter-list' && currentSubSubject && (
              <div className="animate-pop w-full">
                <div className="flex items-center gap-5 mb-10">
                  <button onClick={() => setView('sub-subject-select')} className="bg-white p-3 rounded-2xl shadow-sm text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all active:scale-90">←</button>
                  <h2 className="text-3xl font-black text-gray-800 tracking-tighter uppercase">{SUBJECT_HIERARCHY[currentSubject!]?.subSubjects.find(s => s.id === currentSubSubject)?.label}</h2>
                </div>
                <div className="space-y-8">
                  {INITIAL_CHAPTERS.filter(c => c.subSubjectId === currentSubSubject).map(chapter => {
                    const prog = activeProfile?.progress.chapters[chapter.id] || { seriesCompleted: 0, scores: [] };
                    const mnesiqueRate = Math.round((prog.seriesCompleted / 4) * 100);
                    return (
                      <div key={chapter.id} className="bg-white p-8 rounded-[3rem] shadow-sm border-2 border-gray-50 flex flex-col md:flex-row gap-10 items-center transition-all hover:shadow-xl">
                        <div className="flex-1 w-full text-center md:text-left">
                          <h3 className="text-3xl font-black text-gray-800 mb-8 tracking-tight">{chapter.title}</h3>
                          <div className="flex flex-wrap gap-5 justify-center md:justify-start">
                            {chapter.series.map((s, idx) => {
                              const isUnlocked = idx <= prog.seriesCompleted;
                              const score = prog.scores[idx] || 0;
                              return (
                                <button
                                  key={s.id}
                                  disabled={!isUnlocked}
                                  onClick={() => { setCurrentChapterId(chapter.id); setCurrentSeriesIdx(idx); setView('exercise'); }}
                                  className={`relative w-20 h-20 rounded-[1.5rem] flex flex-col items-center justify-center transition-all transform ${isUnlocked ? 'bg-blue-600 text-white shadow-xl hover:bg-blue-700 hover:-translate-y-2 active:scale-90' : 'bg-gray-100 text-gray-300 cursor-not-allowed opacity-40'}`}
                                >
                                  <span className="text-2xl font-black">{idx + 1}</span>
                                  {score > 0 && <div className="absolute -top-3 -right-3 bg-yellow-400 text-yellow-900 text-xs font-black px-2.5 py-1 rounded-full shadow-md border-4 border-white">{score}/5</div>}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                        <div className="w-full md:w-80 bg-blue-50/50 p-8 rounded-[2.5rem] border-2 border-white">
                          <div className="flex justify-between items-end mb-4">
                            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">Force Mémoire</span>
                            <span className="text-4xl font-black text-blue-600">{mnesiqueRate}%</span>
                          </div>
                          <div className="h-6 bg-white rounded-full overflow-hidden border-2 border-blue-100 shadow-inner p-1">
                            <div className="h-full bg-blue-500 transition-all duration-1000 ease-out rounded-full shadow-lg" style={{ width: `${mnesiqueRate}%` }} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {view === 'exercise' && currentChapterId && currentSeriesIdx !== null && (
              <ExerciseView 
                chapter={INITIAL_CHAPTERS.find(c => c.id === currentChapterId)!}
                seriesIdx={currentSeriesIdx}
                onFinish={(score) => {
                  updateProgress(currentChapterId, currentSeriesIdx, score);
                  setView('chapter-list');
                }}
              />
            )}

            {view === 'teacher-dashboard' && (
              <TeacherDashboard 
                profiles={profiles} 
                onClose={() => setView('landing')} 
                onResetRequest={() => {
                  setConfirmModal({
                    isOpen: true,
                    title: "Tout effacer ?",
                    message: "Cette action videra toute la classe définitivement.",
                    onConfirm: () => {
                      setProfiles([]);
                      setCurrentProfileId(null);
                      setView('landing');
                      setConfirmModal({ ...confirmModal, isOpen: false });
                    }
                  });
                }} 
              />
            )}
          </>
        )}
      </div>
      <footer className="mt-16 text-center">
        <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.5em] opacity-50 italic">Je révise, je mémorise • CE2 • 2024</p>
      </footer>
    </div>
  );
};

// --- AUTRES COMPOSANTS DE VUE ---

const ExerciseView = ({ chapter, seriesIdx, onFinish }: { chapter: Chapter, seriesIdx: number, onFinish: (s: number) => void }) => {
  const series = chapter.series[seriesIdx];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [isDone, setIsDone] = useState(false);
  const [randomFeedback, setRandomFeedback] = useState("");

  const question = series.questions[currentIdx];

  const handleAnswer = (idx: number) => {
    if (feedback) return;
    if (idx === question.correctIndex) {
      setScore(s => s + 1);
      setRandomFeedback(POSITIVE_FEEDBACKS[Math.floor(Math.random() * POSITIVE_FEEDBACKS.length)]);
      setFeedback('correct');
    } else {
      setFeedback('wrong');
    }
    setTimeout(() => {
      if (currentIdx < 4) {
        setCurrentIdx(prev => prev + 1);
        setFeedback(null);
      } else {
        setIsDone(true);
      }
    }, 2500);
  };

  if (isDone) {
    const success = score >= 4;
    return (
      <div className="max-w-2xl mx-auto p-12 bg-white rounded-[4rem] shadow-2xl text-center animate-pop mt-10 border-8 border-gray-50 w-full">
        <h2 className="text-6xl font-black mb-6 text-gray-800 tracking-tighter uppercase">{success ? "Victoire !" : "Presque !"}</h2>
        <div className="text-[10rem] mb-8 animate-bounce leading-none">{success ? "🏆" : "💪"}</div>
        <p className="text-7xl font-black text-blue-600 mb-10">{score} <span className="text-2xl text-gray-200">/ 5</span></p>
        <button onClick={() => onFinish(score)} className="w-full sm:w-auto bg-blue-600 text-white px-16 py-7 rounded-[2.5rem] font-black text-2xl hover:bg-blue-700 shadow-2xl transition-all active:scale-95">RETOURNER AU MENU</button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto animate-pop w-full">
      <div className="mb-8 flex justify-between items-center bg-white p-6 rounded-[2.5rem] shadow-sm border-2 border-gray-50">
        <div>
          <h3 className="text-gray-400 text-[11px] font-black uppercase tracking-[0.3em] mb-1">{series.type === 'cours' ? '🧠 DÉCOUVERTE' : '✍️ APPLICATION'}</h3>
          <h2 className="text-3xl font-black text-gray-800 tracking-tight">{series.title}</h2>
        </div>
        <div className="bg-blue-600 p-5 rounded-3xl text-center min-w-[100px] shadow-lg">
          <div className="text-3xl font-black text-white">{currentIdx + 1}<span className="text-lg text-blue-300">/5</span></div>
        </div>
      </div>
      <div className="bg-white p-12 rounded-[4rem] shadow-2xl relative overflow-hidden border-2 border-gray-50">
        <div className="absolute top-0 left-0 w-full h-4 bg-gray-50">
          <div className="h-full bg-blue-500 transition-all duration-700 ease-out rounded-r-full shadow-sm" style={{ width: `${(currentIdx / 5) * 100}%` }} />
        </div>
        <h3 className="text-4xl font-black text-gray-800 text-center leading-tight py-4">{question.text}</h3>
        <div className="grid grid-cols-1 gap-6 mt-12">
          {question.options.map((opt, idx) => (
            <button
              key={idx}
              disabled={!!feedback}
              onClick={() => handleAnswer(idx)}
              className={`p-8 text-left rounded-[2.5rem] border-4 font-black text-2xl transition-all transform active:scale-95 ${feedback === null ? 'border-gray-50 bg-gray-50/50 hover:border-blue-500 hover:bg-blue-50 text-gray-700' : (feedback === 'correct' && idx === question.correctIndex ? 'bg-green-500 border-green-500 text-white scale-[1.03] shadow-2xl' : (feedback === 'wrong' && idx === question.correctIndex ? 'bg-green-100 border-green-400 text-green-800' : 'opacity-30 grayscale blur-[1px]'))}`}
            >
              <div className="flex items-center gap-6">
                <span className={`w-14 h-14 flex items-center justify-center rounded-2xl text-xl font-black ${feedback === 'correct' && idx === question.correctIndex ? 'bg-white/30' : 'bg-white shadow-inner text-blue-400'}`}>
                  {String.fromCharCode(65 + idx)}
                </span>
                {opt}
              </div>
            </button>
          ))}
        </div>
        <div className={`mt-12 min-h-[140px] transition-all duration-400 ${feedback ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {feedback === 'correct' && <div className="text-green-500 font-black text-5xl text-center animate-pulse">🌟 {randomFeedback} 🌟</div>}
          {feedback === 'wrong' && (
            <div className="bg-orange-50 p-10 rounded-[3rem] border-4 border-orange-100 w-full shadow-inner border-dashed">
              <p className="text-orange-900 font-black text-2xl mb-4">💡 INDICE :</p>
              <p className="text-orange-700 font-bold italic text-xl leading-relaxed">{question.hint}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TeacherDashboard = ({ profiles, onClose, onResetRequest }: { profiles: UserProfile[], onClose: () => void, onResetRequest: () => void }) => (
  <div className="animate-pop bg-white p-12 rounded-[4rem] shadow-2xl border-2 border-gray-50 w-full">
    <div className="flex flex-col sm:flex-row justify-between items-center mb-16 gap-8">
      <h2 className="text-5xl font-black text-gray-800 tracking-tighter uppercase">Espace Enseignant</h2>
      <button onClick={onClose} className="bg-gray-100 hover:bg-gray-200 px-10 py-4 rounded-[1.5rem] font-black text-gray-600 transition-all border-b-4 border-gray-200 uppercase active:scale-95">Quitter</button>
    </div>
    <div className="overflow-x-auto mb-16 rounded-[2.5rem] border-4 border-gray-50 shadow-inner bg-gray-50/30">
      <table className="w-full text-left border-collapse">
        <thead className="bg-white text-gray-400 uppercase text-[11px] font-black tracking-[0.3em]">
          <tr>
            <th className="py-8 px-10">Élève</th>
            <th className="py-8 px-10">Étoiles</th>
            <th className="py-8 px-10">Chapitres</th>
            <th className="py-8 px-10 text-right">Réussite</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-gray-50">
          {profiles.map(p => {
            const count = Object.keys(p.progress.chapters).length;
            return (
              <tr key={p.id} className="hover:bg-white transition-all">
                <td className="py-8 px-10 font-black text-gray-800 text-2xl">{p.name}</td>
                <td className="py-8 px-10 font-black text-yellow-600">⭐ {p.progress.stars}</td>
                <td className="py-8 px-10 font-bold text-gray-400 text-lg">{count} / 10</td>
                <td className="py-8 px-10 text-right font-black text-green-500">{Math.round(Math.min(100, (count / 10) * 100))}%</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    <div className="bg-red-50 p-12 rounded-[3rem] border-4 border-red-100/50 text-center">
      <h3 className="text-red-800 font-black text-3xl mb-3 tracking-tighter uppercase">Danger : Fin d'année</h3>
      <p className="text-red-600 font-bold text-lg mb-8 italic">Cette action effacera tous les scores de la classe.</p>
      <button onClick={onResetRequest} className="bg-red-600 text-white px-12 py-6 rounded-[2rem] font-black text-2xl hover:bg-red-700 transition-all shadow-2xl border-b-8 border-red-800 uppercase active:scale-95">Vider la classe</button>
    </div>
  </div>
);

export default App;
