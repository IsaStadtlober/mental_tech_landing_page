import { motion } from 'framer-motion';
import { ChevronRightIcon, StarIcon } from '../common/Icons';
import { PrimaryButton } from '../common/PrimaryButton';
import { FloatingBlob } from '../common/FloatingBlob';
import { EyebrowLabel } from '../common/EyebrowLabel';
import { scrollToSection } from '../../utils/scroll';
import { staggerContainer, fadeInUp, EASE_STANDARD, EASE_POP } from '../../constants/animations';

const AvatarIllustration = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_POP, delay: 0.6 }}
        className="relative w-[259px] md:w-[346px] h-[259px] md:h-[346px] mx-auto mt-16 md:mt-24"
    >
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, ease: EASE_STANDARD, repeat: Infinity }}
            className="w-full h-full relative z-10"
        >
            <svg
                viewBox="0 0 240 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 15px 25px rgba(30, 107, 92, 0.2))' }}
            >
                {/* Fundo circular suave */}
                <circle cx="107" cy="100" r="102" fill="var(--bg-soft)" />

                {/* Corpo da nuvem — path da referência, escalado e reposicionado */}
                <g transform="translate(9, 7) scale(1.9)">
                    <path
                        d="M83.034,44.719c0.94-5.371-0.068-10.837-2.902-15.559c-3.119-5.197-8.075-8.868-13.956-10.336
               c-1.805-0.451-3.657-0.68-5.506-0.68c-8.409,0-16.053,4.631-19.982,11.951c-1.879-1.284-4.1-1.975-6.421-1.975
               c-3.09,0-5.983,1.214-8.147,3.419c-1.808,1.842-2.936,4.263-3.206,6.81c-9.064,0.543-16.441,8.08-16.66,17.267
               c-0.113,4.732,1.624,9.226,4.89,12.65c3.267,3.426,7.671,5.374,12.405,5.487l56.547,0.005
               c8.088,0,14.667-6.579,14.667-14.667C94.763,51.995,89.827,46.085,83.034,44.719z"
                        fill="var(--card)"
                        stroke="var(--primary)"
                        strokeWidth="2.2"
                        strokeLinejoin="round"
                    />
                </g>

                {/* Óculos - lente esquerda */}
                <circle cx="76" cy="105" r="22" fill="var(--bg)" stroke="var(--primary)" strokeWidth="6" />
                {/* Óculos - lente direita */}
                <circle cx="132" cy="105" r="22" fill="var(--bg)" stroke="var(--primary)" strokeWidth="6" />
                {/* Ponte central */}
                <path d="M101 101 Q104 97 107 101" stroke="var(--primary)" strokeWidth="6" strokeLinecap="round" fill="none" />
                {/* Hastes laterais */}
                <path d="M45 105 L54 105" stroke="var(--primary)" strokeWidth="6" strokeLinecap="round" />
                <path d="M156 105 L162 105" stroke="var(--primary)" strokeWidth="6" strokeLinecap="round" />
            </svg>
        </motion.div>

        <motion.div
            animate={{ scale: [1, 0.8, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 3.5, ease: EASE_STANDARD, repeat: Infinity }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-6 rounded-[100%] bg-[rgba(23,63,55,1)] blur-md z-0"
        />
    </motion.div>
);

export const Hero = () => (
    <section className="relative min-h-[90vh] bg-bg overflow-hidden flex flex-col justify-center pt-20 pb-28 md:pb-36 px-6">
        <FloatingBlob className="top-[-10%] left-[-10%] w-[50vw] h-[50vw] opacity-40" />
        <FloatingBlob
            className="bottom-[17%] right-[-15%] w-[40vw] h-[40vw] opacity-30"
            color="var(--primary-light)"
            delay={1}
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
            >
                <motion.div variants={fadeInUp} className="flex justify-center">
                    <EyebrowLabel>Educação pensada para mentes atípicas</EyebrowLabel>
                </motion.div>

                <motion.h1
                    variants={fadeInUp}
                    className="font-heading font-bold text-textDark text-[38px] md:text-[54px] lg:text-[64px] leading-[1.15] mt-4 mb-6 tracking-tight"
                >
                    Aprender não precisa ser <br className="hidden md:block" />
                    <span className="relative inline-block">
                        uma batalha diária.
                        <svg
                            className="absolute w-[105%] left-[-2.5%] -bottom-[20px] md:-bottom-[28px] h-[16px] md:h-[22px] pointer-events-none text-primary opacity-90"
                            viewBox="0 0 400 30"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M5,22 C30,10 60,15 90,22 C120,29 150,12 180,18 C220,26 270,8 310,20 C350,32 380,10 395,16"
                                stroke="currentColor"
                                strokeWidth="7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </motion.h1>

                <motion.p
                    variants={fadeInUp}
                    className="font-body text-textMuted text-[16px] md:text-[18px] leading-[1.6] max-w-2xl mx-auto mt-14 mb-14"
                >
                    Uma plataforma gamificada desenhada para crianças neurodivergentes.
                    Transformamos o esforço em hábito através de um ciclo de recompensa
                    acolhedor que reduz a ansiedade e respeita o ritmo de cada aluno.
                </motion.p>

                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <PrimaryButton
                        variant="primary"
                        className="w-full sm:w-auto"
                        onClick={() => scrollToSection('final-cta')}
                    >
                        Começar na minha escola
                    </PrimaryButton>
                    <PrimaryButton
                        variant="ghost"
                        icon={ChevronRightIcon}
                        className="w-full sm:w-auto mt-2 sm:mt-0"
                        onClick={() => scrollToSection('como-funciona')}
                    >
                        Ver como funciona
                    </PrimaryButton>
                </motion.div>
            </motion.div>

            <AvatarIllustration />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-12 bg-card border border-borderSoft rounded-full px-6 py-3 shadow-card flex items-center gap-3"
            >
                <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-bgSoft border-2 border-white flex items-center justify-center"
                        >
                            <StarIcon className="w-4 h-4 text-primary" />
                        </div>
                    ))}
                </div>
                <span className="font-body text-sm text-textCard font-medium">
                    Confiado por educadores e famílias inovadoras.
                </span>
            </motion.div>
        </div>
    </section>
);