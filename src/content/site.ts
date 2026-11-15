// All copy and data lives here. Pages hold no hard-coded text.
// Source: https://hisano-jp.com (client's own site). Items marked TODO were
// cut off when read and need the full text pasted in.

export const site = {
  name: "HISANO",
  title: "HISANO",
  description:
    "HISANOは、安全で便利な健康食品を各種ECショップで提供しています。私たちは、日本国内どこでも送料無料でお届けし、お客様に負担なく商品を手に入れていただけるよう努めています。",
  copyright: "(C)2025 HISANO.",
  // TODO: confirm the operating-company URL.
  operatorUrl: "https://vntgroup.co.jp",
};

// Photos are loaded from the old site's file storage for now.
// TODO: copy them into public/images and point these at the local files,
// so they keep working if the old site is closed.
const DESIGN = "https://storage.googleapis.com/studio-design-asset-files/projects/RQqJl8e3Wg";
const CMS = "https://storage.googleapis.com/studio-cms-assets/projects/RQqJl8e3Wg";

export const nav = [
  { label: "商品について", href: "/product" },
  { label: "私たちについて", href: "/about" },
  { label: "資料請求", href: "/download" },
  { label: "お問い合わせ", href: "/contact" },
];

export const hero = {
  title: "もうひと飲み、気を遣う。",
  text: "食事だけで必要な栄養素を摂り続けるのは手間も時間もかかる。そんなお客様の声にお答えした、一人ひとりに寄り添う健康食品を。",
};

export const intro = {
  title: "安全で便利な健康食品を",
  text: site.description,
};

// Decorative lifestyle photos beside the intro text.
export const introImages = [
  { src: `${DESIGN}/s-1920x1280_v-frms_webp_77dd3c1f-dad2-4103-8015-2bba5c557e03_middle.webp`, width: 1200, height: 800 },
  { src: `${DESIGN}/s-640x427_v-fs_webp_e7bcc742-d122-460d-b48d-860ac674fa41.webp`, width: 640, height: 427 },
  { src: `${DESIGN}/s-640x427_v-fs_webp_506a1c61-e267-4c5d-9c50-799a5e843fd4.webp`, width: 640, height: 427 },
];

export const featuredHeading = "健康的な生活を考えて作られた商品をお届けしています";

export const featured = [
  {
    badge: "人気商品",
    name: "サメ軟骨パワープラス",
    href: "/product/shark-cartilage",
    image: `${DESIGN}/s-813x800_v-fs_webp_2eccf9c2-9dc8-48a9-b520-1f4a2f3368d3.webp`,
    text: "サメの軟骨末だけを使用した、純正サメ軟骨。コンドロイチンを含む食品は鳥の骨などがありますが、なかでもサメは骨全体が軟骨なのできわめて効率良くコンドロイチンを摂取することができます。",
  },
  {
    badge: "人気商品",
    name: "冬虫夏草プレミアムクラス",
    image: `${DESIGN}/s-813x800_v-fs_webp_9178d1a6-1e78-44a6-856b-081377089f9f.webp`,
    // TODO: paste the rest of the original sentence if it continues.
    text: "「冬虫夏草プレミアムクラス」は、安心安全の国内製造、冬虫夏草を100%使用しています。冬虫夏草には、コルジセピンやβグルカン、その他ビタミン、ミネラル、18種類のアミノ酸などが豊富に含まれています。",
  },
];

export const detailLabel = "詳しく見る";

