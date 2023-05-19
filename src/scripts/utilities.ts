
export interface Object {
    propeties: string[]
    getProps():string[]
}

Object.defineProperty(Object.prototype, "properties", {
    get() {
        return Object.getOwnPropertyNames(this)
            //.filter(k => k.match('[A-zا-ی ]'))
       
    }
})


