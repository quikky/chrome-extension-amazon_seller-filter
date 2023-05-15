var toggle = true;

chrome.action.onClicked.addListener(() => {
  toggle = !toggle;
  if (toggle) {
    chrome.action.setIcon({
      path: "icons/on2.png"
    });
  } else {
    chrome.action.setIcon({
      path: "icons/off2.png"
    });
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!toggle) {
    return
  }
  if (tab.url.match('https://www.amazon.co.jp/')) {
      chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ['main.js'],
      });
  }
});