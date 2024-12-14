chrome.action.onClicked.addListener((tab) => {
  if (tab && tab.url) {
    const newUrl = `http://12ft.io/${tab.url}`;
    chrome.tabs.update(tab.id, { url: newUrl });
  }
});
