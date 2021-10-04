Created to replace [`crypto-color-extractor`](https://www.npmjs.com/package/crypto-color-extractor) as it has outdated dependancies and is no longer maintained.
Uses [cryptocurrencies](https://www.npmjs.com/package/cryptocurrencies) as a reference point for currency tickers.

Install
```bash
$ npm install crypto-color
```

Example usage:
```ts
cryptoColor(ticker?: string, name?: string, rgba?: boolean, alpha?: number);
// output (eg: "rgb", "rgba"), alpha (eg: 0.3)

cryptoColor(undefined, "bitcoin", false);
// returns "rgb(247,147,26)"

cryptoColor("BTC", undefined, true, 0.3);
// returns "rgba(247,147,26,0.3)"
```

#### [Table of conversions](./tracker.md)
To contribute, please add in your conribution to the tracker, make the changes in [index.ts](./src/index.ts) and make a PR.
