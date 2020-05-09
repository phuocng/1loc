import capitalize from './capitalize';

const formatName = (name: string) => capitalize(name.split('-').join(' '));

export default formatName;
