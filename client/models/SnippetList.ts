import data from '../../data/data.json';

interface SnippetModel {
    body: string;
    name: string;
}

interface CategoryModel {
    category: string;
    snippets: SnippetModel[];
}

const SnippetList = (data as any) as CategoryModel[];

export { SnippetList, SnippetModel };
