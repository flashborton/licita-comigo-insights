import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

export type NovoLead = {
  nome: string;
  email: string;
  whatsapp?: string | undefined;
  perfil: string;
  objetivo?: string | undefined;
  mensagem?: string | undefined;
  origem: string;
  aceite_lgpd: boolean;
};

export async function salvarLeadNoBanco(lead: NovoLead) {
  const supabase = createClient<Database>(
    process.env["SUPABASE_URL"]!,
    process.env["SUPABASE_PUBLISHABLE_KEY"]!,
    {
      auth: {
        storage: undefined,
        persistSession: false,
        autoRefreshToken: false,
      },
    },
  );

  const { error } = await supabase.from("leads").insert({
    nome: lead.nome,
    email: lead.email,
    whatsapp: lead.whatsapp || null,
    perfil: lead.perfil,
    objetivo: lead.objetivo || null,
    mensagem: lead.mensagem || null,
    origem: lead.origem,
    aceite_lgpd: lead.aceite_lgpd,
  });

  if (error) {
    console.error("Falha ao salvar lead:", error.message);
    return { ok: false as const, error: "Não foi possível enviar agora. Tente novamente." };
  }

  return { ok: true as const };
}
