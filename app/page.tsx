import { LaunchList } from '@/components/LaunchList';

export default function Home() {
  return (
    <main>
      <div>
        <h2>Upcoming Launches</h2>
        <LaunchList />
      </div>
      <p>
        Data by <a href="https://www.rocketlaunch.live/api">RocketLaunch.Live</a>.
      </p>
    </main>
  );
}
