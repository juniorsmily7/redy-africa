const isProductionMood = import.meta.env.PROD;

export const BASE_URl = isProductionMood
  ? 'https://bhives.com'
  : import.meta.env.VITE_BASE_URL;

// urls
export const LOGIN_URL = '/auth-login';
export const REGISTER_URL = '/auth-register';
export const RESET_PASSWORD_VERIFY_URL = '/auth-reset-verify';
export const RESET_PASSWORD_URL = '/auth-reset-password';
