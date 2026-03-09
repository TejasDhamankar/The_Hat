const services = [
  {
    title: "Digital Marketing",
    description:
      "We help businesses reach the right audience through powerful digital marketing strategies.",
    items: [
      "Facebook Ads Campaigns",
      "Instagram Ads Campaigns",
      "Google Ads Marketing",
      "Lead Generation Campaigns",
      "Performance Marketing",
      "Audience Targeting & Optimization",
    ],
  },
  {
    title: "Branding & Brand Development",
    description:
      "We help businesses build a strong brand identity and market presence.",
    items: [
      "Brand Strategy",
      "Brand Identity Creation",
      "Brand Positioning",
      "Brand Promotion",
      "Brand Awareness Campaigns",
    ],
  },
  {
    title: "Creative Designing",
    description:
      "Our creative team develops high-quality marketing and branding designs.",
    items: [
      "Logo Design",
      "Social Media Creatives",
      "Marketing Posters & Banners",
      "Brochure & Catalogue Design",
      "Advertisement Creatives",
    ],
  },
  {
    title: "Video Editing & Creative Production",
    description:
      "High-quality video content helps brands grow faster on digital platforms.",
    items: [
      "Social Media Reels Editing",
      "Promotional Videos",
      "Advertisement Videos",
      "Corporate Videos",
      "Product Videos",
    ],
  },
  {
    title: "Social Media Management",
    description:
      "We manage and grow your brand presence across social media platforms.",
    items: [
      "Instagram Page Management",
      "Facebook Page Management",
      "Content Creation",
      "Creative Posting Strategy",
      "Audience Engagement",
    ],
  },
  {
    title: "Sales Growth & Lead Generation",
    description:
      "We help businesses generate real customers and increase sales.",
    items: [
      "Lead Generation System",
      "Sales Funnel Setup",
      "Conversion Optimization",
      "Customer Acquisition Strategy",
    ],
  },
];

const brandSystemSteps = [
  "Brand Idea & Business Analysis",
  "Brand Identity & Design Development",
  "Social Media Setup & Content Creation",
  "Marketing Campaign Launch",
  "Lead Generation System",
  "Sales Strategy & Conversion Optimization",
  "Brand Expansion & Growth",
];

const industries = [
  "Real Estate",
  "Restaurants & Cafes",
  "Fashion Brands",
  "Startups",
  "Local Businesses",
  "E-commerce Brands",
  "Corporate Companies",
];

const marketingProcess = [
  "Business Analysis",
  "Marketing Strategy Planning",
  "Creative Designing & Content Development",
  "Advertising Campaign Launch",
  "Lead Generation",
  "Sales Optimization & Growth",
];

const reasonsToChoose = [
  "Complete Brand Development Solution",
  "Creative Designing Experts",
  "Powerful Advertising Campaigns",
  "Data Driven Marketing Strategy",
  "Sales Focused Marketing",
  "Dedicated Marketing Team",
];

const results = [
  "Successful Marketing Campaigns",
  "Multiple Brands Managed",
  "High Quality Leads Generated",
  "Business Growth & Brand Expansion",
];

const testimonials = [
  {
    quote:
      "The Hat helped us grow our brand and generate quality leads through powerful marketing campaigns.",
    label: "Client Success Story",
  },
  {
    quote:
      "Their branding and marketing strategy helped our business reach more customers and increase sales.",
    label: "Client Success Story",
  },
];

