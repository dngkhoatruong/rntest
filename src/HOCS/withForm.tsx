import React from 'react';
import { Control, Controller } from 'react-hook-form';
import CustomErrorMessage from '../components/CustomErrorMessage';

export interface FormComponent {
  onChange?: (value: any) => void;
  onBlur?: () => void;
  value?: any;
}

interface WithFormProps {
  name: string;
  control: Control<any>;
  WrappedComponent: React.FunctionComponent<FormComponent>;
}

const withForm = <T,>(withFormProps: WithFormProps) => {
  const { name, control, WrappedComponent } = withFormProps;
  return (props: T) => (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <WrappedComponent
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            {...props}
          />
          {error?.message && <CustomErrorMessage text={error.message} />}
        </>
      )}
    />
  );
};

export default withForm;
