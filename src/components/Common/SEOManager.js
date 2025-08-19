import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const pageData = {
  '/': {
    title: 'Dentist near me Mbale | Star Dental Clinic - Best Teeth Cleaning & Dental Care',
    description: 'Best dentist near me in Mbale, Uganda. Professional teeth cleaning, tooth pain relief, dental checkup, and affordable dental care. North Road location. Open 8:30am-6pm. Book today!',
    keywords: 'dentist near me Mbale, teeth cleaning Mbale, dental clinic near me, tooth pain Mbale, dental checkup, best dentist Mbale Uganda, affordable dental care, emergency dentist Mbale',
    canonical: 'https://stardental-mbale.web.app'
  },
  '/about': {
    title: 'Best Dentist in Mbale | Professional Dental Team | Star Dental Clinic',
    description: 'Meet the best dentist in Mbale, Uganda. Experienced dental team providing quality dental care since 2020. Modern dental equipment, gentle care, and professional treatment.',
    keywords: 'best dentist Mbale, professional dentist Uganda, experienced dental team, quality dental care Mbale, gentle dentist',
    canonical: 'https://stardental-mbale.web.app/about'
  },
  '/services': {
    title: 'Dental Services Mbale | Teeth Cleaning, Fillings & Tooth Extraction',
    description: 'Complete dental services in Mbale: teeth cleaning, dental fillings, tooth extraction, dental crowns, root canal treatment, teeth whitening, and braces. Affordable prices.',
    keywords: 'teeth cleaning Mbale, dental fillings, tooth extraction Mbale, dental crowns, root canal treatment, teeth whitening Mbale, braces Uganda, dental implants',
    canonical: 'https://stardental-mbale.web.app/services'
  },
  '/testimonials': {
    title: 'Dental Clinic Reviews Mbale | Happy Patients | Star Dental Clinic',
    description: 'Read reviews from happy patients at Star Dental Clinic Mbale. Real testimonials about our dental care, professional service, and affordable treatment.',
    keywords: 'dental clinic reviews Mbale, patient testimonials Uganda, dental care reviews, happy patients Mbale, best dental clinic',
    canonical: 'https://stardental-mbale.web.app/testimonials'
  },
  '/contact': {
    title: 'Contact Dentist Mbale | Book Dental Appointment | Emergency Dental Care',
    description: 'Contact Star Dental Clinic Mbale for dental appointments and emergency dental care. Call +256 779 003 568. Located North Road, opposite North Road P/S.',
    keywords: 'contact dentist Mbale, book dental appointment, emergency dental care Mbale, dental clinic contact, North Road dentist',
    canonical: 'https://stardental-mbale.web.app/contact'
  },
  '/booking': {
    title: 'Book Dental Appointment Online | Dentist Mbale | Same Day Booking',
    description: 'Book dental appointment online at Star Dental Clinic Mbale. Same day dental appointments available. Easy online booking for dental checkup, teeth cleaning, and all dental services.',
    keywords: 'book dental appointment online, same day dental appointment Mbale, dental booking, schedule dentist appointment, online dental scheduling',
    canonical: 'https://stardental-mbale.web.app/booking'
  },
  '/blog': {
    title: 'Dental Care Tips | How to Care for Your Teeth | Star Dental Clinic Mbale',
    description: 'Expert dental care tips and oral health advice. Learn how to care for your teeth, prevent tooth decay, and maintain good oral hygiene. Professional dental health guide.',
    keywords: 'dental care tips, how to care for teeth, oral health advice, prevent tooth decay, good oral hygiene, dental health tips Uganda',
    canonical: 'https://stardental-mbale.web.app/blog'
  }
};

const SEOManager = () => {
  const location = useLocation();
  
  useEffect(() => {
    const currentPageData = pageData[location.pathname] || pageData['/'];
    
    // Update document title
    document.title = currentPageData.title;
    
    // Update meta description
    updateMetaTag('description', currentPageData.description);
    
    // Update meta keywords
    updateMetaTag('keywords', currentPageData.keywords);
    
    // Update canonical URL
    updateLinkTag('canonical', currentPageData.canonical);
    
    // Update Open Graph tags
    updateMetaProperty('og:title', currentPageData.title);
    updateMetaProperty('og:description', currentPageData.description);
    updateMetaProperty('og:url', currentPageData.canonical);
    updateMetaProperty('og:type', 'website');
    updateMetaProperty('og:site_name', 'Star Dental Clinic Mbale');
    updateMetaProperty('og:image', 'https://stardental-mbale.web.app/images/star-dental-logo.jpeg');
    
    // Update Twitter Card tags
    updateMetaName('twitter:card', 'summary_large_image');
    updateMetaName('twitter:title', currentPageData.title);
    updateMetaName('twitter:description', currentPageData.description);
    updateMetaName('twitter:image', 'https://stardental-mbale.web.app/images/star-dental-logo.jpeg');
    
    // Update structured data
    updateStructuredData(currentPageData);
    
  }, [location.pathname]);
  
  return null;
};

const updateMetaTag = (name, content) => {
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
};

const updateMetaProperty = (property, content) => {
  let element = document.querySelector(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.content = content;
};

const updateMetaName = (name, content) => {
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.name = name;
    document.head.appendChild(element);
  }
  element.content = content;
};

const updateLinkTag = (rel, href) => {
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
};

const updateStructuredData = (pageData) => {
  // Remove existing structured data
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }
  
  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DentalClinic",
    "name": "Star Dental Clinic Mbale",
    "description": "Best dentist near me in Mbale, Uganda. Professional teeth cleaning, dental care, and emergency dental services.",
    "url": "https://stardental-mbale.web.app",
    "telephone": "+256779003568",
    "email": "stardentalclinic.mbale@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 32A, North Road, opposite North Road P/S",
      "addressLocality": "Mbale",
      "addressRegion": "Eastern Uganda",
      "addressCountry": "Uganda"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "1.0827",
      "longitude": "34.1756"
    },
    "openingHours": [
      "Mo-Sa 08:30-18:00"
    ],
    "sameAs": [
      "https://facebook.com/stardentalclinicmbale",
      "https://instagram.com/stardentalclinicmbale",
      "https://twitter.com/stardentalmbale"
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Mobile Money", "Bank Transfer"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dental Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Teeth Cleaning",
            "description": "Professional dental cleaning and oral hygiene"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Dental Fillings",
            "description": "Tooth cavity filling and restoration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Tooth Extraction",
            "description": "Safe and painless tooth removal"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Root Canal Treatment", 
            "description": "Root canal therapy and endodontic treatment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Teeth Whitening",
            "description": "Professional teeth whitening and cosmetic dental care"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Dental Crowns",
            "description": "Dental crown installation and restoration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Dental Care",
            "description": "Urgent dental care for tooth pain and dental emergencies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dental Checkup",
            "description": "Comprehensive dental examination and oral health assessment"
          }
        }
      ]
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Mbale",
        "containedInPlace": {
          "@type": "Country", 
          "name": "Uganda"
        }
      },
      {
        "@type": "City",
        "name": "Soroti"
      },
      {
        "@type": "City", 
        "name": "Tororo"
      },
      {
        "@type": "City",
        "name": "Jinja"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };
  
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
};

export default SEOManager;
