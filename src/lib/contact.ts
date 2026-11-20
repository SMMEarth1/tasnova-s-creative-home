import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please write your name").max(80),
  email: z.string().trim().email("Please enter a valid email"),
  message: z.string().trim().min(10, "Please write a few more words").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Builds a mailto: link that opens the visitor's email app with the message filled in. */
export function buildMailto(to: string, input: ContactInput) {
  const subject = `Hello from ${input.name}`;
  const body = `${input.message}\n\n— ${input.name} (${input.email})`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
