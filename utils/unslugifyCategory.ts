const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const unslugifyCategory = (category: string) => category.split('-').map(s => capitalize(s)).join(' ');
