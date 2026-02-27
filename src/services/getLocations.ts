export interface State {
    id: number;
    sigla: string;
    nome: string;
}

export interface City {
    id: number;
    nome: string;
}

/**
 * Search for all states in Brazil in alphabetical order
 */
export async function getStates(): Promise<State[]> {
    try {
        const res = await fetch(
            "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
        );
        if (!res.ok) return [];
        return await res.json();
    } catch (error) {
        console.error("Error fetching states:", error);
        return [];
    }
}

/**
 * Search for all cities in a given state in alphabetical order
 * @param uf - abbreviation for each state (ex: "SP", "RJ")
 */
export async function getCityByState(uf: string): Promise<City[]> {
    if (!uf) return [];

    try {
        const res = await fetch(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios?orderBy=nome`
        );
        if (!res.ok) return [];
        return await res.json();
    } catch (error) {
        console.error("Error fetching cities:", error);
        return [];
    }
}
