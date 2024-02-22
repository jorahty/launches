export async function fetchLaunches() {
  const response = await fetch('https://fdo.rocketlaunch.live/json/launches/next/5', {
    cache: 'no-store',
  });
  const data = await response.json();
  const launches = data.result;
  return launches;
}
