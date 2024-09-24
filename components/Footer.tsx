import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Github, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-black">
            Ready to take your <span className="font-normal">Company Growth</span>{" "}
            to the next level?
          </h2>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto text-sm">
            Reach out to us today and let's discuss how we can help you achieve
            your goals.
          </p>
          <Button className="bg-black text-white hover:bg-gray-800 text-sm px-8 py-3" asChild>
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1">
              <h1 className="text-2xl font-bold text-black">DamnData.</h1>
            </div>

            <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Company Section */}
              <div>
                <h3 className="text-black font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-700 hover:text-black transition-colors">About</Link></li>
                  <li><Link href="/testimonial" className="text-gray-700 hover:text-black transition-colors">Testimonial</Link></li>
                  <li><Link href="/contact" className="text-gray-700 hover:text-black transition-colors">Contact us</Link></li>
                </ul>
              </div>

              {/* Resources Section */}
              <div>
                <h3 className="text-black font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/articles" className="text-gray-700 hover:text-black transition-colors">Data Analysis</Link></li>
                  <li><Link href="/blog" className="text-gray-700 hover:text-black transition-colors">AI/ML SaaS</Link></li>
                  <li><Link href="/cheatsheets" className="text-gray-700 hover:text-black transition-colors">Chatbots</Link></li>
                  <li><Link href="/challenges" className="text-gray-700 hover:text-black transition-colors">Org. Growth</Link></li>
                  <li><Link href="/challenges" className="text-gray-700 hover:text-black transition-colors">AI Intro</Link></li>
                </ul>
              </div>
              {/* <div className="col-span-2">
                <h3 className="text-black font-semibold mb-4">Subjects</h3>
                <ul className="space-y-2">
                  <li><Link href="/subjects/data-science" className="text-gray-700 hover:text-black transition-colors">Data Science</Link></li>
                  <li><Link href="/subjects/data-analytics" className="text-gray-700 hover:text-black transition-colors">Data Analytics</Link></li>
                  <li><Link href="/subjects/ai-engineering" className="text-gray-700 hover:text-black transition-colors">AI Engineering</Link></li>
                  <li><Link href="/subjects/full-stack" className="text-gray-700 hover:text-black transition-colors">Full Stack Development</Link></li>
                  <li><Link href="/subjects/ui-ux" className="text-gray-700 hover:text-black transition-colors">UI/UX Design</Link></li>
                  <li><Link href="/subjects/cyber-security" className="text-gray-700 hover:text-black transition-colors">Cyber Security Expert</Link></li>
                  <li><Link href="/subjects/docker" className="text-gray-700 hover:text-black transition-colors">Docker Masterclass</Link></li>
                </ul>
              </div>
             */}
             </div>

            {/* Map Section */}
            <div className="md:col-span-1">
              <h3 className="text-black font-semibold mb-4">Our Location</h3>
              <div className="relative w-full h-40 rounded-md overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95592831574904!3d-37.8172097420195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772b8c4ff0cb8!2sDamnData%20Headquarters!5e0!3m2!1sen!2sus!4v1630947845421!5m2!1sen!2sus"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t pt-8">
            <div className="text-gray-700 text-sm mb-4 md:mb-0">
              © 2024 DamnData. All Rights Reserved.
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/damndata" className="text-gray-700 hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">GitHub</span>
                <Github size={24} />
              </a>
              <a href="https://twitter.com/damndata" className="text-gray-700 hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Twitter</span>
                <Twitter size={24} />
              </a>
              <a href="https://linkedin.com/company/damndata" className="text-gray-700 hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer