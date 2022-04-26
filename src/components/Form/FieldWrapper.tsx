import * as React from 'react';
import { FieldError } from 'react-hook-form';

type FieldWrapperProps = {
  label?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
};

export type FieldWrapperPassThroughProps = Omit<FieldWrapperProps, 'children'>;

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, error, children } = props;

  return (
    <div>
      <label>
        {label}
        <div>{children}</div>
      </label>
      {error?.message && (
        <div role="alert" aria-label={error.message}>
          {error.message}
        </div>
      )}
    </div>
  );
};
