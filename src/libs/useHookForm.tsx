import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { ZodSchema } from "zod";

type HookFormProps<T> = {
  schema: ZodSchema<T>;
  onSubmit: (data: T) => void;
};
export function useHookForm<T extends FieldValues>({
  schema,
  onSubmit,
}: HookFormProps<T>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(schema),
  });

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
  };
}
