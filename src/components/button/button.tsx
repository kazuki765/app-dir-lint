import { useRef } from "react";
import { AriaButtonOptions, useButton } from "react-aria";

export type ButtonProps = AriaButtonOptions<"button"> & {
  children: React.ReactNode;
};

export function Button(props: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);
  const { children } = props;

  return (
    <button
      {...buttonProps}
      ref={ref}
    >
      {children}
    </button>
  );
}
