## 学習メモ

## `useForm`

フォームを簡単に管理するためのカスタムフック。

以下を返却する。

- `register`
- `unregister`
- `formState`
- `watch`
- `handleSubmit`
- `reset`
- `resetField`
- `setError`
- `clearErrors`
- `setValue`
- `setFocus`
- `getValues`
- `getFieldState`
- `trigger`
- `control`

### `register`

以下のように`input`要素などに記述することで、React Hook Form にその要素を登録できるメソッド。

```jsx
<input defaultValue="test" {...register('example')} />
```

登録をすることで、バリデーションルールを適用できる。

上記のコードは以下のコードと同等。

```jsx
const { onChange, onBlur, name, ref } = register('firstName');

<input onChange={onChange} onBlur={onBlur} name={name} ref={ref} />;
```

### `handleSubmit`

フォームのバリデーション後に実行されるコールバック関数を指定するメソッド。

以下のように、第１引数と第２引数にコールバック関数を指定する。

```tsx
<form onSubmit={handleSubmit(onSubmit, onError)}>
```

バリデーションに成功すると第１引数のコールバック関数が実行され、バリデーションに失敗すると第２引数のコールバック関数が実行される。

コールバック関数には、フォームに入力したデータなどが渡される。

以下は実際に動作するサンプル。

```tsx
import React from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';

type FormValues = { firstName: string; lastName: string };

export default function App() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
  const onError: SubmitErrorHandler<FormValues> = (errors, e) => console.error(errors, e);

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <input {...register('firstName', { required: true })} />
      <input {...register('lastName', { required: true })} />
      <input type="submit" />
    </form>
  );
}
```

### `watch`

指定した入力を監視するメソッド。

入力が更新されると、コンポーネントが再レンダーされ、最新の入力値を取得できる。

`getValues`でも入力値は取得できるが、入力の監視はしないため、入力を更新してもコンポーネントが再レンダーされない。

```tsx
import React from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
  firstName: string;
};

export default function App() {
  const { register, watch } = useForm<FormValues>();
  // firstName の値を更新するたび、firstName の値が出力される。
  console.log(watch('firstName'));

  return <input {...register('firstName')} />;
}
```
