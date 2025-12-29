/**
 * Environment configuration
 * Centralized access to environment variables with fallbacks
 */

export const getEnvVar = (key, defaultValue = null) => {
  return import.meta.env[key] || defaultValue;
};

export const ENV = {
  WHATSAPP_PHONE: getEnvVar('VITE_WHATSAPP_PHONE'),
};

