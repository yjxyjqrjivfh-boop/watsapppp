create table if not exists public.users (
  id uuid primary key default auth.uid(),
  email text not null unique,
  xp int not null default 0,
  streak int not null default 0,
  last_activity timestamptz,
  subscription_status text not null default 'free',
  plan text not null default 'starter',
  created_at timestamptz not null default now()
);

create table if not exists public.topics (
  id bigint generated always as identity primary key,
  title text not null,
  description text,
  is_free boolean not null default false
);

create table if not exists public.questions (
  id bigint generated always as identity primary key,
  topic_id bigint references public.topics(id) on delete cascade,
  question text not null,
  image text,
  answer_a text not null,
  answer_b text not null,
  answer_c text not null,
  answer_d text not null,
  correct_answer text not null,
  success_animation text,
  fail_animation text
);

create table if not exists public.artifacts (
  id bigint generated always as identity primary key,
  title text not null,
  image text,
  description text,
  required_xp int not null default 0
);

create table if not exists public.results (
  id bigint generated always as identity primary key,
  user_id uuid references public.users(id) on delete cascade,
  question_id bigint references public.questions(id) on delete cascade,
  correct boolean not null,
  created_at timestamptz not null default now()
);

create or replace function public.add_xp(user_id uuid, xp_amount int)
returns void
language sql
as $$
  update public.users set xp = xp + xp_amount where id = user_id;
$$;

create or replace function public.update_streak(user_id uuid)
returns void
language sql
as $$
  update public.users
  set streak = case
    when last_activity::date = now()::date - interval '1 day' then streak + 1
    when last_activity::date = now()::date then streak
    else 1
  end,
  last_activity = now()
  where id = user_id;
$$;
