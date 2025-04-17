import { HumidityChart } from "@/components/home-chart"
import { DeviceStats } from "@/components/ui/deviceStats"
export default function Home() {
  return (
      //set overflow-hidden on div to hide the devicestats excess rendering
      <div className="flex flex-col px-6 py-6 gap-6 flex-grow justify-start overflow-hidden">
        <DeviceStats/>
        <HumidityChart/>
      </div>
  );
}
