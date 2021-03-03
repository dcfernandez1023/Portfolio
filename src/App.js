/*********
react imports
**********/

/*********
css imports
**********/
import './styles/App.css';

/*********
react95 imports
**********/
import { ThemeProvider } from '@react95/core';

/*********
local component imports
**********/
import Portfolio from './views/Portfolio';


function App() {
  return (
    <body>
      <ThemeProvider>
        <Portfolio />
      </ThemeProvider>
    </body>
  );
}

export default App;
