import fs from 'fs';
import { join } from 'path';
import { Spacer } from '@1milligram/design';

import { SnippetLayout } from '../layouts/SnippetLayout';
import { loadSnippetsOfCategory } from '../models/loadSnippets';
import { Snippet } from '../models/Snippet';
import { unslugifyCategory } from '../utils/unslugifyCategory';
import { SnippetList } from '../components/SnippetList';

interface CategoryPageParams {
    category: string;
}
interface CategoryPageProps {
    categories: string[];
    category: string;
    snippets: Snippet[];
}

const SNIPPETS_DIR = 'snippets';

const CategoryPage: React.FC<CategoryPageProps> = ({ categories, category, snippets }) => {
    return (
        <SnippetLayout categories={categories} title={unslugifyCategory(category)}>
            <SnippetList snippets={snippets} />
            <Spacer size="medium" />
        </SnippetLayout>
    );
};

export const getStaticProps = async ({ params }: { params: CategoryPageParams }) => {
    const { category } = params;
    const categories = fs.readdirSync(join(SNIPPETS_DIR));
    const snippets = loadSnippetsOfCategory(category);

    return {
        props: {
            categories,
            category,
            snippets,
        },
    };
};

export const getStaticPaths = async () => {
    const paths = [];

    const folders = fs.readdirSync(join(SNIPPETS_DIR));
    folders.forEach((folder) => {
        paths.push({
            params: {
                category: folder,
            },
        });
    });

    return {
        paths,
        fallback: false,
    };
};

export default CategoryPage;
