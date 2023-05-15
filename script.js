// console.log('hahahahhawwwwwwwwwwwww');

// var sellerFilter = "&rh=p_6%3AAN1VRQENFRJN5";
// var whitelist = [
//   "aps",
//   "stripbooks",
//   "english-books",
//   "popular",
//   "classical",
//   "dvd",
//   "videogames",
//   "software",
//   "computers",
//   "electronics",
//   "office-products",
//   "kitchen",
//   "pets",
//   "hpc",
//   "beauty",
//   "luxury-beauty",
//   "food-beverage",
//   "baby",
//   "fashion",
//   "fashion-womens",
//   "fashion-mens",
//   "fashion-baby-kids",
//   "apparel",
//   "shoes",
//   "watch",
//   "jewelry",
//   "toys",
//   "hobby",
//   "mi",
//   "sporting",
//   "automotive",
//   "diy",
//   "appliances",
//   "gift-cards",
//   "industrial"
// ];

// var targets = function (list) {
//   let targetsString = "";
//   for (let value of list) {
//     targetsString += `&i=${value}|search-alias%3D${value}|`
//   }
//   return targetsString.slice(0, -1);
// }

// chrome.webRequest.onBeforeRequest.addListener(function (tab) {
//     targetURL = tab.url;
//     if (toggle &&
//       targetURL.match("amazon.co.jp/s/|amazon.co.jp/s?") &&
//       targetURL.match(targets(whitelist)) &&
//       !targetURL.match("&k=&|.*&field-keywords=$")
//     ) {
//       return {
//         redirectUrl: targetURL + sellerFilter
//       };
//     }
//     return {};
//   }, {
//     urls: ["*://www.amazon.co.jp/s*"],
//     types: ["main_frame"]
//   },
//   ["blocking"]);