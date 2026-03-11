export function convertUtcToDdMmYyyy(utcDate: string): string {
    const date = new Date(utcDate);

    // Extract day, month, and year components
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = date.getUTCFullYear().toString();

    return `${year}-${month}-${day}`;
  }