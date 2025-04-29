import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <header className="policy-header">
        <h1>Política de Privacidade</h1>
        <p className="last-update">Última atualização: {new Date().toLocaleDateString()}</p>
      </header>

      <section className="policy-section">
        <p className="intro-text">
          Bem-vindo à nossa Política de Privacidade. Nosso compromisso é garantir a segurança e transparência no tratamento dos seus dados pessoais durante processos de adoção e doação de animais.
        </p>
      </section>

      <section className="policy-section">
        <h2>1. Dados que Coletamos</h2>
        <p>Para oferecer um serviço seguro, coletamos:</p>
        <ul className="data-list">
          <li><strong>CPF</strong> - Para verificação de identidade</li>
          <li><strong>Número de telefone</strong> - Para comunicação e segurança</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>2. Finalidades do Tratamento</h2>
        <h3>CPF é utilizado para:</h3>
        <ul className="purpose-list">
          <li>Verificação de identidade dos usuários</li>
          <li>Prevenção de fraudes e segurança nas adoções e doações</li>
          <li>Manutenção de um ambiente confiável</li>
        </ul>

        <h3>Telefone é utilizado para:</h3>
        <ul className="purpose-list">
          <li>Comunicação sobre adoções e doações</li>
          <li>Recuperação de conta quando necessário</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>3. Proteção de Dados</h2>
        <p>Garantimos que seus dados serão tratados com:</p>
        <ul className="protection-list">
          <li><strong>Confidencialidade</strong> - Seus dados não serão compartilhados sem consentimento</li>
          <li><strong>Segurança</strong> - Utilizamos medidas técnicas avançadas</li>
          <li><strong>Conformidade</strong> - Total aderência à LGPD (Lei 13.709/2018)</li>
        </ul>
      </section>

      <section className="policy-section">
        <h2>4. Seus Direitos</h2>
        <p>De acordo com a LGPD, você pode:</p>
        <ul className="rights-list">
          <li>Acessar seus dados pessoais</li>
          <li>Solicitar correção de informações</li>
          <li>Pedir exclusão dos dados (quando permitido por lei)</li>
          <li>Revogar consentimentos</li>
        </ul>
      </section>

      <section className="policy-section contact-section">
        <h2>5. Contato</h2>
        <p>Para exercer seus direitos ou tirar dúvidas:</p>
        <div className="contact-info">
          <p><strong>Encarregado de Proteção de Dados (DPO):</strong></p>
          <p>Email: privacidade@seusite.com</p>
          <p>Telefone: (XX) XXXX-XXXX</p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;