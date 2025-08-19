import React from 'react';

const LocalSEO = () => {
  // Add local business structured data for Google Business Profile optimization
  React.useEffect(() => {
    const localBusinessData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://stardental-mbale.web.app/#business",
      "name": "Star Dental Clinic Mbale",
      "alternateName": "Star Dental Clinic",
      "description": "Best dentist near me in Mbale, Uganda. Professional teeth cleaning, dental fillings, tooth extraction, emergency dental care. Located on North Road.",
      "url": "https://stardental-mbale.web.app",
      "telephone": "+256779003568",
      "email": "stardentalclinic.mbale@gmail.com",
      "image": [
        "https://stardental-mbale.web.app/images/star-dental-logo.jpeg",
        "https://stardental-mbale.web.app/images/clinic/clinical-room-1.JPG",
        "https://stardental-mbale.web.app/images/clinic/clinical-room-2.JPG"
      ],
      "logo": "https://stardental-mbale.web.app/images/star-dental-logo.jpeg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot 32A, North Road, opposite North Road P/S",
        "addressLocality": "Mbale",
        "addressRegion": "Eastern Region",
        "postalCode": "00256",
        "addressCountry": "UG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 1.0827,
        "longitude": 34.1756
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:30",
          "closes": "18:00"
        }
      ],
      "priceRange": "$$",
      "currenciesAccepted": "UGX",
      "paymentAccepted": [
        "Cash",
        "Mobile Money", 
        "Bank Transfer",
        "MTN Mobile Money",
        "Airtel Money"
      ],
      "areaServed": [
        {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": 1.0827,
            "longitude": 34.1756
          },
          "geoRadius": "50000"
        }
      ],
      "serviceArea": {
        "@type": "AdministrativeArea",
        "name": "Eastern Uganda",
        "containsPlace": [
          "Mbale",
          "Soroti", 
          "Tororo",
          "Jinja",
          "Pallisa",
          "Butaleja",
          "Budaka",
          "Sironko",
          "Manafwa",
          "Bududa"
        ]
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dental Services in Mbale",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Teeth Cleaning",
            "description": "Professional dental cleaning and plaque removal",
            "category": "Preventive Dentistry",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer", 
            "name": "Dental Fillings",
            "description": "Tooth cavity filling and dental restoration",
            "category": "Restorative Dentistry",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Tooth Extraction",
            "description": "Safe and painless tooth removal services",
            "category": "Oral Surgery",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Emergency Dental Care",
            "description": "Urgent dental care for tooth pain and dental emergencies",
            "category": "Emergency Dentistry",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Dental Checkup",
            "description": "Comprehensive dental examination and oral health assessment",
            "category": "Preventive Dentistry", 
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Root Canal Treatment",
            "description": "Endodontic therapy and root canal treatment",
            "category": "Endodontics",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Teeth Whitening",
            "description": "Professional teeth whitening and cosmetic dental care",
            "category": "Cosmetic Dentistry",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Dental Crowns",
            "description": "Dental crown installation and tooth restoration",
            "category": "Restorative Dentistry",
            "availability": "https://schema.org/InStock"
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Sarah Nakato"
          },
          "reviewBody": "Best dentist in Mbale! Professional teeth cleaning and excellent service. Highly recommended for dental care."
        },
        {
          "@type": "Review", 
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "James Wanyama"
          },
          "reviewBody": "Excellent dental clinic near me. Dr. provided painless tooth extraction and great aftercare. Will definitely return."
        }
      ],
      "sameAs": [
        "https://www.facebook.com/stardentalclinicmbale",
        "https://www.instagram.com/stardentalclinicmbale", 
        "https://twitter.com/stardentalmbale"
      ],
      "keywords": [
        "dentist near me Mbale",
        "teeth cleaning Mbale",
        "dental clinic near me",
        "best dentist Mbale",
        "tooth pain Mbale",
        "dental checkup",
        "emergency dentist Mbale",
        "affordable dental care",
        "North Road dentist"
      ]
    };

    // Remove existing local business structured data
    const existingScript = document.querySelector('script[data-local-business="true"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new local business structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-local-business', 'true');
    script.textContent = JSON.stringify(localBusinessData);
    document.head.appendChild(script);

    // Add additional meta tags for local SEO
    const metaTags = [
      { name: 'geo.region', content: 'UG-E' },
      { name: 'geo.placename', content: 'Mbale' },
      { name: 'geo.position', content: '1.0827;34.1756' },
      { name: 'ICBM', content: '1.0827, 34.1756' },
      { name: 'DC.title', content: 'Best Dentist Near Me Mbale | Star Dental Clinic' },
      { property: 'business:contact_data:street_address', content: 'Plot 32A, North Road' },
      { property: 'business:contact_data:locality', content: 'Mbale' },
      { property: 'business:contact_data:region', content: 'Eastern Uganda' },
      { property: 'business:contact_data:postal_code', content: '00256' },
      { property: 'business:contact_data:country_name', content: 'Uganda' },
      { property: 'business:contact_data:phone_number', content: '+256779003568' },
      { property: 'business:contact_data:email', content: 'stardentalclinic.mbale@gmail.com' }
    ];

    metaTags.forEach(tag => {
      let element = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
      if (!element) {
        element = document.createElement('meta');
        if (tag.name) {
          element.name = tag.name;
        } else {
          element.setAttribute('property', tag.property);
        }
        document.head.appendChild(element);
      }
      element.content = tag.content;
    });

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.querySelector('script[data-local-business="true"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
};

export default LocalSEO;
