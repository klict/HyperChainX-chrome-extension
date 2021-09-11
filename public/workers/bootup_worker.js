class BootupWorker {
  start() {
    try {
      chrome.runtime.onInstalled.addListener(() => {
        chrome.runtime.openOptionsPage();
      });
    } catch (e) {
      console.error(e);
    }
  }
}
