"use client";
import React, { useState } from 'react';
import './tokensSelector.css';

function TokenSelector() {
    // Define the state to hold the selected value and search query
    const [selectedValue, setSelectedValue] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    // Define the list of tokens
    const tokens = [
        { id: 'BTC', name: 'Bitcoin', img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
        { id: 'ETH', name: 'Ethereum', img: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
        { id: 'MATIC', name: 'Polygon', img: 'https://cryptologos.cc/logos/polygon-matic-logo.png' },
        { id: 'AVAX', name: 'Avalanche', img: 'https://cryptologos.cc/logos/avalanche-avax-logo.png' },
        { id: 'BNB', name: 'BNB', img: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png' },
        { id: 'ARB', name: 'Arbitrum', img: 'https://cryptologos.cc/logos/arbitrum-arb-logo.png' },
        { id: 'SOL', name: 'Solana', img: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
        { id: 'ICP', name: 'Internet Computer', img: 'https://cryptologos.cc/logos/internet-computer-icp-logo.png' },
    ];

    // Handle the change event when the user selects an option
    const handleChange = (event: any) => {
        setSelectedValue(event.target.value);
    };

    // Handle the change event when the user types in the search bar
    const handleSearchChange = (event: any) => {
        setSearchQuery(event.target.value);
    };

    // Filter the list of tokens based on the search query
    const filteredTokens = tokens.filter((token) => {
        const name = token.name.toLowerCase();
        return name.includes(searchQuery.toLowerCase())
    }
    );

    return (
        <div className='container'>
            <label htmlFor="tokenSelector">Choose a token:</label>
            <p>You selected: {selectedValue}</p>
            <input
                type="text"
                placeholder={"Search for a token"}
                value={searchQuery}
                onChange={handleSearchChange}
            />


            <select id="tokenSelector" value={selectedValue} onChange={handleChange}>
                <option value={selectedValue}>Select a token</option>
                {filteredTokens.map((token, index) => (
                    <option key={index} value={token.name.toLowerCase()}>
                        {token.name}
                    </option>
                ))}
            </select>
            <div>
                {selectedValue && tokens && (
                    <div className='token'>
                        {tokens.find((token) => token.name.toLowerCase() === selectedValue)?.img && (
                            <img
                                src={tokens.find((token) => token.name.toLowerCase() === selectedValue)?.img}
                                alt={selectedValue}
                                className='token-image'
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default TokenSelector;