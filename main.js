var sellerFilter = "&rh=p_6%3AAN1VRQENFRJN5";
var whitelist = [
  "aps",
  "stripbooks",
  "english-books",
  "popular",
  "classical",
  "dvd",
  "videogames",
  "software",
  "computers",
  "electronics",
  "office-products",
  "kitchen",
  "pets",
  "hpc",
  "beauty",
  "luxury-beauty",
  "food-beverage",
  "baby",
  "fashion",
  "fashion-womens",
  "fashion-mens",
  "fashion-baby-kids",
  "apparel",
  "shoes",
  "watch",
  "jewelry",
  "toys",
  "hobby",
  "mi",
  "sporting",
  "automotive",
  "diy",
  "appliances",
  "gift-cards",
  "industrial"
];

var targets = function (list) {
  let targetsString = "";
  for (let value of list) {
    targetsString += `&i=${value}|search-alias%3D${value}|`
  }
  return targetsString.slice(0, -1);
}

var aps = function () {
  if(location.search.match("&sprefix=")) {
    return !!location.search.split('&').find((param) => {
      if (param.match("sprefix=") && param.match("%2Caps%2C")) {
        return true;
      }
    })
  } else {
    return !location.search.match("&i=");
  }
}
  (function () {
    targetURL = location.href;
    if (targetURL.match(sellerFilter)) return
    if (
      targetURL.match("amazon.co.jp/s\\?k=") &&
      (targetURL.match(targets(whitelist)) || aps) &&
      !targetURL.match("&k=&|.*&field-keywords=$")
    ) {
      location.href = targetURL + sellerFilter
    }
  }());