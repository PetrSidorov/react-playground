export function toShuffled<T>(array: T[]): T[] {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .toSorted((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
export function decodeEntities(encodedText: string) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = encodedText;
  return textarea.value;
}

export function decodeObjectValues(obj: stringKeyStringValueT) {
  const decodedObj: stringKeyStringValueT = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      decodedObj[key] = decodeEntities(obj[key]);
    }
  }

  return decodedObj;
}

const myObject = {
  key1: "Where is the &quot;Sonoran Desert&quot; located?",
  key2: "Another &quot;example&quot; with quotes.",
};

const decodedObject = decodeObjectValues(myObject);

console.log(decodedObject);
