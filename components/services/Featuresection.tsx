import React from 'react'

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl sm:text-2xl font-bold mb-2">{title}</h3> {/* Responsive text size */}
    <div className="w-16 h-0.5 bg-green-400 mb-4"></div>
    <p className="text-sm sm:text-base">{description}</p> {/* Responsive paragraph size */}
  </div>
)

const ExpertiseIcon = () => (
  <svg className="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> {/* Responsive icon size */}
    <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 28C28.4183 28 32 24.4183 32 20C32 15.5817 28.4183 12 24 12C19.5817 12 16 15.5817 16 20C16 24.4183 19.5817 28 24 28Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 40C14.4 35.6 18.8 32 24 32C29.2 32 33.6 35.6 36 40" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const FutureReadyIcon = () => (
  <svg className="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> {/* Responsive icon size */}
    <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 16V24L30 30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SimplifiedDataIcon = () => (
  <svg className="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> {/* Responsive icon size */}
    <path d="M6 14H42" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 24H42" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 34H42" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 8V40" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 8V40" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M34 8V40" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function FeaturesSection() {
  return (
    <div className="bg-[#0a2f1f] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <FeatureCard
            icon={<ExpertiseIcon />}
            title="Expertise"
            description="Gain access to global expertise for future-ready solutions through our people, intellectual property and partnerships"
          />
          <FeatureCard
            icon={<FutureReadyIcon />}
            title="Future-ready solutions"
            description="Build a modern foundation with a data fabric blueprint, leveraging automated tools and workflows"
          />
          <FeatureCard
            icon={<SimplifiedDataIcon />}
            title="Simplified data operations"
            description="Reduce the complexity of your data estate with data governance strategy and a unified console"
          />
        </div>
      </div>
    </div>
  )
}
