export async function getAddressByCep(cep: string) {
    const cleanCep = cep.replace(/\D/g, "");

    if (cleanCep.length !== 8) return null;

    const res = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);

    if (!res.ok) return null;

    const data = await res.json();

    if (data.erro) return null;

    return {
        street: data.logradouro,
        neighborhood: data.bairro,
        city: data.localidade,
        state: data.uf,
    };
}
