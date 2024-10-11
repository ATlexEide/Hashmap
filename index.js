class HashMap{
    constructor(size){
        this.size = size;
    }
    hashCode(key){
        let hashCode = 0;
        const primeNumber = 31;
        for(let i = 0; i < key.length ; i++){
            console.log(i)
            hashCode += (primeNumber * key.charCodeAt(i)) % this.size
        }
        return hashCode;
    }
}

const testMap = new HashMap(16);


console.log("Mod: "+testMap.hashCode("test"))
