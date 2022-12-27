//Style
import './App.css';


//Components
import FirstComponents from './components/FirstComponents';
import TemplateExpression from './components/TemplateExpressions';

function App() {
  return (
    <div className="App">
      <h1> Fundamentos React</h1>

      <div>
        <p>Components importado</p>
        <FirstComponents />
        <TemplateExpression/>
      </div>

    </div>
  );
}

export default App;
