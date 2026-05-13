const MOBILE_QUERY = "(max-width: 820px)";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const prefersLowMotionDevice = window.matchMedia(`(hover: none), (pointer: coarse), ${MOBILE_QUERY}`).matches;
const ENHANCEMENT_SCRIPTS = [
  "https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js",
  "https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js",
  "https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/bundled/lenis.min.js",
];
const sectionMoods = [
  {
    selector: ".hero",
    x: "18%",
    y: "17%",
    a: "rgba(255, 180, 94, 0.2)",
    b: "rgba(57, 213, 192, 0.06)",
    light: { a: "rgba(184, 112, 38, 0.13)", b: "rgba(48, 137, 124, 0.055)" },
  },
  {
    selector: ".reel",
    x: "82%",
    y: "24%",
    a: "rgba(255, 224, 163, 0.15)",
    b: "rgba(255, 180, 94, 0.09)",
    light: { a: "rgba(255, 247, 232, 0.5)", b: "rgba(181, 112, 42, 0.075)" },
  },
  {
    selector: ".manifesto",
    x: "24%",
    y: "48%",
    a: "rgba(57, 213, 192, 0.1)",
    b: "rgba(255, 224, 163, 0.09)",
    light: { a: "rgba(43, 137, 124, 0.075)", b: "rgba(255, 247, 232, 0.48)" },
  },
  {
    selector: ".signature",
    x: "72%",
    y: "42%",
    a: "rgba(255, 180, 94, 0.17)",
    b: "rgba(255, 224, 163, 0.08)",
    light: { a: "rgba(181, 112, 42, 0.105)", b: "rgba(255, 255, 255, 0.42)" },
  },
  {
    selector: ".work",
    x: "18%",
    y: "58%",
    a: "rgba(255, 180, 94, 0.22)",
    b: "rgba(57, 213, 192, 0.07)",
    light: { a: "rgba(174, 96, 28, 0.13)", b: "rgba(43, 137, 124, 0.055)" },
  },
  {
    selector: ".capabilities",
    x: "80%",
    y: "56%",
    a: "rgba(255, 224, 163, 0.14)",
    b: "rgba(57, 213, 192, 0.1)",
    light: { a: "rgba(255, 255, 255, 0.45)", b: "rgba(43, 137, 124, 0.08)" },
  },
  {
    selector: ".process",
    x: "28%",
    y: "68%",
    a: "rgba(57, 213, 192, 0.11)",
    b: "rgba(255, 180, 94, 0.08)",
    light: { a: "rgba(43, 137, 124, 0.075)", b: "rgba(181, 112, 42, 0.07)" },
  },
  {
    selector: ".about",
    x: "74%",
    y: "70%",
    a: "rgba(255, 224, 163, 0.16)",
    b: "rgba(255, 180, 94, 0.08)",
    light: { a: "rgba(255, 255, 255, 0.5)", b: "rgba(181, 112, 42, 0.07)" },
  },
  {
    selector: ".contact",
    x: "50%",
    y: "82%",
    a: "rgba(255, 180, 94, 0.2)",
    b: "rgba(255, 224, 163, 0.09)",
    light: { a: "rgba(174, 96, 28, 0.12)", b: "rgba(255, 255, 255, 0.48)" },
  },
];
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const languages = {
  fa: {
    lang: "fa",
    dir: "rtl",
    title: "سیامک دهبکری | مدیر برند و کارگردان تبلیغاتی",
    meta:
      "وب‌سایت سه‌زبانه سیامک دهبکری؛ مدیر برند و کارگردان تبلیغاتی در پیوند استراتژی، تصویر و ادراک برند.",
    content: {
      brand: { name: "سیامک دهبکری" },
      nav: { work: "کارها", method: "روش", identity: "نگاه", contact: "تماس" },
      hero: {
        eyebrow: "مدیر برند / کارگردان تبلیغاتی",
        title: ["سیامک", "دهبکری", "ادراک برند را", "دقیق می‌سازد."],
        body:
          "کار از جایی شروع می‌شود که ظاهر دیگر کافی نیست: جایگاه، لحن، تصویر و فیلم باید یک حس واحد بسازند؛ حسی که مخاطب قبل از توضیح بفهمد.",
        primaryCta: "دیدن کارها",
        secondaryCta: "نگاه کاری",
        caption: "سیامک / برند / فیلم / ادراک",
        metricOneLabel: "برند",
        metricOne: "جایگاه روشن",
        metricTwoLabel: "فیلم",
        metricTwo: "حس کنترل‌شده",
        metricThreeLabel: "اثر",
        metricThree: "اثر ماندگار",
      },
      reel: {
        items: [
          { index: "01", title: "منطق برند", body: "جایگاه، پیام و لحن؛ نه به‌عنوان فایل راهنما، بلکه به‌عنوان ابزار تصمیم." },
          { index: "02", title: "کارگردانی تبلیغاتی", body: "فیلمی که فشار فروش ندارد، اما دلیل انتخاب را دقیق‌تر نشان می‌دهد." },
          { index: "03", title: "طراحی ادراک", body: "هم‌راستا کردن تصویر، کلمه و تجربه تا برند یک حس قابل تشخیص داشته باشد." },
        ],
      },
      manifesto: {
        kicker: "01 / اصل کار",
        title: "برند زمانی جدی می‌شود که همه‌چیز یک حس واحد بسازد.",
        body:
          "لوگو، رنگ، کلمه و فیلم فقط زمانی اثر دارند که به یک تصمیم واحد خدمت کنند. کار سیامک ساختن همین انسجام است: دقیق، کم‌اضافه، قابل تشخیص.",
      },
      signature: {
        kicker: "02 / امضا",
        title: "استراتژی با چشم سینما. فیلم با منطق برند.",
        items: [
          {
            label: "برند",
            title: "منطق برند",
            body: "جایگاه، پیام و لحن را به ابزار تصمیم‌گیری تبدیل می‌کند.",
          },
          {
            label: "فیلم",
            title: "کارگردانی تبلیغاتی",
            body: "ایده، سناریو، قاب و ریتم را در خدمت حس برند قرار می‌دهد.",
          },
          {
            label: "ادراک",
            title: "طراحی ادراک",
            body: "تصویر، کلمه و تجربه را به یک حس قابل تشخیص وصل می‌کند.",
          },
        ],
      },
      work: {
        kicker: "03 / پروژه‌ها",
        title: "کارها باید دقیق دیده شوند؛ نه زیاد، نه پراکنده، نه بی‌دلیل.",
        open: "دیدن کیس",
      },
      capabilities: {
        kicker: "04 / خدمات دقیق",
        title: "چیزهایی که برند را روشن‌تر، قابل‌اعتمادتر و قابل‌تشخیص‌تر می‌کنند.",
        items: [
          {
            title: "استراتژی برند",
            body: "جایگاه، مخاطب، تمایز، پیام مرکزی و نقشه تصمیم‌گیری برند.",
          },
          {
            title: "هویت بصری",
            body: "زبان تصویری، تایپوگرافی، رنگ، تصویر و قواعدی که اجرا را یکدست نگه می‌دارد.",
          },
          {
            title: "فیلم تبلیغاتی",
            body: "ایده، سناریو، ریتم، قاب و کارگردانی حسی که به برند خدمت کند.",
          },
          {
            title: "کمپین و لانچ",
            body: "ایده کمپین، ترتیب انتشار، محتوای اجتماعی و اتصال همه خروجی‌ها به یک روایت.",
          },
        ],
      },
      method: {
        kicker: "05 / روش کار",
        items: [
          { title: "کشف", body: "مسئله واقعی را از پشت درخواست بیرون می‌آوریم." },
          { title: "تمرکز", body: "یک تصمیم مرکزی می‌سازیم و اضافه‌ها را حذف می‌کنیم." },
          { title: "کارگردانی", body: "تصمیم را به کلمه، تصویر، صحنه و ریتم تبدیل می‌کنیم." },
          { title: "انتشار", body: "خروجی‌ها با نظم منتشر می‌شوند تا برند واضح‌تر دیده شود." },
        ],
      },
      identity: {
        kicker: "06 / بیانیه هویت خلاق",
        title: "برند برای تزئین نیست؛ باید قابل فهم، قابل اعتماد و قابل یادآوری شود.",
        paragraphs: [
          "سیامک دهبکری میان استراتژی برند و کارگردانی تبلیغاتی کار می‌کند؛ جایی که تصمیم‌های دقیق به تصویر، لحن و تجربه تبدیل می‌شوند.",
          "او به جای زیاد کردن نشانه‌ها، معنا را کم‌خطاتر می‌کند. هر قاب، کلمه و حرکت باید به ادراک برند کمک کند.",
          "نگاه او سینمایی است، اما نمایش‌زده نیست؛ مینیمال، کنترل‌شده و متکی بر اثری که بعد از دیدن باقی می‌ماند.",
        ],
      },
      contact: {
        kicker: "07 / تماس",
        title: "اگر برند باید دقیق‌تر دیده شود، از اینجا شروع کنیم.",
        phone: "+۹۸۹۱۲۹۳۷۶۸۴۷",
      },
      case: {
        inPage: "مشاهده در همین صفحه",
        challenge: "مسئله",
        strategy: "تصمیم استراتژیک",
        direction: "جهت خلاق",
        execution: "اجرا",
        outcome: "اثر",
      },
      footer: {
        name: "سیامک دهبکری",
        role: "مدیر برند و کارگردان تبلیغاتی",
      },
    },
  },
  ku: {
    lang: "ku",
    dir: "rtl",
    title: "سیامه‌ک دیبوکری | بەڕێوەبەری براند و دەرهێنەری فیلمی ڕیکلامی",
    meta:
      "ماڵپەڕی سێ زمانەی سیامه‌ک دیبوکری؛ بەڕێوەبەری براند و دەرهێنەری فیلمی ڕیکلامی لە نێوان ستراتیژی، وێنە و هەستپێکردنی برانددا.",
    content: {
      brand: { name: "سیامه‌ک دیبوکری" },
      nav: { work: "کارەکان", method: "ڕێباز", identity: "دید", contact: "پەیوەندی" },
      hero: {
        eyebrow: "بەڕێوەبەری براند / دەرهێنەری فیلمی ڕیکلامی",
        title: ["سیامه‌ک", "دیبوکری", "هەستپێکردنی براند", "بە وردی دەسازێنێت."],
        body:
          "کار لەو شوێنە دەست پێدەکات کە ڕووکار بەس نییە: جێگە، تۆن، وێنە و فیلم دەبنە هەستێکی یەکگرتوو.",
        primaryCta: "بینینی کارەکان",
        secondaryCta: "خوێندنەوەی دید",
        caption: "سیامه‌ک / براند / فیلم / هەستپێکردن",
        metricOneLabel: "براند",
        metricOne: "جێگەی ڕوون",
        metricTwoLabel: "هەست",
        metricTwo: "هەستی کۆنترۆڵکراو",
        metricThreeLabel: "کاریگەری",
        metricThree: "کاریگەریی ماوەدار",
      },
      reel: {
        items: [
          { index: "01", title: "لۆژیکی براند", body: "جێگە، پەیام و تۆن وەک ئامرازی بڕیار، نە تەنها بەڵگە." },
          { index: "02", title: "دەرهێنانی ڕیکلامی", body: "فیلمێک کە فشاری فرۆشتن نییە، بەڵام هۆکاری هەڵبژاردن ڕوونتر دەکات." },
          { index: "03", title: "داڕشتنی هەستپێکردن", body: "هاوهەنگکردنی وێنە، وشە و ئەزموون بۆ هەستێکی ناسراو." },
        ],
      },
      manifesto: {
        kicker: "01 / بنەمای کار",
        title: "براند کاتێک جدی دەبێت کە هەموو شتێک هەستێکی یەکگرتوو دروست بکات.",
        body:
          "لۆگۆ، ڕەنگ، وشە و فیلم کاتێک کاریگەرییان هەیە کە خزمەتی هەمان بڕیار بکەن. کاری سیامه‌ک دروستکردنی ئەو یەکگرتووییەیە: ورد، کەم‌زیادە، ناسراو.",
      },
      signature: {
        kicker: "02 / واژۆ",
        title: "ستراتیژی بە چاوی سینەما. فیلم بە لۆژیکی براند.",
        items: [
          {
            label: "براند",
            title: "لۆژیکی براند",
            body: "جێگە، پەیام و تۆن دەبنە ئامرازی بڕیاردان.",
          },
          {
            label: "فیلم",
            title: "دەرهێنانی ڕیکلامی",
            body: "بیرۆکە، سیناریۆ، چوارچێوە و ڕیتم دەخاتە خزمەتی هەستی براند.",
          },
          {
            label: "هەستپێکردن",
            title: "داڕشتنی هەستپێکردن",
            body: "وێنە، وشە و ئەزموون دەگەیەنێتە هەستێکی ناسراو.",
          },
        ],
      },
      work: {
        kicker: "03 / کارەکان",
        title: "کارەکان دەبێت ڕوون ببینرێن؛ نە زۆر، نە پەرشوباڵاو، نە بێ‌هۆکار.",
        open: "بینینی کیس",
      },
      capabilities: {
        kicker: "04 / خزمەتگوزارییە وردەکان",
        title: "ئەو شتانەی براند ڕوونتر، متمانەپێکراوتر و ناسراوتر دەکەن.",
        items: [
          {
            title: "ستراتیژی براند",
            body: "جێگە، بینەر، جیاوازی، پەیامی ناوەندی و نەخشەی بڕیاری براند.",
          },
          {
            title: "ناسنامەی بینراو",
            body: "زمانی بینراو، تایپۆگرافی، ڕەنگ، وێنە و ڕێساکان بۆ یەکدەستبوونی جێبەجێکردن.",
          },
          {
            title: "فیلمی ڕیکلامی",
            body: "بیرۆکە، سیناریۆ، ڕیتم، چوارچێوە و دەرهێنانێک کە خزمەتی هەستی براند بکات.",
          },
          {
            title: "کەمپەین و لانچ",
            body: "بیرۆکەی کەمپەین، ڕیزبەندی بڵاوکردنەوە، ناوەڕۆکی سۆشیال و گێڕانەوەیەکی یەکگرتوو.",
          },
        ],
      },
      method: {
        kicker: "05 / ڕێبازی کار",
        items: [
          { title: "دۆزینەوە", body: "کێشەی ڕاستەقینە لە پشت داواکارییەکە دەردەهێنین." },
          { title: "چڕکردنەوە", body: "بڕیارێکی ناوەندی دیاری دەکەین و زیادەکان لادەبەین." },
          { title: "دەرهێنان", body: "بڕیارەکە دەگۆڕین بۆ وشە، وێنە، صحنە و ڕیتم." },
          { title: "بڵاوکردنەوە", body: "دەرچوونەکان بە ڕێکخستنی ورد بڵاو دەبنەوە تا براند ڕوونتر ببینرێت." },
        ],
      },
      identity: {
        kicker: "06 / بیانی ناسنامەی داهێنەرانە",
        title: "براند بۆ ڕازاندنەوە نییە؛ دەبێت تێبگەیەنرێت، متمانەپێکراو بێت و لەبیر بمێنێتەوە.",
        paragraphs: [
          "سیامه‌ک دیبوکری لە نێوان ستراتیژیی براند و دەرهێنانی ڕیکلامیدا کار دەکات؛ ئەو شوێنەی بڕیارە وردەکان دەبنە وێنە، تۆن و ئەزموون.",
          "لە جیاتی زیادکردنی نیشانەکان، واتا پاکتر دەکات. هەر چوارچێوە، وشە و جووڵە دەبێت خزمەتی هەستپێکردنی براند بکات.",
          "دیدی ئەو سینەماییە، بەڵام نمایش‌زەدە نییە؛ مینیمال، کۆنترۆڵکراو و پشتیوان بەو کاریگەرییەی دوای بینین دەمێنێتەوە.",
        ],
      },
      contact: {
        kicker: "07 / پەیوەندی",
        title: "ئەگەر براندەکە دەبێت ڕوونتر ببینرێت، لێرە دەست پێبکەین.",
        phone: "+۹۸۹۱۲۹۳۷۶۸۴۷",
      },
      case: {
        inPage: "بینین لەم پەڕەیەدا",
        challenge: "کێشە",
        strategy: "بڕیاری ستراتیژیک",
        direction: "ئاڕاستەی داهێنەرانە",
        execution: "جێبەجێکردن",
        outcome: "کاریگەری",
      },
      footer: {
        name: "سیامه‌ک دیبوکری",
        role: "بەڕێوەبەری براند و دەرهێنەری فیلمی ڕیکلامی",
      },
    },
  },
  en: {
    lang: "en",
    dir: "ltr",
    title: "Siamak Dehbokri | Brand Director & Advertising Film Director",
    meta:
      "Siamak Dehbokri works between brand strategy and advertising direction, shaping image, tone, and brand perception.",
    content: {
      brand: { name: "Siamak Dehbokri" },
      nav: { work: "Work", method: "Method", identity: "View", contact: "Contact" },
      hero: {
        eyebrow: "Brand Director / Advertising Film Director",
        title: ["Siamak", "Dehbokri", "shapes brand", "perception with precision."],
        body:
          "The work begins where appearance stops being enough: position, tone, image, and film shaped into one clear feeling.",
        primaryCta: "View the work",
        secondaryCta: "Read the view",
        caption: "Siamak / Brand / Film / Perception",
        metricOneLabel: "Brand",
        metricOne: "Clear position",
        metricTwoLabel: "Film",
        metricTwo: "Controlled feeling",
        metricThreeLabel: "Effect",
        metricThree: "Lasting recall",
      },
      reel: {
        items: [
          { index: "01", title: "Brand Logic", body: "Position, message, and tone as decision tools, not documents." },
          { index: "02", title: "Commercial Direction", body: "Films that avoid pressure and make the reason to choose clearer." },
          { index: "03", title: "Perception Design", body: "Aligning image, words, and experience into one recognizable feeling." },
        ],
      },
      manifesto: {
        kicker: "01 / Principle",
        title: "A brand becomes serious when every part creates one feeling.",
        body:
          "Logos, colors, words, and films matter only when they serve the same decision. Siamak’s work is to build that coherence: precise, restrained, recognizable.",
      },
      signature: {
        kicker: "02 / Signature",
        title: "Strategy with a cinematic eye. Film with brand logic.",
        items: [
          {
            label: "Brand",
            title: "Brand Logic",
            body: "Turning position, message, and tone into tools for decision-making.",
          },
          {
            label: "Film",
            title: "Commercial Direction",
            body: "Putting concept, script, frame, and rhythm in service of brand feeling.",
          },
          {
            label: "Perception",
            title: "Perception Design",
            body: "Connecting image, words, and experience into one recognizable feeling.",
          },
        ],
      },
      work: {
        kicker: "03 / Projects",
        title: "Work built to be clear: not louder, not scattered, not decorative.",
        open: "View case",
      },
      capabilities: {
        kicker: "04 / Exact Capabilities",
        title: "Capabilities that make the brand clearer, more trusted, and easier to recognize.",
        items: [
          {
            title: "Brand Strategy",
            body: "Position, audience, difference, core message, and the brand’s decision map.",
          },
          {
            title: "Visual Identity",
            body: "Visual language, typography, color, imagery, and rules that keep execution consistent.",
          },
          {
            title: "Advertising Film",
            body: "Concept, script, rhythm, framing, and direction that serve the brand feeling.",
          },
          {
            title: "Campaign & Launch",
            body: "Campaign idea, release order, social content, and one narrative across all outputs.",
          },
        ],
      },
      method: {
        kicker: "05 / Working Method",
        items: [
          { title: "Discover", body: "We find the real issue behind the brief." },
          { title: "Focus", body: "We define one central decision and remove the excess." },
          { title: "Direct", body: "We turn the decision into words, image, scene, and rhythm." },
          { title: "Release", body: "The outputs are released with discipline so the brand becomes clearer." },
        ],
      },
      identity: {
        kicker: "06 / Creative Identity Statement",
        title: "A brand is not decoration. It has to be understood, trusted, and remembered.",
        paragraphs: [
          "Siamak Dehbokri works between brand strategy and advertising direction, where precise decisions become image, tone, and experience.",
          "Instead of adding more signs, he makes meaning cleaner. Every frame, word, and movement has to serve perception.",
          "His eye is cinematic, but not theatrical: minimal, controlled, and built around what remains after seeing.",
        ],
      },
      contact: {
        kicker: "07 / Contact",
        title: "If the brand needs to be seen more clearly, start here.",
        phone: "+989129376847",
      },
      case: {
        inPage: "In-page case",
        challenge: "Problem",
        strategy: "Strategic Move",
        direction: "Creative Direction",
        execution: "Execution",
        outcome: "Effect",
      },
      footer: {
        name: "Siamak Dehbokri",
        role: "Brand Director & Advertising Film Director",
      },
    },
  },
};

