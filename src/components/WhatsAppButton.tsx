import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/916301575658?text=${encodeURIComponent("Hi Houses Adda, I'm interested in your properties.")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-40"
    >
      <div className="flex items-center gap-2 mb-whatsapp px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all">
        <MessageCircle className="h-6 w-6" />
        <span className="hidden md:inline font-medium">Chat with us</span>
      </div>
    </a>
  );
}
