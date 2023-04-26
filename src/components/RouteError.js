import React from 'react';
import { useRouteError } from 'react-router-dom';

function RouteError() {
  const { status, statusText } = useRouteError();
  return (
    <div>
      <h1>
        {status} : {statusText}
      </h1>
    </div>
  );
}

export default RouteError;
