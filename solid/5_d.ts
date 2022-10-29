// Dependency Inversion Principle

// bad practice
class YandexMusic {
  user: string;
  constructor(user: string) {
    this.user = user;
  }
  getTrack(track: string) {
    console.log(`${this.user} is listening ${track} with YandexMusic`);
  }
}

class VkMusic {
  fetchTrack(user: string, track: string) {
    console.log(`${user} is listening ${track} with VkMusic`);
  }
}

class AudioPlayer {
  user: string;
  yandexMusic: YandexMusic;
  constructor(user: string) {
    this.user = user;
    this.yandexMusic = new YandexMusic(user);
  }

  play(track: string) {
    this.yandexMusic.getTrack(track);
  }
}
// Что если мы захотим использовать в AudioPlayer VkMusic вместо Yandex?
// В этом случае необходимо будет переписывать класс AudioPlayer под интерфейс VkMusic
// Что нарушает так же open-closed principle

// way to go
interface MusicApi {
  play(track: string): void;
}

class CustomPlayer {
  musicApi: MusicApi;
  constructor(musicApi: MusicApi) {
    this.musicApi = musicApi;
  }
  play(track: string) {
    this.musicApi.play(track);
  }
}

class YandexApi implements MusicApi {
  yandexMusic: YandexMusic;
  constructor(user: string) {
    this.yandexMusic = new YandexMusic(user);
  }
  play(track: string) {
    this.yandexMusic.getTrack(track);
  }
}

class VkApi implements MusicApi {
  user: string;
  vkMusic: VkMusic;
  constructor(user: string) {
    this.user = user;
    this.vkMusic = new VkMusic();
  }
  play(track: string) {
    this.vkMusic.fetchTrack(this.user, track);
  }
}

const player = new CustomPlayer(new YandexApi('me'));
const aplayer = new CustomPlayer(new VkApi('me'));

// Т.е. для каждого сервиса мы создаём обёртку с единым унифицированным интерфейсом,
// Которые можем менять в CustomPlayer без переписывания уже существующей кодовой базы.
