import * as z from 'zod';
import { SubmitHandler } from 'react-hook-form';
import { Form, SelectField } from '../../../components/Form';

const schema = z.object({
  gender: z.string().min(1, 'Required'),
});

enum GenderEnum {
  female = 'female',
  male = 'male',
  other = 'other',
}

type FormValues = {
  gender: GenderEnum;
};

export const RegisterForm = () => {
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);
  const options = [
    { label: 'empty', value: '' },
    { label: 'female', value: 'female' },
    { label: 'male', value: 'male' },
    { label: 'other', value: 'other' },
  ];

  return (
    <>
      <h2>Register Form</h2>
      <Form<FormValues> onSubmit={onSubmit} schema={schema}>
        {({ register, formState }) => (
          <>
            <SelectField
              label="Gender"
              registration={register('gender')}
              options={options}
              error={formState.errors.gender}
            />
            <input type="submit" />
          </>
        )}
      </Form>
    </>
  );
};
