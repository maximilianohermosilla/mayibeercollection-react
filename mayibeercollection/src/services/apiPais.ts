import { Pais } from "../interfaces/pais";
import { enviroment } from "../interfaces/enviroment";

const BASE_URL: string = enviroment.urlBase() + "Pais";

export const getPaises = async (): Promise<Pais[]> => {
    const url = `${BASE_URL}`;
    const response = await fetch(url);
    if (!response.ok){
        throw new Error(response.statusText);        
    }
    const data: Pais[] = await response.json();
    return data;
}