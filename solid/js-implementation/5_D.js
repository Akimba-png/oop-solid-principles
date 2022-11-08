// Dependency Inversion Principle

// bad practice
// class YandexMusic {
//   user;
//   constructor(user) { this.user = user }
//   play(track) { console.log(`${this.user} is listening to ${track}`) }
// }

// class AudioPlayer {
//   yandexMusic = null;
//   constructor() { this.yandexMusic = new YandexMusic() }
//   play(track) { this.yandexMusic.play(track) }
// }

// const myPlayer = new AudioPlayer();
// myPlayer.play('my very favorite song');

// class VkMusic {
//   getTrack(track) { console.log(`${track} playing with vkMusic`) }
// }
// to change YandexMusic to VkMusic in AudioPlayer
// you must change it implementation

// way to go
class YandexMusic {
  user;
  constructor(user) { this.user = user }
  play(track) { console.log(`${this.user} is listening to ${track}`) }
}

class VkMusic {
  getTrack(track) { console.log(`${track} playing with vkMusic`) }
}

class AbstractApi {
  constructor() {
    if (new.target === AbstractApi) {
      throw new Error('Mustn\`t create instances after abstract classes');
    }
  }
  play(track) {
    throw new Error('Method must be implemented in nested classes')
  }
}

class YandexApi extends AbstractApi {
  yandexMusic;
  constructor() {
    super();
    this.yandexMusic = new YandexMusic('Jools');
  }
  play(track) { this.yandexMusic.play(track) }
}

class VkApi extends AbstractApi {
  vkMusic;
  constructor() {
    super();
    this.vkMusic = new VkMusic();
  }
  play(track) { this.vkMusic.getTrack(track) }
}

class AudioPlayer {
  api = null;
  constructor(api) { this.api = api }
  play(track) { this.api.play(track) }
}

const myPlayer = new AudioPlayer(new YandexApi());
myPlayer.play('my very favorite song');
