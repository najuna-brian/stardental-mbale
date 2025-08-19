// Google Business Profile SEO Component
import React from 'react';

const GoogleBusinessProfile = () => {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "DentalClinic",
    "name": "Star Dental Clinic Mbale",
    "alternateName": "Star Dental Mbale",
    "description": "Eastern Uganda's premier dental clinic offering comprehensive dental care with advanced German technology. Rated #1 by patients with 500+ successful treatments.",
    "url": "https://stardentalclinic-mbale.com",
    "logo": "https://stardentalclinic-mbale.com/images/star-dental-logo.jpeg",
    "image": [
      "https://stardentalclinic-mbale.com/images/star-dental-logo.jpeg",
      "https://stardentalclinic-mbale.com/images/dental-team.jpg",
      "https://stardentalclinic-mbale.com/images/dental-services.jpg",
      "https://stardentalclinic-mbale.com/images/clinic-interior.jpg"
    ],
    "telephone": "+256779003568",
    "email": "stardentalclinic.mbale@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 32A, North Road, opposite North Road P/S",
      "addressLocality": "Mbale",
      "addressRegion": "Eastern Region",
      "postalCode": "P.O. Box 1234",
      "addressCountry": "UG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 1.0827,
      "longitude": 34.1759
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:30",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "00:00",
        "closes": "00:00",
        "validFrom": "2024-01-01",
        "validThrough": "2025-12-31"
      }
    ],
    "specialOpeningHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "opens": "08:30",
        "closes": "18:00",
        "validFrom": "2025-01-01",
        "validThrough": "2025-12-31"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "UGX",
    "paymentAccepted": [
      "Cash",
      "Mobile Money",
      "Bank Transfer",
      "Credit Card",
      "Airtel Money",
      "MTN Mobile Money"
    ],
    "foundingDate": "2015",
    "founder": {
      "@type": "Person",
      "name": "Dr. Sarah Nakamya",
      "jobTitle": "Chief Dental Officer",
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Degree",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Makerere University College of Health Sciences"
          }
        }
      ]
    },
    "employee": [
      {
        "@type": "Person",
        "name": "Dr. Sarah Nakamya",
        "jobTitle": "Lead Dentist",
        "image": "https://stardental-mbale.web.app/images/dr-sarah.jpg"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "147",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah Namukose"
        },
        "datePublished": "2025-08-15",
        "reviewBody": "Excellent service and professional staff. Dr. Sarah is amazing! The clinic is very clean and modern.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "John Wambi"
        },
        "datePublished": "2025-08-10",
        "reviewBody": "Best dental clinic in Eastern Uganda. Quick service and affordable prices.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ],
    "sameAs": [
      "https://facebook.com/stardentalclinicmbale",
      "https://instagram.com/stardentalclinicmbale",
      "https://twitter.com/stardentalmbale",
      "https://linkedin.com/company/star-dental-clinic-mbale"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dental Services Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Teeth Cleaning & Scaling",
            "description": "Professional dental cleaning and plaque removal",
            "provider": {
              "@type": "DentalClinic",
              "name": "Star Dental Clinic Mbale"
            }
          },
          "price": "50000",
          "priceCurrency": "UGX",
          "availability": "InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dental Implants",
            "description": "Tooth replacement with titanium implants",
            "provider": {
              "@type": "DentalClinic",
              "name": "Star Dental Clinic Mbale"
            }
          },
          "price": "800000",
          "priceCurrency": "UGX",
          "availability": "InStock"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Teeth Whitening",
            "description": "Professional teeth whitening treatment",
            "provider": {
              "@type": "DentalClinic",
              "name": "Star Dental Clinic Mbale"
            }
          },
          "price": "200000",
          "priceCurrency": "UGX",
          "availability": "InStock"
        }
      ]
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Mbale"
      },
      {
        "@type": "State",
        "name": "Eastern Region"
      },
      {
        "@type": "Country",
        "name": "Uganda"
      }
    ],
    "knowsAbout": [
      "General Dentistry",
      "Cosmetic Dentistry",
      "Orthodontics",
      "Dental Implants",
      "Teeth Whitening",
      "Pediatric Dentistry",
      "Emergency Dental Care",
      "Oral Surgery",
      "Root Canal Treatment",
      "Dental Crowns"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
};

export default GoogleBusinessProfile;
