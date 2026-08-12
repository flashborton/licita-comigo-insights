import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const leadSchema = z.object({
  nome: z.string().min(2, "Informe seu nome").max(120),
  email: z.string().email("E-mail inválido").max(180),
  whatsapp: z.string().max(40).optional(),
  perfil: z.enum(["empresa_iniciante", "empresa_experiente", "agente_publico", "outro"]),
  objetivo: z.string().max(200).optional(),
  mensagem: z.string().max(2000).optional(),
  origem: z.string().max(60),
  aceite_lgpd: z.literal(true),
});

export const salvarLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const { salvarLeadNoBanco } = await import("./leads.server");
    return salvarLeadNoBanco(data);
  });
