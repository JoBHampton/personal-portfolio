import { AboutSection } from "../components/AboutSection"
import { ContactSection } from "../components/ContactSection"
import { GamesSection } from "../components/GamesSection"
import { HeroSection } from "../components/HeroSection"
import { JobSection } from "../components/JobSection"
import { Navbar } from "../components/Navbar"
import { ProjectsSection } from "../components/ProjectsSection"
import { SkillsSection } from "../components/SkillsSection"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"
import '../index.css'

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <JobSection />
            <ProjectsSection />
            <GamesSection />
            <ContactSection />
            
            
        </main>

        {/* Footer */}
    </div>
}