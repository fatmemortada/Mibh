interface InfoCardProps {
  icon?: string;
  title: string;
  description: string;
  className?: string;
}

export default function InfoCard({ icon, title, description, className = "" }: InfoCardProps) {
  return (
    <div className={`bg-cream rounded-xl p-6 border border-cream-dark ${className}`}>
      {icon && <div className="text-3xl mb-3">{icon}</div>}
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
