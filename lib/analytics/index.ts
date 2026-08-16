/**
 * Privacy-first analytics provider abstraction.
 * Does NOT store or transmit sensitive numeric financial values or PII.
 */

export type AnalyticsEventName =
  | 'calculator_started'
  | 'calculator_completed'
  | 'calculator_reset'
  | 'currency_changed'
  | 'affiliate_click'
  | 'compare_clicked'
  | 'guide_cta_clicked'
  | 'theme_changed';

export interface AnalyticsEventParams {
  calculatorType?: string;
  currency?: string;
  provider?: string;
  guideSlug?: string;
  theme?: string;
  deviceCategory?: 'mobile' | 'desktop';
}

export function trackEvent(eventName: AnalyticsEventName, params?: AnalyticsEventParams): void {
  // Silent console log in development environment
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics Event] ${eventName}:`, params);
  }

  // Safe window object analytics hook if Google Analytics / Plausible is injected in production
  if (typeof window !== 'undefined') {
    if ((window as any).gtag) {
      (window as any).gtag('event', eventName, params);
    } else if ((window as any).plausible) {
      (window as any).plausible(eventName, { props: params });
    }
  }
}
