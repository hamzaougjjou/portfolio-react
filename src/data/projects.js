
import amal_media from "./../assets/projects/amal_media.png"
import pda_sell_point from "./../assets/projects/pda_sell_point.png"
import bright_up_consulting from "./../assets/projects/bright_up_consulting.png"
import car_rent from "./../assets/projects/car_rent.png"
import cool_links from "./../assets/projects/cool_links.png"
import pressing_el_amir from "./../assets/projects/pressing_el_amir.png"



export const portfolioProjects = [
  {
    id: 6,
    title: "Pressing El Amir",
    description: "مكبسة الأمير - منصة رقمية حديثة لخدمات الغسيل والكي",
    image: pressing_el_amir, // ضع صورة المشروع
    technologies: ["React", "Tailwind CSS", "Laravel", "MySQL"],
    role: "Full-stack Developer",
    liveUrl: "https://pressing-el-amir.ougjjou.com/", // رابط الموقع إذا متاح
    githubUrl: "#", // رابط الكود إذا متاح
    category: "Web Application",
    overview: `طورتُ منصة كاملة لخدمات الغسيل والكي مع واجهة عصرية 
    مبنية بـ React + Tailwind وربط مع Laravel API لإدارة الطلبات والحجوزات.`,
    features: [
      "واجهة مستخدم حديثة وسهلة الاستخدام",
      "خدمة الحجز أونلاين مع تتبع حالة الطلب",
      "تسجيل الدخول وإنشاء حساب للعملاء",
      "استلام وتوصيل مجاني مع إدارة مواعيد مرنة",
      "إدارة كاملة للخدمات والأسعار عبر لوحة تحكم Laravel",
      "تصميم متجاوب مع الهواتف والأجهزة اللوحية"
    ],
    achievements: [
      "10,000+ عميل سعيد",
      "50,000+ قطعة ملابس تم تنظيفها",
      "تحقيق 99% معدل رضا العملاء",
      "زيادة كفاءة العمليات وخفض وقت التسليم إلى 24-48 ساعة"
    ],
    value: `هذا المشروع عزّز من حضور مكبسة الأمير الرقمي، 
    سهّل تجربة العملاء عبر الإنترنت، وساعد على أتمتة العمليات اليومية 
    مما أدى إلى جذب عملاء جدد وزيادة الولاء.` 
  },
  {
    id: 4,
    title: "تأجير السيارات",
    description: "منصة رقمية لحجز أفضل أنواع السيارات بسهولة وأمان",
    image: car_rent, // ضع رابط صورة المشروع
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://car-rent.ougjjou.com/", // رابط الموقع إذا متاح
    githubUrl: "#", // رابط الكود إذا متاح
    category: "Web Application",
    overview: `منصة متخصصة في تأجير السيارات الحديثة بأسعار مناسبة وخدمة عملاء مميزة على مدار الساعة، مع حجز سهل وآمن.`,
    features: [
      "أحدث السيارات المجهزة بأفضل التقنيات",
      "أمان وثقة مع تأمين كامل وخدمة الطوارئ",
      "حجز سريع وسهل عبر المنصة",
      "دعم فني 24/7",
      "تتبع وتأكيد الحجز بشكل فوري",
      "خدمة سيارات فاخرة واقتصادية"
    ],
    achievements: [
      "+10K عميل سعيد",
      "500+ سيارة متاحة",
      "99.9% رضا العملاء"
    ]
  },
  {
    id: 3,
    title: "BrightUp Consulting",
    description: "Votre partenaire entrepreneurial au Maroc",
    image: bright_up_consulting, // ضع رابط صورة المشروع
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://bright-up-consulting.ougjjou.com", // رابط الموقع إذا متاح
    githubUrl: "#", // رابط الكود إذا متاح
    category: "Web Development",
    overview: `Accompagnement 360° pour les entrepreneurs marocains avec des solutions accessibles, concrètes et personnalisées.`,
    features: [
      "Création & gestion des entreprises",
      "Business Plan & Financement",
      "Identité visuelle & Création de marque",
      "Stratégie commerciale & développement",
      "Marketing digital & Réseaux sociaux",
      "Relance d'entreprises en difficulté"
    ],
    achievements: [
      "180 projets validés via Forsa",
      "+150 business plans réalisés",
      "+30 logos et chartes graphiques créés",
      "4+ années d'expérience",
      "100% satisfaction client"
    ]
  },
  {
    id: 2,
    title: "Amal Media",
    description: "شركة رائدة في الإعلام والتسويق الرقمي",
    image: amal_media, // ضع رابط صورة المشروع
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://amal-media.ougjjou.com/", // ضع رابط الموقع الفعلي
    githubUrl: null, // أو رابط الكود إذا متاح
    category: "Web Development",
    overview: `نحن شركة رائدة في مجال الإعلام والتسويق الرقمي، نقدم حلول إبداعية ومتكاملة لتحقيق أهدافك التسويقية والوصول إلى جمهورك المستهدف بفعالية.`,
    features: [
      "تصميم واجهة جذابة باستخدام Tailwind CSS",
      "محتوى كامل باللغة العربية",
      "خدمات متعددة مثل التصوير الفوتوغرافي، المونتاج، التصميم الجرافيكي",
      "عرض إنجازات الشركة بالأرقام",
      "منهجية عمل واضحة (التشاور، التصميم، التسليم)",
      "متجاوب مع جميع الأجهزة"
    ],
    price: "ابتداءً من 150 درهم",
  }, {
    id: 1,
    title: "PDA Sell Point",
    description: "منصة ذكية لإدارة أجهزة البيع المحمولة (PDA) ومتابعة المبيعات الميدانية",
    image: pda_sell_point, // ضع رابط صورة المشروع
    technologies: ["React", "Tailwind CSS"],
    liveUrl: "https://pda-sell-point.ougjjou.com", // رابط الموقع المباشر إذا متاح
    githubUrl: "#", // رابط الكود إذا متاح
    category: "Web Application",
    overview: `منصة ذكية لإدارة أجهزة البيع المحمولة (PDA) ومتابعة المنتجات، الطلبات، والبائعين لحظة بلحظة، مع أمان عالي، متابعة فورية، ودعم متميز.`,
    features: [
      "إدارة شاملة للبائعين مع تتبع لحظي للأداء والموقع",
      "تحكم كامل في المنتجات والمخزون مع تحديثات فورية",
      "متابعة الطلبات من الإنشاء حتى التسليم",
      "إحصائيات وتقارير متقدمة لاتخاذ قرارات أفضل",
      "متجاوب مع جميع الأجهزة",
      "دعم فني 24/7"
    ],
    pricingPlans: [
      {
        name: "الخطة المجانية",
        price: "مجاني",
        details: [
          "حتى 3 بائعين",
          "تتبع أساسي للطلبات",
          "تقارير بسيطة",
          "دعم عبر البريد الإلكتروني"
        ]
      },
      {
        name: "الخطة الاحترافية",
        price: "299 ريال/شهر",
        details: [
          "عدد غير محدود من البائعين",
          "تتبع متقدم للطلبات",
          "تقارير وتحليلات شاملة",
          "دعم هاتفي 24/7",
          "تكامل مع الأنظمة الأخرى"
        ]
      },
      {
        name: "خطة مخصصة",
        price: "حسب الطلب",
        details: [
          "حلول مخصصة لفريق مبيعات كبير",
          "تدريب شخصي",
          "مدير حساب مخصص",
          "تكامل متقدم",
          "SLA مضمون"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Cool Links",
    description: "Web application to manage all your links and social media in one place",
    image: cool_links,
    technologies: ["php", "laravel" , "tailwind css"],
    liveUrl: "https://col-links.com",
    githubUrl: "#",
    category: "Web Development",
  }
]
