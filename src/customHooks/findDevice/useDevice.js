/* eslint-disable import/no-anonymous-default-export */
import { useEffect, useState } from 'react';
import deviceTemplate from './deviceTemplate';
import resizer from './resizerFunction';

/*****
 * @param {Object} params
 * @param {Array}  params.breakpoints      - List of breakpoints
 * @param {String} params.breakpoints.name - Name of breakpoint
 * @param {Number} params.breakpoints.min  - >  Amount of pixel
 * @param {Number} params.breakpoints.max  - <= Amount of pixel
 *****/

export default (props = {}) => {
  const { breakpoints = [] } = props || {};
  const { breakpoint } = resizer({
    deviceProperties: deviceTemplate,
    breakpoints,
  });

  const [deviceProperties, setDeviceProperties] = useState({
    ...deviceTemplate,
    breakpoint,
  });

  useEffect(() => {
    const handleResize = () => {
      const properties = resizer({ deviceProperties, breakpoints });
      setDeviceProperties((data) => ({
        ...data,
        ...properties,
      }));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return deviceProperties;
};
