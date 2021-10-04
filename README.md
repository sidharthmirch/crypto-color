# crypto-color

Returns an rgb color string for given crypto names.

Example usage:
```ts
cryptoColor(undefined, "bitcoin", "rgb");
// returns "rgb(247,147,26)"

cryptoColor("BTC", undefined, "rgba", "0.3");
// returns "rgba(247,147,26,0.3)"
```