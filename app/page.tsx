import { Clock, MapPin, Rocket } from "lucide-react";
import { fetchLaunches } from "@/lib/fetchLaunches";
import { Card } from "@/components/ui/card";

export default async function Home() {
  const launches = await fetchLaunches();
  return (
    <main className="mx-auto flex h-screen max-w-xl flex-col gap-4 p-8">
      <h1 className="text-2xl font-bold">Upcoming Launches</h1>
      <div className="flex flex-col gap-4">
        {launches.map((launch: any) => {
          const place = launch.pad.location.statename ?? launch.pad.location.country;
          const location = `${place} • ${launch.pad.location.name}`;
          let time = `${launch.date_str}`;
          if (launch.t0) {
            const date = new Date(launch.t0);
            time += ` • ${date.toLocaleTimeString([], { timeStyle: "short" })}`;
          }
          return (
            <LaunchCard
              key={launch.id}
              provider={launch.provider.name}
              vehicle={launch.vehicle.name}
              title={launch.name}
              location={location}
              time={time}
            />
          );
        })}
      </div>
      <div className="grow" />
      <p>
        Data by{" "}
        <a
          className="font-medium text-blue-600 dark:text-blue-400"
          href="https://www.rocketlaunch.live/api"
        >
          RocketLaunch.Live
        </a>
      </p>
    </main>
  );
}

function LaunchCard({ provider, vehicle, title, location, time }: any) {
  return (
    <div className="flex gap-3">
      <Card className="flex w-40 flex-col items-center justify-center bg-secondary p-2">
        <p className="font-bold">{provider}</p>
        <div className="flex items-center gap-1">
          <Rocket size={20} />
          <p>{vehicle}</p>
        </div>
      </Card>
      <div className="w-full">
        <p className="font-bold">{title}</p>
        <div className="flex items-center gap-1">
          <MapPin size={20} />
          <p className="w-full">{location}</p>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={20} />
          <p className="w-full">{time}</p>
        </div>
      </div>
    </div>
  );
}
