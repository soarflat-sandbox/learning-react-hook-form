// useForm: フォームを簡単に管理するためのカスタムフック
// SubmitHandler: submit 時のイベントハンドラを定義時に利用する type
import { useForm, SubmitHandler } from 'react-hook-form';

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

type IFormInput = {
  firstName: string;
  gender: GenderEnum;
};

export default function App() {
  // register: React Hook Form に input や select 要素を登録し、バリデーションルールを適用することができる関数。
  // handleSubmit: フォームのバリデーション後に実行されるコールバック関数を指定するメソッド。
  const { register, handleSubmit } = useForm<IFormInput>();
  // フォームのバリデーション成功後に実行されるコールバック関数
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <>
      <h2>01-get-started / 02 Register fields</h2>
      {/* handleSubmit を実行することで、バリデーションが実行される。
      そして、バリデーションが成功したら、onSubmit が実行される。 */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        {/* register を渡し、React Hook Form にこの input 要素を登録する。
        登録をすることで、バリデーションルールを適用できる。*/}
        <input {...register('firstName')} />
        <label>Gender Selection</label>
        <select {...register('gender')}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
      </form>
    </>
  );
}