export default function Home() {
  return (
    <main className="page">
      <header className="site-header">
        <div className="container nav">
          <div className="nav-logo">
            <span className="eyebrow">THE HAT</span>
            <span className="nav-tagline">
              Complete Branding &bull; Marketing &bull; Sales Growth
            </span>
          </div>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#system">Brand System</a>
            <a href="#process">Process</a>
            <a className="btn btn-primary" href="#consultation">
              Get Free Consultation
            </a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="stack">
            <h1 className="hero-title">
              From Zero To Hero &ndash; We Build, Market & Grow Powerful Brands
            </h1>
            <p className="hero-subheading">
              The Hat is a full-service marketing company that helps businesses
              grow with branding, creative designing, digital marketing,
              advertising campaigns, and sales growth strategies.
            </p>
            <p className="short-line">
              Branding | Designing | Digital Marketing | Sales Growth | Lead
              Generation
            </p>
            <div className="button-row">
              <a className="btn btn-primary" href="#consultation">
                Get Free Consultation
              </a>
              <a className="btn btn-outline" href="#services">
                Start Your Brand Journey
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-subtitle">Our mission is simple</div>
            <div className="card-title">
              Help businesses grow faster with powerful branding and smart
              marketing strategies.
            </div>
            <div className="divider" />
            <p>
              The Hat is a complete Brand Growth & Digital Marketing Company
              that helps businesses grow from idea stage to a powerful brand.
            </p>
            <p>
              We work with businesses that want to build their brand, increase
              visibility, and generate real sales.
            </p>
            <p className="highlight">
              From Idea To Industry Brand &ndash; The Hat Handles Everything.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container grid-2">
          <div className="stack">
            <p className="section-kicker">About The Hat</p>
            <h2 className="section-title">About The Hat</h2>
            <p className="section-subtitle">
              The Hat is a complete Brand Growth & Digital Marketing Company
              that helps businesses grow from idea stage to a powerful brand.
            </p>
            <p>
              We work with businesses that want to build their brand, increase
              visibility, and generate real sales.
            </p>
            <p className="highlight">Our mission is simple:</p>
            <p>
              Help businesses grow faster with powerful branding and smart
              marketing strategies.
            </p>
          </div>
          <div className="card">
            <div className="card-title">Our team specializes in:</div>
            <ul className="list">
              <li>Digital Marketing</li>
              <li>Brand Development</li>
              <li>Creative Designing</li>
              <li>Video Production</li>
              <li>Advertising Campaigns</li>
              <li>Lead Generation & Sales Growth</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="services">
        <div className="container">
          <p className="section-kicker">Our Services</p>
          <h2 className="section-title">Everything your brand needs.</h2>
          <p className="section-subtitle">
            From strategy to creative, from campaigns to conversions, we handle
            every stage of brand growth.
          </p>
          <div className="grid-3" style={{ marginTop: "36px" }}>
            {services.map((service) => (
              <div className="card service-card" key={service.title}>
                <div className="card-title">{service.title}</div>
                <p>{service.description}</p>
                <div className="card-subtitle">Services include:</div>
                <ul className="list">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="system">
        <div className="container">
          <p className="section-kicker">The Hat Zero To Hero Brand System</p>
          <h2 className="section-title">From Startup To Powerful Brand.</h2>
          <p className="section-subtitle">
            We help brands grow step-by-step from{" "}
            <em>startup to strong market presence</em>.
          </p>
          <p className="card-subtitle">Our system includes:</p>
          <div className="grid-3" style={{ marginTop: "40px" }}>
            {brandSystemSteps.map((step, index) => (
              <div className="card process-card" key={step}>
                <span className="step-number">Step {index + 1}</span>
                <div className="card-title">{step}</div>
              </div>
            ))}
          </div>
          <div className="divider" />
          <div className="highlight">
            From Idea To Industry Brand &ndash; The Hat Handles Everything.
          </div>
        </div>
      </section>

      <section className="section" id="industries">
        <div className="container grid-2">
          <div className="stack">
            <p className="section-kicker">Industries We Work With</p>
            <h2 className="section-title">Growth for every business type.</h2>
            <p className="section-subtitle">
              We help businesses across multiple industries grow faster.
            </p>
          </div>
          <div className="card">
            <div className="card-title">Industries include:</div>
            <ul className="list">
              {industries.map((industry) => (
                <li key={industry}>{industry}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="process">
        <div className="container">
          <p className="section-kicker">Our Marketing Process</p>
          <h2 className="section-title">Clear steps. Strong outcomes.</h2>
          <div className="grid-3" style={{ marginTop: "36px" }}>
            {marketingProcess.map((step, index) => (
              <div className="card process-card" key={step}>
                <span className="step-number">Step {index + 1}</span>
                <div className="card-title">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="why">
        <div className="container grid-2">
          <div className="stack">
            <p className="section-kicker">Why Choose The Hat</p>
            <h2 className="section-title">Your complete growth partner.</h2>
            <p className="section-subtitle">
              A premium marketing partner focused on performance, clarity, and
              brand elevation.
            </p>
          </div>
          <div className="card">
            <ul className="icon-list">
              {reasonsToChoose.map((reason) => (
                <li key={reason}>
                  <span className="icon-check" aria-hidden="true" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="results">
        <div className="container grid-2">
          <div className="stack">
            <p className="section-kicker">Results That Matter</p>
            <h2 className="section-title">Real business growth.</h2>
            <p className="section-subtitle">
              Our strategies focus on real business growth.
            </p>
          </div>
          <div className="card">
            <ul className="list">
              {results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-muted" id="testimonials">
        <div className="container">
          <p className="section-kicker">Client Success Stories</p>
          <h2 className="section-title">Trusted results. Proven growth.</h2>
          <div className="grid-2" style={{ marginTop: "36px" }}>
            {testimonials.map((story, index) => (
              <div className="card" key={`${story.label}-${index}`}>
                <span className="stars" role="img" aria-label="Five star rating">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </span>
                <div className="card-subtitle">{story.label}</div>
                <p className="quote">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="consultation">
        <div className="container grid-2">
          <div className="stack">
            <p className="section-kicker">Free Business Growth Consultation</p>
            <h2 className="section-title">
              Get Free Consultation For Your Business
            </h2>
            <p className="section-subtitle">
              Get a free consultation and marketing strategy for your business.
              Fill the form and our team will contact you.
            </p>
          </div>
          <form className="card" action="#">
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Name" />
              </div>
              <div className="field">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="Mobile number"
                />
              </div>
              <div className="field">
                <label htmlFor="business">Business Name</label>
                <input
                  id="business"
                  name="business"
                  type="text"
                  placeholder="Business name"
                />
              </div>
              <div className="field">
                <label htmlFor="city">City</label>
                <input id="city" name="city" type="text" placeholder="City" />
              </div>
              <div className="field field-full">
                <label htmlFor="service">Service Required</label>
                <select id="service" name="service">
                  <option>Branding</option>
                  <option>Designing</option>
                  <option>Digital Marketing</option>
                  <option>Sales Growth</option>
                  <option>Lead Generation</option>
                </select>
              </div>
              <div className="field field-full">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your goals"
                />
              </div>
              <div className="field field-full">
                <button className="btn btn-primary" type="submit">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="section section-dark" id="contact">
        <div className="container grid-2">
          <div className="stack">
            <p className="section-kicker">Contact Us</p>
            <h2 className="section-title">We are ready to help.</h2>
            <p className="section-subtitle">
              Reach out for a custom strategy and a clear growth plan.
            </p>
            <div className="button-row">
              <a className="btn btn-primary" href="#consultation">
                Get Free Consultation
              </a>
              <a className="btn btn-outline" href="#contact">
                Contact Us
              </a>
            </div>
          </div>
          <div className="card contact-card">
            <div className="card-title">Contact Details</div>
            <ul className="list">
              <li>Phone Number</li>
              <li>WhatsApp Support</li>
              <li>Email Address</li>
              <li>Office Address</li>
            </ul>
            <div className="divider" />
            <div className="highlight">Follow us on:</div>
            <p>Facebook | Instagram | YouTube | LinkedIn</p>
          </div>
        </div>
      </section>
      <section className="section-tight final-line">
        <div className="container">
          THE HAT &ndash; Your Complete Partner For Branding, Marketing &
          Business Growth
        </div>
      </section>
    </main>
  );
}