// サメ軟骨パワープラス: the product page is built from the client's own
// banner images. Each alt repeats the wording printed on its image.
export const shark = {
  name: "サメ軟骨パワープラス",
  lead: featured[0].text,
  pack: {
    src: "/images/shark-pack.jpg",
    alt: "サメ軟骨パワープラス 300粒のパッケージ。サメ軟骨加工食品、日本製。",
    width: 636,
    height: 1200,
  },
  images: [
    {
      src: "/images/shark-hero.webp",
      alt: "「歩く」健康を考えた、高濃度コンドロイチン配合サプリ。100%純サメ軟骨、大容量375mg×300粒、GMP認定の日本製。累計販売個数80,000個突破。",
    },
    {
      src: "/images/shark-worry.webp",
      alt: "階段キツくないですか？しゃがめない、立ち上がるのが大変、同じ姿勢でいると痛い。これらには年齢と共に減少する成分が関係しているかもしれません。",
    },
    {
      src: "/images/shark-joint.webp",
      alt: "それは関節にある軟骨成分（コンドロイチン）。コンドロイチンは保水力があり、関節にある軟骨を守る働きがある成分として注目されています。体内のコンドロイチンは年齢と共に減少するため、食品などで外から補うことが大切です。",
    },
    {
      src: "/images/shark-chondroitin.webp",
      alt: "コンドロイチンって？動物の軟骨や結合組織に存在するムコ多糖類の一種で、特にサメや牛の軟骨から抽出される自然由来の成分。軟骨の主成分として関節の健康維持をサポートします。",
    },
    {
      src: "/images/shark-material.webp",
      alt: "おすすめPOINT：高純度・高品質のサメ軟骨使用。国内および台湾で水揚げされた新鮮なサメの軟骨を100%使用し、品質と安全性を確保しています。",
    },
    {
      src: "/images/shark-nutrients.webp",
      alt: "おすすめPOINT：栄養成分の豊富さ。サメ軟骨には、関節の健康維持に重要なコンドロイチン硫酸と、組織の弾力性を保つ海洋性Ⅱ型コラーゲンが含まれています。",
    },
    {
      src: "/images/shark-factory.webp",
      alt: "おすすめPOINT：安心を届ける製造を。厳格な品質管理基準を満たしたGMP認定の日本国内工場で製造し、製品の安全性と品質を保証しています。",
    },
    {
      src: "/images/shark-quality.webp",
      alt: "品質管理と分析。HISANOの商品は、品質の管理された工場で生産し、分析等の確認も行っております。試験成績書の写し。",
    },
  ],
};

export const productsHeading = "商品一覧";

export const products = [
  { name: "HISANO PREMIUM NMN 36000", image: `${DESIGN}/s-620x700_v-fs_webp_e0106074-144f-46b6-abb7-b435fe952ff1.webp`, price: "¥49,680（税込）" },
  { name: "沖縄フコイダンプレミアム", image: `${DESIGN}/s-800x800_v-fs_webp_2047faf5-a582-42dc-933e-3cb0e265b5ae_small.webp`, price: "¥22,680（税込）" },
  { name: "フコイダンプレミアム", image: `${CMS}/s-800x800_v-fs_webp_c0ec29b5-237b-4ef0-976b-bf3c341eb975_small.webp`, price: "¥38,000（税込）" },
  { name: "Hisanoイチョウ SQ DHA オメガ3-6-9プレミアム", image: `${CMS}/s-813x800_v-fs_webp_f46d4443-4ecb-4e43-90fa-784d7be90fcb.webp`, price: "¥19,440（税込）" },
  { name: "HISANO ビフィズス菌プレミアム+", image: `${CMS}/s-813x800_v-fs_webp_8237735e-05e6-4778-b3ce-3d07f66c5d30.webp`, price: "¥5,940（税込）" },
  { name: "HISANO アンセリンプレミアム+", image: `${CMS}/s-813x800_v-fs_webp_1f7c6843-ce31-42e7-acc3-faa810ef9604.webp`, price: "¥16,740（税込）" },
];

export const priceLabel = "メーカー希望販売価格";
export const moreLabel = "もっと見る";