const projects = [
  {
    id: "positioning-systems",
    image: "assets/project-nocturne.svg",
    year: "2026",
    tags: {
      fa: ["جایگاه", "لحن", "هویت"],
      ku: ["جێگە", "تۆن", "ناسنامە"],
      en: ["Position", "Tone", "Identity"],
    },
    copy: {
      fa: {
        title: "جایگاه، قبل از ظاهر",
        category: "استراتژی و هویت برند",
        summary: "تعریف دلیل انتخاب برند و تبدیل آن به لحن، تصویر و ساختار ارتباطی.",
        intro: "برند نشانه‌های زیادی داشت، اما در ذهن مخاطب جای مشخصی نداشت.",
        challenge: "نشانه‌ها زیاد بودند، اما جایگاه روشن نبود؛ مخاطب برند را می‌دید، اما دلیل انتخاب را حس نمی‌کرد.",
        strategy: "پیام‌ها بازچیده شدند تا یک وعده مرکزی، لحن و ساختار محتوا همه در یک جهت کار کنند.",
        direction: "زبان تصویری کم‌اضافه شد تا برند روشن‌تر و قابل تشخیص‌تر دیده شود.",
        execution: "لحن، پیام، ساختار محتوا و قواعد هویت در یک سیستم واحد قرار گرفت.",
        outcome: "نتیجه، برندی روشن‌تر و قابل تشخیص‌تر بود.",
      },
      ku: {
        title: "جێگە، پێش ڕووکار",
        category: "ستراتیژی و ناسنامەی براند",
        summary: "دیاریکردنی هۆکاری هەڵبژاردنی براند و گۆڕینی بۆ تۆن، وێنە و پێکهاتەی پەیوەندی.",
        intro: "براند نیشانەی زۆری هەبوو، بەڵام لە مێشکی بینەردا جێگەیەکی ڕوونی نەبوو.",
        challenge: "نیشانەکان زۆر بوون، بەڵام جێگە ڕوون نەبوو؛ بینەر براندی دەبینی، بەڵام هۆکاری هەڵبژاردنی هەست نەدەکرد.",
        strategy: "پەیامەکان لە دەوری بەڵێنێک، تۆنێک و پێکهاتەیەکی ناوەڕۆک ڕێکخرانەوە.",
        direction: "زمانی بینراو کەم‌زیادەتر کرا تا براند ڕوونتر و ناسراوتر ببینرێت.",
        execution: "تۆن، پەیام، پێکهاتەی ناوەڕۆک و ڕێساکانی ناسنامە لە سیستەمێکی یەکدا دانران.",
        outcome: "ئەنجامەکە جێگەیەکی ڕوونتر و ناسراوتر بوو.",
      },
      en: {
        title: "Position Before Appearance",
        category: "Brand Strategy & Identity",
        summary: "Defining the reason to choose, then turning it into tone, image, and communication structure.",
        intro: "The brand had many signs, but no clear place in the audience’s mind.",
        challenge: "There were many signals, but no clear position; people saw the brand without feeling a reason to choose.",
        strategy: "Its messages were rebuilt around one promise, one tone, and one content structure.",
        direction: "The visual language was restrained so the brand could feel clearer and easier to recognize.",
        execution: "Tone, message, content structure, and identity rules were organized into one system.",
        outcome: "The result was a clearer, more recognizable position.",
      },
    },
  },
  {
    id: "ad-film-direction",
    image: "assets/project-aural.svg",
    year: "2026",
    tags: {
      fa: ["فیلم", "اعتماد", "ریتم"],
      ku: ["فیلم", "متمانە", "ڕیتم"],
      en: ["Film", "Trust", "Rhythm"],
    },
    copy: {
      fa: {
        title: "فروش، بدون فشار فروش",
        category: "کارگردانی تبلیغاتی",
        summary: "تبدیل مزیت محصول به موقعیتی که اعتماد را با حس می‌سازد.",
        intro: "محصول قابل توضیح بود، اما حس انتخاب نمی‌ساخت.",
        challenge: "پیام فروش مستقیم بود و محصول را توضیح می‌داد، اما سطح ادراک برند را بالا نمی‌برد.",
        strategy: "پیام فروش به موقعیتی دراماتیک تبدیل شد: اول فضا، بعد مزیت.",
        direction: "قاب‌ها، سکوت‌ها و ریتم بازی‌ها طوری کنترل شدند که اعتماد قبل از توضیح ساخته شود.",
        execution: "ایده، سناریو، استوری‌بورد، دکوپاژ، ریتم تدوین و خروجی‌های کمپین در یک لحن واحد اجرا شدند.",
        outcome: "فیلم به جای توضیح محصول، سطح ادراک برند را بالا برد.",
      },
      ku: {
        title: "فرۆشتن، بەبێ فشاری فرۆشتن",
        category: "دەرهێنانی ڕیکلامی",
        summary: "گۆڕینی سوودی بەرهەم بۆ دۆخێک کە متمانە بە هەست دروست دەکات.",
        intro: "بەرهەم دەکرا ڕوون بکرێتەوە، بەڵام هەستی هەڵبژاردن دروست نەدەکرد.",
        challenge: "پەیامی فرۆشتن ڕاستەوخۆ بوو و بەرهەمی ڕوون دەکردەوە، بەڵام ئاستی هەستپێکردنی براندی بەرز نەدەکرد.",
        strategy: "پەیامی فرۆشتن بوو بە دۆخێکی دراماتیکی: یەکەم فضا، دواتر سوود.",
        direction: "چوارچێوە، بێدەنگی و ڕیتمی یارییەکان کۆنترۆڵ کران تا متمانە پێش ڕوونکردنەوە دروست ببێت.",
        execution: "بیرۆکە، سیناریۆ، ستۆریبۆرد، دێکۆپاژ، ڕیتمی مۆنتاژ و دەرچوونەکانی کەمپەین بە تۆنێکی یەکگرتوو جێبەجێ کران.",
        outcome: "فیلمەکە لە جیاتی ڕوونکردنەوەی بەرهەم، ئاستی هەستپێکردنی براندی بەرزتر کرد.",
      },
      en: {
        title: "Selling Without the Sales Pressure",
        category: "Advertising Direction",
        summary: "Turning a product benefit into a situation that builds trust through feeling.",
        intro: "The product could be explained, but it did not create the feeling of choice.",
        challenge: "The sales message was direct and informative, but it did not raise the brand’s perceived level.",
        strategy: "The sales message became a dramatic situation: atmosphere first, benefit second.",
        direction: "Frames, silences, and performance rhythm were controlled so trust could arrive before explanation.",
        execution: "Concept, script, storyboard, shot logic, edit rhythm, and campaign outputs were shaped in one tone.",
        outcome: "The film raised the brand’s perceived level instead of merely explaining the product.",
      },
    },
  },
  {
    id: "campaign-as-world",
    image: "assets/project-vanta.svg",
    year: "2026",
    tags: {
      fa: ["کمپین", "روایت", "لانچ"],
      ku: ["کەمپەین", "گێڕانەوە", "لانچ"],
      en: ["Campaign", "Narrative", "Launch"],
    },
    copy: {
      fa: {
        title: "یک کمپین، یک جهان",
        category: "رهبری خلاق کمپین",
        summary: "هم‌راستا کردن فیلم، محتوا، شبکه‌های اجتماعی و لانچ در یک روایت قابل پیگیری.",
        intro: "کمپین چند خروجی داشت، اما هنوز یک حس واحد نداشت.",
        challenge: "فیلم، محتوا و شبکه‌های اجتماعی کنار هم بودند، اما پراکنده دیده می‌شدند.",
        strategy: "یک جهان مرکزی تعریف شد و هر خروجی به بخشی از همان روایت تبدیل شد.",
        direction: "ریتم، رنگ، کپی، قاب و ترتیب انتشار برای یک تجربه آرام و قابل پیگیری کنترل شدند.",
        execution: "تقویم کمپین، ساختار محتوا، فیلم اصلی، برش‌های اجتماعی و پیام‌های کلیدی در یک مسیر واحد اجرا شدند.",
        outcome: "نتیجه، کمپینی بود که پراکنده دیده نمی‌شد.",
      },
      ku: {
        title: "یەک کەمپەین، یەک جیهان",
        category: "ڕێبەری داهێنەرانەی کەمپەین",
        summary: "هاوهەنگکردنی فیلم، ناوەڕۆک، تۆڕە کۆمەڵایەتییەکان و لانچ لە گێڕانەوەیەکی یەکگرتوودا.",
        intro: "کەمپەین چەند دەرچوونی هەبوو، بەڵام هەستێکی یەکگرتووی نەبوو.",
        challenge: "فیلم، ناوەڕۆک و تۆڕەکان پێکەوە بوون، بەڵام پەرشوباڵاو دەبینران.",
        strategy: "جیهانێکی ناوەندی دیاری کرا و هەر دەرچوونێک بوو بە بەشێک لە هەمان گێڕانەوە.",
        direction: "ڕیتم، ڕەنگ، کۆپی، چوارچێوە و ڕیزبەندی بڵاوکردنەوە بۆ ئەزموونێکی هێمن و ڕێکخراو کۆنترۆڵ کران.",
        execution: "کالێندەری کەمپەین، پێکهاتەی ناوەڕۆک، فیلمی سەرەکی، بڕاوە کۆمەڵایەتییەکان و پەیامە سەرەکییەکان لە ڕێڕەوێکی یەکدا جێبەجێ کران.",
        outcome: "ئەنجامەکە کەمپەینێک بوو کە پەرشوباڵاو نەدەبینرا.",
      },
      en: {
        title: "One Campaign, One World",
        category: "Creative Campaign Leadership",
        summary: "Aligning film, content, social media, and launch into one trackable narrative.",
        intro: "The campaign had many outputs, but not one feeling.",
        challenge: "Film, content, and social channels existed together, but they still felt scattered.",
        strategy: "A central world was defined, and every asset became part of the same narrative.",
        direction: "Rhythm, color, copy, framing, and release order were controlled for a calm, trackable experience.",
        execution: "Campaign calendar, content structure, hero film, social cuts, and key messages were released through one path.",
        outcome: "The result was a campaign that no longer felt scattered.",
      },
    },
  },
];

