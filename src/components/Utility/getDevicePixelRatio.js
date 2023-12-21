const getDevicePixelRatio = () => {
  if (window && window.devicePixelRatio) {
    return window.devicePixelRatio;
  }
  return 1;
};

export default getDevicePixelRatio;
