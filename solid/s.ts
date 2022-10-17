// Single-responsibility principle


// bad practice
class CalorieTracker {
  currentCount: number;
  constructor() {
    this.currentCount = 0;
  }

  updateTracker(calorieAmount: number) {
    this.currentCount += calorieAmount;
  }

  logResult(maxAmount: number) {
    if (this.currentCount < maxAmount) {
      console.log('you can do more');
      return;
    }
    console.log('that`s enough');
  }
}


//way to do
class CaloriesTracker {
  currentCount = 0;

  updateTracker(calorieAmount: number) {
    this.currentCount += calorieAmount;
  }
}


class Logger {
  tracker: CaloriesTracker;
  constructor(tracker: CaloriesTracker) {
    this.tracker = tracker;
  }

  logResult(maxAmount: number) {
    if (this.tracker.currentCount < maxAmount) {
      console.log('you can do more');
      return;
    }
    console.log('that`s enough');
  }
}

const logger = new Logger(new CaloriesTracker());
logger.logResult(3000);
