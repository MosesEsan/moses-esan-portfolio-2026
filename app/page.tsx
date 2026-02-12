import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* HERO */}
        <section className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Moses Esan
          </h1>

          <p className="text-xl text-gray-400">
            Senior Full Stack & Mobile Engineer
          </p>

          <p className="text-gray-300 max-w-3xl">
            Full Stack Developer with 8+ years of experience building scalable
            web and mobile applications using Python, React, React Native,
            Node.js, and TypeScript. I specialize in clean architecture,
            API design, offline-first systems, and shipping production-grade
            apps from concept to App Store.
          </p>

          <div className="flex gap-6 text-gray-400">
            <Link
              href="https://github.com/MosesEsan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              GitHub
            </Link>

            <Link
              href="https://www.linkedin.com/in/moses-esan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              LinkedIn
            </Link>

            <Link
              href="https://medium.com/@mosesesan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Medium
            </Link>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="space-y-10">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
            Professional Experience
          </h2>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              Software Engineer II — FieldAware (GPS Insight)
            </h3>
            <p className="text-gray-400">May 2022 – Jan 2025 · Dublin, Ireland</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Built new features using Python (Flask) and React</li>
              <li>Improved test coverage with Pytest & Unittest</li>
              <li>Implemented CI/CD with CircleCI</li>
              <li>Contributed to authentication redesign integrating FusionAuth</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              Software Developer — RTÉ
            </h3>
            <p className="text-gray-400">Feb 2018 – Apr 2022 · Dublin, Ireland</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Developed high-availability systems using Django & React</li>
              <li>Built real-time analytics dashboard for editorial team</li>
              <li>Performed code reviews ensuring best practices</li>
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="space-y-12">
          <h2 className="text-2xl font-semibold border-b border-gray-700 pb-2">
            Selected Projects
          </h2>

          {/* Workout Tracker */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              AthleteOS (2026)
            </h3>
            <p className="text-gray-300">
              Offline-first React Native fitness tracking app built with
              SQLite, TypeScript, React Navigation, and TanStack Query.
              Designed with vertical-slice architecture.
            </p>
            <Link
              href="https://apps.apple.com/us/app/athleteos/id6757597790"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              View on App Store →
            </Link>
          </div>

          {/* DropIt Geo */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              DropIt Geo (2025)
            </h3>
            <p className="text-gray-300">
              Location-based photo sharing app built solo with
              React Native, Express.js, PostgreSQL & Supabase.
            </p>
            <Link
              href="https://apps.apple.com/us/app/dropit-geo/id6444062382"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              View on App Store →
            </Link>
          </div>

          {/* MoBooks Swaps */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              MoBooks Swaps (2025)
            </h3>
            <p className="text-gray-300">
              Full-stack book exchange platform using React Native,
              Node.js, MongoDB, Stripe, and Firebase.
            </p>
            <Link
              href="http://www.mobooksswaps.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              Visit Website →
            </Link>
          </div>

          {/* MoFlix */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">
              MoFlix (2024/2025)
            </h3>
            <p className="text-gray-300">
              Movie discovery platform using ReactJS, React Native,
              Express.js, and TMDB API.
            </p>

            <div className="flex flex-col gap-2 text-gray-400">
              <Link
                href="https://mesan-moflix-a5542dc50385.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                View Website →
              </Link>

              <Link
                href="https://apps.apple.com/us/app/moflix-movies-tv-shows/id6738633422"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                View on App Store →
              </Link>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <section className="pt-10 border-t border-gray-800 text-gray-500 text-sm">
          © {new Date().getFullYear()} Moses Esan — Built with Next.js & deployed on Vercel
        </section>

      </div>
    </main>
  );
}