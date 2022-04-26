// useForm: フォームを簡単に管理するためのカスタムフック
// SubmitHandler: submit 時のイベントハンドラを定義時に利用する type
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  firstName: string;
  lastName: string;
}

export default function App() {
  // register: React Hook Form に input や select 要素を登録し、バリデーションルールを適用することができる関数。
  // handleSubmit: フォームのバリデーション後に実行されるコールバック関数を指定するメソッド。
  // formState: フォーム全体の情報を保持しているオブジェクト。今回はその中にある errors を取得している。
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  // フォームのバリデーション成功後に実行されるコールバック関数
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <>
      <h2>01-get-started / 04 Handle errors</h2>
      {/* handleSubmit を実行することで、バリデーションが実行される。
      そして、バリデーションが成功したら、onSubmit が実行され、失敗したら onError が実行される。 */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('firstName', { required: true })} />
        {/* register('firstName') で登録した要素にバリデーションエラーが発生した場合、errors.firstName にエラー情報が存在する */}
        {errors.firstName && 'First name is required'}
        <input {...register('lastName', { required: true })} />
        {/* register('lastName') で登録した要素にバリデーションエラーが発生した場合、errors.lastName にエラー情報が存在する */}
        {errors.lastName && 'Last name is required'}
        <input type="submit" />
      </form>
    </>
  );
}
