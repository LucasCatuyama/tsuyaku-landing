/**
 * WhatsApp utility functions
 */

import { ENV } from '../config/env';
import { WHATSAPP_MESSAGE } from '../constants/app';
import { isMobileDevice } from './device';

/**
 * Generates a WhatsApp URL with the phone number and message
 * @param {string} phone - Phone number (with country code, no +)
 * @param {string} message - Message to pre-fill
 * @returns {string} WhatsApp URL
 */
export const generateWhatsAppUrl = (phone, message = WHATSAPP_MESSAGE) => {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

/**
 * Opens WhatsApp in a new window/tab or redirects based on device type
 * @param {string} phone - Phone number (with country code, no +)
 * @param {string} message - Optional custom message
 */
export const openWhatsApp = (phone = ENV.WHATSAPP_PHONE, message = WHATSAPP_MESSAGE) => {
  if (!phone) {
    console.error('WhatsApp phone number is not configured');
    return;
  }

  const url = generateWhatsAppUrl(phone, message);
  const isMobile = isMobileDevice();

  if (isMobile) {
    // Better behavior for mobile - redirect in same window
    window.location.href = url;
  } else {
    // Open in new tab on desktop
    window.open(url, '_blank');
  }
};

