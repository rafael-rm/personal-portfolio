import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import styles from './Button.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseProps {
    variant?: ButtonVariant
    size?: ButtonSize
    iconOnly?: boolean
    children: ReactNode
    className?: string
}

type ButtonAsButton = BaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        as?: 'button'
        href?: never
    }

type ButtonAsAnchor = BaseProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        as: 'a'
        href: string
    }

type ButtonProps = ButtonAsButton | ButtonAsAnchor

export function Button({
    variant = 'primary',
    size = 'md',
    iconOnly = false,
    children,
    className = '',
    as,
    ...props
}: ButtonProps) {
    const classNames = [
        styles.button,
        styles[variant],
        size !== 'md' && styles[size],
        iconOnly && styles.iconOnly,
        className,
    ]
        .filter(Boolean)
        .join(' ')

    if (as === 'a') {
        const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>
        return (
            <a className={classNames} {...anchorProps}>
                {children}
            </a>
        )
    }

    const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>
    return (
        <button className={classNames} {...buttonProps}>
            {children}
        </button>
    )
}
