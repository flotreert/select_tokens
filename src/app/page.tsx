"use client";
import React, { useState } from 'react';
import TokenSelector from '../tokens/tokensSelector';

const App = () => {
    return (
        <div>
            <div className='centered'>
                <TokenSelector />
            </div>
        </div>
    );
};

export default App;