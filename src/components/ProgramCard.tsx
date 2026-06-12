import Link from "next/link";

interface ProgramCardProps {
  icon: string;
  title: string;
  description: string;
  items: string[];
  href?: string;
}

export default function ProgramCard({ icon, title, description, items, href }: ProgramCardProps) {
  const content = (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md hover:border-primary/30 transition-all h-full flex flex-col">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <ul className="space-y-1.5 flex-1">
        {items.map((item) => (
          <li key={item} className="text-sm text-gray-700 flex items-start gap-2">
            <span className="text-primary mt-0.5 shrink-0">✦</span>
            {item}
          </li>
        ))}
      </ul>
      {href && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-primary font-semibold text-sm hover:text-primary-dark transition-colors">
            Learn more →
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}
