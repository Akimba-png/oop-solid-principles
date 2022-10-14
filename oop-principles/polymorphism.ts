// Параметрический полиморфизм (истинный)

class Developer {
  name: string;
  skill: number;

  constructor(name: string, skill: number) {
    this.name = name;
    this.skill = skill;
  }

  createApp() {
    console.log('Create super exclusive App');
  }
}


class FrontendDev extends Developer {
  language: string;

  constructor (name: string, skill: number, language: string) {
    super(name, skill);
    this.language = language;
  }

  createApp() {
    console.log(`Create frontend app based on ${this.language}`);
  }
}


class BackendDev extends Developer {
  language: string;

  constructor(name: string, skill: number, language: string) {
    super(name, skill);
    this.language = language;
  }

  createApp() {
    console.log(`Create backend app based on ${this.language}`);
  }
}


// ad-hoc полиморфизм (мнимый) основан на перегрузке методов.

// class Calculator {
//   sum(a: string, b: string) {
//     return a + b;
//   }

//   sum(a: number, b: number) {
//     return a + b;
//   }
// }
