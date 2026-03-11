"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, MessageCircle } from "lucide-react";

// ── Language Detection ──────────────────────────────────────────
function isArabic(text: string) {
  return /[\u0600-\u06FF]/.test(text);
}

// ── Knowledge Base ───────────────────────────────────────────────
type Reply = { ar: string; en: string };

const kb: { pattern: RegExp; reply: Reply }[] = [
  {
    pattern: /greet|hello|hi|hey|مرحبا|أهلا|اهلا|هلا|سلام|صباح|مساء/i,
    reply: {
      ar: "أهلاً وسهلاً! 👋 أنا مساعد فارس جروب. كيف أقدر أساعدك اليوم؟\n\nيمكنني مساعدتك في:\n• منتجاتنا وخدماتنا\n• ملاعب البادل\n• الفتنس والجيم\n• الإنشاء والتوريد\n• التواصل معنا",
      en: "Hello! 👋 I'm Faris Group's assistant. How can I help you today?\n\nI can help you with:\n• Our products & services\n• Padel courts\n• Fitness & gym\n• Construction & supply\n• Contact information",
    },
  },
  {
    pattern: /padel|بادل|ملعب بادل|padel court/i,
    reply: {
      ar: "🎾 **ملاعب البادل**\n\nنقدم ثلاثة موديلات:\n• **VISION** – تصميم كلاسيكي\n• **PANORAMIC** – إطلالة بانورامية\n• **FORTE** – أداء احترافي\n\nمتوفرة في أكثر من 50 دولة مع التركيب الكامل. للاستفسار: info@farisgroup.net",
      en: "🎾 **Padel Courts**\n\nWe offer three models:\n• **VISION** – Classic design\n• **PANORAMIC** – Open panoramic view\n• **FORTE** – Professional performance\n\nAvailable in 50+ countries with full installation. Inquire: info@farisgroup.net",
    },
  },
  {
    pattern: /fitness|gym|جيم|فتنس|صالة|رياضة|تمارين/i,
    reply: {
      ar: "🏋️ **الفتنس والجيم**\n\nنوفر حلول متكاملة تشمل:\n• أجهزة الجري (Treadmills)\n• أجهزة الأثقال\n• معدات الكارديو\n• تصميم وتجهيز الصالات الرياضية الكاملة\n\nعملاؤنا: أرامكو السعودية، DAMAC وغيرهم.",
      en: "🏋️ **Fitness & Gym**\n\nWe provide complete solutions including:\n• Treadmills & cardio equipment\n• Weight machines & free weights\n• Full gym design & fit-out\n\nClients include Saudi Aramco, DAMAC, and more.",
    },
  },
  {
    pattern: /bowl|bowling|بولينج|بولنج/i,
    reply: {
      ar: "🎳 **البولينج**\n\nنقدم حلولاً متكاملة لمراكز البولينج:\n• توريد المسارات والمعدات\n• أجهزة رفع الأقماع\n• أنظمة التسجيل الإلكتروني\n• التركيب والصيانة\n\nللتواصل: info@farisgroup.net",
      en: "🎳 **Bowling**\n\nComplete bowling center solutions:\n• Lane supply & equipment\n• Pin-setting machines\n• Electronic scoring systems\n• Full installation & maintenance\n\nContact: info@farisgroup.net",
    },
  },
  {
    pattern: /shoot|shooting|range|بندقية|رمي|نيران|اطلاق|إطلاق/i,
    reply: {
      ar: "🎯 **الميادين وإطلاق النار**\n\nنوفر حلولاً متكاملة تشمل:\n• أنظمة الأهداف الإلكترونية\n• أهداف متفاعلة\n• مصائد الرصاص\n• تجهيز الميادين الداخلية والخارجية\n\nللاستفسار: info@farisgroup.net",
      en: "🎯 **Shooting Ranges**\n\nComplete solutions including:\n• Electronic target systems\n• Reactive targets\n• Bullet traps\n• Indoor & outdoor range setup\n\nContact: info@farisgroup.net",
    },
  },
  {
    pattern: /bleacher|seat|stadium|tribune|مدرج|مقاعد|ملاعب|استاد/i,
    reply: {
      ar: "🏟️ **المدرجات والمقاعد**\n\nنوفر حلولاً لـ:\n• الملاعب والاستادات\n• قاعات الحفلات والفعاليات\n• الفعاليات الخارجية\n• مقاعد مريحة وعملية\n\nللتواصل: info@farisgroup.net",
      en: "🏟️ **Bleachers & Seating**\n\nSolutions for:\n• Stadiums & arenas\n• Concert halls & events\n• Outdoor venues\n• Ergonomic seating systems\n\nContact: info@farisgroup.net",
    },
  },
  {
    pattern: /construct|build|بناء|انشاء|إنشاء|تشييد|مشروع|مقاولات/i,
    reply: {
      ar: "🏗️ **خدمات الإنشاء**\n\nننفذ مشاريع متكاملة تشمل:\n• مراكز البولينج\n• ميادين الرماية\n• جدران التسلق\n• مراكز الترفيه والرياضة\n• صالات الفتنس\n• ملاعب كرة القدم\n• الملاعب المتعددة\n\nمن التصميم حتى التسليم.",
      en: "🏗️ **Construction Services**\n\nWe deliver turnkey projects including:\n• Bowling centers\n• Shooting ranges\n• Climbing walls\n• Recreation centers\n• Fitness clubs\n• Football fields\n• Multi-sport facilities\n\nFrom design to handover.",
    },
  },
  {
    pattern: /supply|توريد|تجهيز|تجهيزات/i,
    reply: {
      ar: "📦 **خدمات التوريد**\n\nفارس جروب مورد معتمد لكبار الجهات الحكومية والخاصة:\n• أرامكو السعودية\n• DAMAC\n• SABIC\n• بلدية أبوظبي\n• بلدية دبي\n• جامعة الشارقة\n• مدارس GEMS\n• وغيرهم الكثير",
      en: "📦 **Supply Services**\n\nFaris Group is a qualified vendor for leading organizations:\n• Saudi Aramco\n• DAMAC\n• SABIC\n• Abu Dhabi Municipality\n• Dubai Municipality\n• Sharjah University\n• GEMS Schools\n• And many more",
    },
  },
  {
    pattern: /mainten|صيان|صيانة|تصليح|اصلاح|إصلاح/i,
    reply: {
      ar: "🔧 **خدمات الصيانة**\n\nنقدم صيانة دورية وطارئة لـ:\n• مراكز البولينج\n• صالات الجيم\n• مسارات الجري\n• الملاعب الرياضية\n• الأرضيات الصناعية\n\nعقود سنوية أو خدمة لمرة واحدة.",
      en: "🔧 **Maintenance Services**\n\nWe maintain all types of sports facilities:\n• Bowling centers\n• Gymnasiums\n• Running tracks\n• Sports fields\n• Synthetic surfaces\n\nAvailable as one-time or annual contracts.",
    },
  },
  {
    pattern: /product|خدمات|منتجات|ماذا تقدم|وش تبيع|ايش عندك|ايش تقدم/i,
    reply: {
      ar: "🏅 **منتجات وخدمات فارس جروب:**\n\n• 🎳 البولينج\n• 🎾 ملاعب البادل\n• 🏋️ الفتنس والجيم\n• 🎯 ميادين الرماية\n• 🏟️ المدرجات والمقاعد\n• 🛝 الملاعب الترفيهية\n• 🧗 جدران التسلق\n• 🏗️ إنشاء المرافق الرياضية\n• 🔧 الصيانة والتوريد\n\nأي منها يهمك؟",
      en: "🏅 **Faris Group Products & Services:**\n\n• 🎳 Bowling\n• 🎾 Padel Courts\n• 🏋️ Fitness & Gym\n• 🎯 Shooting Ranges\n• 🏟️ Bleachers & Seating\n• 🛝 Playground Equipment\n• 🧗 Climbing Walls\n• 🏗️ Facility Construction\n• 🔧 Maintenance & Supply\n\nWhich one interests you?",
    },
  },
  {
    pattern: /contact|phone|email|تواصل|اتصال|ايميل|رقم|هاتف|جوال|واتساب/i,
    reply: {
      ar: "📞 **تواصل معنا:**\n\n🇸🇦 **السعودية:** +966 55 668 8883\n🇦🇪 **الإمارات:** +971 55 336 6241\n🇮🇹 **إيطاليا:** +39 328 819 7804\n📧 info@farisgroup.net\n\n📍 **المقر الرئيسي:**\nمصاضية 3، طريق المدينة\nجدة 21573، المملكة العربية السعودية",
      en: "📞 **Contact Us:**\n\n🇸🇦 **KSA:** +966 55 668 8883\n🇦🇪 **UAE:** +971 55 336 6241\n🇮🇹 **Italy:** +39 328 819 7804\n📧 info@farisgroup.net\n\n📍 **HQ:**\nMosadia 3, Madinah Road\nJeddah 21573, Saudi Arabia",
    },
  },
  {
    pattern: /location|address|where|office|مكان|عنوان|موقع|فروع|فرع|مكتب/i,
    reply: {
      ar: "📍 **مكاتب فارس جروب:**\n\n🇸🇦 جدة (المقر الرئيسي) — مصاضية 3، طريق المدينة\n🇸🇦 الرياض\n🇸🇦 الدمام\n🇦🇪 أبوظبي، الإمارات\n🇮🇹 ميلانو، إيطاليا",
      en: "📍 **Faris Group Offices:**\n\n🇸🇦 Jeddah (HQ) — Mosadia 3, Madinah Road\n🇸🇦 Riyadh, KSA\n🇸🇦 Dammam, KSA\n🇦🇪 Abu Dhabi, UAE\n🇮🇹 Milano, Italy",
    },
  },
  {
    pattern: /about|who|company|من انتم|من أنتم|عن الشركة|ايش فارس|ما هي فارس/i,
    reply: {
      ar: "🏆 **عن فارس جروب:**\n\nفارس جروب شركة رائدة في مجال الرياضة والترفيه في الشرق الأوسط، تأسست منذ أكثر من 20 عاماً.\n\n✅ الموزع الرسمي لكبرى العلامات الدولية\n✅ حلول رياضية متكاملة في 50+ دولة\n✅ مورد معتمد لأرامكو، DAMAC، SABIC وغيرها\n✅ مكاتب في السعودية، الإمارات وإيطاليا",
      en: "🏆 **About Faris Group:**\n\nFaris Group is the Middle East's leading sports & leisure solutions provider, with 20+ years of experience.\n\n✅ Official distributor of top international brands\n✅ Sports solutions in 50+ countries\n✅ Qualified vendor for Aramco, DAMAC, SABIC\n✅ Offices in KSA, UAE & Italy",
    },
  },
  {
    pattern: /price|cost|quote|offer|سعر|تكلفة|عرض|أسعار|اسعار|كم تكلف/i,
    reply: {
      ar: "💰 **الأسعار والعروض**\n\nتختلف الأسعار حسب المشروع والمتطلبات. للحصول على عرض سعر مخصص:\n\n📧 info@farisgroup.net\n📞 +966 55 668 8883\n\nأو تواصل معنا مباشرة عبر واتساب للرد السريع!",
      en: "💰 **Pricing & Quotes**\n\nPrices vary based on project scope and requirements. For a custom quote:\n\n📧 info@farisgroup.net\n📞 +966 55 668 8883\n\nOr reach us directly on WhatsApp for a quick response!",
    },
  },
];

