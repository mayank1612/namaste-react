import { IMG_CDN_URL } from '../contants';
import { Skeleton } from '@mui/material';

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  loading,
}) => {
  return loading ? (
    <div className="card">
      <Skeleton variant="rectangular" width={200} height={300} />
    </div>
  ) : (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

export default RestrauntCard;
