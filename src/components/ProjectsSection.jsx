import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'AI Sticks Game',
        desc: 'Play against an AI in the classic childhood game of sticks',
        img: '/personal-portfolio/projects/sticks.png',
        tags: ['AI', 'Python', 'CLI'],
        gitUrl: 'https://github.com/JoBHampton/Sticks',
        demoUrl: 'https://github.com/JoBHampton/Sticks',
    },
    {
        id: 2,
        title: 'Personal Portfolio',
        desc: 'This very website! My personal portfolio was built using ReactJS',
        img: '/personal-portfolio/projects/website.png',
        tags: ['React', 'JavaScript', 'HTML'],
        gitUrl: 'https://github.com/JoBHampton/personal-portfolio/',
        demoUrl: '#',
    },
    {
        id: 3,
        title: 'IMdB TV Insights',
        desc: 'Given a set of certain tv shows, this program will find the highest ranking episode of each show',
        img: '/personal-portfolio/projects/tvinsights.png',
        tags: ['Python', 'Data Analytics', 'CSV/TSV'],
        gitUrl: 'https://github.com/JoBHampton/IMDB-TV-Insights',
        demoUrl: 'https://github.com/JoBHampton/IMDB-TV-Insights',
    },
    {
        id: 4,
        title: 'Big Spoon Yum',
        desc: 'A website requested by the University of Alabama Recreation Department. The department often takes students on backpacking trips and in order to cut down on costs and time, they wanted a website that would let the user pick recipes for the trip and then print out a list of ingredients and assorted costs.',
        img: '/personal-portfolio/projects/bsy.png',
        tags: ['React', 'Javascript', 'Git', 'Github Pages', 'Vercel', 'MongoDB'],
        gitUrl: 'https://github.com/garussell1/bigSpoonYum',
        demoUrl: 'https://garussell1.github.io/bigSpoonYum/',
    },
    
]


export const ProjectsSection = () => {
    return (
        <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Featured <span className='text-primary'> Projects </span>
                </h2>

                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Here are some of my recent feature projects. Check them out!
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, key) => (
                        <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'> 

                            <div className='h-48 overflow-hidden'>
                                <img src={project.img} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/> 

                            </div>

                            <div className= 'p-6'> 
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tags.map((tag) => (
                                        <span className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'> {tag} </span>
                                    ))} 
                                </div>
                           

                            <h3 className='text-xl font-semibold mb-1'> {project.title} </h3>
                            <p className='text-muted-foreground text-sm mb-4'> {project.desc} </p>
                            <div className='flex justify-between items-center'>
                                <div className='flex space-x-3'>
                                    <a 
                                        href={project.demoUrl} 
                                        target='_blank'
                                        className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                    >
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a  
                                        href={project.gitUrl}
                                        target='_blank'
                                        className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                    >
                                        <Github size={20}/>
                                    </a>
                                </div> 

                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className='text-center mt-12'>
                    <a className='cosmic-button w-fit flex items-center mx-auto gap-2' target='_blank' href='https://github.com/JoBHampton'>
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>


            </div>
        </section>
    );
}