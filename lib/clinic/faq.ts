export type FaqContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type DentalFaqItem = {
  question: string;
  blocks: FaqContentBlock[];
};

export const DENTAL_FAQ_HEADING = "FAQ";
export const DENTAL_FAQ_SUBHEADING = "Dental FAQ";

export const DENTAL_FAQ_ITEMS: DentalFaqItem[] = [
  {
    question: "What should I do if I have bad breath?",
    blocks: [
      {
        type: "paragraph",
        text: "Bad breath (halitosis) can be an unpleasant and embarrassing condition. Many of us may not realize that we have bad breath, but everyone has it from time to time, especially in the morning.",
      },
      {
        type: "paragraph",
        text: "There are various reasons one may have bad breath, but in healthy people, the major reason is due to microbial deposits on the tongue, especially the back of the tongue. Some studies have shown that simply brushing the tongue reduced bad breath by as much as 70 percent.",
      },
      { type: "heading", text: "What may cause bad breath?" },
      {
        type: "list",
        items: [
          "Morning time – Saliva flow almost stops during sleep and its reduced cleansing action allows bacteria to grow, causing bad breath.",
          "Certain foods – Garlic, onions, etc. Foods containing odor-causing compounds enter the blood stream; they are transferred to the lungs, where they are exhaled.",
          "Poor oral hygiene habits – Food particles remaining in the mouth promote bacterial growth.",
          "Periodontal (gum) disease – Colonies of bacteria and food debris residing under inflamed gums.",
          "Dental cavities and improperly fitted dental appliances – May also contribute to bad breath.",
          "Dry mouth (Xerostomia) – May be caused by certain medications, salivary gland problems, or continuous mouth breathing.",
          "Tobacco products – Dry the mouth, causing bad breath.",
          "Dieting – Certain chemicals called ketones are released in the breath as the body burns fat.",
          "Dehydration, hunger, and missed meals – Drinking water and chewing food increases saliva flow and washes bacteria away.",
          "Certain medical conditions and illnesses – Diabetes, liver and kidney problems, chronic sinus infections, bronchitis, and pneumonia are several conditions that may contribute to bad breath.",
        ],
      },
      {
        type: "paragraph",
        text: "Keeping a record of what you eat may help identify the cause of bad breath. Also, review your current medications, recent surgeries, or illnesses with you dentist.",
      },
      { type: "heading", text: "What can I do to prevent bad breath?" },
      {
        type: "list",
        items: [
          "Practice good oral hygiene – Brush at least twice a day with an ADA approved fluoride toothpaste and toothbrush. Floss daily to remove food debris and plaque from in between the teeth and under the gumline. Brush or use a tongue scraper to clean the tongue and reach the back areas. Replace your toothbrush every 2 to 3 months. If you wear dentures or removable bridges, clean them thoroughly and place them back in your mouth in the morning.",
          "See your dentist regularly – Get a check-up and cleaning at least twice a year. If you have or have had periodontal disease, your dentist will recommend more frequent visits.",
          "Stop smoking/chewing tobacco – Ask your dentist what they recommend to help break the habit.",
          "Drink water frequently – Water will help keep your mouth moist and wash away bacteria.",
          "Use mouthwash/rinses – Some over-the-counter products only provide a temporary solution to mask unpleasant mouth odor. Ask your dentist about antiseptic rinses that not only alleviate bad breath, but also kill the germs that cause the problem.",
        ],
      },
      {
        type: "paragraph",
        text: "In most cases, your dentist can treat the cause of bad breath. If it is determined that your mouth is healthy, but bad breath is persistent, your dentist may refer you to your physician to determine the cause of the odor and an appropriate treatment plan.",
      },
    ],
  },
  {
    question: "How often should I brush and floss?",
    blocks: [
      {
        type: "paragraph",
        text: "Brushing and flossing help control the plaque and bacteria that cause dental disease.",
      },
      {
        type: "paragraph",
        text: "Plaque is a film of food debris, bacteria, and saliva that sticks to the teeth and gums. The bacteria in plaque convert certain food particles into acids that cause tooth decay. Also, if plaque is not removed, it turns into calculus (tartar). If plaque and calculus are not removed, they begin to destroy the gums and bone, causing periodontal (gum) disease.",
      },
      {
        type: "paragraph",
        text: "Plaque formation and growth is continuous and can only be controlled by regular brushing, flossing, and the use of other dental aids.",
      },
      { type: "heading", text: "Toothbrushing" },
      {
        type: "paragraph",
        text: "Brush your teeth at least twice a day (especially before going to bed at night) with an ADA approved soft bristle brush and toothpaste.",
      },
      {
        type: "list",
        items: [
          "Brush at a 45 degree angle to the gums, gently using a small, circular motion, ensuring that you always feel the bristles on the gums.",
          "Brush the outer, inner, and biting surfaces of each tooth.",
          "Use the tip of the brush head to clean the inside front teeth.",
          "Brush your tongue to remove bacteria and freshen your breath.",
        ],
      },
      {
        type: "paragraph",
        text: "Electric toothbrushes are also recommended. They are easy to use and can remove plaque efficiently. Simply place the bristles of the electric brush on your gums and teeth and allow the brush to do its job, several teeth at a time.",
      },
      { type: "heading", text: "Flossing" },
      {
        type: "paragraph",
        text: "Daily flossing is the best way to clean between the teeth and under the gumline. Flossing not only helps clean these spaces, it disrupts plaque colonies from building up, preventing damage to the gums, teeth, and bone.",
      },
      {
        type: "list",
        items: [
          "Take 12-16 inches (30-40cm) of dental floss and wrap it around your middle fingers, leaving about 2 inches (5cm) of floss between the hands.",
          "Using your thumbs and forefingers to guide the floss, gently insert the floss between teeth using a sawing motion.",
          "Curve the floss into a “C” shape around each tooth and under the gumline. Gently move the floss up and down, cleaning the side of each tooth.",
          "Floss holders are recommended if you have difficulty using conventional floss.",
        ],
      },
      { type: "heading", text: "Rinsing" },
      {
        type: "paragraph",
        text: "It is important to rinse your mouth with water after brushing, and also after meals if you are unable to brush. If you are using an over-the-counter product for rinsing, it’s a good idea to consult with your dentist or dental hygienist on its appropriateness for you.",
      },
    ],
  },
  {
    question: "Are amalgam (silver) fillings safe?",
    blocks: [
      {
        type: "paragraph",
        text: "Over the years there has been some concern as to the safety of amalgam (silver) fillings. An amalgam is a blend of copper, silver, tin and zinc, bound by elemental mercury. Dentists have used this blended metal to fill teeth for more than 100 years. The controversy is due to claims that the exposure to the vapor and minute particles from the mercury can cause a variety of health problems.",
      },
      {
        type: "paragraph",
        text: "According to the American Dental Association (ADA), up to 76% of dentists use silver containing mercury to fill teeth. The ADA also states that silver fillings are safe and that studies have failed to find any link between silver containing mercury and any medical disorder.",
      },
      {
        type: "paragraph",
        text: "The general consensus is that amalgam (silver) fillings are safe. Along with the ADA’s position, the Center for Disease Control (CDC), the World Health Organization, the FDA, and others support the use of silver fillings as safe, durable, and cost effective. The U.S. Public Health Service says that the only reason not to use silver fillings is when a patient has an allergy to any component of this type of filling. The ADA has had fewer than 100 reported incidents of an allergy to components of silver fillings, and this is out of countless millions of silver fillings over the decades.",
      },
      {
        type: "paragraph",
        text: "Although studies indicate that there are no measurable health risks to patients who have silver fillings, we do know that mercury is a toxic material when we are exposed at high, unsafe levels. For instance, we have been warned to limit the consumption of certain types of fish that carry high levels of mercury in them. However, with respect to amalgam fillings, the ADA maintains that when the mercury combines with the other components of the filling, it becomes an inactive substance that is safe.",
      },
      {
        type: "paragraph",
        text: "There are numerous options to silver fillings, including composite (tooth-colored), porcelain, and gold fillings. We encourage you to discuss these options with your dentist so you can determine which is the best option for you.",
      },
    ],
  },
  {
    question: "How often should I have a dental exam and cleaning?",
    blocks: [
      {
        type: "paragraph",
        text: "You should have your teeth checked and cleaned at least twice a year, though your dentist or dental hygienist may recommend more frequent visits.",
      },
      {
        type: "paragraph",
        text: "Regular dental exams and cleaning visits are essential in preventing dental problems and maintaining the health of your teeth and gums. At these visits, your teeth are cleaned and checked for cavities. Additionally, there are many other things that are checked and monitored to help detect, prevent, and maintain your dental health. These include:",
      },
      {
        type: "list",
        items: [
          "Medical history review: Knowing the status of any current medical conditions, new medications, and illnesses, gives us insight to your overall health and also your dental health.",
          "Examination of diagnostic x-rays (radiographs): Essential for detection of decay, tumors, cysts, and bone loss. X-rays also help determine tooth and root positions.",
          "Oral cancer screening: Check the face, neck, lips, tongue, throat, tissues, and gums for any signs of oral cancer.",
          "Gum disease evaluation: Check the gums and bone around the teeth for any signs of periodontal disease.",
          "Examination of tooth decay: All tooth surfaces will be checked for decay with special dental instruments.",
          "Examination of existing restorations: Check current fillings, crowns, etc.",
          "Removal of calculus (tartar): Calculus is hardened plaque that has been left on the tooth for sometime and is now firmly attached to the tooth surface. Calculus forms above and below the gum line, and can only be removed with special dental instruments.",
          "Removal of plaque: Plaque is a sticky, almost invisible film that forms on the teeth. It is a growing colony of living bacteria, food debris, and saliva. The bacteria produce toxins (poisons) that inflame the gums. This inflammation is the start of periodontal disease!",
          "Teeth polishing: Removes stain and plaque that is not otherwise removed during toothbrushing and scaling.",
          "Oral hygiene recommendations: Review and recommend oral hygiene aids as needed (electric dental toothbrushes, special cleaning aids, fluorides, rinses, etc.).",
          "Review dietary habits: Your eating habits play a very important role in your dental health.",
        ],
      },
      {
        type: "paragraph",
        text: "As you can see, a good dental exam and cleaning involves quite a lot more than just checking for cavities and polishing your teeth. We are committed to providing you with the best possible care, and to do so will require regular check-ups and cleanings.",
      },
    ],
  },
  {
    question: "How can I tell if I have gingivitis or periodontitis (gum disease)?",
    blocks: [
      {
        type: "paragraph",
        text: "Four out of five people have periodontal disease and don’t know it! Most people are not aware of it because the disease is usually painless in the early stages. Unlike tooth decay, which often causes discomfort, it is possible to have periodontal disease without noticeable symptoms. Having regular dental check-ups and periodontal examinations are very important and will help detect if periodontal problems exist.",
      },
      {
        type: "paragraph",
        text: "Periodontal disease begins when plaque, a sticky, colorless, film of bacteria, food debris, and saliva, is left on the teeth and gums. The bacteria produce toxins (acids) that inflame the gums and slowly destroy the bone. Brushing and flossing regularly and properly will ensure that plaque is not left behind to do its damage.",
      },
      {
        type: "heading",
        text: "Other than poor oral hygiene, there are several other factors that may increase the risk of developing periodontal disease:",
      },
      {
        type: "list",
        items: [
          "Smoking or chewing tobacco – Tobacco users are more likely than nonusers to form plaque and tartar on their teeth.",
          "Certain tooth or appliance conditions – Bridges that no longer fit properly, crowded teeth, or defective fillings that may trap plaque and bacteria.",
          "Many medications – Steroids, cancer therapy drugs, blood pressure meds, oral contraceptives. Some medications have side affects that reduce saliva, making the mouth dry and plaque easier to adhere to the teeth and gums.",
          "Pregnancy, oral contraceptives, and puberty – Can cause changes in hormone levels, causing gum tissue to become more sensitive to bacteria toxins.",
          "Systemic diseases – Diabetes, blood cell disorders, HIV / AIDS, etc.",
          "Genetics may play role – Some patients may be predisposed to a more aggressive type of periodontitis. Patients with a family history of tooth loss should pay particular attention to their gums.",
        ],
      },
      { type: "heading", text: "Signs and Symptoms of Periodontal Disease" },
      {
        type: "list",
        items: [
          "Red and puffy gums – Gums should never be red or swollen.",
          "Bleeding gums – Gums should never bleed, even when you brush vigorously or use dental floss.",
          "Persistent bad breath – Caused by bacteria in the mouth.",
          "New spacing between teeth – Caused by bone loss.",
          "Loose teeth – Also caused by bone loss or weakened periodontal fibers (fibers that support the tooth to the bone).",
          "Pus around the teeth and gums – Sign that there is an infection present.",
          "Receding gums – Loss of gum around a tooth.",
          "Tenderness or Discomfort – Plaque, calculus, and bacteria irritate the gums and teeth.",
        ],
      },
      {
        type: "paragraph",
        text: "Good oral hygiene, a balanced diet, and regular dental visits can help reduce your risk of developing periodontal disease.",
      },
    ],
  },
  {
    question: "Why is it important to use dental floss?",
    blocks: [
      {
        type: "paragraph",
        text: "Brushing our teeth removes food particles, plaque, and bacteria from all tooth surfaces, except in between the teeth. Unfortunately, our toothbrush can’t reach these areas that are highly susceptible to decay and periodontal (gum) disease.",
      },
      {
        type: "paragraph",
        text: "Daily flossing is the best way to clean between the teeth and under the gumline. Flossing not only helps clean these spaces, it disrupts plaque colonies from building up, preventing damage to the gums, teeth, and bone.",
      },
      {
        type: "paragraph",
        text: "Plaque is a sticky, almost invisible film that forms on the teeth. It is a growing colony of living bacteria, food debris, and saliva. The bacteria produce toxins (acids) that cause cavities and irritate and inflame the gums. Also, when plaque is not removed above and below the gumline, it hardens and turns into calculus (tartar). This will further irritate and inflame the gums and also slowly destroy the bone. This is the beginning of periodontal disease.",
      },
      { type: "heading", text: "How to floss properly:" },
      {
        type: "list",
        items: [
          "Take 12-16 inches (30-40cm) of dental floss and wrap it around your middle fingers, leaving about 2 inches (5cm) of floss between the hands.",
          "Using your thumbs and forefingers to guide the floss, gently insert the floss between teeth using a sawing motion.",
          "Curve the floss into a “C” shape around each tooth and under the gumline. Gently move the floss up and down, cleaning the side of each tooth.",
          "Floss holders are recommended if you have difficulty using conventional floss.",
        ],
      },
      {
        type: "paragraph",
        text: "Daily flossing will help you keep a healthy, beautiful smile for life!",
      },
    ],
  },
  {
    question: "How can cosmetic dentistry help improve the appearance of my smile?",
    blocks: [
      {
        type: "paragraph",
        text: "If you’re feeling somewhat self-conscious about your teeth, or just want to improve your smile, cosmetic dental treatments may be the answer to a more beautiful, confident smile.",
      },
      {
        type: "paragraph",
        text: "Cosmetic dentistry has become very popular in the last several years, not only due to the many advances in cosmetic dental procedures and materials available today, but also because patients are becoming more and more focused on improving their overall health. This includes dental prevention and having a healthier, whiter, more radiant smile.",
      },
      {
        type: "paragraph",
        text: "There are many cosmetic dental procedures available to improve your teeth and enhance your smile. Depending on your particular needs, cosmetic dental treatments can change your smile dramatically, from restoring a single tooth to having a full mouth make-over. Ask your dentist how you can improve the health and beauty of your smile with cosmetic dentistry.",
      },
      { type: "heading", text: "Cosmetic Procedures:" },
      {
        type: "list",
        items: [
          "Teeth Whitening: Bleaching lightens teeth that have been stained or discolored by age, food, drink, and smoking. Teeth darkened as a result of injury or taking certain medications can also be bleached, but the effectiveness depends on the degree of staining present.",
          "Composite (tooth-colored) Fillings: Also known as “bonding”, composite fillings are now widely used instead of amalgam (silver) fillings to repair teeth with cavities, and also to replace old defective fillings. Tooth-colored fillings are also used to repair chipped, broken, or discolored teeth. This type of filling is also very useful to fill in gaps and to protect sensitive, exposed root surfaces caused by gum recession.",
          "Porcelain Veneers: Veneers are thin custom-made, tooth-colored shells that are bonded onto the fronts of teeth to create a beautiful individual smile. They can help restore or camouflage damaged, discolored, poorly shaped, or misaligned teeth. Unlike crowns, veneers require minimal tooth structure to be removed from the surface of the tooth.",
          "Porcelain Crowns (caps): A crown is a tooth-colored, custom-made covering that encases the entire tooth surface restoring it to its original shape and size. Crowns protect and strengthen teeth that cannot be restored with fillings or other types of restorations. They are ideal for teeth that have large, fractured or broken fillings and also for those that are badly decayed.",
          "Dental Implants: Dental implants are artificial roots that are surgically placed into the jaw to replace one or more missing teeth. Porcelain crowns, bridges, and dentures can be made specifically to fit and attach to implants, giving a patient a strong, stable, and durable solution to removable dental appliances.",
          "Orthodontics: Less visible and more effective brackets and wires are making straightening teeth with orthodontics much more appealing to adult patients. Also, in some cases, teeth may be straightened with custom-made, clear, removable aligners that require no braces.",
        ],
      },
      {
        type: "paragraph",
        text: "Thanks to the advances in modern dentistry, cosmetic treatments can make a difference in making your smile shine!",
      },
    ],
  },
  {
    question: "What are porcelain veneers and how can they improve my smile?",
    blocks: [
      {
        type: "paragraph",
        text: "Porcelain veneers are very thin shells of tooth-shaped porcelain that are individually crafted to cover the fronts of teeth. They are very durable and will not stain, making them a very popular solution for those seeking to restore or enhance the beauty of their smile.",
      },
      { type: "heading", text: "Veneers may be used to restore or correct the following dental conditions:" },
      {
        type: "list",
        items: [
          "Severely discolored or stained teeth",
          "Unwanted or uneven spaces",
          "Worn or chipped teeth",
          "Slight tooth crowding",
          "Misshapen teeth",
          "Teeth that are too small or large",
        ],
      },
      {
        type: "paragraph",
        text: "Getting veneers usually requires two visits. Veneers are created from an impression (mold) of your teeth that is then sent to a professional dental laboratory where each veneer is custom-made (for shape and color) for your individual smile.",
      },
      {
        type: "paragraph",
        text: "With little or no anesthesia, teeth are prepared by lightly buffing and shaping the front surface of the teeth to allow for the small thickness of veneers. The veneers are carefully fitted and bonded onto the tooth surface with special bonding cements and occasionally a specialized light may be used to harden and set the bond.",
      },
      {
        type: "paragraph",
        text: "Veneers are an excellent dental treatment that can dramatically improve your teeth and give you a natural, beautiful smile.",
      },
    ],
  },
  {
    question: "What can I do about stained or discoloured teeth?",
    blocks: [
      {
        type: "paragraph",
        text: "Since teeth whitening has now become the number one aesthetic concern of many patients, there are many products and methods available to achieve a brighter smile.",
      },
      {
        type: "paragraph",
        text: "Professional teeth whitening (or bleaching) is a simple, non-invasive dental treatment used to change the color of natural tooth enamel, and is an ideal way to enhance the beauty of your smile. Over-the-counter products are also available, but they are much less effective than professional treatments and may not be approved by the American Dental Association (ADA).",
      },
      {
        type: "paragraph",
        text: "As we age, the outer layer of tooth enamel wears away, eventually revealing a darker or yellow shade. The color of our teeth also comes from the inside of the tooth, which may become darker over time. Smoking, drinking coffee, tea, and wine may also contribute to tooth discoloration, making our teeth yellow and dull. Sometimes, teeth can become discolored from taking certain medications as a child, such as tetracycline. Excessive fluoridation (fluorosis) during tooth development can also cause teeth to become discolored.",
      },
      {
        type: "paragraph",
        text: "It’s important to have your teeth evaluated by your dentist to determine if you’re a good candidate for bleaching. Occasionally, tetracycline and fluorosis stains are difficult to bleach and your dentist may offer other options, such as veneers or crowns to cover up such stains. Since teeth whitening only works on natural tooth enamel, it is also important to evaluate replacement of any old fillings, crowns, etc. before bleaching begins. Once the bleaching is done, your dentist can match the new restorations to the shade of the newly whitened teeth.",
      },
      {
        type: "paragraph",
        text: "Since teeth whitening is not permanent, a touch-up may be needed every several years to keep your smile looking bright.",
      },
      { type: "heading", text: "The most widely used professional teeth whitening systems:" },
      {
        type: "list",
        items: [
          "Home teeth whitening systems: At-home products usually come in a gel form that is placed in a custom-fitted mouthguard (tray), created from a mold of your teeth. The trays are worn either twice a day for approximately 30 minutes, or overnight while you sleep. It usually takes several weeks to achieve the desired results depending on the degree of staining and the desired level of whitening.",
          "In office teeth whitening: This treatment is done in the dental office and you will see results immediately. It may require more than one visit, with each visit lasting 30 to 60 minutes. While your gums are protected, a bleaching solution is applied to the teeth. A special light may be used to enhance the action of the agent while the teeth are whitened.",
        ],
      },
      {
        type: "paragraph",
        text: "Some patients may experience tooth sensitivity after having their teeth whitened. This sensation is temporary and subsides shortly after you complete the bleaching process, usually within a few days to one weak.",
      },
      {
        type: "paragraph",
        text: "Teeth whitening can be very effective and can give you a brighter, whiter, more confident smile!",
      },
    ],
  },
];
