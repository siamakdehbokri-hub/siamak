const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const prefersLowMotionDevice = window.matchMedia("(hover: none), (pointer: coarse), (max-width: 760px)").matches;
const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
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
    instagram: "اینستاگرام سیامک دهبکری",
    telegram: "تلگرام سیامک دهبکری",
    linkedin: "لینکدین سیامک دهبکری",
  },
  ku: {
    navigation: "ناوبەری سەرەکی",
    closeCase: "داخستنی کیس",
    instagram: "ئینستاگرامی سیامه‌ک دیبوکری",
    telegram: "تێلەگرامی سیامه‌ک دیبوکری",
    linkedin: "لینکدینی سیامه‌ک دیبوکری",
  },
  en: {
    navigation: "Primary navigation",
    closeCase: "Close case study",
    instagram: "Siamak Dehbokri on Instagram",
    telegram: "Siamak Dehbokri on Telegram",
    linkedin: "Siamak Dehbokri on LinkedIn",
  },
};

let activeLanguage = "fa";
let lenis;
let hasRenderedOnce = false;
let lastFocusedElement = null;
let refreshActiveNavigation = () => {};
let currentActiveNavHash = "";

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
    node.innerHTML = lines.map((line) => `<span>${escapeHTML(line)}</span>`).join("");
  });
}

function renderCards() {
  const { content } = languages[activeLanguage];

  $("[data-reel-track]").innerHTML = content.reel.items
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

  $("[data-signature-grid]").innerHTML = content.signature.items
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

  $("[data-capability-grid]").innerHTML = content.capabilities.items
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

  $("[data-method-list]").innerHTML = content.method.items
    .map(
      (item) => `
        <div class="process-step" data-reveal>
          <h3>${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.body)}</p>
        </div>
      `,
    )
    .join("");

  $("[data-identity-copy]").innerHTML = content.identity.paragraphs
    .map((paragraph) => `<p data-reveal>${escapeHTML(paragraph)}</p>`)
    .join("");
}

