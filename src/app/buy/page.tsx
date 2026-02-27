// src/app/buy/page.tsx
"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    CreditCard,
    User,
    Mail,
    Phone,
    MapPin,
    CheckCircle,
    AlertCircle,
    Bike,
    Shield,
    Zap,
    Lock,
    ChevronRight,
    ChevronLeft,
    CheckCircle as CheckCircleIcon,
} from "lucide-react";
import { useBuyForm } from "@/hooks/useBuyForm";
import { models, colors } from "@/schemas/buyFormSchema";
import cn from "@/utils/cn";

export default function BuyPage() {
    const {
        form,
        step,
        nextStep,
        prevStep,
        isSubmitting,
        submitSuccess,
        onSubmit,
        selectedModel,
        selectedColor,
        handleCPFChange,
        handlePhoneChange,
        handleCEPChange,
        handleCardNumberChange,
        handleCardExpiryChange,
    } = useBuyForm();

    const {
        register,
        formState: { errors },
    } = form;

    const stepsList = [
        { label: "Modelo/Cor" },
        { label: "Dados" },
        { label: "Pagamento" },
        { label: "Revisão" },
    ];

    const values = form.getValues();

    if (submitSuccess) {
        const modelName = selectedModel ? models[selectedModel].name : "";
        return (
            <div className="bg-background flex min-h-screen items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="bg-primary-green mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
                    >
                        <CheckCircle className="h-12 w-12 text-white" />
                    </motion.div>
                    <h2 className="mb-4 text-3xl font-bold text-white">
                        Pedido Confirmado! 🎉
                    </h2>
                    <p className="mb-8 text-gray-300">
                        Sua {modelName} será entregue em até 30 dias. Enviamos
                        os detalhes para seu email.
                    </p>
                    <button
                        onClick={() => (window.location.href = "/")}
                        className="bg-primary hover:bg-primary/90 cursor-pointer rounded-lg px-8 py-3 font-semibold text-white transition-colors"
                    >
                        Voltar para Home
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen px-4 py-12">
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12 text-center"
                >
                    <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                        Finalize sua Compra
                    </h1>
                    <p className="text-lg text-gray-300">
                        O futuro sobre duas rodas está a poucos passos
                    </p>
                </motion.div>
                {/* Simplified progress bar */}
                <div className="mb-8 flex items-center justify-between text-sm text-gray-400">
                    <div className="mb-10 flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-center md:gap-0">
                        {stepsList.map((item, index) => {
                            const current = index + 1;
                            const isDone = step > current;
                            const isActive = step === current;

                            return (
                                <div
                                    key={current}
                                    className={cn(
                                        "relative flex items-start md:flex-1 md:items-center",
                                        current === 4 && "md:flex-none"
                                    )}
                                >
                                    {/* Step */}
                                    <div
                                        className={cn(
                                            "z-10 flex items-center gap-3 md:flex-col md:gap-2"
                                        )}
                                    >
                                        {/* Circle */}
                                        <div
                                            className={cn(
                                                "flex h-9 w-9 items-center justify-center border text-lg font-bold transition-all duration-300",
                                                "rounded-md backdrop-blur-sm",

                                                isDone &&
                                                    "bg-primary-green border-primary-green text-white",

                                                isActive &&
                                                    "border-primary bg-primary/10 text-white",

                                                !isDone &&
                                                    !isActive &&
                                                    "border-zinc-600 bg-zinc-900 text-zinc-500"
                                            )}
                                        >
                                            {isDone ? (
                                                <CheckCircleIcon className="h-5 w-5" />
                                            ) : (
                                                current
                                            )}
                                        </div>

                                        {/* Label */}
                                        <span
                                            className={cn(
                                                "text-base font-medium transition md:text-lg",
                                                isActive &&
                                                    "text-text-primary font-bold",
                                                isDone && "text-primary-green",
                                                !isDone &&
                                                    !isActive &&
                                                    "text-zinc-500"
                                            )}
                                        >
                                            {item.label}
                                        </span>
                                    </div>

                                    {/* Connector */}
                                    {index !== stepsList.length - 1 && (
                                        <>
                                            {/* Mobile line (vertical) */}
                                            <div className="absolute top-10 -bottom-4 left-4.25 w-0.5 bg-zinc-700 md:hidden">
                                                <div
                                                    className={cn(
                                                        "w-full transition-all duration-500",
                                                        step > current
                                                            ? "bg-primary-green h-full"
                                                            : "bg-primary h-0"
                                                    )}
                                                />
                                            </div>

                                            {/* Desktop line (horizontal) */}
                                            <div className="relative mx-3 hidden h-0.5 flex-1 bg-zinc-700 md:block">
                                                <div
                                                    className={cn(
                                                        "absolute top-0 left-0 h-full transition-all duration-500",
                                                        step > current
                                                            ? "bg-primary-green w-full"
                                                            : "bg-primary w-0"
                                                    )}
                                                />
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="bg-surface rounded-2xl border border-gray-700 p-6 shadow-xl md:p-8">
                    <form onSubmit={onSubmit} noValidate>
                        <AnimatePresence mode="wait">
                            {/* STEP 1: MODEL & COLOR */}
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <h3 className="mb-6 text-2xl font-bold text-white">
                                        Escolha sua Configuração
                                    </h3>

                                    {/* Modelo (em cima) */}
                                    <div className="mb-8 grid gap-4 md:grid-cols-2">
                                        {Object.entries(models).map(
                                            ([key, model]) => (
                                                <label
                                                    key={key}
                                                    className="group cursor-pointer"
                                                >
                                                    <input
                                                        type="radio"
                                                        value={key}
                                                        {...register("model")}
                                                        className="peer sr-only"
                                                    />
                                                    <div className="rounded-xl border-2 border-gray-700 p-4 transition-all hover:border-gray-500">
                                                        <h4 className="pb-4 text-lg font-semibold text-white">
                                                            {model.name}
                                                        </h4>

                                                        <p className="text-primary-green mt-1 text-2xl font-bold">
                                                            R${" "}
                                                            {model.price.toLocaleString(
                                                                "pt-BR"
                                                            )}
                                                        </p>

                                                        {/* Seção de Specs (Novidade) */}
                                                        <div className="mt-4 flex flex-wrap gap-2">
                                                            {model.specs.map(
                                                                (
                                                                    spec,
                                                                    index
                                                                ) => (
                                                                    <span
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="text-text-muted rounded border border-gray-700 bg-gray-800 px-2 py-1 text-[12px] font-medium tracking-wider uppercase transition-colors group-hover:border-gray-600"
                                                                    >
                                                                        {spec}
                                                                    </span>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                </label>
                                            )
                                        )}
                                    </div>
                                    {errors.model && (
                                        <p className="text-red-400">
                                            {errors.model.message}
                                        </p>
                                    )}

                                    {/* Cor (embaixo) */}
                                    <h4 className="mb-4 text-lg font-semibold text-white">
                                        Cor
                                    </h4>
                                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                        {Object.entries(colors).map(
                                            ([key, color]) => (
                                                <label
                                                    key={key}
                                                    className="group cursor-pointer"
                                                >
                                                    <input
                                                        type="radio"
                                                        value={key}
                                                        {...register("color")}
                                                        className="peer sr-only"
                                                    />
                                                    <div className="peer-checked:border-primary rounded-xl border-2 border-gray-700 p-4 text-center">
                                                        <div
                                                            className="mx-auto mb-2 h-12 w-12 rounded-full border-2 border-gray-600"
                                                            style={{
                                                                backgroundColor:
                                                                    color.hex,
                                                            }}
                                                        />
                                                        <p className="text-sm text-gray-200">
                                                            {color.name}
                                                        </p>
                                                    </div>
                                                </label>
                                            )
                                        )}
                                    </div>
                                    {errors.color && (
                                        <p className="text-red-400">
                                            {errors.color.message}
                                        </p>
                                    )}
                                </motion.div>
                            )}

                            {/* STEP 2: PERSONAL & ADDRESS DATA */}
                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h3 className="mb-6 text-2xl font-bold text-white">
                                        Dados Pessoais e Endereço
                                    </h3>

                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div>
                                            <label className="text-gray-300">
                                                Nome Completo *
                                            </label>
                                            <input
                                                {...register("fullName")}
                                                className="bg-background/50 w-full rounded-lg border border-gray-700 p-3 text-white"
                                            />
                                            {errors.fullName && (
                                                <p className="text-sm text-red-400">
                                                    {errors.fullName.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="text-gray-300">
                                                CPF *
                                            </label>
                                            <input
                                                {...register("cpf")}
                                                onChange={handleCPFChange}
                                                className="bg-background/50 w-full rounded-lg border border-gray-700 p-3 text-white"
                                            />
                                            {errors.cpf && (
                                                <p className="text-sm text-red-400">
                                                    {errors.cpf.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="text-gray-300">
                                                Email *
                                            </label>
                                            <input
                                                {...register("email")}
                                                type="email"
                                                className="bg-background/50 w-full rounded-lg border border-gray-700 p-3 text-white"
                                            />
                                            {errors.email && (
                                                <p className="text-sm text-red-400">
                                                    {errors.email.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="text-gray-300">
                                                Telefone *
                                            </label>
                                            <input
                                                {...register("phone")}
                                                onChange={handlePhoneChange}
                                                className="bg-background/50 w-full rounded-lg border border-gray-700 p-3 text-white"
                                            />
                                            {errors.phone && (
                                                <p className="text-sm text-red-400">
                                                    {errors.phone.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <hr className="my-4 border-gray-700" />

                                    <div className="grid gap-4 md:grid-cols-3">
                                        <div>
                                            <label className="text-gray-300">
                                                CEP *
                                            </label>
                                            <input
                                                {...register("zipCode")}
                                                onChange={handleCEPChange}
                                                className="bg-background/50 w-full rounded-lg border border-gray-700 p-3 text-white"
                                            />
                                            {errors.zipCode && (
                                                <p className="text-sm text-red-400">
                                                    {errors.zipCode.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="text-gray-300">
                                                Rua *
                                            </label>
                                            <input
                                                {...register("street")}
                                                className="bg-background/50 w-full rounded-lg border border-gray-700 p-3 text-white"
                                            />
                                            {errors.street && (
                                                <p className="text-sm text-red-400">
                                                    {errors.street.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="text-gray-300">
                                                Número *
                                            </label>
                                            <input
                                                {...register("number")}
                                                className="bg-background/50 w-full rounded-lg border border-gray-700 p-3 text-white"
                                            />
                                            {errors.number && (
                                                <p className="text-sm text-red-400">
                                                    {errors.number.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="text-gray-300">
                                                Complemento
                                            </label>
                                            <input
                                                {...register("complement")}
                                                className="bg-background/50 w-full rounded-lg border border-gray-700 p-3 text-white"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-gray-300">
                                                Bairro *
                                            </label>
                                            <input
                                                {...register("neighborhood")}
                                                className="bg-background/50 w-full rounded-lg border border-gray-700 p-3 text-white"
                                            />
                                            {errors.neighborhood && (
                                                <p className="text-sm text-red-400">
                                                    {
                                                        errors.neighborhood
                                                            .message
                                                    }
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="text-gray-300">
                                                Cidade/UF *
                                            </label>
                                            <div className="flex gap-2">
                                                <input
                                                    {...register("city")}
                                                    placeholder="Cidade"
                                                    className="bg-background/50 w-2/3 rounded-lg border border-gray-700 p-3 text-white"
                                                />
                                                <input
                                                    {...register("state")}
                                                    placeholder="UF"
                                                    maxLength={2}
                                                    className="bg-background/50 w-1/3 rounded-lg border border-gray-700 p-3 text-white"
                                                />
                                            </div>
                                            {(errors.city || errors.state) && (
                                                <p className="text-sm text-red-400">
                                                    Cidade e estado
                                                    obrigatórios.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 3: PAYMENT */}
                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <h3 className="mb-6 text-2xl font-bold text-white">
                                        Dados de Pagamento
                                    </h3>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="md:col-span-2">
                                            <label className="text-gray-300">
                                                Número do Cartão *
                                            </label>
                                            <input
                                                {...register("cardNumber")}
                                                onChange={
                                                    handleCardNumberChange
                                                }
                                                maxLength={19}
                                                className="bg-background/50 w-full rounded-lg border border-gray-700 p-3 text-white"
                                            />
                                            {errors.cardNumber && (
                                                <p className="text-sm text-red-400">
                                                    {errors.cardNumber.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="text-gray-300">
                                                Nome no Cartão *
                                            </label>
                                            <input
                                                {...register("cardName")}
                                                className="bg-background/50 w-full rounded-lg border border-gray-700 p-3 text-white uppercase"
                                            />
                                            {errors.cardName && (
                                                <p className="text-sm text-red-400">
                                                    {errors.cardName.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="text-gray-300">
                                                Validade (MM/AA) *
                                            </label>
                                            <input
                                                {...register("cardExpiry")}
                                                onChange={
                                                    handleCardExpiryChange
                                                }
                                                maxLength={5}
                                                className="bg-background/50 w-full rounded-lg border border-gray-700 p-3 text-white"
                                            />
                                            {errors.cardExpiry && (
                                                <p className="text-sm text-red-400">
                                                    {errors.cardExpiry.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="text-gray-300">
                                                CVV *
                                            </label>
                                            <input
                                                {...register("cardCvv")}
                                                maxLength={3}
                                                className="bg-background/50 w-full rounded-lg border border-gray-700 p-3 text-white"
                                            />
                                            {errors.cardCvv && (
                                                <p className="text-sm text-red-400">
                                                    {errors.cardCvv.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 4: REVIEW */}
                            {step === 4 && selectedModel && selectedColor && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                >
                                    <h3 className="mb-6 text-2xl font-bold text-white">
                                        Revise seu Pedido
                                    </h3>

                                    <div className="bg-background/50 space-y-4 rounded-lg border border-gray-700 p-6">
                                        <div className="flex justify-between border-b border-gray-700 pb-4">
                                            <div>
                                                <h4 className="text-xl font-bold text-white">
                                                    {models[selectedModel].name}
                                                </h4>
                                                <p className="text-gray-400">
                                                    Cor:{" "}
                                                    {colors[selectedColor].name}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-text-primary text-xl font-bold">
                                                    R${" "}
                                                    {models[
                                                        selectedModel
                                                    ].price.toLocaleString(
                                                        "pt-BR"
                                                    )}
                                                </p>
                                                <p className="text-primary-green text-sm">
                                                    Frete Grátis
                                                </p>
                                            </div>
                                        </div>

                                        <div className="py-4">
                                            <div className="mb-3 flex items-center justify-between">
                                                <h3 className="text-text-primary text-base font-semibold tracking-wide uppercase">
                                                    Endereço de Entrega
                                                </h3>
                                            </div>

                                            <div className="space-y-1 text-sm text-gray-300">
                                                <p className="font-medium text-white">
                                                    {values.street},{" "}
                                                    {values.number}
                                                </p>

                                                {values.complement && (
                                                    <p className="text-gray-400">
                                                        {values.complement}
                                                    </p>
                                                )}

                                                <p>{values.neighborhood}</p>

                                                <p>
                                                    {values.city} -{" "}
                                                    {values.state}
                                                </p>

                                                <p className="text-text-muted mt-2 text-xs">
                                                    CEP: {values.zipCode}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <label className="flex cursor-pointer items-center gap-3">
                                                <input
                                                    type="checkbox"
                                                    {...register("acceptTerms")}
                                                    className="text-primary bg-background focus:ring-primary h-5 w-5 rounded border-gray-700"
                                                />
                                                <span className="text-gray-300">
                                                    Li e aceito os termos de
                                                    compra e política de
                                                    garantia. *
                                                </span>
                                            </label>
                                            {errors.acceptTerms && (
                                                <p className="mt-1 text-sm text-red-400">
                                                    {errors.acceptTerms.message}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Botões de Navegação */}
                        <div className="mt-8 flex justify-between border-t border-gray-700 pt-6">
                            {step > 1 ? (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="flex items-center gap-2 rounded-lg px-6 py-3 font-semibold text-gray-300 transition hover:bg-gray-800"
                                >
                                    <ChevronLeft className="h-5 w-5" /> Voltar
                                </button>
                            ) : (
                                <div></div>
                            )}{" "}
                            {/* Div vazia para alinhar o próximo à direita quando não houver botão voltar */}
                            {step < 4 ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="bg-primary hover:bg-primary/90 flex items-center gap-2 rounded-lg px-8 py-3 font-semibold text-white transition"
                                >
                                    Avançar <ChevronRight className="h-5 w-5" />
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-primary-green flex items-center gap-2 rounded-lg px-8 py-3 font-bold text-white transition hover:opacity-90 disabled:opacity-50"
                                >
                                    {isSubmitting
                                        ? "Processando..."
                                        : "Finalizar Compra"}{" "}
                                    <CheckCircle className="h-5 w-5" />
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
