import { enviroment } from "../interfaces/enviroment";
import { ReporteResponse } from "../interfaces/reporteCervezas";

const BASE_URL: string = enviroment.urlBase() + "Reporte";

export const getReporte = async (): Promise<ReporteResponse[]> => {
    const url = `${BASE_URL}`;
    const response = await fetch(url);
    if (!response.ok){
        throw new Error(response.statusText);        
    }
    const data: ReporteResponse[] = await response.json();
    return data;
}