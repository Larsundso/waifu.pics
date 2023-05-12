import fetch from 'node-fetch';

export type SFWCategories =
 | 'waifu'
 | 'neko'
 | 'shinobu'
 | 'megumin'
 | 'bully'
 | 'cuddle'
 | 'cry'
 | 'hug'
 | 'awoo'
 | 'kiss'
 | 'lick'
 | 'pat'
 | 'smug'
 | 'bonk'
 | 'yeet'
 | 'blush'
 | 'smile'
 | 'wave'
 | 'highfive'
 | 'handhold'
 | 'nom'
 | 'bite'
 | 'glomp'
 | 'slap'
 | 'kill'
 | 'kick'
 | 'happy'
 | 'wink'
 | 'poke'
 | 'dance'
 | 'cringe';

export type NSFWCategories = 'waifu' | 'neko' | 'trap' | 'blowjob';

export const baseURL = 'https://api.waifu.pics';

function f(
 category: NSFWCategories,
 options: {
  nsfw: true;
  many: true;
  exclude?: string[];
 },
): Promise<string[]>;
function f(category: SFWCategories, options: { many: true; exclude?: string[] }): Promise<string[]>;
function f(category: NSFWCategories, options: { nsfw: true }): Promise<string>;
function f(category: SFWCategories): Promise<string>;
async function f(
 category: SFWCategories | NSFWCategories,
 options?: { nsfw?: boolean; many?: boolean; exclude?: string[] },
): Promise<string | string[]> {
 const response = await fetch(
  `${baseURL}${options?.many ? '/many' : ''}/${options?.nsfw ? 'nsfw' : 'sfw'}/${category}`,
  {
   headers: { 'Content-Type': 'application/json' },
   method: options?.many ? 'POST' : 'GET',
   body: options?.many ? JSON.stringify({ exclude: options?.exclude ?? [] }) : undefined,
  },
 );

 if (!response.ok) {
  throw new Error(((await response.json()) as { message: string }).message);
 }

 const json = (await response.json()) as { url: string } | { files: string[] };

 if ('files' in json) return json.files;
 return json.url;
}

export default f;
