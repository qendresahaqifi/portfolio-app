import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

const About = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
        <div className="container mx-auto max-w-5xl">
            <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                About <span className='text-primary'>Me</span>
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                <div className='space-y-6'>
                    <h3 className='text-2xl font-semibold'>Front-End Developer & Creative Tech Enthusiast</h3>
                    <p className='text-muted-foreground'>
                       I'm a self-taught front-end developer with a strong focus on React and Tailwind CSS. I enjoy creating clean, responsive websites that are both functional and visually engaging. While I don't have formal work experience yet, I've been actively building real-world projects to strengthen my skills.
                    </p>
                    <p className='text-muted-foreground'>
                         I'm passionate about turning ideas into interactive user experiences, and I constantly push myself to learn new tools, write better code, and follow best practices. I'm excited to join a modern development team and grow as a developer every step of the way.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
                        <a href="#contact" className='cosmic-button'>Get In Touch</a>
                        <a href="/qendresahaqifi-cv.pdf" className='px-6 py-2 rounded-full border border-primary hover:bg-primary/10 hover:scale-105 active:scale-95 transition-all duration-300'>Download CV</a>
                    </div>
                </div>

                <div className='grid grid-cols-1 gap-6'>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Code className='h-6 w-6 text-primary' />
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'>Web Development</h4>
                                <p className='text-muted-foreground'>
                                    Creating responsive, modern websites using React and Tailwind CSS.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <User className='h-6 w-6 text-primary' />
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'>UI Design & Accessibility</h4>
                                <p className='text-muted-foreground'>
                                    Designing clean, user-friendly interfaces with a focus on accessibility.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='gradient-border p-6 card-hover'>
                        <div className='flex items-start gap-4'>
                            <div className='p-3 rounded-full bg-primary/10'>
                                <Briefcase className='h-6 w-6 text-primary' />
                            </div>
                            <div className='text-left'>
                                <h4 className='font-semibold text-lg'> Project Building & Growth</h4>
                                <p className='text-muted-foreground'>
                                    Building real-world front-end projects to sharpen skills and grow steadily.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default About