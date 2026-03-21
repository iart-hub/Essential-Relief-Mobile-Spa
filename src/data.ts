export const servicesData = [
  {
    category: "Massage Treatments",
    items: [
      { title: "Relaxation Massage", desc: "A soothing full-body massage designed to reduce stress and promote deep relaxation.", pricing: [{ time: "60 min", price: "$140" }, { time: "90 min", price: "$190" }] },
      { title: "Deep Tissue Massage", desc: "Focused pressure to release chronic muscle tension and improve mobility.", pricing: [{ time: "60 min", price: "$150" }, { time: "90 min", price: "$200" }] },
      { title: "Vacation Recovery Massage", desc: "Perfect after long days at the theme parks. Focus on legs, feet and lower back.", pricing: [{ time: "60 min", price: "$150" }, { time: "90 min", price: "$200" }] },
      { title: "Couples Massage", desc: "Relax side-by-side with your partner or friend in the comfort of your vacation home.", pricing: [{ time: "60 min", price: "$280" }, { time: "90 min", price: "$360" }] },
      { title: "Hot Stone Massage – Full Body", desc: "Heated stones combined with therapeutic massage to deeply relax muscles.", pricing: [{ time: "75 min", price: "$190" }, { time: "90 min", price: "$220" }] },
      { title: "Hot Stone Massage – Back Focus", desc: "Targeted hot stone therapy for back tension.", pricing: [{ time: "30 min", price: "$95" }] },
      { title: "Body Sculpting Massage", desc: "Firm massage technique designed to stimulate circulation and support body contouring.", pricing: [{ time: "60 min", price: "$160" }] },
    ]
  },
  {
    category: "Lymphatic Drainage",
    items: [
      { title: "Manual Lymphatic Drainage – Body", desc: "A gentle technique that stimulates lymphatic flow and helps reduce fluid retention.", pricing: [{ time: "60 min", price: "$160" }, { time: "90 min", price: "$210" }] },
      { title: "Facial Lymphatic Drainage", desc: "A delicate facial massage that reduces puffiness and enhances skin glow.", pricing: [{ time: "45 min", price: "$120" }] },
    ]
  },
  {
    category: "Facial Treatments",
    items: [
      { title: "Essential Glow Facial", desc: "Cleansing, exfoliation and hydration for radiant skin.", pricing: [{ time: "60 min", price: "$140" }] },
      { title: "Hydrating Facial", desc: "Deep hydration treatment that improves skin texture and brightness.", pricing: [{ time: "60 min", price: "$150" }] },
      { title: "Express Facial", desc: "A quick skin refresh ideal for busy vacation schedules.", pricing: [{ time: "30 min", price: "$90" }] },
    ]
  },
  {
    category: "Body Treatments",
    items: [
      { title: "Full Body Exfoliation", desc: "A gentle body scrub that removes dead skin cells and leaves the skin smooth.", pricing: [{ time: "45 min", price: "$120" }] },
      { title: "Body Exfoliation & Hydration Treatment", desc: "Exfoliation followed by deep hydration for soft, glowing skin.", pricing: [{ time: "60 min", price: "$150" }] },
    ]
  },
  {
    category: "Detox & Wellness Treatments",
    items: [
      { title: "Infrared Thermal Blanket Detox", desc: "Infrared heat therapy that promotes sweating, circulation and detoxification.", pricing: [{ time: "45 min", price: "$120" }] },
      { title: "Infrared Detox + Lymphatic Drainage", desc: "Infrared detox followed by lymphatic drainage to enhance circulation.", pricing: [{ time: "75 min", price: "$190" }] },
    ]
  },
  {
    category: "Recovery & Compression Therapy",
    items: [
      { title: "Normatec Compression Therapy (Pneumatic Boots)", desc: "Dynamic air compression therapy designed to improve circulation and accelerate muscle recovery.", pricing: [{ time: "30 min", price: "$60" }, { time: "45 min", price: "$80" }] },
    ]
  },
  {
    category: "Hand & Foot Spa Treatments",
    items: [
      { title: "Luxury Foot Spa Treatment", desc: "Foot soak, exfoliation, massage and hydration for tired feet.", pricing: [{ time: "30 min", price: "$70" }] },
      { title: "Luxury Hand Spa Treatment", desc: "Exfoliation, hand massage and deep hydration.", pricing: [{ time: "30 min", price: "$60" }] },
      { title: "Hand & Foot Relaxation Spa", desc: "Complete spa treatment for hands and feet.", pricing: [{ time: "45 min", price: "$95" }] },
    ]
  },
  {
    category: "Add-On Enhancements",
    items: [
      { title: "Relaxing Scalp Massage", desc: "", pricing: [{ time: "15 min", price: "$30" }] },
      { title: "Foot Relief Treatment", desc: "", pricing: [{ time: "15 min", price: "$30" }] },
      { title: "Hot Stones Add-On", desc: "", pricing: [{ time: "", price: "$25" }] },
      { title: "Normatec Add-On", desc: "", pricing: [{ time: "20 min", price: "$40" }] },
      { title: "Infrared Detox Add-On", desc: "", pricing: [{ time: "30 min", price: "$60" }] },
    ]
  }
];

export const packagesData = [
  {
    category: "Signature Spa Packages",
    items: [
      { title: "Ultimate Relaxation Package", includes: "Relaxation Massage + Essential Glow Facial + Scalp Massage", pricing: [{ time: "90 min", price: "$260" }] },
      { title: "Detox & Renewal Package", includes: "Infrared Detox + Lymphatic Drainage", pricing: [{ time: "75 min", price: "$210" }] },
      { title: "Sculpt & Detox Package", includes: "Body Sculpting Massage + Infrared Detox + Normatec Therapy", pricing: [{ time: "90 min", price: "$230" }] },
    ]
  },
  {
    category: "Disney Recovery Packages",
    items: [
      { title: "Disney Park Recovery", includes: "Vacation Recovery Massage • Normatec Compression Therapy • Foot Relief Treatment", pricing: [{ time: "90 min", price: "$210" }] },
      { title: "Ultimate Disney Recovery", includes: "Recovery Massage • Infrared Detox • Normatec Compression Therapy • Foot Therapy", pricing: [{ time: "120 min", price: "$280" }] },
    ]
  },
  {
    category: "Couples Spa Packages",
    items: [
      { title: "Couples Relaxation Escape", includes: "Couples Massage • Hot Stones • Scalp Massage", pricing: [{ time: "75 min", price: "$340" }] },
      { title: "Luxury Couples Spa Experience", includes: "90-minute Couples Massage • Glow Facial • Scalp Massage", pricing: [{ time: "120 min", price: "$420" }] },
    ]
  },
  {
    category: "Group Spa Experiences",
    items: [
      { title: "Girls Spa Day", includes: "Massage • Express Facial • Hand or Foot Spa", pricing: [{ time: "", price: "$240 per person" }] },
      { title: "Luxury Spa Party", includes: "Massage • Glow Facial • Foot Spa", pricing: [{ time: "", price: "$280 per person" }] },
      { title: "VIP Vacation Home Spa Experience", includes: "Massage • Facial Treatment • Foot Spa Ritual", desc: "Minimum 4 guests", pricing: [{ time: "", price: "Starting at $300 per person" }] },
    ]
  }
];
