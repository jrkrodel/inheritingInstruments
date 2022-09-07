let currentInstrument = 0;

class Instrument {
  loudness;
  family;
  play;
  constructor(loudness, family, play) {
    this.loudness = loudness;
    this.family = family;
    this.play = play;
    this.over = playNext;
  }

  playSound(duration) {
    console.log(`${this.family} ${this.play} at ${this.loudness}`);
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("A4", duration);
    setTimeout(this.over, duration * 1000);
  }
}

class Woodwind extends Instrument {
  constructor(loudness) {
    super(loudness);
    this.family = "Woodwind";
    this.play = "echos";
  }
}

class String extends Instrument {
  constructor(loudness) {
    super(loudness);
    this.family = "String";
    this.play = "strums";
  }
}

class Percussion extends Instrument {
  constructor(loudness) {
    super(loudness);
    this.family = "Percussion";
    this.play = "beats";
  }
}

const drums = new Percussion(14);
const guitar = new String(20);
const flute = new Woodwind(10);

const instruments = [drums, guitar, flute];

function playNext() {
  if (currentInstrument < instruments.length) {
    instruments[currentInstrument].playSound(0.5);
    currentInstrument++;
  }
}