export const benefits = [
  {
    label: "送料無料",
    title: "日本国内どこでも",
    text: "私たちは、日本全国どこへでも送料無料でお届けしています。日々使う商品だからこそ、余計な負担を感じることなく手に取っていただきたい。そんな思いから、いつでも送料を気にせずご利用いただける体制を整えています。",
  },
  {
    label: "安全なショッピング",
    title: "安心してお買い物",
    // TODO: the original sentence was cut off after 「安心して」; confirm the ending.
    text: "当店では、お客様に安心してお買い物いただけるよう、高度なセキュリティー対策を施し、安全なオンラインショッピング環境をご提供しております。個人情報の取り扱いには最大限の注意を払っておりますので、安心してご利用ください。",
  },
  {
    label: "顧客満足",
    title: "お客様に満足いただけるよう",
    text: "当店では、お客様の声に真摯に耳を傾け、常に改善に取り組んでおります。商品の品質や配送、カスタマーサポートなど、全ての面でお客様に満足いただけるよう努めています。",
  },
  {
    label: "カスタマーサポート",
    title: "迅速な対応",
    text: "当店では、お客様に安心してお買い物いただけるよう、カスタマーサポートをご用意しています。電話やメールでのお問い合わせに、迅速に対応いたしますので、お気軽にご連絡ください。",
  },
];

export const cta = {
  text: "私たちの商品に関する詳細はお問い合わせから",
  download: "資料請求",
  contact: "お問い合わせ",
};

export const about = {
  heroTitle: "私たちは皆様の毎日の健康をサポートしています。",
  heroText:
    "私たちにとって、健康は日々の生活を充実させ、未来をより豊かにするための不可欠なものです。HISANOでは、そんな健康を支えるために、一人ひとりのニーズに応じた商品を、安心して長く続けられる形で提供することに力を注いでいます。",
  tagline: "数多くの健康食品が国内外で愛される、HISANO商品だからこその安心と高品質。",
  heroImage: { src: `${DESIGN}/s-1070x833_v-fs_webp_f99c7d60-8ddb-4201-9d72-ca42b1cbe259.webp`, width: 1070, height: 833 },
  factoryImage: {
    src: `${DESIGN}/s-537x376_webp_828cedbd-a0d2-42b8-a045-da2d4377377c.webp`,
    width: 537,
    height: 376,
    alt: "アムスライフサイエンス本社工場",
  },
  production: {
    heading: "生産体制に関して",
    title: "安心してご利用いただける製品を",
    text: "私たちはお客様に安心してお選びいただける商品を、これからも変わらずお届けし続けてまいります。健康に寄り添い、信頼される品質を守りながら、皆さまの毎日に貢献できる商品作りに努めています。",
    factory:
      "HISANOの健康食品は、アムスライフサイエンス本社工場で誇りを持って製造されています。当工場はHISANOの主要な製造拠点の一つであり、高品質な製品製造において求められる基準であるGMP（Good Manufacturing Practices）認定を獲得しています。GMP認定は、製品の品質と安全性を確保するために徹底的な品質管理プロセスを実施するための厳格な基準を示します。当工場では、製品の製造から検査までの全工程がこれらの品質基準に厳密に準拠して行われています。安心して利用いただける製品をお届けするために、私たちは最高の品質基準を維持し続けています。",
  },
  sales: {
    heading: "販売",
    title: "ECや店舗様での販売を行っています",
    text: "私たちの商品はECや店舗などで取り扱っています。代行販売や仕入れに関するお問い合わせも受け付けておりますので、ぜひお問合せくださいませ。",
  },
};

export const contactPage = {
  title: "お問い合わせ",
  lead: "ご興味をお持ちいただきありがとうございます。お問い合わせ内容をご記入ください。",
  submit: "この内容で送信する",
};

export const downloadPage = {
  title: "資料請求",
  lead: "下記の情報をご記入後、フォームの送信画面から資料ダウンロードが可能です",
  submit: "資料請求する",
};

export const formLabels = {
  name: "お名前",
  email: "メールアドレス",
  tel: "電話番号",
  company: "会社名",
  message: "お問い合わせ内容",
  consent: "プライバシーポリシーに同意して送信する",
  sending: "送信中…",
  done: "送信しました。ありがとうございます。",
  error: "送信できませんでした。時間をおいてもう一度お試しください。",
  needKey: "フォームの送信先が未設定です。",
};

export const footer = {
  privacy: "プライバシーポリシー",
  operator: "運営会社",
};

export const privacy = {
  title: "プライバシーポリシー",
  // TODO: paste the client's privacy policy text. This is a placeholder only.
  body: "[プライバシーポリシーの本文をここに入れてください]",
};
