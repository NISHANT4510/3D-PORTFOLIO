"use client"

import { useEffect, useRef, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Text3D, Environment, PerspectiveCamera } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Database, Server, Globe, Menu, X } from "lucide-react"
import * as THREE from "three"

// 3D Floating Cube Component
function FloatingCube() {
  const meshRef = useRef<any>()

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.2} wireframe />
      </mesh>
    </Float>
  )
}

// 3D Floating Sphere Component
function FloatingSphere({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={0.1} wireframe />
      </mesh>
    </Float>
  )
}

// 3D Text Component
function Hero3DText() {
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <Text3D font="/fonts/Geist_Bold.json" size={0.8} height={0.1} position={[-2, 1, 0]}>
        MERN
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.3} />
      </Text3D>
    </Float>
  )
}

// 3D Scene Component
function Scene3D() {
  return (
    <Canvas className="absolute inset-0 z-0">
      <PerspectiveCamera makeDefault position={[0, 0, 8]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />

      {/* Developer Working Scene */}
      <Float speed={0.8} rotationIntensity={0.05} floatIntensity={0.2}>
        <group position={[0, -0.5, 0]}>
          {/* Developer Image Plane */}
          <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <planeGeometry args={[4, 3]} />
            <meshBasicMaterial>
              <primitive
                object={(() => {
                  const loader = new THREE.TextureLoader()
                  const texture = loader.load(
                    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966-uWvzkmVmGWvHA8EzmvaS1O7fSCnv7i.gif",
                  )
                  texture.flipY = false
                  return texture
                })()}
                attach="map"
              />
            </meshBasicMaterial>
          </mesh>

          {/* Glowing frame around the developer */}
          <mesh position={[0, 0, -0.1]}>
            <planeGeometry args={[4.2, 3.2]} />
            <meshBasicMaterial color="#00ffff" transparent opacity={0.1} emissive="#00ffff" emissiveIntensity={0.2} />
          </mesh>

          {/* Additional screen glow effects */}
          <pointLight position={[-1, 0.5, 0.5]} intensity={0.8} color="#00ffff" distance={3} />
          <pointLight position={[1, 0.5, 0.5]} intensity={0.8} color="#0080ff" distance={3} />
        </group>
      </Float>

      {/* Floating code elements around the developer */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[3, 1, -1]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.3} wireframe />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[-3, 1.5, -1]}>
          <octahedronGeometry args={[0.4]} />
          <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={0.2} wireframe />
        </mesh>
      </Float>

      <FloatingSphere position={[2.5, -1.5, -2]} />
      <FloatingSphere position={[-2.5, -1, -1.5]} />

      {/* 3D MERN Text positioned above the developer */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        <Text3D font="/fonts/Geist_Bold.json" size={0.6} height={0.08} position={[-1.5, 2.5, 0]}>
          MERN
          <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.4} />
        </Text3D>
      </Float>

      {/* Additional floating elements */}
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={1.5}>
        <mesh position={[3.5, 0, -2.5]}>
          <torusGeometry args={[0.3, 0.1, 8, 16]} />
          <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={0.2} wireframe />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1}>
        <mesh position={[-3.5, -0.5, -2]}>
          <tetrahedronGeometry args={[0.4]} />
          <meshStandardMaterial color="#ff4080" emissive="#ff4080" emissiveIntensity={0.2} wireframe />
        </mesh>
      </Float>

      {/* Enhanced lighting for the scene */}
      <spotLight
        position={[0, 5, 3]}
        angle={0.4}
        penumbra={0.5}
        intensity={0.8}
        color="#ffffff"
        target-position={[0, 0, 0]}
      />

      <Environment preset="night" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  )
}

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-cyan-400">{"<Dev />"}</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300 hover:text-cyan-400" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-cyan-500/20">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
    >
      <Scene3D />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Full Stack Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Crafting digital experiences with the MERN stack
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-cyan-500/25"
          >
            <a href="#projects">View My Work</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 bg-transparent"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-cyan-500/30">
                <Code size={80} className="text-cyan-400" />
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer specializing in the MERN stack. With a keen eye for detail and a
                love for clean, efficient code, I create web applications that not only look great but perform
                exceptionally.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in web development started with curiosity and has evolved into a career focused on building
                scalable, user-centric applications. I enjoy tackling complex problems and turning ideas into reality.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="border-cyan-400 text-cyan-400 bg-cyan-400/10">
                  Problem Solver
                </Badge>
                <Badge variant="outline" className="border-purple-400 text-purple-400 bg-purple-400/10">
                  Team Player
                </Badge>
                <Badge variant="outline" className="border-pink-400 text-pink-400 bg-pink-400/10">
                  Continuous Learner
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Skills Section
function SkillsSection() {
  const skills = [
    { name: "MongoDB", icon: Database, color: "text-green-400", description: "NoSQL Database" },
    { name: "Express.js", icon: Server, color: "text-yellow-400", description: "Backend Framework" },
    { name: "React", icon: Code, color: "text-cyan-400", description: "Frontend Library" },
    { name: "Node.js", icon: Globe, color: "text-green-500", description: "Runtime Environment" },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <CardHeader className="text-center">
                  <skill.icon
                    size={48}
                    className={`mx-auto mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <CardTitle className="text-white">{skill.name}</CardTitle>
                  <CardDescription className="text-gray-400">{skill.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-white">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "JavaScript",
                "TypeScript",
                "HTML5",
                "CSS3",
                "Tailwind CSS",
                "Git",
                "Docker",
                "AWS",
                "Firebase",
                "GraphQL",
              ].map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-purple-400 text-purple-400 bg-purple-400/10 hover:bg-purple-400/20 transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Projects Section
function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "#",
      live: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Real-time social media analytics dashboard with interactive charts and data visualization using React and D3.js.",
      tech: ["React", "D3.js", "Node.js", "Socket.io"],
      github: "#",
      live: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Express", "MongoDB", "Socket.io"],
      github: "#",
      live: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-t-lg"></div>
                <CardHeader>
                  <CardTitle className="text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-cyan-400 text-cyan-400 bg-cyan-400/10">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 bg-transparent"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Resume Section
function ResumeSection() {
  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Download my resume to learn more about my experience and qualifications.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-cyan-500/25"
          >
            <Download size={20} className="mr-2" />
            Download Resume (PDF)
          </Button>
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-cyan-400" size={24} />
                  <span className="text-gray-300">developer@example.com</span>
                </div>
                <div className="flex gap-4 mt-6">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 bg-transparent"
                  >
                    <Github size={16} className="mr-2" />
                    GitHub
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900 bg-transparent"
                  >
                    <Linkedin size={16} className="mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </div>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Your Name"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={4}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-400"
                />
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white border-0">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-8 bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} MERN Stack Developer. Built with React, Next.js, and Three.js.
        </p>
      </div>
    </footer>
  )
}

// Main Component
export default function Portfolio() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
