export namespace Models {

    export interface ICounteryName {
        common: string;
        official: string;
        nativeName: {
            [lang: string]: {
                common: string;
                official: string;
            }
        }
    }
    export interface ICounteryFlags {
        png: string //url,
        svg: string //url,
    }
    export interface ICountery {
        borders: string[];
        currencies: {
            [unit: string]: {
                name: string;
                symbol: string;
            }
        };
        tld: string[];
        languages: { [lang: string]: string };
        capital: string;
        region: string;
        subregion: string;
        population: number;
        id: number;
        name: ICounteryName;
        flags: ICounteryFlags,
        cca3: string;
    }

}