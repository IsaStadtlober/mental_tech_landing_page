// Função auxiliar para rolar suavemente via JS (usada nos botões)
export const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};