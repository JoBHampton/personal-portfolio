import { Briefcase, Code, GraduationCap, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id='about' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 align-center'>
                    About <span className='text-primary'> Me</span>
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>

                    <div className='space-y-6'>
                        <h3 className='text-2xl font-semibold'> Hi! Thank you for checking out my website</h3>
                        <p className='text-muted-foreground'> 
                            I'd love to answer any questions you have!
                        </p>

                        <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                            <a href='#contact' className='cosmic-button'> Contact Me</a>
                            <a target= '_blank'href='/resume/JHampton-Resume-July-2025.pdf' className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'> Check My Resume</a>
                        </div>
                        
                    </div>

                    <div className='grid grid-cols-1 gap-6'>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <User className='h-6 w-6 text-primary'/>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'> Who am I?</h4>
                                    <p className='test-muted-foreground'> I am a senior at the University of Alabama, graduating December 2025 with a degree in Computer Science.</p>

                                </div>
                            </div>
                        </div>
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <GraduationCap className='h-6 w-6 text-primary'/>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'> Relevant Coursework</h4>
                                    <p className='test-muted-foreground'> I have completed all of the primary courses for an undergraduate degree in Computer Science. Along with those courses, I have taken Artificial Intelligence and am currently taking Computer Vision, Intro to Autonomous Robotics, Full-Stack Development and my Senior Design course.</p>

                                </div>
                            </div>
                        </div>

                        
                        <div className='gradient-border p-6 card-hover'>
                            <div className='flex items-start gap-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Code className='h-6 w-6 text-primary'/>
                                </div>
                                <div className='text-left'>
                                    <h4 className='font-semibold text-lg'> ExtraCirricular Involvement</h4>
                                    <p className='test-muted-foreground'> Since Freshman Year, I have partaken in undergraduate research in the Human Technology Interaction Lab. There I have researched multiple projects, the most recent being Reinforcement Learning for Grid-Based Pathfinding Using Godot. </p>

                                </div>
                            </div>
                        </div>

                    </div>
                        
                        


                </div>

            </div>
        </section>
    );
}