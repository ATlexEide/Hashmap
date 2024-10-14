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
    return hashCode;
  }
  set(key, value) {
    if (key === "") throw this.noKeyError;
    const hash = this.hash(key);
    this.buckets[hash] = { key, value };
    this.currentSize++;
  }
  get(key) {
    key = this.hash(key);
    if (key in this.buckets) return this.buckets[key].value;
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
  clear() {
    this.buckets = {};
    this.currentSize = 0;
  }
  get keys() {
    let keyArray = [];
    for (const bucket in this.buckets) {
      keyArray.push(this.buckets[bucket].key);
    }
    return keyArray;
  }
  get values() {
    let valueArray = [];
    for (const bucket in this.buckets) {
      valueArray.push(this.buckets[bucket].value);
    }
    return valueArray;
  }
  entries() {}
}
const testMap = new HashMap();

testMap.set("Alex", "yipp");
testMap.set("Hector", "yipp");
testMap.set("Anders", "yipp");
console.log(testMap.length);
console.table(testMap.buckets);
console.log(testMap.get("Alex"));
console.log(testMap.keys);
console.log(testMap.values);
