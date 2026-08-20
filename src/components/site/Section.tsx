import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  titulo,
  descricao,
  children,
  className,
  tone = "default",
  as: Tag = "section",
}: {
  id?: string;
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
      id={id}
      className={cn(
        "py-16 md:py-24",
        tone === "sand" && "bg-sand",
        tone === "navy" && "bg-navy text-navy-foreground",
        className,
      )}
    >
      <div className="container-page">
        {(eyebrow || titulo || descricao) && (
          <div className="max-w-3xl">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {titulo && (
              <h2 className="mt-4 text-[2rem] leading-tight font-bold md:text-[2.25rem]">
                {titulo}
              </h2>
            )}
            {descricao && (
              <p
                className={cn(
                  "mt-5 text-lg leading-relaxed",
                  tone === "navy" ? "text-navy-foreground/85" : "text-graphite",
                )}
              >
                {descricao}
              </p>
            )}
          </div>
        )}
        {children && <div className={cn(titulo || eyebrow ? "mt-12" : "")}>{children}</div>}
      </div>
    </Tag>
  );
}

export function PageHero({
  eyebrow,
  titulo,
  descricao,
  imagem,
  alt,
  children,
}: {
  eyebrow: string;
  titulo: string;
  descricao: string;
  imagem?: string;
  alt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      {imagem && (
        <>
          <img
            src={imagem}
            alt={alt ?? ""}
            className="absolute inset-0 size-full object-cover opacity-25"
            loading="eager"
          />
          <div className="absolute inset-0 bg-navy/70" />
        </>
      )}
      <div className="relative container-page py-16 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-[2.5rem] leading-[1.1] font-bold md:text-[3rem]">
          {titulo}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-foreground/85">
          {descricao}
        </p>
        {children && <div className="mt-9">{children}</div>}
      </div>
    </section>
  );
}
