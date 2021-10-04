import symbolList from "cryptocurrencies";

export const cryptoColor = (
  ticker?: string,
  name?: string,
  output?: string,
  alpha?: number
): string => {
  if (ticker) {
    if (symbolList[ticker.toUpperCase()] != undefined) {
      name = symbolList[ticker.toUpperCase()].toLowerCase();
    } else {
      return "No record for that ticker";
    }
  }

  const rgba = output === `rgb` ? `` : `a`;
  const appendedAlpha = alpha === undefined || rgba === `` ? `` : `,${alpha}`;
  switch (name) {
    case `bitcoin`:
      return `rgb${rgba}(247,147,26${appendedAlpha})`;
    case `blackcoin`:
      return `rgb${rgba}(0,0,0${appendedAlpha})`;
    case `bitcoin cash`:
      return `rgb${rgba}(45,179,1${appendedAlpha})`;
    case `eos`:
      return `rgb${rgba}(2,2,2${appendedAlpha})`;
    case `zcash`:
      return `rgb${rgba}(215,149,45${appendedAlpha})`;
    case `ethereum`:
      return `rgb${rgba}(140,140,140${appendedAlpha})`;
    case `monero`:
      return `rgb${rgba}(255,102,1${appendedAlpha})`;
    case `litecoin`:
      return `rgb${rgba}(190,190,190${appendedAlpha})`;
    case `ethereum classic`:
      return `rgb${rgba}(30,159,103${appendedAlpha})`;
    case `xrp`:
      return `rgb${rgba}(210,210,210${appendedAlpha})`;
    case `dash`:
      return `rgb${rgba}(0,141,230${appendedAlpha})`;
    case `qtum`:
      return `rgb${rgba}(208,201,234${appendedAlpha})`;
    case `neo`:
      return `rgb${rgba}(123,184,81${appendedAlpha})`;
    case `bytom`:
      return `rgb${rgba}(215,215,215${appendedAlpha})`;
    case `tether`:
      return `rgb${rgba}(38,161,23${appendedAlpha})`;
    case `bitshares`:
      return `rgb${rgba}(4,110,52${appendedAlpha})`;
    case `tron`:
      return `rgb${rgba}(228,7,20${appendedAlpha})`;
    case `cardano`:
      return `rgb${rgba}(6,21,41${appendedAlpha})`;
    case `stellar`:
      return `rgb${rgba}(221,223,252${appendedAlpha})`;
    case `exchange union`:
      return `rgb${rgba}(17,69,134${appendedAlpha})`;
    case `true chain`:
      return `rgb${rgba}(30,107,186${appendedAlpha})`;
    case `paxos standard`:
      return `rgb${rgba}(230,228,56${appendedAlpha})`;
    case `gifto`:
      return `rgb${rgba}(137,52,255${appendedAlpha})`;
    case `unitedbitcoin`:
      return `rgb${rgba}(61,183,247${appendedAlpha})`;
    case `basic attention token`:
      return `rgb${rgba}(48,48,48${appendedAlpha})`;
    case `bitcoin gold`:
      return `rgb${rgba}(255,200,98${appendedAlpha})`;
    case `selfkey`:
      return `rgb${rgba}(47,53,69${appendedAlpha})`;
    case `ravencoin`:
      return `rgb${rgba}(55,64,130${appendedAlpha})`;
    case `binance coin`:
      return `rgb${rgba}(246,190,48${appendedAlpha})`;
    case `omisego`:
      return `rgb${rgba}(27,83,240${appendedAlpha})`;
    case `hshare`:
      return `rgb${rgba}(90,69,141${appendedAlpha})`;
    case `okex`:
      return `rgb${rgba}(90,148,255${appendedAlpha})`;
    case `0x`:
      return `rgb${rgba}(28,23,37${appendedAlpha})`;
    case `mithril`:
      return `rgb${rgba}(147,147,200${appendedAlpha})`;
    default:
      return `rgb${rgba}(242,169,0${appendedAlpha})`;
  }
};
