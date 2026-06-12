import Image from "next/image";

interface MosqueImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  large?: boolean;
}

export default function MosqueImage({ src, alt, caption, className = "", priority = false, large = false }: MosqueImageProps) {
  return (
    <div className={`rounded-xl overflow-hidden shadow-md ${className}`}>
      <div className={`relative w-full ${large ? "h-80 sm:h-[500px]" : "h-64 sm:h-80"}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={priority}
        />
      </div>
      {caption && (
        <div className="bg-white px-4 py-3 border-t border-gray-100">
          <p className="text-sm text-gray-700 font-medium">{caption}</p>
        </div>
      )}
    </div>
  );
}
