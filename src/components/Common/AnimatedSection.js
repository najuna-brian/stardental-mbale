import React from 'react';
import { useScrollAnimation, useStaggeredAnimation, useParallax, useMouseFollow, useTypingAnimation } from '../../hooks/useScrollAnimation';

/**
 * AnimatedSection component for scroll-triggered animations
 */
const AnimatedSection = ({ 
  children, 
  animation = 'fadeInUp',
  delay = 0,
  className = '',
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px',
  triggerOnce = true,
  ...props 
}) => {
  const [ref, isVisible] = useScrollAnimation({ 
    threshold, 
    rootMargin, 
    triggerOnce 
  });

  const animationClass = isVisible ? `animate-${animation}` : '';
  const delayClass = delay > 0 ? `delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`${animationClass} ${delayClass} ${className}`.trim()}
      style={{ opacity: isVisible ? 1 : 0 }}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * StaggeredContainer component for staggered animations of child elements
 */
export const StaggeredContainer = ({ 
  children, 
  animation = 'fadeInUp',
  delay = 100,
  className = '',
  ...props 
}) => {
  const childrenArray = React.Children.toArray(children);
  const [ref, visibleItems] = useStaggeredAnimation(
    childrenArray.length, 
    delay, 
    { threshold: 0.1, triggerOnce: true }
  );

  return (
    <div ref={ref} className={className} {...props}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          className={visibleItems.includes(index) ? `animate-${animation}` : ''}
          style={{ 
            opacity: visibleItems.includes(index) ? 1 : 0,
            animationDelay: `${index * delay}ms`
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

/**
 * ParallaxElement component for parallax scroll effects
 */
export const ParallaxElement = ({ 
  children, 
  speed = 0.5, 
  className = '',
  ...props 
}) => {
  const [ref, transform] = useParallax(speed);

  return (
    <div
      ref={ref}
      className={className}
      style={{ transform }}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * MouseFollowElement component for mouse-following animations
 */
export const MouseFollowElement = ({ 
  children, 
  strength = 0.1, 
  invert = false,
  className = '',
  ...props 
}) => {
  const [ref, transform] = useMouseFollow({ strength, invert });

  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-out ${className}`}
      style={{ transform }}
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * CountUp component for animated numbers
 */
export const CountUp = ({ 
  end, 
  duration = 2000, 
  delay = 0,
  className = '',
  prefix = '',
  suffix = '',
  ...props 
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.3 });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now() + delay;
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      if (now < startTime) {
        requestAnimationFrame(updateCount);
        return;
      }

      const progress = Math.min((now - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, end, duration, delay]);

  return (
    <span ref={ref} className={className} {...props}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

/**
 * TypingText component for typewriter effect
 */
export const TypingText = ({ 
  text, 
  speed = 50, 
  delay = 0,
  className = '',
  cursor = true,
  ...props 
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.3 });
  const { displayText, isComplete } = useTypingAnimation(
    isVisible ? text : '', 
    speed, 
    delay
  );

  return (
    <span ref={ref} className={className} {...props}>
      {displayText}
      {cursor && !isComplete && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

/**
 * HoverCard component with enhanced hover animations
 */
export const HoverCard = ({ 
  children, 
  effect = 'lift',
  className = '',
  ...props 
}) => {
  const effectClass = `hover-${effect}`;

  return (
    <div className={`${effectClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

/**
 * FloatingElement component for continuous floating animation
 */
export const FloatingElement = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <div className={`animate-float ${className}`} {...props}>
      {children}
    </div>
  );
};

/**
 * PulseGlow component for pulsing glow effect
 */
export const PulseGlow = ({ 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <div className={`animate-pulse-glow ${className}`} {...props}>
      {children}
    </div>
  );
};

export default AnimatedSection;
