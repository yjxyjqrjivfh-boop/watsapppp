'use client';

import Image from 'next/image';
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';

type TopicItem = { id: string; title: string; path: string };
type LevelItem = { id: string; title: string; count: string; open: boolean; parentId?: string };
type QuestionItem = {
  id: string;
  levelId: string;
  topic: string;
  question: string;
  a: string;
  b: string;
  c: string;
  d: string;
  correct: 'A' | 'B' | 'C' | 'D';
  onCorrect: string;
  onWrong: string;
  mediaId?: string;
};
type ArtifactItem = { id: string; title: string; description: string; image: string; resultFor: 'correct' | 'wrong' };
type MediaItem = {
  id: string;
  title: string;
  mediaType: 'gif' | 'video' | 'lottie' | 'image';
  src: string;
  useFor: 'correct' | 'wrong' | 'intro' | 'question';
};

const uid = () => Math.random().toString(36).slice(2, 9);

async function fileToDataUrl(file: File) {
  return await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function AdminStudio({ section = 'all' }: { section?: 'all' | 'topics' | 'levels' | 'questions' | 'artifacts' | 'media' }) {
  const [topics, setTopics] = useState<TopicItem[]>([]);
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
      {showQuestions ? <QuestionsPanel questions={questions} setQuestions={setQuestions} levels={levels} media={media} /> : null}
      {showArtifacts ? <ArtifactsPanel artifacts={artifacts} setArtifacts={setArtifacts} /> : null}
      {showMedia ? <MediaPanel media={media} setMedia={setMedia} /> : null}
    </div>
  );
}

function TopicsPanel({ topics, setTopics }: { topics: TopicItem[]; setTopics: (v: TopicItem[]) => void }) {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const title = String(data.get('title') || '').trim();
    if (!title) return;
    setTopics([{ id: uid(), title, path: `/topic/${title.toLowerCase().replace(/\s+/g, '-')}` }, ...topics]);
    e.currentTarget.reset();
  }

  return (
    <section className="admin-card">
      <h3>Темы</h3>
      <form className="admin-form" onSubmit={onSubmit}>
        <input name="title" placeholder="Название темы" />
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
    const parentId = String(data.get('parentId') || 'root');
    if (!title || !count) return;
    setLevels([{ id: uid(), title, count, open, parentId: parentId === 'root' ? undefined : parentId }, ...levels]);
    e.currentTarget.reset();
  }

  return (
    <section className="admin-card">
      <h3>Уровни и ветки</h3>
      <form className="admin-form" onSubmit={onSubmit}>
        <input name="title" placeholder="Название уровня" />
        <input name="count" placeholder="Например: 24 питання" />
        <div className="admin-grid-2">
          <select name="open" defaultValue="open">
            <option value="open">Открыт</option>
            <option value="locked">Закрыт</option>
          </select>
          <select name="parentId" defaultValue="root">
            <option value="root">Корневой уровень</option>
            {levels.map((level) => (
              <option key={level.id} value={level.id}>Ветка внутри: {level.title}</option>
            ))}
          </select>
        </div>
        <button className="admin-btn" type="submit">Добавить уровень</button>
      </form>
      <ul className="admin-list">
        {levels.map((level) => (
          <li key={level.id}>
            <strong>{level.title}</strong>
            <span>{level.count} · {level.open ? 'открыт' : 'закрыт'} · {level.parentId ? `ветка от ${level.parentId}` : 'корень'}</span>
          </li>
        ))}
        {levels.length === 0 ? <li>Уровней пока нет.</li> : null}
      </ul>
    </section>
  );
}

