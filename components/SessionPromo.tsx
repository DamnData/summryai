import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image"; // Import the Image component
import sessionImage from "@/public/Discussion.jpg"; // Correct path to your image

export default function StrategySessionPromo() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight text-black">
              Get a 30-minute, no-cost strategy session with a Data and AI services expert
            </h2>
            <p className="text-lg text-black">
              Get started by talking to our experts about how to enable business
              insights at scale with the right data foundation, modernization and
              platform management.
            </p>
            <Button 
              variant="outline" 
              className="border-[#ff4d00] text-black hover:bg-[#ff4d00] hover:text-white transition-colors"
            >
              Let's talk
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="relative">
            {/* Use Next.js Image component for better optimization */}
            <Image
              src={sessionImage}
              alt="Data and AI services expert discussing with clients"
              className="rounded-lg shadow-lg w-full h-auto"
              placeholder="blur" // Optional: Adds a blur effect while loading
            />
          </div>
        </div>
      </div>
    </div>
  );
}
