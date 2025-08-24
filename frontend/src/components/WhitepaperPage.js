/**
 * Hubstry Dev++ TradeFlow
 *
 * @description Propriedade intelectual da Hubstry, em favor de Guilherme Gonçalves Machado.
 * @copyright (c) 2024 Hubstry. Todos os direitos reservados.
 */

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import './WhitepaperPage.css';

const WhitepaperPage = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/whitepaper.md')
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div className="whitepaper-container">
      <div className="whitepaper-content">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default WhitepaperPage;
