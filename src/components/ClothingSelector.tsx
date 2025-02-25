import React, { useState } from 'react';

const ClothingSelector = () => {
  const [selectedType, setSelectedType] = useState('hat');

  return (
    <div className="clothing-selector">
      <div className="clothing-types">
        <button onClick={() => setSelectedType('hat')}>Hats</button>
        <button onClick={() => setSelectedType('shirt')}>Shirts</button>
        <button onClick={() => setSelectedType('pants')}>Pants</button>
        <button onClick={() => setSelectedType('shoes')}>Shoes</button>
      </div>
      <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
        Selected Category: {selectedType}
      </div>
    </div>
  );
};

export default ClothingSelector;