export const PHONE = "+919440912347";
export const PHONE_DISPLAY = "+91 94409 12347";

export type Area =
  | "Kokapet" | "Narsingi" | "Financial District" | "Kollur"
  | "Tellapur" | "Puppalguda" | "Gachibowli" | "Shaikpet";

export type Project = {
  id: number;
  name: string;
  loc: string;
  area: Area;
  type: "Flat" | "Villa";
  bhk: string;
  size: string;
  poss: string;
  price: string;
  unit: string;
  psf: number | null;
  pay: string;
  ready: boolean;
  img: string;
  imgLg: string;
};

const wix = (id: string, w?: number, h?: number) =>
  w
    ? `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h},al_c,q_82,enc_auto/${id.split("~")[0]}.jpg`
    : `https://static.wixstatic.com/media/${id}`;

type Raw = [string, string, Area, "Flat" | "Villa", string, string, string, string, string, number | null, string, boolean, string];

const RAW: Raw[] = [
  ["My Home APAS", "Kokapet", "Kokapet", "Flat", "3 & 3.5 BHK", "2800–3800 sft", "1.5 years", "₹10,800", "/ sft ++", 10800, "Progressive payment or loan", false, "9593bd_0a00547878a74a69b9aef24c3b2eab39~mv2.jpeg"],
  ["Rajpushpa Provincia", "Narsingi", "Narsingi", "Flat", "2 & 3 BHK", "1370–2660 sft", "Phase 1 ready", "₹10,400", "/ sft ++", 10400, "50:50 or 80:20 plan", true, "d78286_7c2d10c09df945f1b7716b0ee2e37ba5~mv2.jpg"],
  ["Rajpushpa Prestinia", "Kokapet", "Kokapet", "Flat", "2 & 3 BHK", "1380–2300 sft", "1 year", "₹8,999", "/ sft + hi-rise", 8999, "One-time payment · RERA approved", false, "9593bd_9b30a9e98de54df0b63122cd8d3b7c29~mv2.png"],
  ["Vue Residences", "Puppalguda", "Puppalguda", "Flat", "2 & 3 BHK", "1500–2300 sft", "Phase 1 ready", "₹1.6 Cr", "onwards", null, "Loan available", true, "d78286_81532e3fd45f4f0eb3ff69518f332146~mv2.jpg"],
  ["Anvitha Ivana", "Kollur", "Kollur", "Flat", "2 & 3 BHK", "1400–2600 sft", "Dec 2027", "₹6,499", "/ sft", 6499, "One-time payment · beside ORR", false, "d78286_4452e5bfd11d417fbedc1dea7981a0d0~mv2.avif"],
  ["Aparna Zenon", "Narsingi · Puppalguda", "Narsingi", "Flat", "2 & 3 BHK", "1324–1514 sft", "Phase 1 ready", "₹11,500", "/ sft all-in", 11500, "All inclusive", true, "d78286_f6eab660615b4e8f8843335cceac381a~mv2.webp"],
  ["Project K2", "Kollur Exit 2", "Kollur", "Flat", "3 & 4 BHK", "1750–4400 sft", "4 years", "₹4,700", "/ sft + PLC", 4700, "OTP · ₹6,500/sft on loan", false, "d78286_871a4d8944464b9abc30643a53785170~mv2.avif"],
  ["Sunshine Destino", "Financial District", "Financial District", "Flat", "3 & 4 BHK", "2000–3500 sft", "Ready · OC received", "₹9,900", "/ sft + infra", 9900, "Schedule payment · RERA approved", true, "d78286_f84ece4aceac4fa5a22f483f6bc49d45~mv2.jpeg"],
  ["Aparna Cyber Shine & Cyber Star", "Osman Nagar, Tellapur", "Tellapur", "Flat", "2 & 3 BHK", "1200–1900 sft", "Dec 2026", "₹8,200", "/ sft", 8200, "One-time payment", false, "9593bd_25d4667153004d5f9ccfcdc7b66a9309~mv2.webp"],
  ["Vasavi Atlantis", "Narsingi", "Narsingi", "Flat", "2 & 3 BHK", "1310–3330 sft", "1 year", "₹8,500", "/ sft + PLC", 8500, "One-time payment", false, "9593bd_484acf997bdc404e896785724af0b341~mv2.png"],
  ["Vajra West City", "Kollur · Tellapur", "Kollur", "Flat", "2.5 & 3 BHK", "1420–2030 sft", "3.5 years", "₹6,500", "/ sft + PLC", 6500, "One-time payment", false, "d78286_682dcd53b81549ae8ab4897f74bcb09e~mv2.jpeg"],
  ["Srivaraha Aurum", "Financial District", "Financial District", "Flat", "3 & 4 BHK", "3500–9000 sft", "4 years", "₹4–12 Cr", "total", null, "Loan available", false, "d78286_faddce73112c49bb8e0d247848a9ea49~mv2.jpg"],
  ["Moonglade", "Narsingi", "Narsingi", "Flat", "2 & 3 BHK", "1400–3045 sft", "3 years", "₹6,499", "/ sft + PLC", 6499, "One-time payment", false, "d78286_3284ae0eea5343e39a3123a139d340a1~mv2.webp"],
  ["SRIAS IWA", "Puppalguda · FD", "Puppalguda", "Flat", "3 & 4 BHK", "2290–4710 sft", "3.5 years", "₹8,500", "/ sft + PLC", 8500, "OTP · ₹9,500/sft on loan", false, "d78286_271ad546305847e0af78d19b840386eb~mv2.jpg"],
  ["Evania", "Kokapet", "Kokapet", "Flat", "3 & 4 BHK", "3315–3575 sft", "2.5 years", "₹10,200", "/ sft + amenities", 10200, "Schedule payment · low density", false, "d78286_41fb3b7a9bd5469b9237f402791549ce~mv2.avif"],
  ["Altitude", "Osman Nagar, Tellapur", "Tellapur", "Flat", "3 BHK", "2277 sft", "4 years", "₹6,200", "/ sft onwards", 6200, "OTP · up to ₹7,400/sft", false, "d78286_4c211611548946db9ff5c162b3780dad~mv2.png"],
  ["Hallmark Nature Nest", "Velimela, Kollur", "Kollur", "Villa", "Villas · 2800–4500 sft", "180–320 sq yd", "1.5 years", "₹10,500", "/ sft", 10500, "One-time payment", false, "d78286_c660dbac96af4551b2af00277033d0b6~mv2.png"],
  ["Raghava Cinq", "Financial District", "Financial District", "Flat", "4 BHK", "3600 sft", "3.5 years", "₹10,200", "/ sft + amenities", 10200, "Regular payment", false, "9593bd_f81e35b6df7545faa612ff2ae005cbc6~mv2.png"],
  ["4 BHK Villas, Velimela", "Kollur · Velimela", "Kollur", "Villa", "4 BHK villa", "200, 240 sq yd", "3.5 years", "₹8,499", "/ sft", 8499, "OTP · ₹11,500/sft on loan · pre-launch", false, "d78286_eede4242a9c24446bc3eeb65a6ee9420~mv2.jpeg"],
  ["Aparna One", "Shaikpet", "Shaikpet", "Flat", "3 & 4 BHK", "2765, 5300 sft", "Ready", "₹4.7–9.2 Cr", "total", null, "Schedule payment · RERA approved", true, "9593bd_b3a64e022f6d44169d701c7a16d17f06~mv2.png"],
  ["Anvitha High9", "Tellapur", "Tellapur", "Flat", "2 & 3 BHK", "1328–2285 sft", "3.5 years", "₹6,399", "/ sft + PLC", 6399, "One-time payment", false, "d78286_a8b84b9808174c41ab9a0017be88c3f1~mv2.png"],
  ["Raghava IRIS", "Raidurgam · Gachibowli", "Gachibowli", "Flat", "4 & 6 BHK", "5430–11800 sft", "2 years", "₹14,000", "/ sft", 14000, "One-time payment", false, "d78286_03dfc44ef7094c1db77302f381f9fea5~mv2.png"],
  ["Elegans Homes Villas", "Kollur", "Kollur", "Villa", "4 BHK villa", "207–293 sq yd", "Ready", "₹12,999", "/ sft", 12999, "Schedule or one-time · RERA approved", true, "9593bd_6ae20f9f0cef4b62aed5038e27203e04~mv2.jpeg"],
  ["Sriven IRIS", "Narsingi", "Narsingi", "Villa", "5 BHK villa", "350 sq yd", "Ready", "₹12 Cr", "total", null, "Loan available", true, "d78286_8835134ea72c41bfadaf565f80d05f55~mv2.avif"],
];

