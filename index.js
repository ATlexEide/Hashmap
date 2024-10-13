class HashMap {
  constructor(size, loadFactor = 0.75) {
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
    }
    return hashCode;
  }
  set(key, value) {
    key = this.hash(key);
    console.log("in SET: " + key);
    this.buckets[key] = value;
    this.currentSize++;
  }
  get(key) {
    key = this.hash(key);
    if (key in this.buckets) return this.buckets[key];
    else return this.noKeyError;
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
    } else console.log(this.noKeyError);
  }
  get length() {
    return this.currentSize;
  }
  clear() {}
  keys() {}
  values() {}
  entries() {}
}

const testMap = new HashMap(16);

testMap.set("test", "valuableValue");
//////////
console.log("BEFORE");
console.log(testMap.buckets);
///////
testMap.remove("test");
///////
console.log("AFTER");
console.log(testMap.buckets);
console.log(testMap.length);
