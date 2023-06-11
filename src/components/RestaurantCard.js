import { IMG_CDN_URL } from '../contants';
import { Skeleton } from '@mui/material';
import { useContext } from 'react';
import UserContext from '../utils/userContext';

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  loading,
}) => {
  const { user } = useContext(UserContext);

  return loading ? (
    <div className="m-3 bg-pink-50 h-[350px] w-[350px]">
      <Skeleton variant="rectangular" height="350px" width="350px" />
    </div>
  ) : (
    <div className="m-3 bg-pink-50 p-3 max-w-[350px]">
      <img src={IMG_CDN_URL + cloudinaryImageId} className="h-[217px] mb-2" />
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{lastMileTravelString} minutes</h4>
      <span className="font-bold block">{user.name}</span>
      <span className="font-bold block"> {user.email}</span>
    </div>
  );
};

export default RestrauntCard;
