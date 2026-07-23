import { motion } from 'framer-motion';
import { SchoolIcon, FamilyIcon } from '../common/Icons';
import { SoftCard } from '../common/SoftCard';
import { SectionWave } from '../common/SectionWave';
import { EyebrowLabel } from '../common/EyebrowLabel';
import { PrimaryButton } from '../common/PrimaryButton';
import { scrollToSection } from '../../utils/scroll';
import { staggerContainer, fadeInUp } from '../../constants/animations';

export const AudienceSplit = () => (
    <section
        id="ecossistema"
        className="bg-bgSoft pt-16 md:pt-24 pb-24 md:pb-36 px-6 md:px-12 relative"
    >
        <SectionWave color="var(--bg-soft)" variant={3} />
        <div className="max-w-6xl mx-auto">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="max-w-2xl mx-auto text-center mb-16"
            >
                <div className="flex justify-center">
                    <EyebrowLabel>Para todo o ecossistema</EyebrowLabel>
                </div>
                <motion.h2
                    variants={fadeInUp}
                    className="font-heading font-bold text-3xl md:text-4xl text-textDark mt-4"
                >
                    Desenvolvido para quem ensina e quem cuida de perto.
                </motion.h2>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
                <SoftCard className="flex flex-col h-full !p-8 md:!p-10">
                    <div className="bg-white border border-borderSoft w-14 h-14 rounded-[18px] flex items-center justify-center mb-8 shadow-sm">
                        <SchoolIcon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-[26px] text-textDark mb-4">
                        Para escolas e professores
                    </h3>
                    <div className="font-body text-textCard text-[16px] leading-[1.6] space-y-4 flex-grow mb-10">
                        <p>
                            Facilite o dia a dia da sua equipe pedagógica. Oferecemos um
                            processo de integração incrivelmente ágil: cadastre turmas, alunos
                            e atividades em minutos.
                        </p>
                        <p>
                            Nossos relatórios unificados dão visibilidade real sobre o
                            engajamento e o progresso de cada aluno, permitindo intervenções
                            mais precisas e humanas sem aumentar a carga de trabalho.
                        </p>
                    </div>
                    <PrimaryButton
                        variant="primary"
                        className="self-start w-full sm:w-auto"
                        onClick={() => scrollToSection('final-cta')}
                    >
                        Soluções para instituições
                    </PrimaryButton>
                </SoftCard>

                <SoftCard className="flex flex-col h-full !p-8 md:!p-10">
                    <div className="bg-white border border-borderSoft w-14 h-14 rounded-[18px] flex items-center justify-center mb-8 shadow-sm">
                        <FamilyIcon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-[26px] text-textDark mb-4">
                        Para pais e famílias
                    </h3>
                    <div className="font-body text-textCard text-[16px] leading-[1.6] space-y-4 flex-grow mb-10">
                        <p>
                            Acompanhe o desenvolvimento do seu filho de perto, mas sem esforço
                            extra ou ansiedade tecnológica. O Mental Tech faz a ponte entre a
                            escola e a sua casa de forma orgânica.
                        </p>
                        <p>
                            Receba atualizações automáticas e resumos semanais de progresso
                            diretamente no seu celular ou e-mail, ganhando tranquilidade e
                            total transparência sobre a jornada escolar.
                        </p>
                    </div>
                    <PrimaryButton
                        variant="primary"
                        className="self-start w-full sm:w-auto"
                        onClick={() => scrollToSection('final-cta')}
                    >
                        Conheça os benefícios para a família
                    </PrimaryButton>
                </SoftCard>
            </motion.div>
        </div>
    </section>
);