// useForm: フォームを簡単に管理するためのカスタムフック
// SubmitHandler: submit 時のイベントハンドラを定義時に利用する type
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  example: string;
  exampleRequired: string;
};

function Example01() {
  // register: React Hook Form に input や select 要素を登録し、バリデーションルールを適用することができる関数。
  // handleSubmit: フォームのバリデーション後に実行されるコールバック関数を指定するメソッド。
  // watch: 指定した入力を監視するメソッド。
  // formState: フォーム全体の情報を保持しているオブジェクト。今回はその中にある errors を取得している。
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  // フォームのバリデーション成功後に実行されるコールバック関数
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  // example の値 を監視する。
  // example の値を更新するたびに、コンポーネントが再レンダーされ、コンソールに example の値が出力される。
  console.log(watch('example'));

  return (
    <>
      <h1>Example01 basic usage example</h1>
      {/* handleSubmit を実行することで、バリデーションが実行される。
      そして、バリデーションが成功したら、onSubmit が実行される。 */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register を渡し、React Hook Form にこの input 要素を登録する。
        登録をすることで、バリデーションルールを適用できる。*/}
        <input defaultValue="test" {...register('example')} />

        <input {...register('exampleRequired', { required: true })} />
        {/* ↑ の入力でエラーが発生した場合、エラーを出力する。 */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  );
}

export default Example01;
