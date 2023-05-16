export namespace Models {

    export interface ICounteryName {
        official: string
    }
    export interface ICounteryFlags {
        png: string //url,
        svg: string //url,
    }
    export interface ICountery {
        capital: string;
        region: string;
        population: number;
        id: number;
        name: ICounteryName;
        flags: ICounteryFlags
    }

}