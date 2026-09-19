import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  ChevronRight,
  Headphones,
  Languages,
  Menu,
  Pencil,
  Search,
  Sparkles,
  Target,
  X,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

type Lesson = {
  name: string;
  jp: string;
  count: string;
  tone: string;
  icon: React.ReactNode;
};

const lessons: Lesson[] = [
  { name: "Hiragana", jp: "ひらがな", count: "12 / 46", tone: "rose", icon: <span className="kana-icon">あ</span> },
  { name: "Katakana", jp: "カタカナ", count: "0 / 46", tone: "sun", icon: <span className="kana-icon">ア</span> },
  { name: "Kanji", jp: "漢字", count: "0 / 100", tone: "sky", icon: <span className="kana-icon kanji">漢</span> },
  { name: "Vocabulary", jp: "単語", count: "0 / 200", tone: "mint", icon: <BookOpen size={23} strokeWidth={1.7} /> },
  { name: "Grammar", jp: "文法", count: "0 / 80", tone: "lavender", icon: <span className="bubble-icon">•••</span> },
];

const practice = [
  { title: "Flashcards", description: "Study with spaced repetition.", tone: "rose", icon: <Languages size={22} /> },
  { title: "Exercises", description: "Build your skills step by step.", tone: "sun", icon: <Pencil size={22} /> },
  { title: "Quizzes", description: "Test what you know.", tone: "sky", icon: <Target size={22} /> },
  { title: "Listening", description: "Improve your ear for Japanese.", tone: "mint", icon: <Headphones size={22} /> },
];

const navItems = ["Home", "Courses", "Practice", "Progress"];

function DoodleScene() {
  return (
    <div className="doodle-scene" aria-hidden="true">
      <div className="brush-stroke">コトベ<span>KOTOBE</span></div>
      <div className="japanese-note note-one">一歩ずつ、<br />もっと話せる<br />自分へ。</div>
      <div className="flower flower-one">✽</div>
      <div className="flower flower-two">✿</div>
      <div className="flower flower-three">✽</div>
      <img className="pagoda" src="/castle.png" alt="Japanese castle illustration" />
    </div>
  );
}

function ProfileCard() {
  return (
    <div className="profile-card paper-card">
      <div className="profile-heading">
        <div className="avatar">⌣<span>•</span></div>
        <div>
          <div className="profile-name">Hi, Alex <span className="pencil-mark">⌁</span></div>
          <div className="profile-meta">Beginner <span>•</span> 7 day streak <span className="flame">♨</span></div>
        </div>
      </div>
      <div className="learning-label">Currently learning:</div>
      <button className="select-pill" onClick={() => toast("Hiragana is your current focus")}>Hiragana <ArrowRight size={16} /></button>
      <div className="progress-row"><span>Overall Progress</span><b>18%</b></div>
      <div className="progress-track"><div className="progress-fill" style={{ width: "18%" }} /></div>
    </div>
  );
}

function LessonCard({ lesson, index }: { lesson: Lesson; index: number }) {
  return (
    <button className={`lesson-card lesson-${lesson.tone}`} onClick={() => toast(`${lesson.name} course selected`)} style={{ animationDelay: `${index * 65}ms` }}>
      <div className="lesson-icon">{lesson.icon}</div>
      <div className="lesson-name">{lesson.name}</div>
      <div className="lesson-jp">{lesson.jp}</div>
      <div className="lesson-count">{lesson.count}</div>
    </button>
  );
}

function PracticeCard({ item }: { item: (typeof practice)[number] }) {
  return (
    <button className={`practice-card practice-${item.tone}`} onClick={() => toast(`${item.title} practice is coming soon`)}>
      <span className="practice-icon">{item.icon}</span>
      <span className="practice-title">{item.title}</span>
      <span className="practice-description">{item.description}</span>
    </button>
  );
}

