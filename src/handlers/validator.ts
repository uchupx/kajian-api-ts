import { ValidationError } from "joi"

// Validate a JSON payload against a JSON, JTD Data Type schema
export function validate<T>(schema: any, data: any): [ValidationError | undefined, T] {
  const { error, value } = schema.validate(data)
  return [error, value as T]
}
