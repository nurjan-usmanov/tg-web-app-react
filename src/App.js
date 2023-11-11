
import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp;

// create the App component
function App() {

  // on mount, initialize the tg bot
  useEffect(()=>{
     tg.ready();
  }, [])
 
  // close the tg bot when button clicked
  const onClose = () => {
     tg.close()
  }
 
  return (
     <div className="App">
       Hello
       <button onClick={onClose}>Закрыть</button>
     </div>
  );
 }

export default App;
