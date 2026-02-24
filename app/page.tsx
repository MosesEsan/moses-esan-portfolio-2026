import Link from "next/link";
import CurrentYear from "../components/CurrentYear";

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

          {/* Software Engineer II */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Software Engineer II</h3>
            <p className="text-gray-400">May 2022 – Jan 2025</p>
            <p className="text-gray-400">FieldAware by GPS Insight – Dublin, 8, Ireland</p>
            <p className="text-gray-300">
              FieldAware is a field management software, used by field service technicians. The software is used for scheduling and planning the jobs, recording information about the job, reporting, invoice etc.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Developed new features and bug fixes using Python (Flask), React, and Storybook.</li>
              <li>Actively participated in Agile sprint planning, estimations, and daily stand-ups.</li>
              <li>Improved test coverage with Pytest and Unittest, reducing production errors.</li>
              <li>Continuous integration and delivery: Used CircleCI for building and running tests before deploying to a development server and running regressions before deploying to production.</li>
              <li>Notable contributions: Contributed to the redesign and replacement of the authentication services by integrating FusionAuth, enhancing security and user management.</li>
            </ul>
          </div>

          {/* Software Developer */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Software Developer</h3>
            <p className="text-gray-400">Feb 2018 – April 2022</p>
            <p className="text-gray-400">RTÉ – Donnybrook, Dublin 4, Ireland</p>
            <p className="text-gray-300">
              An Irish public service broadcaster, broadcasting programmes on television, radio and online.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Developed high-availability solutions with Django and React while conducting code reviews to ensure quality and best practices.</li>
              <li>Notable contributions: Developed a real-time analytics dashboard using AngularJS, providing the editorial team with critical insights into user interaction and article performance.</li>
            </ul>
          </div>

          {/* Freelance Developer */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Freelance Developer</h3>
            <p className="text-gray-400">Apr 2017 – Oct 2017</p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Built Bean Lite Fitness, an iOS/Android app using React Native.</li>
              <li>Created tutorials on React Native and Laravel, establishing a strong online presence. <a href="https://medium.com/@mosesesan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">https://medium.com/@mosesesan</a></li>
            </ul>
          </div>

          {/* Full-Stack Developer */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
            <p className="text-gray-400">Nov 2015 – Dec 2016</p>
            <p className="text-gray-400">DBOX – NYC, USA</p>
            <p className="text-gray-300">
              A creative agency specializing in branding and immersive marketing for property development, architecture, and the arts.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Developed and maintained websites for multiple clients using HTML, CSS, JavaScript, and PHP, focusing on functionality, performance, and user experience enhancements.</li>
              <li>Notable contributions: Developed a cross-platform college app for iOS and Android, enabling admins to post events and articles. Built the backend API using Laravel and PHP for seamless content management.</li>
            </ul>
          </div>

          {/* Mobile Software Developer */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Mobile Software Developer</h3>
            <p className="text-gray-400">17th Apr 2015 – Sep 2015</p>
            <p className="text-gray-400">Inflight Dublin – Dublin, Ireland</p>
            <p className="text-gray-300">
              Specializes in the supplying of Inflight entertainment (IFE) solutions and innovative services to airlines.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Designed and developed the company’s Wireless and Preloaded IFE hybrid mobile and tablet app using Ionic and Apache Cordova within an Agile Scrum environment.</li>
              <li>Converted Photoshop PSD designs into responsive user interfaces using HTML, CSS, and AngularJS, ensuring seamless user experience across devices.</li>
            </ul>
          </div>

          {/* PHP Developer */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">PHP Developer</h3>
            <p className="text-gray-400">Sep 2011 – Jul 2012 & Feb 2013 – Dec 2013</p>
            <p className="text-gray-400">Arithon – Dublin, Ireland</p>
            <p className="text-gray-300">
              Arithon provides recruitment software solutions for recruitment agencies across Ireland and the U.K.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Developed new features using PHP, HTML, CSS and JavaScript.</li>
              <li>Wrote SQL scripts to retrieve data for management reports.</li>
              <li>Liaised with clients to identify and execute data migrations using Oracle, MySQL & SQL Server.</li>
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
          © <CurrentYear /> Moses Esan — Built with Next.js & deployed on Vercel
        </section>

      </div>
    </main>
  );
}