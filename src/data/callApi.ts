import { Models } from "../components/Models";

export namespace CallApi {
    export const baseUrl = "https://restcountries.com/v3.1/";
    const defaultFields = ["name", "region", "population", "flags", "capital","cca3"];
    export async function searchByName(name: string, fields?: string[]) {
        try {
            var counteries = await (await fetch(`${baseUrl}name/${name}?fields=${fields || defaultFields}`)).json() as Models.ICountery[];
            if (!counteries.length)
                counteries = [];
            return counteries;
        } catch {
            return [];
        }

    }
    export async function searchByCodes(codes: string[], fields?: string[]) {
        try {
            var counteries = await (await fetch(`${baseUrl}alpha/?codes=${codes}&fields=${fields || defaultFields}`)).json() as Models.ICountery[];
            if (!counteries.length)
                counteries = [];
            return counteries;
        } catch {
            return [];
        }

    }
    export async function all(fields?: string[]) {
        return await (await fetch(`${baseUrl}all?fields=${fields || defaultFields}`)).json() as Models.ICountery[];
    }

    export async function getOneByCCA3(cca3: string, fields?: string[]) {
        var counteries = await (await fetch(`${baseUrl}alpha/${cca3}?fields=${fields || defaultFields}`)).json() as Models.ICountery[]
        if (!counteries.length)
            counteries = [null];
        return counteries[0];
    }
    
    export async function getAllRegions() {
        var counteries = await (await fetch(baseUrl + `all?fields=region`)).json() as Models.ICountery[];
        if (!counteries.length)
            counteries = [];

        var regions = counteries.map(k => k.region)

        return regions.filter((k, i) => regions.lastIndexOf(k) == i);
    }
}