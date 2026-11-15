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

// Hero banners. The copy is part of each image, so each alt repeats it.
export const heroBanners = [
  {
    src: "/images/hero-1.jpg",
    alt: "自然の恵みで、健やかで美しい毎日を。内側から整える、未来の健康と美しさ。HISANO。自然由来の厳選素材、確かな研究と品質管理、毎日の健康をサポート、内側から輝く美しさへ。",
  },
  {
    src: "/images/hero-2.jpg",
    alt: "自然の恵みで、健やかで美しい毎日を。内側から整える、未来の健康と美しさ。HISANO。健やかな毎日をサポート、内側から美しさを育む、いつまでも元気に、いきいきと。",
  },
];
export const heroTitle: string = "自然の恵みで、健やかで美しい毎日を。";

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

export const featuredHeading: string = "健康的な生活を考えて作られた商品をお届けしています";

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
    href: "/product/cordyceps",
    image: `${DESIGN}/s-813x800_v-fs_webp_9178d1a6-1e78-44a6-856b-081377089f9f.webp`,
    // TODO: paste the rest of the original sentence if it continues.
    text: "「冬虫夏草プレミアムクラス」は、安心安全の国内製造、冬虫夏草を100%使用しています。冬虫夏草には、コルジセピンやβグルカン、その他ビタミン、ミネラル、18種類のアミノ酸などが豊富に含まれています。",
  },
];

export const detailLabel: string = "詳しく見る";

export const productsHeading: string = "商品一覧";

export const products = [
  { name: "HISANO PREMIUM NMN 36000", slug: "nmn-36000", image: `${DESIGN}/s-620x700_v-fs_webp_e0106074-144f-46b6-abb7-b435fe952ff1.webp`, price: "¥49,680（税込）" },
  { name: "沖縄フコイダンプレミアム", slug: "okinawa-fucoidan", image: `${DESIGN}/s-800x800_v-fs_webp_2047faf5-a582-42dc-933e-3cb0e265b5ae_small.webp`, price: "¥22,680（税込）" },
  { name: "フコイダンプレミアム", slug: "fucoidan", image: `${CMS}/s-800x800_v-fs_webp_c0ec29b5-237b-4ef0-976b-bf3c341eb975_small.webp`, price: "¥38,000（税込）" },
  { name: "Hisanoイチョウ SQ DHA オメガ3-6-9プレミアム", slug: "ginkgo-dha", image: `${CMS}/s-813x800_v-fs_webp_f46d4443-4ecb-4e43-90fa-784d7be90fcb.webp`, price: "¥19,440（税込）" },
  { name: "HISANO ビフィズス菌プレミアム+", slug: "bifidus", image: `${CMS}/s-813x800_v-fs_webp_8237735e-05e6-4778-b3ce-3d07f66c5d30.webp`, price: "¥5,940（税込）" },
  { name: "HISANO アンセリンプレミアム+", slug: "anserine", image: `${CMS}/s-813x800_v-fs_webp_1f7c6843-ce31-42e7-acc3-faa810ef9604.webp`, price: "¥16,740（税込）" },
];

export const rakuten = {
  text: "楽天市場でHISANO商品を買う",
  button: "ショップを開く",
  href: "https://www.rakuten.co.jp/nihonkenkostore/",
  // The Rakuten logo image the original site uses.
  logo: `${DESIGN}/s-360x240_webp_8c8bbff2-91c2-4326-bb1b-70b09812c502.png`,
};

export const backToProducts: string = "商品一覧へ戻る";

export const priceLabel: string = "メーカー希望販売価格";
export const moreLabel: string = "もっと見る";

export const benefits = [
  {
    label: "送料無料",
    title: "日本国内どこでも",
    text: "私たちは、日本全国どこへでも送料無料でお届けしています。日々使う商品だからこそ、余計な負担を感じることなく手に取っていただきたい。そんな思いから、いつでも送料を気にせずご利用いただける体制を整えています。",
  },
  {
    label: "安全なショッピング",
    title: "安心してお買い物",
    text: "当店では、お客様に安心してお買い物いただけるよう、高度なセキュリティー対策を施し、安全なオンラインショッピング環境をご提供しております。個人情報の取り扱いには最大限の注意を払っておりますので、安心してお買い物いただけます。",
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
  body: "1.個人情報の定義\n\n「個人情報」とは、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの、及び他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものをいいます。\n\n2.個人情報の収集\n\n当ショップでは商品のご購入、お問合せをされた際にお客様の個人情報を収集することがございます。収集するにあたっては利用目的を明記の上、適法かつ公正な手段によります。\n\n当ショップで収集する個人情報は以下の通りです。\n\na)お名前、フリガナ\n\nb)ご住所\n\nc)お電話番号\n\nd)メールアドレス\n\ne)パスワード\n\nf)配送先情報\n\ng)当ショップとのお取引履歴及びその内容\n\nh)上記を組み合わせることで特定の個人が識別できる情報\n\n3.個人情報の利用\n\n当ショップではお客様からお預かりした個人情報の利用目的は以下の通りです。\n\na)ご注文の確認、照会\n\nb)商品発送の確認、照会\n\nc)お問合せの返信時\n\n当ショップでは、下記の場合を除いてはお客様の断りなく第三者に個人情報を開示・提供することはいたしません。\n\na)法令に基づく場合、及び国の機関若しくは地方公共団体又はその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合\n\nb)人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合\n\nc)当ショップを運営する会社の関連会社で個人データを交換する場合\n\n4.個人情報の安全管理\n\nお客様よりお預かりした個人情報の安全管理はサービス提供会社によって合理的、組織的、物理的、人的、技術的施策を講じるとともに、当ショップでは関連法令に準じた適切な取扱いを行うことで個人データへの不正な侵入、個人情報の紛失、改ざん、漏えい等の危険防止に努めます。\n\n5.個人情報の訂正、削除\n\nお客様からお預かりした個人情報の訂正・削除は下記の問合せ先よりお知らせ下さい。また、ユーザー登録された場合、当サイトのメニュー「マイアカウント」より個人情報の訂正が出来ます。\n\n6.cookie(クッキー)の使用について\n\n当社は、お客様によりよいサービスを提供するため、cookie （クッキー）を使用することがありますが、これにより個人を特定できる情報の収集を行えるものではなく、お客様のプライバシーを侵害することはございません。\n\n※cookie （クッキー）とは、サーバーコンピュータからお客様のブラウザに送信され、お客様が使用しているコンピュータのハードディスクに蓄積される情報です。\n\n7.SSLの使用について\n\n個人情報の入力時には、セキュリティ確保のため、これらの情報が傍受、妨害または改ざんされることを防ぐ目的でSSL（Secure Sockets Layer）技術を使用しております。\n\n※ SSLは情報を暗号化することで、盗聴防止やデータの改ざん防止送受信する機能のことです。SSLを利用する事でより安全に情報を送信する事が可能となります。\n\n8.お問合せ先\n\n特定商取引法に基づく表記をご覧ください。\n\n9.プライバシーポリシーの変更\n\n当ショップでは、収集する個人情報の変更、利用目的の変更、またはその他プライバシーポリシーの変更を行う際は、当ページへの変更をもって公表とさせていただきます。",
};
