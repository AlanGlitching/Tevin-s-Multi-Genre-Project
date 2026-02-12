import './App.css'

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Cyber Security Singapore</h1>
          <p className="hero-subtitle">Building Peace, Justice and Strong Institutions</p>
          <p className="hero-description">A journey through the future of digital security and governance</p>
          <div className="sdg-badge">UN SDG #16</div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">The Digital Frontier</h2>
          <div className="content-block">
            <p className="lead-text">
              In an era where our lives are increasingly intertwined with digital technologies, 
              cybersecurity has become fundamental to maintaining peace, justice, and strong institutions. 
              Singapore stands at the forefront of this challenge, building resilient systems that protect 
              citizens while fostering innovation.
            </p>
            <p>
              This project explores how Singapore navigates the complex landscape of cyber threats, 
              balancing technological advancement with security, privacy with transparency, and 
              individual rights with collective safety. Through examining Singapore's approach, 
              we gain insights into what it means to build trustworthy digital institutions in 
              the 21st century.
            </p>
          </div>
        </div>
      </section>

      {/* SDG #16 Connection */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">SDG #16: Peace, Justice and Strong Institutions</h2>
          <div className="content-block">
            <p className="lead-text">
              Sustainable Development Goal 16 calls for promoting peaceful and inclusive societies, 
              providing access to justice for all, and building effective, accountable institutions. 
              In the digital age, this extends to cyberspace.
            </p>
            <div className="grid">
              <div className="card">
                <h3>Peace</h3>
                <p>
                  Cyber attacks can destabilize nations and disrupt critical infrastructure. 
                  Strong cybersecurity measures prevent conflicts and maintain stability in 
                  our interconnected world.
                </p>
              </div>
              <div className="card">
                <h3>Justice</h3>
                <p>
                  Digital justice requires protecting citizens from cybercrime while ensuring 
                  fair access to digital services. Singapore's legal framework addresses 
                  these challenges systematically.
                </p>
              </div>
              <div className="card">
                <h3>Strong Institutions</h3>
                <p>
                  Trustworthy digital institutions are built on transparency, accountability, 
                  and resilience. Singapore's Cybersecurity Act demonstrates how governments 
                  can create robust frameworks for digital governance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Singapore's Approach */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Singapore's Cybersecurity Strategy</h2>
          <div className="content-block">
            <p>
              Singapore has developed a comprehensive approach to cybersecurity that serves as 
              a model for other nations. The country recognizes that cybersecurity is not just 
              a technical issue, but a fundamental aspect of national security and social trust.
            </p>
            <div className="feature-list">
              <div className="feature-item">
                <h3>National Cybersecurity Strategy</h3>
                <p>
                  Singapore's national strategy focuses on building a resilient and trusted 
                  cyberspace through partnerships between government, private sector, and 
                  international organizations.
                </p>
              </div>
              <div className="feature-item">
                <h3>Cybersecurity Act</h3>
                <p>
                  The Cybersecurity Act provides a legal framework for protecting critical 
                  information infrastructure, ensuring that essential services remain secure 
                  and operational.
                </p>
              </div>
              <div className="feature-item">
                <h3>Public-Private Partnerships</h3>
                <p>
                  Recognizing that cybersecurity is a shared responsibility, Singapore fosters 
                  collaboration between government agencies and private companies to address 
                  threats collectively.
                </p>
              </div>
              <div className="feature-item">
                <h3>Education and Awareness</h3>
                <p>
                  Building a cyber-resilient society requires educating citizens about threats 
                  and best practices. Singapore invests in cybersecurity education at all levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges and Reflections */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Challenges and Reflections</h2>
          <div className="content-block">
            <p className="lead-text">
              While Singapore's approach offers valuable lessons, it also raises important 
              questions about the balance between security and freedom, surveillance and privacy, 
              and control and innovation.
            </p>
            <div className="reflection-block">
              <h3>Privacy vs. Security</h3>
              <p>
                How do we protect citizens from cyber threats while respecting their privacy? 
                This tension lies at the heart of modern cybersecurity policy. Singapore's 
                approach demonstrates that there are no easy answers, only careful balances 
                that must be continuously evaluated.
              </p>
            </div>
            <div className="reflection-block">
              <h3>Individual Rights vs. Collective Safety</h3>
              <p>
                In a connected world, one person's vulnerability can affect many. How do we 
                balance individual autonomy with the need for collective security? Singapore's 
                mandatory cybersecurity measures for critical infrastructure show one approach, 
                but the conversation continues globally.
              </p>
            </div>
            <div className="reflection-block">
              <h3>The Future of Digital Governance</h3>
              <p>
                As technology evolves, so must our institutions. Singapore's adaptive approach 
                to cybersecurity governance offers insights into how nations can remain resilient 
                in the face of rapidly changing threats. The question is: can we build systems 
                that are both secure and free?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Looking Forward</h2>
          <div className="content-block">
            <p className="lead-text">
              The future of work, governance, and society is digital. How we secure this future 
              will determine whether we achieve SDG #16's vision of peace, justice, and strong 
              institutions in the digital age.
            </p>
            <p>
              Singapore's journey in cybersecurity is ongoing, as is the global conversation 
              about digital rights, security, and governance. As students, teachers, and citizens, 
              we must engage with these questions thoughtfully, recognizing that the choices we 
              make today will shape the digital institutions of tomorrow.
            </p>
            <p className="closing-text">
              The path forward requires dialogue, education, and a commitment to building 
              institutions that are both strong and just—in cyberspace and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Cyber Security Singapore × UN SDG #16</p>
          <p className="footer-subtitle">A multi-genre project exploring digital security and governance</p>
        </div>
      </footer>
    </div>
  )
}

export default App
