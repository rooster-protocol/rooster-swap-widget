import { Address, encodePacked } from "viem";

export function encodePath(path: (Address | boolean)[]): Address {
  const pathLength = path.length;
  const types: ("address" | "bool")[] = Array(pathLength).fill("address");
  types.forEach(
    (_, index) => (types[index] = index % 2 == 0 ? "address" : "bool")
  );

  return encodePacked(types, path);
}
