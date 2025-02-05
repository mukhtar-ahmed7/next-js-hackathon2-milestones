import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Calculator UI",
      image: "/calculator.bmp",
      description: "A simple calculator UI with basic arithmetic functions.",
      link: "https://simple-calculator-ui.vercel.app/"
    },
    {
      id: 2,
      title: "Countdown Timer UI",
      image: "/countdown.jpeg",
      description: "A simple countdown timer UI built with Html and Css3.",
      link: "https://countdown-timer-ui.vercel.app/"
    },
    {
      id: 3,
      title: "Weather UI",
      image: "/weather2.png",
      description: "An interactive weather UI displaying real-time updates.",
      link: "https://weather-ui-coral.vercel.app/"
    },
    {
      id: 4,
      title: "Developer Landing Page UI",
      image: "/developer1.png",
      description: "A responsive developer landing page showcasing portfolio with a clean and modern design.",
      link: "https://developer-landing-page-ui.vercel.app/"
    },
    {
      id: 5,
      title: " Website on HTML5 and CSS3",
      image: "/project5img.avif",
      description: "A beautiful crafted HTML & CSS website showcasing impressive design & features.",
      link: "https://html-css-website-delta.vercel.app/"
    },
    {
      id: 6,
      title: "Portfolio on HTML5 and CSS3",
      image: "/portfolio61.jpg",
      description: "This portfolio showcases my creativity, technical expertise & attention to all screen sizes.",
      link: "https://portfolio-html-css-five-kappa.vercel.app/"
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <Image src={project.image || "/placeholder.svg"} alt={`${project.title} image`} width={300} height={200} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link href={project.link} className="project-link">View Project</Link>
          </div>
        ))}
      </div>
    </section>
  )
}

