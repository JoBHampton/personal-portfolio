import { GithubIcon, Linkedin, Mail, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";

export const ContactSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        setTimeout(() => {

        }, 1500)
    }
    return( 
        <section
            id='contact'
            className='py-24 px-4 relative bg-secondary/30' 
        >
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Contact <span className='text-primary'>Me</span>
                </h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Thank you for taking a look at my website! Reach out if you have any questions!
                </p>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-12 justify-center'>

                        <div className='space-y-8 justify-center'>
                            <div className='flex items-start space-x-4'>
                                <div className= 'p-3 rounded-full bg-primary/20'>
                                    <a href='mailto:jobhampton63@gmail.com' className='text-muted-foreground hover:text-primary transition-colors'>
                                        <Mail className='h-6 w-6 text-primary/10 hover:text-primary'/>

                                    </a>
                                </div>
                                <div>
                                    <h3 className='py-3 font-xl'> Email </h3>  
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8 justify-center'>
                            <div className='flex items-start space-x-4'>
                                <div className= 'p-3 rounded-full bg-primary/20'>
                                    <a href='tel:+18178516310' className='text-muted-foreground hover:text-primary transition-colors'>
                                        <Phone className='h-6 w-6 text-primary/10 hover:text-primary'/>

                                    </a>
                                </div>
                                <div>
                                    <h3 className='py-3 font-xl'> Phone </h3>  
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8 justify-center'>
                            <div className='flex items-start space-x-4'>
                                <div className= 'p-3 rounded-full bg-primary/20'>
                                    <a target='_blank' href='https://www.linkedin.com/in/joseph-hampton-cs/' className='text-muted-foreground hover:text-primary transition-colors'>
                                        <Linkedin className='h-6 w-6 text-primary/10 hover:text-primary!'/>

                                    </a>
                                </div>
                                <div>
                                    <h3 className='py-3 font-xl'> LinkedIn </h3>  
                                </div>
                            </div>
                        </div> 
                        <div className='space-y-8 justify-center'>
                            <div className='flex items-start space-x-4'>
                                <div className= 'p-3 rounded-full bg-primary/20'>
                                    <a target='_blank' href='https://github.com/JoBHampton' className='text-muted-foreground  transition-colors'>
                                        <GithubIcon className="h-6 w-6 text-primary/10 hover:text-primary "/>

                                    </a>
                                </div>
                                <div>
                                    <h3 className='py-3 font-xl'> Github </h3>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </section>
    );
};