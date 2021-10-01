import * as React from 'react';

function GarageInfo(props) {
  const { info } = props;
  const displayName = `${info.garageTitle}`;

  return (
    <div>
      <div>{displayName}</div>
    </div>
  );
}

export default React.memo(GarageInfo);
