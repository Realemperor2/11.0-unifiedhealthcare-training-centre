import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Full-Stack Application</h1>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/healthcare" className="text-blue-500 hover:underline">
              Unified Healthcare
            </Link>
          </li>
          <li>
            <Link href="/production" className="text-blue-500 hover:underline">
              Production Line
            </Link>
          </li>
          <li>
            <Link href="/insurance" className="text-blue-500 hover:underline">
              Insurance
            </Link>
          </li>
          <li>
            <Link href="/software" className="text-blue-500 hover:underline">
              Software Factory
            </Link>
          </li>
          <li>
            <Link href="/printer" className="text-blue-500 hover:underline">
              3D Printer
            </Link>
          </li>
          <li>
            <Link href="/ar-vr" className="text-blue-500 hover:underline">
              AR/VR
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

