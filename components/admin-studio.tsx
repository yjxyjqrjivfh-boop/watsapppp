'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';

type MenuItem = { id: string; title: string; path: string };
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

const uid = () => Math.random().toString(36).slice(2, 9);

export function AdminStudio({ section = 'all' }: { section?: 'all' | 'menu' | 'questions' | 'artifacts' }) {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [artifacts, setArtifacts] = useState<ArtifactItem[]>([]);

  useEffect(() => {
    setMenu(JSON.parse(localStorage.getItem('admin_menu_items') || '[]'));
    setQuestions(JSON.parse(localStorage.getItem('admin_questions') || '[]'));
    setArtifacts(JSON.parse(localStorage.getItem('admin_artifacts') || '[]'));
  }, []);

  useEffect(() => localStorage.setItem('admin_menu_items', JSON.stringify(menu)), [menu]);
  useEffect(() => localStorage.setItem('admin_questions', JSON.stringify(questions)), [questions]);
  useEffect(() => localStorage.setItem('admin_artifacts', JSON.stringify(artifacts)), [artifacts]);

  const showMenu = useMemo(() => section === 'all' || section === 'menu', [section]);
  const showQuestions = useMemo(() => section === 'all' || section === 'questions', [section]);
  const showArtifacts = useMemo(() => section === 'all' || section === 'artifacts', [section]);

  return (
    <div className="admin-studio">
      {showMenu ? <MenuPanel menu={menu} setMenu={setMenu} /> : null}
      {showQuestions ? <QuestionsPanel questions={questions} setQuestions={setQuestions} /> : null}
      {showArtifacts ? <ArtifactsPanel artifacts={artifacts} setArtifacts={setArtifacts} /> : null}
    </div>
  );
}

function MenuPanel({ menu, setMenu }: { menu: MenuItem[]; setMenu: (v: MenuItem[]) => void }) {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const title = String(data.get('title') || '').trim();
    const path = String(data.get('path') || '').trim();
    if (!title || !path) return;
    setMenu([{ id: uid(), title, path }, ...menu]);
    e.currentTarget.reset();
  }

  return (
    <section className="admin-card">
      <h3>Пункты меню (появляются сразу)</h3>
      <form className="admin-form" onSubmit={onSubmit}>
        <input name="title" placeholder="Название пункта" />
        <input name="path" placeholder="Путь, например /topic/olga" />
        <button className="admin-btn" type="submit">Добавить пункт</button>
      </form>

      <ul className="admin-list">
        {menu.map((m) => (
          <li key={m.id}>
            <strong>{m.title}</strong>
            <span>{m.path}</span>
          </li>
        ))}
        {menu.length === 0 ? <li>Пока пусто — добавьте первый пункт.</li> : null}
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
      onCorrect: String(data.get('onCorrect') || '/correct'),
      onWrong: String(data.get('onWrong') || '/wrong'),
      animation: String(data.get('animation') || '')
    };

    if (!item.topic || !item.question || !item.a || !item.b || !item.c || !item.d) return;
    setQuestions([item, ...questions]);
    e.currentTarget.reset();
  }

  return (
    <section className="admin-card">
      <h3>Вопросы и логика</h3>
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
          <input name="animation" placeholder="GIF/MP4/Lottie URL для анимации" />
          <input name="onCorrect" placeholder="Маршрут если верно (например /correct)" defaultValue="/correct" />
          <input name="onWrong" placeholder="Маршрут если ошибка (например /wrong)" defaultValue="/wrong" />
        </div>
        <button className="admin-btn" type="submit">Добавить вопрос с логикой</button>
      </form>

      <ul className="admin-list">
        {questions.map((q) => (
          <li key={q.id}>
            <strong>{q.topic}: {q.question}</strong>
            <span>Верный: {q.correct} · OK: {q.onCorrect} · FAIL: {q.onWrong}</span>
            <span>Анимация: {q.animation || 'не указана'}</span>
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
      <h3>Артефакты для правильных и неправильных ответов</h3>
      <form className="admin-form" onSubmit={onSubmit}>
        <input name="title" placeholder="Название артефакта" />
        <textarea name="description" placeholder="Описание артефакта" rows={2} />
        <input name="image" placeholder="Ссылка на изображение (или имя файла)" />
        <select name="resultFor" defaultValue="correct">
          <option value="correct">Показывать после правильного ответа</option>
          <option value="wrong">Показывать после неправильного ответа</option>
        </select>
        <button className="admin-btn" type="submit">Добавить артефакт</button>
      </form>

      <ul className="admin-list">
        {artifacts.map((a) => (
          <li key={a.id}>
            <strong>{a.title}</strong>
            <span>{a.description}</span>
            <span>Показывать: {a.resultFor === 'correct' ? 'после верного ответа' : 'после ошибки'}</span>
          </li>
        ))}
        {artifacts.length === 0 ? <li>Пока нет артефактов.</li> : null}
      </ul>
    </section>
  );
}
