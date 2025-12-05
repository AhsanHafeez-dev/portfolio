
import { useState, useEffect } from "react"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Globe,
  ExternalLink,
  Download,
  Code,
  Database,
  Palette,
  Server,
  Star,
  Eye,
  CheckCircle,
  ArrowRight,
  Send,
  Heart,
  Coffee,
  Zap,
} from "lucide-react"

export default function PortfolioOne() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeProject, setActiveProject] = useState(0)
  const [activeSkillCategory, setActiveSkillCategory] = useState("frontend")

  // User Data Variables - Easily customizable
  const userData = {
    name: "Ahsan Hafezz",
    title: "Full Stack Developer",
    tagline: "Crafting digital experiences with code and creativity",
    location: "San Francisco, CA",
    email: "ahsanhafeez883@gmail.com",
    phone: "+1 (555) 123-4567",
    website: "https://alexrodriguez.dev",
    resumeUrl: "/resume.pdf",
    avatar: "data:image/jpeg;base64,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",

    // Availability
    availableForHire: true,
    availabilityText: "Available for freelance projects",

    // Bio
    bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. I love turning complex problems into simple, beautiful solutions. When I'm not coding, you'll find me exploring new technologies or contributing to open source projects.",

    // Social Links
    social: {
      github: "https://github.com/hiteshchoudhary",
      linkedin: "https://linkedin.com/in/hiteshchoudhary",
      twitter: "https://twitter.com/hiteshdotcom",
      website: "https://hitesh.ai",
    },

    // Experience Stats
    stats: {
      experience: "5+",
      projects: "50+",
      clients: "25+",
      coffees: "1000+",
    },
  }

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern, scalable e-commerce solution built with Next.js and Stripe integration. Features include real-time inventory, advanced search, and mobile-responsive design.",
      image: "https://images.pexels.com/photos/29421581/pexels-photo-29421581.jpeg",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/hiteshchoudhary",
      featured: true,
      category: "Web Development",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking capabilities.",
      image: "https://images.pexels.com/photos/13847596/pexels-photo-13847596.jpeg",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      liveUrl: "https://taskmanager-demo.com",
      githubUrl: "https://github.com/hiteshchoudhary",
      featured: true,
      category: "Full Stack",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics for multiple cities.",
      image: "https://images.pexels.com/photos/4443538/pexels-photo-4443538.jpeg",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Sass"],
      liveUrl: "https://weather-dashboard-demo.com",
      githubUrl: "https://github.com/hiteshchoudhary",
      featured: false,
      category: "Frontend",
    },
    {
      id: 4,
      title: "AI Chat Bot",
      description:
        "An intelligent chatbot powered by OpenAI's GPT, featuring natural language processing and context-aware conversations.",
      image: "https://images.pexels.com/photos/3577561/pexels-photo-3577561.jpeg",
      technologies: ["Python", "FastAPI", "OpenAI API", "React", "WebSocket"],
      liveUrl: "https://ai-chatbot-demo.com",
      githubUrl: "https://github.com/hiteshchoudhary",
      featured: true,
      category: "AI/ML",
    },
  ]

  const skills = {
    frontend: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 90, icon: "▲" },
      { name: "TypeScript", level: 88, icon: "📘" },
      { name: "Tailwind CSS", level: 92, icon: "🎨" },
      { name: "Vue.js", level: 85, icon: "💚" },
      { name: "JavaScript", level: 95, icon: "🟨" },
    ],
    backend: [
      { name: "Node.js", level: 90, icon: "🟢" },
      { name: "Python", level: 85, icon: "🐍" },
      { name: "Express.js", level: 88, icon: "🚀" },
      { name: "FastAPI", level: 82, icon: "⚡" },
      { name: "GraphQL", level: 80, icon: "🔗" },
      { name: "REST APIs", level: 92, icon: "🌐" },
    ],
    database: [
      { name: "PostgreSQL", level: 88, icon: "🐘" },
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "Redis", level: 80, icon: "🔴" },
      { name: "Prisma", level: 85, icon: "⚡" },
      { name: "Supabase", level: 82, icon: "🚀" },
      { name: "Firebase", level: 78, icon: "🔥" },
    ],
    tools: [
      { name: "Git", level: 95, icon: "📝" },
      { name: "Docker", level: 85, icon: "🐳" },
      { name: "AWS", level: 80, icon: "☁️" },
      { name: "Vercel", level: 90, icon: "▲" },
      { name: "Figma", level: 75, icon: "🎨" },
      { name: "VS Code", level: 98, icon: "💙" },
    ],
  }

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content:
        "Alex delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise exceeded our expectations.",
      avatar: "👩‍💼",
      rating: 5,
    },
    {
      name: "Mike Chen",
      role: "Startup Founder",
      content:
        "Working with Alex was a game-changer for our startup. He built our MVP in record time without compromising on quality.",
      avatar: "👨‍💻",
      rating: 5,
    },
    {
      name: "Emily Davis",
      role: "Design Director",
      content:
        "Alex has an incredible ability to bring designs to life. His code is clean, efficient, and perfectly matches our design vision.",
      avatar: "👩‍🎨",
      rating: 5,
    },
  ]

  useEffect(() => {
    setIsLoaded(true)

    // Auto-rotate projects
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const skillCategories = [
    { id: "frontend", name: "Frontend", icon: Palette },
    { id: "backend", name: "Backend", icon: Server },
    { id: "database", name: "Database", icon: Database },
    { id: "tools", name: "Tools", icon: Code },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-500/6 to-cyan-500/6 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Code Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-orange-400/20 text-4xl font-mono animate-bounce delay-300">
          {"<>"}
        </div>
        <div className="absolute top-40 right-20 text-blue-400/20 text-3xl font-mono animate-bounce delay-700">
          {"{}"}
        </div>
        <div className="absolute bottom-40 left-20 text-green-400/20 text-5xl font-mono animate-bounce delay-1000">
          {"[]"}
        </div>
        <div className="absolute bottom-20 right-40 text-purple-400/20 text-2xl font-mono animate-bounce delay-1500">
          {"()"}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center py-20">
          <div
            className={
              "text-center transition-all duration-1000 " +
              (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
            }
          >
            {/* Avatar */}
            <div className="relative mb-8">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-orange-500 to-red-500 p-1 bg-gradient-to-r from-orange-500 to-red-500">
                <img
                  src={userData.avatar || "/placeholder.svg"}
                  alt={userData.name}
                  className="w-full h-full object-cover rounded-full bg-neutral-800"
                />
              </div>

              {/* Availability Badge */}
              {userData.availableForHire && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>{userData.availabilityText}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Name & Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
              {userData.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-6">
              {userData.title}
            </h2>
            <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">{userData.tagline}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-black text-orange-400 mb-1">{userData.stats.experience}</div>
                <div className="text-neutral-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400 mb-1">{userData.stats.projects}</div>
                <div className="text-neutral-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-green-400 mb-1">{userData.stats.clients}</div>
                <div className="text-neutral-400 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-purple-400 mb-1">{userData.stats.coffees}</div>
                <div className="text-neutral-400 text-sm">Cups of Coffee</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href={'add mail id here'}
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105 flex items-center space-x-3"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span>Get In Touch</span>
              </a>

              <a
                href={userData.resumeUrl}
                download
                className="group border-2 border-neutral-600 hover:border-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-neutral-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{userData.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{userData.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{userData.phone}</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div
            className={
              "transition-all duration-1000 delay-300 " +
              (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
            }
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Me</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className="text-lg text-neutral-300 leading-relaxed">{userData.bio}</p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg">
                    <Coffee className="w-5 h-5 text-orange-400" />
                    <span className="text-neutral-300">Coffee Enthusiast</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg">
                    <Heart className="w-5 h-5 text-red-400" />
                    <span className="text-neutral-300">Open Source Contributor</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-neutral-900/50 px-4 py-2 rounded-lg">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    <span className="text-neutral-300">Problem Solver</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4 pt-6">
                  <a
                    href={userData.social.github}
                    className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-orange-400 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={userData.social.linkedin}
                    className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-blue-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={userData.social.twitter}
                    className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-sky-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-sky-400 transition-all duration-300 hover:scale-110"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href={userData.social.website}
                    className="w-12 h-12 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-green-500 rounded-xl flex items-center justify-center text-neutral-400 hover:text-green-400 transition-all duration-300 hover:scale-110"
                  >
                    <Globe className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-neutral-400 ml-4 font-mono text-sm">developer.js</span>
                  </div>
                  <div className="font-mono text-sm space-y-2">
                    <div className="text-purple-400">
                      const <span className="text-blue-400">developer</span> = {"{"}
                    </div>
                    <div className="text-neutral-400 ml-4">
                      name: <span className="text-green-400">'Ahsan Hafeez'</span>,
                    </div>
                    <div className="text-neutral-400 ml-4">
                      title: <span className="text-green-400">'{userData.title}'</span>,
                    </div>
                    <div className="text-neutral-400 ml-4">
                      location: <span className="text-green-400">'{userData.location}'</span>,
                    </div>
                    <div className="text-neutral-400 ml-4">
                      available: <span className="text-orange-400">{userData.availableForHire.toString()}</span>,
                    </div>
                    <div className="text-neutral-400 ml-4">
                      skills: [<span className="text-green-400">'React'</span>,{" "}
                      <span className="text-green-400">'Node.js'</span>,{" "}
                      <span className="text-green-400">'TypeScript'</span>],
                    </div>
                    <div className="text-neutral-400 ml-4">
                      passion: <span className="text-green-400">'Building amazing things'</span>
                    </div>
                    <div className="text-purple-400">{"}"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20">
          <div
            className={
              "transition-all duration-1000 delay-500 " +
              (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
            }
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                My{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Skills
                </span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>

            {/* Skill Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveSkillCategory(category.id)}
                  className={
                    "flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 " +
                    (activeSkillCategory === category.id
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                      : "bg-neutral-900 border border-neutral-700 text-neutral-400 hover:border-orange-500 hover:text-orange-400")
                  }
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills[activeSkillCategory].map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="text-white font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-orange-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-neutral-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: "30%"}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20">
          <div
            className={
              "transition-all duration-1000 delay-700 " +
              (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
            }
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                A showcase of my recent work and creative solutions
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-neutral-300 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Live Demo</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center space-x-2 border border-neutral-600 hover:border-orange-500 text-neutral-300 hover:text-orange-400 px-4 py-2 rounded-lg font-semibold transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href={userData.social.github}
                className="group inline-flex items-center space-x-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 hover:border-orange-500 text-neutral-300 hover:text-orange-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div
            className={
              "transition-all duration-1000 delay-900 " +
              (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
            }
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What Clients{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Say</span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                Testimonials from satisfied clients and collaborators
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-neutral-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-neutral-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div
            className={
              "transition-all duration-1000 delay-1100 " +
              (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
            }
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's{" "}
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  Work Together
                </span>
              </h2>
              <p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-8">
                Ready to bring your ideas to life? Let's discuss your next project and create something amazing
                together.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-3xl p-12 text-center">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">Ready to Start a Project?</h3>
                <p className="text-lg text-neutral-300 mb-8 max-w-2xl mx-auto">
                  I'm currently {userData.availableForHire ? "available" : "not available"} for new projects. Let's
                  discuss how we can work together to achieve your goals.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                  <a
                    href={""}
                    className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 hover:scale-105 flex items-center space-x-3"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Send Message</span>
                  </a>

                  <a
                    href={userData.phone}
                    className="group border-2 border-neutral-600 hover:border-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center space-x-3 hover:bg-gradient-to-r hover:from-orange-500/10 hover:to-red-500/10"
                  >
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span>Schedule Call</span>
                  </a>
                </div>

                <div className="flex justify-center items-center space-x-8 text-neutral-400">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Quick Response</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Free Consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Flexible Rates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

