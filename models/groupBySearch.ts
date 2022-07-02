import { Snippet } from './Snippet';

export const groupBySearch = (snippets: Snippet[], query: string) => snippets.reduce((acc, item) => ((acc[item.category] = [...(acc[item.category] || []) , item ].filter(el => el.title.toLowerCase().includes(query.toLowerCase())) ), acc), {});