function QuestionsPanel({
  questions,
  setQuestions,
  levels,
  media
}: {
  questions: QuestionItem[];
  setQuestions: (v: QuestionItem[]) => void;
  levels: LevelItem[];
  media: MediaItem[];
}) {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const onCorrectType = String(data.get('onCorrectType') || 'reward');
    const onWrongType = String(data.get('onWrongType') || 'wrong');
    const onCorrectQuestionId = String(data.get('onCorrectQuestionId') || '');
    const onWrongQuestionId = String(data.get('onWrongQuestionId') || '');

    const item: QuestionItem = {
      id: uid(),
      levelId: String(data.get('levelId') || ''),
      topic: String(data.get('topic') || ''),
      question: String(data.get('question') || ''),
      a: String(data.get('a') || ''),
      b: String(data.get('b') || ''),
      c: String(data.get('c') || ''),
      d: String(data.get('d') || ''),
      correct: String(data.get('correct') || 'A') as 'A' | 'B' | 'C' | 'D',
      onCorrect: onCorrectType === 'nextQuestion' ? `question:${onCorrectQuestionId}` : '/reward',
      onWrong: onWrongType === 'nextQuestion' ? `question:${onWrongQuestionId}` : '/wrong',
      mediaId: String(data.get('mediaId') || '') || undefined
    };

    if (!item.topic || !item.question || !item.a || !item.b || !item.c || !item.d) return;
    setQuestions([item, ...questions]);
    e.currentTarget.reset();
  }

  return (
    <section className="admin-card">
      <h3>Вопросы (без ручного ввода путей)</h3>
      <form className="admin-form" onSubmit={onSubmit}>
        <div className="admin-grid-2">
          <select name="levelId" defaultValue="">
            <option value="">Уровень (не выбран)</option>
            {levels.map((level) => (
              <option key={level.id} value={level.id}>{level.title}</option>
            ))}
          </select>
          <input name="topic" placeholder="Тема вопроса" />
        </div>

        <textarea name="question" placeholder="Текст вопроса" rows={2} />

        <div className="admin-grid-2">
          <input name="a" placeholder="Ответ A" />
          <input name="b" placeholder="Ответ B" />
          <input name="c" placeholder="Ответ C" />
          <input name="d" placeholder="Ответ D" />
        </div>

        <div className="admin-grid-2">
          <select name="correct" defaultValue="A">
            <option value="A">Правильный: A</option>
            <option value="B">Правильный: B</option>
            <option value="C">Правильный: C</option>
            <option value="D">Правильный: D</option>
          </select>
          <select name="mediaId" defaultValue="">
            <option value="">Медиа (опц.)</option>
            {media.map((m) => (
              <option key={m.id} value={m.id}>{m.title}</option>
            ))}
          </select>
        </div>

        <div className="admin-grid-2">
          <select name="onCorrectType" defaultValue="reward">
            <option value="reward">Если верно → экран награды</option>
            <option value="nextQuestion">Если верно → другой вопрос</option>
          </select>
          <select name="onCorrectQuestionId" defaultValue="">
            <option value="">Выбери вопрос для перехода</option>
            {questions.map((q) => (
              <option key={q.id} value={q.id}>{q.topic}: {q.question.slice(0, 30)}...</option>
            ))}
          </select>

          <select name="onWrongType" defaultValue="wrong">
            <option value="wrong">Если ошибка → wrong экран</option>
            <option value="nextQuestion">Если ошибка → другой вопрос</option>
          </select>
          <select name="onWrongQuestionId" defaultValue="">
            <option value="">Выбери вопрос для перехода</option>
            {questions.map((q) => (
              <option key={q.id} value={q.id}>{q.topic}: {q.question.slice(0, 30)}...</option>
            ))}
          </select>
        </div>

        <button className="admin-btn" type="submit">Добавить вопрос</button>
      </form>

      <ul className="admin-list">
        {questions.map((q) => (
          <li key={q.id}>
            <strong>{q.topic}: {q.question}</strong>
            <span>Верный: {q.correct} · ok→ {q.onCorrect} · fail→ {q.onWrong}</span>
            <span>Медиа: {q.mediaId || 'нет'}</span>
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
        <input name="image" placeholder="Ссылка на изображение (можно dataURL из медиа)" />
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
  const [fileData, setFileData] = useState('');
  const [preview, setPreview] = useState('');

  async function onFile(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const data = await fileToDataUrl(file);
    setFileData(data);
    setPreview(data);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const title = String(data.get('title') || '').trim();
    const mediaType = String(data.get('mediaType') || 'gif') as 'gif' | 'video' | 'lottie' | 'image';
    const useFor = String(data.get('useFor') || 'intro') as 'correct' | 'wrong' | 'intro' | 'question';
    const url = String(data.get('url') || '').trim();
    const src = fileData || url;
    if (!title || !src) return;

    setMedia([{ id: uid(), title, mediaType, src, useFor }, ...media]);
    e.currentTarget.reset();
    setFileData('');
    setPreview('');
  }

  return (
    <section className="admin-card">
      <h3>Медиа (просто загрузите файл кнопкой)</h3>
      <form className="admin-form" onSubmit={onSubmit}>
        <input name="title" placeholder="Название медиа" />
        <div className="admin-grid-2">
          <select name="mediaType" defaultValue="gif">
            <option value="gif">GIF</option>
            <option value="video">Video</option>
            <option value="lottie">Lottie</option>
            <option value="image">Image</option>
          </select>
          <select name="useFor" defaultValue="intro">
            <option value="intro">Для intro</option>
            <option value="question">Для вопроса</option>
            <option value="correct">Для correct</option>
            <option value="wrong">Для wrong</option>
          </select>
        </div>

        <input type="file" accept="image/*,video/*,.gif,.json,.lottie" onChange={onFile} />
        <input name="url" placeholder="...или вставьте ссылку (если не грузите файл)" />

        {preview ? <Image src={preview} alt="preview" width={140} height={90} unoptimized style={{ borderRadius: 8, border: '1px solid #ddd', height: 'auto' }} /> : null}

        <button className="admin-btn" type="submit">Добавить медиа</button>
      </form>
      <ul className="admin-list">
        {media.map((m) => (
          <li key={m.id}><strong>{m.title}</strong><span>{m.mediaType} · {m.useFor}</span></li>
        ))}
        {media.length === 0 ? <li>Медиа пока нет.</li> : null}
      </ul>
    </section>
  );
}
