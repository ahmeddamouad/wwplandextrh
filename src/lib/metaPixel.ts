// Meta (Facebook) Pixel tracking utilities
declare global {
  interface Window {
    fbq?: (
      action: string,
      event: string,
      params?: Record<string, unknown>
    ) => void;
    _fbq?: unknown;
  }
}

/**
 * Track a Lead event (form submission)
 */
export function trackLead(): void {
  if (!window.fbq) {
    console.warn('Meta Pixel not loaded');
    return;
  }

  try {
    window.fbq('track', 'Lead');
    console.log('Meta Pixel: Lead event tracked');
  } catch (error) {
    console.error('Failed to track Lead:', error);
  }
}
