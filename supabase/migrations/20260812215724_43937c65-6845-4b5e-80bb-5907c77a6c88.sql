CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT,
  perfil TEXT NOT NULL DEFAULT 'outro',
  objetivo TEXT,
  mensagem TEXT,
  origem TEXT NOT NULL DEFAULT 'contato',
  aceite_lgpd BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.leads TO anon;
GRANT INSERT ON public.leads TO authenticated;
GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Qualquer pessoa pode enviar um lead" ON public.leads FOR INSERT TO anon, authenticated WITH CHECK (aceite_lgpd = true);