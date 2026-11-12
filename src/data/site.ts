// Single source for business facts. The same values feed visible copy and, once verified,
// the structured data (JSON-LD) Google reads, so they only need changing here.
//
// Contact details below are EXAMPLE content (the previous site did not publish them). They are
// shown on the page but kept out of structured data and phone links until `detailsVerified` is true.

export const site = {
  name: 'Imelda Yayala',
  legalName: 'Imelda Yayala Ltd',
  tagline: 'Study, work and travel abroad, handled properly.',
  description:
    'Study, work and travel abroad, handled properly. Based in Nigeria, working with clients wherever they start.',
  disclaimer:
    'We are a private consultancy, not a government agency. Visa decisions are made only by the issuing authority. Official visa and application-centre fees are always paid directly to them.',
  domainLabel: 'imeldayayala.com.ng',
  locale: 'en_NG',
  foundedYear: 2015,
  /** Set to true once the address, phone and email below are the real ones. */
  detailsVerified: false,
  address: {
    street: 'Suite 14, Kano Plaza, 34 Aminu Kano Crescent, Wuse 2',
    city: 'Abuja',
    country: 'Nigeria',
    countryCode: 'NG',
  },
  hours: { weekdays: '9:00am – 5:00pm', saturday: '10:00am – 2:00pm' },
  phone: '+234 803 456 7890',
  email: 'hello@imeldayayala.com.ng',
  /**
   * The business WhatsApp number in international format, digits only (e.g. 2348031234567).
   * Every "Book a consultation" and "WhatsApp" button opens a chat with this number and a
   * ready-made message. While empty, those buttons scroll to the page's contact section instead.
   */
  whatsapp: '',
  // From the previous site's footer (tracking parameters removed).
  social: {
    instagram: 'https://www.instagram.com/official_imeldayayala/',
    facebook: 'https://www.facebook.com/share/14cYqt5Fhi/',
    x: 'https://x.com/ImeldaYayala',
    tiktok: 'https://www.tiktok.com/@imeldayayala',
  },
} as const;

export const nav = [
  { label: 'Study', href: '/study-abroad/' },
  { label: 'Work', href: '/work-abroad/' },
  { label: 'Travel', href: '/travel-visa/' },
  { label: 'How it works', href: '/#how' },
  { label: 'Client stories', href: '/#stories' },
] as const;

export type Faq = { q: string; a: string };

export const CONSULT_MESSAGE = "Hello Imelda Yayala, I'd like to book a free consultation.";

/** WhatsApp chat link with a prefilled message, or the page's contact section until a number is set. */
export const waLink = (message: string = CONSULT_MESSAGE) =>
  site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}` : '#contact';

/** Phone link only for a verified number; an example number must never be dialled. */
export const callLink = () => (site.detailsVerified ? `tel:${site.phone.replace(/\s/g, '')}` : waLink());
