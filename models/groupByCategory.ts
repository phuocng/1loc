import { Snippet } from './Snippet';

export const groupByCategory = (snippets: Snippet[]) => snippets.reduce((acc, item) => ((acc[item.category] = [...(acc[item.category] || []), item]), acc), {});
