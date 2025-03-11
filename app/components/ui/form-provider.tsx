import React from 'react'
import { FormProvider as Provider } from 'react-hook-form'
import type { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form'

type FormProviderProps<FormState extends FieldValues> = {
  methods: UseFormReturn<FormState>
  onSubmit: SubmitHandler<FormState>
  children: React.ReactNode
}

export const FormProvider = <FormState extends FieldValues>(
  props: FormProviderProps<FormState>
) => {
  const {
    methods,
    methods: { handleSubmit },
    onSubmit,
    children,
  } = props

  return (
    <Provider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </Provider>
  )
}
