import React from 'react';
import { ReactComponent as BaseSvg } from './base_model.svg';

const BBnoCharacterSvg: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '500px',
      overflow: 'visible',
      margin: '0 auto',
    }}>
      <svg style={{
        width: '300px',
        height: '300px',
        transform: 'rotate(90deg) scale(0.8) translate(-50%, -50%)',
        position: 'relative',
      }}>
        <defs>
          <style type="text/css">
            {`
              #hair path { fill: #3A3A3A !important; }
              #eyes path { fill: #2B1D0E !important; }
              #eyebrows path { fill: #3A3A3A !important; }
            `}
          </style>
        </defs>
        <BaseSvg />
      </svg>
    </div>
  );
};

export default BBnoCharacterSvg;