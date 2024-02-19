import { fetchLaunches } from '@/lib/fetchLaunches';
import { LaunchCard } from '@/components/LaunchCard';

export async function LaunchList() {
  const launches = await fetchLaunches();
  return (
    <div className="list">
      {launches.map((launch: any) => {
        const place = launch.pad.location.statename ?? launch.pad.location.country;
        const location = `${place} • ${launch.pad.location.name}`;
        let time = `${launch.date_str}`;
        if (launch.t0) {
          const date = new Date(launch.t0);
          time += ` • ${date.toLocaleTimeString([], { timeStyle: 'short' })}`;
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
  );
}
