import { motion } from 'framer-motion';
import type { FloatingBlobProps } from '../../types';
import { EASE_STANDARD } from '../../constants/animations';

export const FloatingBlob = ({
    className,
    delay = 0,
    color = 'var(--bg-soft)',
    opacity = 1,
}: FloatingBlobProps) => {
    return (
        <motion.div
            className={`absolute z-0 pointer-events-none ${className ?? ''}`}
            animate={{
                y: [0, -30, 0],
                rotate: [0, 8, -5, 0],
            }}
            transition={{
                duration: 8,
                ease: EASE_STANDARD,
                repeat: Infinity,
                repeatType: 'mirror',
                delay: delay,
            }}
        >
            <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                style={{ opacity }}
            >
                <path
                    fill={color}
                    d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.6,-46.2C91.4,-33.3,98.1,-16.7,96.5,-1C94.8,14.6,84.7,29.3,74.5,42.4C64.3,55.5,54,67.1,41.2,74.9C28.4,82.8,14.2,86.9,0.5,86C-13.2,85.1,-26.4,79.2,-39.3,71.8C-52.2,64.4,-64.8,55.5,-73.2,43.4C-81.6,31.2,-85.8,15.6,-85.7,0C-85.6,-15.5,-81.2,-31,-72.6,-42.9C-64,-54.9,-51.2,-63.3,-38.3,-71C-25.4,-78.7,-12.7,-85.6,1.4,-88.1C15.5,-90.6,30.7,-83.7,44.7,-76.4Z"
                    transform="translate(100 100)"
                />
            </svg>
        </motion.div>
    );
};