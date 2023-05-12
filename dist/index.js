import fetch from 'node-fetch';
export const baseURL = 'https://api.waifu.pics';
async function f(category, options) {
    const response = await fetch(`${baseURL}${options?.many ? '/many' : ''}/${options?.nsfw ? 'nsfw' : 'sfw'}/${category}`, {
        headers: { 'Content-Type': 'application/json' },
        method: options?.many ? 'POST' : 'GET',
        body: JSON.stringify({ exclude: options?.exclude ?? [] }),
    });
    if (!response.ok) {
        throw new Error((await response.json()).message);
    }
    const json = (await response.json());
    if ('files' in json)
        return json.files;
    return json.url;
}
export default f;
//# sourceMappingURL=index.js.map