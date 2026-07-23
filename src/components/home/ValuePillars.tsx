import { motion } from 'framer-motion';
import {
    HeartHandsIcon,
    SparkRewardIcon,
    ClipboardCheckIcon,
    LinkedPathsIcon,
} from '../common/Icons';
import { SoftCard } from '../common/SoftCard';
import { SectionWave } from '../common/SectionWave';
import { EyebrowLabel } from '../common/EyebrowLabel';
import { staggerContainer, fadeInUp } from '../../constants/animations';

export const ValuePillars = () => (
    <section
        id="pilares"
        className="bg-bgSoft pt-16 md:pt-24 pb-24 md:pb-36 px-6 md:px-12 relative"
    >
        <SectionWave color="var(--bg-soft)" variant={1} />
        <div className="max-w-6xl mx-auto">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={staggerContainer}
                className="max-w-2xl mx-auto text-center mb-16"
            >
                <div className="flex justify-center">
                    <EyebrowLabel>Nossos Pilares</EyebrowLabel>
                </div>
                <motion.h2
                    variants={fadeInUp}
                    className="font-heading font-bold text-3xl md:text-4xl text-textDark mt-4 mb-4"
                >
                    Por que o Mental Tech é diferente?
                </motion.h2>
                <motion.p
                    variants={fadeInUp}
                    className="font-body text-textMuted text-base"
                >
                    Abandonamos a gamificação genérica para focar em psicologia
                    comportamental adaptada. Nosso ambiente é seguro, previsível e focado
                    em construir confiança.
                </motion.p>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                <SoftCard>
                    <div className="bg-bg w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-borderSoft">
                        <HeartHandsIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-[22px] text-textDark mb-3">
                        Feito para a neurodivergência
                    </h3>
                    <p className="font-body text-textCard text-[15px] leading-[1.5]">
                        Nossa interface é desenhada para reduzir a carga cognitiva. Sem
                        temporizadores agressivos, sem poluição visual. Respeitamos padrões
                        de atenção variados, focando apenas no que importa para o
                        aprendizado da criança.
                    </p>
                </SoftCard>

                <SoftCard>
                    <div className="bg-bg w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-borderSoft">
                        <SparkRewardIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-[22px] text-textDark mb-3">
                        Recompensa que ensina esforço
                    </h3>
                    <p className="font-body text-textCard text-[15px] leading-[1.5]">
                        O reconhecimento é imediato apenas por tentar. Ao enviar uma
                        atividade, o aluno é celebrado na hora. A qualidade é avaliada
                        depois, separando o hábito da performance. Ensinamos o valor da
                        dedicação sem punir o erro.
                    </p>
                </SoftCard>

                <SoftCard>
                    <div className="bg-bg w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-borderSoft">
                        <ClipboardCheckIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-[22px] text-textDark mb-3">
                        Zero burocracia na sala de aula
                    </h3>
                    <p className="font-body text-textCard text-[15px] leading-[1.5]">
                        Sabemos que professores estão sobrecarregados. Nossa configuração
                        guiada permite publicar atividades e gerenciar turmas em minutos.
                        Menos tempo administrando sistemas e mais tempo apoiando quem
                        realmente importa.
                    </p>
                </SoftCard>

                <SoftCard>
                    <div className="bg-bg w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-borderSoft">
                        <LinkedPathsIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-[22px] text-textDark mb-3">
                        Uma jornada conectada
                    </h3>
                    <p className="font-body text-textCard text-[15px] leading-[1.5]">
                        O ecossistema abraça a todos. Alunos, professores e responsáveis
                        ficam alinhados em uma única plataforma. Pais recebem resumos
                        semanais automáticos de progresso sem precisar baixar nenhum
                        aplicativo extra.
                    </p>
                </SoftCard>
            </motion.div>
        </div>
    </section>
);