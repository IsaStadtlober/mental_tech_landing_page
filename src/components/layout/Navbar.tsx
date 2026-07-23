import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { SparkRewardIcon } from '../common/Icons';
import { PrimaryButton } from '../common/PrimaryButton';
import { scrollToSection } from '../../utils/scroll';
import { EASE_SLIDE } from '../../constants/animations';

export const Navbar = () => {
    const [isDarkBg, setIsDarkBg] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const darkSection1 = document.getElementById('final-cta');
            const darkSection2 = document.getElementById('footer');
            const triggerPoint = 150;
            let isDark = false;

            if (darkSection1) {
                const rect = darkSection1.getBoundingClientRect();
                if (rect.top <= triggerPoint && rect.bottom >= triggerPoint)
                    isDark = true;
            }
            if (darkSection2) {
                const rect = darkSection2.getBoundingClientRect();
                if (rect.top <= triggerPoint && rect.bottom >= triggerPoint)
                    isDark = true;
            }

            setIsDarkBg(isDark);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE_SLIDE }}
            className={`sticky top-0 z-50 backdrop-blur-md border-b px-6 md:px-12 py-5 flex justify-between items-center transition-colors duration-500 ${isDarkBg
                    ? 'bg-[#173F37]/70 border-white/10'
                    : 'bg-bg/70 border-borderSoft'
                }`}
        >
            <div className="flex items-center gap-2">
                <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-white transition-colors duration-500 ${isDarkBg ? 'bg-primary-light' : 'bg-primary'
                        }`}
                >
                    <SparkRewardIcon className="w-5 h-5" />
                </div>
                <span
                    className={`font-heading font-bold text-xl tracking-tight transition-colors duration-500 ${isDarkBg ? 'text-white' : 'text-primary'
                        }`}
                >
                    Mental Tech
                </span>
            </div>

            <div className="hidden md:flex items-center gap-8">
                <a
                    href="#pilares"
                    className={`font-body text-sm font-medium transition-colors ${isDarkBg
                            ? 'text-white/70 hover:text-white'
                            : 'text-textMuted hover:text-primary'
                        }`}
                >
                    Por que é diferente?
                </a>
                <a
                    href="#como-funciona"
                    className={`font-body text-sm font-medium transition-colors ${isDarkBg
                            ? 'text-white/70 hover:text-white'
                            : 'text-textMuted hover:text-primary'
                        }`}
                >
                    Como funciona
                </a>
                <a
                    href="#ecossistema"
                    className={`font-body text-sm font-medium transition-colors ${isDarkBg
                            ? 'text-white/70 hover:text-white'
                            : 'text-textMuted hover:text-primary'
                        }`}
                >
                    Para escolas e famílias
                </a>
            </div>

            <div className="flex items-center gap-4">
                <button
                    className={`hidden sm:block font-heading font-semibold transition-colors text-sm ${isDarkBg
                            ? 'text-white hover:text-primary-light'
                            : 'text-primary hover:text-primary-light'
                        }`}
                >
                    Entrar
                </button>
                <PrimaryButton
                    variant={isDarkBg ? 'white' : 'primary'}
                    className="!py-[10px] !px-[18px] !text-[14px]"
                    onClick={() => scrollToSection('final-cta')}
                >
                    Agendar Demo
                </PrimaryButton>
            </div>
        </motion.nav>
    );
};