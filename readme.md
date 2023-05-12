# Waifu.Pics API Wrapper

An up-to-date unofficial wrapper for the [Waifu.pics](https://waifu.pics/) API
100% API Coverage
100% TypeScript Coverage

## Getting started

```js
import WaifuPics from 'waifu-pics';

await WaifuPics('neko'); // returns String
await WaifuPics('neko', { nsfw: true }); // returns String
await WaifuPics('neko', { many: true }); // returns Array of Strings
await WaifuPics('neko', { nsfw: true, many: true }); // returns Array of Strings
await WaifuPics('neko', { many: true, exclude: ['https://i.waifu.pics/xxx.jpg'] }); // returns Array of Strings
await WaifuPics('neko', { nsfw: true, many: true, exclude: ['https://i.waifu.pics/xxx.jpg'] }); // returns Array of Strings
```


#### Options
```
nsfw: boolean
many: boolean
exclude: string[] (Array of URLs)
(All options are optional)
```

<br>

## Support

If you need Help, please contact me at [Discord](https://discord.gg/euTdctganf) or open an Issue on [GitHub](https://github.com/Larsundso/waifu.pics/issues)

<br>

## Contributing

I will happily accept your Pull-Request if it:

- looks reasonable
- does not break backwards compatibility
