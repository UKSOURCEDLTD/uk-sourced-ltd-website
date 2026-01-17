'use client';

import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

interface BookingButtonProps {
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'minimal';
    className?: string;
    size?: 'sm' | 'md' | 'lg';
}

export default function BookingButton({
    onClick,
    variant = 'primary',
    className = '',
    size = 'md',
}: BookingButtonProps) {
    const baseStyles = 'font-semibold transition-all text-center rounded-sm uppercase tracking-widest inline-flex items-center justify-center gap-3';

    const variantStyles = {
        primary: 'bg-desaturated-teal text-white hover:opacity-90 shadow-lg shadow-desaturated-teal/10',
        secondary: 'border border-deep-charcoal/20 hover:bg-deep-charcoal hover:text-white',
        minimal: 'text-desaturated-teal hover:text-desaturated-teal/80',
    };

    const sizeStyles = {
        sm: 'px-6 py-3 text-[10px]',
        md: 'px-12 py-5 text-xs',
        lg: 'px-16 py-6 text-sm',
    };

    return (
        <motion.button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
        >
            <Calendar className="w-4 h-4" />
            Book Discovery Call
        </motion.button>
    );
}
