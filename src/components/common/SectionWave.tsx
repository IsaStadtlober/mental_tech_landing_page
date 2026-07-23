import type { SectionWaveProps } from '../../types';
import { WAVE_PATHS } from '../../constants/waves';

export const SectionWave = ({ color, flip = false, variant = 1 }: SectionWaveProps) => {
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