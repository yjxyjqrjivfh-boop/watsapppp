'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';

type MenuItem = { id: string; title: string; path: string };
type LevelItem = { id: string; title: string; count: string; open: boolean };
type QuestionItem = {
  id: string;
  topic: string;
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  correct: 'A' | 'B' | 'C' | 'D';
  onCorrect: string;
  onWrong: string;
  animation: string;
};
type ArtifactItem = { id: string; title: string; description: string; image: string; resultFor: 'correct' | 'wrong' };
type MediaItem = { id: string; title: string; mediaType: 'gif' | 'video' | 'lottie'; url: string; useFor: 'correct' | 'wrong' | 'intro' };

const uid = () => Math.random().toString(36).slice(2, 9);

export function AdminStudio({ section = 'all' }: { section?: 'all' | 'topics' | 'levels' | 'questions' | 'artifacts' | 'media' }) {
  const [topics, setTopics] = useState<MenuItem[]>([]);
  const [levels, setLevels] = useState<LevelItem[]>([]);
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [artifacts, setArtifacts] = useState<ArtifactItem[]>([]);
  const [media, setMedia] = useState<MediaItem[]>([]);

  useEffect(() => {
    setTopics(JSON.parse(localStorage.getItem('admin_topics') || '[]'));
    setLevels(JSON.parse(localStorage.getItem('admin_levels') || '[]'));
    setQuestions(JSON.parse(localStorage.getItem('admin_questions') || '[]'));
    setArtifacts(JSON.parse(localStorage.getItem('admin_artifacts') || '[]'));
    setMedia(JSON.parse(localStorage.getItem('admin_media') || '[]'));
  }, []);

  useEffect(() => localStorage.setItem('admin_topics', JSON.stringify(topics)), [topics]);
  useEffect(() => localStorage.setItem('admin_levels', JSON.stringify(levels)), [levels]);
  useEffect(() => localStorage.setItem('admin_questions', JSON.stringify(questions)), [questions]);
  useEffect(() => localStorage.setItem('admin_artifacts', JSON.stringify(artifacts)), [artifacts]);
  useEffect(() => localStorage.setItem('admin_media', JSON.stringify(media)), [media]);

  const showTopics = useMemo(() => section === 'all' || section === 'topics', [section]);
  const showLevels = useMemo(() => section === 'all' || section === 'levels', [section]);
  const showQuestions = useMemo(() => section === 'all' || section === 'questions', [section]);
  const showArtifacts = useMemo(() => section === 'all' || section === 'artifacts', [section]);
  const showMedia = useMemo(() => section === 'all' || section === 'media', [section]);

  return (
    <div className="admin-studio">
      {showTopics ? <TopicsPanel topics={topics} setTopics={setTopics} /> : null}
      {showLevels ? <LevelsPanel levels={levels} setLevels={setLevels} /> : null}
      {showQuestions ? <QuestionsPanel questions={questions} setQuestions={setQuestions} /> : null}
      {showArtifacts ? <ArtifactsPanel artifacts={artifacts} setArtifacts={setArtifacts} /> : null}
      {showMedia ? <MediaPanel media={media} setMedia={setMedia} /> : null}
    </div>
  );
}

function TopicsPanel({ topics, setTopics }: { topics: MenuItem[]; setTopics: (v: MenuItem[]) => void }) {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const title = String(data.get('title') || '').trim();
    const path = String(data.get('path') || '').trim();
    if (!title || !path) return;
    setTopics([{ id: uid(), title, path }, ...topics]);
    e.currentTarget.reset();
  }

  return (
    <section className="admin-card">
      <h3>Темы</h3>
      <form className="admin-form" onSubmit={onSubmit}>
        <input name="title" placeholder="Название темы" />
        <input name="path" placeholder="Путь, например /topic/olga" />
        <button className="admin-btn" type="submit">Добавить тему</button>
      </form>
      <ul className="admin-list">
        {topics.map((t) => (
          <li key={t.id}><strong>{t.title}</strong><span>{t.path}</span></li>
        ))}
        {topics.length === 0 ? <li>Тем пока нет.</li> : null}
      </ul>
    </section>
  );
}

function LevelsPanel({ levels, setLevels }: { levels: LevelItem[]; setLevels: (v: LevelItem[]) => void }) {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const title = String(data.get('title') || '').trim();
    const count = String(data.get('count') || '').trim();
    const open = String(data.get('open') || 'open') === 'open';
    if (!title || !count) return;
    setLevels([{ id: uid(), title, count, open }, ...levels]);
    e.currentTarget.reset();
  }

  return (
    <section className="admin-card">
      <h3>Уровни (видны на /dashboard сразу)</h3>
      <form className="admin-form" onSubmit={onSubmit}>
        <input name="title" placeholder="Название уровня" />
        <input name="count" placeholder="Например: 24 питання" />
        <select name="open" defaultValue="open">
          <option value="open">Статус: открыт</option>
          <option value="locked">Статус: закрыт</option>
        </select>
        <button className="admin-btn" type="submit">Добавить уровень</button>
      </form>
      <ul className="admin-list">
        {levels.map((level) => (
          <li key={level.id}><strong>{level.title}</strong><span>{level.count} · {level.open ? 'открыт' : 'закрыт'}</span></li>
        ))}
        {levels.length === 0 ? <li>Уровней пока нет.</li> : null}
      </ul>
    </section>
  );
}

