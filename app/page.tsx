import { fetchLaunches } from '@/lib/fetchLaunches';
import { LaunchList } from '@/components/LaunchList';

export default async function Home() {
  const launches = await fetchLaunches();
  return (
    <main>
      <div>
        <h2>Upcoming Launches</h2>
        <LaunchList launches={launches} />
      </div>
      <p>
        Data by <a href="https://www.rocketlaunch.live/api">RocketLaunch.Live</a>.
      </p>
    </main>
  );
}
