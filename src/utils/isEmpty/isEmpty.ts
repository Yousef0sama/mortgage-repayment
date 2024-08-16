
export default function isEmpty(field: any): boolean {
  if (field === undefined || field === null) {
    return true;
  }

  if (typeof field === 'string') {
    return field === '';
  }

  if (typeof field === 'number') {
    return field === 0;
  }

  if (Array.isArray(field)) {
    return field.length === 0;
  }

  if (typeof field === 'object') {
    return Object.keys(field).length === 0;
  }

  return false;
}
