"use client";
import React, { useState } from "react";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";

const ContactSection = () => {
    const {
        form,
        isSubmitting,
        submitSuccess,
        onSubmit,
        handlePhoneChange,
        states,
        cities,
        loadingCities,
    } = useContactForm();

    return (
        <section
            id="contact"
            className="relative min-h-dvw overflow-hidden py-20"
        >
            {/* Background with modern gradient */}
            <div className="bg-background absolute inset-0 bg-linear-to-t" />

            {/* Particle/shine effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-20 text-center">
                    <div className="mb-6 inline-flex items-center gap-3">
                        <div className="h-1 w-12 bg-white" />
                        <span className="text-sm font-semibold tracking-wider text-white/80 uppercase">
                            Conecte-se Conosco
                        </span>
                        <div className="h-1 w-12 bg-white" />
                    </div>

                    <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                        Experimente o{" "}
                        <span className="text-accent">Futuro</span>
                    </h2>

                    <p className="mx-auto max-w-3xl text-xl text-white/80">
                        Agende um test ride exclusivo ou entre em contato para
                        conhecer mais sobre a revolução ThunderX
                    </p>
                </div>

                <div className="grid items-start gap-12 lg:grid-cols-2">
                    {/* Form */}
                    <div className="rounded-2xl bg-white p-8 shadow-2xl lg:p-10">
                        {submitSuccess ? (
                            <div className="py-12 text-center">
                                <CheckCircle className="text-primary-green mx-auto mb-6 h-20 w-20" />
                                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                                    Mensagem Enviada!
                                </h3>
                                <p className="text-gray-600">
                                    Entraremos em contato em breve para agendar
                                    seu test ride.
                                </p>
                            </div>
                        ) : (
                            <>
                                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                                    Solicite um Test Ride
                                </h3>
                                <p className="mb-8 text-gray-600">
                                    Preencha seus dados e entraremos em contato
                                    para agendar uma experiência exclusiva.
                                </p>

                                <form onSubmit={onSubmit} className="space-y-6">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="mb-2 block text-sm font-medium text-gray-700"
                                            >
                                                Nome Completo *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                required
                                                {...form.register("name")}
                                                className="focus:ring-primary/50 focus:border-primary w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:ring-2"
                                                placeholder="Seu nome"
                                            />
                                            {form.formState.errors.name && (
                                                <p className="mt-1 text-sm text-red-600">
                                                    {
                                                        form.formState.errors
                                                            .name.message
                                                    }
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="mb-2 block text-sm font-medium text-gray-700"
                                            >
                                                E-mail *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                required
                                                {...form.register("email")}
                                                className="focus:ring-primary/50 focus:border-primary w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:ring-2"
                                                placeholder="seu@email.com"
                                            />
                                            {form.formState.errors.email && (
                                                <p className="mt-1 text-sm text-red-600">
                                                    {
                                                        form.formState.errors
                                                            .email.message
                                                    }
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="mb-2 block text-sm font-medium text-gray-700"
                                        >
                                            Telefone/WhatsApp *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            required
                                            {...form.register("phone")}
                                            onChange={handlePhoneChange}
                                            className="focus:ring-primary/50 focus:border-primary w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:ring-2"
                                            placeholder="(11) 99999-9999"
                                        />
                                        {form.formState.errors.phone && (
                                            <p className="mt-1 text-sm text-red-600">
                                                {
                                                    form.formState.errors.phone
                                                        .message
                                                }
                                            </p>
                                        )}
                                    </div>

                                    <div className="grid gap-6 md:grid-cols-2">
                                        <div>
                                            <label
                                                htmlFor="state"
                                                className="mb-2 block text-sm font-medium text-gray-700"
                                            >
                                                Estado *
                                            </label>
                                            <select
                                                id="state"
                                                required
                                                {...form.register("state")}
                                                className="focus:ring-primary/50 focus:border-primary w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-all focus:ring-2"
                                            >
                                                <option value="">
                                                    Selecione seu estado
                                                </option>
                                                {states.map((estado) => (
                                                    <option
                                                        key={estado.id}
                                                        value={estado.sigla}
                                                    >
                                                        {estado.nome}
                                                    </option>
                                                ))}
                                            </select>
                                            {form.formState.errors.state && (
                                                <p className="mt-1 text-sm text-red-600">
                                                    {
                                                        form.formState.errors
                                                            .state.message
                                                    }
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="city"
                                                className="mb-2 block text-sm font-medium text-gray-700"
                                            >
                                                Cidade *
                                            </label>
                                            <select
                                                id="city"
                                                {...form.register("city")}
                                                disabled={
                                                    !form.watch("state") ||
                                                    loadingCities
                                                }
                                                className="focus:ring-primary/50 focus:border-primary w-full rounded-lg border border-gray-300 bg-white px-4 py-3 transition-all focus:ring-2 disabled:cursor-not-allowed disabled:bg-gray-100"
                                            >
                                                <option value="">
                                                    {loadingCities
                                                        ? "Carregando cidades..."
                                                        : !form.watch("state")
                                                          ? "Selecione um estado primeiro"
                                                          : "Selecione sua cidade"}
                                                </option>
                                                {cities.map((cidade) => (
                                                    <option
                                                        key={cidade.id}
                                                        value={cidade.nome}
                                                    >
                                                        {cidade.nome}
                                                    </option>
                                                ))}
                                            </select>
                                            {form.formState.errors.city && (
                                                <p className="mt-1 text-sm text-red-600">
                                                    {
                                                        form.formState.errors
                                                            .city.message
                                                    }
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="mb-2 block text-sm font-medium text-gray-700"
                                        >
                                            Mensagem (Opcional)
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={4}
                                            {...form.register("message")}
                                            className="focus:ring-primary/50 focus:border-primary w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:ring-2"
                                            placeholder="Alguma observação especial ou pergunta?"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="from-primary to-primary/80 hover:shadow-primary/30 flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg bg-linear-to-r py-4 font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
                                    >
                                        <Send size={20} />
                                        AGENDAR TEST RIDE
                                    </button>
                                </form>
                            </>
                        )}
                    </div>

                    {/* Informações de Contato */}
                    <div className="text-white">
                        <div className="mb-12">
                            <h3 className="mb-6 text-3xl font-bold">
                                Entre em{" "}
                                <span className="text-accent">Contato</span>
                            </h3>
                            <p className="text-lg text-white/90">
                                Tem dúvidas sobre especificações técnicas,
                                financiamento ou quer conhecer nossa linha
                                completa? Nossa equipe está pronta para atender
                                você.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                                    <Phone className="text-accent" size={24} />
                                </div>
                                <div>
                                    <h4 className="mb-2 text-lg font-bold">
                                        Telefone
                                    </h4>
                                    <p className="text-white/80">
                                        +55 (11) 4002-8922
                                    </p>
                                    <p className="text-sm text-white/60">
                                        Segunda a Sexta, 9h às 18h
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                                    <Mail className="text-accent" size={24} />
                                </div>
                                <div>
                                    <h4 className="mb-2 text-lg font-bold">
                                        E-mail
                                    </h4>
                                    <p className="text-white/80">
                                        contato@thunderx.com
                                    </p>
                                    <p className="text-white/80">
                                        vendas@thunderx.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                                    <MapPin className="text-accent" size={24} />
                                </div>
                                <div>
                                    <h4 className="mb-2 text-lg font-bold">
                                        Endereço
                                    </h4>
                                    <p className="text-white/80">
                                        Av. Paulista, 1000 - Bela Vista
                                        <br />
                                        São Paulo - SP, 01310-100
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Elementos decorativos */}
            <div className="from-background absolute right-0 bottom-0 left-0 h-32 bg-linear-to-t to-transparent" />
        </section>
    );
};

export default ContactSection;
