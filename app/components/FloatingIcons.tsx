import { Shield, Zap, Target, Atom } from "lucide-react"

const icons = [
  { Icon: Shield, color: "#4285F4", size: 40 },
  { Icon: Zap, color: "#DB4437", size: 30 },
  { Icon: Target, color: "#F4B400", size: 35 },
  { Icon: Atom, color: "#0F9D58", size: 45 },
]

export default function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {icons.map(({ Icon, color, size }, index) => (
        <Icon
          key={index}
          size={size}
          color={color}
          className={`absolute animate-float-${index + 1}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}

