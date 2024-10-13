class HashMap{
    constructor(size, loadFactor = 0.75){
        this.size = size;
        this.loadFactor = loadFactor;
    }
    hashCode(key){
        let hashCode = 0;
        const primeNumber = 31;
        for(let i = 0; i < key.length ; i++){
            console.log(i)
                hashCode += (primeNumber * key.charCodeAt(i)) % this.size
        }
        return hashCode;
    };
    set(key, value){

    };
    get(key){

    };
    has(key){

    };
    remove(key){

    };
    length(){

    };
    clear(){

    };
    keys(){

    };
    values(){

    };
    entries(){

    };
}

const testMap = new HashMap(16);


console.log("Mod: "+testMap.hashCode("test"))