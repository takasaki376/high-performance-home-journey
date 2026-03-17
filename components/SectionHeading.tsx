interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionHeading({ title, subtitle, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-gray-500 dark:text-gray-400">{subtitle}</p>
      )}
    </div>
  )
}
