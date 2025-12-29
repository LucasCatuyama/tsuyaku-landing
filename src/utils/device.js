/**
 * Device detection utilities
 */

/**
 * Checks if the current device is a mobile device
 * @returns {boolean} True if the device is mobile
 */
export const isMobileDevice = () => {
  return /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
};

