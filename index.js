class HashMap {
  constructor(size, loadFactor = 0.75) {
    this.size = size;
    this.loadFactor = loadFactor;
    this.currentSize = 0;
    this.buckets = [];
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
    this.buckets.push([this.hash(key), value]);
    this.currentSize++;
  }
  get(key) {
    console.log(this.hash(key));
    for (const bucket of this.buckets) {
      if (bucket[0] === this.hash(key)) return bucket[1];
    }
    return "Error: Key not valid (no match)";
  }
  has(key) {}
  remove(key) {}
  length() {}
  clear() {}
  keys() {}
  values() {}
  entries() {}
}

const testMap = new HashMap(16);

testMap.set("test", "valuableValue");
testMap.set("test2", "valuableValue2");
console.log(testMap.currentSize);
console.log(testMap.buckets[0]);
console.log(testMap.get("test22"));
