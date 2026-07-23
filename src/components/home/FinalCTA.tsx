import { motion } from 'framer-motion';
import { SectionWave } from '../common/SectionWave';
import { PrimaryButton } from '../common/PrimaryButton';
import { FloatingBlob } from '../common/FloatingBlob';
import { staggerContainer, fadeInUp } from '../../constants/animations';

export const FinalCTA = () => (
    <section
        id="final-cta"
        className="bg-primary pt-20 md:pt-28 pb-24 md:pb-36 px-6 relative"
    >
        <SectionWave color="var(--primary)" flip variant={4} />

        <div className="absolute -top-[40px] md:-top-[80px] inset-x-0 bottom-0 overflow-hidden pointer-events-none">
            <FloatingBlob
                color="var(--primary-light)"
                opacity={0.3}
                className="top-[5%] right-[-10%] w-[80vw] md:w-[40vw] h-[80vw] md:h-[40vw]"
            />
        </div>

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative z-10 max-w-3xl mx-auto text-center"
        >
            <motion.h2
                variants={fadeInUp}
                className="font-heading font-bold text-white text-[32px] md:text-[42px] leading-[1.2] mb-6"
            >
                Pronto para transformar a experiência na sala de aula?
            </motion.h2>

            <motion.p
                variants={fadeInUp}
                className="font-body text-white/85 text-[16px] md:text-[18px] mb-10"
            >
                Junte-se às escolas e famílias que já estão mudando a forma como
                crianças neurodivergentes aprendem, interagem e celebram suas
                conquistas.
            </motion.p>

            <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
            >
                <PrimaryButton variant="white" className="w-full sm:w-auto">
                    Implementar na minha escola
                </PrimaryButton>
                <PrimaryButton variant="ghostWhite" className="w-full sm:w-auto">
                    Falar com um consultor
                </PrimaryButton>
            </motion.div>
        </motion.div>
    </section>
);