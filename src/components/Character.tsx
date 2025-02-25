import React from 'react';

const Character = () => {
  return (
    <div className="character" style={{ 
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transformOrigin: 'center center',
        height: '100%',
        width: '100%'
      }}>
        <object
          type="image/svg+xml"
          data="/images/base_model.svg"
          className="character-svg"
          style={{
            maxHeight: '600px',
            width: 'auto',
            transform: 'rotate(90deg)',
            display: 'block',
            objectFit: 'contain',
            pointerEvents: 'none' // This can help with some SVG rendering issues
          }}
        >
          Your browser does not support SVG
        </object>
      </div>
    </div>
  );
};

export default Character;