import dynamic from 'next/dynamic';
import Homepage from "@/components/homepage";

const CalWidget = dynamic(() => import('@/components/CalWidget'), {
  ssr: false,
});

export default function Page() {
  return (
    <div className="">
      <Homepage />
      <CalWidget />
    </div>
  );
}