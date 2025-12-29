/**
 * Custom hook for WhatsApp redirect functionality
 * Provides a function to redirect users to WhatsApp
 */

import { useCallback } from 'react';
import { openWhatsApp } from '../utils/whatsapp';
import { WHATSAPP_MESSAGE } from '../constants/app';

/**
 * Hook that returns a function to redirect to WhatsApp
 * @param {string} customMessage - Optional custom message to override default
 * @returns {Function} Function to trigger WhatsApp redirect
 */
export const useWhatsAppRedirect = (customMessage = WHATSAPP_MESSAGE) => {
  const redirectToWhatsApp = useCallback(() => {
    openWhatsApp(undefined, customMessage);
  }, [customMessage]);

  return redirectToWhatsApp;
};

