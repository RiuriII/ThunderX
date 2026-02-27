// src/schemas/buyFormSchema.ts
import { z } from "zod";

export const buyFormSchema = z.object({
    // Personal Information
    fullName: z.string().min(3, "Nome completo é obrigatório"),
    email: z.email("Email inválido"),
    phone: z
        .string()
        .min(10, "Telefone inválido")
        .regex(/^[0-9\s\-\(\)]+$/, "Use apenas números"),
    cpf: z
        .string()
        .min(11, "CPF inválido")
        .regex(/^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/, "CPF inválido"),

    // Address
    zipCode: z.string().min(8, "CEP é obrigatório"),
    street: z.string().min(3, "Rua é obrigatória"),
    number: z.string().min(1, "Número é obrigatório"),
    complement: z.string().optional(),
    neighborhood: z.string().min(2, "Bairro é obrigatório"),
    city: z.string().min(2, "Cidade é obrigatória"),
    state: z.string().length(2, "Estado deve ter 2 letras"),

    // Payment
    cardNumber: z
        .string()
        .min(16, "Número do cartão inválido")
        .regex(/^[0-9\s]+$/, "Use apenas números"),
    cardName: z.string().min(3, "Nome no cartão é obrigatório"),
    cardExpiry: z
        .string()
        .regex(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, "Use o formato MM/AA"),
    cardCvv: z
        .string()
        .min(3, "CVV deve ter 3 dígitos")
        .max(4, "CVV deve ter 3 ou 4 dígitos"),

    // Model and Color - FIXED
    // More compatible version
    model: z.enum(["Ignition-delta", "Ignition-delta Pro"], {
        error: () => ({ message: "Seleção de modelo é obrigatória" }),
    }),
    color: z.enum(["red", "black", "silver", "blue"]),

    // Terms
    acceptTerms: z.boolean().refine((val) => val === true, {
        message: "Você deve aceitar os termos",
    }),
});

export type BuyFormData = z.infer<typeof buyFormSchema>;

export const models = {
    "Ignition-delta": {
        name: "Ignition Δ Edition",
        price: 189000,
        specs: ["210 kW", "360 km/h", "Garantia 5 anos"],
    },
} as const;

export const colors = {
    red: { name: "Red Ignition", hex: "#a61103" },
    black: { name: "Black Absolute", hex: "#1c1615" },
    silver: { name: "Silver Metallic ", hex: "#c9b8b6" },
    blue: { name: "Blue Electric", hex: "#3b82f6" },
} as const;

export type ModelKey = keyof typeof models;
export type ColorKey = keyof typeof colors;
