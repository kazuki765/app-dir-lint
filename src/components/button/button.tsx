import { useRef } from "react";
import { AriaButtonOptions, useButton } from "react-aria";

import styles from "./button.module.css";

type BaseButtonProps = AriaButtonOptions<"button">;
export type ButtonProps = Pick<
  BaseButtonProps,
  "onPress" | "isDisabled" | "aria-controls" | "aria-expanded" | "aria-pressed"
> & {
  children: React.ReactNode;
};

export function Button(props: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps, isPressed } = useButton(props, ref);
  const { children } = props;
  return (
    <button
      className={`${styles.button} ${buttonProps.className}}`}
      {...buttonProps}
      ref={ref}
      aria-pressed={isPressed}
      aria-controls={props["aria-controls"]}
      aria-expanded={props["aria-expanded"]}
    >
      {children}
    </button>
  );
}
