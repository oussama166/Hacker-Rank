export const ExtraLongFactorial = (n: number): string => {
  let fact: bigint = BigInt(n);
  for (let i = 1; i < n; i++) {
    fact *= BigInt(i);
  }
  let result = fact.toString();
  return result;
};
