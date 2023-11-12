import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './components/hooks/useTelegram';
const tg = window.Telegram.WebApp;

// create the App component
function App() {

  const {onTaggleButto} = useTelegram()
  // on mount, initialize the tg bot
  useEffect(()=>{
     tg.ready();
  }, [])
 
  return (
     <div className="App">
       Hello
       <button onClick={onTaggleButto}>toggle</button>
     </div>
  );
 }

export default App;
