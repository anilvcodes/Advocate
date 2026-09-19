import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronDown,
  FileText,
  Gavel,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  Sparkles,
  UserRound,
  Users,
  X,
} from "lucide-react";

/* =========================================================
   SHIV SHANKAR GUPTA - ADVOCATE
   EDIT ONLY THIS OBJECT WITH REAL DETAILS
========================================================= */

const LAWYER = {
  name: "Shiv Shankar Gupta",
  designation: "Advocate",
  city: "Gonda",
  state: "Uttar Pradesh",

  // Replace these with real details
  phone: "+91 XXXXXXXXXX",
  whatsapp: "91XXXXXXXXXX",
  email: "hello@example.com",

  address: "Gonda, Uttar Pradesh",

  // Keep blank until verified
  experience: "",
  matters: "",
  clients: "",

  // Replace with Shiv Shankar Gupta's real professional photo
  image:
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1000&q=90",

  consultationImage:
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=90",
};


/* =========================================================
   NAVIGATION
========================================================= */

const NAV_ITEMS = [
  ["About", "about"],
  ["Practice Areas", "practice"],
  ["Approach", "approach"],
  ["FAQ", "faq"],
  ["Contact", "contact"],
];


/* =========================================================
   PRACTICE AREAS
========================================================= */

const PRACTICE_AREAS = [
  {
    icon: Gavel,
    number: "01",
    hi: "आपराधिक कानून",
    en: "Criminal Law",
    text:
      "FIR, bail, criminal defence और अन्य आपराधिक मामलों से संबंधित consultation और legal guidance.",
  },
  {
    icon: Building2,
    number: "02",
    hi: "संपत्ति एवं भूमि विवाद",
    en: "Property & Land Matters",
    text:
      "जमीन, कब्जा, ownership, registry और property disputes से जुड़े कानूनी मामलों पर मार्गदर्शन.",
  },
  {
    icon: Users,
    number: "03",
    hi: "पारिवारिक एवं वैवाहिक मामले",
    en: "Family & Matrimonial Matters",
    text:
      "परिवार, वैवाहिक विवाद, maintenance और संबंधित legal matters पर consultation.",
  },
  {
    icon: Scale,
    number: "04",
    hi: "सिविल मामले",
    en: "Civil Litigation",
    text:
      "Civil disputes, recovery, injunction और अन्य civil matters के लिए legal consultation.",
  },
  {
    icon: FileText,
    number: "05",
    hi: "कानूनी नोटिस एवं दस्तावेज़",
    en: "Legal Notices & Documentation",
    text:
      "Legal notices, replies, agreements और अन्य legal documentation से संबंधित assistance.",
  },
  {
    icon: ShieldCheck,
    number: "06",
    hi: "उपभोक्ता मामले",
    en: "Consumer Matters",
    text:
      "Consumer disputes और consumer rights से जुड़े मामलों पर legal guidance.",
  },
];


/* =========================================================
   APPROACH
========================================================= */

const WHY_US = [
  {
    icon: MessageCircle,
    hi: "स्पष्ट संवाद",
    en: "Clear Communication",
    text:
      "Legal matter को सरल और समझने योग्य तरीके से discuss करने पर focus.",
  },
  {
    icon: UserRound,
    hi: "व्यक्तिगत ध्यान",
    en: "Personal Attention",
    text:
      "हर matter की परिस्थितियों और उपलब्ध जानकारी के आधार पर discussion.",
  },
  {
    icon: ShieldCheck,
    hi: "गोपनीयता",
    en: "Confidentiality",
    text:
      "Consultation के दौरान साझा की गई व्यक्तिगत और legal information की privacy को महत्व.",
  },
  {
    icon: MapPin,
    hi: "स्थानीय समझ",
    en: "Local Understanding",
    text:
      "Gonda और आसपास के क्षेत्र में legal matters की practical requirements पर ध्यान.",
  },
];


