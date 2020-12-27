import Prism from 'prismjs';

const highlight = (input: string, language: string) => {
    const lang = language || 'html';
    const value = Prism.highlight(input, Prism.languages[language], language);
    const highlighted = value.replace('&amp;', '&').trim();

    return `<code class="language-${lang}">${highlighted}</code>`;
};

export default highlight;
