import logo from './logo.svg';
import './App.css';
function App (props) {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo'alt='logo'></img>
        <P> 
          edit <code>src/App.js</code>
        </P>
        <a
          className='App-link'
          href='Prototipo de logo.png'
          target='_blank'
          rel='noopener noreferrer'
          >
            {props.saludo}
        </a>
      </header>
    </div>
  );
}