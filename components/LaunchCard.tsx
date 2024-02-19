import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export function LaunchCard({ provider, vehicle, title, location, time }: any) {
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
