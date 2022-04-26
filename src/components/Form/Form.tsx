import * as React from 'react';
import { useForm, SubmitHandler, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodType } from 'zod';

type FormProps<TFormValues, Schema> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  schema?: Schema;
};

export const Form = <
  TFormValues extends Record<string, unknown> = Record<string, unknown>,
  Schema extends ZodType<unknown> = ZodType<unknown>
>({
  onSubmit,
  children,
  schema,
}: FormProps<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({ resolver: schema && zodResolver(schema) });

  return <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>;
};
