# crypto-color

Returns an rgb color string for given crypto names.

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
