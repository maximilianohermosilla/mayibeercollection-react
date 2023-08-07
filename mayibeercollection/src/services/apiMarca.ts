import { Marca } from "../interfaces/marca";
import { enviroment } from "../interfaces/enviroment";

const BASE_URL: string = enviroment.urlBase() + "Marca";

export const getMarcas = async (): Promise<Marca[]> => {
    const url = `${BASE_URL}`;
    const response = await fetch(url);
    if (!response.ok){
        throw new Error(response.statusText);        
    }
    const data: Marca[] = await response.json();
    return data;
}