import { Marca } from "../interfaces/marca";

const BASE_URL: string = "https://localhost:7011/Marca";

export const getMarcas = async (): Promise<Marca[]> => {
    const url = `${BASE_URL}`;
    const response = await fetch(url);
    if (!response.ok){
        throw new Error(response.statusText);        
    }
    const data: Marca[] = await response.json();
    return data;
}