const accessibilityText = {
  fa: {
    navigation: "ناوبری اصلی",
    closeCase: "بستن کیس‌استادی",
    themeToLight: "تغییر به حالت روشن",
    themeToDark: "تغییر به حالت تاریک",
    brandWhisper: "او فقط نام نمی‌سازد؛ مسیر دیدن را عوض می‌کند.",
    instagram: "اینستاگرام سیامک دهبکری",
    telegram: "تلگرام سیامک دهبکری",
    linkedin: "لینکدین سیامک دهبکری",
    egg: "لایه پنهان فعال شد؛ ادراک همیشه یک قدم جلوتر از توضیح است.",
  },
  ku: {
    navigation: "ناوبەری سەرەکی",
    closeCase: "داخستنی کیس",
    themeToLight: "گۆڕین بۆ دۆخی ڕووناک",
    themeToDark: "گۆڕین بۆ دۆخی تاریک",
    brandWhisper: "ناو دروست ناکات؛ ڕێگای بینین دەگۆڕێت.",
    instagram: "ئینستاگرامی سیامه‌ک دیبوکری",
    telegram: "تێلەگرامی سیامه‌ک دیبوکری",
    linkedin: "لینکدینی سیامه‌ک دیبوکری",
    egg: "چینی شاراوە چالاک بوو؛ هەستپێکردن هەمیشە پێش ڕوونکردنەوەیە.",
  },
  en: {
    navigation: "Primary navigation",
    closeCase: "Close case study",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    brandWhisper: "Not a name. A way of being seen.",
    instagram: "Siamak Dehbokri on Instagram",
    telegram: "Siamak Dehbokri on Telegram",
    linkedin: "Siamak Dehbokri on LinkedIn",
    egg: "Hidden layer unlocked; perception always arrives before explanation.",
  },
};

