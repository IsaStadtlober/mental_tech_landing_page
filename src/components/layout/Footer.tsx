import { SparkRewardIcon } from '../common/Icons';

export const Footer = () => (
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