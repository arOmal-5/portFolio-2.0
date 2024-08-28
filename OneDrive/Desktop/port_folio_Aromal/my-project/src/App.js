

import { useContext } from 'react';
import './App.css';
import ThemeContext, { ThemeProvider } from './Components/Context/ThemeContext';
import LayOut from './Components/LayOut';



function App() {

  const { theme, toggleTheme } = useContext(ThemeContext);
  return (

   
       <div className={`${theme === 'light' ? 'App w-full  overflow-auto' :'Darkapp w-full  overflow-auto'}`}>
      <LayOut/>
 
    </div>

 
   
  );
}

export default App;
