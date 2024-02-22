"use client";
import React, { useState } from 'react';
import TokenSelector from '../tokens/tokensSelector';

const App = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const updatePosition = (event: React.MouseEvent) => {
        setPosition({ x: event.clientX, y: event.clientY });
    };

    return (
        <div>
            <div className='centered' onMouseMove={updatePosition} style={{ left: position.x, top: position.y }}>
                <TokenSelector />
            </div>
        </div>
    );
};

export default App;