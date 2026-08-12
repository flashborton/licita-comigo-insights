import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { salvarLead } from "@/lib/leads.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Perfil = "empresa_iniciante" | "empresa_experiente" | "agente_publico" | "outro";

const perfis: { value: Perfil; label: string }[] = [
  { value: "empresa_iniciante", label: "Empresa que quer começar a licitar" },
  { value: "empresa_experiente", label: "Empresa que já participa de licitações" },
  { value: "agente_publico", label: "Agente público" },
  { value: "outro", label: "Outro" },
];

export function LeadForm({
  origem,
  titulo = "Fale com o Artur",
  descricao = "Conte rapidamente o seu cenário. A resposta vem por e-mail ou WhatsApp.",
  mostrarMensagem = true,
  botao = "Enviar",
}: {
  origem: string;
  titulo?: string;
  descricao?: string;
  mostrarMensagem?: boolean;
  botao?: string;
}) {
  const navigate = useNavigate();
  const enviar = useServerFn(salvarLead);
  const [perfil, setPerfil] = useState<Perfil>("empresa_iniciante");
  const [aceite, setAceite] = useState(false);
  const [enviando, setEnviando] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!aceite) {
      toast.error("É necessário aceitar o uso dos dados para contato.");
      return;
    }

    const form = new FormData(event.currentTarget);
    setEnviando(true);
    try {
      const resultado = await enviar({
        data: {
          nome: String(form.get("nome") ?? "").trim(),
          email: String(form.get("email") ?? "").trim(),
          whatsapp: String(form.get("whatsapp") ?? "").trim() || undefined,
          objetivo: String(form.get("objetivo") ?? "").trim() || undefined,
          mensagem: String(form.get("mensagem") ?? "").trim() || undefined,
          perfil,
          origem,
          aceite_lgpd: true,
        },
      });

      if (!resultado.ok) {
        toast.error(resultado.error);
        return;
      }

      navigate({ to: "/obrigado" });
    } catch (erro) {
      console.error(erro);
      toast.error("Confira os dados informados e tente novamente.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-border bg-card p-6 shadow-sm md:p-8"
    >
      <h3 className="text-xl font-bold text-card-foreground">{titulo}</h3>
      <p className="mt-2 text-sm text-graphite">{descricao}</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <Label htmlFor={`${origem}-nome`}>Nome</Label>
          <Input id={`${origem}-nome`} name="nome" required maxLength={120} className="mt-1.5" />
        </div>
        <div className="sm:col-span-1">
          <Label htmlFor={`${origem}-email`}>E-mail</Label>
          <Input
            id={`${origem}-email`}
            name="email"
            type="email"
            required
            maxLength={180}
            className="mt-1.5"
          />
        </div>
        <div className="sm:col-span-1">
          <Label htmlFor={`${origem}-whatsapp`}>WhatsApp</Label>
          <Input
            id={`${origem}-whatsapp`}
            name="whatsapp"
            inputMode="tel"
            placeholder="(11) 90000-0000"
            className="mt-1.5"
          />
        </div>
        <div className="sm:col-span-1">
          <Label htmlFor={`${origem}-perfil`}>Seu perfil</Label>
          <Select value={perfil} onValueChange={(v) => setPerfil(v as Perfil)}>
            <SelectTrigger id={`${origem}-perfil`} className="mt-1.5 w-full">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              {perfis.map((p) => (
                <SelectItem key={p.value} value={p.value}>
                  {p.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor={`${origem}-objetivo`}>Seu objetivo principal</Label>
          <Input
            id={`${origem}-objetivo`}
            name="objetivo"
            maxLength={200}
            placeholder="Ex.: começar a vender para prefeituras"
            className="mt-1.5"
          />
        </div>
        {mostrarMensagem && (
          <div className="sm:col-span-2">
            <Label htmlFor={`${origem}-mensagem`}>Mensagem</Label>
            <Textarea
              id={`${origem}-mensagem`}
              name="mensagem"
              rows={4}
              maxLength={2000}
              className="mt-1.5"
            />
          </div>
        )}
      </div>

      <div className="mt-5 flex items-start gap-3">
        <Checkbox
          id={`${origem}-lgpd`}
          checked={aceite}
          onCheckedChange={(v) => setAceite(v === true)}
        />
        <Label
          htmlFor={`${origem}-lgpd`}
          className="text-xs leading-relaxed font-normal text-graphite"
        >
          Autorizo o contato e o tratamento dos meus dados para essa finalidade, conforme a LGPD
          (Lei 13.709/2018).
        </Label>
      </div>

      <Button
        type="submit"
        disabled={enviando}
        className="mt-6 w-full bg-navy text-navy-foreground hover:bg-navy/90 sm:w-auto"
      >
        {enviando ? "Enviando..." : botao}
      </Button>
    </form>
  );
}
