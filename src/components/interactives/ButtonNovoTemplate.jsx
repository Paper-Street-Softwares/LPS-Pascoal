import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0 hover-elevate active-elevate-2',
  {
    variants: {
      variant: {
        default:
          'bg-primaryLight text-primaryLight-foreground border border-primary-border',
        destructive:
          'bg-destructive text-destructive-foreground border-destructive-border',
        outline: 'border border-secondary',
        secondary:
          'border bg-secondary text-secondary-foreground border-secondary-border',
        ghost: 'border border-transparent',
        link: 'text-primaryLight underline-offset-4 hover:underline',
      },
      size: {
        default: 'min-h-9 px-4 py-2',
        sm: 'min-h-8 rounded-md px-3 text-xs',
        lg: 'min-h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const Button = React.forwardRef(function Button(
  { className, variant, size, asChild = false, href, onClick, ...props },
  ref
) {
  const Comp = asChild ? Slot : href ? 'a' : 'button'

  return (
    <Comp
      aria-label="Botão de Interação"
      ref={ref}
      href={href}
      onClick={onClick}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
})

export { Button, buttonVariants }