/* =========================================================
   FAQ
========================================================= */

const FAQS = [
  {
    hi: "कानूनी consultation कैसे book करें?",
    en: "How can I book a legal consultation?",
    answer:
      "आप phone, WhatsApp या website के consultation form के माध्यम से संपर्क कर सकते हैं।",
  },
  {
    hi: "क्या consultation online हो सकती है?",
    en: "Can the consultation be online?",
    answer:
      "आवश्यकता और availability के अनुसार online consultation का विकल्प discuss किया जा सकता है।",
  },
  {
    hi: "कौन से documents लेकर आएँ?",
    en: "What documents should I bring?",
    answer:
      "अपने matter से संबंधित available documents, notices, agreements, FIR या अन्य relevant papers साथ रखें।",
  },
  {
    hi: "क्या website से सीधे case file हो जाएगा?",
    en: "Can I directly file a case through the website?",
    answer:
      "Website मुख्य रूप से consultation request के लिए है। Case filing और आगे की legal action matter की details discuss करने के बाद तय की जाती है।",
  },
];


/* =========================================================
   BUTTON
========================================================= */

function GoldButton({
  children,
  href,
  onClick,
  secondary = false,
  className = "",
}) {
  const classes = `
    inline-flex items-center justify-center gap-2
    rounded-full px-6 py-3.5
    text-sm font-semibold
    transition-all duration-300
    ${
      secondary
        ? "border border-black/15 bg-white/70 text-neutral-900 hover:bg-white"
        : "bg-[#c6a568] text-[#17130c] hover:bg-[#d8bc7d] hover:-translate-y-0.5 hover:shadow-xl"
    }
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}


/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  hi,
  en,
  text,
  light = false,
  centered = false,
}) {
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-3xl`}>
      <div
        className={`mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] ${
          centered ? "justify-center" : ""
        } ${light ? "text-[#cdb47f]" : "text-[#9a7a3e]"}`}
      >
        {!centered && <span className="h-px w-9 bg-current" />}
        {eyebrow}
        {centered && <span className="h-px w-9 bg-current" />}
      </div>

      <h2
        className={`font-display text-4xl leading-tight sm:text-5xl ${
          light ? "text-white" : "text-neutral-950"
        }`}
      >
        {hi}
      </h2>

      <p
        className={`mt-2 font-display text-xl ${
          light ? "text-white/70" : "text-neutral-500"
        }`}
      >
        {en}
      </p>

      {text && (
        <p
          className={`mt-5 max-w-2xl text-base leading-8 ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/60" : "text-neutral-600"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}


/* =========================================================
   APP
========================================================= */

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const title = `${LAWYER.name} | Advocate in ${LAWYER.city}, ${LAWYER.state}`;

    const description =
      `${LAWYER.name}, Advocate in Gonda, Uttar Pradesh. ` +
      `Legal consultation and professional guidance for civil, criminal, ` +
      `property, family and other legal matters.`;

    document.title = title;

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);

      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }

      el.setAttribute("content", content);
    };

    const setProperty = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`);

      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }

      el.setAttribute("content", content);
    };

    setMeta("description", description);

    setMeta(
      "keywords",
      [
        "Shiv Shankar Gupta Advocate",
        "Advocate in Gonda",
        "Lawyer in Gonda",
        "Gonda Advocate",
        "Legal consultation Gonda",
        "Civil lawyer Gonda",
        "Criminal lawyer Gonda",
        "Property lawyer Gonda",
      ].join(", ")
    );

    setProperty("og:title", title);
    setProperty("og:description", description);
    setProperty("og:type", "website");
    setProperty("og:url", window.location.href);
    setProperty("og:image", LAWYER.image);

    setMeta("twitter:card", "summary_large_image");

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = window.location.href;

    const schema = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: LAWYER.name,
      telephone: LAWYER.phone,
      email: LAWYER.email,
      url: window.location.href,
      areaServed: {
        "@type": "City",
        name: LAWYER.city,
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: LAWYER.city,
        addressRegion: LAWYER.state,
        addressCountry: "IN",
      },
      founder: {
        "@type": "Person",
        name: LAWYER.name,
        jobTitle: LAWYER.designation,
      },
    };

    let script = document.getElementById("lawyer-schema");

    if (!script) {
      script = document.createElement("script");
      script.id = "lawyer-schema";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f2eb] text-neutral-900">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="mx-auto mt-3 max-w-7xl px-4">
          <div className="rounded-2xl border border-white/10 bg-[#111111]/95 px-4 py-3 shadow-2xl backdrop-blur-xl sm:px-6">

            <div className="flex items-center justify-between">

              <a href="#home" className="flex items-center gap-3">

                <div className="grid h-10 w-10 place-items-center rounded-xl border border-[#c6a568]/40 bg-[#c6a568]/10 text-[#c6a568]">
                  <Scale size={20} />
                </div>

                <div className="leading-tight">
                  <div className="font-display text-base font-semibold text-white">
                    Shiv Shankar Gupta
                  </div>

                  <div className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                    Advocate • Gonda
                  </div>
                </div>

              </a>


              <nav className="hidden items-center gap-7 lg:flex">
                {NAV_ITEMS.map(([label, id]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="text-sm text-white/60 transition hover:text-[#d5b775]"
                  >
                    {label}
                  </a>
                ))}
              </nav>


              <div className="hidden lg:block">
                <GoldButton href="#contact">
                  Consultation
                  <ArrowRight size={16} />
                </GoldButton>
              </div>


              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white lg:hidden"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

            </div>


            {menuOpen && (
              <nav className="border-t border-white/10 pt-4 lg:hidden">

                <div className="flex flex-col gap-1">
                  {NAV_ITEMS.map(([label, id]) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={closeMenu}
                      className="rounded-xl px-3 py-3 text-sm text-white/70 hover:bg-white/5 hover:text-white"
                    >
                      {label}
                    </a>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-3 flex items-center justify-center rounded-xl bg-[#c6a568] px-4 py-3 font-semibold text-[#17130c]"
                >
                  Book Consultation
                </a>

              </nav>
            )}

          </div>
        </div>
      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#101010] pt-32 text-white"
      >

        <div className="absolute right-[-12rem] top-20 h-[30rem] w-[30rem] rounded-full bg-[#c6a568]/10 blur-3xl" />

        <div className="absolute bottom-[-12rem] left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#c6a568]/5 blur-3xl" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>


        <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-16 px-5 pb-20 sm:px-8 lg:grid-cols-[1.05fr_.95fr]">

          <div className="relative z-10">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#c6a568]/30 bg-[#c6a568]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#d6bd8b]">
              <Sparkles size={14} />
              Shiv Shankar Gupta • Advocate
            </div>


            <h1 className="max-w-4xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-[5.3rem]">

              कानूनी समझ के साथ
              <span className="mt-2 block text-[#c9aa6d]">
                आपके अधिकारों की बात।
              </span>

            </h1>


            <p className="mt-5 font-display text-xl text-white/60 sm:text-2xl">
              Professional Legal Guidance in Gonda
            </p>


            <p className="mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              अपने legal matter को समझें, relevant facts पर चर्चा करें और
              आगे के available legal options के बारे में professional
              consultation प्राप्त करें।
            </p>


            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <GoldButton href="#contact">
                Consultation Book करें
                <ArrowRight size={17} />
              </GoldButton>

              <a
                href={`https://wa.me/${LAWYER.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#c6a568]/40 hover:bg-white/[0.08]"
              >
                <MessageCircle size={17} />
                WhatsApp पर बात करें
              </a>

            </div>


            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-xs text-white/40">

              <span className="flex items-center gap-2">
                <BadgeCheck size={15} className="text-[#c6a568]" />
                Confidential Consultation
              </span>

              <span className="flex items-center gap-2">
                <BadgeCheck size={15} className="text-[#c6a568]" />
                Clear Communication
              </span>

              <span className="flex items-center gap-2">
                <BadgeCheck size={15} className="text-[#c6a568]" />
                Gonda
              </span>

            </div>

          </div>


          {/* HERO PROFILE */}

          <div className="relative mx-auto w-full max-w-[500px] lg:ml-auto">

            <div className="absolute -inset-4 rounded-[2.5rem] border border-[#c6a568]/20" />

            <div className="absolute -right-5 top-10 hidden h-24 w-24 rounded-full border border-[#c6a568]/20 lg:block" />


            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl">

              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">

                <img
                  src={LAWYER.image}
                  alt={`${LAWYER.name}, Advocate in Gonda`}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />


                <div className="absolute bottom-0 left-0 right-0 p-7">

                  <div className="mb-4 h-px w-16 bg-[#c6a568]" />

                  <p className="font-display text-3xl">
                    {LAWYER.name}
                  </p>

                  <p className="mt-1 text-sm text-white/55">
                    {LAWYER.designation} • {LAWYER.city}, {LAWYER.state}
                  </p>

                </div>

              </div>

            </div>


            <div className="absolute -bottom-6 -left-5 rounded-2xl border border-white/10 bg-[#202020]/95 p-4 shadow-2xl backdrop-blur-xl sm:-left-8">

              <div className="flex items-center gap-3">

                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#c6a568]/10 text-[#c6a568]">
                  <Scale size={21} />
                </div>

                <div>
                  <div className="font-display text-lg text-white">
                    Legal Consultation
                  </div>

                  <div className="text-xs text-white/40">
                    Professional Guidance
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          TRUST STRIP
      ===================================================== */}

      <section className="border-b border-black/10 bg-white">

        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-black/10 md:grid-cols-4">

          {[
            ["01", "Professional", "Legal Guidance"],
            ["02", "Client Focused", "Matter Discussion"],
            ["03", "Confidential", "Consultation"],
            ["04", "Gonda", "Uttar Pradesh"],
          ].map(([number, title, subtitle]) => (

            <div
              key={number}
              className="px-4 py-7 text-center sm:px-8"
            >

              <div className="font-display text-2xl text-[#9b7b42] sm:text-3xl">
                {number}
              </div>

              <div className="mt-2 text-xs font-semibold text-neutral-800">
                {title}
              </div>

              <div className="mt-1 text-[9px] uppercase tracking-[0.15em] text-neutral-400">
                {subtitle}
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="bg-[#f5f2eb] py-24 sm:py-32"
      >

        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">

          <div className="relative">

            <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-[#c6a568]/40" />

            <div className="relative overflow-hidden rounded-[2rem] shadow-xl">

              <img
                src={LAWYER.image}
                alt={LAWYER.name}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />

            </div>


            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#171717] px-5 py-4 text-white shadow-xl">

              <div className="flex items-center gap-3">

                <Scale
                  className="text-[#c6a568]"
                  size={23}
                />

                <div>

                  <p className="font-display">
                    Justice & Integrity
                  </p>

                  <p className="text-xs text-white/40">
                    न्याय और विश्वसनीयता
                  </p>

                </div>

              </div>

            </div>

          </div>


          <div>

            <SectionHeading
              eyebrow="About the Advocate"
              hi="शिव शंकर गुप्ता"
              en="Advocate in Gonda"
              text="कानूनी विषयों को स्पष्ट रूप से समझना और सही जानकारी के आधार पर आगे की प्रक्रिया पर चर्चा करना consultation का महत्वपूर्ण हिस्सा है।"
            />


            <p className="mt-8 text-base leading-8 text-neutral-600">
              प्रत्येक legal matter अपनी परिस्थितियों के अनुसार अलग होता है।
              इसलिए matter से जुड़े facts, documents और उपलब्ध legal options
              को समझना एक meaningful consultation का महत्वपूर्ण हिस्सा है।
            </p>


            <p className="mt-4 text-sm leading-7 text-neutral-500">
              The focus is on clear communication, understanding the matter,
              discussing relevant information and explaining available legal
              options in a professional manner.
            </p>


            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              {[
                "Matter-focused consultation",
                "Clear communication",
                "Confidential discussions",
                "Practical legal guidance",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/70 p-4 transition hover:-translate-y-0.5 hover:bg-white"
                >

                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#c6a568]/15 text-[#9b7b42]">
                    <Check size={16} />
                  </div>

                  <span className="text-sm font-medium">
                    {item}
                  </span>

                </div>

              ))}

            </div>


            <div className="mt-9">

              <GoldButton href="#contact">
                Consultation Request करें
                <ArrowRight size={16} />
              </GoldButton>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PRACTICE AREAS
      ===================================================== */}

      <section
        id="practice"
        className="bg-[#151515] py-24 text-white sm:py-32"
      >

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <SectionHeading
            light
            eyebrow="Practice Areas"
            hi="कानूनी सेवाएँ"
            en="Areas of Legal Practice"
            text="विभिन्न legal matters के लिए consultation और professional legal guidance."
          />


          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {PRACTICE_AREAS.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.number}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7 transition duration-500 hover:-translate-y-2 hover:border-[#c6a568]/40 hover:bg-white/[0.06]"
                >

                  <div className="absolute right-5 top-3 font-display text-6xl text-white/[0.035]">
                    {item.number}
                  </div>


                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#c6a568]/10 text-[#c6a568] transition group-hover:bg-[#c6a568] group-hover:text-[#17130c]">
                    <Icon size={22} />
                  </div>


                  <h3 className="mt-7 font-display text-2xl">
                    {item.hi}
                  </h3>


                  <p className="mt-1 text-sm font-medium text-[#c6a568]">
                    {item.en}
                  </p>


                  <p className="mt-5 text-sm leading-7 text-white/45">
                    {item.text}
                  </p>


                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/45 transition group-hover:text-[#c6a568]"
                  >
                    Discuss Matter
                    <ArrowRight size={14} />
                  </a>

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS / APPROACH
      ===================================================== */}

      <section
        id="approach"
        className="bg-white py-24 sm:py-32"
      >

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <SectionHeading
            eyebrow="Our Approach"
            hi="सही शुरुआत, स्पष्ट अगला कदम"
            en="A Clear Process for Your Legal Matter"
            text="Consultation को simple, professional और understandable रखने के लिए एक straightforward process."
          />


          <div className="relative mt-16 grid gap-10 md:grid-cols-4">

            <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-[#d8c7a5] md:block" />


            {[
              [
                "01",
                "पहले संपर्क करें",
                "Contact",
                "Phone, WhatsApp या consultation form से संपर्क करें।",
                Phone,
              ],
              [
                "02",
                "मामला समझें",
                "Discuss",
                "Matter की relevant details और documents discuss करें।",
                MessageCircle,
              ],
              [
                "03",
                "विकल्प समझें",
                "Understand",
                "Available legal options और next steps पर चर्चा करें।",
                Scale,
              ],
              [
                "04",
                "अगला कदम",
                "Proceed",
                "Matter के अनुसार आगे की legal action तय की जाती है।",
                Check,
              ],
            ].map(([number, hi, en, text, Icon]) => (

              <div
                key={number}
                className="relative text-center"
              >

                <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-full border-4 border-white bg-[#171717] text-[#c6a568] shadow-lg">
                  <Icon size={21} />
                </div>


                <div className="mt-6 text-xs font-bold tracking-widest text-[#9b7b42]">
                  {number}
                </div>


                <h3 className="mt-2 font-display text-xl">
                  {hi}
                </h3>


                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  {en}
                </p>


                <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-neutral-500">
                  {text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY
      ===================================================== */}

      <section className="bg-[#eee9df] py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="grid gap-14 lg:grid-cols-[.75fr_1.25fr]">

            <SectionHeading
              eyebrow="Professional Approach"
              hi="कानूनी सहायता में क्या महत्वपूर्ण है?"
              en="What Matters in Legal Guidance"
              text="हर legal matter अलग होता है। इसलिए clear communication, confidentiality और matter-specific discussion महत्वपूर्ण हैं।"
            />


            <div className="grid gap-4 sm:grid-cols-2">

              {WHY_US.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.en}
                    className="rounded-3xl border border-black/10 bg-white/60 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                  >

                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#171717] text-[#c6a568]">
                      <Icon size={21} />
                    </div>


                    <h3 className="mt-6 font-display text-xl">
                      {item.hi}
                    </h3>


                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-[#9b7b42]">
                      {item.en}
                    </p>


                    <p className="mt-4 text-sm leading-7 text-neutral-500">
                      {item.text}
                    </p>

                  </div>

                );

              })}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONSULTATION CTA
      ===================================================== */}

      <section className="bg-[#171717] py-10">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="relative overflow-hidden rounded-[2rem]">

            <img
              src={LAWYER.consultationImage}
              alt="Legal consultation"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-25"
            />

            <div className="absolute inset-0 bg-[#171717]/85" />


            <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">

              <div>

                <div className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#c6a568]">
                  Consultation
                </div>


                <h2 className="max-w-3xl font-display text-4xl text-white sm:text-5xl">
                  क्या आपको कानूनी सलाह की आवश्यकता है?
                </h2>


                <p className="mt-3 font-display text-lg text-white/50">
                  Need Legal Guidance?
                </p>


                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50">
                  अपने legal matter की basic details share करें और available
                  legal options पर discussion के लिए संपर्क करें।
                </p>

              </div>


              <GoldButton href="#contact">
                Consultation Request
                <ArrowRight size={17} />
              </GoldButton>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section
        id="faq"
        className="bg-[#f5f2eb] py-24 sm:py-32"
      >

        <div className="mx-auto max-w-4xl px-5 sm:px-8">

          <SectionHeading
            centered
            eyebrow="FAQ"
            hi="अक्सर पूछे जाने वाले सवाल"
            en="Frequently Asked Questions"
          />


          <div className="mt-12 space-y-3">

            {FAQS.map((faq, index) => {

              const isOpen = openFaq === index;

              return (

                <div
                  key={faq.en}
                  className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"
                >

                  <button
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7"
                  >

                    <div>

                      <div className="font-medium">
                        {faq.hi}
                      </div>

                      <div className="mt-1 text-xs text-neutral-400">
                        {faq.en}
                      </div>

                    </div>


                    <ChevronDown
                      size={19}
                      className={`shrink-0 transition-transform ${
                        isOpen
                          ? "rotate-180 text-[#9b7b42]"
                          : ""
                      }`}
                    />

                  </button>


                  {isOpen && (

                    <div className="border-t border-black/5 px-5 pb-6 pt-5 text-sm leading-7 text-neutral-500 sm:px-7">
                      {faq.answer}
                    </div>

                  )}

                </div>

              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="bg-[#171717] py-24 text-white sm:py-32"
      >

        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr]">

          <div>

            <SectionHeading
              light
              eyebrow="Contact"
              hi="अपना legal matter discuss करें"
              en="Let's Discuss Your Legal Matter"
              text="अपनी basic details share करें। Consultation के लिए phone या WhatsApp से भी संपर्क कर सकते हैं।"
            />


            <div className="mt-10 space-y-4">

              <a
                href={`tel:${LAWYER.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-[#c6a568]/30 hover:bg-white/[0.07]"
              >

                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#c6a568]/10 text-[#c6a568]">
                  <Phone size={19} />
                </div>

                <div>
                  <div className="text-xs text-white/40">
                    Phone / फोन
                  </div>

                  <div className="mt-1 text-sm">
                    {LAWYER.phone}
                  </div>
                </div>

              </a>


              <a
                href={`https://wa.me/${LAWYER.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-[#c6a568]/30 hover:bg-white/[0.07]"
              >

                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#c6a568]/10 text-[#c6a568]">
                  <MessageCircle size={19} />
                </div>

                <div>
                  <div className="text-xs text-white/40">
                    WhatsApp
                  </div>

                  <div className="mt-1 text-sm">
                    Chat on WhatsApp
                  </div>
                </div>

              </a>


              <a
                href={`mailto:${LAWYER.email}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-[#c6a568]/30 hover:bg-white/[0.07]"
              >

                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#c6a568]/10 text-[#c6a568]">
                  <Mail size={19} />
                </div>

                <div>

                  <div className="text-xs text-white/40">
                    Email / ईमेल
                  </div>

                  <div className="mt-1 text-sm">
                    {LAWYER.email}
                  </div>

                </div>

              </a>


              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">

                <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#c6a568]/10 text-[#c6a568]">
                  <MapPin size={19} />
                </div>

                <div>

                  <div className="text-xs text-white/40">
                    Office / कार्यालय
                  </div>

                  <div className="mt-1 text-sm leading-6">
                    {LAWYER.address}
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* FORM */}

          <div className="rounded-[2rem] bg-white p-6 text-neutral-900 shadow-2xl sm:p-8">

            {submitted ? (

              <div className="flex min-h-[450px] flex-col items-center justify-center text-center">

                <div className="grid h-16 w-16 place-items-center rounded-full bg-[#c6a568]/20 text-[#9b7b42]">
                  <Check size={28} />
                </div>

                <h3 className="mt-6 font-display text-3xl">
                  Request Received
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-neutral-500">
                  आपकी consultation request successfully submit हो गई है।
                  Production website पर इसे WhatsApp, email या backend से
                  connect किया जा सकता है।
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 text-sm font-semibold text-[#9b7b42]"
                >
                  Send Another Request
                </button>

              </div>

            ) : (

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >

                <div className="mb-7">

                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b7b42]">
                    Consultation Form
                  </div>

                  <h3 className="mt-2 font-display text-3xl">
                    Consultation Request
                  </h3>

                  <p className="mt-2 text-sm text-neutral-500">
                    कुछ basic details share करें।
                  </p>

                </div>


                <div className="grid gap-5 sm:grid-cols-2">

                  <label>

                    <span className="mb-2 block text-xs font-semibold text-neutral-500">
                      आपका नाम / Your Name
                    </span>

                    <input
                      required
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-black/10 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition focus:border-[#c6a568] focus:ring-2 focus:ring-[#c6a568]/10"
                    />

                  </label>


                  <label>

                    <span className="mb-2 block text-xs font-semibold text-neutral-500">
                      Phone / मोबाइल
                    </span>

                    <input
                      required
                      type="tel"
                      placeholder="+91"
                      className="w-full rounded-xl border border-black/10 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition focus:border-[#c6a568] focus:ring-2 focus:ring-[#c6a568]/10"
                    />

                  </label>

                </div>


                <label className="mt-5 block">

                  <span className="mb-2 block text-xs font-semibold text-neutral-500">
                    Matter Type / मामले का प्रकार
                  </span>

                  <select className="w-full rounded-xl border border-black/10 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none focus:border-[#c6a568]">

                    <option>
                      Criminal Law / आपराधिक कानून
                    </option>

                    <option>
                      Property / संपत्ति
                    </option>

                    <option>
                      Family / पारिवारिक
                    </option>

                    <option>
                      Civil / सिविल
                    </option>

                    <option>
                      Legal Notice / कानूनी नोटिस
                    </option>

                    <option>
                      Consumer / उपभोक्ता
                    </option>

                    <option>
                      Other / अन्य
                    </option>

                  </select>

                </label>


                <label className="mt-5 block">

                  <span className="mb-2 block text-xs font-semibold text-neutral-500">
                    Brief Details / संक्षिप्त विवरण
                  </span>

                  <textarea
                    required
                    rows="5"
                    placeholder="Briefly explain your legal matter..."
                    className="w-full resize-none rounded-xl border border-black/10 bg-[#faf9f6] px-4 py-3.5 text-sm outline-none transition focus:border-[#c6a568] focus:ring-2 focus:ring-[#c6a568]/10"
                  />

                </label>


                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#171717] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#292929] hover:shadow-lg"
                >
                  Consultation Request भेजें
                  <ArrowRight size={17} />
                </button>


                <p className="mt-4 text-center text-[11px] leading-5 text-neutral-400">
                  यह demo form है। Production website में इसे WhatsApp,
                  email या backend API से connect करें।
                </p>

              </form>

            )}

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="bg-[#0b0b0b] py-12 text-white">

        <div className="mx-auto max-w-7xl px-5 sm:px-8">

          <div className="grid gap-10 md:grid-cols-[1.3fr_.7fr_.7fr]">

            <div>

              <div className="flex items-center gap-3">

                <div className="grid h-11 w-11 place-items-center rounded-xl border border-[#c6a568]/30 text-[#c6a568]">
                  <Scale size={20} />
                </div>

                <div>

                  <div className="font-display text-lg">
                    {LAWYER.name}
                  </div>

                  <div className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                    Advocate • {LAWYER.city}
                  </div>

                </div>

              </div>


              <p className="mt-5 max-w-md text-sm leading-7 text-white/40">
                Professional legal consultation और matter-specific legal
                guidance के लिए संपर्क करें।
              </p>

            </div>


            <div>

              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c6a568]">
                Navigation
              </h4>

              <div className="mt-5 space-y-3 text-sm text-white/45">

                {NAV_ITEMS.map(([label, id]) => (

                  <a
                    key={id}
                    href={`#${id}`}
                    className="block transition hover:text-white"
                  >
                    {label}
                  </a>

                ))}

              </div>

            </div>


            <div>

              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#c6a568]">
                Contact
              </h4>

              <div className="mt-5 space-y-3 text-sm text-white/45">

                <a
                  href={`tel:${LAWYER.phone.replace(/\s/g, "")}`}
                  className="block hover:text-white"
                >
                  {LAWYER.phone}
                </a>

                <a
                  href={`mailto:${LAWYER.email}`}
                  className="block break-all hover:text-white"
                >
                  {LAWYER.email}
                </a>

                <div>
                  {LAWYER.city}, {LAWYER.state}
                </div>

              </div>

            </div>

          </div>


          <div className="my-10 h-px bg-white/10" />


          <div className="flex flex-col gap-5 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()} {LAWYER.name}. All rights reserved.
            </p>

            <p>
              Professional Legal Consultation • Gonda
            </p>

          </div>


          <div className="mt-6 rounded-xl border border-white/5 bg-white/[0.025] p-4 text-[11px] leading-6 text-white/25">

            <strong className="text-white/40">
              अस्वीकरण / Disclaimer:
            </strong>{" "}

            इस website पर दी गई जानकारी केवल सामान्य informational purpose
            के लिए है और इसे legal advice के रूप में नहीं माना जाना चाहिए।
            किसी specific matter के लिए qualified legal professional से
            consultation लें।

          </div>

        </div>

      </footer>


      {/* =====================================================
          FLOATING WHATSAPP
      ===================================================== */}

      <a
        href={`https://wa.me/${LAWYER.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#c6a568] px-4 py-3 text-sm font-bold text-[#171717] shadow-2xl transition hover:-translate-y-1 hover:bg-[#d6b97b]"
      >

        <MessageCircle size={19} />

        <span className="hidden sm:inline">
          WhatsApp
        </span>

      </a>

    </div>
  );
}