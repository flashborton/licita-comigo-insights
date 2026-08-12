import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  eyebrow,
  titulo,
  descricao,
  children,
  className,
  tone = "default",
  as: Tag = "section",
}: {
  eyebrow?: string;
  titulo?: string;
  descricao?: string;
  children?: ReactNode;
  className?: string;
  tone?: "default" | "sand" | "navy";
  as?: "section" | "div";
}) {
  return (
    <Tag
      className={cn(
        "py-16 md:py-20",
        tone === "sand" && "bg-sand",
        tone === "navy" && "bg-navy text-navy-foreground",
        className,
      )}
    >
      <div className="container-page">
        {(eyebrow || titulo || descricao) && (
          <div className="max-w-2xl">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {titulo && (
              <h2 className="mt-3 text-2xl font-bold md:text-3xl lg:text-4xl">{titulo}</h2>
            )}
            {descricao && (
              <p
                className={cn(
                  "mt-4 text-base leading-relaxed",
                  tone === "navy" ? "text-navy-foreground/80" : "text-graphite",
                )}
              >
                {descricao}
              </p>
            )}
          </div>
        )}
        {children && <div className={cn(titulo || eyebrow ? "mt-10" : "")}>{children}</div>}
      </div>
    </Tag>
  );
}

export function PageHero({
  eyebrow,
  titulo,
  descricao,
  children,
}: {
  eyebrow: string;
  titulo: string;
  descricao: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="container-page py-16 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
          {titulo}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-foreground/80 md:text-lg">
          {descricao}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
