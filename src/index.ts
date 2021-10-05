import colorMap from "./colors.json";
/**
 * 
 * @param ticker currency ticker to get value for
 * @param rgba optional, defaults to false
 * @param alpha alpha value
 * @returns {string} rgb or rgba color string
 */
export const cryptoColor = (
  ticker: string,
  rgba?: boolean,
  alpha?: number
): string => {
  const prefix = rgba ? `rgba` : `rgb`;
  const suffix = alpha === undefined || rgba === false ? `` : `,${alpha}`;

  if (ticker) {
    if (colorMap[ticker.toUpperCase()] != undefined)
      return `${prefix}(${colorMap[ticker.toUpperCase()]}${suffix})`;
    return undefined;
  }
  return undefined;
};
