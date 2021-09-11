/**
 * To support chrome versions before 93 this file has been moved to
 * outside the src directory.
 */
/* global BootupWorker, ReminderWorker */

//importScripts("./workers/bootup_worker.js");
importScripts("./workers/reminder_worker.js");

try {
  // const bootupWorker = new BootupWorker();
  const reminderWorker = new ReminderWorker();

  // bootupWorker.start();
  reminderWorker.start();
} catch (e) {
  console.error(e);
}
