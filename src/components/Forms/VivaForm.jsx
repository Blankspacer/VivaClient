/* eslint-disable react/prop-types */

import { FormProvider, useForm } from "react-hook-form";

const VivaForm = ({
  children,
  onSubmit,
  resolver,
  defaultValues,
  className,
}) => {
  const formConfig = {};
  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);

  const submit = (data) => {
    console.log(data);
    onSubmit(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
};
export default VivaForm;
