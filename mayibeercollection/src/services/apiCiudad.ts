import { Ciudad } from "../interfaces/ciudad";

const BASE_URL: string = "https://localhost:7011/Ciudad";

export const getCiudades = async (): Promise<Ciudad[]> => {
    const url = `${BASE_URL}`;
    const response = await fetch(url);
    if (!response.ok){
        throw new Error(response.statusText);        
    }
    const data: Ciudad[] = await response.json();
    return data;
}