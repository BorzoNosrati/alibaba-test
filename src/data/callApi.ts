import { Models } from "../Components/Models";

export namespace CallApi {
    export const baseUrl = "https://restcountries.com/v3.1/";
    const defaultFields = ["name", "region", "population", "flags", "capital"];
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
    export async function all(fields?: string[]) {
        return await (await fetch(`${baseUrl}all?fields=${fields || defaultFields}`)).json()
    }
    export async function getAllRegions() {
        var counteries = await (await fetch(baseUrl + `all?fields=region`)).json() as Models.ICountery[];
        if (!counteries.length)
            counteries = [];

        var regions = counteries.map(k => k.region)

        return regions.filter((k, i) => regions.lastIndexOf(k) == i);
    }
}