let activeLanguage = "fa";
let lenis;
let hasRenderedOnce = false;
let lastFocusedElement = null;
let refreshActiveNavigation = () => {};
let refreshScrollProgress = () => {};
let refreshSectionMood = () => {};
let currentActiveNavHash = "";
let enhancementsRequested = false;
let enhancedMotionReady = false;
let mobileRevealObserver = null;
let activeTheme = document.documentElement.dataset.theme === "light" ? "light" : "dark";

function getPath(source, path) {
  return path.split(".").reduce((value, key) => value?.[key], source);
}

function setText(selector, value) {
  const node = typeof selector === "string" ? $(selector) : selector;
  if (node) node.textContent = value || "";
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[character];
  });
}

function renderStaticText() {
  const { content } = languages[activeLanguage];

  $$("[data-i18n]").forEach((node) => {
    setText(node, getPath(content, node.dataset.i18n));
  });

  $$("[data-i18n-lines]").forEach((node) => {
    const lines = getPath(content, node.dataset.i18nLines) || [];
    node.innerHTML = lines.map((line, index) => `<span style="--line-index: ${index}">${escapeHTML(line)}</span>`).join("");
  });
}

function renderCards() {
  const { content } = languages[activeLanguage];
  const reelTrack = $("[data-reel-track]");
  const signatureGrid = $("[data-signature-grid]");
  const capabilityGrid = $("[data-capability-grid]");
  const methodList = $("[data-method-list]");
  const identityCopy = $("[data-identity-copy]");

  if (reelTrack) {
    reelTrack.innerHTML = content.reel.items
      .map(
        (item) => `
          <article class="reel-card" data-reveal>
            <span>${escapeHTML(item.index)}</span>
            <h3>${escapeHTML(item.title)}</h3>
            <p>${escapeHTML(item.body)}</p>
          </article>
        `,
      )
      .join("");
  }

  if (signatureGrid) {
    signatureGrid.innerHTML = content.signature.items
      .map(
        (item, index) => `
          <article data-reveal>
            <span class="signature-index">${String(index + 1).padStart(2, "0")} / ${escapeHTML(item.label)}</span>
            <h3>${escapeHTML(item.title)}</h3>
            <p>${escapeHTML(item.body)}</p>
          </article>
        `,
      )
      .join("");
  }

  if (capabilityGrid) {
    capabilityGrid.innerHTML = content.capabilities.items
      .map(
        (item, index) => `
          <article data-reveal>
            <span class="capability-index">${String(index + 1).padStart(2, "0")}</span>
            <h3>${escapeHTML(item.title)}</h3>
            <p>${escapeHTML(item.body)}</p>
          </article>
        `,
      )
      .join("");
  }

  if (methodList) {
    methodList.innerHTML = content.method.items
      .map(
        (item) => `
          <div class="process-step" data-reveal>
            <h3>${escapeHTML(item.title)}</h3>
            <p>${escapeHTML(item.body)}</p>
          </div>
        `,
      )
      .join("");
  }

  if (identityCopy) {
    identityCopy.innerHTML = content.identity.paragraphs
      .map((paragraph) => `<p data-reveal>${escapeHTML(paragraph)}</p>`)
      .join("");
  }
}

