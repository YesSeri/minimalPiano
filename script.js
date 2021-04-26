const Tone = require('tone')
const btn = document.getElementById('test-btn')
let synth;
btn.addEventListener('click', () => {
    if (synth === undefined) {
        synth = new Tone.Synth().toDestination();
    }
    synth.triggerAttackRelease("C4", "8n");
})