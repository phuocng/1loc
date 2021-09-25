export const classNames = (classes: { [clazz: string]: boolean }): string => {
    const result: string[] = [];

    Object.keys(classes).forEach((clazz) => {
        if (clazz && classes[clazz]) {
            result.push(clazz);
        }
    });

    return result.join(' ');
};
