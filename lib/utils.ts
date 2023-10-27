import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toDecimal(value: number | string) {
  const parsedNumber = typeof value === "string" ? parseInt(value) : value;

  return new Intl.NumberFormat("en-US", { style: 'decimal' }).format(parsedNumber)
}
