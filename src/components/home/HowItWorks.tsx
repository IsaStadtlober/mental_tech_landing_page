import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { SectionWave } from '../common/SectionWave';
import { EyebrowLabel } from '../common/EyebrowLabel';
import { FlowArrow } from '../common/FlowArrow';
import { staggerContainer, fadeInUp } from '../../constants/animations';

export const HowItWorks = () => (
    <section
        id="como-funciona"
        className="bg-bg pt-16 md:pt-24 pb-24 md:pb-36 px-6 md:px-12 relative"
    >
        <SectionWave color="var(--bg)" flip variant={2} />
        <div className="max-w-6xl mx-auto">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="max-w-2xl mx-auto text-center mb-16"
            >
                <div className="flex justify-center">
                    <EyebrowLabel>O Ciclo de Aprendizado</EyebrowLabel>
                </div>
                <motion.h2
                    variants={fadeInUp}
                    className="font-heading font-bold text-3xl md:text-4xl text-textDark mt-4"
                >
                    Uma jornada de sucesso em 3 passos
                </motion.h2>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={staggerContainer}
                className="flex flex-col md:flex-row gap-6 lg:gap-8 items-stretch justify-center relative"
            >
                {[
                    {
                        step: 1,
                        title: 'O aluno tenta e é validado',
                        desc: 'Ao iniciar e concluir qualquer atividade enviada pelo professor, o esforço da criança é reconhecido de imediato na plataforma, incentivando a criação do hábito de estudo sem o peso da nota.',
                    },
                    {
                        step: 2,
                        title: 'O professor avalia em paz',
                        desc: 'Em um painel unificado e intuitivo, o educador revisa o material recebido no seu próprio ritmo, podendo adicionar comentários construtivos de forma simples e rápida.',
                    },
                    {
                        step: 3,
                        title: 'A conquista é celebrada',
                        desc: 'Após a revisão do professor, o aluno desbloqueia prêmios reais no jogo — itens cosméticos para personalizar seu avatar seguro, consolidando a motivação para a próxima tarefa.',
                    },
                ].map((item, index, array) => (
                    <Fragment key={item.step}>
                        <motion.div variants={fadeInUp} className="flex-1 relative z-10">
                            <div className="bg-card border border-borderSoft rounded-[28px] shadow-card p-8 h-full flex flex-col items-start text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-heading font-bold text-lg mb-6 shadow-btn">
                                    {item.step}
                                </div>
                                <h3 className="font-heading font-bold text-[20px] text-textDark mb-3">
                                    {item.title}
                                </h3>
                                <p className="font-body text-textMuted text-[14px] leading-[1.6]">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>

                        {index < array.length - 1 && <FlowArrow />}
                    </Fragment>
                ))}
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="font-body text-textMuted text-[15px] max-w-2xl mx-auto text-center mt-16 italic"
            >
                "Nosso ciclo não é apenas um jogo. É um sistema baseado em princípios
                estruturados de psicologia comportamental, garantindo que a motivação
                seja sustentável a longo prazo."
            </motion.p>
        </div>
    </section>
);