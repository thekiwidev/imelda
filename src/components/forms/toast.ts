import type { ToasterProps } from 'react-hot-toast';

// Toasts in the brand palette (forest for success, danger red for errors).
export const toastOptions: ToasterProps['toastOptions'] = {
  duration: 6000,
  style: { fontFamily: 'var(--f-sans)', fontSize: '15px', borderRadius: '8px', border: '1px solid var(--line)', color: 'var(--ink)' },
  success: { iconTheme: { primary: '#0f3d1f', secondary: '#ffffff' } },
  error: { iconTheme: { primary: '#b42318', secondary: '#ffffff' } },
};
