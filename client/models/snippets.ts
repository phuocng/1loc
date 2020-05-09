import data from '../../data/data.json';

interface Snippet {
    body: string;
    name: string;
}

interface Category {
    category: string;
    snippets: Snippet[];
}

const snippets = (data as any) as Category[];

export default snippets;
export { Snippet };
