/**
 * Hubstry Dev++ TradeFlow
 *
 * @description Propriedade intelectual da Hubstry, em favor de Guilherme Gonçalves Machado.
 * @copyright (c) 2024 Hubstry. Todos os direitos reservados.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Hubstry Dev++ TradeFlow</h1>
          <p className="tagline">Descomplicando o Comércio Exterior para o Crescimento do Rio de Janeiro.</p>
          <Link to="/dashboard" className="cta-button">Acessar o Protótipo</Link>
        </div>
      </header>

      <main className="main-content">
        <section id="problem" className="content-section">
          <h2>O Desafio: Burocracia e Complexidade no Comércio Global</h2>
          <p>Pequenas e médias empresas no Rio de Janeiro, especialmente as ligadas à Economia Azul, enfrentam barreiras significativas para expandir seus negócios internacionalmente. A complexidade dos processos aduaneiros, a falta de transparência e a comunicação fragmentada geram custos elevados, atrasos e perda de oportunidades.</p>
        </section>

        <section id="solution" className="content-section alt-section">
          <h2>A Solução: Uma Plataforma Integrada e Inteligente</h2>
          <p>O <strong>Dev++ TradeFlow</strong> é a resposta. Nossa plataforma digital automatiza, simplifica e conecta todos os fluxos de comércio exterior. Oferecemos:</p>
          <ul>
            <li><i className="feature-icon">📊</i> Dashboard com status em tempo real dos seus pedidos.</li>
            <li><i className="feature-icon">📄</i> Automação de documentos com integração direta ao Siscomex e Receita Federal.</li>
            <li><i className="feature-icon">💬</i> Comunicação unificada entre todos os envolvidos na cadeia logística.</li>
            <li><i className="feature-icon">🔒</i> Design intuitivo, seguro e acessível de qualquer lugar.</li>
          </ul>
        </section>

        <section id="whitepaper" className="content-section">
          <h2>Aprofunde seu Conhecimento</h2>
          <p>Para uma análise detalhada sobre os desafios do setor, nossa abordagem tecnológica e o impacto da nossa plataforma na Economia Azul, leia nosso whitepaper completo.</p>
          <a href="/whitepaper.md" target="_blank" rel="noopener noreferrer" className="cta-button">Ler o Whitepaper</a>
        </section>

        <section id="cta-final" className="content-section alt-section">
          <h2>Pronto para Revolucionar seu Comércio Exterior?</h2>
          <p>Veja na prática como nossa plataforma pode transformar suas operações. Acesse o protótipo do nosso dashboard e descubra um mundo de possibilidades.</p>
          <Link to="/dashboard" className="cta-button">Ver o Dashboard em Ação</Link>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Hubstry. Todos os direitos reservados. Propriedade de Guilherme Gonçalves Machado.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
