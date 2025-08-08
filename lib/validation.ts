import * as z from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters.',
  }),
});

export const projectFilterSchema = z.object({
  category: z.string().optional(),
  technology: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type ProjectFilterData = z.infer<typeof projectFilterSchema>;

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};

export const validateName = (name: string): boolean => {
  return name.length >= 2;
};

export const validateMessage = (message: string): boolean => {
  return message.length >= 10;
};