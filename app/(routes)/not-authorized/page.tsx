import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <Link
        href="/"
        className="mb-6 mt-6 flex items-center gap-3 text-gray-700 hover:text-gray-900 transition"
      >
        <span className="text-2xl font-semibold tracking-tight">
          Slides App <span className="opacity-80">📝</span>
        </span>
      </Link>

      <h1 className="text-5xl font-bold tracking-tight text-gray-900">404</h1>

      <p className="mt-2 text-lg text-gray-600">Acceso denegado</p>

      <p className="mt-4 max-w-md text-sm text-gray-500">
        Lo sentimos, no tienes permiso para acceder a esta página.
      </p>

      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-lg bg-red-900 px-6 py-3 text-sm font-medium text-white shadow hover:bg-red-800 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