export const PROJECTS: Project[] = RAW.map((r, i) => ({
  id: i, name: r[0], loc: r[1], area: r[2], type: r[3], bhk: r[4], size: r[5], poss: r[6],
  price: r[7], unit: r[8], psf: r[9], pay: r[10], ready: r[11],
  img: wix(r[12], 800, 600), imgLg: wix(r[12], 1400, 875),
}));

export const HERO_IMG = wix("d78286_f6eab660615b4e8f8843335cceac381a~mv2.webp");
export const CONTACT_IMG = wix("d78286_f84ece4aceac4fa5a22f483f6bc49d45~mv2.jpeg", 1400, 900);

export const AREAS: Area[] = ["Kokapet", "Narsingi", "Financial District", "Kollur", "Tellapur", "Puppalguda", "Gachibowli", "Shaikpet"];
export const LOC_IMG: Record<Area, number> = {
  Kokapet: 0, Narsingi: 1, "Financial District": 7, Kollur: 22, Tellapur: 8, Puppalguda: 3, Gachibowli: 21, Shaikpet: 19,
};

export const READY = PROJECTS.filter((p) => p.ready);
export const GALLERY = [5, 7, 14, 22].map((i) => PROJECTS[i]);

export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
export const waLink = (name?: string) =>
  "https://wa.me/919440912347?text=" +
  encodeURIComponent(`Hi GoZamindar, I'm interested in ${name || "a landowner share property"}.`);
