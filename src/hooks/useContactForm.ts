// src/hooks/useContactForm.ts
"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { maskPhone } from "@/utils/masks";
import {
    getStates,
    getCityByState,
    type State,
    type City,
} from "@/services/getLocations";

// Schema of the contact form using Zod for validation
const contactSchema = z.object({
    name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
    email: z.email("E-mail inválido"),
    phone: z.string().min(14, "Telefone inválido"),
    state: z.string().min(2, "Selecione um estado"),
    city: z.string().min(2, "Selecione uma cidade"),
    message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export function useContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // States and cities for the dropdowns
    const [states, setStates] = useState<State[]>([]);
    const [cities, setCities] = useState<City[]>([]);
    const [loadingCities, setLoadingCities] = useState(false);

    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            state: "",
            city: "",
            message: "",
        },
    });

    const selectedState = form.watch("state");

    // Load states on component mount
    useEffect(() => {
        async function loadStates() {
            const data = await getStates();
            setStates(data);
        }
        loadStates();
    }, []);

    // Load cities when the state changes
    useEffect(() => {
        async function loadCities() {
            if (!selectedState) {
                setCities([]);
                return;
            }

            setLoadingCities(true);
            form.setValue("city", ""); // Clear city when state changes

            const data = await getCityByState(selectedState);
            setCities(data);
            setLoadingCities(false);
        }

        loadCities();
    }, [selectedState, form]);

    // Phone mask handler
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        form.setValue("phone", maskPhone(e.target.value), {
            shouldValidate: true,
        });
    };

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            // Here you would typically call the real API
            await new Promise((resolve) => setTimeout(resolve, 2000));
            console.log("Dados do contato:", data);

            setSubmitSuccess(true);
            form.reset();
            setCities([]); // Clear cities after submission

            // Reset after 3 seconds
            setTimeout(() => setSubmitSuccess(false), 3000);
        } catch (error) {
            console.error("Erro ao enviar:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        form,
        isSubmitting,
        submitSuccess,
        onSubmit: form.handleSubmit(onSubmit),
        handlePhoneChange,
        states,
        cities,
        loadingCities,
    };
}
