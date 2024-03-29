// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import { reactI18nextModule } from "react-i18next";

// import translationEN from '../public/locales/en/translation.json';
// import Backend from 'il8next-http-backend'
i18n.use(initReactI18next).init({
  lng: "ar", // Default language
  fallbackLng: "ar", // Fallback language
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        // ================ Start Home  =================

        message: "Messages",
        wishlists: "Wishlists",
        trips: "Trips",
        register: "Sign Up",
        LOgin: "Log in",
        Oute: "Log Out",
        airband: "Airbnb your home",
        profile: "Account",
        help: "Help Center",
        Stays: "Stays",
        Experiences: "Experiences",
        online: " online Experiences",
        Anywhere: "Anywhere",
        Anyweek: "Any week  ",
        Addguest: " Add guest",
        BringAnimal: "Bringing a service animal?",
        Pets: "Pets",
        Infants: "Infants",
        Under: "Under 2",
        Children: "Children",
        Ages: "Ages 2–12",
        Adults: "Adults",
        "reserDate ": "Ages 13 or above",
        Guests: "Guests",
        Date: "Date",
        Turkey: "Turkey",
        UnitedStates: "United States",
        Italy: "Italy ",
        Africa: "Africa ",
        Europe: "Europe ",
        flexible: "I’m flexible ",
        region: "Search by region ",
        Locationing: "Location",
        when: "When do you want to go?",
        Month: "Month",
        Week: "Week",
        Weekend: "Weekend",
        staydata: "How long would you like to stay?",
        Flexible: "Flexible",
        Months: "Months ",
        Dates: "Dates ",
        CheckIn: " Check in ",
        CheckOut: " Check out ",
        Ciprian: "Ciprian",
        April2023: "April 2023",
        details:
          " From point of booking onwards, Rachel and team were exceptionally approachable, helpful, friendly and well organised. The listing forthe accommodation made us fall in",
        Support: "Support",
        AirCover: "Air Cover",
        disabilities: "Supporting people with disabilities ",
        options: " Cancellation options ",
        Anti: "Anti-discrimination",
        Disability: "Disability Support",
        Report: "Report neighborhood concern ",
        host: "Hosting",
        airCover: "AirCover for Hosts",
        resources: "Hosting resources",
        earn: "You could earn ",
        estimated: " at an estimated $84,037 CLP a night ",
        night: "night ",
        learn: "Learn how we estimate your earnings",
        Cairo: "Cairo",
        Placeinfo: "Entire Place -bedrooms",
        Setup: "Airbnb it easily with Airbnb Setup",
        "One-to-one": " One-to-one guidance from a Superhost",
        match:
          " We’ll match you with a Superhost in your area, who’ll guide you from your first question to your first guest—by phone, video call, or chat. ",
        booking: " An experienced guest for your first booking",
        choose:
          "For your first booking, you can choose to welcome an experienced guest who has at least three stays and a good track record on Airbnb.",
        Specialized: "Specialized support from Airbnbt",
        everything:
          "New Hosts get one-tap access to specially trained Community Support agents who can help with everything from account issues to billing support.",
        protect: "Airbnb it with top‑to‑bottom protection",
        Competitors: "Competitors",
        verification: "Guest identity verification",
        info: "Our comprehensive verification system checks details such as name, address, government ID and more to confirm the identity of guests who book on Airbnb.",
        Reservation: "Reservation screening",
        damage:
          "Our proprietary technology analyzes hundreds of factors in each reservation and blocks certain bookings that show a high risk for disruptive parties and property damage.",
        protection: "$3M damage protection",
        reimburses:
          "Airbnb reimburses you for damage caused by guests to your home and belongings and includes these specialized protections:",
        valuables: "Art & valuables",
        boat: "Auto & boat",
        Petdamage: "Pet damage",
        Incomeloss: "Income loss",
        Deepcleaning: "Deep cleaning",
        liability: "$1M liability insurance",
        guestgets:
          "You’re protected in the rare event thata guest gets hurt or their belongings are damaged or stolen.",
        safetyline: "24-hour safety line",
        unsave:
          " If you ever feel unsafe, our app provides one-tap access to specially-trained safety agents, day or night.",
        Comparison:
          "Comparison is based on public information and free offerings by top competitors asof 10/22. Find details and exclusions",
        here: "here",
        LearnMore: "Learn More",
        apartments: "Introducing Airbnb-friendly apartments",
        Apartments: "Park 12 Apartments",
        SanDiego: "San Diego, California",
        OldTown: "Old Town Apartments",
        Arizona: "Scottsdale, Arizona",
        "525Olive": "525 Olive Apartments",
        SanCalifornia: "San Diego, California",
        Explore:
          "We’ve partnered with apartment buildings across the US that let you rent a place to liveand Airbnb it part-time. Explore available apartmentsand find out what you can earn.",
        questions: "Your questions, ",
        answered: "answered",
        ques1: "Is my place right for Airbnb?",
        ans1: "Airbnb guests are interested in all kinds of places. We have listings for tiny homes, cabins, treehouses, and more. Even a spare room can be a great place to stay.",
        ques2: " Do I have to host all the time?",
        ans2: "  Not at all—you control your calendar. You can host once a year, a few nights a month, or more often.",
        ques3: "How much should I interact with guests?",
        ans3: "It’s up to you. Some Hosts prefer to message guests only at key moments—like sending a short note when they check in—while others also enjoy meeting their guests in person. You’ll find a style that works for you and your guests.",
        ques4: "Any tips on being a great Airbnb Host?",
        ans4: "Getting the basics down goes a long way. Keep your place clean, respond to guests promptly, and provide necessary amenities, like fresh towels. Some Hosts like adding a personal touch, such as putting out fresh flowers or sharing a list of local places to explore—but it’s not required.",
        ans4_1: "Read on for more hosting tips",
        ques5: "Any tips on being a great Airbnb Host?",
        ans5: "Learn more about fees",
        ans5_1: "",
        still: "Still have questions?",
        Getanswer: "Get answers from an experienced Superhost near you.",
        Superhost: "Match with a Superhost",
        Community: "Community forum",
        responsibly: "Hosting responsibly",
        apartment: "Airbnb-friendly apartments",
        "Newsroom ": " Newsroom",
        features: "New features ",
        Careers: "الوظائف",
        Investors: "Careers",
        Gift: "Gift cards",
        emergency: "Airbnb.org emergency stays",
        Message: "Message",
        // ================ End Home  =================

        // ================ Start Home Details =================
        Check_in: "Check-in Date",
        Check_out: "Check-out Date",
        Priceper: "Price per Night",
        gustNumber: "Number of Guests",
        Total: "Total Price",
        Reserve: "Reserve",
        Please1: "Please login to reserve",
        Please2: "Please select dates",
        Cancellation: " Cancellation options ",
        COVID_19: "Our COVID-19 Response ",
        Hosting: "AirCover for Hosts",
        AirCoverhost: "Air cover for hosts ",
        Visit: " Visit our community forum   ",
        Howhost: " How to host responsibly ",
        neighbourhood: "  Report a neighbourhood concern ",
        Admin: "Farm stay hosted by Admin ",
        guests: "guests",
        bedrooms: "bedrooms ",
        "2bathrooms": "beds . 2bathrooms ",
        Everybooking:
          "Every booking includes free protection from Host cancellations,listing inaccuracies, and other issues like trouble checking in.",
        offers: "What this place offers",
        GardenView: " Garden View ",
        Waterfront: " Water front",
        Dedicated: "  Dedicated workspace",
        Private: "Private Pool ",
        Temple: "Temple",
        Night: "Night View",
        Outdoor: "Outdoor View View ",
        Flexiblet: "Flexible Room ",
        breakfast: " Outdoor breakfast",
        amienities: "Show all 42 amienities",
        Pictures: "View all Pictures",
        Cleanliness: "Cleanliness",
        Communication: "Communication",
        Checkin: "Checkin ",
        Accuracy: "Accuracy",
        Value: "Value",
        // ================ End Home Details =================

        // ================ start work space =================
        common: "A common area with wifi that’s well suited for working.",
        Selfcheck: "Self check-in",
        doorperson: " You can check in with the doorperson.",
        Great: "Great location",
        recentguests:
          "100% of recent guests gave the location a 5-star rating.",

        // ==============end work space  ================

        // ==============Start Map ==============

        Showmap: "Show map",
        // ============== End Map ================

        // ============== Start Total Price ============

        totalprice: "Display total price",
        include: "Includes all fees, before taxes",

        // ============== End Total Price =============

        // ============== Start option taps ==============

        Filters: "Filters",
        Type: "Type of place",
        Searchrooms: "   Search rooms, entire homes, or any type of place",
        Anytype: "Any type",
        Room: "Room",
        Entire: "Entire home",
        Pricerange: "Price range",
        Theaverage: "The average nightly price is $244",
        Entireplace: " Entire place",
        yourself: "A place all to yourself",
        access: "Your own room, plus access to shared spaces",
        Sharedroom: "Shared room",
        areas:
          " A sleeping space and common areas that may be shared with others",
        Rooms: "Rooms and beds",
        Bedrooms: "Bedrooms",
        Any: "Any",
        Property: "Property type",
        House: "House",
        Apartment: "Apartment",
        Guesthouse: "Guesthouse",
        Hotel: "Hotel",
        Accessibility: "Accessibility features",
        entrance: "Guest entrance and parking",
        "Step-free": "Step-free guest entrance",
        Accessible: "Accessible parking spot",
        wider: "Guest entrance wider than 32 inches",
        pathto: "Step-free path to the guest entrance",
        Showmore: "Show more",
        stays: "Top tier stays",
        Superhos: "Superhost",
        recognized: "Stay with recognized Hosts",
        recognizedHosts: "Stay with recognized Hosts",
        AirbnbPlus: "Airbnb Plus",
        EveryPlus: "Every Plus home is reviewed for quality",
        Hostlanguage: ">Host language",
        English: "English",
        French: "French",
        German: "German",
        Japanese: "Japanese",
        Clearall: "Clear all",
        Show: "Show",

        // ================== End options taps===========

        // ================== Start  Account ================

        Account: "Account",
        personinfo: " Personal info",
        goprofile: "  Go to profile",
        Provide: "Provide personal details and how we can reach you",
        security: "Login & security",
        Update: "Update your password and secure your account",
        payouts: "Payments & payouts",
        Review: "   Review payments, payouts, coupons, and gift cards",
        Taxes: "Taxes",
        Manage: "Manage taxpayer information and tax documents",
        contacted:
          "Choose notification preferences and how you want to be contacted",
        sharing: "Privacy & sharing",
        settings:
          "Manage your personal data, connected services, and data sharing settings",
        Global: "Global preferences",
        timezone: " Set your default language, currency, and timezone",
        Travel: "Travel for work",
        benefits: "Add a work email for business trip benefits",
        Professional: "Professional hosting tools",
        several:
          "Get professional tools if you manage several properties on Airbnb",
        Referral: "Referral credit & coupon",
        referral: "You have $0 referral credits and coupon. Learn more.",
        Need: "Need to deactive your account?",
        care: "Take care of that now",
        Profile: "Profile",
        yourplace: "Airbnb your place",
        simple: "It’s simple to get set up and start earning.",
        Personalinfo: "Personal info",
        Hosthome: "Host a home",
        Visitthe: "Visit the Help Center",
        safety: "Get help with a safety issue",
        neihborhood: "Report a neihborhood concern",
        works: "How Airbnb works",
        USD: "USD",
        Terms: "Terms of Service",
        Poilcy: "Privacy Poilcy",
        Choices: "Your Privacy Choices",
        reserved: "© 2023 Airbnb, Inc. All rights reserved.",

        // ================== End  Account ================

        // ================== Start  Account GlobalREf ================

        preferences: "Global preferences",
        Preferred: "Preferred language",
        Edit: "Edit",
        currency: "Preferred currency",
        Timezone: "Time zone",
        global: "Your global preferences",
        payoutsin:
          "change how you get payments in your payments & payouts preferences.",

        // ================== End  Account GlobalREf  ================

        // ================== Start  Account Login And Security  ================

        LOg: "LOGIN",
        REQUSETS: "LOGIN REQUSETS",
        ACCESS: "SHARED ACCESS",
        Password: "Password",
        updated: "Last updated 22 days ago",
        Updat: "Update",
        Social: "Social accounts",
        Facebook: "Facebook",
        Not: "Not connected",
        Connect: "Connect",
        Google: "Google",
        Connected: "Connected",
        Disonnect: "Disonnect",
        history: "Device history",
        Session: "Session",
        device: "Log out device",
        secure: "Let&apos;s make your account more secure",
        securitya: "Your account security:",
        increase:
          "We&apos;re always working on ways to increase safety in our community. That&apos;s why we look at every account to make sure it&apos;s as secure as possible.",
        Improve: "Improve",
        Deact: "Deactivate your account",
        Deactivate: "Deactivate",
        req: "Login requests",
        members:
          "Team members may have to enter a verification code when they log in to this account for the first time. Approve or decline their login requests on this page.",
        Pending: "Pending requests",
        Approved: "Approved requests",
        Satisfied: "Satisfied requests",
        Declined: "Declined requests",
        Keep: "Keep your account secure",
        Hackers:
          "Only respond to requests from people you know. Hackers might want to access your account by mimicking a team member&apos;s email.",
        accesss: "Shared access",
        Reviews:
          "Shared Review each request carefully before approving access. We’ll email your employee or co-worker a 4-digit code that lets them log into your account with their trusted device.",
        devices: "Adding devices from people you trust",
        someone:
          "When you approve a request, you grant someone full access to your account. They’ll be able to change reservations and send messages on your behalf.",

        // ================== End  Account Login And Security   ================

        // ================== Start  Account Notification   ================

        Notifications: "Notifications",
        Offe: "Offers and updates ",
        offerss: "Travel tips and offers   ",
        personalized:
          "Inspire your next trip with personalized recommendations and special offers.",
        Inspiration: "Inspiration and offers",
        OnEmail: "On: Email",
        planning: "Trip planning",
        Accupdates: "Airbnb updates    ",
        latestnews:
          "  Stay up to date on the latest news from Airbnb, and let us know how we can improve.",
        programs: "News and programs",
        Feedback: "Feedback",
        regulations: "Travel regulations ",
        policies: " Account activity and policies",
        bookings:
          "Confirm your booking and account activity, and learn about important Airbnb policies.",
        activitys: "Account activity ",
        Guests: "Guest policies ",
        reminder:
          "Get important reminders about your reservations, listings, and account activity.",
        Reminders: "Reminders",
        SMS: "On: Email and SMS ",
        Guestl: "Guest and Host messages",
        befores:
          " Keep in touch with your Host or guests before and during your trip.",

        // ================== End  Account Notification  ================

        // ================== Start  Account PaymentsAndPayouts  ================

        pp: "Payments & payouts ",
        Paymentsr: "Payments",
        Payoutsx: "Payouts",
        Yourh: "Your payments  ",
        refunds: "Keep track of all your payments and refunds.",
        Manageg: "Manage payments  ",
        methodsg: "Payment methods",
        planningg:
          " Add a payment method using our secure payment system, then start planning your next trip.",
        payments: "Add payments method ",
        gift: "Airbnb gift credit    ",
        card: "Add gift card",
        Coupons: "Coupons",
        Your: "Your coupons ",
        Addd: "Add coupon",
        through: "Make all payments through Airbnb ",
        Always:
          " Always pay and communicate through Airbnb to ensure you're protected under our",
        of: "Terms of Service, Payments Terms of Service",
        safeguards: ", cancellation, and other safeguards",
        How: "How you’ll get paid ",
        we: "Add at least one payout method so we know where to send your money.",
        Set: "Set up payments ",
        Neede: "Need help?",
        payoute: "When you'll get your payout",
        payoutsl: "How payouts work ",
        transaction: " Go to your transaction history",

        // ================== End  Account PaymentsAndPayouts  ================

        // ================== Start  PersonalInfo  ================

        " Personalinfo": " Personal info ",
        Legal: "Legal name ",
        address: "Email address",
        Phone: "Phone numbers :",
        confirmed:
          "Add a number so confirmed guests and Airbnb can get in touch. You can add other numbers and choose how they’re used.",
        Government: "Government ID ",
        provided: "Not provided",
        Address: "Address",
        Emergency: "Emergency contact",
        Why: "Why isn’t my info shown here?",
        hiding: "  We’re hiding some account details to protect your identity.",
        Which: "Which details can be edited?",
        edited:
          "Contact info and personal details can be edited. If this info  was used to verify your identity, you’ll need to get verified  again the next time you book—or to continue hosting.",
        others: "What info is shared with others?",
        releases:
          " Airbnb only releases contact information for Hosts and guests after a reservation is confirmed.",
        dit: "Edit",

        // ================== End  PersonalInfo  ================

        // ================== Start  PrivacyAndSharing  ================

        Data: "Data",
        Sharingg: "Sharing",
        Services: "Services",
        Manageng: "Manage your account data",
        download:
          "   You can make a request to download or delete your  personal data from Airbnb.",
        yourf: "Request your personal data&nbsp; ",
        filex: "  We’ll create a file for you to download your personal data.",
        Delete: "Delete your account&nbsp;",
        applicable:
          "This will permanently delete your account and your data,in accordance with applicable law.",
        Committed: "Committed to privacy",
        keeping:
          " Airbnb is committed to keeping your data protected. See details in our",
        xll: " Privacy Policy.",
        Activitys: "Activity sharing ",
        Decide: "Decide how your profile and activity are shown to others.",
        enginesx: "Include my profile and listing in search engines",
        like: " Turning this on means search engines, like Google, will display your profile and listing pages in search results.",
        Receipts: "Read Receipts",
        on: "When this is on, we’ll show people that you’ve read their messages.",
        sss: "Connected services",
        zzz: "View services that you’ve connected to your Airbnb account",
        non: "No services connected at the moment",

        // ================== End  PersonalInfo  ================

        // ================== Start  Taxes  ================

        Taxpayers: "Taxpayers",
        Tax: "Tax documents",
        Taxpayerx: "Taxpayer information",
        most: " Tax info is required for most countries/regions.",
        tax: "Add tax info",
        VAT: "Value Added Tax (VAT) ",
        VATregistered: " If you are VAT-registered, please add your VAT ID.",
        ad: "Add VAT ID Number ",
        bn: "Need help?",
        answers: "Get answers to questions about taxes in our &nbsp;",
        filing:
          "Tax documents required for filing taxes are available to review and download here. ",
        also: "  You can also file taxes using detailed earnings info, available in the &nbsp;",
        earnings: "  earnings summary.",
        issued: "No tax document issued ",
        lll: " For tax documents issued prior to 2019,&nbsp;",
        us: "contact us.",
        Get: "Get answers to questions about taxes in our&nbsp;",
        Personal: "Personal info",
        // ================== End    Taxes  ================
        reviews: "reviews",
        aaaa: "Where you’ll be ",
        ShowMore: "Show More ",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
        "": "",
      },
    },
    ar: {
      translation: {
        message: "الرسائل",
        Message: "الرسائل",
        wishlists: "المفضلات",
        trips: "الرحلات",
        register: "اشتراك",
        LOgin: "تسجيل الدحول",
        LOg: "تسجيل الدحول",
        Oute: "تسجيل الخروج",
        profile: "حسابي",
        airband: "   Airbnb اعرض بيتك على ",
        help: "مركز المساعدة",
        Stays: " البقاء",
        Experiences: "الخبرات",
        online: " الخبرات الالكترونيه ",
        Anywhere: "في اي مكان",
        Anyweek: "في اي اسبوع",
        Addguest: " انضم كعميل ",
        BringAnimal: "خدمة احضار حيوان ؟",
        Pets: "حيوانات اليفه",
        Infants: " الرضع",
        Under: " اسفل 2",
        Children: " أطفال",
        Ages: " الاعمار من 2-12",
        Adults: " البالغين",
        reserDate: "الاعمار من 13 سنه وما فوق",
        Guests: "النزلاء",
        Date: "التاريخ",
        Turkey: "تركيا",
        UnitedStates: "الولابات المتحدة ",
        Italy: " ايطاليا ",
        Europe: " اوروبا ",
        Africa: " أفريقيا ",
        flexible: " تحلي بالمرونه ",
        region: " بحث بواسطة المنطقه",
        Locationing: " الموقع",
        when: " متي تريد المغادرة",
        Month: " شهر",
        "Week ": "اسبوع",
        "Weekend ": "عطلة نهاية الاسبوع",
        staydata: "الي متي تريد البقاء",
        Flexible: "مرونه ",
        Months: "شهور ",
        Dates: "مواعيد ",
        Check: "تسجيل دخول تسجيل خروج ",
        Ciprian: " سبرياني",
        April2023: " أبريل 2023",
        details:
          "  من نقطة الحجز فصاعدا، كانت راشيل والفريق استثنائيين ودود ومفيد وودود ومنظم جيدًا. القائمة ل السكن جعلنا نقع فيه",
        Support: "الدعم",
        AirCover: "الدعم الفني",
        Disability: " دعم الأشخاص ذوي الإعاقة",
        options: "خيارات الإلغاء",
        Anti: "مناهضة التمييز",
        Report: "إبلاغ عن مخاوف في الحي",
        host: "الاستضافة",
        airCover: "  للمضيفين AirCover  حماية",
        resources: "  موارد الاستضافة   ",
        earn: "أنت قادر أن تكسب   ",
        estimated: " بتقدير $84,037  لليلة  ",
        night: " الليلة ",
        learn: "معلومات حول طريقة تقدير الأرباح المحتملة",
        Cairo: "القاهرة",
        placeinfo: "مسكن  أكمله 2 غرفة نوم",
        Setup: "   Airbnb Setup  بسهولة مع  Airbnb  اعرض  مسكنك على     ",
        "One-to-one": "توجيهات فردية من مضيف متميّز",
        match:
          "سوف نعثر لك على مضيف متميّز من منطقتك ونضعك على تواصل معه، ليتولى توجيهك بدءًا من أول سؤال يخطر على بالك وصولا إلى استقبال أول ضيف - إما عبر مكالمة هاتفية أو فيديو أو دردشة.",
        booking: "ضيف متمرّس لحجزك الأول",
        choose:
          "بالنسبة إلى حجزك الأول، يمكنك اختيار استضافة ضيف متمرّس سبق له أن أكمل ثلاث إقامات على الأقل على Airbnb وتلقى تقييمات إيجابية فقط.",
        Specialized: "Airbnb دعم متخصص من ",
        everything:
          "يمكن للمضيفين الجدد الوصول بكبسة زر واحدة إلى وكلاء الدعم المجتمعي المدربين تدريبًا خاصًا والقادرين على تقديم مساعدة لحل مختلف المشاكل، من تلك المتعلقة بالحساب إلى الفوترة.",
        protect: "  Airbnb   مع حماية شاملة اعرض مسكنك  على  ",
        Competitors: "المنافسون",
        verification: "التحقق من هوية الضيف ",
        info: "Airbnb يتحقق نظام التحقق الشامل لدينا من التفاصيل مثل الاسم والعنوان وبطاقة التعريف الحكومية والمزيد غير ذلك، لتأكيد هوية الضيوف الذين يحجزون على .",
        Reservation: "التحقق من الحجز",
        damage:
          "تحلل التقنية الخاصة بنا المئات من العوامل في كل حجز وتحظر بعض الحجوزات التي تُظهر إمكانية كبيرة لإقامة حفلات تخريبية وإلحاق الضرر بالممتلكات.",
        protection: "حماية من الأضرار بقيمة 3 ملايين دولار أمريكي",
        reimburses:
          "عوضك Airbnb عن الأضرار التي يلحقها الضيوف ببيتك وممتلكاتك، وتشمل أنواع الحماية المتخصصة التالية:",
        valuables: "التحف الفنية والأغراض الثمينة",
        boat: "السيارات والقوارب",
        Petdamage: "الأضرار التي تسببها الحيوانات الأليفة",
        Incomeloss: "خسارة الدخل",
        Deepcleaning: "التنظيف العميق",
        liability: "تأمين المسؤولية بقيمة مليون دولار أمريكي",
        guestgets:
          "أنت محمي في الحالات النادرة التي يتأذى فيها الضيف أو تتضرر ممتلكاته أو تُسرق.",
        safetyline: "خط السلامة 24/24",
        unsave:
          "إذا شعرت في أي لحظة بعدم الأمان، يوفر تطبيقنا إمكانية الوصول بكبسة زر واحدة إلى الموظفين المعنيين بمسائل السلامة المدربين تدريبًا خاصًا والمتوفرين ليلاً ونهارًا",
        Comparison:
          "تستند المقارنة إلى معلومات عامة وعروض مجانية مقدمة من أبرز المنافسين اعتبارًا من 10/22. اعثر على التفاصيل والاستثناءات .",
        here: "هنا",
        LearnMore: " معرفة المزيد",
        apartments: "نقدّم لكم شقق Airbnb-friendly",
        Apartments: "شقق بارك 12",
        SanDiego: "سان دييغو، كاليفورنيا",
        OldTown: "شقق أولد تاون",
        Arizona: "سكوتسديل، أريزونا",
        "525Olive": "شقق 525 أوليف",
        SanCalifornia: "سان دييغو، كاليفورنيا",
        Explore:
          "لقد دخلنا في شراكة مع المباني السكنية في مختلف أنحاء الولايات المتحدة التي تتيح لك استئجار مكان للعيش فيه وعرضه على Airbnb من وقت لآخر. استكشف الشقق المتاحة واكتشف أرباحك المحتملة.",
        questions: "إجابات عن ",
        answered: "  أسئلتك",
        ques1: "هل مسكني مناسب لـ Airbnb؟",
        ans1: "يُبدي الضيوف على Airbnb اهتمامًا بجميع أنواع المساكن. فلدينا مساكن من فئات البيوت الصغيرة والأكواخ والبيوت على الأشجار، وغيرها المزيد. حتى إن غرفة إضافية يمكن أن تشكّل مكانًا رائعًا للإقامة.",
        ques2: "هل يجب أن أستضيف طوال الوقت؟",
        ans2: "بالطبع لا. أنت تتحكم في تقويمك. يمكنك الاستضافة مرة واحدة في السنة، أو بضع ليالٍ في الشهر، أو أكثر من ذلك.",
        ques3: "إلى أي مدى يجب أن أتفاعل مع الضيوف؟",
        ans3: "الأمر عائد لك. يفضّل بعض المضيفين عدم مراسلة الضيوف إلا عند الضرورة، مثل إرسال ملاحظة قصيرة لدى تسجيل الوصول، بينما يستمتع البعض الآخر أيضًا بمقابلة ضيوفهم شخصيًا. ستتوصل إلى تحديد أسلوبك الخاص الملائم لك ولضيوفك",
        ques4: "ما هي النصائح لمن يريد أن يصبح مضيفًا رائعًا على Airbnb؟",
        ans4: "إن أكثر ما يساعد على النجاح هو توفير الأساسيات، مثل المحافظة على نظافة مسكنك، والرد على الضيوف من دون تأخير، وتأمين الميزات الضرورية، كالمناشف الجديدة. يحب بعض المضيفين إضفاء لمسة شخصية، مثل وضع باقة من الزهور أو مشاركة قائمة بالأماكن المحلية التي يمكن اكتشافها، ولكن هذا ليس ضروريًا.",
        ans4_1: "تابع القراءة للحصول على المزيد من نصائح الاستضافة",
        ques5: "ما هي رسوم Airbnb؟",
        ans5: "عادةً ما تستوفي Airbnb رسوم خدمة ثابتة بنسبة 3% من الإجمالي الفرعي للحجز عند الدفع لك. نحصّل أيضًا رسومًا من الضيوف عند قيامهم بالحجز. في العديد من المناطق، تحصّل Airbnb ضرائب المبيعات والسياحة تلقائيًا نيابةً عنك وتدفعها.",
        ans5_1: "معرفة المزيد عن الرسوم",
        still: "هل لا تزال لديك أسئلة؟",
        Getanswer: "احصل على إجابات من مضيف متميز خبير بالقرب منك.",
        Superhost: "أعثر على مضيف متميز",
        Community: "موارد الاستضافة",
        responsibly: "منتدى المجتمع",
        apartment: "الاستضافة بمسؤولية",
        Newsroom: "غرفة الأخبار",
        features: "ميزات جديدة",
        Careers: "الوظائف",
        Investors: "المستثمرون",
        Gift: "طاقات الهدايا",
        emergency: "Airbnb.org للطوارئ",
        Check_in: " وقت اتمام الحجز",
        Check_out: "وقت انتهاء الحجز",
        CheckIn: " وقت اتمام الحجز",
        CheckOut: "وقت انتهاء الحجز",
        Priceper: "سعر الليلة الواحدة",
        gustNumber: " عدد الضيوف",
        Total: "السعر الاجمالي ",
        Reserve: "احجز الان",
        Please1: " من فضلك سجل دخول كي تقوم  بالحجر",
        Please2: "من فضلك  قم ب اخيار الموعد ",
        Cancellation: "خيارات الإلغاء",
        COVID_19: "استجابتنا لكوفيد-19",
        Hosting: "الاستضافة",
        AirCoverhost: "غطاء هوائي للمضيفين",
        Visit: "قم بزيارة منتدى مجتمعنا",
        Howhost: "كيفية الاستضافة بمسؤولية",
        neighbourhood: "الإبلاغ عن مخاوف الحي",
        Admin: "إقامة في المزرعة يستضيفها المشرف",
        guests: "الضيوف",
        bedrooms: "دورات مياة",
        "2bathrooms": "سرير . 2 دورة مياة",
        Everybooking:
          "يتضمن كل حجز حماية مجانية من إلغاءات المضيف وعدم الدقة في الإدراج ومشكلات أخرى مثل مشكلات تسجيل الوصول.",
        offers: "ما الذي يقدمة المكان من عروض",
        GardenView: "إطلالة على الحديقة",
        Waterfront: "الواجهة البحرية",
        Dedicated: "مساحة عمل مخصصة",
        Private: "مسبح خاص",
        Temple: "معبد",
        Night: "الليلة",
        Outdoor: "منظر خارجي",
        Flexiblet: "غرفة مريحة",
        breakfast: "إفطار في الهواء الطلق",
        amienities: "عرض جميع وسائل الراحة الـ 42",
        Pictures: "جميع الصور",
        Cleanliness: "النظافة",
        Communication: "التواصل",
        Checkin: "التحقق من",
        Accuracy: "الدقة",
        Value: "القيمة",
        // start work space
        common: "منطقة مشتركة مزودة بشبكة WiFi ومناسبة تمامًا للعمل.",
        Selfcheck: "تسجيل الوصول الذاتي",
        doorperson: " يمكنك التحقق مع البواب.",
        Great: "موقع رائع ",
        recentguests: "100% من الضيوف الجدد أعطوا الموقع تقييم 5 نجوم.",
        // end work space
        // Start Map
        Showmap: "Show map",
        // End Map
        // Start Total Price
        totalprice: "اجمالي السعر",
        include: "يشمل جميع الرسوم، قبل الضرائب",
        // End Total Price
        // Start option taps
        Filters: "ادوات تنقية",
        Type: "نوعية الامكان",
        Searchrooms: "  غرف البحث، والمنازل بأكملها، أو أي نوع من المكان",
        Anytype: "اي نوعية",
        Room: "غرف",
        Entire: "مدخل للمنزل",
        Pricerange: "قيمة السعر",
        Theaverage: "متوسط ​​سعر الليلة هو 244 دولارًا",
        Entireplace: " أماكن للدخول ",
        yourself: "كل المكان اعد خصيصا لك",
        access:
          "غرفتك الخاصة، بالإضافة إلى إمكانية الوصول إلى المساحات المشتركة",
        Sharedroom: "غرف مشتركة",
        areas: " مساحة للنوم ومناطق مشتركة يمكن مشاركتها مع الآخرين",
        Rooms: "غرف وأسرة",
        Bedrooms: "غرف النوم ",
        Any: "أي شئ",
        Property: "نوع الملكية",
        House: "منزل",
        Apartment: "شقة",
        Guesthouse: "منزل الضيف",
        Hotel: "فندق",
        Accessibility: "ميزات إمكانية الوصول",
        entrance: "مدخل للضيوف ومواقف السيارات",
        "Step-free": "مدخل مجاني للضيوف",
        Accessible: "موقف للسيارات يسهل الوصول اليه ",
        wider: "مدخل الضيوف أوسع من 32 بوصة",
        pathto: "مسار خالي من الخطوات إلى مدخل الضيف",
        Showmore: "رؤية المزيد",
        stays: "البقاء للطبقة العليا",
        Superhos: "مضيف متميز",
        recognized: "البقاء مع المضيفين المعترف بهم",
        recognizedHosts: "البقاء مع المضيفين المعترف بهم",
        AirbnbPlus: "Airbnb المتميز",
        EveryPlus: " تتم مراجعة كل منزل متميز  من حيث الجودة",
        Hostlanguage: "اللغة المضيفة",
        English: "ألانجليزية",
        French: "الفرنسية",
        German: "ألامانية",
        Japanese: "اليابانية",
        Clearall: "امسح الكل",
        Show: "أظهار",

        // =================== End options taps =================

        // ================== Start  Account ================

        Account: "حسابي الشخصي",
        personinfo: "المعلومات الشخصيه",
        goprofile: "  الذهاب الي حسابي ",
        Provide: "تقديم التفاصيل الشخصية وكيف يمكننا الوصول إليك",
        security: "تسجيل الدخول والأمن",
        Update: "قم بتحديث كلمة المرور الخاصة بك وتأمين حسابك",
        payouts: " متابعة المدفوعات ",
        Review: "  قم بمراجعة المدفوعات والعوائد والكوبونات وبطاقات الهدايا",
        Taxes: "الضرائب",
        Manage: "إدارة معلومات دافعي الضرائب والمستندات الضريبية",
        contacted: "اختر تفضيلات الإشعارات وكيف تريد أن يتم الاتصال بك",
        sharing: "الخصوصية والمشاركة",
        settings:
          "إدارة بياناتك الشخصية والخدمات المتصلة وإعدادات مشاركة البيانات",
        Global: "التفضيلات العالمية",
        timezone: " ",
        Travel: "قم بتعيين اللغة الافتراضية والعملة والمنطقة الزمنية",
        benefits: "أضف بريدًا إلكترونيًا للعمل للحصول على مزايا رحلة العمل",
        Professional: "أدوات الاستضافة الاحترافية",
        several:
          " Airbnb احصل على أدوات احترافية إذا كنت تدير العديد من العقارات على ",
        Referral: "الرصيد والقسائم المجانية",
        referral: "لديك رصيد إحالة وقسيمة بقيمة 0 دولار. يتعلم أكثر.",
        Need: "هل تحتاج إلى تعطيل حسابك؟",
        care: "اعتني بذلك الآن",
        Profile: "حسابي الشخصي",
        yourplace: "Airbnb مكانك",
        simple: "من السهل الإعداد والبدء في تحقيق الربح.",
        Personalinfo: "المعلومات الشخصية",
        Hosthome: "استضافة منزل",
        Visitthe: "تفضل بزيارة مركز المساعدة",
        safety: "احصل على مساعدة بشأن مشكلة تتعلق بالسلامة",
        neihborhood: "الإبلاغ عن مخاوف الحي",
        works: "كيف يعمل موقع Airbnb",
        USD: "الولايات المتحده الامريكيه",
        Terms: "شروط الخدمة",
        Poilcy: "سياسة الخصوصية",
        Choices: "خيارات الخصوصية الخاصة بك",
        reserved: "© 2023 Airbnb, Inc. جميع الحقوق محفوظة.",

        // ================== End  Account ================

        // ================== Start  Account GlobalREf ================

        preferences: "التفضيلات العالمية",
        Preferred: "اللغة المفضلة",
        Edit: "تعديل",
        currency: "العملة المفضلة",
        Timezone: "المنطقة الجغرافية",
        global: "تفضيلاتك العالمية",
        payoutsin:
          "قم بتغيير كيفية حصولك على الدفعات في تفضيلات الدفعات والعوائد الخاصة بك.",

        // ================== End  Account GlobalREf  ================

        // ================== Start  Account Login And Security  ================

        REQUSETS: "طلبات تسجيل الدخول",
        ACCESS: "الوصول المشترك",
        Password: "كلمة المرور",
        updated: "آخر تحديث منذ 22 يومًا",
        Updat: "تحديث",
        Social: "    وسائل التواصل ",
        Facebook: "فيس بوك ",
        Not: "غير متصل ",
        Connect: "متصل",
        Google: "جوجل",
        Connected: "متصل",
        Disonnect: "غير متصل ",
        history: "تاريخ الجهاز",
        Session: "الجلسة",
        device: "الخروج من جميع الاجهزة",
        secure: "لنجعل حسابك أكثر أمانًا",
        securitya: "أمان حسابك:",
        increase:
          "نحن نعمل دائمًا على إيجاد طرق لزيادة السلامة في مجتمعنا. ولهذا السبب نقوم بفحص كل حساب للتأكد من أنه آمن قدر الإمكان.",
        Improve: "يحسن",
        Deact: "  الغاء تفعيل حسابك",
        Deactivate: "تفعيل",
        req: "طلبات تسجيل الدخول",
        members:
          "قد يتعين على أعضاء الفريق إدخال رمز التحقق عند تسجيل الدخول إلى هذا الحساب لأول مرة. الموافقة على طلبات تسجيل الدخول الخاصة بهم أو رفضها على هذه الصفحة.",
        Pending: "الطلبات المعلقة",
        Approved: "الطلبات الموافق عليها",
        Satisfied: "طلبات مستوفاة",
        Declined: "طلبات ملغاة",
        Keep: "حافظ علي امان حسابك",
        Hackers:
          "قم بالرد فقط على طلبات الأشخاص الذين تعرفهم. قد يرغب المتسللون في الوصول إلى حسابك عن طريق محاكاة البريد الإلكتروني لأحد أعضاء الفريق.",
        accesss: "الوصول المشترك",
        Reviews:
          "قم بمراجعة كل طلب بعناية قبل الموافقة على الوصول. سنرسل إلى موظفك أو زميلك في العمل رمزًا مكونًا من 4 أرقام يتيح له تسجيل الدخول إلى حسابك باستخدام جهازه الموثوق به.",
        devices: "إضافة أجهزة من الأشخاص الذين تثق بهم",
        someone:
          "عندما توافق على طلب ما، فإنك تمنح شخصًا ما حق الوصول الكامل إلى حسابك. سيكون بإمكانهم تغيير الحجوزات وإرسال الرسائل نيابةً عنك.",

        // ================== End  Account Login And Security   ================

        // ================== Start  Account Notification   ================

        Notifications: "إشعارات",
        Offe: "      العروض والتحديثات ",
        offerss: "نصائح وعروض السفر  ",
        personalized:
          "ألهم رحلتك القادمة من خلال التوصيات الشخصية والعروض الخاصة.",
        Inspiration: "الإلهام والعروض",
        OnEmail: "على البريد الإلكتروني",
        planning: "تخطيط الرحلة",
        Accupdates: "تحديثات Airbnb   ",
        latestnews:
          "  ابق على اطلاع على آخر الأخبار من Airbnb، وأخبرنا كيف يمكننا تحسين ذلك.",
        programs: "الأخبار والبرامج",
        Feedback: "تعليق",
        regulations: "لوائح السفر ",
        policies: " نشاط الحساب وسياساته",
        bookings: "أكد حجزك ونشاط حسابك، وتعرف على سياسات Airbnb المهمة.",
        activitys: "نشاط الحساب ",
        Guestsl: "سياسات الضيف ",
        reminder: "احصل على تذكيرات مهمة حول حجوزاتك وقوائمك ونشاط حسابك.",
        Reminders: "التذكيرات",
        SMS: "On:البريد الإلكتروني والرسائل النصية القصيرة ",
        Guestl: "رسائل الضيف والمضيف",
        befores: " ابق على اتصال مع مضيفك أو ضيوفك قبل وأثناء رحلتك.",

        // ================== End  Account Notification  ================

        // ================== Start  Account PaymentsAndPayouts  ================

        pp: "المدفوعات والمدفوعات ",
        Paymentsr: "المدفوعات",
        Payoutsx: "الدفعات",
        Yourh: "المدفوعات الخاصة بك  ",
        refunds: "تتبع جميع المدفوعات والمبالغ المستردة.",
        Manageg: "إدارة المدفوعات ",
        methodsg: "طرق الدفع",
        planningg:
          " أضف طريقة دفع باستخدام نظام الدفع الآمن الخاص بنا، ثم ابدأ التخطيط لرحلتك القادمة.",
        payments: "إضافة طريقة الدفع ",
        gift: "رصيد هدايا Airbnb    ",
        card: "إضافة بطاقة هدية",
        Coupons: "كوبونات",
        Your: "كوبونات الخاص بك ",
        Addd: "اضافة كوبون",
        through: "قم بإجراء جميع المدفوعات من خلال Airbnb ",
        Always:
          " ادفع دائمًا وتواصل عبر Airbnb للتأكد من أنك محمي بموجب قوانيننا",
        of: "ادفع دائمًا وتواصل عبر Airbnb للتأكد من أنك محمي بموجب قوانيننا",
        safeguards: "والإلغاء والضمانات الأخرى",
        How: "كيف سيتم الدفع لك ",
        we: "أضف طريقة دفع واحدة على الأقل حتى نعرف إلى أين نرسل أموالك.",
        Set: "إعداد المدفوعات ",
        Neede: "تحتاج مساعدة؟",
        payoute: "عندما سوف تحصل على دفع تعويضاتك",
        payoutsl: "كيف تعمل الدفعات",
        transaction: "انتقل إلى سجل المعاملات الخاصة بك",

        // ================== End  Account PaymentsAndPayouts  ================

        // ================== Start  PersonalInfo  ================

        " Personalinfo": "المعلومات الشخصية ",
        Personal: " معلومات شخصية",
        Legal: "الاسم القانوني ",
        address: "عنوان البريد الإلكتروني",
        Add: "اضافه",
        dit: "تعديل",
        Phone: "رقم الهاتف المحمول  :",
        confirmed:
          "أضف رقمًا حتى يتمكن الضيوف المؤكدين وAirbnb من التواصل. يمكنك إضافة أرقام أخرى واختيار كيفية استخدامها.",
        Government: "الرقم القومي ",
        provided: "غير مزود",
        Address: "العنوان",
        Emergency: "الاتصال بالطوارىء",
        Why: "لماذا لا تظهر معلوماتي هنا؟",
        hiding: "نحن نخفي بعض تفاصيل الحساب لحماية هويتك.",
        Which: "ما هي التفاصيل التي يمكن تحريرها؟",
        edited:
          "يمكن تعديل معلومات الاتصال والتفاصيل الشخصية. إذا تم استخدام هذه المعلومات للتحقق من هويتك، فستحتاج إلى التحقق منها مرة أخرى في المرة التالية التي تقوم فيها بالحجز - أو لمواصلة الاستضافة.",
        others: "ما هي المعلومات التي تتم مشاركتها مع الآخرين؟",
        releases:
          " لا تقوم Airbnb بإصدار معلومات الاتصال الخاصة بالمضيفين والضيوف إلا بعد تأكيد الحجز.",

        // ================== End  PersonalInfo  ================

        // ================== Start  PrivacyAndSharing  ================

        Data: "بيانات",
        Sharingg: "مشاركة",
        Services: "خدمات",
        Manageng: "إدارة بيانات حسابك",
        download:
          "   يمكنك تقديم طلب لتنزيل بياناتك الشخصية أو حذفها من Airbnb.",
        yourf: "اطلب بياناتك الشخصية  ",
        filex: "  سنقوم بإنشاء ملف لك لتنزيل بياناتك الشخصية.",
        Delete: "احذف حسابك",
        applicable:
          "سيؤدي هذا إلى حذف حسابك وبياناتك نهائيًا، وفقًا للقانون المعمول به.",
        Committed: "ملتزمون بالخصوصية",
        keeping:
          " تلتزم Airbnb بالحفاظ على حماية بياناتك. انظر التفاصيل في موقعنا",
        xll: " سياسة الخصوصية.",
        Activitys: "مشاركة النشاط ",
        Decide: "قرر كيفية ظهور ملفك الشخصي ونشاطك للآخرين.",
        enginesx: "تضمين ملفي الشخصي وقائمتي في محركات البحث",
        like: " ويعني تشغيل هذا أن محركات البحث، مثل Google، ستعرض ملفك الشخصي وصفحات القائمة في نتائج البحث.",
        Receipts: "قراءة الإيصالات",
        on: "عند تشغيل هذا الخيار، سنظهر للأشخاص أنك قرأت رسائلهم.",
        sss: "الخدمات المتصلة",
        zzz: "اعرض الخدمات التي قمت بربطها بحسابك على Airbnb",
        non: "لا توجد خدمات متصلة في الوقت الراهن",

        // ================== End  PersonalInfo  ================

        // ================== Start  Taxes  ================

        Taxpayers: "دافعي الضرائب",
        Tax: "المستندات الضريبية",
        Taxpayerx: "معلومات دافعي الضرائب",
        most: " المعلومات الضريبية مطلوبة في معظم البلدان/المناطق.",
        tax: "أضف معلومات ضريبية",
        VAT: "ضريبة القيمة المضافة (VAT) ",
        VATregistered:
          " إذا كنت مسجلاً في ضريبة القيمة المضافة، فيرجى إضافة معرف ضريبة القيمة المضافة الخاص بك.",
        ad: "أضف رقم معرف ضريبة القيمة المضافة ",
        bn: "تحتاج مساعدة؟",
        answers: "احصل على إجابات للأسئلة المتعلقة بالضرائب في موقعنا ",
        filing:
          "المستندات الضريبية المطلوبة لتقديم الضرائب متاحة للمراجعة والتنزيل هنا. ",
        also: " يمكنك أيضًا تقديم الضرائب باستخدام معلومات الأرباح التفصيلية المتوفرة في",
        earnings: " ملخص الأرباح.",
        issued: "لم يتم إصدار مستند ضريبي ",
        lll: "بالنسبة للمستندات الضريبية الصادرة قبل عام 2019",
        us: "اتصل بنا.",
        Get: "احصل على إجابات للأسئلة المتعلقة بالضرائب في موقعنا",

        // ================== End    Taxes  ================

        reviews: "المراجعات",
        aaaa: "أين ستكون",
        ShowMore: "رؤية المزيد",
        "": "",
      },
    },
  },
  // @ts-ignore
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
});

export default i18n;
