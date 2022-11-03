// bad practice

// class CaloryTracker {
//   user = null;
//   currentAmount = 0;
//   constructor(user) {
//     this.user = user;
//   }

//   addMeal(amount) {
//     this.currentAmount += amount;
//   }

//   logToConsole() {
//     console.log(this.currentAmount);
//   }

//   logAsAler() {
//     alert(this.currentAmount);
//   }

//   printResult() {}
// }


// way to go
class CaloryTracker {
  user = null;
  currentAmount = 0;
  constructor(user) {
    this.user = user;
  }

  addMeal(amount) {
    this.currentAmount += amount;
  }
}

class Logger {
  tracker = null;
  constructor(tracker) {
    this.tracker = tracker;
  }

  log() {
    console.log(this.tracker.currentAmount);
  }
}

const tracker = new CaloryTracker('me');
tracker.addMeal(100);
const logger = new Logger(tracker);
logger.log();
tracker.addMeal(150);
logger.log();
