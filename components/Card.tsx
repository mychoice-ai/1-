import clsx from 'clsx'

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode
}

export default function Card({ children, className, ...props }: CardProps) {
    return (
        <div
            className={clsx(
                'bg-white rounded-lg shadow-md p-6 border border-gray-200',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export function CardHeader({ children, className, ...props }: CardProps) {
    return (
        <div className={clsx('mb-4', className)} {...props}>
            {children}
        </div>
    )
}

export function CardContent({ children, className, ...props }: CardProps) {
    return (
        <div className={clsx('', className)} {...props}>
            {children}
        </div>
    )
}

export function CardFooter({ children, className, ...props }: CardProps) {
    return (
        <div className={clsx('mt-4 pt-4 border-t border-gray-200', className)} {...props}>
            {children}
        </div>
    )
}