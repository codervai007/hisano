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

export const featuredHeading = "健康的な生活を考えて作られた商品をお届けしています";

export const featured = [
  {
    badge: "人気商品",
    name: "サメ軟骨パワープラス",
    text: "サメの軟骨末だけを使用した、純正サメ軟骨。コンドロイチンを含む食品は鳥の骨などがありますが、なかでもサメは骨全体が軟骨なのできわめて効率良くコンドロイチンを摂取することができます。",
  },
  {
    badge: "人気商品",
    name: "冬虫夏草プレミアムクラス",
    // TODO: paste the rest of the original sentence if it continues.
    text: "「冬虫夏草プレミアムクラス」は、安心安全の国内製造、冬虫夏草を100%使用しています。冬虫夏草には、コルジセピンやβグルカン、その他ビタミン、ミネラル、18種類のアミノ酸などが豊富に含まれています。",
  },
];

export const productsHeading = "商品一覧";

export const products = [
  { name: "HISANO PREMIUM NMN 36000", price: "¥49,680（税込）" },
  { name: "沖縄フコイダンプレミアム", price: "¥22,680（税込）" },
  { name: "フコイダンプレミアム", price: "¥38,000（税込）" },
  { name: "Hisanoイチョウ SQ DHA オメガ3-6-9プレミアム", price: "¥19,440（税込）" },
  { name: "HISANO ビフィズス菌プレミアム+", price: "¥5,940（税込）" },
  { name: "HISANO アンセリンプレミアム+", price: "¥16,740（税込）" },
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
  // TODO: the original paragraph was cut off after 「提供」; paste the full text.
  heroText:
    "私たちにとって、健康は日々の生活を充実させ、未来をより豊かにするための不可欠なものです。HISANOでは、そんな健康を支えるために、一人ひとりのニーズに応じた商品を、安心して長く続けられる形で提供しています。",
  tagline: "数多くの健康食品が国内外で愛される、HISANO商品だからこその安心と高品質。",
  production: {
    heading: "生産体制に関して",
    title: "安心してご利用いただける製品を",
    text: "私たちはお客様に安心してお選びいただける商品を、これからも変わらずお届けし続けてまいります。健康に寄り添い、信頼される品質を守りながら、皆さまの毎日に貢献できる商品作りに努めています。",
    // TODO: paste the full factory paragraph (it mentions GMP) from the original page.
    factory:
      "HISANOの健康食品は、アムスライフサイエンス本社工場で誇りを持って製造されています。当工場はHISANOの主要な製造拠点の一つです。",
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
