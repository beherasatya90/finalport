// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }


"use client";
import React from 'react';
import { motion } from 'framer-motion';
export default function Portfolio() {
  const data = {
    name: 'Satyabrata Behera',
    location: 'Mumbai',
    phone: '+91 9861026946',
    email: 'satyabrata9080@gmail.com',
    linkedin: 'https://www.linkedin.com/in/satyabrata-behera-a28600197',
    github: 'https://github.com/beherasatya90',
    resume: 'https://drive.google.com/file/d/16o33FtQpZrEhm7HAIdJ3uauk_3cs4I45/view?usp=sharing',
    summary:
      'Motivated software developer experienced in frontend and backend development. Proficient in React, Node.js, Express, and building responsive web apps with scalable solutions.',
    skills: [
      'React / Hooks',
      'Node.js, Express',
      'REST APIs, Postman',
      'Tailwind CSS',
      'MongoDB',
      'Git, Vercel/Netlify',
    ],
    projects: [
      {
        title: 'Online Examination System',
        period: 'Aug 2024 - Mar 2025',
        desc: 'Exam platform with authentication, timed sessions, scoring, progress tracking, and results reports.',
        demo: '#',
        repo: '#',
      },
      {
        title: 'E-Commerce Platform',
        period: 'Apr 2025 - Present',
        desc: 'Responsive e-commerce site with product listing, cart, checkout, and REST API backend.',
        demo: '#',
        repo: '#',
      },
    ],
    education: [
      {
        degree: 'MCA',
        institute: 'Biju Patnaik University of Technology, Rourkela',
        grade: '7.7 CGPA',
        period: 'Jul 2022 - Aug 2024',
      },
      {
        degree: 'BCA',
        institute: 'Utkal University, Bhubaneswar',
        grade: '8.49 CGPA',
        period: 'Jun 2019 - Jul 2022',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 text-gray-800 font-sans">
      <div className="max-w-5xl mx-auto py-12 px-6">
        <motion.header
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 drop-shadow-lg">
            {data.name}
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            {data.summary}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href={data.resume} className="px-6 py-2 bg-purple-600 text-white rounded-full shadow hover:scale-105 transform transition">Resume</a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className="px-6 py-2 bg-white border border-purple-200 rounded-full shadow hover:bg-purple-50">LinkedIn</a>
            <a href={data.github} target="_blank" rel="noreferrer" className="px-6 py-2 bg-white border border-purple-200 rounded-full shadow hover:bg-purple-50">GitHub</a>
          </div>
        </motion.header>

        {/* Projects */}
        <section className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-purple-700 mb-6"
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.projects.map((p, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="p-6 bg-white rounded-2xl shadow-lg border border-purple-100"
              >
                <h3 className="text-lg font-semibold text-gray-800">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.period}</p>
                <p className="mt-3 text-gray-700">{p.desc}</p>
                <div className="mt-4 flex gap-3">
                  <a href={p.demo} className="px-4 py-1 border rounded-full text-sm hover:bg-gray-50">Live</a>
                  <a href={p.repo} className="px-4 py-1 border rounded-full text-sm hover:bg-gray-50">Code</a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-purple-700 mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((s, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium shadow-sm"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold text-purple-700 mb-6">Education</h2>
          <div className="space-y-4">
            {data.education.map((ed, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-4 bg-white border rounded-lg shadow"
              >
                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold">{ed.degree}</p>
                    <p className="text-sm text-gray-600">{ed.institute}</p>
                  </div>
                  <p className="text-sm text-gray-500">{ed.period}</p>
                </div>
                <p className="mt-2 text-sm text-gray-700">Grade: {ed.grade}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {data.name} — Built with React, Tailwind & Framer Motion
        </footer>
      </div>
    </div>
  );
}