function renderProjects() {
  const { content } = languages[activeLanguage];
  const list = $("[data-project-list]");
  if (!list) return;

  list.innerHTML = projects
    .map((project, index) => {
      const copy = project.copy[activeLanguage];
      const tags = (project.tags[activeLanguage] || project.tags.en)
        .map((tag) => `<span>${escapeHTML(tag)}</span>`)
        .join("");
      const title = escapeHTML(copy.title);
      return `
        <article class="project-card ${index % 2 ? "is-offset" : ""}" data-reveal>
          <button class="project-media" type="button" data-project-id="${project.id}" aria-label="${escapeHTML(content.work.open)}: ${title}">
            <img loading="lazy" decoding="async" width="1800" height="1040" src="${project.image}" alt="${title}" />
          </button>
          <div class="project-copy">
            <p class="project-eyebrow">${escapeHTML(copy.category)} / ${escapeHTML(project.year)}</p>
            <h3>${title}</h3>
            <p class="project-summary">${escapeHTML(copy.summary)}</p>
            <div class="project-meta">${tags}<span>${escapeHTML(content.work.open)}</span></div>
            <button class="project-open" type="button" data-project-id="${project.id}" aria-label="${escapeHTML(content.work.open)}: ${title}">
              ${escapeHTML(content.work.open)}
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  $$("[data-project-id]").forEach((button) => {
    button.addEventListener("click", () => openCaseStudy(button.dataset.projectId));
  });
}

function updateA11yLabels() {
  const labels = accessibilityText[activeLanguage] || accessibilityText.fa;
  const nav = $("[data-main-nav]");
  if (nav) nav.setAttribute("aria-label", labels.navigation);

  const brandWhisper = $("[data-brand-whisper]");
  if (brandWhisper) brandWhisper.textContent = labels.brandWhisper;

  $$("[data-close-case]").forEach((button) => {
    button.setAttribute("aria-label", labels.closeCase);
  });

  const socialLabels = {
    Instagram: labels.instagram,
    Telegram: labels.telegram,
    LinkedIn: labels.linkedin,
  };

  $$(".socials a").forEach((link) => {
    const label = socialLabels[link.textContent.trim()];
    if (label) link.setAttribute("aria-label", label);
  });

  syncThemeToggle();
}

function updateLanguage(lang) {
  const nextLanguage = languages[lang] ? lang : "fa";
  if (hasRenderedOnce && nextLanguage === activeLanguage) return;

  const shouldAnimateLanguage = hasRenderedOnce && window.gsap && !prefersReducedMotion;
  if (shouldAnimateLanguage) {
    document.body.classList.add("is-language-switching");
    gsap.killTweensOf("main, .site-footer");
  }

  activeLanguage = nextLanguage;
  const language = languages[activeLanguage];
  const metaDescription = $('meta[name="description"]');

  document.documentElement.lang = language.lang;
  document.documentElement.dir = language.dir;
  document.body.classList.remove("lang-fa", "lang-ku", "lang-en");
  document.body.classList.add(`lang-${activeLanguage}`);
  document.title = language.title;
  if (metaDescription) metaDescription.content = language.meta;

  $$("[data-lang]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === activeLanguage);
    button.setAttribute("aria-pressed", button.dataset.lang === activeLanguage ? "true" : "false");
  });

  renderStaticText();
  renderCards();
  renderProjects();
  updateA11yLabels();
  initAnchorNavigation();
  initMotion(hasRenderedOnce);
  setActiveNav(location.hash || "#top");
  requestAnimationFrame(refreshActiveNavigation);
  hasRenderedOnce = true;

  if (shouldAnimateLanguage) {
    gsap.fromTo(
      "main, .site-footer",
      { autoAlpha: 0.64, y: 4 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.58,
        ease: "power2.out",
        onComplete: () => document.body.classList.remove("is-language-switching"),
      },
    );
  } else {
    document.body.classList.remove("is-language-switching");
  }

  try {
    localStorage.setItem("preferred-language", activeLanguage);
  } catch {
    // Storage may be disabled; language switching remains functional.
  }
}

function setActiveNav(hash) {
  const didChange = hash !== currentActiveNavHash;
  let activeLink = null;
  currentActiveNavHash = hash;

  $$(".nav a").forEach((link) => {
    const isCurrent = link.getAttribute("href") === hash;
    link.classList.toggle("is-current", isCurrent);

    if (isCurrent) {
      link.setAttribute("aria-current", "page");
      activeLink = link;
    } else {
      link.removeAttribute("aria-current");
    }
  });

  const nav = activeLink?.closest(".nav");
  const shouldCenterMobileNav =
    didChange && activeLink && nav && window.matchMedia(MOBILE_QUERY).matches && nav.scrollWidth > nav.clientWidth + 2;

  if (shouldCenterMobileNav) {
    activeLink.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }
}

function scrollToTarget(hash, updateHistory = true) {
  const target = document.getElementById(hash.slice(1));
  if (!target) return;

  if (updateHistory && location.hash !== hash) {
    history.pushState(null, "", hash);
  }

  setActiveNav(hash);

  if (lenis && !prefersReducedMotion) {
    const headerHeight = $(".site-header")?.getBoundingClientRect().height || 0;
    lenis.scrollTo(target, {
      offset: hash === "#top" ? 0 : -(headerHeight + 16),
      duration: 1.18,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });
    return;
  }

  target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
}

function initAnchorNavigation() {
  $$('a[href^="#"]').forEach((link) => {
    if (link.dataset.anchorReady) return;
    link.dataset.anchorReady = "true";

    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.getElementById(hash.slice(1));
      if (!target) return;
      event.preventDefault();
      if (event.detail > 0) link.blur();
      scrollToTarget(hash);
    });
  });
}

function initActiveNavigation() {
  const links = $$(".nav a");
  const sections = links
    .map((link) => ({
      hash: link.getAttribute("href"),
      node: document.getElementById(link.getAttribute("href").slice(1)),
    }))
    .filter((item) => item.node);

  if (!sections.length) return;

  let ticking = false;

  const update = () => {
    const headerHeight = $(".site-header")?.getBoundingClientRect().height || 0;
    const activationLine = headerHeight + window.innerHeight * 0.22;
    let activeHash = "#top";

    sections.forEach((section) => {
      if (section.node.getBoundingClientRect().top <= activationLine) {
        activeHash = section.hash;
      }
    });

    setActiveNav(activeHash);
    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  update();
  refreshActiveNavigation = requestUpdate;
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  window.addEventListener("hashchange", requestUpdate);
  lenis?.on("scroll", requestUpdate);
}

function initLanguage() {
  let storedLanguage = "fa";
  try {
    storedLanguage = localStorage.getItem("preferred-language") || "fa";
  } catch {
    storedLanguage = "fa";
  }

  $$("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => updateLanguage(button.dataset.lang));
  });

  updateLanguage(storedLanguage);
}

function syncThemeToggle() {
  const toggle = $("[data-theme-toggle]");
  const label = $("[data-theme-label]");
  const labels = accessibilityText[activeLanguage] || accessibilityText.fa;
  if (!toggle) return;

  toggle.setAttribute("aria-pressed", activeTheme === "light" ? "true" : "false");
  toggle.setAttribute("aria-label", activeTheme === "light" ? labels.themeToDark : labels.themeToLight);
  if (label) label.textContent = activeTheme === "light" ? "Light" : "Dark";
}

function applyTheme(theme, persist = false) {
  activeTheme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = activeTheme;
  const themeColor = $("[data-theme-color]");
  if (themeColor) themeColor.content = activeTheme === "light" ? "#fffaf1" : "#090807";
  syncThemeToggle();
  requestAnimationFrame(refreshSectionMood);

  if (!persist) return;

  try {
    localStorage.setItem("site-theme", activeTheme);
  } catch {
    // Ignore storage failures in private browsing.
  }
}

function initThemeToggle() {
  applyTheme(activeTheme);

  $("[data-theme-toggle]")?.addEventListener("click", () => {
    applyTheme(activeTheme === "light" ? "dark" : "light", true);
  });
}

function initSmoothScroll() {
  if (lenis || prefersReducedMotion || prefersLowMotionDevice || !window.Lenis) return;

  lenis = new Lenis({
    duration: 1.36,
    easing: (t) => 1 - Math.pow(1 - t, 3.35),
    smoothWheel: true,
    syncTouch: false,
    wheelMultiplier: 0.78,
    touchMultiplier: 1,
  });

  if (window.gsap && window.ScrollTrigger) {
    lenis.on("scroll", ScrollTrigger.update);
    lenis.on("scroll", refreshActiveNavigation);
    lenis.on("scroll", refreshScrollProgress);
    lenis.on("scroll", refreshSectionMood);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
    return;
  }

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
}

function loadScript(src) {
  const isLoaded = [...document.scripts].some((script) => script.src === src);
  if (isLoaded) return Promise.resolve();

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.fetchPriority = "low";
    script.onload = resolve;
    script.onerror = reject;
    document.head.append(script);
  });
}

function initDeferredEnhancements() {
  if (enhancementsRequested || prefersReducedMotion || prefersLowMotionDevice) return;
  enhancementsRequested = true;

  const loadEnhancements = () => {
    ENHANCEMENT_SCRIPTS.reduce((chain, src) => chain.then(() => loadScript(src)), Promise.resolve())
      .then(() => {
        initSmoothScroll();
        const shouldPlayIntro = !enhancedMotionReady && window.scrollY < 120 && (!location.hash || location.hash === "#top");
        enhancedMotionReady = true;
        initMotion(!shouldPlayIntro);
        requestAnimationFrame(refreshActiveNavigation);
        requestAnimationFrame(refreshScrollProgress);
        requestAnimationFrame(refreshSectionMood);
      })
      .catch(() => {});
  };

  const schedule = () => {
    requestAnimationFrame(() => window.setTimeout(loadEnhancements, 120));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", schedule, { once: true });
  } else {
    schedule();
  }
}

function initPointerGlow() {
  if (prefersReducedMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const orb = $(".cursor-orb");
  if (!orb) return;

  let targetX = window.innerWidth / 2;
  let targetY = window.innerHeight / 2;
  let currentX = targetX;
  let currentY = targetY;
  let isActive = false;
  let frame = null;

  const render = () => {
    const deltaX = targetX - currentX;
    const deltaY = targetY - currentY;

    currentX += deltaX * 0.14;
    currentY += deltaY * 0.14;
    orb.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate3d(-50%, -50%, 0)`;
    frame = isActive && Math.abs(deltaX) + Math.abs(deltaY) > 0.24 ? requestAnimationFrame(render) : null;
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!isActive) {
        currentX = targetX;
        currentY = targetY;
        isActive = true;
        orb.classList.add("is-active");
      }

      if (!frame) frame = requestAnimationFrame(render);

      const eventTarget = event.target instanceof Element ? event.target : null;
      const hoverTarget = eventTarget?.closest(
        ".reel-card, .signature-grid article, .capability-grid article, .process-step, .project-copy, .project-media, .contact-panel",
      );

      if (hoverTarget) {
        const rect = hoverTarget.getBoundingClientRect();
        hoverTarget.style.setProperty("--hover-x", `${event.clientX - rect.left}px`);
        hoverTarget.style.setProperty("--hover-y", `${event.clientY - rect.top}px`);
      }
    },
    { passive: true },
  );

  window.addEventListener("pointerleave", () => {
    isActive = false;
    orb.classList.remove("is-active");
  });
}

