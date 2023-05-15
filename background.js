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