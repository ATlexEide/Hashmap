class HashMap {
  constructor(size = 16, loadFactor = 0.75) {
    this.size = size;
    this.loadFactor = loadFactor;
    this.currentSize = 0;
    this.buckets = {};
    this.noKeyError = "Error: No Key (Key does not exist)";
  }
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % this.size;
    }
    console.log(hashCode);
    return hashCode;
  }
  set(key, value) {
    if (key === "") throw this.noKeyError;
    const keyName = key;
    key = this.hash(key);
    console.log("in SET: " + key);
    this.buckets[key] = { keyName: value };
    this.currentSize++;
  }
  get(key) {
    key = this.hash(key);
    if (key in this.buckets) return Object.values(this.buckets[key]);
    else throw this.noKeyError;
  }
  has(key) {
    key = this.hash(key);
    if (key in this.buckets) return true;
    else return false;
  }
  remove(key) {
    key = this.hash(key);
    if (key in this.buckets) {
      delete this.buckets[key];
      this.currentSize--;
    } else throw this.noKeyError;
  }
  get length() {
    return this.currentSize;
  }
  clear() {}
  keys() {}
  values() {}
  entries() {}
}

const testMap = new HashMap();

testMap.set("yippie", "yipp");
console.log("get:");
console.log(testMap.get("yippie"));
console.log(testMap.buckets);
