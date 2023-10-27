import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toNumber(value: number | string): number {
  const parsedNumber = typeof value === 'string' ? parseInt(value) : value

  return parsedNumber
}

export function toDecimal(value: number | string) {
  const parsedNumber = toNumber(value)

  return new Intl.NumberFormat('en-US', { style: 'decimal' }).format(
    parsedNumber
  )
}

export function noDecimal(value: number | string) {
  const parsedNumber = toNumber(value)

  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(parsedNumber)
}
