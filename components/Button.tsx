interface ButtonProps {
  variant?: any
  size?: any
  disabled?: any
}

export default function Button({ variant, size, disabled }: ButtonProps) {
  return (
    <div className="px-4 py-2 rounded-lg font-medium transition-colors">
      {/* Button component content */}
    </div>
  )
}