
export default function checkType(field: any, type: string): boolean {
  if (type === 'array') {
    return Array.isArray(field);
  }
  if (type === 'null') {
    return field === null;
  }
  return typeof field === type;
}
