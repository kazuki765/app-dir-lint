import { useRouter } from "next/navigation";
import { useCallback, useRef } from "react";

import styles from "./drawer.module.css";

export function Drawer({
  children,
  title,
}: {
  children: React.ReactNode;
  title: React.ReactNode;
}) {
  const router = useRouter();

  const closeRef = useRef(null);

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const handleClose: React.MouseEventHandler = useCallback(
    (e) => {
      if (e.target === closeRef.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, closeRef],
  );
  return (
    <section className={styles.drawer}>
      <div
        onClick={handleClose}
        ref={closeRef}
        className={styles.close}
      >
        <span>❌</span>
      </div>
      <div>
        <div>{title}</div>
        <div>{children}</div>
      </div>
    </section>
  );
}
