async function fetchLaunches() {
  const response = await fetch('https://fdo.rocketlaunch.live/json/launches/next/5');
  const data = await response.json();
  const launches = data.result;
  return launches;
}

export default async function Home() {
  const launches = await fetchLaunches();
  return (
    <main>
      <div>
        <h2>Upcoming Launches</h2>
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
                provider={launch.provider.name}
                vehicle={launch.vehicle.name}
                title={launch.name}
                location={location}
                time={time}
              />
            );
          })}
        </div>
      </div>
      <p>
        Data by <a href="https://www.rocketlaunch.live/api">RocketLaunch.Live</a>.
      </p>
    </main>
  );
}

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function LaunchCard({ provider, vehicle, title, location, time }: any) {
  return (
    <div className="card">
      <div className="avatar">
        <div className="provider">{provider}</div>
        <div className="vehicle">
          <RocketLaunchIcon fontSize="small" />
          <div>{vehicle}</div>
        </div>
      </div>
      <div className="info">
        <div className="title">{title}</div>
        <div className="location">
          <PlaceIcon fontSize="small" />
          <div>{location}</div>
        </div>
        <div className="time">
          <AccessTimeIcon fontSize="small" />
          <div>{time}</div>
        </div>
      </div>
    </div>
  );
}