export default function Home() {
  const [showApp, setShowApp] = useState(false);
  const [active, setActive] = useState("Home");
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const enterApp = () => {
    setShowApp(true);
    setActive("Courses");
    setMenuOpen(false);
    toast("Welcome to your Kotobe learning space");
  };

  const handleNav = (item: string) => {
    if (!showApp && item !== "Home") {
      enterApp();
      return;
    }
    setActive(item);
    setMenuOpen(false);
    const target = item === "Home" ? "top" : item === "Courses" ? "path" : item === "Practice" ? "practice" : item === "Progress" ? "progress" : "community";
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (item === "Library") toast("Library is being curated for you");
  };

  return (
    <main id="top" className="site-shell">
      <div className="decorative-stems stem-left" aria-hidden="true">⌁<br />✿<br />⌁</div>
      <div className="decorative-stems stem-right" aria-hidden="true">✽<br />⌁<br />✿</div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Kotobe home" onClick={() => handleNav("Home")}>
          <span className="brand-mark"><BookOpen size={28} strokeWidth={1.8} /></span>
          <span className="brand-word">Kotobe</span>
          <span className="brand-jp">コトベ</span>
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {(showApp ? navItems : ["Home"]).map((item) => (
            <button key={item} className={active === item ? "active" : ""} onClick={() => handleNav(item)}>{item}</button>
          ))}
        </nav>
        <div className="header-actions">
          {searchOpen && <input autoFocus className="search-input" placeholder="Search Kotobe" aria-label="Search" onKeyDown={(e) => e.key === "Enter" && toast("Search is coming soon")} />}
          <button className="icon-button search-button" aria-label="Toggle search" onClick={() => setSearchOpen((value) => !value)}>{searchOpen ? <X size={20} /> : <Search size={20} />}</button>
          <button className="login-button" onClick={enterApp}>Log in</button>
          <button className="signup-button" onClick={enterApp}>Sign up</button>
          <button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </header>

      <section className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15} /> Japanese, made personal</div>
          <h1>Small steps.<br /><em>Big conversations.</em></h1>
          <p className="hero-kicker">Learn Japanese, your way.</p>
          <p className="hero-description">Kotobe is your personal Japanese learning space — simple, structured, and designed to help you build real skills, at your own pace.</p>
          <button className="primary-button" onClick={enterApp}>Start Learning <ArrowRight size={18} /></button>
        </div>
        <DoodleScene />
        <div className="note-card">好きなことで、<br />日本語を学ぼう！ <span>☺</span></div>
      </section>

      {showApp && <>
      <section id="path" className="path-section section-card">
        <div className="section-heading">
          <div>
            <h2>Your Learning Path <span className="heading-sprig">⌁</span></h2>
            <p>Follow the path, complete each course, and unlock new skills!</p>
          </div>
          <button className="text-button" onClick={() => toast("All courses are shown here")}>View all <ChevronRight size={16} /></button>
        </div>
        <div className="lesson-path">
          <div className="path-line" />
          {lessons.map((lesson, index) => <LessonCard key={lesson.name} lesson={lesson} index={index} />)}
          <div className="torii" aria-hidden="true">⛩</div>
        </div>
      </section>

      <section className="lower-grid">
        <div id="practice" className="practice-section">
          <div className="section-heading compact">
            <div><h2>Practice <span className="heading-sprig">⌁</span></h2><p>Reinforce what you’ve learned with fun and effective tools.</p></div>
            <button className="text-button" onClick={() => handleNav("Practice")}>Explore <ChevronRight size={16} /></button>
          </div>
          <div className="practice-grid">{practice.map((item) => <PracticeCard key={item.title} item={item} />)}</div>
        </div>
      </section>
      </>}

      {/* Community and notebook content are intentionally reserved for future authenticated features. */}
      {/*
      <div className="community-row">
        <section className="notebook-strip" aria-label="Kotobe notebook">
          <div className="notebook-cell notebook-word">
            <span className="notebook-label">Word of the day</span>
            <strong>つながる</strong>
            <small>to connect · to be linked</small>
          </div>
          <div className="notebook-cell notebook-note">
            <span className="notebook-label">A little reminder</span>
            <p>Every conversation starts with one small word.</p>
          </div>
        </section>

        <section id="community" className="community-card paper-card">
          <div className="community-icon"><Sparkles size={21} /></div>
          <div><h3>Join the Community</h3><p>Learn together, grow together.</p></div>
          <button className="coming-button" onClick={() => toast("Community features are coming soon")}>Coming Soon</button>
        </section>
      </div>
      */}

      <footer className="site-footer">
        <div className="footer-quote">“言葉は、<br /><span>世界をつなぐ。</span>” <small>— コトベ</small></div>
        <div className="footer-cat" aria-hidden="true">/\_/\\<br />( o.o )<br />{"> ^ <"}</div>
        <div className="footer-mark"><span>コトベ</span><b>Make small steps<br />every day.</b></div>
      </footer>
    </main>
  );
}

export { ChevronDown };

// Keep a local reference so TypeScript preserves the small decorative import in tree-shaken builds.
void Check;
void ChevronDown;
