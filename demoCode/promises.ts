function getStringWithPrefix(prefix: string): string {
  return `'${prefix}' was prefixed to this string`;
}

console.log(getStringWithPrefix("this is a prefix"));

// eslint-disable-next-line @typescript-eslint/require-await
async function promiseMeAPrefix(prefix: string): Promise<string> {
  return `'${prefix}' promised me a prefix`;
}

(async function (fn: CallableFunction) {
  console.log(await fn("dave"));
})(promiseMeAPrefix);
