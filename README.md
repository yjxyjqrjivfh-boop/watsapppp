# Hi History MVP

Быстрый монолитный старт на Next.js + Supabase, который покрывает web для телефона и ноутбука.

## Что уже есть

- Пользовательские экраны: landing, login, dashboard, quiz, result.
- Admin-панель: users, questions, topics, artifacts.
- Базовые функции: `loginWithGoogle`, `getQuestions`, `submitAnswer`, `addXP`, `updateStreak`.
- SQL схема Supabase для таблиц и RPC.

## Структура

```txt
/app
  /login
  /dashboard
  /quiz
  /result
  /admin
    /users
    /questions
    /topics
    /artifacts
/lib
/backend/supabase/schema.sql
```

## Запуск

```bash
cp .env.example .env.local
npm install
npm run dev
```

Открой `http://localhost:3000`.

## MVP конфигурация контента

- 1 бесплатная тема
- 4 вопроса
- 2 анимации (success/fail) в Supabase Storage:
  - `animations/success`
  - `animations/fail`
  - `images/questions`
  - `images/artifacts`

## Быстрый roadmap на 3-5 часов

1. Настроить Supabase проект + Google OAuth + Storage bucket.
2. Выполнить `backend/supabase/schema.sql`.
3. Добавить seed-данные для 1 темы и 4 вопросов.
4. Подключить Stripe checkout/webhook для `subscription_status` и `plan`.
5. Деплой на Vercel.


## Deploy (public preview on Vercel)

Смотри пошаговый гайд в `DEPLOY.md` для максимально быстрого публичного запуска.
