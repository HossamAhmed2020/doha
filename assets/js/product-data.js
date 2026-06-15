/**
 * Al Doha For Import & Export
 * Product Data Repository
 */

window.ALL_PRODUCTS = [
    // EXISTING PRODUCTS (1-12)
    {
        id: 1,
        category: 'herbs',
        image: 'assets/images/products/product-1.jpg',
        badge: { en: 'Aromatic', ar: 'عطري' },
        en: {
            name: 'Premium Egyptian Basil',
            shortDescription: 'High-oil content, bright green dried basil leaves with intense aroma.',
            fullDescription: 'Our Egyptian Basil is sourced from the fertile Nile Delta. Meticulously sun-dried and machine-processed to preserve its high essential oil content and vibrant aromatic profile.',
            benefits: ['Natural anti-inflammatory', 'Rich in antioxidants', 'Supports digestive health'],
            applications: ['Culinary seasoning', 'Essential oil extraction', 'Herbal teas'],
            exportQuality: 'Grade A, Machine Cleaned, Purity 99%',
            packaging: '25kg Paper or PP Bags',
            origin: 'Egypt (Nile Delta)',
            specs: { 'Form': 'Crushed / Whole', 'Purity': '99% min', 'Moisture': '10% max' },
            seo: { title: 'Premium Egyptian Basil | Al Doha Export', description: 'Finest Egyptian Basil leaves for export.', keywords: 'Egyptian Basil, Dried Herbs, Export' }
        },
        ar: {
            name: 'ريحان مصري فاخر',
            shortDescription: 'أوراق ريحان مجففة ذات محتوى زيت عالٍ ولون أخضر زاهٍ ورائحة نفاذة.',
            fullDescription: 'يتم الحصول على الريحان المصري الخاص بنا من دلتا النيل الخصبة. يتم تجفيفه في الشمس بعناية ومعالجته آلياً للحفاظ على محتواه العالي من الزيوت العطرية.',
            benefits: ['مضاد طبيعي للالتهابات', 'غني بمضادات الأكسدة', 'يدعم صحة الجهاز الهضمي'],
            applications: ['توابل للطهي', 'استخلاص الزيوت العطرية', 'شاي الأعشاب'],
            exportQuality: 'درجة ممتازة، تنظيف آلي، نقاء 99%',
            packaging: 'أكياس ورقية أو بولي بروبيلين سعة 25 كجم',
            origin: 'مصر (دلتا النيل)',
            specs: { 'الشكل': 'مطحون / كامل', 'النقاء': '99% كحد أدنى', 'الرطوبة': '10% كحد أقصى' },
            seo: { title: 'ريحان مصري فاخر | تصدير الضحي', description: 'أجود أوراق الريحان المصري للتصدير.', keywords: 'ريحان مصري, أعشاب مجففة, تصدير' }
        }
    },
    {
        id: 2,
        category: 'spices',
        image: 'assets/images/products/product-2.jpg',
        en: {
            name: 'Premium Cumin Seeds',
            shortDescription: 'Egyptian Cumin, 99% purity, sun-dried and machine cleaned.',
            fullDescription: 'Superior Egyptian Cumin seeds known for their strong aroma and warm flavor. Processed in our state-of-the-art facilities to ensure maximum purity.',
            benefits: ['Aids digestion', 'Rich in iron', 'Boosts immunity'],
            applications: ['Spice blends', 'Culinary seasoning', 'Medicinal use'],
            exportQuality: '99% Pure, Machine Cleaned, Sortex Quality',
            packaging: '25kg / 50kg Bags',
            origin: 'Egypt',
            specs: { 'Form': 'Whole Seeds', 'Purity': '99% min', 'Admixture': '1% max' },
            seo: { title: 'Premium Cumin Seeds Export | Al Doha', description: 'High purity Egyptian Cumin seeds.', keywords: 'Cumin, Spices, Egypt Export' }
        },
        ar: {
            name: 'بذور كمون فاخرة',
            shortDescription: 'كمون مصري، نقاء 99%، مجفف شمسياً ومنظف آلياً بأعلى جودة.',
            fullDescription: 'بذور كمون مصرية فائقة الجودة معروفة برائحتها القوية ونكهتها الدافئة. تتم معالجتها في منشآتنا الحديثة لضمان أقصى درجات النقاء.',
            benefits: ['يساعد على الهضم', 'غني بالحديد', 'يعزز المناعة'],
            applications: ['خلطات التوابل', 'توابل للطهي', 'استخدامات طبية'],
            exportQuality: 'نقاء 99%، تنظيف آلي، جودة سورتكس',
            packaging: 'أكياس سعة 25 كجم / 50 كجم',
            origin: 'مصر',
            specs: { 'الشكل': 'بذور كاملة', 'النقاء': '99% كحد أدنى', 'الشوائب': '1% كحد أقصى' },
            seo: { title: 'تصدير بذور كمون فاخرة | الضحي', description: 'بذور كمون مصرية عالية النقاء.', keywords: 'كمون, توابل, تصدير مصر' }
        }
    },
    {
        id: 3,
        category: 'seeds',
        image: 'assets/images/products/product-3.jpg',
        badge: { en: 'New Harvest', ar: 'حصاد جديد' },
        en: {
            name: 'Premium Caraway Seeds',
            shortDescription: 'Finest Egyptian Caraway, rich in essential oils and perfectly dried.',
            fullDescription: 'Highly aromatic caraway seeds from the best Egyptian farms. Meticulously cleaned and graded for international export standards.',
            benefits: ['Digestive comfort', 'High in fiber', 'Antioxidant properties'],
            applications: ['Bakery products', 'Medicinal teas', 'Flavoring'],
            exportQuality: '99% Clean, Machine Sorted',
            packaging: '25kg Paper Bags',
            origin: 'Egypt',
            specs: { 'Form': 'Whole Seeds', 'Purity': '99% min', 'Moisture': '9% max' },
            seo: { title: 'Egyptian Caraway Seeds | Al Doha Export', description: 'Premium caraway seeds from Egypt.', keywords: 'Caraway, Seeds, Egyptian Export' }
        },
        ar: {
            name: 'بذور كراوية فاخرة',
            shortDescription: 'أجود أنواع الكراوية المصرية، غنية بالزيوت الأساسية ومجففة بمثالية.',
            fullDescription: 'بذور كراوية عطرية للغاية من أفضل المزارع المصرية. تم تنظيفها وتصنيفها بدقة لتتوافق مع معايير التصدير الدولية.',
            benefits: ['راحة الجهاز الهضمي', 'غنية بالألياف', 'خصائص مضادة للأكسدة'],
            applications: ['المخبوزات', 'شاي طبي', 'منكهات'],
            exportQuality: 'نظافة 99%، فرز آلي',
            packaging: 'أكياس ورقية سعة 25 كجم',
            origin: 'مصر',
            specs: { 'الشكل': 'بذور كاملة', 'النقاء': '99% كحد أدنى', 'الرطوبة': '9% كحد أقصى' },
            seo: { title: 'بذور كراوية مصرية | تصدير الضحي', description: 'بذور كراوية ممتازة من مصر.', keywords: 'كراوية, بذور, تصدير مصري' }
        }
    },
    {
        id: 4,
        category: 'legumes',
        image: 'assets/images/products/product-4.jpg',
        en: {
            name: 'White Kidney Beans',
            shortDescription: 'Large size, high protein content, sorted for export excellence.',
            fullDescription: 'Top-grade Egyptian White Kidney Beans (Phaseolus vulgaris). Uniform size, high nutritional value, and excellent cooking characteristics.',
            benefits: ['High protein source', 'Rich in minerals', 'Low glycemic index'],
            applications: ['Canned food industry', 'Retail packaging', 'Wholesale markets'],
            exportQuality: 'Grade A, Sorted by Color and Size',
            packaging: '25kg / 50kg PP Bags',
            origin: 'Egypt',
            specs: { 'Size': '180-200 pcs/100g', 'Moisture': '14% max', 'Purity': '99% min' },
            seo: { title: 'White Kidney Beans Export | Al Doha Egypt', description: 'Premium Egyptian white kidney beans.', keywords: 'Kidney Beans, Legumes, Export' }
        },
        ar: {
            name: 'فاصوليا بيضاء',
            shortDescription: 'حبة كبيرة، محتوى بروتين عالٍ، مفروزة لتميز التصدير العالمي.',
            fullDescription: 'فاصوليا بيضاء مصرية من الدرجة الأولى (Phaseolus vulgaris). حجم منتظم، قيمة غذائية عالية، وخصائص طهي ممتازة.',
            benefits: ['مصدر بروتين عالٍ', 'غنية بالمعادن', 'مؤشر جلايسيمي منخفض'],
            applications: ['صناعة المعلبات', 'تعبئة التجزئة', 'أسواق الجملة'],
            exportQuality: 'درجة أولى، مفروزة حسب اللون والحجم',
            packaging: 'أكياس بولي بروبيلين سعة 25/50 كجم',
            origin: 'مصر',
            specs: { 'الحجم': '180-200 حبة/100جم', 'الرطوبة': '14% كحد أقصى', 'النقاء': '99% كحد أدنى' },
            seo: { title: 'تصدير فاصوليا بيضاء | الضحي مصر', description: 'فاصوليا بيضاء مصرية ممتازة.', keywords: 'فاصوليا بيضاء, بقوليات, تصدير' }
        }
    },
    {
        id: 5,
        category: 'seeds',
        image: 'assets/images/products/product-5.jpg',
        en: {
            name: 'Golden Sesame Seeds',
            shortDescription: 'Premium Egyptian sesame, golden color, rich in natural oils.',
            fullDescription: 'Egyptian Golden Sesame is prized for its high oil content and rich flavor. Available in natural, hulled, and roasted varieties.',
            benefits: ['High in healthy fats', 'Rich in calcium', 'Supports bone health'],
            applications: ['Tahini production', 'Bakery and snacks', 'Oil extraction'],
            exportQuality: 'Grade A, Machine Cleaned, Purity 99.5%',
            packaging: '25kg / 50kg Bags',
            origin: 'Egypt',
            specs: { 'Form': 'Natural / Hulled', 'Oil Content': '50% min', 'Purity': '99.5% min' },
            seo: { title: 'Golden Sesame Seeds Export | Al Doha', description: 'Egyptian golden sesame seeds.', keywords: 'Sesame, Seeds, Egypt Export' }
        },
        ar: {
            name: 'بذور سمسم ذهبي',
            shortDescription: 'سمسم مصري فاخر، لون ذهبي، غني بالزيوت الطبيعية والمذاق الرائع.',
            fullDescription: 'يُقدر السمسم الذهبي المصري لمحتواه العالي من الزيوت ونكهته الغنية. متوفر بأصناف طبيعية ومقشورة ومحمصة.',
            benefits: ['غني بالدهون الصحية', 'غني بالكالسيوم', 'يدعم صحة العظام'],
            applications: ['إنتاج الطحينة', 'المخبوزات والوجبات الخفيفة', 'عصر الزيت'],
            exportQuality: 'درجة ممتازة، تنظيف آلي، نقاء 99.5%',
            packaging: 'أكياس سعة 25 كجم / 50 كجم',
            origin: 'مصر',
            specs: { 'الشكل': 'طبيعي / مقشور', 'محتوى الزيت': '50% كحد أدنى', 'النقاء': '99.5% كحد أدنى' },
            seo: { title: 'تصدير بذور سمسم ذهبي | الضحي', description: 'بذور سمسم ذهبي مصرية.', keywords: 'سمسم, بذور, تصدير مصر' }
        }
    },
    {
        id: 6,
        category: 'herbs',
        image: 'assets/images/products/product-6.jpg',
        en: {
            name: 'Dried Marjoram Leaves',
            shortDescription: 'Pure Egyptian marjoram, steam-treated and machine-rubbed.',
            fullDescription: 'Our Egyptian Marjoram is globally recognized for its superior quality and high essential oil content. Steam-treated for safety and flavor preservation.',
            benefits: ['Digestive aid', 'Anti-bacterial', 'Stress relief'],
            applications: ['Spice blends', 'Herbal teas', 'Culinary seasoning'],
            exportQuality: 'Grade A, Steam Treated, Machine Rubbed',
            packaging: '15kg - 25kg Paper Bags',
            origin: 'Egypt',
            specs: { 'Form': 'Whole / Rubbed', 'Oil Content': '1.5% min', 'Purity': '99% min' },
            seo: { title: 'Egyptian Marjoram Leaves | Al Doha Export', description: 'Premium dried marjoram from Egypt.', keywords: 'Marjoram, Herbs, Export' }
        },
        ar: {
            name: 'أوراق بردقوش مجففة',
            shortDescription: 'بردقوش مصري نقي، معالج بالبخار ومفرك آلياً بجودة عالية.',
            fullDescription: 'يُعرف البردقوش المصري عالمياً بجودته العالية ومحتواه العالي من الزيوت العطرية. معالج بالبخار لضمان السلامة والحفاظ على النكهة.',
            benefits: ['مساعد للهضم', 'مضاد للبكتيريا', 'تخفيف التوتر'],
            applications: ['خلطات التوابل', 'شاي الأعشاب', 'توابل للطهي'],
            exportQuality: 'درجة ممتازة، معالج بالبخار، مفرك آلياً',
            packaging: 'أكياس ورقية سعة 15-25 كجم',
            origin: 'مصر',
            specs: { 'الشكل': 'كامل / مفرك', 'محتوى الزيت': '1.5% كحد أدنى', 'النقاء': '99% كحد أدنى' },
            seo: { title: 'أوراق بردقوش مصرية | تصدير الضحي', description: 'بردقوش مجفف ممتاز من مصر.', keywords: 'بردقوش, أعشاب, تصدير' }
        }
    },
    {
        id: 7,
        category: 'legumes',
        image: 'assets/images/products/product-7.jpg',
        badge: { en: 'Popular', ar: 'شائع' },
        en: {
            name: 'Egyptian Fava Beans',
            shortDescription: 'Wide beans, size 10-12mm, high quality for wholesale markets.',
            fullDescription: 'Traditional Egyptian Fava Beans (Broad Beans). Carefully harvested, dried, and sorted for size and quality. Essential for Middle Eastern cuisine.',
            benefits: ['High protein and fiber', 'Iron-rich', 'Energy boost'],
            applications: ['Canning industry', 'Middle Eastern dishes', 'Wholesale'],
            exportQuality: 'Machine Cleaned, Sorted by Size',
            packaging: '25kg / 50kg Bags',
            origin: 'Egypt',
            specs: { 'Size': '10-12mm', 'Moisture': '14% max', 'Purity': '99% min' },
            seo: { title: 'Egyptian Fava Beans Export | Al Doha', description: 'Premium fava beans from Egypt.', keywords: 'Fava Beans, Legumes, Export Egypt' }
        },
        ar: {
            name: 'فول مدمس مصري',
            shortDescription: 'فول عريض، مقاس 10-12 مم، جودة عالية لأسواق الجملة الدولية.',
            fullDescription: 'فول مدمس مصري تقليدي (فول عريض). تم حصاده وتجفيفه وفرزه بعناية حسب الحجم والجودة. ضروري للمطبخ الشرق أوسطي.',
            benefits: ['بروتين وألياف عالية', 'غني بالحديد', 'تعزيز الطاقة'],
            applications: ['صناعة التعليب', 'أطباق الشرق الأوسط', 'الجملة'],
            exportQuality: 'تنظيف آلي، مفروز حسب الحجم',
            packaging: 'أكياس سعة 25 كجم / 50 كجم',
            origin: 'مصر',
            specs: { 'الحجم': '10-12 مم', 'الرطوبة': '14% كحد أقصى', 'النقاء': '99% كحد أدنى' },
            seo: { title: 'تصدير فول مصري | الضحي', description: 'فول مدمس مصري ممتاز.', keywords: 'فول مدمس, بقوليات, تصدير مصر' }
        }
    },
    {
        id: 8,
        category: 'seeds',
        image: 'assets/images/products/product-8.jpg',
        en: {
            name: 'Premium Anise Seeds',
            shortDescription: 'Superior quality Egyptian anise, highly aromatic and well-dried.',
            fullDescription: 'High-quality Pimpinella anisum from the fertile Egyptian soil. Rich in anethole, providing its signature sweet and aromatic profile.',
            benefits: ['Digestive health', 'Respiratory support', 'Natural sweetener'],
            applications: ['Baking', 'Confectionery', 'Herbal teas'],
            exportQuality: 'Purity 99%, Double Cleaned',
            packaging: '25kg PP or Paper Bags',
            origin: 'Egypt',
            specs: { 'Form': 'Whole Seeds', 'Purity': '99% min', 'Oil Content': '2.5% min' },
            seo: { title: 'Egyptian Anise Seeds Export | Al Doha', description: 'Premium anise seeds for international trade.', keywords: 'Anise, Seeds, Egypt Export' }
        },
        ar: {
            name: 'بذور يانسون فاخرة',
            shortDescription: 'يانسون مصري فائق الجودة، عطري للغاية ومجفف بشكل جيد.',
            fullDescription: 'يانسون مصري عالي الجودة من التربة المصرية الخصبة. غني بمادة الأنيثول، مما يوفر له طابعه العطري والحلو المميز.',
            benefits: ['صحة الجهاز الهضمي', 'دعم الجهاز التنفسي', 'محلي طبيعي'],
            applications: ['المخبوزات', 'الحلويات', 'شاي الأعشاب'],
            exportQuality: 'نقاء 99%، تنظيف مزدوج',
            packaging: 'أكياس بولي بروبيلين أو ورقية سعة 25 كجم',
            origin: 'مصر',
            specs: { 'الشكل': 'بذور كاملة', 'النقاء': '99% كحد أدنى', 'محتوى الزيت': '2.5% كحد أدنى' },
            seo: { title: 'تصدير بذور يانسون | الضحي', description: 'بذور يانسون ممتازة للتجارة الدولية.', keywords: 'يانسون, بذور, تصدير مصر' }
        }
    },
    {
        id: 9,
        category: 'spices',
        image: 'assets/images/products/product-9.jpg',
        en: {
            name: 'Coriander Seeds',
            shortDescription: 'Whole coriander seeds, light brown color, machine cleaned.',
            fullDescription: 'Premium Egyptian Coriander seeds. Known for their citrusy, warm flavor. Carefully processed to maintain whole pods and essential oils.',
            benefits: ['Antioxidant-rich', 'Supports heart health', 'Aids digestion'],
            applications: ['Spice blends', 'Pickling', 'Bakery'],
            exportQuality: 'Grade A, Machine Cleaned, Sorted',
            packaging: '25kg Multi-wall Paper Bags',
            origin: 'Egypt',
            specs: { 'Form': 'Whole / Split', 'Purity': '98% min', 'Moisture': '9% max' },
            seo: { title: 'Egyptian Coriander Export | Al Doha Spices', description: 'Fine coriander seeds for export.', keywords: 'Coriander, Spices, Export' }
        },
        ar: {
            name: 'بذور كزبرة',
            shortDescription: 'بذور كزبرة كاملة، لون بني فاتح، منظفة آلياً بجودة ممتازة.',
            fullDescription: 'بذور كزبرة مصرية ممتازة. معروفة بنكهتها الحمضية الدافئة. معالجة بعناية للحفاظ على الحبوب الكاملة والزيوت العطرية.',
            benefits: ['غنية بمضادات الأكسدة', 'تدعم صحة القلب', 'تساعد على الهضم'],
            applications: ['خلطات التوابل', 'التخليل', 'المخبوزات'],
            exportQuality: 'درجة ممتازة، تنظيف آلي، مفروز',
            packaging: 'أكياس ورقية متعددة الطبقات سعة 25 كجم',
            origin: 'مصر',
            specs: { 'الشكل': 'كاملة / منقسمة', 'النقاء': '98% كحد أدنى', 'الرطوبة': '9% كحد أقصى' },
            seo: { title: 'تصدير كزبرة مصرية | توابل الضحي', description: 'بذور كزبرة فاخرة للتصدير.', keywords: 'كزبرة, توابل, تصدير' }
        }
    },
    {
        id: 10,
        category: 'seeds',
        image: 'assets/images/products/product-10.jpg',
        en: {
            name: 'Fennel Seeds',
            shortDescription: 'Egyptian fennel seeds, sweet aroma, high essential oil content.',
            fullDescription: 'Sweet and aromatic fennel seeds sourced from the best Egyptian fields. Processed to international food grade standards.',
            benefits: ['Improves digestion', 'Rich in antioxidants', 'Respiratory aid'],
            applications: ['Cuisine', 'Herbal teas', 'Mouth fresheners'],
            exportQuality: 'Machine Cleaned, Grade A',
            packaging: '25kg Bags',
            origin: 'Egypt',
            specs: { 'Form': 'Whole Seeds', 'Purity': '99% min', 'Color': 'Greenish Yellow' },
            seo: { title: 'Egyptian Fennel Seeds Export | Al Doha', description: 'High quality fennel seeds for global trade.', keywords: 'Fennel, Seeds, Export Egypt' }
        },
        ar: {
            name: 'بذور شمر',
            shortDescription: 'بذور شمر مصرية، رائحة حلوة، محتوى زيت أساسي عالٍ.',
            fullDescription: 'بذور شمر حلوة وعطرية تم الحصول عليها من أفضل الحقول المصرية. معالجة وفقاً لمعايير الدرجة الغذائية الدولية.',
            benefits: ['يحسن الهضم', 'غني بمضادات الأكسدة', 'مساعد للجهاز التنفسي'],
            applications: ['الطهي', 'شاي الأعشاب', 'معطرات الفم'],
            exportQuality: 'تنظيف آلي، درجة ممتازة',
            packaging: 'أكياس سعة 25 كجم',
            origin: 'مصر',
            specs: { 'الشكل': 'بذور كاملة', 'النقاء': '99% كحد أدنى', 'اللون': 'أخضر مصفر' },
            seo: { title: 'تصدير بذور شمر | الضحي', description: 'بذور شمر عالية الجودة للتجارة العالمية.', keywords: 'شمر, بذور, تصدير مصر' }
        }
    },
    {
        id: 11,
        category: 'herbs',
        image: 'assets/images/products/product-11.jpg',
        badge: { en: 'Premium', ar: 'ممتاز' },
        en: {
            name: 'Chamomile Flowers',
            shortDescription: 'Whole chamomile flowers, bright yellow centers, aromatic and calming.',
            fullDescription: 'Our Egyptian Chamomile is carefully hand-picked and air-dried to preserve its whole flower integrity and soothing properties.',
            benefits: ['Aids sleep', 'Reduces anxiety', 'Anti-inflammatory'],
            applications: ['Herbal tea', 'Cosmetics', 'Aromatherapy'],
            exportQuality: 'Grade A, Whole Flowers',
            packaging: '10kg - 20kg Cartons',
            origin: 'Egypt',
            specs: { 'Form': 'Whole Flowers', 'Purity': '99% min', 'Moisture': '10% max' },
            seo: { title: 'Egyptian Chamomile Flowers | Al Doha', description: 'Whole dried chamomile flowers for export.', keywords: 'Chamomile, Herbs, Egypt Export' }
        },
        ar: {
            name: 'أزهار البابونج',
            shortDescription: 'أزهار بابونج كاملة، مراكز صفراء زاهية، عطرية ومهدئة.',
            fullDescription: 'يتم قطف البابونج المصري الخاص بنا يدوياً بعناية وتجفيفه في الهواء للحفاظ على سلامة الزهرة الكاملة وخصائصها المهدئة.',
            benefits: ['يساعد على النوم', 'يقلل القلق', 'مضاد للالتهابات'],
            applications: ['شاي الأعشاب', 'مستحضرات التجميل', 'العلاج بالعطور'],
            exportQuality: 'درجة ممتازة، أزهار كاملة',
            packaging: 'كراتين سعة 10-20 كجم',
            origin: 'مصر',
            specs: { 'الشكل': 'أزهار كاملة', 'النقاء': '99% كحد أدنى', 'الرطوبة': '10% كحد أقصى' },
            seo: { title: 'تصدير أزهار البابونج | الضحي', description: 'أزهار بابونج مجففة كاملة للتصدير.', keywords: 'بابونج, أعشاب, تصدير مصر' }
        }
    },
    {
        id: 12,
        category: 'herbs',
        image: 'assets/images/products/product-12.jpg',
        en: {
            name: 'Egyptian Hibiscus',
            shortDescription: 'Deep red calyces, whole petals or crushed, rich flavor and color.',
            fullDescription: 'Known as "Karkade" in Egypt, our hibiscus is prized for its deep red color and tart flavor. High in Vitamin C and antioxidants.',
            benefits: ['Lowers blood pressure', 'Rich in Vitamin C', 'Natural detoxifier'],
            applications: ['Hot/Cold Tea', 'Food coloring', 'Syrups'],
            exportQuality: 'Grade A, Whole Flowers or Crushed (TBC)',
            packaging: '20kg - 25kg PP Bags',
            origin: 'Egypt (Aswan/Upper Egypt)',
            specs: { 'Form': 'Whole / Crushed', 'Purity': '99% min', 'Moisture': '12% max' },
            seo: { title: 'Egyptian Hibiscus Export | Al Doha', description: 'Deep red hibiscus (Karkade) for export.', keywords: 'Hibiscus, Karkade, Egypt Export' }
        },
        ar: {
            name: 'كركديه مصري',
            shortDescription: 'أوراق كركديه حمراء داكنة، بتلات كاملة أو مجروشة، نكهة ولون غني.',
            fullDescription: 'يُعرف في مصر باسم "الكركديه"، ويُقدر كركدينا بلونه الأحمر الداكن ونكهته الحامضة. غني بفيتامين سي ومضادات الأكسدة.',
            benefits: ['يخفض ضغط الدم', 'غني بفيتامين سي', 'مطهر طبيعي'],
            applications: ['شاي ساخن/بارد', 'ملون غذائي', 'شراب'],
            exportQuality: 'درجة ممتازة، زهور كاملة أو مجروش',
            packaging: 'أكياس بولي بروبيلين سعة 20-25 كجم',
            origin: 'مصر (أسوان/صعيد مصر)',
            specs: { 'الشكل': 'كامل / مجروش', 'النقاء': '99% كحد أدنى', 'الرطوبة': '12% كحد أقصى' },
            seo: { title: 'تصدير كركديه مصري | الضحي', description: 'كركديه أحمر داكن للتصدير.', keywords: 'كركديه, أسوان, تصدير مصر' }
        }
    },

    // NEW PRODUCTS (13-50)
    {
        id: 13,
        category: 'herbs',
        image: 'assets/images/products/product-13.jpg', // Placeholder
        en: {
            name: "Anise Seeds",
            shortDescription: "Premium Egyptian anise seeds with a sweet, aromatic licorice-like flavor.",
            fullDescription: "Egyptian Anise (Pimpinella anisum) is world-renowned for its high essential oil content and sweet aroma. Grown in the fertile lands of Upper Egypt, our anise is carefully harvested and processed to maintain its natural oils and distinct flavor profile.",
            benefits: ["Digestive aid", "Rich in iron and manganese", "Natural breath freshener", "Antimicrobial properties"],
            applications: ["Confectionery and baking", "Herbal infusions", "Essential oil extraction", "Pharmaceuticals"],
            exportQuality: "Grade A, Purity 99%, Machine Cleaned",
            packaging: "25kg Paper bags or Polypropylene bags",
            origin: "Egypt",
            specs: { "Form": "Whole Seeds", "Purity": "99% Min", "Admixture": "1% Max", "Moisture": "9% Max", "Oil Content": "2.5% Min" },
            seo: { title: "Premium Egyptian Anise Seeds | Agricultural Export", description: "High-quality Egyptian Anise seeds for export. Pure, aromatic, and rich in essential oils. Available in bulk.", keywords: "Egyptian anise, anise seeds export, Pimpinella anisum, herbs from Egypt" }
        },
        ar: {
            name: "بذور اليانسون",
            shortDescription: "بذور يانسون مصرية ممتازة بنكهة حلوة وعطرية تشبه اليانسون النجمي.",
            fullDescription: "يُعد اليانسون المصري (Pimpinella anisum) مشهوراً عالمياً بمحتواه العالي من الزيوت العطرية ورائحته الزكية. يُزرع في الأراضي الخصبة في صعيد مصر، ويُحصد بعناية للحفاظ على زيوت الطبيعية.",
            benefits: ["مساعد للهضم", "غني بالحديد والمنجنيز", "معطر طبيعي للفم", "خصائص مضادة للميكروبات"],
            applications: ["الحلويات والمخبوزات", "المشروبات العشبية", "استخلاص الزيوت العطرية", "الصناعات الدوائية"],
            exportQuality: "درجة ممتازة، نقاء 99%، تنظيف آلي",
            packaging: "أكياس ورقية أو بولي بروبيلين سعة 25 كجم",
            origin: "مصر",
            specs: { "الشكل": "بذور كاملة", "النقاء": "99% كحد أدنى", "الشوائب": "1% كحد أقصى", "الرطوبة": "9% كحد أقصى", "محتوى الزيت": "2.5% كحد أدنى" },
            seo: { title: "يانسون مصري ممتاز | تصدير زراعي", description: "بذور يانسون مصرية عالية الجودة للتصدير. نقية وعطرية وغنية بالزيوت. متاح كميات كبيرة.", keywords: "يانسون مصري، تصدير بذور اليانسون، أعشاب مصرية" }
        }
    },
    {
        id: 14,
        category: 'herbs',
        image: 'assets/images/products/product-14.jpg', // Placeholder
        en: {
            name: "Fennel Seeds",
            shortDescription: "Sweet and aromatic fennel seeds, ideal for culinary and medicinal use.",
            fullDescription: "Our Egyptian Fennel seeds are characterized by their greenish-yellow color and sweet, spicy aroma. They are sourced from the best farms in Egypt, ensuring a product free from pesticides and rich in anethole.",
            benefits: ["Relieves bloating", "Rich in antioxidants", "Supports heart health", "Natural anti-inflammatory"],
            applications: ["Cuisine seasoning", "Herbal teas", "Mouth fresheners", "Cosmetic ingredients"],
            exportQuality: "Grade A, Machine Cleaned, Sortex Quality",
            packaging: "25kg Polypropylene bags",
            origin: "Egypt",
            specs: { "Form": "Whole Seeds", "Purity": "99% Min", "Admixture": "1% Max", "Moisture": "10% Max", "Color": "Greenish-Yellow" },
            seo: { title: "Egyptian Fennel Seeds Export | High Quality Seeds", description: "Direct exporter of Egyptian Fennel seeds. Grade A quality, sweet aroma, and high purity for global markets.", keywords: "fennel seeds, Egyptian fennel, fennel export, spices Egypt" }
        },
        ar: {
            name: "بذور الشمر",
            shortDescription: "بذور شمر حلوة وعطرية، مثالية للاستخدام في الطهي والأغراض الطبية.",
            fullDescription: "تتميز بذور الشمر المصرية بلونها الأخضر المصفر ورائحتها الحلوة والحادة. يتم الحصول عليها من أفضل المزارع في مصر لضمان منتج خالٍ من المبيدات وغني بمادة الأنيثول.",
            benefits: ["يخفف الانتفاخ", "غني بمضادات الأكسدة", "يدعم صحة القلب", "مضاد طبيعي للالتهابات"],
            applications: ["توابل للطهي", "شاي الأعشاب", "معطرات الفم", "مكونات التجميل"],
            exportQuality: "درجة ممتازة، تنظيف آلي، جودة سورتكس",
            packaging: "أكياس بولي بروبيلين سعة 25 كجم",
            origin: "مصر",
            specs: { "الشكل": "بذور كاملة", "النقاء": "99% كحد أدنى", "الشوائب": "1% كحد أقصى", "الرطوبة": "10% كحد أقصى", "اللون": "أخضر مصفر" },
            seo: { title: "تصدير بذور الشمر المصرية | جودة عالية", description: "مصدر مباشر لبذور الشمر المصرية. جودة ممتازة، رائحة حلوة، ونقاء عالٍ للأسواق العالمية.", keywords: "بذور الشمر، شمر مصري، تصدير الشمر، توابل مصر" }
        }
    },
    {
        id: 15,
        category: 'herbs',
        image: 'assets/images/products/product-15.jpg', // Placeholder
        en: {
            name: "Caraway Seeds",
            shortDescription: "Highly aromatic caraway seeds with a sharp, earthy flavor.",
            fullDescription: "Egyptian Caraway is prized for its intense flavor and medicinal properties. We provide premium whole seeds that are meticulously cleaned and sorted to meet international food safety standards.",
            benefits: ["Improves digestion", "Antibacterial properties", "Good source of fiber", "Relieves coughs"],
            applications: ["Bread and pastry", "Cheese making", "Liqueur flavoring", "Digestive teas"],
            exportQuality: "Premium Grade, Double Cleaned",
            packaging: "25kg Paper or PP bags",
            origin: "Egypt",
            specs: { "Form": "Whole Seeds", "Purity": "99.5% Min", "Admixture": "0.5% Max", "Moisture": "9% Max", "Flavor": "Sharp, Earthy" },
            seo: { title: "Egyptian Caraway Seeds | Bulk Export Supply", description: "Supplying premium Egyptian Caraway seeds worldwide. High purity, intense aroma, and excellent quality.", keywords: "caraway seeds, Egyptian caraway, caraway export, bulk caraway Egypt" }
        },
        ar: {
            name: "بذور الكراوية",
            shortDescription: "بذور كراوية عطرية للغاية بنكهة حادة وترابية.",
            fullDescription: "تحظى الكراوية المصرية بتقدير كبير لنكهتها القوية وخصائصها الطبية. نحن نوفر بذوراً كاملة ممتازة تم تنظيفها وفرزها بعناية لتلبية معايير سلامة الأغذية الدولية.",
            benefits: ["يحسن الهضم", "خصائص مضادة للبكتيريا", "مصدر جيد للألياف", "يخفف السعال"],
            applications: ["الخبز والمعجنات", "صناعة الجبن", "منكهات المشروبات", "شاي للهضم"],
            exportQuality: "درجة ممتازة، تنظيف مزدوج",
            packaging: "أكياس ورقية أو بولي بروبيلين سعة 25 كجم",
            origin: "مصر",
            specs: { "الشكل": "بذور كاملة", "النقاء": "99.5% كحد أدنى", "الشوائب": "0.5% كحد أقصى", "الرطوبة": "9% كحد أقصى", "النكهة": "حادة، ترابية" },
            seo: { title: "بذور الكراوية المصرية | توريد تصدير بالجملة", description: "توريد بذور كراوية مصرية ممتازة لجميع أنحاء العالم. نقاء عالٍ، رائحة قوية، وجودة ممتازة.", keywords: "بذور الكراوية، كراوية مصرية، تصدير الكراوية، كراوية بالجملة مصر" }
        }
    },
    {
        id: 16,
        category: 'herbs',
        image: 'assets/images/products/product-16.jpg', // Placeholder
        en: {
            name: "Cumin Seeds",
            shortDescription: "Robust and earthy cumin seeds, a staple for global spice markets.",
            fullDescription: "Our Cumin seeds are grown in the warm climate of Egypt, resulting in a rich, warm flavor and strong aroma. They are essential for a wide variety of cuisines and are processed under strict quality controls.",
            benefits: ["Boosts immunity", "Aids weight loss", "Controls blood sugar", "High in iron"],
            applications: ["Curry powders", "Meat seasonings", "Soups and stews", "Essential oil"],
            exportQuality: "Grade A, Machine Cleaned",
            packaging: "25kg / 50kg Bags",
            origin: "Egypt",
            specs: { "Form": "Whole Seeds", "Purity": "99% Min", "Admixture": "1% Max", "Moisture": "9% Max", "Oil": "2% Min" },
            seo: { title: "Egyptian Cumin Seeds Export | Cumin Whole", description: "Top-quality Egyptian cumin seeds for international export. Rich flavor and high oil content.", keywords: "cumin seeds, Egyptian cumin, cumin export, whole cumin" }
        },
        ar: {
            name: "بذور الكمون",
            shortDescription: "بذور كمون قوية وترابية، منتج أساسي لأسواق التوابل العالمية.",
            fullDescription: "تُزرع بذور الكمون الخاصة بنا في مناخ مصر الدافئ، مما ينتج عنه نكهة غنية ودافئة ورائحة قوية. هي ضرورية لمجموعة واسعة من المطابخ ويتم معالجتها تحت ضوابط جودة صارمة.",
            benefits: ["يعزز المناعة", "يساعد في إنقاص الوزن", "ينظم سكر الدم", "غني بالحديد"],
            applications: ["مساحيق الكاري", "تتبيلات اللحوم", "الحساء واليخنات", "الزيت العطري"],
            exportQuality: "درجة ممتازة، تنظيف آلي",
            packaging: "أكياس سعة 25 كجم / 50 كجم",
            origin: "مصر",
            specs: { "الشكل": "بذور كاملة", "النقاء": "99% كحد أدنى", "الشوائب": "1% كحد أقصى", "الرطوبة": "9% كحد أقصى", "الزيت": "2% كحد أدنى" },
            seo: { title: "تصدير بذور الكمون المصرية | كمون حصى", description: "بذور كمون مصرية عالية الجودة للتصدير الدولي. نكهة غنية ومحتوى زيت عالٍ.", keywords: "بذور الكمون، كمون مصري، تصدير الكمون، كمون حصى" }
        }
    },
    {
        id: 17,
        category: 'herbs',
        image: 'assets/images/products/product-17.jpg', // Placeholder
        en: {
            name: "Coriander Seeds",
            shortDescription: "Fragrant and citrusy coriander seeds, carefully dried for export.",
            fullDescription: "Egyptian Coriander is known for its light, citrusy, and slightly sweet flavor. We export whole seeds that are uniform in size and color, processed to maintain their aromatic integrity.",
            benefits: ["Supports digestion", "High in Vitamin K", "Promotes bone health", "Lowers cholesterol"],
            applications: ["Spice blends", "Pickling and brining", "Sausage production", "Herbal remedies"],
            exportQuality: "Double Cleaned, Machine Sorted",
            packaging: "25kg Multi-wall paper bags",
            origin: "Egypt",
            specs: { "Form": "Whole Seeds", "Purity": "98% Min", "Admixture": "2% Max", "Moisture": "9% Max", "Color": "Light Brown" },
            seo: { title: "Egyptian Coriander Seeds Export | Aromatic Seeds", description: "Reliable supplier of Egyptian coriander seeds. Citrusy aroma, high purity, and consistent quality.", keywords: "coriander seeds, Egyptian coriander, coriander export, spices Egypt" }
        },
        ar: {
            name: "بذور الكزبرة",
            shortDescription: "بذور كزبرة عطرة ومنعشة برائحة الحمضيات، مجففة بعناية للتصدير.",
            fullDescription: "تشتهر الكزبرة المصرية بنكهتها الخفيفة والمنعشة والحلوة قليلاً. نقوم بتصدير بذور كاملة منتظمة في الحجم واللون، ومعالجة للحفاظ على سلامتها العطرية.",
            benefits: ["يدعم الهضم", "غني بفيتامين K", "يعزز صحة العظام", "يخفض الكوليسترول"],
            applications: ["خلطات التوابل", "التخليل", "صناعة السجق", "العلاجات العشبية"],
            exportQuality: "تنظيف مزدوج، فرز آلي",
            packaging: "أكياس ورقية متعددة الطبقات سعة 25 كجم",
            origin: "مصر",
            specs: { "الشكل": "بذور كاملة", "النقاء": "98% كحد أدنى", "الشوائب": "2% كحد أقصى", "الرطوبة": "9% كحد أقصى", "اللون": "بني فاتح" },
            seo: { title: "تصدير بذور الكزبرة المصرية | بذور عطرية", description: "مورد موثوق لبذور الكزبرة المصرية. رائحة حمضية، نقاء عالٍ، وجودة ثابتة.", keywords: "بذور الكزبرة، كزبرة مصرية، تصدير الكزبرة، توابل مصر" }
        }
    },
    {
        id: 18,
        category: 'herbs',
        image: 'assets/images/products/product-18.jpg', // Placeholder
        en: {
            name: "Fenugreek Seeds",
            shortDescription: "Versatile fenugreek seeds with a unique nutty and maple-like flavor.",
            fullDescription: "Our Egyptian Fenugreek (Trigonella foenum-graecum) is sourced from dedicated farms. These seeds are rich in minerals and protein, used extensively in food, supplements, and traditional medicine.",
            benefits: ["Regulates blood sugar", "Enhances lactation", "Supports hair health", "Aids weight management"],
            applications: ["Spice blends (Curry)", "Supplements", "Bakery items", "Lotion and skin care"],
            exportQuality: "Grade A, Machine Cleaned",
            packaging: "25kg or 50kg Bags",
            origin: "Egypt",
            specs: { "Form": "Whole Seeds", "Purity": "99% Min", "Moisture": "10% Max", "Protein Content": "High" },
            seo: { title: "Egyptian Fenugreek Seeds | Wholesale Export", description: "Premium Egyptian Fenugreek seeds for global export. High nutritional value and medicinal grade.", keywords: "fenugreek seeds, Egyptian fenugreek, fenugreek export, medicinal seeds" }
        },
        ar: {
            name: "بذور الحلبة",
            shortDescription: "بذور حلبة متعددة الاستخدامات بنكهة فريدة تشبه الجوز والقيقب.",
            fullDescription: "يتم الحصول على الحلبة المصرية الخاصة بنا من مزارع مخصصة. هذه البذور غنية بالمعادن والبروتينات، وتستخدم على نطاق واسع في الغذاء والمكملات والطب التقليدي.",
            benefits: ["ينظم سكر الدم", "يعزز إدرار الحليب", "يدعم صحة الشعر", "يساعد في إدارة الوزن"],
            applications: ["خلطات التوابل (الكاري)", "المكملات الغذائية", "المخبوزات", "العناية بالبشرة"],
            exportQuality: "درجة ممتازة، تنظيف آلي",
            packaging: "أكياس سعة 25 كجم أو 50 كجم",
            origin: "مصر",
            specs: { "الشكل": "بذور كاملة", "النقاء": "99% كحد أدنى", "الشوائب": "1% كحد أقصى", "الرطوبة": "10% كحد أقصى", "محتوى البروتين": "عالٍ" },
            seo: { title: "بذور الحلبة المصرية | تصدير بالجملة", description: "بذور حلبة مصرية ممتازة للتصدير العالمي. قيمة غذائية عالية ودرجة طبية.", keywords: "بذور الحلبة، حلبة مصرية، تصدير الحلبة، بذور طبية" }
        }
    },
    {
        id: 19,
        category: 'herbs',
        image: 'assets/images/products/product-19.jpg', // Placeholder
        en: {
            name: "Wormwood (Artemisia)",
            shortDescription: "Dried Egyptian wormwood, highly valued for its intense bitterness and medicinal properties.",
            fullDescription: "Egyptian Wormwood (Artemisia absinthium) is wild-crafted and dried under optimal conditions to preserve its active compounds. It is a powerful herb used in traditional medicine and spirits.",
            benefits: ["Supports digestive health", "Anti-parasitic properties", "Anti-inflammatory", "Liver support"],
            applications: ["Herbal liqueurs (Absinthe)", "Traditional medicine", "Pest control", "Fragrance industry"],
            exportQuality: "Dried Leaves and Flowering Tops",
            packaging: "10kg - 15kg Bales or Cartons",
            origin: "Egypt",
            specs: { "Form": "Dried Cut or Whole", "Purity": "98% Min", "Moisture": "10% Max", "Color": "Grayish-Green" },
            seo: { title: "Egyptian Wormwood Export | Artemisia Absinthium", description: "Exporting high-quality dried Egyptian wormwood. Potent medicinal herb for international markets.", keywords: "wormwood, Egyptian wormwood, Artemisia, medicinal herbs Egypt" }
        },
        ar: {
            name: "الشيح (أرتيميسيا)",
            shortDescription: "شيح مصري مجفف، يحظى بتقدير كبير لمرارته الشديدة وخصائصه الطبية.",
            fullDescription: "يتم جمع الشيح المصري وتجفيفه تحت ظروف مثالية للحفاظ على مركباته النشطة. هو عشب قوي يستخدم في الطب التقليدي والمشروبات الروحية.",
            benefits: ["يدعم صحة الجهاز الهضمي", "مضاد للطفيليات", "مضاد للالتهابات", "دعم وظائف الكبد"],
            applications: ["المشروبات العشبية", "الطب التقليدي", "مكافحة الآفات", "صناعة العطور"],
            exportQuality: "أوراق ورؤوس مزهرة مجففة",
            packaging: "بالات أو كراتين سعة 10-15 كجم",
            origin: "مصر",
            specs: { "الشكل": "مجفف مقطع أو كامل", "النقاء": "98% كحد أدنى", "الرطوبة": "10% كحد أقصى", "اللون": "أخضر رمادي" },
            seo: { title: "تصدير الشيح المصري | أرتيميسيا", description: "تصدير شيح مصري مجفف عالي الجودة. عشب طبي قوي للأسواق الدولية.", keywords: "شيح، شيح مصري، أرتيميسيا، أعشاب طبية مصر" }
        }
    },
    {
        id: 20,
        category: 'herbs',
        image: 'assets/images/products/product-20.jpg', // Placeholder
        en: {
            name: "Chamomile Flowers",
            shortDescription: "Premium whole chamomile flowers, soothing and aromatic.",
            fullDescription: "Our Egyptian Chamomile (Matricaria chamomilla) is hand-picked to ensure the flowers remain intact. Known for its soothing properties and bright yellow centers with white petals, it is a world-class export product.",
            benefits: ["Reduces anxiety", "Aids sleep", "Skin soothing", "Digestive comfort"],
            applications: ["Herbal tea blends", "Cosmetics and soaps", "Essential oils", "Aromatherapy"],
            exportQuality: "Grade A, Fine Cut or Whole Flowers",
            packaging: "10kg - 20kg Cartons or Paper bags",
            origin: "Egypt",
            specs: { "Form": "Whole Flowers / TBC", "Purity": "99% Min", "Moisture": "8% Max", "Admixture": "1% Max" },
            seo: { title: "Egyptian Chamomile Flowers | Bulk Tea Supply", description: "Supplying premium dried Egyptian chamomile flowers. Whole heads, rich aroma, and calming properties.", keywords: "chamomile flowers, Egyptian chamomile, chamomile tea, herbs export" }
        },
        ar: {
            name: "أزهار البابونج",
            shortDescription: "أزهار بابونج مصرية ممتازة، مهدئة وعطرية.",
            fullDescription: "يتم قطف البابونج المصري يدوياً لضمان بقاء الزهور سليمة. يشتهر بخصائصه المهدئة ومراكزه الصفراء الزاهية مع البتلات البيضاء، وهو منتج تصدير عالمي المستوى.",
            benefits: ["يقلل القلق", "يساعد على النوم", "مهدئ للبشرة", "راحة الجهاز الهضمي"],
            applications: ["خلطات شاي الأعشاب", "مستحضرات التجميل والصابون", "الزيوت العطرية", "العلاج بالعطور"],
            exportQuality: "درجة ممتازة، مقطع ناعم أو أزهار كاملة",
            packaging: "كراتين أو أكياس ورقية سعة 10-20 كجم",
            origin: "مصر",
            specs: { "الشكل": "أزهار كاملة / مقطع", "النقاء": "99% كحد أدنى", "الرطوبة": "8% كحد أقصى", "الشوائب": "1% كحد أقصى" },
            seo: { title: "أزهار البابونج المصرية | توريد شاي بالجملة", description: "توريد أزهار البابونج المصرية المجففة الممتازة. رؤوس كاملة، رائحة غنية، وخصائص مهدئة.", keywords: "أزهار البابونج، بابونج مصري، شاي البابونج، تصدير أعشاب" }
        }
    },
    {
        id: 21,
        category: 'herbs',
        image: 'assets/images/products/product-21.jpg', // Placeholder
        en: {
            name: "Dried Mint",
            shortDescription: "Cool and refreshing dried mint leaves, high in menthol.",
            fullDescription: "Egyptian Mint is celebrated for its strong, refreshing aroma and flavor. Our mint is air-dried and processed as whole leaves or crushed flakes, retaining its vibrant green color and high menthol content.",
            benefits: ["Improves digestion", "Clears respiratory tracts", "Oral health", "Stress relief"],
            applications: ["Culinary seasoning", "Tea infusions", "Cold beverages", "Personal care"],
            exportQuality: "Grade A, Crushed or Whole Leaves",
            packaging: "10kg - 15kg Polypropylene bags",
            origin: "Egypt",
            specs: { "Form": "Crushed / Leaves", "Purity": "99% Min", "Moisture": "10% Max", "Color": "Green" },
            seo: { title: "Egyptian Dried Mint Export | Mentha Spicata", description: "Refreshing Egyptian dried mint for export. Available as whole leaves or crushed. High menthol content.", keywords: "dried mint, Egyptian mint, mint leaves export, peppermint Egypt" }
        },
        ar: {
            name: "نعناع مجفف",
            shortDescription: "أوراق نعناع مجففة منعشة وباردة، غنية بالمنثول.",
            fullDescription: "يُحتفى بالنعناع المصري لرائحته ونكهته القوية والمنعشة. يتم تجفيف النعناع الخاص بنا بالهواء ومعالجته كأوراق كاملة أو مجروشة، مع الحفاظ على لونه الأخضر النابض بالحياة ومحتواه العالي من المنثول.",
            benefits: ["يحسن الهضم", "ينقي المسالك التنفسية", "صحة الفم", "تخفيف التوتر"],
            applications: ["توابل للطهي", "شاي الأعشاب", "المشروبات الباردة", "العناية الشخصية"],
            exportQuality: "درجة ممتازة، مجروش أو أوراق كاملة",
            packaging: "أكياس بولي بروبيلين سعة 10-15 كجم",
            origin: "مصر",
            specs: { "الشكل": "مجروش / أوراق", "النقاء": "99% كحد أدنى", "الرطوبة": "10% كحد أقصى", "اللون": "أخضر" },
            seo: { title: "تصدير النعناع المجفف المصري | نعناع بلدي", description: "نعناع مصري مجفف منعش للتصدير. متاح كأوراق كاملة أو مجروش. محتوى منثول عالٍ.", keywords: "نعناع مجفف، نعناع مصري، تصدير أوراق النعناع، نعناع فلفلي مصر" }
        }
    },
    {
        id: 22,
        category: 'herbs',
        image: 'assets/images/products/product-22.jpg', // Placeholder
        en: {
            name: "Hibiscus (Karkade)",
            shortDescription: "Deep red Egyptian hibiscus calyces, rich in Vitamin C.",
            fullDescription: "Egyptian Hibiscus (Hibiscus sabdariffa) is famous for its intense red color and tart, cranberry-like flavor. We offer premium whole flowers, petals, and fine cut for tea bags, all naturally sun-dried.",
            benefits: ["Lowers blood pressure", "Rich in Vitamin C", "Heart health", "Natural detoxifier"],
            applications: ["Hot and cold tea", "Food coloring", "Jams and syrups", "Cosmetics"],
            exportQuality: "Grade A, Whole Flowers or Crushed",
            packaging: "20kg - 25kg PP bags or Cartons",
            origin: "Egypt",
            specs: { "Form": "Whole / TBC", "Purity": "99% Min", "Moisture": "12% Max", "Color": "Deep Red" },
            seo: { title: "Egyptian Hibiscus Export | Karkade Whole", description: "Premium Egyptian Hibiscus (Karkade) for export. Deep red color, tart flavor, and high Vitamin C content.", keywords: "hibiscus, karkade, Egyptian hibiscus, dried hibiscus export" }
        },
        ar: {
            name: "كركديه مصري",
            shortDescription: "كركديه مصري أحمر داكن، غني بفيتامين سي.",
            fullDescription: "يشتهر الكركديه المصري بلونه الأحمر المكثف ونكهته الحامضة التي تشبه التوت البري. نحن نقدم زهوراً كاملة ممتازة، وبتلات، ومقطع ناعم لأكياس الشاي، وكلها مجففة طبيعياً بالشمس.",
            benefits: ["يخفض ضغط الدم", "غني بفيتامين سي", "صحة القلب", "مزيل سموم طبيعي"],
            applications: ["شاي ساخن وبارد", "ملون غذائي", "المربى والشراب", "مستحضرات التجميل"],
            exportQuality: "درجة ممتازة، زهور كاملة أو مجروش",
            packaging: "أكياس بولي بروبيلين أو كراتين سعة 20-25 كجم",
            origin: "مصر",
            specs: { "الشكل": "كامل / مقطع", "النقاء": "99% كحد أدنى", "الرطوبة": "12% كحد أقصى", "اللون": "أحمر داكن" },
            seo: { title: "تصدير الكركديه المصري | كركديه أسواني", description: "كركديه مصري ممتاز للتصدير. لون أحمر داكن، نكهة حامضة، ومحتوى عالٍ من فيتامين سي.", keywords: "كركديه، كركديه مصري، تصدير كركديه مجفف، كركديه أسواني" }
        }
    },
    {
        id: 23,
        category: 'herbs',
        image: 'assets/images/products/product-23.jpg', // Placeholder
        en: {
            name: "Thyme (Zatar)",
            shortDescription: "Fragrant and earthy dried thyme, essential for Mediterranean blends.",
            fullDescription: "Our Egyptian Thyme is harvested and dried to preserve its aromatic oils. It has a robust, savory flavor that is a cornerstone of Middle Eastern and Mediterranean cuisine.",
            benefits: ["Antibacterial", "Supports immunity", "Respiratory health", "Rich in iron"],
            applications: ["Zatar blends", "Meat seasoning", "Baking", "Essential oil"],
            exportQuality: "Dried Leaves, Cleaned",
            packaging: "10kg - 20kg Bags",
            origin: "Egypt",
            specs: { "Form": "Whole Leaves / Ground", "Purity": "98% Min", "Moisture": "9% Max", "Oil": "1.5% Min" },
            seo: { title: "Egyptian Thyme Export | Dried Thyme Leaves", description: "Wholesale Egyptian dried thyme for spice blends and culinary use. Highly aromatic and pure.", keywords: "thyme, Egyptian thyme, zatar, dried herbs export" }
        },
        ar: {
            name: "زعتر مجفف",
            shortDescription: "زعتر مجفف عطري وترابي، ضروري لخلطات المطبخ المتوسطي.",
            fullDescription: "يتم حصاد وتجفيف الزعتر المصري للحفاظ على زيوطه العطرية. يتميز بنكهة قوية وشهية تعد ركيزة أساسية في المطبخ الشرق أوسطي والمتوسطي.",
            benefits: ["مضاد للبكتيريا", "يدعم المناعة", "صحة الجهاز التنفسي", "غني بالحديد"],
            applications: ["خلطات الزعتر", "تتبيل اللحوم", "المخبوزات", "الزيت العطري"],
            exportQuality: "أوراق مجففة، منظفة",
            packaging: "أكياس سعة 10-20 كجم",
            origin: "مصر",
            specs: { "الشكل": "أوراق كاملة / مطحون", "النقاء": "98% كحد أدنى", "الرطوبة": "9% كحد أقصى", "الزيت": "1.5% كحد أدنى" },
            seo: { title: "تصدير الزعتر المصري | أوراق زعتر مجففة", description: "زعتر مصري مجفف بالجملة لخلطات التوابل واستخدامات الطهي. عطري للغاية ونقي.", keywords: "زعتر، زعتر مصري، دقة، تصدير أعشاب مجففة" }
        }
    },
    {
        id: 24,
        category: 'herbs',
        image: 'assets/images/products/product-24.jpg', // Placeholder
        en: {
            name: "Dried Basil",
            shortDescription: "Aromatic Egyptian basil leaves, perfect for Italian and Mediterranean dishes.",
            fullDescription: "Egyptian Basil (Ocimum basilicum) is known for its sweet, peppery aroma. We provide high-quality dried leaves that maintain their essential oils and flavor, suitable for culinary and industrial use.",
            benefits: ["Anti-inflammatory", "Rich in Vitamin K", "Stress reduction", "Antioxidant-rich"],
            applications: ["Pesto and sauces", "Pizza toppings", "Spice blends", "Flavoring oils"],
            exportQuality: "Grade A, Crushed or Whole Leaves",
            packaging: "10kg - 15kg PP bags",
            origin: "Egypt",
            specs: { "Form": "Crushed / Whole Leaves", "Purity": "99% Min", "Moisture": "10% Max", "Color": "Green" },
            seo: { title: "Egyptian Dried Basil Export | Sweet Basil", description: "Supplying premium Egyptian dried basil leaves. Highly aromatic, vibrant color, and high purity.", keywords: "dried basil, Egyptian basil, sweet basil export, herbs Egypt" }
        },
        ar: {
            name: "ريحان مجفف",
            shortDescription: "أوراق ريحان مصري عطرة، مثالية للأطباق الإيطالية والمتوسطية.",
            fullDescription: "يُعرف الريحان المصري برائحته الحلوة والحريفة. نحن نوفر أوراقاً مجففة عالية الجودة تحافظ على زيوتها العطرية ونكهتها، ومناسبة للاستخدام في الطهي والصناعة.",
            benefits: ["مضاد للالتهابات", "غني بفيتامين K", "تقليل التوتر", "غني بمضادات الأكسدة"],
            applications: ["البيستو والصلصات", "البيتزا", "خلطات التوابل", "زيوت المنكهات"],
            exportQuality: "درجة ممتازة، مجروش أو أوراق كاملة",
            packaging: "أكياس بولي بروبيلين سعة 10-15 كجم",
            origin: "مصر",
            specs: { "الشكل": "مجروش / أوراق كاملة", "النقاء": "99% كحد أدنى", "الرطوبة": "10% كحد أقصى", "اللون": "أخضر" },
            seo: { title: "تصدير الريحان المجفف المصري | ريحان حلو", description: "توريد أوراق ريحان مصري مجفف ممتاز. عطري للغاية، لون زاهٍ، ونقاء عالٍ.", keywords: "ريحان مجفف، ريحان مصري، ريحان حلو، تصدير أعشاب" }
        }
    },
    {
        id: 25,
        category: 'herbs',
        image: 'assets/images/products/product-25.jpg', // Placeholder
        en: {
            name: "Marjoram",
            shortDescription: "Delicate and citrusy dried marjoram, high quality from Egyptian soil.",
            fullDescription: "Egyptian Marjoram is globally recognized for its superior quality. It offers a sweet, citrusy, and slightly woody flavor, making it a favorite for spice blenders and herbal tea producers.",
            benefits: ["Digestive aid", "Relieves anxiety", "Hormonal balance", "Heart health"],
            applications: ["Spice blends", "Herbal infusions", "Meat and fish seasoning", "Essential oil"],
            exportQuality: "Grade A, Machine Cleaned",
            packaging: "10kg - 20kg Bags",
            origin: "Egypt",
            specs: { "Form": "Dried Leaves / Crushed", "Purity": "99% Min", "Moisture": "10% Max", "Oil": "1.5% Min" },
            seo: { title: "Egyptian Marjoram Export | High Quality Herbs", description: "Source premium Egyptian Marjoram. High essential oil content, aromatic and meticulously cleaned.", keywords: "marjoram, Egyptian marjoram, dried marjoram export, herbs Egypt" }
        },
        ar: {
            name: "بردقوش",
            shortDescription: "بردقوش مجفف رقيق ومنعش، جودة عالية من التربة المصرية.",
            fullDescription: "يُعترف بالبردقوش المصري عالمياً لجودته الفائقة. يتميز بنكهة حلوة ومنعشة وخشبية قليلاً، مما يجعله مفضلاً لمصنعي خلطات التوابل وشاي الأعشاب.",
            benefits: ["مساعد للهضم", "يخفف القلق", "توازن الهرمونات", "صحة القلب"],
            applications: ["خلطات التوابل", "المشروبات العشبية", "تتبيل اللحوم والأسماك", "الزيت العطري"],
            exportQuality: "درجة ممتازة، تنظيف آلي",
            packaging: "أكياس سعة 10-20 كجم",
            origin: "مصر",
            specs: { "الشكل": "أوراق مجففة / مجروش", "النقاء": "99% كحد أدنى", "الرطوبة": "10% كحد أقصى", "الزيت": "1.5% كحد أدنى" },
            seo: { title: "تصدير البردقوش المصري | أعشاب عالية الجودة", description: "احصل على بردقوش مصري ممتاز. محتوى عالٍ من الزيوت العطرية، عطري ومنظف بعناية.", keywords: "بردقوش، بردقوش مصري، تصدير البردقوش، أعشاب مصر" }
        }
    },
    {
        id: 26,
        category: 'herbs',
        image: 'assets/images/products/product-26.jpg', // Placeholder
        en: {
            name: "Rosemary",
            shortDescription: "Pungent and woody dried rosemary leaves, ideal for culinary use.",
            fullDescription: "Our Egyptian Rosemary is grown in optimal conditions to maximize its aromatic potential. The dried leaves are needle-like, offering a strong, piney aroma and flavor that lasts.",
            benefits: ["Improves memory", "Rich in antioxidants", "Boosts circulation", "Anti-inflammatory"],
            applications: ["Roasted meats", "Bread and focaccia", "Essential oils", "Hair care products"],
            exportQuality: "Dried Whole Leaves",
            packaging: "10kg - 20kg PP bags",
            origin: "Egypt",
            specs: { "Form": "Whole Leaves / Cut", "Purity": "99% Min", "Moisture": "10% Max", "Color": "Grayish-Green" },
            seo: { title: "Egyptian Rosemary Export | Dried Rosemary Leaves", description: "High-quality Egyptian dried rosemary for international markets. Woody aroma and high purity.", keywords: "rosemary, Egyptian rosemary, dried rosemary export, spices" }
        },
        ar: {
            name: "روزماري (إكليل الجبل)",
            shortDescription: "أوراق روزماري مجففة قوية وخشبية، مثالية لاستخدامات الطهي.",
            fullDescription: "يُزرع الروزماري المصري في ظروف مثالية لزيادة إمكاناته العطرية. الأوراق المجففة تشبه الإبر، وتقدم رائحة ونكهة صنوبرية قوية تدوم طويلاً.",
            benefits: ["يحسن الذاكرة", "غني بمضادات الأكسدة", "ينشط الدورة الدموية", "مضاد للالتهابات"],
            applications: ["اللحوم المشوية", "الخبز والفطائر", "الزيوت العطرية", "منتجات العناية بالشعر"],
            exportQuality: "أوراق كاملة مجففة",
            packaging: "أكياس بولي بروبيلين سعة 10-20 كجم",
            origin: "مصر",
            specs: { "الشكل": "أوراق كاملة / مقطع", "النقاء": "99% كحد أدنى", "الرطوبة": "10% كحد أقصى", "اللون": "أخضر رمادي" },
            seo: { title: "تصدير الروزماري المصري | أوراق إكليل الجبل", description: "روزماري مصري مجفف عالي الجودة للأسواق الدولية. رائحة خشبية ونقاء عالٍ.", keywords: "روزماري، إكليل الجبل، روزماري مصري، تصدير أعشاب" }
        }
    },
    {
        id: 27,
        category: 'herbs',
        image: 'assets/images/products/product-27.jpg', // Placeholder
        en: {
            name: "Sage",
            shortDescription: "Earthy and peppery dried sage leaves, premium Egyptian origin.",
            fullDescription: "Egyptian Sage (Salvia officinalis) is prized for its powerful flavor and therapeutic benefits. Our sage is carefully dried to maintain its velvety texture and distinct silver-green color.",
            benefits: ["Cognitive support", "Menopause relief", "Digestive health", "Oral hygiene"],
            applications: ["Seasoning blends", "Herbal infusions", "Pharmaceuticals", "Cosmetics"],
            exportQuality: "Whole Leaves or Rubbed Sage",
            packaging: "10kg - 15kg Bags",
            origin: "Egypt",
            specs: { "Form": "Whole Leaves / Rubbed", "Purity": "98% Min", "Moisture": "10% Max", "Color": "Silvery-Green" },
            seo: { title: "Egyptian Sage Export | Dried Sage Leaves", description: "Exporter of high-grade Egyptian sage. Earthy flavor and therapeutic quality for global buyers.", keywords: "sage, Egyptian sage, dried sage export, Salvia officinalis" }
        },
        ar: {
            name: "مرمية (مرمية)",
            shortDescription: "أوراق مرمية مجففة ترابية وحريفة، من أصل مصري ممتاز.",
            fullDescription: "تحظى المرمية المصرية بتقدير كبير لنكهتها القوية وفوائدها العلاجية. يتم تجفيف المرمية بعناية للحفاظ على ملمسها المخملي ولونها الأخضر الفضي المميز.",
            benefits: ["دعم الإدراك", "تخفيف أعراض سن اليأس", "صحة الجهاز الهضمي", "نظافة الفم"],
            applications: ["خلطات التتبيل", "المشروبات العشبية", "الصناعات الدوائية", "مستحضرات التجميل"],
            exportQuality: "أوراق كاملة أو مرمية منخولة",
            packaging: "أكياس سعة 10-15 كجم",
            origin: "مصر",
            specs: { "الشكل": "أوراق كاملة / منخول", "النقاء": "98% كحد أدنى", "الرطوبة": "10% كحد أقصى", "اللون": "أخضر فضي" },
            seo: { title: "تصدير المرمية المصرية | أوراق مرمية مجففة", description: "مصدر للمرمية المصرية عالية الجودة. نكهة ترابية وجودة علاجية للمشترين العالميين.", keywords: "مرمية، مرمية مصرية، تصدير المرمية، أعشاب طبية" }
        }
    },
    {
        id: 28,
        category: 'herbs',
        image: 'assets/images/products/product-28.jpg', // Placeholder
        en: {
            name: "Lemon Verbena",
            shortDescription: "Citrusy and refreshing dried lemon verbena leaves.",
            fullDescription: "Egyptian Lemon Verbena is known for its intense lemony scent. It is a premium herbal tea ingredient, hand-harvested and air-dried to preserve its delicate flavor and aromatic oils.",
            benefits: ["Relieves stress", "Sleep aid", "Digestive support", "Anti-inflammatory"],
            applications: ["Herbal tea", "Dessert flavoring", "Potpourri", "Cosmetics"],
            exportQuality: "Grade A, Whole Leaves",
            packaging: "5kg - 10kg Cartons",
            origin: "Egypt",
            specs: { "Form": "Whole Leaves", "Purity": "99% Min", "Moisture": "10% Max", "Color": "Light Green" },
            seo: { title: "Egyptian Lemon Verbena Export | Premium Herbal Tea", description: "Wholesale supply of Egyptian dried lemon verbena. Refreshing citrus aroma, ideal for tea and infusions.", keywords: "lemon verbena, Egyptian lemon verbena, herbal tea export, dried herbs" }
        },
        ar: {
            name: "ليزينا (مليسة الليمون)",
            shortDescription: "أوراق ليزينا (مليسة الليمون) مجففة ومنعشة برائحة الليمون.",
            fullDescription: "تشتهر الليزينا المصرية برائحتها الليمونية القوية. هي مكون ممتاز لشاي الأعشاب، تُحصد يدوياً وتُجفف بالهواء للحفاظ على نكهتها الرقيقة وزيوتها العطرية.",
            benefits: ["يخفف التوتر", "يساعد على النوم", "دعم الهضم", "مضاد للالتهابات"],
            applications: ["شاي الأعشاب", "منكه للحلويات", "البخور والروائح", "مستحضرات التجميل"],
            exportQuality: "درجة ممتازة، أوراق كاملة",
            packaging: "كراتين سعة 5-10 كجم",
            origin: "مصر",
            specs: { "الشكل": "أوراق كاملة", "النقاء": "99% كحد أدنى", "الرطوبة": "10% كحد أقصى", "اللون": "أخضر فاتح" },
            seo: { title: "تصدير الليزينا المصرية | شاي أعشاب ممتاز", description: "توريد بالجملة لليزينا مصرية مجففة. رائحة ليمون منعشة، مثالية للشاي والمشروبات.", keywords: "ليزينا، مليسة الليمون، تصدير شاي أعشاب، أعشاب مجففة" }
        }
    },
    {
        id: 29,
        category: 'herbs',
        image: 'assets/images/products/product-29.jpg', // Placeholder
        en: {
            name: "Black Seed (Nigella)",
            shortDescription: "High-quality Egyptian Nigella Sativa, the 'seed of blessing'.",
            fullDescription: "Egyptian Black Seed is renowned for its high oil content and medicinal potency. Also known as Nigella Sativa or Kalonji, our seeds are pure, intensely flavored, and dark black in color.",
            benefits: ["Boosts immunity", "Antibacterial", "Anti-inflammatory", "Supports respiratory health"],
            applications: ["Baking and toppings", "Cold-pressed oil extraction", "Traditional medicine", "Supplements"],
            exportQuality: "Grade A, Machine Cleaned",
            packaging: "25kg PP bags",
            origin: "Egypt",
            specs: { "Form": "Whole Seeds", "Purity": "99% Min", "Moisture": "9% Max", "Oil Content": "High" },
            seo: { title: "Egyptian Black Seed Export | Nigella Sativa", description: "Supplying pure Egyptian black seeds (Nigella Sativa). Rich in oils and highly potent for medicinal and culinary use.", keywords: "black seed, Nigella Sativa, Egyptian black seed, kalonji export" }
        },
        ar: {
            name: "الحبة السوداء (حبة البركة)",
            shortDescription: "حبة البركة مصرية عالية الجودة، 'بذرة البركة'.",
            fullDescription: "تشتهر الحبة السوداء المصرية بمحتواها العالي من الزيوت وقوتها الطبية. تُعرف أيضاً باسم نيجيللا ساتيفا، بذورنا نقية، قوية النكهة، ولونها أسود داكن.",
            benefits: ["يعزز المناعة", "مضاد للبكتيريا", "مضاد للالتهابات", "يدعم صحة الجهاز التنفسي"],
            applications: ["المخبوزات", "استخلاص الزيت المعصور بارد", "الطب التقليدي", "المكملات الغذائية"],
            exportQuality: "درجة ممتازة، تنظيف آلي",
            packaging: "أكياس بولي بروبيلين سعة 25 كجم",
            origin: "مصر",
            specs: { "الشكل": "بذور كاملة", "النقاء": "99% كحد أدنى", "الرطوبة": "9% كحد أقصى", "محتوى الزيت": "عالٍ" },
            seo: { title: "تصدير الحبة السوداء المصرية | حبة البركة", description: "توريد بذور الحبة السوداء المصرية النقية. غنية بالزيوت وقوية جداً للاستخدام الطبي والطهي.", keywords: "الحبة السوداء، حبة البركة، حبة البركة مصرية، تصدير نيجيللا ساتيفا" }
        }
    },
    {
        id: 30,
        category: 'spices',
        image: 'assets/images/products/product-30.jpg', // Placeholder
        en: {
            name: "Black Pepper",
            shortDescription: "Premium whole black peppercorns with a sharp, spicy bite.",
            fullDescription: "Our Black Pepper consists of fully matured peppercorns, dried to perfection. It delivers a bold aroma and a sharp heat, essential for any spice collection.",
            benefits: ["Aids digestion", "High in antioxidants", "Improves nutrient absorption", "Metabolism boost"],
            applications: ["Cuisine seasoning", "Spice blends", "Meat curing", "Pickling"],
            exportQuality: "Grade A, Steam Sterilized (optional)",
            packaging: "25kg / 50kg Bags",
            origin: "Egypt (Processed/Export Quality)",
            specs: { "Form": "Whole Peppercorns", "Purity": "99% Min", "Moisture": "12% Max", "Density": "500-550 g/l" },
            seo: { title: "Black Pepper Export | Whole Black Peppercorns", description: "High-quality whole black pepper for export. Pungent aroma and sharp taste. Bulk supply available.", keywords: "black pepper, whole peppercorns, spice export, black pepper bulk" }
        },
        ar: {
            name: "فلفل أسود",
            shortDescription: "حبوب فلفل أسود كاملة ممتازة بنكهة حادة وحريفة.",
            fullDescription: "يتكون الفلفل الأسود لدينا من حبوب فلفل ناضجة تماماً، مجففة بإتقان. يقدم رائحة قوية وحرارة حادة، وهو ضروري لأي مجموعة توابل.",
            benefits: ["يساعد على الهضم", "غني بمضادات الأكسدة", "يحسن امتصاص العناصر الغذائية", "يعزز التمثيل الغذائي"],
            applications: ["توابل للطهي", "خلطات التوابل", "تمليح اللحوم", "التخليل"],
            exportQuality: "درجة ممتازة، معقم بالبخار (اختياري)",
            packaging: "أكياس سعة 25 كجم / 50 كجم",
            origin: "مصر (تجهيز/جودة تصدير)",
            specs: { "الشكل": "حبوب كاملة", "النقاء": "99% كحد أدنى", "الرطوبة": "12% كحد أقصى", "الكثافة": "500-550 جم/لتر" },
            seo: { title: "تصدير الفلفل الأسود | حبوب فلفل أسود كاملة", description: "فلفل أسود كامل عالي الجودة للتصدير. رائحة قوية وطعم حاد. متاح كميات كبيرة.", keywords: "فلفل أسود، فلفل أسود حصى، تصدير توابل، فلفل أسود بالجملة" }
        }
    },
    {
        id: 31,
        category: 'spices',
        image: 'assets/images/products/product-31.jpg', // Placeholder
        en: {
            name: "White Pepper",
            shortDescription: "Smooth and sharp white peppercorns, ideal for light-colored dishes.",
            fullDescription: "White pepper is made from fully ripe peppercorns with the outer hull removed. It offers a cleaner, sharper heat than black pepper and is perfect for gourmet sauces.",
            benefits: ["Eases stomach upset", "Anti-inflammatory", "Lowers blood pressure", "Rich in manganese"],
            applications: ["White sauces", "Cream soups", "Fish and poultry", "Mashed potatoes"],
            exportQuality: "Grade A, Machine Cleaned",
            packaging: "25kg Bags",
            origin: "Egypt (Processed)",
            specs: { "Form": "Whole Peppercorns", "Purity": "99% Min", "Moisture": "12% Max", "Color": "Creamy White" },
            seo: { title: "White Pepper Export | Whole White Peppercorns", description: "Premium white pepper for export. Sharp heat and clean flavor, perfect for gourmet culinary applications.", keywords: "white pepper, white peppercorns, spice export, premium spices" }
        },
        ar: {
            name: "فلفل أبيض",
            shortDescription: "حبوب فلفل أبيض ناعمة وحادة، مثالية للأطباق فاتحة اللون.",
            fullDescription: "يُصنع الفلفل الأبيض من حبوب الفلفل الناضجة تماماً مع إزالة القشرة الخارجية. يقدم حرارة أنقى وأكثر حدة من الفلفل الأسود وهو مثالي للصلصات الفاخرة.",
            benefits: ["يهدئ اضطرابات المعدة", "مضاد للالتهابات", "يخفض ضغط الدم", "غني بالمنجنيز"],
            applications: ["الصلصات البيضاء", "شوربات الكريمة", "الأسماك والدواجن", "البطاطس المهروسة"],
            exportQuality: "درجة ممتازة، تنظيف آلي",
            packaging: "أكياس سعة 25 كجم",
            origin: "مصر (تجهيز)",
            specs: { "الشكل": "حبوب كاملة", "النقاء": "99% كحد أدنى", "الرطوبة": "12% كحد أقصى", "اللون": "أبيض كريمي" },
            seo: { title: "تصدير الفلفل الأبيض | حبوب فلفل أبيض كاملة", description: "فلفل أبيض ممتاز للتصدير. حرارة حادة ونكهة صافية، مثالي للاستخدامات الفاخرة.", keywords: "فلفل أبيض، فلفل أبيض حصى، تصدير توابل، توابل ممتازة" }
        }
    },
    {
        id: 32,
        category: 'spices',
        image: 'assets/images/products/product-32.jpg', // Placeholder
        en: {
            name: "Crushed Red Pepper",
            shortDescription: "Spicy and vibrant red pepper flakes with seeds.",
            fullDescription: "Our Crushed Red Pepper is made from dried chili peppers. It adds a fiery heat and vibrant color to a multitude of dishes, from pizza to pasta and spice rubs.",
            benefits: ["Boosts metabolism", "Natural pain relief", "Rich in Vitamin A", "Supports heart health"],
            applications: ["Pizza topping", "Pasta sauces", "Dry rubs", "Marinades"],
            exportQuality: "Grade A, Consistent Flake Size",
            packaging: "10kg - 25kg Bags or Boxes",
            origin: "Egypt",
            specs: { "Form": "Flakes with Seeds", "Heat Level": "30,000 - 50,000 SHU", "Moisture": "10% Max", "Color": "Deep Red" },
            seo: { title: "Egyptian Crushed Red Pepper | Chili Flakes Export", description: "Hot and spicy Egyptian red pepper flakes. High quality, vibrant red color, and consistent heat level.", keywords: "crushed red pepper, chili flakes, Egyptian chili, spicy flakes" }
        },
        ar: {
            name: "فلفل أحمر مجروش",
            shortDescription: "رقائق فلفل أحمر حارة وزاهية مع البذور.",
            fullDescription: "يُصنع الفلفل الأحمر المجروش لدينا من فلفل الشطة المجفف. يضيف حرارة لاهبة ولوناً زاهياً لمجموعة كبيرة من الأطباق، من البيتزا إلى المكرونة وتتبيلات اللحوم.",
            benefits: ["يعزز التمثيل الغذائي", "مسكن طبيعي للألم", "غني بفيتامين أ", "يدعم صحة القلب"],
            applications: ["فوق البيتزا", "صلصات المكرونة", "التتبيلات الجافة", "النقع"],
            exportQuality: "درجة ممتازة، حجم رقائق ثابت",
            packaging: "أكياس أو صناديق سعة 10-25 كجم",
            origin: "مصر",
            specs: { "الشكل": "رقائق مع البذور", "مستوى الحرارة": "30,000 - 50,000 وحدة سكوفيل", "الرطوبة": "10% كحد أقصى", "اللون": "أحمر داكن" },
            seo: { title: "فلفل أحمر مجروش مصري | تصدير رقائق الشطة", description: "رقائق فلفل أحمر مصري حارة. جودة عالية، لون أحمر زاهٍ، ومستوى حرارة ثابت.", keywords: "فلفل أحمر مجروش، رقائق شطة، شطة مصرية، رقائق حارة" }
        }
    },
    {
        id: 33,
        category: 'spices',
        image: 'assets/images/products/product-33.jpg', // Placeholder
        en: {
            name: "Dried Chili Pepper",
            shortDescription: "Whole dried chili peppers with intense heat and color.",
            fullDescription: "Premium whole dried red chilies from Egypt. These chilies are selected for their color, pungency, and size, providing a steady heat for culinary and industrial use.",
            benefits: ["Rich in Capsaicin", "Clear sinuses", "Improves digestion", "Immune support"],
            applications: ["Whole in stews", "Grinding into powder", "Hot sauce production", "Oleoresin extraction"],
            exportQuality: "Grade A, Well-dried",
            packaging: "10kg - 20kg Bales or Bags",
            origin: "Egypt",
            specs: { "Form": "Whole Dried Pods", "Purity": "99% Min", "Moisture": "10% Max", "Color": "Bright Red" },
            seo: { title: "Egyptian Dried Chili Pepper | Whole Red Chili Export", description: "High-quality whole dried chili peppers from Egypt. Potent heat and bright red color for global supply.", keywords: "dried chili, red chili, Egyptian chili pepper, whole chili export" }
        },
        ar: {
            name: "شطة مجففة (فلفل حار)",
            shortDescription: "قرون شطة كاملة مجففة بحرارة ولون مكثف.",
            fullDescription: "شطة حمراء كاملة مجففة ممتازة من مصر. يتم اختيار هذه القرون بناءً على لونها وحرارتها وحجمها، مما يوفر حرارة ثابتة للاستخدام في الطهي والصناعة.",
            benefits: ["غني بالكابسيسين", "ينقي الجيوب الأنفية", "يحسن الهضم", "دعم المناعة"],
            applications: ["كاملة في اليخنات", "الطحن لعمل مسحوق", "صناعة الصلصة الحارة", "استخلاص الأوليوريسين"],
            exportQuality: "درجة ممتازة، مجفف جيداً",
            packaging: "بالات أو أكياس سعة 10-20 كجم",
            origin: "مصر",
            specs: { "الشكل": "قرون كاملة مجففة", "النقاء": "99% كحد أدنى", "الرطوبة": "10% كحد أقصى", "اللون": "أحمر زاهٍ" },
            seo: { title: "تصدير الشطة المجففة المصرية | شطة حمراء كاملة", description: "شطة مجففة مصرية كاملة عالية الجودة. حرارة قوية ولون أحمر زاهٍ للتوريد العالمي.", keywords: "شطة مجففة، فلفل حار، شطة مصرية، تصدير شطة كاملة" }
        }
    },
    {
        id: 34,
        category: 'spices',
        image: 'assets/images/products/product-34.jpg', // Placeholder
        en: {
            name: "Turmeric",
            shortDescription: "Golden-yellow turmeric with high curcumin content.",
            fullDescription: "Our Turmeric is prized for its vibrant golden color and earthy, peppery flavor. It is a vital spice known for its numerous health benefits and its use as a natural dye.",
            benefits: ["Powerful anti-inflammatory", "Antioxidant properties", "Supports liver function", "Joint health"],
            applications: ["Curry powders", "Golden milk", "Food coloring", "Dietary supplements"],
            exportQuality: "Grade A, High Curcumin",
            packaging: "25kg Bags",
            origin: "Egypt (Processed/Imported Blend)",
            specs: { "Form": "Whole Fingers / Powder", "Curcumin": "3% Min", "Moisture": "10% Max", "Color": "Golden Yellow" },
            seo: { title: "Turmeric Export | High Curcumin Turmeric", description: "Premium turmeric for export. High curcumin content, vibrant color, and earthy aroma.", keywords: "turmeric, curcumin, turmeric powder, spice export" }
        },
        ar: {
            name: "كركم",
            shortDescription: "كركم أصفر ذهبي مع محتوى عالٍ من الكركمين.",
            fullDescription: "يتميز الكركم لدينا بلونه الذهبي الزاهي ونكهته الترابية والحريفة. هو توابل حيوية معروفة بفوائدها الصحية العديدة واستخدامها كصبغة طبيعية.",
            benefits: ["مضاد قوي للالتهابات", "خصائص مضادة للأكسدة", "يدعم وظائف الكبد", "صحة المفاصل"],
            applications: ["مساحيق الكاري", "الحليب الذهبي", "ملون غذائي", "المكملات الغذائية"],
            exportQuality: "درجة ممتازة، كركمين عالٍ",
            packaging: "أكياس سعة 25 كجم",
            origin: "مصر (تجهيز)",
            specs: { "الشكل": "أصابع كاملة / مطحون", "الكركمين": "3% كحد أدنى", "الرطوبة": "10% كحد أقصى", "اللون": "أصفر ذهبي" },
            seo: { title: "تصدير الكركم | كركم عالي الكركمين", description: "كركم ممتاز للتصدير. محتوى كركمين عالٍ، لون زاهٍ، ورائحة ترابية.", keywords: "كركم، كركمين، مسحوق كركم، تصدير توابل" }
        }
    },
    {
        id: 35,
        category: 'spices',
        image: 'assets/images/products/product-35.jpg', // Placeholder
        en: {
            name: "Ginger",
            shortDescription: "Zesty and aromatic dried ginger, whole or ground.",
            fullDescription: "High-quality dried ginger roots with a sharp, pungent, and slightly sweet flavor. Perfect for flavoring beverages, baked goods, and savory dishes.",
            benefits: ["Relieves nausea", "Digestive aid", "Anti-inflammatory", "Boosts circulation"],
            applications: ["Ginger tea", "Bakery products", "Asian cuisine", "Spice blends"],
            exportQuality: "Grade A, Hand Selected",
            packaging: "25kg / 50kg Bags",
            origin: "Egypt (Processed)",
            specs: { "Form": "Whole Dried / Ground", "Purity": "99% Min", "Moisture": "12% Max", "Flavor": "Pungent" },
            seo: { title: "Ginger Export | Dried Ginger Whole & Powder", description: "Premium dried ginger for international export. Sharp flavor and high quality for food and beverage industries.", keywords: "ginger, dried ginger, ginger powder, spice export" }
        },
        ar: {
            name: "زنجبيل",
            shortDescription: "زنجبيل مجفف عطري ومنعش، كامل أو مطحون.",
            fullDescription: "جذور زنجبيل مجففة عالية الجودة بنكهة حادة وقوية وحلوة قليلاً. مثالية لتنكيه المشروبات والمخبوزات والأطباق الشهية.",
            benefits: ["يخفف الغثيان", "مساعد للهضم", "مضاد للالتهابات", "ينشط الدورة الدموية"],
            applications: ["شاي الزنجبيل", "منتجات المخابز", "المطبخ الآسيوي", "خلطات التوابل"],
            exportQuality: "درجة ممتازة، مختار يدوياً",
            packaging: "أكياس سعة 25 كجم / 50 كجم",
            origin: "مصر (تجهيز)",
            specs: { "الشكل": "مجفف كامل / مطحون", "النقاء": "99% كحد أدنى", "الرطوبة": "12% كحد أقصى", "النكهة": "قوية" },
            seo: { title: "تصدير الزنجبيل | زنجبيل مجفف كامل ومطحون", description: "زنجبيل مجفف ممتاز للتصدير الدولي. نكهة حادة وجودة عالية لصناعات الأغذية والمشروبات.", keywords: "زنجبيل، زنجبيل مجفف، مسحوق زنجبيل، تصدير توابل" }
        }
    },
    {
        id: 36,
        category: 'spices',
        image: 'assets/images/products/product-36.jpg', // Placeholder
        en: {
            name: "Cinnamon",
            shortDescription: "Sweet and woody cinnamon, available in sticks and powder.",
            fullDescription: "Aromatic cinnamon with a sweet and warm flavor profile. Sourced from the best crops, our cinnamon is perfect for adding depth to desserts and savory dishes alike.",
            benefits: ["Lowers blood sugar", "Antioxidant-rich", "Heart health", "Anti-bacterial"],
            applications: ["Bakery and pastry", "Beverages", "Savory meat dishes", "Personal care"],
            exportQuality: "Grade A, Cleaned",
            packaging: "25kg Bags or Cartons",
            origin: "Egypt (Processed)",
            specs: { "Form": "Sticks / Powder", "Purity": "99% Min", "Moisture": "12% Max", "Oil Content": "1.5% Min" },
            seo: { title: "Cinnamon Export | Cinnamon Sticks & Powder", description: "High-quality aromatic cinnamon for export. Sweet flavor, available in bulk quantities.", keywords: "cinnamon, cinnamon sticks, cinnamon powder, spice export" }
        },
        ar: {
            name: "قرفة",
            shortDescription: "قرفة حلوة وخشبية، متوفرة في شكل أعواد ومطحون.",
            fullDescription: "قرفة عطرية بنكهة حلوة ودافئة. تم الحصول عليها من أفضل المحاصيل، قرفتنا مثالية لإضافة عمق للحلويات والأطباق الشهية على حد سواء.",
            benefits: ["تخفض سكر الدم", "غنية بمضادات الأكسدة", "صحة القلب", "مضاد للبكتيريا"],
            applications: ["المخبوزات والحلويات", "المشروبات", "أطباق اللحوم", "العناية الشخصية"],
            exportQuality: "درجة ممتازة، منظفة",
            packaging: "أكياس أو كراتين سعة 25 كجم",
            origin: "مصر (تجهيز)",
            specs: { "الشكل": "أعواد / مطحون", "النقاء": "99% كحد أدنى", "الرطوبة": "12% كحد أقصى", "محتوى الزيت": "1.5% كحد أدنى" },
            seo: { title: "تصدير القرفة | أعواد قرفة ومطحون", description: "قرفة عطرية عالية الجودة للتصدير. نكهة حلوة، متاحة بكميات كبيرة.", keywords: "قرفة، أعواد قرفة، مسحوق قرفة، تصدير توابل" }
        }
    },
    {
        id: 37,
        category: 'spices',
        image: 'assets/images/products/product-37.jpg', // Placeholder
        en: {
            name: "Cloves",
            shortDescription: "Intensely aromatic whole cloves, high in essential oils.",
            fullDescription: "Premium whole cloves with a strong, spicy, and warm flavor. Known for their high eugenol content, they are essential in both culinary and medicinal applications.",
            benefits: ["Oral health", "Digestive support", "Anti-inflammatory", "High in manganese"],
            applications: ["Spice blends", "Flavoring beverages", "Dental care", "Essential oil"],
            exportQuality: "Grade A, Hand Selected",
            packaging: "25kg Bags",
            origin: "Egypt (Processed)",
            specs: { "Form": "Whole Buds", "Purity": "99% Min", "Moisture": "12% Max", "Oil": "15% Min" },
            seo: { title: "Cloves Export | Whole Cloves Supply", description: "Exporting premium whole cloves. Intense aroma and high essential oil content for global markets.", keywords: "cloves, whole cloves, spice export, cloves bulk" }
        },
        ar: {
            name: "قرنفل (مسمار)",
            shortDescription: "قرنفل كامل عطري للغاية، غني بالزيوت الأساسية.",
            fullDescription: "قرنفل كامل ممتاز بنكهة قوية وحادة ودافئة. معروف بمحتواه العالي من اليوجينول، وهو ضروري في الاستخدامات الطهوية والطبية.",
            benefits: ["صحة الفم", "دعم الهضم", "مضاد للالتهابات", "غني بالمنجنيز"],
            applications: ["خلطات التوابل", "تنكيه المشروبات", "عناية الأسنان", "الزيت العطري"],
            exportQuality: "درجة ممتازة، مختار يدوياً",
            packaging: "أكياس سعة 25 كجم",
            origin: "مصر (تجهيز)",
            specs: { "الشكل": "براعم كاملة", "النقاء": "99% كحد أدنى", "الرطوبة": "12% كحد أقصى", "الزيت": "15% كحد أدنى" },
            seo: { title: "تصدير القرنفل | توريد قرنفل مسمار", description: "تصدير قرنفل كامل ممتاز. رائحة مكثفة ومحتوى زيوت عطرية عالٍ للأسواق العالمية.", keywords: "قرنفل، قرنفل حصى، تصدير توابل، قرنفل بالجملة" }
        }
    },
    {
        id: 38,
        category: 'spices',
        image: 'assets/images/products/product-38.jpg', // Placeholder
        en: {
            name: "Cardamom",
            shortDescription: "Aromatic green cardamom pods, sweet and spicy.",
            fullDescription: "Queen of spices, our Green Cardamom pods are intensely aromatic and provide a unique sweet and spicy flavor. Perfect for gourmet cooking and flavoring traditional coffee.",
            benefits: ["Digestive aid", "Breath freshener", "Diuretic properties", "Anti-inflammatory"],
            applications: ["Coffee and tea", "Curries and stews", "Baking", "Perfumery"],
            exportQuality: "Grade A, Vibrant Green",
            packaging: "5kg - 10kg Cartons",
            origin: "Egypt (Processed)",
            specs: { "Form": "Whole Pods", "Purity": "99% Min", "Moisture": "11% Max", "Color": "Deep Green" },
            seo: { title: "Cardamom Export | Green Cardamom Pods", description: "Premium green cardamom pods for export. Intense aroma and vibrant green color.", keywords: "cardamom, green cardamom, cardamom export, spice pods" }
        },
        ar: {
            name: "حبهان (هيل)",
            shortDescription: "فصوص حبهان أخضر عطرية، حلوة وحريفة.",
            fullDescription: "ملكة التوابل، فصوص الحبهان الأخضر لدينا عطرية للغاية وتقدم نكهة فريدة حلوة وحريفة. مثالية للطهي الفاخر وتنكيه القهوة التقليدية.",
            benefits: ["مساعد للهضم", "معطر للفم", "مدر للبول", "مضاد للالتهابات"],
            applications: ["القهوة والشاي", "الكاري واليخنات", "المخبوزات", "صناعة العطور"],
            exportQuality: "درجة ممتازة، لون أخضر زاهٍ",
            packaging: "كراتين سعة 5-10 كجم",
            origin: "مصر (تجهيز)",
            specs: { "الشكل": "فصوص كاملة", "النقاء": "99% كحد أدنى", "الرطوبة": "11% كحد أقصى", "اللون": "أخضر داكن" },
            seo: { title: "تصدير الحبهان | فصوص هيل أخضر", description: "فصوص حبهان أخضر ممتازة للتصدير. رائحة مكثفة ولون أخضر زاهٍ.", keywords: "حبهان، هيل أخضر، تصدير حبهان، توابل فاخرة" }
        }
    },
    {
        id: 39,
        category: 'spices',
        image: 'assets/images/products/product-39.jpg', // Placeholder
        en: {
            name: "Nutmeg",
            shortDescription: "Warm and nutty whole nutmeg seeds.",
            fullDescription: "Our Whole Nutmeg is prized for its warm, spicy, and sweet flavor. Grating it fresh provides an intense aroma that elevates both sweet and savory dishes.",
            benefits: ["Relieves pain", "Improves brain health", "Digestive aid", "Antibacterial"],
            applications: ["Spice blends", "Desserts", "Bechamel sauce", "Aromatherapy"],
            exportQuality: "Grade A, Hand Selected",
            packaging: "25kg Bags",
            origin: "Egypt (Processed)",
            specs: { "Form": "Whole Seeds", "Purity": "99% Min", "Moisture": "10% Max", "Flavor": "Warm, Nutty" },
            seo: { title: "Nutmeg Export | Whole Nutmeg Seeds", description: "High-quality whole nutmeg for export. Rich aroma and warm flavor for diverse culinary uses.", keywords: "nutmeg, whole nutmeg, spice export, nutmeg bulk" }
        },
        ar: {
            name: "جوزة الطيب",
            shortDescription: "بذور جوزة الطيب كاملة بنكهة دافئة وتشبه الجوز.",
            fullDescription: "جوزة الطيب الكاملة لدينا تحظى بتقدير كبير لنكهتها الدافئة والحريفة والحلوة. بشرها طازجاً يوفر رائحة مكثفة ترفع من مستوى الأطباق الحلوة والشهية.",
            benefits: ["تخفيف الألم", "تحسين صحة الدماغ", "مساعد للهضم", "مضاد للبكتيريا"],
            applications: ["خلطات التوابل", "الحلويات", "صلصة البشاميل", "العلاج بالعطور"],
            exportQuality: "درجة ممتازة، مختار يدوياً",
            packaging: "أكياس سعة 25 كجم",
            origin: "مصر (تجهيز)",
            specs: { "الشكل": "بذور كاملة", "النقاء": "99% كحد أدنى", "الرطوبة": "10% كحد أقصى", "النكهة": "دافئة، جوزية" },
            seo: { title: "تصدير جوزة الطيب | بذور جوزة الطيب كاملة", description: "جوزة الطيب كاملة عالية الجودة للتصدير. رائحة غنية ونكهة دافئة لمختلف استخدامات الطهي.", keywords: "جوزة الطيب، جوزة الطيب كاملة، تصدير توابل، جوزة الطيب بالجملة" }
        }
    },
    {
        id: 40,
        category: 'spices',
        image: 'assets/images/products/product-40.jpg', // Placeholder
        en: {
            name: "Sumac",
            shortDescription: "Tangy and citrusy red sumac powder.",
            fullDescription: "Egyptian Sumac is known for its bright red color and tart, lemony flavor. It is a staple in Middle Eastern cuisine, used to add acidity and color to various dishes.",
            benefits: ["Rich in antioxidants", "Supports heart health", "Anti-inflammatory", "Regulates blood sugar"],
            applications: ["Kebab seasoning", "Salads (Fattoush)", "Dry rubs", "Marinades"],
            exportQuality: "Grade A, High Purity",
            packaging: "10kg - 25kg Bags",
            origin: "Egypt",
            specs: { "Form": "Ground Powder", "Purity": "98% Min", "Moisture": "12% Max", "Color": "Deep Red / Purple" },
            seo: { title: "Egyptian Sumac Export | Tangy Spice Powder", description: "Supplying premium Egyptian Sumac powder. Tart flavor and deep red color for authentic Mediterranean dishes.", keywords: "sumac, Egyptian sumac, sumac powder, spice export" }
        },
        ar: {
            name: "سماق",
            shortDescription: "مسحوق سماق أحمر حامض ومنعش.",
            fullDescription: "يشتهر السماق المصري بلونه الأحمر الزاهي ونكهته الحامضة التي تشبه الليمون. هو مكون أساسي في المطبخ الشرق أوسطي، يستخدم لإضافة الحموضة واللون لمختلف الأطباق.",
            benefits: ["غني بمضادات الأكسدة", "يدعم صحة القلب", "مضاد للالتهابات", "ينظم سكر الدم"],
            applications: ["تتبيل الكباب", "السلطات (الفتوش)", "التتبيلات الجافة", "النقع"],
            exportQuality: "درجة ممتازة، نقاء عالٍ",
            packaging: "أكياس سعة 10-25 كجم",
            origin: "مصر",
            specs: { "الشكل": "مسحوق مطحون", "النقاء": "98% كحد أدنى", "الرطوبة": "12% كحد أقصى", "اللون": "أحمر داكن / أرجواني" },
            seo: { title: "تصدير السماق المصري | مسحوق توابل حامض", description: "توريد مسحوق سماق مصري ممتاز. نكهة حامضة ولون أحمر داكن للأطباق المتوسطية الأصيلة.", keywords: "سماق، سماق مصري، مسحوق سماق، تصدير توابل" }
        }
    },
    {
        id: 41,
        category: 'spices',
        image: 'assets/images/products/product-41.jpg', // Placeholder
        en: {
            name: "Mixed Spices",
            shortDescription: "Traditional Egyptian spice blends for authentic flavor.",
            fullDescription: "Our Mixed Spices (Baharat) are carefully blended using traditional Egyptian recipes. It is a complex mix that provides a balanced, aromatic, and savory profile to any meat or vegetable dish.",
            benefits: ["Digestive support", "Immune boost", "Rich in minerals", "Metabolism support"],
            applications: ["Meat stews", "Rice dishes", "Soups", "Stuffing"],
            exportQuality: "Grade A, Freshly Ground",
            packaging: "25kg Bags or Cartons",
            origin: "Egypt",
            specs: { "Form": "Fine Powder", "Purity": "100% Pure Spices", "Moisture": "10% Max", "Aroma": "Complex and Savory" },
            seo: { title: "Egyptian Mixed Spices Export | Baharat Blend", description: "Authentic Egyptian mixed spices (Baharat) for export. Traditional blend for rich flavor and aroma.", keywords: "mixed spices, Baharat, Egyptian spices, spice blend export" }
        },
        ar: {
            name: "بهارات مشكلة",
            shortDescription: "خلطات توابل مصرية تقليدية لنكهة أصيلة.",
            fullDescription: "يتم خلط بهاراتنا المشكلة بعناية باستخدام وصفات مصرية تقليدية. هي مزيج معقد يوفر طابعاً متوازناً وعطرياً وشهياً لأي طبق لحم أو خضروات.",
            benefits: ["دعم الهضم", "تعزيز المناعة", "غنية بالمعادن", "دعم التمثيل الغذائي"],
            applications: ["يخنات اللحوم", "أطباق الأرز", "الحساء", "الحشوات"],
            exportQuality: "درجة ممتازة، مطحونة طازجة",
            packaging: "أكياس أو كراتين سعة 25 كجم",
            origin: "مصر",
            specs: { "الشكل": "مسحوق ناعم", "النقاء": "100% توابل نقية", "الرطوبة": "10% كحد أقصى", "الرائحة": "معقدة وشهية" },
            seo: { title: "تصدير بهارات مشكلة مصرية | خلطة بهارات", description: "بهارات مشكلة مصرية أصيلة للتصدير. خلطة تقليدية لنكهة ورائحة غنية.", keywords: "بهارات مشكلة، بهارات مصرية، خلطة توابل، تصدير توابل" }
        }
    },
    {
        id: 42,
        category: 'seeds',
        image: 'assets/images/products/product-42.jpg', // Placeholder
        en: {
            name: "Sesame Seeds",
            shortDescription: "Premium Egyptian sesame seeds, rich in oil and nutty flavor.",
            fullDescription: "Egyptian Sesame is globally famous for its high oil content and exceptional taste. We provide natural and hulled sesame, perfect for industrial use, tahini production, and bakery.",
            benefits: ["High in calcium", "Healthy fats", "Good source of fiber", "Heart health"],
            applications: ["Tahini and Halva", "Bakery and snacks", "Oil extraction", "Confectionery"],
            exportQuality: "Grade A, Machine Cleaned, 99% Purity",
            packaging: "25kg / 50kg Bags",
            origin: "Egypt",
            specs: { "Form": "Whole Seeds (Natural/Hulled)", "Purity": "99% Min", "Admixture": "1% Max", "Moisture": "6% Max", "Oil Content": "50% Min" },
            seo: { title: "Egyptian Sesame Seeds Export | Natural & Hulled", description: "Wholesale supplier of premium Egyptian sesame seeds. High oil content, 99% purity, and nutty flavor.", keywords: "sesame seeds, Egyptian sesame, tahini seeds, sesame export" }
        },
        ar: {
            name: "سمسم مصري",
            shortDescription: "سمسم مصري ممتاز، غني بالزيت والنكهة الجوزية.",
            fullDescription: "يشتهر السمسم المصري عالمياً بمحتواه العالي من الزيوت ومذاقه الاستثنائي. نحن نوفر السمسم الطبيعي والمقشور، وهو مثالي للاستخدام الصناعي وإنتاج الطحينة والمخبوزات.",
            benefits: ["غني بالكالسيوم", "دهون صحية", "مصدر جيد للألياف", "صحة القلب"],
            applications: ["الطحينة والحلاوة", "المخبوزات والوجبات الخفيفة", "عصر الزيت", "الحلويات"],
            exportQuality: "درجة ممتازة، تنظيف آلي، نقاء 99%",
            packaging: "أكياس سعة 25 كجم / 50 كجم",
            origin: "مصر",
            specs: { "الشكل": "بذور كاملة (طبيعي/مقشور)", "النقاء": "99% كحد أدنى", "الشوائب": "1% كحد أقصى", "الرطوبة": "6% كحد أقصى", "محتوى الزيت": "50% كحد أدنى" },
            seo: { title: "تصدير السمسم المصري | طبيعي ومقشور", description: "مورد بالجملة لسمسم مصري ممتاز. محتوى زيت عالٍ، نقاء 99%، ونكهة جوزية مميزة.", keywords: "سمسم، سمسم مصري، سمسم طحينة، تصدير سمسم" }
        }
    },
    {
        id: 43,
        category: 'seeds',
        image: 'assets/images/products/product-43.jpg', // Placeholder
        en: {
            name: "Chia Seeds",
            shortDescription: "Nutrient-dense chia seeds, a superfood for global markets.",
            fullDescription: "Our Chia Seeds are high-quality, rich in Omega-3, and offer excellent nutritional value. They are processed to meet international health standards and are perfect for a variety of food applications.",
            benefits: ["High in Omega-3", "Excellent fiber source", "Protein-rich", "Supports weight loss"],
            applications: ["Smoothies", "Bakery products", "Pudding", "Supplements"],
            exportQuality: "Grade A, Machine Cleaned",
            packaging: "25kg Bags",
            origin: "Egypt (Cultivated)",
            specs: { "Form": "Whole Seeds", "Purity": "99.5% Min", "Moisture": "9% Max", "Color": "Black/Gray" },
            seo: { title: "Chia Seeds Export | High Nutrition Superfood", description: "Premium chia seeds for export. High Omega-3 content and purity for health-conscious markets.", keywords: "chia seeds, superfood export, Egyptian chia, nutritious seeds" }
        },
        ar: {
            name: "بذور الشيا",
            shortDescription: "بذور شيا كثيفة العناصر الغذائية، غذاء خارق للأسواق العالمية.",
            fullDescription: "بذور الشيا لدينا عالية الجودة، غنية بأوميجا 3، وتقدم قيمة غذائية ممتازة. تتم معالجتها لتلبية معايير الصحة الدولية وهي مثالية لمجموعة متنوعة من التطبيقات الغذائية.",
            benefits: ["غنية بأوميجا 3", "مصدر ممتاز للألياف", "غنية بالبروتين", "تدعم إنقاص الوزن"],
            applications: ["العصائر (سموذي)", "المخبوزات", "بودنج", "المكملات الغذائية"],
            exportQuality: "درجة ممتازة، تنظيف آلي",
            packaging: "أكياس سعة 25 كجم",
            origin: "مصر (زراعة)",
            specs: { "الشكل": "بذور كاملة", "النقاء": "99.5% كحد أدنى", "الرطوبة": "9% كحد أقصى", "اللون": "أسود / رمادي" },
            seo: { title: "تصدير بذور الشيا | غذاء خارق عالي القيمة", description: "بذور شيا ممتازة للتصدير. محتوى عالٍ من أوميجا 3 ونقاء فائق للأسواق المهتمة بالصحة.", keywords: "بذور الشيا، تصدير أغذية خارقة، بذور مغذية" }
        }
    },
    {
        id: 44,
        category: 'seeds',
        image: 'assets/images/products/product-44.jpg', // Placeholder
        en: {
            name: "Flax Seeds",
            shortDescription: "Premium brown flax seeds, rich in lignans and fiber.",
            fullDescription: "Egyptian Flax seeds are known for their high quality and nutrient density. We offer brown flax seeds that are carefully cleaned and suitable for human consumption and industrial use.",
            benefits: ["Heart health", "High in fiber", "Rich in Omega-3", "Improves digestion"],
            applications: ["Baking", "Oil extraction", "Animal feed (premium)", "Supplements"],
            exportQuality: "Grade A, 99% Purity",
            packaging: "25kg / 50kg Bags",
            origin: "Egypt",
            specs: { "Form": "Whole Seeds", "Purity": "99% Min", "Moisture": "9% Max", "Oil Content": "35% Min" },
            seo: { title: "Egyptian Flax Seeds Export | Brown Linseed", description: "High-quality Egyptian flax seeds (linseed) for export. Nutrient-dense and high purity.", keywords: "flax seeds, linseed, Egyptian flax, seeds export" }
        },
        ar: {
            name: "بذور الكتان",
            shortDescription: "بذور كتان بنية ممتازة، غنية بالليجنان والألياف.",
            fullDescription: "تشتهر بذور الكتان المصرية بجودتها العالية وكثافتها الغذائية. نحن نقدم بذور كتان بنية تم تنظيفها بعناية وهي مناسبة للاستهلاك البشري والاستخدام الصناعي.",
            benefits: ["صحة القلب", "غنية بالألياف", "غنية بأوميجا 3", "تحسن الهضم"],
            applications: ["المخبوزات", "عصر الزيت", "أعلاف الحيوانات الممتازة", "المكملات الغذائية"],
            exportQuality: "درجة ممتازة، نقاء 99%",
            packaging: "أكياس سعة 25 كجم / 50 كجم",
            origin: "مصر",
            specs: { "الشكل": "بذور كاملة", "النقاء": "99% كحد أدنى", "الرطوبة": "9% كحد أقصى", "محتوى الزيت": "35% كحد أدنى" },
            seo: { title: "تصدير بذور الكتان المصرية | بذور الكتان البنية", description: "بذور كتان مصرية عالية الجودة للتصدير. كثيفة العناصر الغذائية ونقاء عالٍ.", keywords: "بذور الكتان، كتان مصري، تصدير بذور، بذور زيتية" }
        }
    },
    {
        id: 45,
        category: 'seeds',
        image: 'assets/images/products/product-45.jpg', // Placeholder
        en: {
            name: "Sunflower Seeds",
            shortDescription: "Crunchy and tasty sunflower seeds, large size and high quality.",
            fullDescription: "Egyptian Sunflower seeds are selected for their size and flavor. They are a popular snack and ingredient, processed to ensure freshness and high nutritional value.",
            benefits: ["Vitamin E rich", "Supports skin health", "Healthy fats", "Energy boost"],
            applications: ["Snacking", "Bakery topping", "Salad ingredient", "Oil extraction"],
            exportQuality: "Grade A, Large Size",
            packaging: "20kg - 25kg Bags",
            origin: "Egypt",
            specs: { "Form": "Whole in shell / Kernels", "Purity": "99% Min", "Moisture": "9% Max", "Size": "Consistent Large" },
            seo: { title: "Egyptian Sunflower Seeds Export | Premium Quality", description: "Wholesale export of large Egyptian sunflower seeds. Fresh, crunchy, and high in Vitamin E.", keywords: "sunflower seeds, Egyptian sunflower, seeds export, snacks Egypt" }
        },
        ar: {
            name: "بذور عباد الشمس (لب)",
            shortDescription: "بذور عباد الشمس مقرمشة ولذيذة، حجم كبير وجودة عالية.",
            fullDescription: "يتم اختيار بذور عباد الشمس المصرية بناءً على حجمها ونكهتها. هي وجبة خفيفة ومكون شائع، تتم معالجتها لضمان الطزاجة والقيمة الغذائية العالية.",
            benefits: ["غنية بفيتامين هـ", "تدعم صحة البشرة", "دهون صحية", "تعزز الطاقة"],
            applications: ["التسالي (سناك)", "تزيين المخبوزات", "إضافات للسلطة", "عصر الزيت"],
            exportQuality: "درجة ممتازة، حجم كبير",
            packaging: "أكياس سعة 20-25 كجم",
            origin: "مصر",
            specs: { "الشكل": "بذور كاملة بالقشرة / قلب", "النقاء": "99% كحد أدنى", "الرطوبة": "9% كحد أقصى", "الحجم": "كبير منتظم" },
            seo: { title: "تصدير بذور عباد الشمس المصرية | جودة ممتازة", description: "تصدير بالجملة لبذور عباد الشمس المصرية الكبيرة. طازجة، مقرمشة، وغنية بفيتامين هـ.", keywords: "بذور عباد الشمس، لب سوري، عباد شمس مصري، تصدير بذور" }
        }
    },
    {
        id: 46,
        category: 'grains',
        image: 'assets/images/products/product-46.jpg', // Placeholder
        en: {
            name: "Millet",
            shortDescription: "Nutritious and gluten-free Egyptian millet grains.",
            fullDescription: "Egyptian Millet is a versatile and ancient grain, valued for its high protein and mineral content. It is naturally gluten-free and suitable for various culinary uses and bird feed.",
            benefits: ["Gluten-free", "High in magnesium", "Rich in fiber", "Supports heart health"],
            applications: ["Porridge and flatbread", "Healthy snacks", "Bird feed", "Beer brewing"],
            exportQuality: "Grade A, Machine Cleaned",
            packaging: "25kg / 50kg Bags",
            origin: "Egypt",
            specs: { "Form": "Whole Grains", "Purity": "99% Min", "Moisture": "12% Max", "Color": "Yellowish / Creamy" },
            seo: { title: "Egyptian Millet Export | Gluten-Free Grain", description: "High-quality Egyptian millet for export. Nutrient-dense, gluten-free, and suitable for food and feed.", keywords: "millet, Egyptian millet, grains export, gluten-free grains" }
        },
        ar: {
            name: "دخن (مغلي)",
            shortDescription: "حبوب دخن مصرية مغذية وخالية من الجلوتين.",
            fullDescription: "الدخن المصري هو حبوب قديمة ومتعددة الاستخدامات، تُقدر لمحتواها العالي من البروتين والمعادن. هو خالي من الجلوتين طبيعياً ومناسب لمختلف الاستخدامات الطهوية وأعلاف الطيور.",
            benefits: ["خالي من الجلوتين", "غني بالماغنيزوم", "غني بالألياف", "يدعم صحة القلب"],
            applications: ["العصيدة والخبز المسطح", "وجبات خفيفة صحية", "أعلاف الطيور", "صناعة المشروبات"],
            exportQuality: "درجة ممتازة، تنظيف آلي",
            packaging: "أكياس سعة 25 كجم / 50 كجم",
            origin: "مصر",
            specs: { "الشكل": "حبوب كاملة", "النقاء": "99% كحد أدنى", "الرطوبة": "12% كحد أقصى", "اللون": "مصفر / كريمي" },
            seo: { title: "تصدير الدخن المصري | حبوب خالية من الجلوتين", description: "دخن مصري عالي الجودة للتصدير. كثيف العناصر الغذائية، خالي من الجلوتين، ومناسب للغذاء والأعلاف.", keywords: "دخن، دخن مصري، تصدير حبوب، حبوب خالية من الجلوتين" }
        }
    },
    {
        id: 47,
        category: 'grains',
        image: 'assets/images/products/product-47.jpg', // Placeholder
        en: {
            name: "Yellow Corn",
            shortDescription: "High-quality Egyptian yellow corn, ideal for feed and food industry.",
            fullDescription: "Egyptian Yellow Corn is harvested at peak maturity to ensure high energy content and nutrient density. Used extensively in animal feed and for various industrial food products.",
            benefits: ["High energy source", "Rich in carotenoids", "Essential for livestock", "Versatile industrial use"],
            applications: ["Animal feed", "Corn oil production", "Milling and flour", "Starch industry"],
            exportQuality: "Grade A, Well-dried",
            packaging: "Bulk or 50kg Bags",
            origin: "Egypt",
            specs: { "Form": "Whole Grains", "Purity": "98% Min", "Moisture": "14% Max", "Admixture": "2% Max" },
            seo: { title: "Egyptian Yellow Corn Export | High Energy Feed", description: "Supplying premium Egyptian yellow corn for global markets. Ideal for livestock feed and industrial food production.", keywords: "yellow corn, Egyptian corn, corn export, feed corn" }
        },
        ar: {
            name: "ذرة صفراء",
            shortDescription: "ذرة صفراء مصرية عالية الجودة، مثالية للأعلاف وصناعة الأغذية.",
            fullDescription: "يتم حصاد الذرة الصفراء المصرية في ذروة نضجها لضمان محتوى طاقة عالٍ وكثافة غذائية. تستخدم على نطاق واسع في أعلاف الحيوانات ومختلف المنتجات الغذائية الصناعية.",
            benefits: ["مصدر طاقة عالٍ", "غنية بالكاروتينات", "ضرورية للماشية", "استخدام صناعي متعدد"],
            applications: ["أعلاف الحيوانات", "إنتاج زيت الذرة", "الطحن والدقيق", "صناعة النشا"],
            exportQuality: "درجة ممتازة، مجففة جيداً",
            packaging: "صب (bulk) أو أكياس سعة 50 كجم",
            origin: "مصر",
            specs: { "الشكل": "حبوب كاملة", "النقاء": "98% كحد أدنى", "الرطوبة": "14% كحد أقصى", "الشوائب": "2% كحد أقصى" },
            seo: { title: "تصدير الذرة الصفراء المصرية | أعلاف عالية الطاقة", description: "توريد ذرة صفراء مصرية ممتازة للأسواق العالمية. مثالية لأعلاف الماشية والإنتاج الغذائي الصناعي.", keywords: "ذرة صفراء، ذرة مصرية، تصدير ذرة، ذرة أعلاف" }
        }
    },
    {
        id: 48,
        category: 'grains',
        image: 'assets/images/products/product-48.jpg', // Placeholder
        en: {
            name: "Barley",
            shortDescription: "Egyptian barley grains, excellent for food, beverages, and feed.",
            fullDescription: "Our Egyptian Barley is a hardy and nutritious grain. It is processed to maintain its natural goodness and is available in various forms for food production and brewing industries.",
            benefits: ["High in fiber", "Beta-glucan content", "Supports heart health", "Improves digestion"],
            applications: ["Brewing industry", "Bread and cereals", "Soups and stews", "Livestock feed"],
            exportQuality: "Grade A, Machine Cleaned",
            packaging: "50kg Bags",
            origin: "Egypt",
            specs: { "Form": "Whole Grains", "Purity": "98% Min", "Moisture": "13% Max", "Color": "Straw Yellow" },
            seo: { title: "Egyptian Barley Export | Quality Feed & Food Grains", description: "Reliable supplier of Egyptian barley grains. Rich in fiber and suitable for brewing, food, and animal feed.", keywords: "barley, Egyptian barley, grains export, brewing barley" }
        },
        ar: {
            name: "شعير",
            shortDescription: "حبوب شعير مصرية، ممتازة للغذاء والمشروبات والأعلاف.",
            fullDescription: "الشعير المصري هو حبوب مغذية وقوية. تتم معالجته للحفاظ على فوائده الطبيعية وهو متاح في أشكال مختلفة لإنتاج الغذاء وصناعات المشروبات.",
            benefits: ["غني بالألياف", "يحتوي على بيتا جلوكان", "يدعم صحة القلب", "يحسن الهضم"],
            applications: ["صناعة المشروبات", "الخبز والحبوب", "الحساء واليخنات", "أعلاف الماشية"],
            exportQuality: "درجة ممتازة، تنظيف آلي",
            packaging: "أكياس سعة 50 كجم",
            origin: "مصر",
            specs: { "الشكل": "حبوب كاملة", "النقاء": "98% كحد أدنى", "الرطوبة": "13% كحد أقصى", "اللون": "أفر قشي" },
            seo: { title: "تصدير الشعير المصري | حبوب عالية الجودة", description: "مورد موثوق لحبوب الشعير المصرية. غني بالألياف ومناسب للصناعة والغذاء والأعلاف.", keywords: "شعير، شعير مصري، تصدير حبوب، شعير مشروبات" }
        }
    },
    {
        id: 49,
        category: 'grains',
        image: 'assets/images/products/product-49.jpg', // Placeholder
        en: {
            name: "Wheat",
            shortDescription: "Premium Egyptian wheat, the foundation of culinary traditions.",
            fullDescription: "Egyptian Wheat is known for its durability and high quality. We export grains that are suitable for milling into various grades of flour for the bakery and pasta industries.",
            benefits: ["Essential carbohydrates", "Rich in minerals", "Good protein source", "Versatile nutrition"],
            applications: ["Milling for flour", "Pasta production", "Bakery items", "Semolina"],
            exportQuality: "Grade A, High Test Weight",
            packaging: "Bulk or 50kg Bags",
            origin: "Egypt",
            specs: { "Form": "Whole Grains", "Protein": "11-13%", "Moisture": "13.5% Max", "Purity": "98.5% Min" },
            seo: { title: "Egyptian Wheat Export | Quality Milling Wheat", description: "Exporting high-grade Egyptian wheat for the global milling and bakery industries. Consistent quality and high protein.", keywords: "wheat, Egyptian wheat, wheat export, milling grains" }
        },
        ar: {
            name: "قمح",
            shortDescription: "قمح مصري ممتاز، أساس تقاليد الطهي.",
            fullDescription: "يُعرف القمح المصري بصلابته وجودته العالية. نقوم بتصدير حبوب مناسبة للطحن لإنتاج درجات مختلفة من الدقيق لصناعات المخابز والمكرونة.",
            benefits: ["كربوهيدرات أساسية", "غني بالمعادن", "مصدر جيد للبروتين", "تغذية متعددة"],
            applications: ["الطحن لعمل دقيق", "صناعة المكرونة", "المخبوزات", "السميد"],
            exportQuality: "درجة ممتازة، وزن نوعي عالٍ",
            packaging: "صب (bulk) أو أكياس سعة 50 كجم",
            origin: "مصر",
            specs: { "الشكل": "حبوب كاملة", "البروتين": "11-13%", "الرطوبة": "13.5% كحد أقصى", "النقاء": "98.5% كحد أدنى" },
            seo: { title: "تصدير القمح المصري | قمح طحن عالي الجودة", description: "تصدير قمح مصري عالي الدرجة لصناعات الطحن والمخابز العالمية. جودة ثابتة وبروتين عالٍ.", keywords: "قمح، قمح مصري، تصدير قمح، حبوب طحن" }
        }
    },
    {
        id: 50,
        category: 'grains',
        image: 'assets/images/products/product-50.jpg', // Placeholder
        en: {
            name: "Rice",
            shortDescription: "Egyptian white rice, famous for its round grain and creamy texture.",
            fullDescription: "Egyptian Camolino Rice is world-famous for its unique short, round grain and its ability to absorb flavors while remaining creamy and soft. It is a premium table rice for global markets.",
            benefits: ["Easy to digest", "Fast energy source", "Low fat", "Naturally gluten-free"],
            applications: ["Gourmet cooking", "Stuffed vegetables", "Side dishes", "Rice puddings"],
            exportQuality: "Grade A, Camolino / White Rice",
            packaging: "1kg - 25kg Bags",
            origin: "Egypt",
            specs: { "Form": "Round Grains", "Broken Grains": "5% Max", "Moisture": "14% Max", "Whiteness": "Consistent" },
            seo: { title: "Egyptian Camolino Rice Export | Premium White Rice", description: "Exporter of authentic Egyptian Camolino rice. Short grain, high whiteness, and excellent culinary results.", keywords: "Egyptian rice, Camolino rice, rice export, white rice Egypt" }
        },
        ar: {
            name: "أرز مصري",
            shortDescription: "أرز مصري أبيض، مشهور بحبوبه المستديرة وقوامه الكريمي.",
            fullDescription: "يُعد الأرز المصري (كامولينو) مشهوراً عالمياً بحبوبه القصيرة والمستديرة الفريدة وقدرته على امتصاص النكهات مع الحفاظ على قوام كريمي وناعم. هو أرز مائدة ممتاز للأسواق العالمية.",
            benefits: ["سهل الهضم", "مصدر طاقة سريع", "قليل الدهون", "خالي من الجلوتين طبيعياً"],
            applications: ["الطهي الفاخر", "المحاشي", "أطباق جانبية", "أرز باللبن"],
            exportQuality: "درجة ممتازة، كامولينو / أرز أبيض",
            packaging: "أكياس سعة 1 كجم - 25 كجم",
            origin: "مصر",
            specs: { "الشكل": "حبوب مستديرة", "نسبة الكسر": "5% كحد أقصى", "الرطوبة": "14% كحد أقصى", "البياض": "ثابت" },
            seo: { title: "تصدير الأرز المصري | أرز كامولينو ممتاز", description: "مصدر للأرز المصري الكامولينو الأصيل. حبوب قصيرة، بياض عالٍ، ونتائج طهي ممتازة.", keywords: "أرز مصري، أرز كامولينو، تصدير أرز، أرز أبيض مصر" }
        }
    }
];
