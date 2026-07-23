export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'white' | 'ghostWhite';

export interface IconProps {
    className?: string;
}

export interface PrimaryButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart'> {
    children: React.ReactNode;
    variant?: ButtonVariant;
    icon?: React.ComponentType<IconProps>;
    className?: string;
}

export interface SoftCardProps {
    children: React.ReactNode;
    className?: string;
}

export interface EyebrowLabelProps {
    children: React.ReactNode;
    dotColor?: string;
}

export interface FloatingBlobProps {
    className?: string;
    delay?: number;
    color?: string;
    opacity?: number;
}

export interface SectionWaveProps {
    color: string;
    flip?: boolean;
    variant?: 1 | 2 | 3 | 4;
}