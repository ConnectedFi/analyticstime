interface CFiLogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-12 h-12'
}

const textSizeClasses = {
  sm: 'text-sm',
  md: 'text-lg',
  lg: 'text-2xl'
}

export const CFiLogo = ({ className = '', size = 'md' }: CFiLogoProps) => {
  return (
    <div className={`${className} flex items-center space-x-2`}>
      {/* Green circle representing the CFi logo */}
      <div className={`${sizeClasses[size]} relative`}>
        <div className="w-full h-full rounded-full bg-gradient-to-br from-green-500 via-green-600 to-green-700 shadow-lg">
          <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-green-300 via-green-400 to-green-500 opacity-80" />
        </div>
      </div>
      <span className={`text-green-600 font-bold ${textSizeClasses[size]} tracking-tight`}>CFi</span>
    </div>
  )
}
