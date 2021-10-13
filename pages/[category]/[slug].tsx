import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { NextPagination, Pagination, PrevPagination, Spacer } from '@1milligram/design';

import { Markdown } from '../../components/Markdown';
import { SnippetLayout } from '../../layouts/SnippetLayout';
import { loadSnippets } from '../../models/loadSnippets';
import { groupByCategory } from '../../models/groupByCategory';
import { Snippet } from '../../models/Snippet';
import { slugifyCategory } from '../../utils/slugifyCategory';

interface SnippetPageParams {
    category: string;
    slug: string;
}
interface SnippetPageProps {
    categories: string[];
    content: string;
    frontMatter: { [key: string]: any };
    prevSnippet?: Snippet;
    nextSnippet?: Snippet;
    snippet: Snippet;
}

const SNIPPETS_DIR = 'snippets';

const SnippetPage: React.FC<SnippetPageProps> = ({ categories, content, frontMatter, prevSnippet, nextSnippet, snippet }) => {
    return (
        <SnippetLayout categories={categories} keywords={frontMatter ? frontMatter.keywords : ''} title={snippet.title}>
            <Markdown>{content}</Markdown>
            <Spacer size="medium" />
            <Pagination>{prevSnippet && <PrevPagination href={`/${slugifyCategory(prevSnippet.category)}/${prevSnippet.slug}`}>{prevSnippet.title}</PrevPagination>}</Pagination>
            <Pagination>{nextSnippet && <NextPagination href={`/${slugifyCategory(nextSnippet.category)}/${nextSnippet.slug}`}>{nextSnippet.title}</NextPagination>}</Pagination>
        </SnippetLayout>
    );
};

export const getStaticProps = async ({ params }: { params: SnippetPageParams }) => {
    const snippets = loadSnippets();

    const { category, slug } = params;
    const fileContents = fs.readFileSync(join(SNIPPETS_DIR, category, `${slug}.md`));
    const { data: frontMatter, content } = matter(fileContents);

    // Determine the next and previous posts
    const index = snippets.findIndex((s) => s.slug === slug);
    const categories = Object.keys(groupByCategory(snippets));

    const prevSnippet = index <= 0 ? null : snippets[index - 1];
    const nextSnippet = index >= snippets.length - 1 ? null : snippets[index + 1];

    return {
        props: {
            categories,
            content,
            frontMatter,
            prevSnippet,
            nextSnippet,
            snippet: snippets[index],
        },
    };
};

export const getStaticPaths = async () => {
    const paths = [];

    const folders = fs.readdirSync(join(SNIPPETS_DIR));
    folders.forEach((folder) => {
        fs.readdirSync(join(SNIPPETS_DIR, folder)).forEach((file) => {
            paths.push({
                params: {
                    category: folder,
                    slug: file.replace('.md', ''),
                },
            });
        });
    });

    return {
        paths,
        fallback: false,
    };
};

export default SnippetPage;
