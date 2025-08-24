import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for intersection observer
 * @param {boolean} options.triggerOnce - Whether to trigger animation only once
 * @returns {Array} [ref, isVisible] - Ref to attach to element and visibility state
 */
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true
  } = options;

  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
};

/**
 * Hook for staggered animations of multiple elements
 * @param {number} count - Number of elements to animate
 * @param {number} delay - Delay between each element animation (ms)
 * @param {Object} options - Intersection observer options
 * @returns {Array} [ref, visibleItems] - Ref and array of visible item indices
 */
export const useStaggeredAnimation = (count, delay = 100, options = {}) => {
  const [ref, isVisible] = useScrollAnimation(options);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    if (isVisible) {
      const timeouts = [];
      for (let i = 0; i < count; i++) {
        const timeout = setTimeout(() => {
          setVisibleItems(prev => [...prev, i]);
        }, i * delay);
        timeouts.push(timeout);
      }

      return () => {
        timeouts.forEach(clearTimeout);
      };
    }
  }, [isVisible, count, delay]);

  return [ref, visibleItems];
};

/**
 * Hook for parallax scroll effects
 * @param {number} speed - Parallax speed multiplier
 * @returns {Array} [ref, transform] - Ref and transform value
 */
export const useParallax = (speed = 0.5) => {
  const ref = useRef();
  const [transform, setTransform] = useState('translateY(0px)');

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      setTransform(`translateY(${rate}px)`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return [ref, transform];
};

/**
 * Hook for mouse-following animations
 * @param {Object} options - Configuration options
 * @param {number} options.strength - Movement strength (0-1)
 * @param {boolean} options.invert - Invert movement direction
 * @returns {Array} [ref, transform] - Ref and transform value
 */
export const useMouseFollow = (options = {}) => {
  const { strength = 0.1, invert = false } = options;
  const ref = useRef();
  const [transform, setTransform] = useState('translate(0px, 0px)');

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const moveX = (invert ? -x : x) * strength;
      const moveY = (invert ? -y : y) * strength;
      
      setTransform(`translate(${moveX}px, ${moveY}px)`);
    };

    const handleMouseLeave = () => {
      setTransform('translate(0px, 0px)');
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, invert]);

  return [ref, transform];
};

/**
 * Hook for typing animation effect
 * @param {string} text - Text to animate
 * @param {number} speed - Typing speed (ms per character)
 * @param {number} delay - Initial delay before typing starts
 * @returns {Object} - Animation state and controls
 */
export const useTypingAnimation = (text, speed = 50, delay = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!text) return;

    const startTyping = () => {
      setIsTyping(true);
      let currentIndex = 0;

      const typeInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setIsComplete(true);
          setIsTyping(false);
        }
      }, speed);

      return () => clearInterval(typeInterval);
    };

    const delayTimeout = setTimeout(startTyping, delay);
    return () => clearTimeout(delayTimeout);
  }, [text, speed, delay]);

  const reset = () => {
    setDisplayText('');
    setIsComplete(false);
    setIsTyping(false);
  };

  return {
    displayText,
    isComplete,
    isTyping,
    reset
  };
};

export default useScrollAnimation;