function initScrollProgress() {
  const progress = $(".scroll-progress");
  if (!progress) return;

  let ticking = false;

  const render = () => {
    const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const value = Math.min(Math.max(window.scrollY / scrollable, 0), 1);
    progress.style.setProperty("--scroll-progress", `${value * 100}%`);
    ticking = false;
  };

  const requestRender = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(render);
  };

  render();
  refreshScrollProgress = requestRender;
  window.addEventListener("scroll", requestRender, { passive: true });
  window.addEventListener("resize", requestRender);
  lenis?.on("scroll", requestRender);
}

function isMobileRevealEnabled() {
  return !prefersReducedMotion && window.matchMedia("(max-width: 899px)").matches;
}

function isAlreadyInView(node) {
  const rect = node.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

function refreshMobileReveal() {
  const items = $$("main [data-reveal], main [data-split-title]");

  if (!isMobileRevealEnabled()) {
    document.body.classList.remove("mobile-motion-ready");
    mobileRevealObserver?.disconnect();
    mobileRevealObserver = null;
    items.forEach((item) => item.classList.add("is-revealed"));
    return;
  }

  document.body.classList.add("mobile-motion-ready");
  mobileRevealObserver?.disconnect();

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-revealed"));
    return;
  }

  mobileRevealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        mobileRevealObserver?.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
  );

  items.forEach((item, index) => {
    item.style.removeProperty("opacity");
    item.style.removeProperty("transform");
    item.style.setProperty("--reveal-delay", `${Math.min((index % 5) * 42, 168)}ms`);

    if (isAlreadyInView(item)) {
      item.classList.add("is-revealed");
    } else {
      item.classList.remove("is-revealed");
      mobileRevealObserver.observe(item);
    }
  });
}

