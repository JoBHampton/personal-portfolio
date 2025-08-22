import { useState } from "react";
import { cn } from "../lib/utils";
import { Code, Cog, LaptopMinimal, Wrench } from "lucide-react";

const skills = [
    //FrontEnd
    {name: 'HTML/CSS', level:60, catergory: 'frontend', symbol: LaptopMinimal},
    {name: 'JavaScript', level:70, catergory: 'frontend', symbol: LaptopMinimal},
    {name: 'Godot', level:75, catergory: 'frontend', symbol: LaptopMinimal},
    {name: 'Unity', level:70, catergory: 'frontend', symbol: LaptopMinimal},
    


    //Backend
    {name: 'MongoDB', level: 60, catergory: 'backend', symbol: Cog},
    {name: 'C/C++', level: 85, catergory: 'backend', symbol: Cog},
    {name: 'Python', level: 70, catergory: 'backend', symbol: Cog},
    {name: 'Java', level: 70, catergory: 'backend', symbol: Cog},
    {name: 'WebSockets', level: 60, catergory: 'backend', symbol: Cog},


    //Tools
    {name: 'Git/GitHub', level: 90, catergory: 'tools', symbol: Wrench},
    {name: 'Unit Testing', level: 85, catergory: 'tools', symbol: Wrench},
    {name: 'Technical Writing', level: 75, catergory: 'tools', symbol: Wrench},

];

const catergories = ['all', 'frontend', 'backend', 'tools'];


export const SkillsSection = () => {
    const [activeCatergory, setActiveCatergory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCatergory === 'all' || skill.catergory === activeCatergory);

    return (
    <section id='skills' className='py-24 px-4 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                My <span className='text-primary'> Skills</span>
            </h2>

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

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {filteredSkills.map((skill, key) => (
                    <div key = {key} className='bg-card p-6 rounded-lg shadow-xs card-hover'> 
                        <div className='text=left mb-4'> 
                        {skill.symbol && <skill.symbol className="w-5 h-5 text-primary" />}
                            <h3 className='font-semibold text-lg'>  {skill.name}</h3>
                        </div>
                        {/* <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                            <div
                             className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]'
                             style={{width: skill.level + '%'}}
                            /> 
                        </div>
                        <div className='text-right mt-1'> 
                            <span className='text-sm text-muted-foreground'>{skill.level}%</span>
                        </div> */}
                    </div>
                ))}

            </div>



        </div>

    </section>

    );
};