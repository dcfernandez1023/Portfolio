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
      <div style = {{position: "fixed", marginBottom: "30px", bottom: "10px", right: "10px"}}>
        Built with the <a href = "https://github.com/React95/React95" target = "_blank"> React95 </a> Component Library
      </div>
    </body>
  );
}

export default App;