const fallback: Reply = {
  ar: "شكراً لتواصلك مع فارس جروب! 🙏\n\nللمساعدة الفورية تواصل معنا:\n📞 +966 55 668 8883\n📧 info@farisgroup.net\n\nأو اكتب عن: منتجاتنا، ملاعب البادل، الفتنس، الإنشاء، الصيانة، أسعار.",
  en: "Thank you for contacting Faris Group! 🙏\n\nFor immediate assistance:\n📞 +966 55 668 8883\n📧 info@farisgroup.net\n\nOr ask about: our products, padel courts, fitness, construction, maintenance, or pricing.",
};

function getBotReply(input: string): string {
  const arabic = isArabic(input);
  for (const { pattern, reply } of kb) {
    if (pattern.test(input)) return arabic ? reply.ar : reply.en;
  }
  return arabic ? fallback.ar : fallback.en;
}

// ── Types ────────────────────────────────────────────────────────
interface Message {
  id: number;
  text: string;
  from: "bot" | "user";
}

// ── Component ────────────────────────────────────────────────────
export default function FloatingWidgets() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      from: "bot",
      text: "Hello! 👋 How can I help you?\n\nأهلاً! 👋 كيف أقدر أساعدك؟",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function sendMessage() {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = { id: Date.now(), from: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const reply = getBotReply(text);
      setMessages((prev) => [...prev, { id: Date.now() + 1, from: "bot", text: reply }]);
      setTyping(false);
    }, 800);
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* ── Chat Window ─────────────────────────────── */}
      {chatOpen && (
        <div
          className="w-80 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          style={{ height: "460px", border: "1px solid #e5e7eb" }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 flex-shrink-0"
            style={{ backgroundColor: "#1a3a6b" }}
          >
            <div>
              <p className="text-white font-bold text-sm">Faris Group</p>
              <p className="text-white/70 text-xs">Ask me something · اسألني أي شيء</p>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-white space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className="max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-line"
                  style={
                    msg.from === "user"
                      ? { backgroundColor: "#1a3a6b", color: "#fff", borderBottomRightRadius: 4 }
                      : { backgroundColor: "#f1f5f9", color: "#1e293b", borderBottomLeftRadius: 4 }
                  }
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div
                  className="px-4 py-2 rounded-2xl text-sm"
                  style={{ backgroundColor: "#f1f5f9", borderBottomLeftRadius: 4 }}
                >
                  <span className="flex gap-1 items-center h-4">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex-shrink-0 border-t border-gray-100 bg-white px-3 py-2">
            <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Send a message…"
                className="flex-1 text-sm outline-none bg-transparent text-gray-700 placeholder-gray-400"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim()}
                className="text-sm font-semibold transition-colors disabled:opacity-30"
                style={{ color: "#1a3a6b" }}
              >
                <Send size={16} />
              </button>
            </div>
            <p className="text-center text-gray-400 text-[10px] mt-1.5">
              Powered by <span className="font-semibold">Faris Group AI</span>
            </p>
          </div>
        </div>
      )}

      {/* ── Buttons row ─────────────────────────────── */}
      <div className="flex flex-col items-end gap-3">
        {/* WhatsApp */}
        <a
          href="https://api.whatsapp.com/send/?phone=966539353596&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
          style={{ backgroundColor: "#25d366" }}
          title="WhatsApp"
        >
          {/* WhatsApp SVG */}
          <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
            <path d="M16 3C9 3 3 9 3 16c0 2.3.6 4.5 1.8 6.4L3 29l6.8-1.8C11.6 28.4 13.8 29 16 29c7 0 13-6 13-13S23 3 16 3zm0 24c-2 0-4-.5-5.7-1.5l-.4-.2-4 1 1-4-.2-.4C5.5 20 5 18 5 16 5 10.5 10 5 16 5s11 5 11 11-5 11-11 11zm6-8.2c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0c-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.5s-1.2 1.2-1.2 2.9 1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5.2 2.2.9 3 1 4.1.8.7-.1 2-.8 2.3-1.6s.3-1.5.2-1.6-.3-.3-.7-.5z" />
          </svg>
        </a>

        {/* Chatbot toggle */}
        <button
          onClick={() => setChatOpen((o) => !o)}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
          style={{ backgroundColor: chatOpen ? "#0a1628" : "#1a3a6b" }}
          title="Chat with us"
        >
          {chatOpen ? (
            <X size={24} color="white" />
          ) : (
            <MessageCircle size={24} color="white" />
          )}
        </button>
      </div>
    </div>
  );
}
