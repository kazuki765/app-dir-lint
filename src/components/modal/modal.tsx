import React, { useRef } from "react";
import { AriaDialogProps, useDialog } from "react-aria";

type DialogProps = AriaDialogProps & {
  title?: React.ReactNode;
  children: React.ReactNode;
};

export function Dialog({ title, children, ...props }: DialogProps) {
  const ref = useRef(null);
  const { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <div
      {...dialogProps}
      ref={ref}
      style={{ padding: 30 }}
    >
      {title && (
        <h3
          {...titleProps}
          style={{ marginTop: 0 }}
        >
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}
