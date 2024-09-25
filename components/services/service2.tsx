import { Button } from "@/components/ui/button";
import Image from "next/image"; // Import the Next.js Image component
import generativeImage from "@/public/SaaSproduct.jpg"; // Update with the actual image name and path

export default function GenerativeAI() {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image on the left side for large screens */}
        <div className="relative">
          <Image
            src={generativeImage} // Using Image component from next/image
            alt="Generative AI illustration"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Text on the right side for large screens */}
        <div className="space-y-6 lg:order-first">
          <h1 className="text-4xl font-bold text-black font-[Space_Grotesk]">
            Generative AI Services
          </h1>
          <p className="text-lg text-gray-700 font-[Space_Grotesk]">
            With over three decades of experience in delivering secure data services
            and enterprise-grade AI, Kyndryl enables you to navigate the complexities
            of generative AI to drive efficiencies, enhance experiences and reinvent
            your business.
          </p>
          <p className="text-lg text-gray-700 font-[Space_Grotesk]">
            We help you accelerate the adoption of a future-ready data foundation that
            removes barriers and enhances data accessibility, accuracy, and timeliness.
            With our data frameworks, deep expertise, and robust partner ecosystem of
            leading hyperscalers and data technology providers, we help you build new
            data-driven capabilities and prepare your business to get the maximum
            value of AI.
          </p>
          <Button variant="default" className="bg-gray-900 text-white hover:bg-gray-800 font-[Space_Grotesk]">
            Explore data modernization services
          </Button>
        </div>
      </div>
    </div>
  );
}