function QuestionsPanel({ questions, setQuestions }: { questions: QuestionItem[]; setQuestions: (v: QuestionItem[]) => void }) {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const item: QuestionItem = {
      id: uid(),
      topic: String(data.get('topic') || ''),
      question: String(data.get('question') || ''),
      a: String(data.get('a') || ''),
      b: String(data.get('b') || ''),
      c: String(data.get('c') || ''),
      d: String(data.get('d') || ''),
      correct: String(data.get('correct') || 'A') as 'A' | 'B' | 'C' | 'D',
      onCorrect: String(data.get('onCorrect') || '/quiz?step=next'),
      onWrong: String(data.get('onWrong') || '/wrong'),
      animation: String(data.get('animation') || '')
    };

    if (!item.topic || !item.question || !item.a || !item.b || !item.c || !item.d) return;
    setQuestions([item, ...questions]);
    e.currentTarget.reset();
  }

  return (
    <section className="admin-card">
      <h3>Вопросы</h3>
      <p style={{ margin: 0, color: '#5b5c63' }}>
        Чтобы после «Княгиня Ольга» перейти дальше — укажите в поле «Маршрут если верно» следующий экран, например <code>/quiz?step=2</code> или <code>/reward</code>.
      </p>
      <form className="admin-form" onSubmit={onSubmit}>
        <input name="topic" placeholder="Тема (например Княгиня Ольга)" />
        <textarea name="question" placeholder="Текст вопроса" rows={2} />
        <div className="admin-grid-2">
          <input name="a" placeholder="Ответ A" />
          <input name="b" placeholder="Ответ B" />
          <input name="c" placeholder="Ответ C" />
          <input name="d" placeholder="Ответ D" />
        </div>
        <div className="admin-grid-2">
          <select name="correct" defaultValue="A">
            <option value="A">Правильный ответ: A</option>
            <option value="B">Правильный ответ: B</option>
            <option value="C">Правильный ответ: C</option>
            <option value="D">Правильный ответ: D</option>
          </select>
          <input name="animation" placeholder="Медиа ID или URL анимации" />
          <input name="onCorrect" placeholder="Маршрут если верно" defaultValue="/quiz?step=next" />
          <input name="onWrong" placeholder="Маршрут если ошибка" defaultValue="/wrong" />
        </div>
        <button className="admin-btn" type="submit">Добавить вопрос с логикой</button>
      </form>

      <ul className="admin-list">
        {questions.map((q) => (
          <li key={q.id}>
            <strong>{q.topic}: {q.question}</strong>
            <span>Верный: {q.correct} · OK: {q.onCorrect} · FAIL: {q.onWrong}</span>
            <span>Медиа: {q.animation || 'не указано'}</span>
          </li>
        ))}
        {questions.length === 0 ? <li>Пока нет вопросов.</li> : null}
      </ul>
    </section>
  );
}

function ArtifactsPanel({ artifacts, setArtifacts }: { artifacts: ArtifactItem[]; setArtifacts: (v: ArtifactItem[]) => void }) {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const item: ArtifactItem = {
      id: uid(),
      title: String(data.get('title') || ''),
      description: String(data.get('description') || ''),
      image: String(data.get('image') || ''),
      resultFor: String(data.get('resultFor') || 'correct') as 'correct' | 'wrong'
    };
    if (!item.title || !item.description) return;
    setArtifacts([item, ...artifacts]);
    e.currentTarget.reset();
  }

  return (
    <section className="admin-card">
      <h3>Артефакты</h3>
      <form className="admin-form" onSubmit={onSubmit}>
        <input name="title" placeholder="Название артефакта" />
        <textarea name="description" placeholder="Описание артефакта" rows={2} />
        <input name="image" placeholder="Ссылка на изображение" />
        <select name="resultFor" defaultValue="correct">
          <option value="correct">После правильного ответа</option>
          <option value="wrong">После неправильного ответа</option>
        </select>
        <button className="admin-btn" type="submit">Добавить артефакт</button>
      </form>
      <ul className="admin-list">
        {artifacts.map((a) => (
          <li key={a.id}><strong>{a.title}</strong><span>{a.description}</span><span>{a.resultFor}</span></li>
        ))}
        {artifacts.length === 0 ? <li>Артефактов пока нет.</li> : null}
      </ul>
    </section>
  );
}

function MediaPanel({ media, setMedia }: { media: MediaItem[]; setMedia: (v: MediaItem[]) => void }) {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const item: MediaItem = {
      id: uid(),
      title: String(data.get('title') || ''),
      mediaType: String(data.get('mediaType') || 'gif') as 'gif' | 'video' | 'lottie',
      url: String(data.get('url') || ''),
      useFor: String(data.get('useFor') || 'intro') as 'correct' | 'wrong' | 'intro'
    };
    if (!item.title || !item.url) return;
    setMedia([item, ...media]);
    e.currentTarget.reset();
  }

  return (
    <section className="admin-card">
      <h3>Медиа (gif / video / lottie)</h3>
      <form className="admin-form" onSubmit={onSubmit}>
        <input name="title" placeholder="Название медиа" />
        <select name="mediaType" defaultValue="gif">
          <option value="gif">GIF</option>
          <option value="video">Video</option>
          <option value="lottie">Lottie</option>
        </select>
        <select name="useFor" defaultValue="intro">
          <option value="intro">Использовать для intro-комикса</option>
          <option value="correct">Использовать для correct</option>
          <option value="wrong">Использовать для wrong</option>
        </select>
        <input name="url" placeholder="Ссылка на файл" />
        <button className="admin-btn" type="submit">Добавить медиа</button>
      </form>
      <ul className="admin-list">
        {media.map((m) => (
          <li key={m.id}><strong>{m.title}</strong><span>{m.mediaType} · {m.useFor}</span><span>{m.url}</span></li>
        ))}
        {media.length === 0 ? <li>Медиа пока нет.</li> : null}
      </ul>
    </section>
  );
}