function renderProjects() {
  const { content } = languages[activeLanguage];
  const list = $("[data-project-list]");

  list.innerHTML = projects
    .map((project, index) => {
      const copy = project.copy[activeLanguage];
      const tags = (project.tags[activeLanguage] || project.tags.en)
        .map((tag) => `<span>${escapeHTML(tag)}</span>`)
        .join("");
      const title = escapeHTML(copy.title);
      return `
        <article class="project-card ${index % 2 ? "is-offset" : ""}">
          <button class="project-media magnetic" type="button" data-project-id="${project.id}" aria-label="${escapeHTML(content.work.open)}: ${title}">
            <img loading="lazy" decoding="async" width="1800" height="1040" src="${project.image}" alt="${title}" />
          </button>
          <div class="project-copy">
            <p class="project-eyebrow">${escapeHTML(copy.category)} / ${escapeHTML(project.year)}</p>
            <h3>${title}</h3>
            <p class="project-summary">${escapeHTML(copy.summary)}</p>
            <div class="project-meta">${tags}<span>${escapeHTML(content.work.open)}</span></div>
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
  initMagnetic();
  initResponsiveTilt();
  initSignatureInteraction();
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
    didChange && activeLink && nav && window.matchMedia("(max-width: 760px)").matches && nav.scrollWidth > nav.clientWidth + 2;

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

function initSmoothScroll() {
  if (prefersReducedMotion || prefersLowMotionDevice || !window.Lenis) return;

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

function initScrollProgress() {
  const progress = $(".scroll-progress");
  if (!progress) return;

  let ticking = false;

  const render = () => {
    const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const value = Math.min(Math.max(window.scrollY / scrollable, 0), 1);
    progress.style.transform = `scaleX(${value})`;
    $(".site-header")?.classList.toggle("is-scrolled", window.scrollY > 18);
    ticking = false;
  };

  const requestRender = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(render);
  };

  render();
  window.addEventListener("scroll", requestRender, { passive: true });
  window.addEventListener("resize", requestRender);
  lenis?.on("scroll", requestRender);
}

function initMotion(refreshOnly = false) {
  if (!window.gsap || !window.ScrollTrigger || prefersReducedMotion) {
    $$("[data-reveal]").forEach((item) => {
      item.style.opacity = 1;
      item.style.transform = "none";
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  gsap.killTweensOf("[data-reveal], .split-title span, .parallax-card, [data-depth], .project-media img, section, .reel-card, .signature-grid article, .capability-grid article");

  const isMobile = window.matchMedia("(max-width: 760px)").matches;
  const isCompact = window.matchMedia("(max-width: 900px)").matches;

  if (isMobile) {
    gsap.set("[data-reveal], .site-header[data-reveal]", {
      autoAlpha: 1,
      y: 0,
      clearProps: "transform",
    });

    if (!refreshOnly) {
      gsap.fromTo(
        ".split-title span",
        { autoAlpha: 0, yPercent: 22 },
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.58,
          stagger: 0.035,
          ease: "power2.out",
        },
      );
    } else {
      gsap.set(".split-title span", { autoAlpha: 1, yPercent: 0, clearProps: "transform" });
    }

    requestAnimationFrame(() => ScrollTrigger.refresh());
    return;
  }

  if (refreshOnly) {
    gsap.set("[data-reveal]", { autoAlpha: 1, y: 0 });
  } else {
    gsap.set("[data-reveal]", { autoAlpha: 0, y: isMobile ? 12 : 24 });
  }

  gsap.set(".split-title span", {
    yPercent: refreshOnly ? 0 : isMobile ? 34 : 68,
    rotate: 0,
    autoAlpha: refreshOnly ? 1 : 0,
  });

  if (isMobile) {
    gsap.set(".site-header[data-reveal]", { autoAlpha: 1, y: 0, clearProps: "transform" });
  }

  if (!refreshOnly) {
    gsap.to(".cursor-orb", {
      autoAlpha: 1,
      duration: 1.8,
      delay: 0.45,
      ease: "power2.out",
    });

    gsap.to(".split-title span", {
      yPercent: 0,
      rotate: 0,
      autoAlpha: 1,
      duration: isMobile ? 0.72 : 1.42,
      stagger: isMobile ? 0.045 : 0.085,
      ease: isMobile ? "power2.out" : "power3.out",
      delay: isMobile ? 0.04 : 0.12,
    });
  }

  ScrollTrigger.batch("[data-reveal]:not(.project-card)", {
    start: isMobile ? "top 94%" : "top 87%",
    once: true,
    onEnter: (batch) => {
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: isMobile ? 0.52 : 1.14,
        stagger: isMobile ? 0.025 : 0.06,
        ease: isMobile ? "power2.out" : "power3.out",
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
      { autoAlpha: 0, y: isMobile ? 10 : isCompact ? 18 : 28 },
      {
        autoAlpha: 1,
        y: 0,
        duration: isMobile ? 0.58 : isCompact ? 0.84 : 1.08,
        ease: isMobile ? "power2.out" : "power3.out",
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
    $$(".parallax-card").forEach((card) => {
      gsap.to(card, {
        yPercent: -7,
        rotateX: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.8,
        },
      });
    });

    $$("[data-depth]").forEach((layer) => {
      const depth = Number(layer.dataset.depth || 0.1);
      gsap.to(layer, {
        y: () => window.innerHeight * depth,
        rotate: depth * 20,
        ease: "none",
        scrollTrigger: {
          trigger: layer.closest("section") || document.body,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    });
  }

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

function initPointerGlow() {
  const orb = $(".cursor-orb");
  if (!orb || prefersReducedMotion || !supportsFinePointer || window.innerWidth < 1100 || !window.gsap) return;

  const xTo = gsap.quickTo(orb, "x", { duration: 1.25, ease: "power2.out" });
  const yTo = gsap.quickTo(orb, "y", { duration: 1.25, ease: "power2.out" });

  window.addEventListener("pointermove", (event) => {
    xTo(event.clientX);
    yTo(event.clientY);
  });
}

function initMagnetic() {
  if (prefersReducedMotion || !supportsFinePointer) return;

  $$(".magnetic").forEach((item) => {
    if (item.dataset.magneticReady) return;
    item.dataset.magneticReady = "true";

    item.addEventListener("pointermove", (event) => {
      if (prefersReducedMotion) return;
      const rect = item.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      const transform = `translate3d(${x * 0.035}px, ${y * 0.045}px, 0)`;

      if (window.gsap) {
        gsap.to(item, { x: x * 0.035, y: y * 0.045, duration: 0.62, ease: "power2.out" });
      } else {
        item.style.transform = transform;
      }
    }, { passive: true });

    item.addEventListener("pointerleave", () => {
      if (window.gsap) {
        gsap.to(item, { x: 0, y: 0, duration: 0.72, ease: "power3.out" });
      } else {
        item.style.transform = "translate3d(0, 0, 0)";
      }
    });
  });
}

function loadDeferredFontWeights() {
  const load = () => {
    if ($('link[href="fonts-extra.css"]')) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "fonts-extra.css";
    link.media = "print";
    link.onload = () => {
      link.media = "all";
    };
    document.head.append(link);
  };

  if ("requestIdleCallback" in window) {
    requestIdleCallback(load, { timeout: 3000 });
  } else {
    window.addEventListener("load", () => window.setTimeout(load, 1200), { once: true });
  }
}

function initResponsiveTilt() {
  if (prefersReducedMotion || !window.gsap || window.matchMedia("(max-width: 900px)").matches) return;

  $$(".hero-frame, .project-media").forEach((item) => {
    if (item.dataset.tiltReady) return;
    item.dataset.tiltReady = "true";

    item.addEventListener("pointermove", (event) => {
      const rect = item.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      gsap.to(item, {
        rotateY: x * 1.8,
        rotateX: y * -1.8,
        transformPerspective: 900,
        duration: 0.68,
        ease: "power2.out",
      });
    }, { passive: true });

    item.addEventListener("pointerleave", () => {
      gsap.to(item, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "power2.out" });
    });
  });
}

function initSignatureInteraction() {
  if (prefersReducedMotion || !supportsFinePointer) return;

  $$(".project-card, .reel-card, .signature-grid article, .capability-grid article").forEach((item) => {
    if (item.dataset.signatureReady) return;
    item.dataset.signatureReady = "true";

    let frame = null;
    let latestEvent = null;

    const updateSpotlight = () => {
      if (!latestEvent) return;
      const rect = item.getBoundingClientRect();
      const x = ((latestEvent.clientX - rect.left) / rect.width) * 100;
      const y = ((latestEvent.clientY - rect.top) / rect.height) * 100;
      item.style.setProperty("--spot-x", `${Math.min(Math.max(x, 0), 100)}%`);
      item.style.setProperty("--spot-y", `${Math.min(Math.max(y, 0), 100)}%`);
      frame = null;
    };

    item.addEventListener(
      "pointermove",
      (event) => {
        latestEvent = event;
        if (frame) return;
        frame = requestAnimationFrame(updateSpotlight);
      },
      { passive: true },
    );

    item.addEventListener("pointerleave", () => {
      if (frame) cancelAnimationFrame(frame);
      frame = null;
      latestEvent = null;
      item.style.setProperty("--spot-x", "50%");
      item.style.setProperty("--spot-y", "50%");
    });
  });
}

function getCaseFocusables() {
  return $$(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    $("[data-case-study]"),
  ).filter((node) => !node.disabled && node.offsetParent !== null);
}

function openCaseStudy(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  const copy = project.copy[activeLanguage];
  const labels = languages[activeLanguage].content.case;
  const drawer = $("[data-case-study]");
  const activeElement = document.activeElement;
  lastFocusedElement = activeElement instanceof HTMLElement && activeElement !== document.body ? activeElement : null;

  setText("[data-case-category]", copy.category);
  setText("[data-case-title]", copy.title);
  setText("[data-case-intro]", copy.intro);
  setText("[data-case-year]", project.year);

  const image = $("[data-case-image]");
  image.src = project.image;
  image.alt = copy.title;
  $(".case-panel").scrollTop = 0;

  $("[data-case-grid]").innerHTML = [
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
    $(".case-panel")?.focus({ preventScroll: true });
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

function initCaseStudy() {
  $$("[data-close-case]").forEach((button) => button.addEventListener("click", closeCaseStudy));
  window.addEventListener("keydown", (event) => {
    const drawer = $("[data-case-study]");
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

initSmoothScroll();
initScrollProgress();
initPointerGlow();
initCaseStudy();
initLanguage();
initAnchorNavigation();
initActiveNavigation();
loadDeferredFontWeights();
