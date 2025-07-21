import './App.css'

function App() {
  return (
    <div className="campaign-site">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">
            <h2>John Lembke</h2>
            <span>for City Council</span>
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#issues">Issues</a></li>
            <li><a href="#endorsements">Endorsements</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Working Together for a Stronger Community</h1>
          <p className="hero-subtitle">
            Experienced leadership, fresh ideas, and a commitment to representing all residents.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Support John</button>
            <button className="btn btn-secondary">Get Involved</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2>About John Lembke</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                As a longtime resident and community advocate, John Lembke brings 15 years of 
                experience in local government and community development. He has served on the 
                Planning Commission for 8 years and has been actively involved in neighborhood 
                associations, environmental initiatives, and economic development projects.
              </p>
              <p>
                John believes in transparent, accountable government that puts residents first. 
                His track record includes successfully advocating for improved infrastructure, 
                sustainable development practices, and programs that support local businesses 
                and families.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>15+</h3>
                <p>Years of Community Service</p>
              </div>
              <div className="stat">
                <h3>8</h3>
                <p>Years on Planning Commission</p>
              </div>
              <div className="stat">
                <h3>25+</h3>
                <p>Community Organizations Supported</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Issues Section */}
      <section id="issues" className="section section-alt">
        <div className="container">
          <h2>Key Issues</h2>
          <div className="issues-grid">
            <div className="issue-card">
              <h3>💰 Fiscal Responsibility</h3>
              <p>
                Ensuring taxpayer dollars are spent wisely with transparent budgeting, 
                competitive bidding processes, and regular financial audits.
              </p>
            </div>
            <div className="issue-card">
              <h3>🏘️ Housing & Development</h3>
              <p>
                Promoting smart growth that preserves neighborhood character while 
                addressing housing affordability and availability for all income levels.
              </p>
            </div>
            <div className="issue-card">
              <h3>🚦 Infrastructure</h3>
              <p>
                Investing in road maintenance, water systems, and public transportation 
                to support our growing community's needs.
              </p>
            </div>
            <div className="issue-card">
              <h3>🌱 Environment</h3>
              <p>
                Protecting green spaces, promoting renewable energy initiatives, and 
                implementing sustainable practices in city operations.
              </p>
            </div>
            <div className="issue-card">
              <h3>🏪 Economic Development</h3>
              <p>
                Supporting local businesses, attracting quality employers, and creating 
                opportunities for entrepreneurs and small business owners.
              </p>
            </div>
            <div className="issue-card">
              <h3>👥 Community Safety</h3>
              <p>
                Working with law enforcement and community groups to ensure safe 
                neighborhoods for families, seniors, and children.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Endorsements Section */}
      <section id="endorsements" className="section">
        <div className="container">
          <h2>Community Support</h2>
          <div className="endorsements">
            <div className="endorsement">
              <blockquote>
                "John has consistently shown his dedication to our community. His experience 
                and thoughtful approach make him the right choice for City Council."
              </blockquote>
              <cite>— Sarah Martinez, Neighborhood Association President</cite>
            </div>
            <div className="endorsement">
              <blockquote>
                "We need leaders who understand both fiscal responsibility and community needs. 
                John Lembke delivers on both fronts."
              </blockquote>
              <cite>— Michael Chen, Local Business Owner</cite>
            </div>
            <div className="endorsement">
              <blockquote>
                "John's work on the Planning Commission has shown his commitment to smart, 
                sustainable development. He has my full support."
              </blockquote>
              <cite>— Dr. Lisa Thompson, Environmental Scientist</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <h2>Get Involved</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact the Campaign</h3>
              <p>📧 john@lembkeforcouncil.com</p>
              <p>📱 (555) 123-4567</p>
              <p>📍 Campaign Office: 123 Main Street, Suite 100</p>
              <div className="social-links">
                <a href="#" className="social-link">Facebook</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Instagram</a>
              </div>
            </div>
            <div className="volunteer-form">
              <h3>Volunteer Sign-Up</h3>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="tel" placeholder="Phone Number" />
                <textarea placeholder="How would you like to help?" rows={4}></textarea>
                <button type="submit" className="btn btn-primary">Join the Team</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 John Lembke for City Council. All rights reserved.</p>
          <p>Paid for by Friends of John Lembke</p>
        </div>
      </footer>
    </div>
  )
}

export default App
