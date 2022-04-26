import * as z from 'zod';
import { SubmitHandler } from 'react-hook-form';
import { Form, InputField } from '../../../components/Form';

const schema = z.object({
  email: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
});

type FormValues = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

  return (
    <>
      <h2>Login Form</h2>
      <Form<FormValues> onSubmit={onSubmit} schema={schema}>
        {({ register, formState }) => (
          <>
            <InputField
              type="email"
              label="Email Address"
              registration={register('email')}
              error={formState.errors.email}
            />
            <InputField
              type="password"
              label="Password"
              registration={register('password')}
              error={formState.errors.password}
            />
            <input type="submit" />
          </>
        )}
      </Form>
    </>
  );
};
