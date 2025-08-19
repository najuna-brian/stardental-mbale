// Performance optimizations for better SEO rankings
export const preloadCriticalResources = () => {
  // Preload critical images
  const criticalImages = [
    '/images/star-dental-logo.jpeg',
    '/images/dental-team.jpg',
    '/images/dental-services.jpg'
  ];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });

  // Preload critical CSS
  const criticalCSS = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
  ];

  criticalCSS.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    link.onload = function() { this.rel = 'stylesheet'; };
    document.head.appendChild(link);
  });
};

// Optimize images for better loading performance
export const optimizeImageLoading = () => {
  // Add loading="lazy" to all images not in viewport
  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    if (index > 3) { // First 3 images load immediately
      img.loading = 'lazy';
    }
  });

  // Add proper alt tags for SEO
  images.forEach(img => {
    if (!img.alt) {
      const src = img.src;
      if (src.includes('logo')) {
        img.alt = 'Star Dental Clinic Mbale Logo - Best Dental Care Eastern Uganda';
      } else if (src.includes('team')) {
        img.alt = 'Professional Dental Team Star Dental Clinic Mbale';
      } else if (src.includes('service')) {
        img.alt = 'Modern Dental Services and Equipment Star Dental Clinic';
      }
    }
  });
};

// Add social media Open Graph optimization
export const optimizeSocialSharing = () => {
  const socialMeta = [
    { property: 'og:site_name', content: 'Star Dental Clinic Mbale' },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://stardentalclinic-mbale.com' },
    { property: 'article:publisher', content: 'https://facebook.com/stardentalclinicmbale' },
    { property: 'article:author', content: 'Star Dental Clinic Mbale' },
    { name: 'twitter:site', content: '@stardentalmbale' },
    { name: 'twitter:creator', content: '@stardentalmbale' }
  ];

  socialMeta.forEach(meta => {
    const element = document.createElement('meta');
    if (meta.property) {
      element.setAttribute('property', meta.property);
    } else {
      element.setAttribute('name', meta.name);
    }
    element.content = meta.content;
    document.head.appendChild(element);
  });
};

// Speed optimization for Core Web Vitals
export const optimizePageSpeed = () => {
  // Defer non-critical JavaScript
  const scripts = document.querySelectorAll('script[src]');
  scripts.forEach(script => {
    if (!script.src.includes('critical')) {
      script.defer = true;
    }
  });

  // Add resource hints
  const resourceHints = [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
    { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
    { rel: 'dns-prefetch', href: '//facebook.com' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' }
  ];

  resourceHints.forEach(hint => {
    const link = document.createElement('link');
    link.rel = hint.rel;
    link.href = hint.href;
    if (hint.rel === 'preconnect') {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

// Initialize all optimizations
export const initSEOOptimizations = () => {
  // Run optimizations when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      preloadCriticalResources();
      optimizeImageLoading();
      optimizeSocialSharing();
      optimizePageSpeed();
    });
  } else {
    preloadCriticalResources();
    optimizeImageLoading();
    optimizeSocialSharing();
    optimizePageSpeed();
  }
};
