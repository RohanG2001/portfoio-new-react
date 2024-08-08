import { useState, useEffect, useMemo } from 'react';

const LoadingScreen = () => {
  const messages = useMemo(() => [
    "Hello.", "Jambo.", "你好.", "Olá.", "Ciao.", "Hola.", "Bonjour.", "नमस्कार.", "नमस्ते."
  ], []);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [messageOpacity, setMessageOpacity] = useState(1);

  useEffect(() => {
    let messageTimeout;
    const showNextMessage = () => {
      setMessageOpacity(0);
      messageTimeout = setTimeout(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setMessageOpacity(1);
      }, 50); // Time for message fade out
    };

    const loadingTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        showNextMessage();
      }, 200); // Time each message is displayed

      return () => {
        clearInterval(interval);
        clearTimeout(messageTimeout);
      };
    }, 1000); // Delay before starting the message cycle

    return () => clearTimeout(loadingTimeout);
  }, [messages.length]);

  useEffect(() => {
    const preloaderTimeout = setTimeout(() => {
      const preloader = document.querySelector('#preloader');
      preloader.classList.add('loaded');
      const removePreloaderTimeout = setTimeout(() => {
        preloader.remove();
      }, 1000);
      return () => clearTimeout(removePreloaderTimeout);
    }, 8000); // Total time for loading screen

    return () => clearTimeout(preloaderTimeout);
  }, []);

  return (
    <div id="preloader">
      <div className="message" style={{ opacity: messageOpacity }}>
        {messages[currentMessageIndex]}
      </div>
      <div className="line"></div>
    </div>
  );
};

export default LoadingScreen;