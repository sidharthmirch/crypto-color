export const getColor = (ticker?: string, name?: string) => {
  switch (ticker) {
    case "bitcoin":
      return "rgb(247,147,26)";
    case "blackcoin":
      return "rgb(0,0,0)";
    case "bitcoin cash":
      return "rgb(45,179,1)";
    case "eos":
      return "rgb(2,2,2)";
    case "zcash":
      return "rgb(215,149,45)";
    case "ethereum":
      return "rgb(140,140,140)";
    case "monero":
      return "rgb(255,102,1)";
    case "litecoin":
      return "rgb(190,190,190)";
    case "ethereum classic":
      return "rgb(30,159,103)";
    case "xrp":
      return "rgb(210,210,210)";
    case "dash":
      return "rgb(0,141,230)";
    case "qtum":
      return "rgb(208,201,234)";
    case "neo":
      return "rgb(123,184,81)";
    case "bytom":
      return "rgb(215,215,215)";
    case "tether":
      return "rgb(38,161,23)";
    case "bitshares":
      return "rgb(4,110,52)";
    case "tron":
      return "rgb(228,7,20)";
    case "cardano":
      return "rgb(6,21,41)";
    case "stellar":
      return "rgb(221,223,252)";
    case "exchange union":
      return "rgb(17,69,134)";
    case "true chain":
      return "rgb(30,107,186)";
    case "paxos standard":
      return "rgb(230,228,56)";
    case "gifto":
      return "rgb(137,52,255)";
    case "unitedbitcoin":
      return "rgb(61,183,247)";
    case "basic attention token":
      return "rgb(48,48,48)";
    case "bitcoin gold":
      return "rgb(255,200,98)";
    case "selfkey":
      return "rgb(47,53,69)";
    case "ravencoin":
      return "rgb(55,64,130)";
    case "binance coin":
      return "rgb(246,190,48)";
    case "omisego":
      return "rgb(27,83,240)";
    case "hshare":
      return "rgb(90,69,141)";
    case "okex":
      return "rgb(90,148,255)";
    case "0x":
      return "rgb(28,23,37)";
    case "mithril":
      return "rgb(147,147,200)";
    default:
      return "rgb(242,169,0)";
  }
};
