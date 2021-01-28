import './App.css';
import ink from './ink.mp4';
import neon from './neon.mp4';
import red from './red.mp4';
import tv from './tv.mp4';
import underwater from './underwater.mp4';

function App() {
  return (
    <div className="App">
     <video 
        autoPlay 
        loop 
        muted
        style={{
          position: 'absolute',
          width: '100%',
          left: '50%',
          top: '50%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: '-1'
        }}
        >
       <source src={underwater} type ='video/mp4' />
     </video>
     <h1>fall classic</h1>
     <i class="fas fa-bullhorn"></i>
     <h2>END WHITE SUPREMACY</h2>
     <i class="fas fa-fist-raised"></i>
     <h2>BLACK LIVES MATTER</h2>
     <i class="fas fa-equals"></i>
     <h2>WE ARE ALL EQUALS</h2>
    </div>
  );
}

export default App;