function initMobileRevealSystem() {
  refreshMobileReveal();

  let ticking = false;
  window.addEventListener("resize", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      refreshMobileReveal();
    });
  });
}

function applySectionMood(section, mood) {
  if (!section || !mood) return;
  const themeMood = activeTheme === "light" ? mood.light || mood : mood;

  $$(".section-shell.is-focused-section").forEach((item) => {
    if (item !== section) item.classList.remove("is-focused-section");
  });

  section.classList.add("is-focused-section");
  document.body.style.setProperty("--mood-x", mood.x);
  document.body.style.setProperty("--mood-y", mood.y);
  document.body.style.setProperty("--mood-a", themeMood.a);
  document.body.style.setProperty("--mood-b", themeMood.b);
}

function initSectionMood() {
  const entries = sectionMoods
    .map((mood) => ({ mood, section: $(mood.selector) }))
    .filter(({ section }) => section);

  if (!entries.length) return;

  let ticking = false;
  let activeSection = null;
  let activeMoodTheme = null;

  const update = () => {
    const headerHeight = $(".site-header")?.getBoundingClientRect().height || 0;
    const focusLine = headerHeight + window.innerHeight * 0.34;
    let next = entries[0];

    entries.forEach((entry) => {
      if (entry.section.getBoundingClientRect().top <= focusLine) {
        next = entry;
      }
    });

    if (next.section !== activeSection || activeMoodTheme !== activeTheme) {
      activeSection = next.section;
      activeMoodTheme = activeTheme;
      applySectionMood(next.section, next.mood);
    }

    ticking = false;
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  update();
  refreshSectionMood = requestUpdate;
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  window.addEventListener("hashchange", requestUpdate);
  lenis?.on("scroll", requestUpdate);
}

function initMotion(refreshOnly = false) {
  if (!window.gsap || !window.ScrollTrigger || prefersReducedMotion) {
    if (isMobileRevealEnabled()) {
      refreshMobileReveal();
      return;
    }

    $$("[data-reveal]").forEach((item) => {
      item.style.opacity = 1;
      item.style.transform = "none";
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.killTweensOf("[data-reveal], .split-title span, .project-media img, section, .ambient, .hero-frame img, .reel-card, .signature-grid article, .capability-grid article");

  const isMobile = window.matchMedia(MOBILE_QUERY).matches;
  const isCompact = window.matchMedia("(max-width: 900px)").matches;

  if (isMobile) {
    gsap.set("[data-reveal], .site-header[data-reveal], .split-title span", {
      autoAlpha: 1,
      y: 0,
      yPercent: 0,
      clearProps: "transform",
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());
    return;
  }

  gsap.set("[data-reveal]", {
    autoAlpha: refreshOnly ? 1 : 0,
    y: refreshOnly ? 0 : 24,
  });

  gsap.set(".split-title span", {
    yPercent: refreshOnly ? 0 : 68,
    rotate: 0,
    autoAlpha: refreshOnly ? 1 : 0,
  });

  if (!refreshOnly) {
    gsap.to(".split-title span", {
      yPercent: 0,
      rotate: 0,
      autoAlpha: 1,
      duration: 1.42,
      stagger: 0.085,
      ease: "power3.out",
      delay: 0.12,
    });

    gsap.fromTo(
      ".hero-frame img",
      { scale: 1.045, yPercent: 1.4 },
      { scale: 1, yPercent: 0, duration: 1.7, ease: "power3.out", delay: 0.16 },
    );

    gsap.to(".ambient-a", {
      x: 54,
      y: 18,
      duration: 18,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(".ambient-b", {
      x: -46,
      y: -24,
      duration: 22,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }

  ScrollTrigger.batch("[data-reveal]:not(.project-card)", {
    start: "top 87%",
    once: true,
    onEnter: (batch) => {
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: 1.14,
        stagger: 0.06,
        ease: "power3.out",
      });
    },
  });

  if (!refreshOnly && !isMobile) {
    gsap.to(".site-header[data-reveal]", {
      autoAlpha: 1,
      y: 0,
      duration: 0.85,
      ease: "power3.out",
      overwrite: true,
    });
  }

  $$(".project-card").forEach((card) => {
    const media = $(".project-media", card);
    const copy = $(".project-copy", card);
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: card,
        start: isCompact ? "top 90%" : "top 84%",
        once: true,
      },
    });

    timeline.fromTo(
      card,
      { autoAlpha: 0, y: isCompact ? 18 : 28 },
      {
        autoAlpha: 1,
        y: 0,
        duration: isCompact ? 0.84 : 1.08,
        ease: "power3.out",
      },
    );

    if (!isCompact && media && copy) {
      timeline.fromTo(
        [media, copy],
        { y: 14 },
        {
          y: 0,
          duration: 0.78,
          stagger: 0.07,
          ease: "power2.out",
        },
        "<0.12",
      );
    }
  });

  if (!isCompact) {
    $$(".project-card").forEach((card) => {
      const image = $("img", card);
      if (!image) return;
      gsap.fromTo(
        image,
        { scale: 1.08, yPercent: 3 },
        {
          scale: 1.015,
          yPercent: -1.5,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.25,
          },
        },
      );
    });

    $$(".reel-card, .signature-grid article, .capability-grid article").forEach((card) => {
      gsap.fromTo(
        card,
        { y: 22, autoAlpha: 0.82 },
        {
          y: -6,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
          },
        },
      );
    });
  }

  requestAnimationFrame(() => ScrollTrigger.refresh());
}

function getCaseFocusables() {
  const drawer = $("[data-case-study]");
  if (!drawer) return [];

  return $$(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    drawer,
  ).filter((node) => !node.disabled && node.offsetParent !== null);
}

function openCaseStudy(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  const copy = project.copy[activeLanguage];
  const labels = languages[activeLanguage].content.case;
  const drawer = $("[data-case-study]");
  const panel = $(".case-panel");
  const caseGrid = $("[data-case-grid]");
  if (!drawer || !panel || !caseGrid) return;

  const activeElement = document.activeElement;
  lastFocusedElement = activeElement instanceof HTMLElement && activeElement !== document.body ? activeElement : null;

  setText("[data-case-category]", copy.category);
  setText("[data-case-title]", copy.title);
  setText("[data-case-intro]", copy.intro);
  setText("[data-case-year]", project.year);

  const image = $("[data-case-image]");
  if (image) {
    image.src = project.image;
    image.alt = copy.title;
  }
  panel.scrollTop = 0;

  caseGrid.innerHTML = [
    ["challenge", copy.challenge],
    ["strategy", copy.strategy],
    ["direction", copy.direction],
    ["execution", copy.execution],
    ["outcome", copy.outcome],
  ]
    .map(([key, value]) => `<section class="case-item"><h3>${escapeHTML(labels[key])}</h3><p>${escapeHTML(value)}</p></section>`)
    .join("");

  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-case-open");
  lenis?.stop();

  requestAnimationFrame(() => {
    panel.focus({ preventScroll: true });
  });

  if (window.gsap && !prefersReducedMotion) {
    gsap.fromTo(".case-backdrop", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.72, ease: "power2.out" });
    gsap.fromTo(
      ".case-panel",
      { autoAlpha: 0, y: 42, scale: 0.992 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.98, ease: "power3.out" },
    );
    gsap.fromTo(
      ".case-item",
      { autoAlpha: 0, y: 18 },
      { autoAlpha: 1, y: 0, duration: 0.82, stagger: 0.055, delay: 0.24, ease: "power2.out" },
    );
  }
}

function closeCaseStudy() {
  const drawer = $("[data-case-study]");
  if (!drawer) return;

  const close = () => {
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-case-open");
    lenis?.start();
    lastFocusedElement?.focus?.({ preventScroll: true });
    lastFocusedElement = null;
  };

  if (window.gsap && !prefersReducedMotion) {
    gsap.to(".case-panel", { autoAlpha: 0, y: 32, scale: 0.992, duration: 0.48, ease: "power2.inOut" });
    gsap.to(".case-backdrop", { autoAlpha: 0, duration: 0.48, ease: "power2.inOut", onComplete: close });
  } else {
    close();
  }
}

function initSignatureDraw() {
  const signature = $("[data-signature-draw]");
  if (!signature) return;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    signature.classList.add("is-drawn");
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        signature.classList.add("is-drawn");
        observer.disconnect();
      });
    },
    { rootMargin: "0px 0px -18% 0px", threshold: 0.28 },
  );

  observer.observe(signature);
}

