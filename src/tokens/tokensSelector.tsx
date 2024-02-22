"use client";
import React, { useState } from 'react';
import './tokensSelector.css';

function TokenSelector() {
    // Define the state to hold the selected value and search query
    const [selectedValue, setSelectedValue] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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


    const handleCheckboxChange = (token: Object) => {
        const tokenStr = JSON.stringify(token);
        if (selectedCurrencies.includes(tokenStr)) {
            setSelectedCurrencies(selectedCurrencies.filter((token) => token !== tokenStr));
        } else {
            setSelectedCurrencies([...selectedCurrencies, tokenStr]);
        }
        console.log(selectedCurrencies);
    };


    return (
        <div className='menu'>
            <label className='title'>Accepted currencies</label>
            <button className="entry" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                {selectedCurrencies.length === 0 ? 'Select tokens' :
                    (<div className='selected-tokens'>
                        <div className='selected-tokens'>
                            {selectedCurrencies.map((token, index) => (
                                <img
                                    src={JSON.parse(token).img}
                                    alt={JSON.parse(token).name}
                                    className='token-image-small'
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>)
                }</button>
            {
                isDropdownOpen && <div
                    id="tokenSelector"
                    className="dropdown-menu">
                    <input
                        className='search-bar'
                        type="text"
                        placeholder={"Search for a token"}
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <div className="token-select">
                        {filteredTokens.map((token, index) => (
                            <div className="token-to-select" key={index}>
                                <input
                                    style={{ marginRight: '10px' }}
                                    type="checkbox"
                                    key={index}
                                    value={token.name.toLowerCase()}
                                    onChange={() => handleCheckboxChange(token)} />
                                <img src={token.img} alt={token.name} className='token-image-extra-small' />
                                <label>{token.name}</label>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div >

    );
}

export default TokenSelector;