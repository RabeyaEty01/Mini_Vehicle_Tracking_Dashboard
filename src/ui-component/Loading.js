import { CircularProgress } from '@mui/material';
import React from 'react';


export default function Loading(props) {
  if (props.error) {
    return (
      <div>
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else if (props.timedOut) {
    return (
      <div>
        Taking a long time... <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else if (props.pastDelay) {
    return (
      <div
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh' }}
      >
        <CircularProgress />
      </div>
    );
  } else {
    return null;
  }
}
