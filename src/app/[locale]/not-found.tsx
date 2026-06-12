import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <h1 className="text-8xl font-bold text-primary/20">404</h1>
      <h2 className="text-2xl font-bold text-gray-900 mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-2 max-w-md">The page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="mt-8 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors">
        Return Home
      </Link>
    </div>
  );
}