function initEasterEgg() {
  const brand = $(".brand");
  const message = $("[data-easter-egg]");
  if (!brand || !message) return;

  let clickCount = 0;
  let resetTimer = null;
  let hideTimer = null;

  const showMessage = () => {
    const labels = accessibilityText[activeLanguage] || accessibilityText.fa;
    message.textContent = labels.egg;
    message.classList.add("is-visible");
    document.body.classList.add("egg-active");

    window.clearTimeout(hideTimer);
    hideTimer = window.setTimeout(() => {
      message.classList.remove("is-visible");
      document.body.classList.remove("egg-active");
    }, 3600);
  };

  brand.addEventListener("click", () => {
    clickCount += 1;
    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => {
      clickCount = 0;
    }, 1600);

    if (clickCount < 5) return;
    clickCount = 0;
    showMessage();
  });
}

function initCaseStudy() {
  $$("[data-close-case]").forEach((button) => button.addEventListener("click", closeCaseStudy));
  window.addEventListener("keydown", (event) => {
    const drawer = $("[data-case-study]");
    if (!drawer) return;
    if (!drawer.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeCaseStudy();
      return;
    }

    if (event.key !== "Tab") return;

    const focusables = getCaseFocusables();
    if (!focusables.length) return;

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

initThemeToggle();
initSmoothScroll();
initScrollProgress();
initCaseStudy();
initLanguage();
initAnchorNavigation();
initActiveNavigation();
initPointerGlow();
initMobileRevealSystem();
initSectionMood();
initSignatureDraw();
initEasterEgg();
initDeferredEnhancements();
