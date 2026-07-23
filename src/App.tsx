import React, { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  HeartHandsIcon, 
  SparkRewardIcon, 
  ClipboardCheckIcon, 
  LinkedPathsIcon, 
  SchoolIcon, 
  FamilyIcon, 
  ChevronRightIcon, 
  StarIcon 
} from './Icons';

// Estilos globais e injeção do sistema de design "Soft UI"
const DesignSystemStyles = () => (
  <style
    dangerouslySetInnerHTML={{
      __html: `
    @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=Quicksand:wght@500;600;700&display=swap');
    
    /* ADICIONADO: Rolagem suave global para links com âncoras (#) */
    html {
      scroll-behavior: smooth;
    }

    :root {
      --bg: #FCF6F0;
      --bg-soft: #EAF3F0;
      --bg-subtle: #F6F7F7;
      --card: #FFFFFF;
      --primary: #1E6B5C;
      --primary-light: #2F8F76;
      --teal: #589B8B;
      --text-dark: #173F37;
      --text-muted: #6B7A75;
      --text-faint: #8A968F;
      --text-card: #4A5A55;
      --border-soft: #EFE7DC;
      --disabled: #B9C7C1;
      
      --font-heading: 'Quicksand', sans-serif;
      --font-body: 'Atkinson Hyperlegible', sans-serif;
      
      --shadow-card: 0 8px 14px rgba(23, 63, 55, 0.18);
      --shadow-btn: 0 10px 16px rgba(30, 107, 92, 0.35);
      --shadow-sheet: 0 -6px 24px rgba(23, 63, 55, 0.08);
      
      --grad-primary: linear-gradient(135deg, #2F8F76 0%, #1E6B5C 100%);
    }

    body {
      background-color: var(--bg);
      color: var(--text-dark);
      font-family: var(--font-body);
      -webkit-font-smoothing: antialiased;
      margin: 0;
      overflow-x: hidden;
    }

    .font-heading { font-family: var(--font-heading); }
    .font-body { font-family: var(--font-body); }
    
    .bg-primary { background-color: var(--primary); }
    .bg-bg { background-color: var(--bg); }
    .bg-bgSoft { background-color: var(--bg-soft); }
    .bg-card { background-color: var(--card); }
    
    .text-primary { color: var(--primary); }
    .text-textDark { color: var(--text-dark); }
    .text-textMuted { color: var(--text-muted); }
    .text-textCard { color: var(--text-card); }
    
    .border-borderSoft { border-color: var(--border-soft); }
    
    .shadow-card { box-shadow: var(--shadow-card); }
    .shadow-btn { box-shadow: var(--shadow-btn); }
    
    .bg-gradPrimary { background: var(--grad-primary); }
  `,
    }}
  />
);

// ADICIONADO: Função auxiliar para rolar suavemente via JS (usada nos botões do Hero)
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const EASE_STANDARD: [number, number, number, number] = [0.33, 1, 0.68, 1];
const EASE_SLIDE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_POP: [number, number, number, number] = [0.34, 1.56, 0.64, 1];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_SLIDE },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Variações de caminhos de onda para evitar repetição visual
const WAVE_PATHS: Record<number, string> = {
  1: 'M0,0 C240,120 480,120 720,60 C960,0 1200,0 1440,60 L1440,120 L0,120 Z',
  2: 'M0,40 C360,110 720,10 1080,80 C1260,115 1380,50 1440,30 L1440,120 L0,120 Z',
  3: 'M0,60 C180,15 360,110 720,55 C1080,5 1260,115 1440,40 L1440,120 L0,120 Z',
  4: 'M0,25 C300,95 600,-5 900,85 C1200,135 1320,45 1440,35 L1440,120 L0,120 Z',
};

interface SectionWaveProps {
  color: string;
  flip?: boolean;
  variant?: 1 | 2 | 3 | 4;
}

const SectionWave = ({ color, flip = false, variant = 1 }: SectionWaveProps) => {
  const path = WAVE_PATHS[variant] || WAVE_PATHS[1];
  return (
    <div
      className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none"
      style={{ transform: 'translateY(-99%)' }}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[80px]"
        style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
      >
        <path d={path} fill={color}></path>
      </svg>
    </div>
  );
};

interface IconProps {
  className?: string;
}

const FlowArrow = () => (
  <div className="flex items-center justify-center py-4 md:py-0 px-2 self-center z-10">
    <svg
      className="w-8 h-8 text-primary transform rotate-90 md:rotate-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  </div>
);

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'white' | 'ghostWhite';

interface PrimaryButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart'> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  icon?: React.ComponentType<IconProps>;
  className?: string;
}

