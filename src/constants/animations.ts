import { type Variants } from 'framer-motion';

// Curvas de easing
export const EASE_STANDARD: [number, number, number, number] = [0.33, 1, 0.68, 1];
export const EASE_SLIDE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const EASE_POP: [number, number, number, number] = [0.34, 1.56, 0.64, 1];

// Faz o efeito de fade in com um leve movimento para cima, usado em elementos que aparecem na tela
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: EASE_SLIDE },
    },
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};