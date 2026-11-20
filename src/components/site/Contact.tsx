import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/config/site";
import { buildMailto, contactSchema } from "@/lib/contact";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Errors;
        next[key] ??= issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    window.location.href = buildMailto(site.contact.email, result.data);
    toast.success("Thank you! Your email app is opening with your message.");
    form.reset();
  }

  const details = [
    { icon: Mail, label: site.contact.email, href: `mailto:${site.contact.email}` },
    { icon: Phone, label: site.contact.phone },
    { icon: MapPin, label: site.location },
  ];

  return (
    <section id="contact" className="border-t border-border/70 bg-card">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1fr_1.2fr] md:py-28">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-4xl font-medium text-foreground md:text-5xl">
            {site.contact.title}
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
            {site.contact.intro}
          </p>
          <ul className="mt-10 space-y-4">
            {details.map(({ icon: Icon, label, href }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Icon className="size-4" />
                </span>
                {href ? (
                  <a href={href} className="font-medium text-foreground hover:text-primary">
                    {label}
                  </a>
                ) : (
                  <span className="font-medium text-foreground">{label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="stitch rounded-3xl border-2 bg-background p-7 md:p-9"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Your name" name="name" error={errors.name}>
              <Input id="name" name="name" autoComplete="name" className="h-11 rounded-xl" />
            </Field>
            <Field label="Your email" name="email" error={errors.email}>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="h-11 rounded-xl"
              />
            </Field>
          </div>
          <div className="mt-5">
            <Field label="Message" name="message" error={errors.message}>
              <Textarea id="message" name="message" rows={6} className="rounded-xl" />
            </Field>
          </div>
          <Button type="submit" variant="hero" size="xl" className="mt-7 w-full sm:w-auto">
            Send message <Send />
          </Button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-foreground">
        {label}
      </Label>
      {children}
      {error && (
        <p role="alert" className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
