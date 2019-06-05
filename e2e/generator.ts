export default function generator(prefix: string): (method: string) => string | number | null {
    return (method: string) => {
        return `${prefix}-${method}-${Math.floor(Math.random() * 2 ** 32).toString(16)}`;
    };
}
