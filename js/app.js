//create a synth and connect it to the main output (your speakers)
// let synthApp = {
//   synth: new Tone.Synth().toDestination(),
//   notes: ["C4", "D4", "E4", "F4"],
//   currentNote: 0,
//   playSound() {
//     //play a middle 'C' for the duration of an 8th note
//     this.synth.triggerAttackRelease(this.notes[this.currentNote], "8n");
//     this.currentNote++;
//     setTimeout(this.playSound.bind(this), 500);
//   },
// };

let currentInstrument = 0;

class Instrument {
  loudness;
  family;
  play;
  constructor(loudness, family, play) {
    this.loudness = loudness;
    this.family = family;
    this.play = play;
  }

  playSound(duration) {
    console.log(`${this.family} ${this.play} at ${this.loudness}`);
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("A4", duration);
    setTimeout(this.over.bind(this), duration * 1000);
  }

  over() {
    playNext();
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

//I found a way to get the playNext/Loop to work together but kept everything like how I showed in class, but if I wanted to use this function I would just change out the button to use it instead of playNext() and change the "over" method in the instrument class to no longer call playNext()

// function playSounds() {
//   for (let index = 0; index < instruments.length; index++) {
//     setTimeout(() => {
//       playNext();
//     }, 500 * index);
//   }
// }

function playNext() {
  if (currentInstrument < instruments.length) {
    instruments[currentInstrument].playSound(0.5);
    currentInstrument++;
  }
}
