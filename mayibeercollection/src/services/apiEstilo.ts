import { Estilo } from "../interfaces/estilo";
import { enviroment } from "../interfaces/enviroment";

const BASE_URL: string = enviroment.urlBase() + "Estilo";

export const getEstilos = async (): Promise<Estilo[]> => {
    const url = `${BASE_URL}`;
    const response = await fetch(url);
    if (!response.ok){
        throw new Error(response.statusText);        
    }
    const data: Estilo[] = await response.json();
    return data;
}