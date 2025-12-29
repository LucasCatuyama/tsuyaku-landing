/**
 * Custom hook for WhatsApp redirect functionality
 * Provides a function to redirect users to WhatsApp
 */

import { useCallback, useMemo } from 'react';
import { openWhatsApp } from '../utils/whatsapp';
import { useLanguage } from '../i18n/LanguageProvider';

/**
 * Hook that returns a function to redirect to WhatsApp
 * @param {string} customMessage - Optional custom message to override default
 * @returns {Function} Function to trigger WhatsApp redirect
 */
export const useWhatsAppRedirect = (customMessage) => {
  const { t } = useLanguage();

  const message = useMemo(() => {
    return customMessage ?? t('whatsapp.defaultMessage');
  }, [customMessage, t]);

  const redirectToWhatsApp = useCallback(() => {
    openWhatsApp(undefined, message);
  }, [message]);

  return redirectToWhatsApp;
};

