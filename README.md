Created to replace [`crypto-color-extractor`](https://www.npmjs.com/package/crypto-color-extractor) as it has outdated dependancies and is no longer maintained.

Uses [cryptocurrencies](https://www.npmjs.com/package/cryptocurrencies) as a reference point for currency tickers.

Uses [colortheif](https://www.npmjs.com/package/colorthief) to generate the color values.

Install:
```bash
$ npm install crypto-color
```

Example usage:
```ts
cryptoColor("BTC", false);
// returns "rgb(244,147,27)"

cryptoColor("BTC", true, 0.3);
// returns "rgba(244,147,27,0.3)"
```

#### [There are currently **1926 cryptocurrencies** represented\*:](./tracker.md)
To contribute, please add in your contribution to [tracker.md](./tracker.md), add it to the json, build [index.ts](./src/index.ts) and make a PR.
