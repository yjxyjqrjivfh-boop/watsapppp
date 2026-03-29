import { supabase } from '@/lib/supabase';

export async function loginWithGoogle() {
  if (!supabase) {
    console.warn('Supabase не настроен. Добавь переменные в .env.local');
    return;
  }

  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`
    }
  });
}

export async function submitAnswer(selected: string, correct: string) {
  const isCorrect = selected === correct;

  return {
    isCorrect,
    message: isCorrect ? '✅ Верно! +10 XP' : `❌ Неверно. Правильный ответ: ${correct}`
  };
}

export async function getQuestions(topicId: string) {
  if (!supabase) return [];

  const { data, error } = await supabase.from('questions').select('*').eq('topic_id', topicId).limit(20);
  if (error) return [];
  return data;
}

export async function addXP(userId: string, amount: number) {
  if (!supabase) return;

  await supabase.rpc('add_xp', {
    user_id: userId,
    xp_amount: amount
  });
}

export async function updateStreak(userId: string) {
  if (!supabase) return;

  await supabase.rpc('update_streak', {
    user_id: userId
  });
}
