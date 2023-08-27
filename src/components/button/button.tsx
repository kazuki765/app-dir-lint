import { useRef } from "react";
import { AriaButtonOptions, useButton } from "react-aria";

import styles from "./button.module.css";

export type ButtonProps = AriaButtonOptions<"button"> & {
  children: React.ReactNode;
};

export function Button(props: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);
  const { children } = props;

  return (
    <button
      className={`${styles.button} ${buttonProps.className}}`}
      {...buttonProps}
      ref={ref}
    >
      {children}
    </button>
  );
}
