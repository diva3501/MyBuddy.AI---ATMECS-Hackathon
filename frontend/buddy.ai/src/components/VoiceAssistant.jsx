import React, { useState } from 'react';

const VoiceAssistant = () => {
  const [voiceInput, setVoiceInput] = useState('');

  const handleVoiceRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setVoiceInput(transcript);
      window.open(`https://www.amazon.in/s?k=${transcript}`, '_blank');
    };
    recognition.start();
  };

  return (
    <div>
      <button onClick={handleVoiceRecognition}>Voice Assistant</button>
      {voiceInput && <h3>Recognized Input: {voiceInput}</h3>}
    </div>
  );
};

export default VoiceAssistant;
