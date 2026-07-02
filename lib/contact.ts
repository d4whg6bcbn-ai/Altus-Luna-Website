export const CONTACT_PHONE_DISPLAY = "+35797492264";

export const CONTACT_PHONE_WHATSAPP = CONTACT_PHONE_DISPLAY.replace(/\D/g, "");

export function getWhatsAppHref(message: string) {
  return `https://wa.me/${CONTACT_PHONE_WHATSAPP}?text=${encodeURIComponent(message)}`;
}
