// app/components/Section.tsx
import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id: string;
  className?: string;
  center?: boolean;
}>;

export default function Section({
  id,
  className = "",
  center = true,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={[
        "relative min-h-dvh snap-start",
        center ? "flex items-center" : "",
        className,
      ].join(" ")}
    >
      {children}
    </section>
  );
}
