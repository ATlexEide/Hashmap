import { LinkedList } from "./linkedList.js";
import { Node } from "./linkedList.js";
class HashMap {
  constructor(size = 16, loadFactor = 0.75) {
    this.size = size;
    this.loadFactor = loadFactor;
    this.maxLoad = this.size * this.loadFactor;
    this.buckets = {};
    this.currentSize = 0;
    this.init = () => {
      for (let i = 0; i < this.size; i++) {
        this.buckets[i] = new LinkedList();
      }
    };
    this.init();
    this.noKeyError = "Error: No Key (Key does not exist)";
  }
  scale(){
     const cache = this.buckets;
     this.buckets = {};
    // TODO: ADD LOGIC
    this.size += this.maxLoad;
    console.log(this.size);
    this.init();
    this.repopulate(cache);
  }
  repopulate(cachedBuckets){
    for(const bucket in cachedBuckets){
      const node = cachedBuckets[bucket];
      
      if (!node.head) {
        
      } else if(node.next){
        while(!node.next)
        {
          const key = node.next.key;
          const value = node.next.value;
          node.next = node.next.next
  this.set(key,value)
        }
        
      }
    }
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
    if (!this.buckets[hash].hasKey(key)) {
      this.buckets[hash].append(new Node(key, value));
      this.currentSize++;
    } else if (
      this.buckets[hash].find(key).key === key &&
      this.buckets[hash].find(key).value === value
    ) {
      this.buckets[hash].find(key).value = value;
    } else {
      this.buckets[hash].append(new Node(key, value));
      this.currentSize++;
    }
    if (this.currentSize >= this.maxLoad) this.scale();
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
      const currBucket = this.buckets[bucket];
      if (currBucket.head && !currBucket.next) {
        keyArray.push(currBucket.head.key);
      } else {
        while (currBucket.next !== null) {
          keyArray.push(currBucket.next.key);
          currBucket.next = currBucket.next.next;
        }
      }
    }
    return keyArray;
  }
  get values() {
    let valueArray = [];
    for (const bucket in this.buckets) {
      const currBucket = this.buckets[bucket];
      if (currBucket.head && !currBucket.next) {
        valueArray.push(currBucket.head.value);
      } else {
        while (currBucket.next !== null) {
          valueArray.push(currBucket.next.value);
          currBucket.next = currBucket.next.next;
        }
      }
    }
    return valueArray;
  }
  get entries() {
    let entryArray = [];
    for (const bucket in this.buckets) {
      const currBucket = this.buckets[bucket];
      if (currBucket.head && !currBucket.next.next) {
        entryArray.push([currBucket.head.key, currBucket.head.value]);
      } else {
        while (currBucket.next !== null) {
          entryArray.push([currBucket.next.key, currBucket.next.value]);
          currBucket.next = currBucket.next.next;
        } 
      }
    }
    return entryArray;
  }
}
const testMap = new HashMap();

testMap.set("Alex", "abc");
testMap.set("Hector", "yipp");
testMap.set("Carla", "yipp");
testMap.set("Carlos", "yipp");
testMap.set("Alex", "abc");




/////////////////////////////////////////
 testMap.set("apple", "red");
 testMap.set("banana", "yellow");
 testMap.set("carrot", "orange");
 testMap.set("dog", "brown");
 testMap.set("elephant", "gray");
 testMap.set("frog", "green");
 testMap.set("grape", "purple");
 testMap.set("hat", "black");
//  testMap.set("icecream", "white");
//  testMap.set("jacket", "blue");
//  testMap.set("kite", "pink");
//  testMap.set("lion", "golden");
console.table(testMap.buckets);
console.table(testMap.entries);
console.table(testMap.currentSize);