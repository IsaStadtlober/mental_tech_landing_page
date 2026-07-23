import type { EyebrowLabelProps } from '../../types';

export const EyebrowLabel = ({ children, dotColor = 'var(--primary-light)' }: EyebrowLabelProps) => (
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