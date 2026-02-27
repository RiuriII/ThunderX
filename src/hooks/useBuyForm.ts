// src/hooks/useBuyForm.ts
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    buyFormSchema,
    type BuyFormData,
    type ModelKey,
    type ColorKey,
} from "@/schemas/buyFormSchema";
import {
    maskCPF,
    maskPhone,
    maskCEP,
    maskCreditCard,
    maskCardExpiry,
} from "@/utils/masks";
import { getAddressByCep } from "@/services/getAddressByCep";

type FieldName = keyof BuyFormData;

export function useBuyForm() {
    const [step, setStep] = useState(1); // Current step state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const form = useForm<BuyFormData>({
        resolver: zodResolver(buyFormSchema),
        mode: "onTouched", // Ajuda na validação por step
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            cpf: "",
            zipCode: "",
            street: "",
            number: "",
            complement: "",
            neighborhood: "",
            city: "",
            state: "",
            cardNumber: "",
            cardName: "",
            cardExpiry: "",
            cardCvv: "",
            model: "Ignition-delta", // Selecionando um default para evitar travar no step 1
            color: "red",
            acceptTerms: false,
        },
    });

    // Mapping of which fields to validate on each step
    const stepFields: Record<number, FieldName[]> = {
        1: ["model", "color"],
        2: [
            "fullName",
            "email",
            "phone",
            "cpf",
            "zipCode",
            "street",
            "number",
            "complement",
            "neighborhood",
            "city",
            "state",
        ],
        3: ["cardNumber", "cardName", "cardExpiry", "cardCvv"],
        4: ["acceptTerms"], // Review
    };

    const nextStep = async () => {
        const fieldsToValidate = stepFields[step];
        const isStepValid = await form.trigger(fieldsToValidate);

        if (isStepValid) {
            setStep((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        setStep((prev) => prev - 1);
    };

    // Mask handlers
    const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        form.setValue("cpf", maskCPF(e.target.value), { shouldValidate: true });
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        form.setValue("phone", maskPhone(e.target.value), {
            shouldValidate: true,
        });
    };

    const handleCEPChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const masked = maskCEP(e.target.value);

        form.setValue("zipCode", masked, { shouldValidate: true });

        const cleanCep = masked.replace(/\D/g, "");

        if (cleanCep.length === 8) {
            const address = await getAddressByCep(cleanCep);

            if (address) {
                form.setValue("street", address.street);
                form.setValue("neighborhood", address.neighborhood);
                form.setValue("city", address.city);
                form.setValue("state", address.state);
            }
        }
    };

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        form.setValue("cardNumber", maskCreditCard(e.target.value), {
            shouldValidate: true,
        });
    };

    const handleCardExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        form.setValue("cardExpiry", maskCardExpiry(e.target.value), {
            shouldValidate: true,
        });
    };

    const onSubmit = async (data: BuyFormData) => {
        setIsSubmitting(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log("Order data:", data);
            setSubmitSuccess(true);
        } catch (error) {
            console.error("Error processing order:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        form,
        step,
        nextStep,
        prevStep,
        setStep,
        isSubmitting,
        submitSuccess,
        onSubmit: form.handleSubmit(onSubmit),
        selectedModel: form.watch("model") as ModelKey | undefined,
        selectedColor: form.watch("color") as ColorKey | undefined,
        handleCPFChange,
        handlePhoneChange,
        handleCEPChange,
        handleCardNumberChange,
        handleCardExpiryChange,
    };
}
