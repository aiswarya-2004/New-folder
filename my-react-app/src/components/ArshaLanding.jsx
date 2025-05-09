import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ArshaLanding.css';
import { FaCheckCircle, FaChevronRight } from 'react-icons/fa';


// Import logos for partner companies
import trustlyLogo from '../assets/trustlyLogo.png';
import odendorffLogo from '../assets/odendorffLogo.png';
import lillyLogo from '../assets/lillyLogo.png';
import myobLogo from '../assets/myobLogo.png';
import belimoLogo from '../assets/belimoLogo.png';
import lifegrouplogo from '../assets/lifegrouplogo.png';
import frontlogo from '../assets/frontlogo.png'
import eumlogo from '../assets/eumlogo.png'
import quasi from '../assets/quasi.png'
import items from '../assets/items.png'
import googlemap from '../assets/googlemap.png'

const ArshaLanding = () => {

    const [openTab, setOpenTab] = useState(1);
    const [activeFilter, setActiveFilter] = useState('All');

    const [skills] = useState([
      { name: 'HTML', percentage: 100 },
      { name: 'CSS', percentage: 90 },
      { name: 'JAVASCRIPT', percentage: 75 },
      { name: 'PHOTOSHOP', percentage: 55 }
    ]);
  
    const [services] = useState([
      {
        icon: '⚡',
        title: 'Lorem Ipsum',
        description: 'Voluptatem dolorem atque consequi quia dolores et quasi molestias excepturi'
      },
      {
        icon: '⬛',
        title: 'Sed ut perspici',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore'
      },
      {
        icon: '📅',
        title: 'Magni Dolores',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
      },
      {
        icon: '📶',
        title: 'Nemo Enim',
        description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'
      }
    ]);

    const portfolioItems = [
      { id: 1, category: 'Web', title: 'Web Project 1' },
      { id: 2, category: 'App', title: 'Mobile App' },
      { id: 3, category: 'Card', title: 'Business Card Design' },
      { id: 4, category: 'Web', title: 'E-commerce Website' },
      { id: 5, category: 'App', title: 'Productivity App' },
      { id: 6, category: 'Card', title: 'Greeting Card' },
    ];
  
    const filteredItems = activeFilter === 'All' 
      ? portfolioItems 
      : portfolioItems.filter(item => item.category === activeFilter);
  
 

      const teamMembers = [
        {
          name: 'Walter White',
          title: 'Chief Executive Officer',
          description: 'Explicabo voluptatem mollitia et repellat qui dolorum quasi',
          image: 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        {
          name: 'Sarah Jhonson',
          title: 'Product Manager',
          description: 'Aut maiores voluptates amet et quis praesentium qui senda para',
          image: 'https://randomuser.me/api/portraits/women/44.jpg',
        },
        {
          name: 'William Anderson',
          title: 'CTO',
          description: 'Quisquam facilis cum velit laborum corrupti fuga rerum quia',
          image: 'https://randomuser.me/api/portraits/men/64.jpg',
        },
        {
          name: 'Amanda Jepson',
          title: 'Accountant',
          description: 'Dolorum tempora officiis odit laborum officiis et et accusamus',
          image: 'https://randomuser.me/api/portraits/women/65.jpg',
        },
      ];


      const plans = [
        {
          name: 'Free Plan',
          price: '$0',
          features: [
            { text: 'Quam adipiscing vitae proin', included: true },
            { text: 'Nec feugiat nisl pretium', included: true },
            { text: 'Nulla at volutpat diam uteera', included: true },
            { text: 'Pharetra massa massa ultricies', included: false },
            { text: 'Massa ultricies mi quis hendrerit', included: false },
          ],
          featured: false,
        },
        {
          name: 'Business Plan',
          price: '$29',
          features: [
            { text: 'Quam adipiscing vitae proin', included: true },
            { text: 'Nec feugiat nisl pretium', included: true },
            { text: 'Nulla at volutpat diam uteera', included: true },
            { text: 'Pharetra massa massa ultricies', included: true },
            { text: 'Massa ultricies mi quis hendrerit', included: true },
          ],
          featured: true,
        },
        {
          name: 'Developer Plan',
          price: '$49',
          features: [
            { text: 'Quam adipiscing vitae proin', included: true },
            { text: 'Nec feugiat nisl pretium', included: true },
            { text: 'Nulla at volutpat diam uteera', included: true },
            { text: 'Pharetra massa massa ultricies', included: true },
            { text: 'Massa ultricies mi quis hendrerit', included: true },
          ],
          featured: false,
        },
      ];


       const faqs = [
    {
      question: 'Non consectetur a erat nam at lectus urna duis?',
      answer:
        'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
    },
    {
      question: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
    },
    {
      question: 'Dolor sit amet consectetur adipiscing elit pellentesque?',
    },
    {
      question: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?',
    },
    {
      question: 'Tempus quam pellentesque nec nam aliquam sem et tortor consequat?',
    },
  ];

  return (
    <div className="arsha-landing">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home">ARSHA</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">Pricing</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Item 1</a></li>
                  <li><a className="dropdown-item" href="#">Item 2</a></li>
                  <li><a className="dropdown-item" href="#">Item 3</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-get-started" href="#contact">Get Started</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1>Better Solutions For Your Business</h1>
              <h2>We are team of talented designers making websites with Bootstrap</h2>
              <div className="d-flex justify-content-start mt-4">
                <a href="#about" className="btn-get-started me-3">Get Started</a>
                <a href="#" className="btn-watch-video d-flex align-items-center">
                  <i className="bi bi-play-circle"></i> <span>Watch Video</span>
                </a>
              </div>
            </div>
            <div className="col-lg-6 hero-img">
              <img src={frontlogo} className="img-fluid animated" alt="Hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="clients section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src={trustlyLogo} className="img-fluid" alt="Trustly" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src={odendorffLogo} className="img-fluid" alt="Odendorff" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src={lillyLogo} className="img-fluid" alt="Lilly" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src={myobLogo} className="img-fluid" alt="MYOB" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src={belimoLogo} className="img-fluid" alt="Belimo" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src={lifegrouplogo} className="img-fluid" alt="Life Groups" />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>ABOUT US</h2>
          </div>
          {/* Add about us content here */}
        </div>
      </section>

      {/* Additional sections would go here */}


      <section className="content-section py-5">
      <div className="container">
        <div className="row">
          {/* Left column - Content with check marks */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="content-block pe-lg-4">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
              
              <ul className="check-list">
                <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                <li>Ullamco laboris nisi ut aliquip ex ea commodo.</li>
              </ul>
            </div>
          </div>
          
          {/* Right column - Extended content */}
          <div className="col-lg-6">
            <div className="content-block">
              <p className="mb-4">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                qui officia deserunt mollit anim id est laborum.
              </p>
              
              <a href="#" className="read-more-btn">
                Read More <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="feature-section py-5">
      <div className="container">
        <div className="row">
          {/* Left side - Content introduction */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="intro-text mb-5">
              <h2 className="mb-3">Eum ipsum laborum deleniti <span className="text-primary">velit pariatur</span> architecto aut nihil</h2>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
            </div>
            
            {/* Feature Accordion */}
            <div className="accordion-wrapper">
              <div className={`feature-item ${openTab === 1 ? 'active' : ''}`}>
                <div className="feature-title" onClick={() => setOpenTab(1)}>
                  <span className="number">01</span>
                  <span className="text">Non consectetur a erat nam at lectus urna duis?</span>
                  <span className="icon">{openTab === 1 ? '-' : '+'}</span>
                </div>
                {openTab === 1 && (
                  <div className="feature-content">
                    <p>Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.</p>
                  </div>
                )}
              </div>
              
              <div className={`feature-item ${openTab === 2 ? 'active' : ''}`}>
                <div className="feature-title" onClick={() => setOpenTab(2)}>
                  <span className="number">02</span>
                  <span className="text">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?</span>
                  <span className="icon">{openTab === 2 ? '-' : '+'}</span>
                </div>
                {openTab === 2 && (
                  <div className="feature-content">
                    <p>Quisque enim ipsum non dolor sit amet maiores. Vivamus porta ligula dolor, et vivificat. Odio magna morbi volutpat tellus.</p>
                  </div>
                )}
              </div>
              
              <div className={`feature-item ${openTab === 3 ? 'active' : ''}`}>
                <div className="feature-title" onClick={() => setOpenTab(3)}>
                  <span className="number">03</span>
                  <span className="text">Dolor sit amet consectetur adipiscing elit pellentesque?</span>
                  <span className="icon">{openTab === 3 ? '-' : '+'}</span>
                </div>
                {openTab === 3 && (
                  <div className="feature-content">
                    <p>Adipiscing enim eu eiusmod consequat. Vestibulum arcu ultricies felis tristique. Nihil amet venenatis tellus metus enim.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Right side - Image + Illustration */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div className="feature-image-container">
              <img src={eumlogo} alt="Feature illustration" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="skills-section">
      <div className="container">
        <div className="row">
          {/* Left column - Image */}
          <div className="col-md-6">
            <div className="skills-image">
              <img src={quasi} alt="Data visualization illustration" />
            </div>
          </div>
          
          {/* Right column - Content and progress bars */}
          <div className="col-md-6">
            <div className="skills-content">
              <h2>Voluptatem dignissimos provident<br />quasi corporis voluptas</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              
              {/* Progress bars */}
              {skills.map((skill, index) => (
                <div className="progress-item" key={index}>
                  <div className="progress-title">
                    <span className="progress-name">{skill.name}</span>
                    <span className="progress-value">{skill.percentage}%</span>
                  </div>
                  <div className="progress-bar-container">
                    <div 
                      className="progress-bar" 
                      style={{ width: `${skill.percentage}%` }}>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="py-5 bg-light services-section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">SERVICES</h2>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <div className="divider-line"></div>
            <div className="divider-highlight mx-2"></div>
            <div className="divider-line"></div>
          </div>
          <p className="text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        {/* Services Cards */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="card h-100 border-0 shadow-sm service-card p-4">
                <div className="text-center mb-3">
                  {service.icon}
                </div>
                <h5 className="card-title text-center text-primary fw-bold">{service.title}</h5>
                <p className="card-text text-center text-muted small">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="portfolio-page">
    <section className="cta-section">
        <div className="container">
          <div className="cta-container">
            <div className="cta-content">
              <h2>Call To Action</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="cta-button">
              <button>Call To Action</button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio-section">
        <div className="container">
          <h2 className="portfolio-heading">PORTFOLIO</h2>
          <div className="portfolio-divider"></div>
          <p className="portfolio-subheading">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>

          {/* Portfolio Filter */}
          <div className="filter-buttons">
            {['All', 'App', 'Card', 'Web'].map(filter => (
              <button
                key={filter}
                className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Portfolio Items */}
          <div className="portfolio-grid">
           <img src={items} alt="itemsaccessory" />
          </div>
        </div>
      </section>
     </div>



     <section className="team-section container py-5">
      <h2 className="text-center mb-4 team-title">TEAM</h2>
      <p className="text-center mb-5 text-muted">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </p>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card team-card shadow-sm border-0 p-3 text-center">
              <img src={member.image} alt={member.name} className="rounded-circle mb-3 team-img" />
              <h5 className="fw-bold">{member.name}</h5>
              <p className="text-primary">{member.title}</p>
              <p className="text-muted small">{member.description}</p>
              <div className="social-icons">
                <i className="bi bi-x me-2"></i>
                <i className="bi bi-facebook me-2"></i>
                <i className="bi bi-instagram me-2"></i>
                <i className="bi bi-linkedin"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>


    <section className="pricing-section py-5">
      <div className="container">
        <h2 className="text-center mb-2 pricing-title">PRICING</h2>
        <p className="text-center mb-5 text-muted">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
        <div className="row justify-content-center">
          {plans.map((plan, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className={`card pricing-card shadow-sm border-0 h-100 text-center ${plan.featured ? 'featured-plan' : ''}`}>
                <div className="card-body">
                  <h5 className="text-primary">{plan.name}</h5>
                  <h2 className="my-3 pricing-amount">
                    {plan.price} <span className="fs-6 text-muted">/ month</span>
                  </h2>
                  <ul className="list-unstyled mb-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className={`mb-2 ${!feature.included ? 'text-muted text-decoration-line-through' : ''}`}>
                        <i className={`bi me-2 ${feature.included ? 'bi-check2 text-success' : 'bi-x text-danger'}`}></i>
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                  <button className="btn btn-outline-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>



    <section className="testimonials-section py-5 text-center">
      <div className="container">
        <h2 className="section-title">TESTIMONIALS</h2>
        <p className="text-muted mb-5">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>

        <div className="testimonial-card mx-auto">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Saul Goodman"
            className="testimonial-img rounded-circle mb-3"
          />
          <h5 className="fw-bold mb-1">Saul Goodman</h5>
          <p className="text-muted">CEO &amp; Founder</p>
          <div className="mb-3 text-warning">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="bi bi-star-fill mx-1"></i>
            ))}
          </div>
          <p className="testimonial-text mx-auto">
            <i className="bi bi-quote text-primary fs-4 me-1"></i>
            <em>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
              Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
            </em>
            <i className="bi bi-quote text-primary fs-4 ms-1"></i>
          </p>

          <div className="testimonial-indicators mt-4">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className={`indicator-dot ${i === 0 ? 'active' : ''}`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>


<div className="faq-section container py-5">
      <h2 className="text-center fw-bold mb-3">FREQUENTLY ASKED QUESTIONS</h2>
      <p className="text-center text-muted mb-4">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. 
        Et nemo qui impedit suscipit alias ea.
      </p>

      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={index === 0 ? 'true' : 'false'}
                aria-controls={`collapse${index}`}
              >
                <i className="bi bi-question-circle me-2"></i> {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer || 'Answer coming soon.'}</div>
            </div>
          </div>
        ))}
      </div>
    </div>


  <div className="contact-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-3">CONTACT</h2>
        <p className="text-center text-muted mb-5">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>

        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-md-6">
            <div className="p-4 shadow-sm bg-white rounded border-top border-info border-2 h-100">
              <div className="mb-3">
                <i className="bi bi-geo-alt-fill me-2 text-info"></i>
                <strong>Address</strong>
                <p className="mb-1">A108 Adam Street, New York, NY 535022</p>
              </div>
              <div className="mb-3">
                <i className="bi bi-telephone-fill me-2 text-info"></i>
                <strong>Call Us</strong>
                <p className="mb-1">+1 5589 55488 55</p>
              </div>
              <div className="mb-3">
                <i className="bi bi-envelope-fill me-2 text-info"></i>
                <strong>Email Us</strong>
                <p className="mb-1">info@example.com</p>
              </div>
              <iframe
                title="Google Map"
                src={googlemap}
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                className="rounded"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <div className="p-4 shadow-sm bg-white rounded border-top border-info border-2 h-100">
              <form>
                <div className="row mb-3">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="col">
                    <input type="email" className="form-control" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Subject" required />
                </div>
                <div className="mb-3">
                  <textarea className="form-control" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-info text-white px-4">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>


     <footer className="footer bg-light pt-5">
      {/* Newsletter */}
      <div className="newsletter text-center p-4 bg-body-tertiary">
        <h4 className="fw-bold">Join Our Newsletter</h4>
        <p className="text-muted">Subscribe to our newsletter and receive the latest news about our products and services!</p>
        <form className="newsletter-form d-flex justify-content-center mt-3">
          <input
            type="email"
            className="form-control rounded-start-pill w-50"
            placeholder="Enter your email"
          />
          <button type="submit" className="btn btn-info text-white rounded-end-pill px-4">
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Widgets */}
      <div className="container mt-5">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">ARSHA</h5>
            <p className="mb-1">A108 Adam Street</p>
            <p>New York, NY 535022</p>
            <p><strong>Phone:</strong> +1 5589 55488 55</p>
            <p><strong>Email:</strong> info@example.com</p>
          </div>

          {/* Useful Links */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Useful Links</h6>
            <ul className="list-unstyled">
              <li><a href="#">› Home</a></li>
              <li><a href="#">› About us</a></li>
              <li><a href="#">› Services</a></li>
              <li><a href="#">› Terms of service</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Our Services</h6>
            <ul className="list-unstyled">
              <li><a href="#">› Web Design</a></li>
              <li><a href="#">› Web Development</a></li>
              <li><a href="#">› Product Management</a></li>
              <li><a href="#">› Marketing</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Follow Us</h6>
            <p className="text-muted">Cras fermentum odio eu feugiat lide par naso tierra video magna derita valies</p>
            <div className="social-icons">
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 border-top mt-4 small text-muted">
        &copy; Copyright <strong>Arsha</strong>. All Rights Reserved<br />
        Designed by <a href="https://bootstrapmade.com/" target="_blank" rel="noreferrer">BootstrapMade</a>
      </div>
    </footer>

    </div>
  );
};

export default ArshaLanding;