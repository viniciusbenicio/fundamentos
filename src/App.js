//Style
import './App.css';


//Components
import FirstComponents from './components/FirstComponents';
import MyComponents from './components/MyComponents';
import TemplateExpression from './components/TemplateExpressions';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <h1> Fundamentos React</h1>

      <div>
        {/* <p>Components importado</p>
        <FirstComponents />
        <TemplateExpression/>
        <MyComponents/>
        <Events/> */}

        <Challenge/>

      </div>

    </div>
  );
}

export default App;
