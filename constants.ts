import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Spermaid+',
    tagline: 'Complete Male Fertility Support',
    price: 49.99,
    imageUrl: '/images/spermaid-product.webp',
    imageUrls: [
      '/images/spermaid-product.webp',
      '/images/Untitled design (13).png',
      '/images/Untitled design (14).png',
    ],
    details: 'Spermaid+ is a comprehensive dietary supplement designed to support male reproductive health. Formulated with scientifically-proven ingredients, it helps improve sperm count, motility, viscosity, and morphology. This advanced formula also boosts male libido and provides essential energy support. Each serving contains a powerful blend of vitamins, minerals, and herbal extracts specifically chosen for their role in male fertility and vitality.',
    ingredients: [
      'Vitamin E (120 mg - 800% DV)',
      'Folic Acid (800 mcg)',
      'Zinc (40 mg - 364% DV)',
      'Selenium (60 mcg - 109% DV)',
      'Withania Somnifera Root Extract (675 mg)',
      'N-Acetyl-Cysteine (600 mg)',
      'L-Carnitine (440 mg)',
      'L-Arginine (250 mg)',
      'Shilajit Satava (500 mg)',
      'Glutathione (80 mg)',
      'Kapikachhu (Mucuna pruriens) (400 mg)',
      'Safed Musli Extract (350 mg)'
    ],
  },
  {
    id: 2,
    name: 'Fertil Max',
    tagline: 'Complete Female Fertility & PCOS Support',
    price: 54.99,
    imageUrl: '/images/50835-PURE-HEALTH-FERTIL-MAX-FOR-WOMEN-15-SACHETS-BERRY-FLAVOR.webp',
    imageUrls: [
      '/images/50835-PURE-HEALTH-FERTIL-MAX-FOR-WOMEN-15-SACHETS-BERRY-FLAVOR.webp',
      '/images/fertilmax-box-side.webp',
      '/images/fertilmax-supplement-facts.webp',
    ],
    details: 'Fertil Max by Jenasol is a complete formula designed to support female fertility and reproduction. This expertly formulated supplement helps manage and treat the symptoms of PCOS (Polycystic Ovary Syndrome). Each sachet contains a powerful combination of myo-inositol, D-chiro-inositol, and other essential nutrients that work synergistically to support hormonal balance, egg quality, and overall reproductive health. Available in a convenient berry-flavored powder format.',
    ingredients: [
      'Myo-inositol (4000 mg)',
      'D-chiro-inositol (100 mg)',
      'N-acetyl cysteine (400 mg)',
      'CoQ10 (60 mg)',
      'Melatonin (3 mg)',
      'Folic Acid (1 mg)',
      'Vitamin D3 (1000 IU)',
      'Vitamin C (800 mg)'
    ],
  },
];

export const COMPANY_DETAILS = {
  name: 'Pure Health',
  mission: 'At Pure Health, we are dedicated to advancing reproductive health and wellness through scientifically-formulated dietary supplements. Our mission is to empower couples on their fertility journey by providing safe, effective, and evidence-based solutions. We combine cutting-edge scientific research with premium natural ingredients to create products that support both male and female reproductive health. Every product is manufactured in the USA under strict quality standards, ensuring purity, potency, and safety.',
  address: '12845 NW 34th Ave. Opa Locka, FL 33054, USA',
  email: 'contact@purehealth.com',
  phone: '+1 (305) 555-0123',
};

export const WHY_HAMOSA = [
    {
      title: 'Scientifically Formulated',
      description: 'Our supplements are backed by rigorous clinical research and formulated with evidence-based ingredients for maximum efficacy.',
      icon: 'Science',
    },
    {
      title: 'Premium Natural Ingredients',
      description: 'We use only the finest, ethically sourced natural ingredients, ensuring purity and potency in every product.',
      icon: 'Leaf',
    },
    {
      title: 'Made in USA',
      description: 'All products are manufactured in the USA under strict quality control standards and FDA-compliant facilities.',
      icon: 'ShieldCheck',
    },
];
