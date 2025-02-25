import React from 'react';
import BBnoCharacterSvg from './components/BBnoCharacterSvg';
import ClothingSelector from './components/ClothingSelector';

function App() {
  return (
    <div className="App" style={{
      display: 'flex',
      flexDirection: 'row', // This will put the character and selector side by side
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
      padding: '20px',
      height: '100vh',
    }}>
      <div style={{
        flex: '1',
        maxWidth: '500px',
      }}>
        <BBnoCharacterSvg />
      </div>
      <div style={{
        flex: '1',
        maxWidth: '300px',
      }}>
        <ClothingSelector />
      </div>
    </div>
  );
}

export default App;