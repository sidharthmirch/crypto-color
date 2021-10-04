# crypto-color

Returns an rgb color string for given crypto names.

Install
```bash
$ npm install crypto-color
```

Example usage:
```ts
cryptoColor(ticker?: string, name?: string, output?: string, alpha?: number);
// output (eg: "rgb", "rgba"), alpha (eg: 0.3)

cryptoColor(undefined, "bitcoin", "rgb");
// returns "rgb(247,147,26)"

cryptoColor("BTC", undefined, "rgba", "0.3");
// returns "rgba(247,147,26,0.3)"
```