const PrimaryButton = ({
  children,
  variant = 'primary',
  icon: Icon,
  className = '',
  ...props
}: PrimaryButtonProps) => {
  const baseStyles =
    'flex items-center justify-center font-heading font-semibold text-[16px] md:text-[18px] transition-colors focus:outline-none';
  const shapeStyles = 'px-[24px] py-[16px] rounded-[18px] gap-[8px]';

  const variants: Record<ButtonVariant, string> = {
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
      className={`${baseStyles} ${
        variant !== 'ghost' ? shapeStyles : 'py-2 px-4 rounded-xl gap-2'
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

interface SoftCardProps {
  children: React.ReactNode;
  className?: string;
}

const SoftCard = ({ children, className = '' }: SoftCardProps) => (
  <motion.div
    variants={fadeInUp}
    className={`bg-card border border-borderSoft rounded-[28px] shadow-card p-6 md:p-8 ${className}`}
  >
    {children}
  </motion.div>
);

interface EyebrowLabelProps {
  children: React.ReactNode;
  dotColor?: string;
}

const EyebrowLabel = ({ children, dotColor = 'var(--primary-light)' }: EyebrowLabelProps) => (
  <div className="flex items-center gap-2 mb-3">
    <span
      className="w-2 h-2 rounded-full"
      style={{ backgroundColor: dotColor }}
    ></span>
    <span className="font-body font-bold text-[11px] md:text-[12px] uppercase tracking-[1.5px] text-primary">
      {children}
    </span>
  </div>
);

interface FloatingBlobProps {
  className?: string;
  delay?: number;
  color?: string;
  opacity?: number;
}

const FloatingBlob = ({
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
        ease: 'easeInOut',
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

const Navbar = () => {
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
      className={`sticky top-0 z-50 backdrop-blur-md border-b px-6 md:px-12 py-5 flex justify-between items-center transition-colors duration-500 ${
        isDarkBg
          ? 'bg-[#173F37]/70 border-white/10'
          : 'bg-bg/70 border-borderSoft'
      }`}
    >
      <div className="flex items-center gap-2">
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center text-white transition-colors duration-500 ${
            isDarkBg ? 'bg-primary-light' : 'bg-primary'
          }`}
        >
          <SparkRewardIcon className="w-5 h-5" />
        </div>
        <span
          className={`font-heading font-bold text-xl tracking-tight transition-colors duration-500 ${
            isDarkBg ? 'text-white' : 'text-primary'
          }`}
        >
          Mental Tech
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <a
          href="#pilares"
          className={`font-body text-sm font-medium transition-colors ${
            isDarkBg
              ? 'text-white/70 hover:text-white'
              : 'text-textMuted hover:text-primary'
          }`}
        >
          Por que é diferente?
        </a>
        <a
          href="#como-funciona"
          className={`font-body text-sm font-medium transition-colors ${
            isDarkBg
              ? 'text-white/70 hover:text-white'
              : 'text-textMuted hover:text-primary'
          }`}
        >
          Como funciona
        </a>
        <a
          href="#ecossistema"
          className={`font-body text-sm font-medium transition-colors ${
            isDarkBg
              ? 'text-white/70 hover:text-white'
              : 'text-textMuted hover:text-primary'
          }`}
        >
          Para escolas e famílias
        </a>
      </div>

      <div className="flex items-center gap-4">
        <button
          className={`hidden sm:block font-heading font-semibold transition-colors text-sm ${
            isDarkBg
              ? 'text-white hover:text-primary-light'
              : 'text-primary hover:text-primary-light'
          }`}
        >
          Entrar
        </button>
        {/* MODIFICADO: Redireciona para o CTA Final de agendamento suavemente ao clicar */}
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

const Hero = () => (
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
          {/* MODIFICADO: Rola suavemente até o formulário/seção final */}
          <PrimaryButton 
            variant="primary" 
            className="w-full sm:w-auto"
            onClick={() => scrollToSection('final-cta')}
          >
            Começar na minha escola
          </PrimaryButton>
          {/* MODIFICADO: Rola suavemente até a seção "Como funciona" */}
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

const ValuePillars = () => (
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

const HowItWorks = () => (
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
          <React.Fragment key={item.step}>
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
          </React.Fragment>
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

const AudienceSplit = () => (
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
          {/* MODIFICADO: Rola suavemente até o formulário final de contato */}
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
          {/* MODIFICADO: Rola suavemente até o formulário final de contato */}
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

const FinalCTA = () => (
  <section
    id="final-cta"
    className="bg-primary pt-20 md:pt-28 pb-24 md:pb-36 px-6 relative"
  >
    <SectionWave color="var(--primary)" flip variant={4} />

    {/* Ajustado: O topo do contêiner foi deslocado para cima para englobar a altura das ondas, evitando cortes secos na bola flutuante */}
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

const Footer = () => (
  <footer
    id="footer"
    className="bg-[var(--text-dark)] pt-16 pb-8 px-6 md:px-12 text-white/70 relative"
  >
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-4">
            <SparkRewardIcon className="w-6 h-6 text-[var(--primary-light)]" />
            <span className="font-heading font-bold text-xl text-white">
              Mental Tech
            </span>
          </div>
          <p className="font-body text-sm leading-relaxed text-white/60">
            Educação inclusiva, acolhedora e gamificada. Quebrando barreiras
            para que mentes atípicas possam brilhar no seu próprio ritmo.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 md:gap-24">
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-bold text-white mb-2">
              Plataforma
            </h4>
            <a
              href="#"
              className="font-body text-sm hover:text-white transition-colors"
            >
              Como funciona
            </a>
            <a
              href="#"
              className="font-body text-sm hover:text-white transition-colors"
            >
              Para Escolas
            </a>
            <a
              href="#"
              className="font-body text-sm hover:text-white transition-colors"
            >
              Para Famílias
            </a>
            <a
              href="#"
              className="font-body text-sm hover:text-white transition-colors"
            >
              Preços
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-bold text-white mb-2">
              Institucional
            </h4>
            <a
              href="#"
              className="font-body text-sm hover:text-white transition-colors"
            >
              Sobre nós
            </a>
            <a
              href="#"
              className="font-body text-sm hover:text-white transition-colors"
            >
              Nossa metodologia
            </a>
            <a
              href="#"
              className="font-body text-sm hover:text-white transition-colors"
            >
              Blog & Artigos
            </a>
            <a
              href="#"
              className="font-body text-sm hover:text-white transition-colors"
            >
              Contato
            </a>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50 font-body">
        <p>
          &copy; {new Date().getFullYear()} Mental Tech Educação. Todos os
          direitos reservados.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Termos de Uso
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="relative w-full min-h-screen bg-bg text-textDark selection:bg-primary/20">
      <DesignSystemStyles />
      <Navbar />
      <main>
        <Hero />
        <ValuePillars />
        <HowItWorks />
        <AudienceSplit />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}