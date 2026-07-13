import { ArrowRight, ExternalLink, Github, PlayIcon } from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'Runaway',
        desc: 'Run away from the red boys. WASD to move',
        img: '/personal-portfolio/game2.1/title.png',
        tags: ['Godot', 'WASD', '2D'],
        itchUrl: 'https://penguinczar.itch.io/week1',
        demoUrl: '/personal-portfolio/game2.1/index.html',
    },{
        id: 2,
        title: 'DisJoint',
        desc: 'Solve Puzzles, WASD to move, Space to Jump, Arrow keys to look, R to Restart. Go fast!',
        img: '/personal-portfolio/game3.1/title.png',
        tags: ['Godot', 'WASD', '3D'],
        itchUrl: 'https://penguinczar.itch.io/week1',
        demoUrl: '/personal-portfolio/game3.1/week2.html',
    }
    
]


export const GamesSection = () => {
    return (
        <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Four Weeks <span className='text-primary'> Four Games </span>
                </h2>

                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Each week in July, I've spent 20 minutes per day making a game. Four weeks, Four Games.
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
                                        <PlayIcon size={20}/>
                                    </a>
                                    <a  
                                        href={project.itchUrl}
                                        target='_blank'
                                        className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                    >
                                        <ExternalLink size={20}/>
                                    </a>
                                </div> 

                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* <div className='text-center mt-12'>
                    <a className='cosmic-button w-fit flex items-center mx-auto gap-2' target='_blank' href='https://github.com/JoBHampton'>
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div> */}


            </div>
        </section>
    );
}