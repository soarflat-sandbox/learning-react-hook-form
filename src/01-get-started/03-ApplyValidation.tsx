// useForm: フォームを簡単に管理するためのカスタムフック
// SubmitHandler: submit 時のイベントハンドラを定義時に利用する type
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

export default function App() {
  // register: React Hook Form に input や select 要素を登録し、バリデーションルールを適用することができる関数。
  // handleSubmit: フォームのバリデーション後に実行されるコールバック関数を指定するメソッド。
  const { register, handleSubmit } = useForm<IFormInput>();
  // フォームのバリデーション成功後に実行されるコールバック関数
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
  // フォームのバリデーション失敗後に実行されるコールバック関数
  const onError: SubmitErrorHandler<IFormInput> = (errors, e) => console.error(errors, e);

  return (
    <>
      <h2>01-get-started / 03 Apply validation</h2>
      {/* handleSubmit を実行することで、バリデーションが実行される。
      そして、バリデーションが成功したら、onSubmit が実行され、失敗したら onError が実行される。 */}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        {/* 入力必須、最大入力文字数20のバリデーションを実行 */}
        <input {...register('firstName', { required: true, maxLength: 20 })} />
        {/* 指定した文字列かどうかのバリデーションを実行 */}
        <input {...register('lastName', { pattern: /^[A-Za-z]+$/i })} />
        {/* 最小18、最大99のバリデーションを実行 */}
        <input type="number" {...register('age', { min: 18, max: 99 })} />
        <input type="submit" />
      </form>
    </>
  );
}
