// import { createClient } from '@supabase/supabase-js';

import { createClient } from '../utils/supabase/server';
import { cookies } from 'next/headers';

export default async function Page() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: todos } = await supabase.from('todos').select();
  const { data: test } = await supabase.from('test').select();

  console.log('AAA', todos, test);
  return (
    <ul>
      {todos?.map((todo) => (
        <li>{todo}</li>
      ))}
    </ul>
  );
}
