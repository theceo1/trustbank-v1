// src/components/AutomatedTrading.js
import React, { useState } from 'react';

const AutomatedTrading = () => {
  const [rules, setRules] = useState([]);
  const [newRule, setNewRule] = useState('');

  const addRule = () => {
    setRules([...rules, newRule]);
    setNewRule('');
  };

  const startAutomatedTrading = async () => {
    await fetch('/api/automated-trading', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rules }),
    });
  };

  return (
    <div>
      <h2>Automated Trading</h2>
      <div>
        <input 
          type="text" 
          value={newRule} 
          onChange={(e) => setNewRule(e.target.value)} 
          placeholder="Enter trading rule"
        />
        <button onClick={addRule}>Add Rule</button>
      </div>
      <ul>
        {rules.map((rule, index) => (
          <li key={index}>{rule}</li>
        ))}
      </ul>
      <button onClick={startAutomatedTrading}>Start Trading</button>
    </div>
  );
};

export default AutomatedTrading;
