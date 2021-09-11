class ReminderWorker {
  /**
   * @todo move to a json file which holds all configuration of this extension
   */
  reminderConfig = {
    icon: "logo.png",
    title: "Your community needs you!",
    message: "Please go vote for hyperchain X in token platforms.",
  };

  alarmName = "reminder";

  start() {
    try {
      chrome.runtime.onInstalled.addListener(() => {
        const minInADay = 24 * 60;

        chrome.alarms.create(this.alarmName, {
          delayInMinutes: 0.1,
          periodInMinutes: minInADay,
        });

        chrome.alarms.onAlarm.addListener((alarmInfo) => {
          if (alarmInfo.name === this.alarmName) {
            chrome.notifications.create(this.alarmName, {
              type: "basic",
              iconUrl: this.reminderConfig.icon,
              title: this.reminderConfig.title,
              message: this.reminderConfig.message,
            });
          }
        });
      });
    } catch (e) {
      console.error(e);
    }
  }
}
