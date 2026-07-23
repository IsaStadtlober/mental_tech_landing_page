import { motion } from 'framer-motion';
import type { PrimaryButtonProps } from '../../types';
import { EASE_STANDARD } from '../../constants/animations';

export const PrimaryButton = ({
    children,
    variant = 'primary',
    icon: Icon,
    className = '',
    ...props
}: PrimaryButtonProps) => {
    const baseStyles =
        'flex items-center justify-center font-heading font-semibold text-[16px] md:text-[18px] transition-colors focus:outline-none';
    const shapeStyles = 'px-[24px] py-[16px] rounded-[18px] gap-[8px]';

    const variants: Record<string, string> = {
        primary: 'bg-gradPrimary text-white shadow-btn border-none',
        secondary:
            'bg-card text-primary border border-borderSoft shadow-card hover:bg-[#F9F5F0]',
        ghost: 'bg-transparent text-primary hover:bg-primary/5',
        white: 'bg-white text-primary shadow-btn hover:bg-[#F6F7F7]',
        ghostWhite:
            'bg-transparent text-white border border-white/40 hover:bg-white/10',
    };

    return (
        <motion.button
            className={`${baseStyles} ${variant !== 'ghost' ? shapeStyles : 'py-2 px-4 rounded-xl gap-2'
                } ${variants[variant]} ${className}`}
            whileHover={
                variant !== 'ghost'
                    ? { scale: 1.03, transition: { duration: 0.2, ease: EASE_STANDARD } }
                    : { x: 4 }
            }
            whileTap={{ scale: 0.97, transition: { duration: 0.15 } }}
            {...props}
        >
            {children}
            {Icon && <Icon className="w-5 h-5" />}
        </motion.button>
    );
};