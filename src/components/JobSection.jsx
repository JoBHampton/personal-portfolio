import { Code, GraduationCap, User } from "lucide-react"
import { useState } from "react";
import { cn } from "../lib/utils";

const catergories = ['all', 'relevant', 'additional'];

const jobs = [
    //Relevant
    {job: 'Contract AI Developer', catergory:'relevant', company: 'Handshake AI Solutions', img: '/personal-portfolio/jobs/hs.jpg', 
        desc: {
            1: 'Collaborated with researchers to evaluate and refine Large Language Model (LLM) performance through structured testing, domain-specific analysis, and contextual improvements',
            2: 'Designed and developed Godot game projects as controlled technical environments for LLM learning, evaluation, and task execution',
            3: 'Created detailed prompts and grading rubrics to assess LLM reasoning, code generation, and problem-solvingaccuracy within game-development scenarios'
        }
    },
    {job: 'Full-Stack Developer Intern', catergory:'relevant', company: 'Motion Industries', img: '/personal-portfolio/jobs/Mot.png', 
        desc: {
            1: 'Constructed and enhanced user interface components using JavaScript and Java, contributing primarily to backend functionality within full-stack projects',
            2: 'Created and executed unit tests to ensure code quality and reliability and successfully merged features into the main codebase following best practices',
            3: 'Contributed to the strategic roadmap for upcoming development cycles during Program Increment (PI) Planning sessions and gained significant insight into Agile planning processes'
        }
    },
    {job: 'Student Researcher', catergory:'relevant', company: 'Human Technology Interface Lab, University of Alabama', img: '/personal-portfolio/jobs/ua.png', 
        desc: {
            1: 'Developed a research-driven Godot project to explore implicit control mechanisms, focusing on user interactions and decision-making patterns',
            2: 'Implemented a system for random point selection within the project, laying the groundwork for analyzing user responses to dynamic stimuli',
            3: 'Integrated WebSocket communication to establish a real-time connection between the Godot project and a server, enabling data collection and analysis for implicit control research'
        }
    },
    {job: 'IT Summer Intern', catergory:'relevant', company: 'Christ Chapel Bible Church', img: '/personal-portfolio/jobs/ccbc.webp', 
        desc: {
            1: 'Collaborated with the Help Desk team, diagnosing and resolving diverse IT issues, ensuring minimum downtimeand optimal end-user satisfaction',
            2: 'Securely wiped and decommissioned EOL devices, adhering to data privacy standards and best practices',
            3: 'Assisted in the transition from traditional PCs to Raspberry Pi systems, enhancing efficiency and reducing operational costs'
        }
    },
   
    

    // //Additional
    {job: 'Delivery Driver', catergory:'additional', company: 'Domino\'s Pizza', img: '/personal-portfolio/jobs/dom.png', 
        desc: {
            1: 'Maintained an exemplary on-time delivery record while safely navigating high-traffic routes, ensuring customer satisfaction and food quality standards',
            2: 'Managed cash transactions and processed payments accurately, reconciling daily receipts and maintaining accountability for funds handled',
            3: 'Provided professional customer service in fast-paced environments, resolving delivery issues promptly and representing the brand positively in customer interactions'
        }
    },
    {job: 'Private Tutor', catergory:'additional', company: 'Applied Tutoring', img: '/personal-portfolio/jobs/AT.webp', 
        desc: {
            1: 'Provided personalized tutoring sessions in advanced mathematics and computer science to college students',
            2: 'Employed a tailored teaching approach, identifying individual learning styles and adapting lesson plans to ensure academic improvement',
            3: 'Facilitated exam preparation strategies and problem-solving techniques that enhanced students\' critical thinking skills and test performance in coursework'
        }
    },
    {job: 'Room Attendant at Old Faithful Inn', catergory:'additional', company: 'Xanterra Travel Collection, Yellowstone National Park', img: '/personal-portfolio/jobs/xan.png', 
        desc: {
            1: 'Ensured all guest rooms and common areas are thoroughly cleaned and replenished with necessary amenities according to the hotel\'s standards',
            2: 'Provided exceptional customer service by addressing guest requests and preferences promptly and courteously, enhancing their overall experience at the inn',
            3: 'Collaborated with housekeeping team members to efficiently manage room turnover during peak tourist season, consistently meeting daily room quotas while maintaining high cleanliness standards in a historic landmark property'
        }
    },
]


export const JobSection = () => {

    const [activeCatergory, setActiveCatergory] = useState('all');
    const filteredJobs = jobs.filter((job) => activeCatergory === 'all' || job.catergory === activeCatergory);

    return(
        <section id='jobs' className='py-24 px-4 relative'>
            <div>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    My <span className='text-primary'> Experience</span>
                </h2>
            </div>
            <div className='flex flex-wrap justify-center gap-4 mb-12'>
                {catergories.map((catergory, key) => (
                    <button 
                    key={key}
                    onClick={() => setActiveCatergory(catergory)} 
                    className={cn(
                        'px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                            activeCatergory === catergory ? 'bg-primary text-primary-foreground' : 'bg-secondary/70 text-foreground hover:bd-secondary'
                        )}
                                
                    >
                        {catergory}
                    </button>
                ))}
            
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredJobs.map((job, key) => (
                    <div key = {key}className='gradient-border p-6 card-hover rounded-half'>
                        <div className='flex items-start gap-4'>
                            <img src={job.img} className='rounded-full h-10 w-30'/>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'>{job.job}</h4>
                                <h5 className='italic text-lg'>{job.company}</h5>
                                <ul>
                                    <li>
                                        <p className='test-muted-foreground'> 
                                            ·{job.desc[1]}
                                        </p>
                                    </li>
                                    <li>
                                        <p className='test-muted-foreground'> 
                                            ·{job.desc[2]}
                                        </p>
                                    </li>
                                    <li>
                                        <p className='test-muted-foreground'> 
                                            ·{job.desc[3]}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
                        

            </div>
        </section>
    )
}