import { Button } from "@/components/ui/button";
import Image from "next/image"; // Import Next.js Image component
import dataModernizationImage from "@/public/SaaSproduct.jpg"; // Update with your image path from the public folder

export default function DataModernizationServices() {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image on the left side for large screens */}
        <div className="relative lg:order-last">
          <Image
            src={dataModernizationImage} // Replace with the actual image
            alt="Data Modernization"
            className="rounded-lg shadow-lg w-full h-auto"
            placeholder="blur" // Optional: for Next.js image optimization
          />
        </div>

        {/* Text on the right side */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-black font-[Space_Grotesk]">
            Data Modernization Services
          </h1>
          <p className="text-lg text-gray-700 font-[Space_Grotesk]">
            Make your data more valuable and create advanced data products for
            intelligent business decisions with the transformative powers of modernized
            data architecture in the cloud.
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
