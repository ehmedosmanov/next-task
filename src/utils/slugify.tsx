export function slugify(title: string): string {
    return title
        .trim()
        .toLocaleLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
}
