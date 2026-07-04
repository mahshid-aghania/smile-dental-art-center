import type { ClusterPost } from "./types";

const SERVICE_SERVICES = { title: "Our Dental Services in Markham", href: "/dental-services" };
const SERVICE_BOOK = { title: "Request an Appointment", href: "/appointments" };
const SERVICE_CONTACT = { title: "Contact Smile Dental Arts Centre", href: "/contact" };

export const PILLAR_EMERGENCY: ClusterPost[] = [
  {
    id: 125,
    slug: "dental-emergency-markham-what-to-do",
    title: "Dental Emergency in Markham: What to Do Right Now",
    seoTitle: "Dental Emergency in Markham: What to Do Right Now",
    metaDescription:
      "Facing a dental emergency in Markham? Step-by-step guidance on what to do right now and when to seek urgent care. Dentist-reviewed.",
    primaryKeyword: "emergency dentist Markham",
    pillar: "Emergency & Local",
    excerpt:
      "A calm, step-by-step guide to handling a dental emergency in Markham — what counts as urgent and what to do while you get help.",
    intro: [
      "A dental emergency can be frightening, and it is hard to think clearly when you are in pain or looking at a damaged tooth. Knowing what to do in the first few minutes can make a real difference to the outcome.",
      "This guide walks you through what counts as a dental emergency, the immediate steps to take, and when to seek an emergency dentist in Markham right away.",
    ],
    sections: [
      {
        heading: "What counts as a dental emergency?",
        blocks: [
          {
            type: "p",
            text: "Not every dental problem is an emergency, but some need prompt attention. Situations that usually warrant urgent care include severe or worsening tooth pain, a knocked-out tooth, significant bleeding, swelling in the mouth or face, and a broken tooth causing pain.",
          },
          {
            type: "p",
            text: "If you are unsure whether your situation is urgent, it is always best to call your dentist for guidance rather than wait and hope it improves.",
          },
        ],
      },
      {
        heading: "Immediate steps to take",
        blocks: [
          {
            type: "ul",
            items: [
              "**Stay calm** and assess what has happened.",
              "**For pain**, rinse gently with warm water and use a cold compress on the outside of the cheek to reduce swelling.",
              "**For bleeding**, apply gentle pressure with clean gauze.",
              "**For a knocked-out tooth**, handle it by the crown, not the root, and keep it moist — our guide on [first aid for a knocked-out tooth](/blog/chipped-vs-knocked-out-tooth) explains exactly how.",
              "**Contact your dentist** as soon as possible to describe the situation and get seen.",
            ],
          },
        ],
      },
      {
        heading: "When to seek urgent help",
        blocks: [
          {
            type: "p",
            text: "Some symptoms need immediate attention. Facial swelling that affects breathing or swallowing, uncontrolled bleeding, or trauma to the face may require a hospital emergency department rather than a dental office. When in doubt, seek emergency medical care first.",
          },
          {
            type: "p",
            text: "For dental-specific emergencies, contacting a dentist quickly gives you the best chance of saving a tooth and relieving pain. Knowing whether your practice offers [weekend or after-hours care](/blog/weekend-dentist-markham) ahead of time is helpful.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is considered a dental emergency?",
        answer:
          "Severe tooth pain, a knocked-out tooth, significant bleeding, facial swelling, and a painful broken tooth are common dental emergencies. If you are unsure, call your dentist for guidance.",
      },
      {
        question: "What should I do while waiting to see an emergency dentist?",
        answer:
          "Rinse gently with warm water, use a cold compress for swelling, apply gentle pressure to stop bleeding, and keep a knocked-out tooth moist. Contact your dentist as soon as possible.",
      },
      {
        question: "When should I go to the hospital instead of the dentist?",
        answer:
          "Seek emergency medical care for facial swelling that affects breathing or swallowing, uncontrolled bleeding, or significant facial trauma. For tooth-specific problems, contact a dentist promptly.",
      },
    ],
    relatedSlugs: ["chipped-vs-knocked-out-tooth", "weekend-dentist-markham", "new-patient-first-visit-guide"],
    serviceLinks: [SERVICE_CONTACT, SERVICE_BOOK],
  },
  {
    id: 126,
    slug: "chipped-vs-knocked-out-tooth",
    title: "Chipped Tooth vs. Knocked-Out Tooth: First Aid Steps",
    seoTitle: "Chipped vs. Knocked-Out Tooth: First Aid Steps",
    metaDescription:
      "First aid for a chipped or knocked-out tooth — what to do in the first minutes to protect your smile. Dentist-reviewed guide for Markham.",
    primaryKeyword: "emergency dentist near me",
    pillar: "Emergency & Local",
    excerpt:
      "The first few minutes matter. Here is exactly what to do for a chipped tooth versus a knocked-out tooth before you reach a dentist.",
    intro: [
      "Tooth injuries happen in an instant — a sports collision, a fall, or biting down on something hard. What you do in the minutes that follow can make the difference between saving and losing a tooth.",
      "This guide explains the first-aid steps for two common injuries, a chipped tooth and a knocked-out tooth, and when to find an emergency dentist near you.",
    ],
    sections: [
      {
        heading: "First aid for a chipped or cracked tooth",
        blocks: [
          {
            type: "ul",
            items: [
              "**Rinse your mouth** with warm water to clean the area.",
              "**Save any pieces** of the tooth if you can, and keep them moist.",
              "**Use a cold compress** on the outside of the cheek to reduce swelling.",
              "**Cover a sharp edge** with dental wax or sugar-free gum to protect your tongue and cheek.",
              "**See a dentist** promptly to assess the damage and discuss repair options.",
            ],
          },
          {
            type: "p",
            text: "For longer-term repair choices once the emergency is handled, our guide on [fixing chipped or cracked teeth](/blog/how-to-fix-chipped-cracked-teeth) covers bonding, veneers, and crowns.",
          },
        ],
      },
      {
        heading: "First aid for a knocked-out tooth",
        blocks: [
          {
            type: "p",
            text: "A knocked-out permanent tooth is a true emergency, and acting fast matters. Pick up the tooth by the crown (the top), never the root. Gently rinse it if it is dirty, but do not scrub it. If possible, place it back in the socket and hold it there. If you cannot, keep it moist in milk or in your cheek pouch, and see a dentist immediately — ideally within the hour.",
          },
        ],
      },
      {
        heading: "Why speed matters",
        blocks: [
          {
            type: "p",
            text: "For a knocked-out tooth, the chances of successful re-implantation are highest when it is treated within about an hour. This is why knowing how to reach an emergency dentist quickly — and understanding what to do right now — is so important.",
          },
          {
            type: "p",
            text: "If you are ever unsure how serious an injury is, our overview of [what to do in a dental emergency](/blog/dental-emergency-markham-what-to-do) can help you decide your next step.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What should I do if my tooth gets knocked out?",
        answer:
          "Pick it up by the crown, not the root, rinse gently without scrubbing, and try to place it back in the socket. If you can't, keep it moist in milk or your cheek and see a dentist within the hour.",
      },
      {
        question: "Is a chipped tooth an emergency?",
        answer:
          "A small chip may not be urgent, but a large chip with pain, bleeding, or a sharp edge should be seen promptly. Save any pieces, protect the area, and contact your dentist.",
      },
      {
        question: "How quickly do I need to see a dentist for a knocked-out tooth?",
        answer:
          "As soon as possible, ideally within an hour. The sooner the tooth is treated, the better the chance it can be successfully re-implanted.",
      },
    ],
    relatedSlugs: ["dental-emergency-markham-what-to-do", "weekend-dentist-markham", "how-to-fix-chipped-cracked-teeth"],
    serviceLinks: [SERVICE_CONTACT, SERVICE_BOOK],
  },
  {
    id: 127,
    slug: "weekend-dentist-markham",
    title: "Do You Need a Dentist Open on Weekends in Markham?",
    seoTitle: "Weekend Dentist in Markham: Do You Need One?",
    metaDescription:
      "When weekend and after-hours dental care matters in Markham, and how to plan ahead for emergencies. Dentist-reviewed guide.",
    primaryKeyword: "emergency dentist Markham",
    pillar: "Emergency & Local",
    excerpt:
      "Weekend dental problems are stressful. Here is when after-hours care matters and how to be prepared before an emergency strikes.",
    intro: [
      "Dental problems have a way of appearing at the most inconvenient times — often on a Saturday or a holiday when many offices are closed. That can leave you wondering where to turn.",
      "This article looks at when you might need a weekend or after-hours dentist in Markham, and how to plan ahead so a dental emergency is less stressful.",
    ],
    sections: [
      {
        heading: "When weekend care matters",
        blocks: [
          {
            type: "p",
            text: "Some dental issues can safely wait until the next business day, while others should not. Severe pain, a knocked-out tooth, significant swelling, or uncontrolled bleeding are situations where waiting is not ideal, and access to prompt care becomes important.",
          },
          {
            type: "p",
            text: "Understanding [what counts as a dental emergency](/blog/dental-emergency-markham-what-to-do) helps you judge whether you need to be seen right away or can book a regular appointment.",
          },
        ],
      },
      {
        heading: "How to plan ahead",
        blocks: [
          {
            type: "ul",
            items: [
              "**Know your dentist's hours** and whether they offer after-hours or emergency contact.",
              "**Keep the clinic's phone number** saved and easy to find.",
              "**Understand the basics of dental first aid** before an emergency happens.",
              "**Ask about emergency policies** when you register as a new patient.",
            ],
          },
          {
            type: "p",
            text: "A little preparation goes a long way. If you are choosing a new practice, it is worth asking about emergency availability — something we cover in our [new patient guide](/blog/new-patient-first-visit-guide).",
          },
        ],
      },
      {
        heading: "What to do if you can't reach a dentist",
        blocks: [
          {
            type: "p",
            text: "If you cannot reach a dentist and your symptoms are severe — such as swelling affecting breathing or swallowing, or significant facial trauma — go to a hospital emergency department. For less severe issues, follow basic first aid and contact your dentist as soon as they reopen.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Are weekend dental emergencies common?",
        answer:
          "Dental emergencies can happen at any time, including weekends and holidays. Knowing your dentist's hours and emergency policy ahead of time makes these situations less stressful.",
      },
      {
        question: "What should I do if I have a dental emergency when my dentist is closed?",
        answer:
          "Follow basic first aid, contact your dentist's emergency line if available, and for severe symptoms like swelling affecting breathing or major trauma, go to a hospital emergency department.",
      },
      {
        question: "How can I prepare for a possible dental emergency?",
        answer:
          "Save your dentist's number, learn basic dental first aid, and ask about after-hours or emergency policies when you register. Preparation helps you act quickly when it matters.",
      },
    ],
    relatedSlugs: ["dental-emergency-markham-what-to-do", "chipped-vs-knocked-out-tooth", "new-patient-first-visit-guide"],
    serviceLinks: [SERVICE_CONTACT, SERVICE_BOOK],
  },
  {
    id: 128,
    slug: "dentist-in-unionville-local-guide",
    title: "Dentist in Unionville: Local Guide to Choosing a Practice",
    seoTitle: "Dentist in Unionville: Local Guide to Choosing a Practice",
    metaDescription:
      "A local guide to choosing a dentist near Unionville and Markham — what to look for and questions to ask. Dentist-reviewed.",
    primaryKeyword: "dentist in Unionville",
    pillar: "Emergency & Local",
    excerpt:
      "Choosing a dentist near Unionville? A practical local guide to the qualities and questions that help you find the right fit.",
    intro: [
      "Unionville is one of Markham's most beloved communities, and finding a nearby dental practice that fits your family's needs makes ongoing care much easier. But with several options in the area, how do you choose?",
      "This local guide covers what to look for in a dentist near Unionville, the questions worth asking, and why convenience and comfort matter for long-term oral health.",
    ],
    sections: [
      {
        heading: "Why location and convenience matter",
        blocks: [
          {
            type: "p",
            text: "A conveniently located dentist is a dentist you are more likely to visit regularly. When a practice is close to home or work in the Unionville and Markham area, it is easier to keep up with checkups and cleanings, which are the foundation of preventive care.",
          },
        ],
      },
      {
        heading: "What to look for in a local practice",
        blocks: [
          {
            type: "ul",
            items: [
              "**A full range of services**, so most of your care can happen in one place.",
              "**Care for all ages**, which is ideal for families.",
              "**A comfortable, welcoming environment**, especially if you or a family member feels nervous.",
              "**Clear communication** about treatment and costs.",
              "**Convenient hours** and an accessible location.",
            ],
          },
          {
            type: "p",
            text: "If you are caring for children as well as adults, our guide on [finding the right family dentist in Markham](/blog/finding-family-dentist-markham) goes deeper into what makes a great fit for the whole household.",
          },
        ],
      },
      {
        heading: "Questions to ask before you commit",
        blocks: [
          {
            type: "p",
            text: "Before choosing a practice, consider asking about the services offered, how emergencies are handled, what the office does to keep nervous patients comfortable, and how they explain treatment options and fees. A short consultation is a great way to see whether a practice feels right for you.",
          },
          {
            type: "p",
            text: "To learn what sets our practice apart, see [what makes Smile Dental Arts Centre different](/blog/what-makes-smile-dental-different).",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How do I choose a dentist near Unionville?",
        answer:
          "Look for a convenient location, a full range of services, care for all ages, a comfortable environment, and clear communication. A consultation helps you decide whether a practice is the right fit.",
      },
      {
        question: "Why does a dentist's location matter?",
        answer:
          "A conveniently located dentist makes it easier to keep up with regular checkups and cleanings, which are essential for preventing dental problems over the long term.",
      },
      {
        question: "What questions should I ask a new dental practice?",
        answer:
          "Ask about the services offered, how emergencies are handled, what they do to keep nervous patients comfortable, and how they explain treatment options and costs.",
      },
    ],
    relatedSlugs: ["what-makes-smile-dental-different", "new-patient-first-visit-guide", "dental-emergency-markham-what-to-do"],
    serviceLinks: [SERVICE_SERVICES, SERVICE_BOOK],
  },
  {
    id: 129,
    slug: "what-makes-smile-dental-different",
    title: "What Makes Smile Dental Arts Centre Different",
    seoTitle: "What Makes Smile Dental Arts Centre Different",
    metaDescription:
      "Get to know Smile Dental Arts Centre in Markham — our patient-first approach, range of care, and welcoming environment.",
    primaryKeyword: "Markham dentist",
    pillar: "Emergency & Local",
    excerpt:
      "A friendly introduction to Smile Dental Arts Centre — our approach to comfortable, patient-first dentistry in Markham.",
    intro: [
      "Choosing a dental practice is a personal decision. Beyond the services offered, you want a team that listens, explains clearly, and helps you feel comfortable at every visit.",
      "Here is a look at the approach behind Smile Dental Arts Centre in Markham, led by Dr. Neda Kadivar, and what we focus on to make dental care a positive experience.",
    ],
    sections: [
      {
        heading: "A patient-first approach",
        blocks: [
          {
            type: "p",
            text: "We believe good dentistry starts with listening. Understanding your goals, concerns, and questions allows us to recommend care that genuinely fits your needs. We take time to explain options clearly, so you can make informed decisions about your own health without pressure.",
          },
        ],
      },
      {
        heading: "Comprehensive care in Markham",
        blocks: [
          {
            type: "p",
            text: "From routine checkups and cleanings to cosmetic and restorative treatments, our goal is to care for a wide range of needs under one roof. That means less running around and more continuity for you and your family.",
          },
          {
            type: "ul",
            items: [
              "[Family and preventive dentistry](/blog/finding-family-dentist-markham) for every age.",
              "[Cosmetic options](/blog/smile-makeover-treatment-plan) like whitening, veneers, and bonding.",
              "[Tooth replacement](/blog/dental-implants-vs-dentures-markham) with implants and dentures.",
              "[Clear aligner treatment](/blog/invisalign-markham-cost-timeline) with Invisalign.",
            ],
          },
        ],
      },
      {
        heading: "Comfort and communication",
        blocks: [
          {
            type: "p",
            text: "We know dental visits can feel stressful for some patients, so we focus on creating a calm, welcoming environment. Clear communication, a gentle approach, and a friendly team all help make appointments easier — whether it is your first visit or a return for ongoing care.",
          },
          {
            type: "p",
            text: "New to the practice? Our [new patient guide](/blog/new-patient-first-visit-guide) walks you through exactly what to expect at your first visit.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Where is Smile Dental Arts Centre located?",
        answer:
          "Smile Dental Arts Centre is a dental practice in Markham, Ontario, led by Dr. Neda Kadivar, offering care for patients throughout the Markham and Unionville area.",
      },
      {
        question: "What services does Smile Dental Arts Centre offer?",
        answer:
          "The practice offers a wide range of care, including family and preventive dentistry, cosmetic treatments, tooth replacement with implants and dentures, and clear aligner treatment.",
      },
      {
        question: "Is the practice good for nervous patients?",
        answer:
          "Yes. The team focuses on a calm, welcoming environment with clear communication and a gentle approach to help nervous patients feel more at ease.",
      },
    ],
    relatedSlugs: ["dentist-in-unionville-local-guide", "new-patient-first-visit-guide", "finding-family-dentist-markham"],
    serviceLinks: [SERVICE_SERVICES, SERVICE_BOOK],
  },
  {
    id: 130,
    slug: "new-patient-first-visit-guide",
    title: "New Patient Guide: What to Expect at Your First Visit",
    seoTitle: "New Patient Guide: What to Expect at Your First Visit",
    metaDescription:
      "What to expect at your first dental visit as a new patient in Markham — from paperwork to exam to next steps. Dentist-reviewed.",
    primaryKeyword: "dentist in Markham",
    pillar: "Emergency & Local",
    excerpt:
      "New to the practice? Here is a friendly walkthrough of what happens at your first dental visit and how to prepare.",
    intro: [
      "Starting with a new dentist can feel a little uncertain, especially if it has been a while since your last visit. Knowing what to expect ahead of time makes that first appointment far more relaxed.",
      "This guide walks you through what happens at a first dental visit as a new patient in Markham, from the initial paperwork to the exam and your personalized plan.",
    ],
    sections: [
      {
        heading: "Before your appointment",
        blocks: [
          {
            type: "p",
            text: "Your first visit usually begins with some paperwork about your medical and dental history. Arriving a little early to complete this, and bringing your insurance information and a list of any medications, helps everything go smoothly. It is also a good time to jot down any questions or concerns you want to raise.",
          },
        ],
      },
      {
        heading: "During the exam",
        blocks: [
          {
            type: "p",
            text: "A first visit typically includes a thorough examination of your teeth, gums, and mouth, and often X-rays to give a complete picture of your oral health. Your dentist will discuss what they find, answer your questions, and talk through any recommended treatment. A cleaning may be part of the same visit or scheduled separately.",
          },
          {
            type: "p",
            text: "Keeping up with [regular cleanings](/blog/how-often-dental-cleaning) after this first appointment is the best way to maintain your results.",
          },
        ],
      },
      {
        heading: "Your personalized plan",
        blocks: [
          {
            type: "p",
            text: "After the exam, your dentist will outline a plan tailored to your needs and goals, whether that is simply maintaining good health or addressing specific concerns. You will have the chance to ask about options, timelines, and costs, so you leave with a clear understanding of your next steps.",
          },
          {
            type: "p",
            text: "To learn more about our approach before you arrive, see [what makes Smile Dental Arts Centre different](/blog/what-makes-smile-dental-different).",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What should I bring to my first dental appointment?",
        answer:
          "Bring your insurance information, a list of any medications, and your medical and dental history. Arriving a little early to complete paperwork helps the visit go smoothly.",
      },
      {
        question: "What happens at a first dental visit?",
        answer:
          "A first visit usually includes a thorough exam of your teeth and gums, often X-rays, a discussion of findings, and a personalized plan. A cleaning may be included or scheduled separately.",
      },
      {
        question: "How long does a first dental visit take?",
        answer:
          "It varies, but a comprehensive first visit often takes longer than a routine appointment because of the paperwork, full exam, and discussion of your care plan.",
      },
    ],
    relatedSlugs: ["what-makes-smile-dental-different", "dentist-in-unionville-local-guide", "finding-family-dentist-markham"],
    serviceLinks: [SERVICE_SERVICES, SERVICE_BOOK],
  },
];
