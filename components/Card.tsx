interface CardProps {
  padding?: any
  shadow?: any
  border?: any
}

export default function Card({ padding, shadow, border }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border">
      {/* Card component content */}
    </div>
  )
}