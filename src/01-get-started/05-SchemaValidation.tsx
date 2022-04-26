// useForm: フォームを簡単に管理するためのカスタムフック
// SubmitHandler: submit 時のイベントハンドラを定義時に利用する type
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import * as z from 'zod';
// useForm に渡すリゾルバ、今回は zodResolver を渡すので、バリデーション時に zod を利用する。
import { zodResolver } from '@hookform/resolvers/zod';

// オブジェクトのスキーマを生成
const schema = z.object({
  name: z.string(),
  age: z.number(),
});

type Schema = z.infer<typeof schema>;

export default function App() {
  // register: React Hook Form に input や select 要素を登録し、バリデーションルールを適用することができる関数。
  // handleSubmit: フォームのバリデーション後に実行されるコールバック関数を指定するメソッド。
  const { register, handleSubmit } = useForm<Schema>({
    resolver: zodResolver(schema),
  });
  // フォームのバリデーション成功後に実行されるコールバック関数
  const onSubmit: SubmitHandler<Schema> = data => console.log(data);
  // フォームのバリデーション失敗後に実行されるコールバック関数
  const onError: SubmitErrorHandler<Schema> = (errors, e) => console.error(errors, e);

  return (
    <>
      <h2>01-get-started / 05 Schema Validation</h2>
      {/* handleSubmit を実行することで、バリデーションが実行される。
      そして、バリデーションが成功したら、onSubmit が実行され、失敗したら onError が実行される。 */}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <input {...register('name')} />
        <input {...register('age')} type="number" />
        <input type="submit" />
      </form>
    </>
  );
}
