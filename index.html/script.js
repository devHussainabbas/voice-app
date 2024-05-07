const textInput = document.getElementById('textInput');
const speakBtn = document.getElementById('speakBtn');

// Check if browser supports speech synthesis
if ('speechSynthesis' in window) {
    const speechSynth = window.speechSynthesis;

    speakBtn.addEventListener('click', function() {
        const text = textInput.value.trim();
        if (text !== '') {
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynth.speak(utterance);
        }
    });
} else {
    alert('Speech synthesis not supported.');
}