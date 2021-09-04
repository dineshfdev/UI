import * as React from 'react';

function CityInfo(props) {
  const { info } = props;
  const displayName = `${info.garageTitle}`;

  return (
    <div>
      <div>{displayName} | </div>
      <img width={240} src={info.garageImage} />
    </div>
  );
}

export default React.memo(CityInfo);
