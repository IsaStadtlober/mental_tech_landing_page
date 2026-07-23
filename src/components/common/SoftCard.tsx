import { motion } from 'framer-motion';
import type { SoftCardProps } from '../../types';
import { fadeInUp } from '../../constants/animations';

export const SoftCard = ({ children, className = '' }: SoftCardProps) => (
    <motion.div
        variants={fadeInUp}
        className={`bg-card border border-borderSoft rounded-[28px] shadow-card p-6 md:p-8 ${className}`}
    >
        {children}
    </motion.div>
);