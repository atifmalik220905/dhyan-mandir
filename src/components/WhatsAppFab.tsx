export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919012626002?text=Hi%20Dhyan%20Mandir%2C%20I%27d%20like%20to%20enquire%20about%20a%20journey."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[var(--whatsapp)] opacity-60 animate-ping" />
      <span className="relative flex items-center gap-3 rounded-full bg-[var(--whatsapp)] text-white pl-4 pr-5 py-3 shadow-elegant hover:scale-105 transition-transform">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.52 3.48A11.93 11.93 0 0 0 12.04 0C5.5 0 .2 5.3.2 11.84c0 2.09.55 4.12 1.6 5.92L0 24l6.4-1.68a11.83 11.83 0 0 0 5.64 1.44h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.16-1.23-6.13-3.37-8.44ZM12.05 21.5h-.01a9.66 9.66 0 0 1-4.93-1.35l-.35-.21-3.8 1 .99-3.7-.23-.38a9.65 9.65 0 0 1-1.49-5.18c0-5.34 4.35-9.68 9.7-9.68a9.6 9.6 0 0 1 6.85 2.84 9.6 9.6 0 0 1 2.83 6.85c0 5.34-4.35 9.81-9.56 9.81Zm5.55-7.27c-.3-.15-1.79-.88-2.07-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.26 5.16 4.57.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.79-.73 2.04-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35Z"/>
        </svg>
        <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap">+91 90126 26002</span>
      </span>
    </a>
  );
}
