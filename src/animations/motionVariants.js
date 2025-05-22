// motionVariants.js

// ✅ Fade In
export const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
};


// ✅ Fade Up


// ✅ Zoom In
export const zoomIn = {
    initial: { scale: 0.9, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: { duration: 0.5, ease: 'easeOut' },
};

export const slideInLeft = {
    initial: { x: -100, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
};

export const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
};

export const fadeFromRight = {
    initial: { x: 50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
};

// ✅ Delayed Spring (e.g., delay a fade-in)
export const delayedFadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { delay: 0.5, type: 'spring', stiffness: 100 },
};

// ✅ Reveal (from bottom, large movement)
export const reveal = {
    initial: { opacity: 0, y: 100 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
};

// ✅ Stagger for children
export const staggerContainer = {
    initial: {},
    whileInView: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

// ✅ Page Transition
export const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.4 },
};

// ✅ Parallax (for scrolling effects, used manually with motion value)
