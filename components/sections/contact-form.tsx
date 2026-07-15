"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";

type FormState = "idle" | "submitting" | "success" | "error";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialValues: FormValues = { name: "", email: "", phone: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [state, setState] = useState<FormState>("idle");

  function validate(v: FormValues) {
    const next: Partial<FormValues> = {};
    if (!v.name.trim()) next.name = "Ingresa tu nombre.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) next.email = "Ingresa un correo válido.";
    if (!v.phone.trim()) next.phone = "Ingresa un teléfono de contacto.";
    if (!v.message.trim() || v.message.trim().length < 10)
      next.message = "Cuéntanos brevemente qué necesitas (mín. 10 caracteres).";
    return next;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validation = validate(values);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    // NOTE: Cliente-only. Aquí se conectará el endpoint / servicio de envío
    // (por ejemplo una API route en app/api/contact/route.ts o un proveedor externo)
    setState("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setState("success");
    setValues(initialValues);
  }

  return (
    <section className="bg-surface py-24 sm:py-28" id="contacto">
      <Container className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <SectionTitle
            eyebrow="Contacto"
            title="Estamos aquí para ayudarte"
            description="Escríbenos y un especialista se pondrá en contacto contigo a la brevedad."
          />

          <ul className="mt-10 space-y-5">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-accent-600" />
              <div>
                <p className="text-sm font-semibold text-ink">Teléfono / WhatsApp</p>
                <p className="text-sm text-ink/60">+51 {siteConfig.phoneWhatsapp}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-accent-600" />
              <div>
                <p className="text-sm font-semibold text-ink">Correo</p>
                <p className="text-sm text-ink/60">contacto@gruporufasto.com.pe</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-accent-600" />
              <div>
                <p className="text-sm font-semibold text-ink">Cobertura</p>
                <p className="text-sm text-ink/60">{siteConfig.locations.join(" · ")}</p>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-border bg-background p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Nombre completo"
                name="name"
                value={values.name}
                onChange={(v) => setValues((s) => ({ ...s, name: v }))}
                error={errors.name}
              />
              <Field
                label="Teléfono"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={(v) => setValues((s) => ({ ...s, phone: v }))}
                error={errors.phone}
              />
              <Field
                label="Correo electrónico"
                name="email"
                type="email"
                value={values.email}
                onChange={(v) => setValues((s) => ({ ...s, email: v }))}
                error={errors.email}
                className="sm:col-span-2"
              />
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={(e) => setValues((s) => ({ ...s, message: e.target.value }))}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
                  placeholder="Cuéntanos qué servicio necesitas..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-xs text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="mt-6 w-full sm:w-auto"
              disabled={state === "submitting"}
            >
              {state === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                "Enviar mensaje"
              )}
            </Button>

            {state === "success" && (
              <p role="status" className="mt-4 flex items-center gap-2 text-sm font-medium text-primary-600">
                <CheckCircle2 className="h-4 w-4" />
                ¡Gracias! Tu mensaje fue registrado, te contactaremos pronto.
              </p>
            )}
          </form>
        </Reveal>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  className,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary"
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
