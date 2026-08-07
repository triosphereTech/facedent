"use client";

import { Headset, Share2, Smile, Stethoscope, Users } from "lucide-react";

const features = [
  {
    icon: Share2,
    title: "Modern Facilities & Technology",
    desc: "Personalized check-ups and medical advice.",
    side: "left",
    position: "top",
  },
  {
    icon: Users,
    title: "Expert Team of Specialists",
    desc: "Doctors, surgeons, and nurses committed.",
    side: "left",
    position: "bottom",
  },
  {
    icon: Smile,
    title: "Transparent & Affordable",
    desc: "Quality care without hidden costs.",
    side: "right",
    position: "top",
  },
  {
    icon: Headset,
    title: "24/7 Patient Support",
    desc: "Because health doesn't wait for office hours.",
    side: "right",
    position: "bottom",
  },
];

// Single coordinate system the whole diagram is built from.
// Cards, icon-nodes, the center circle, and the connector paths
// all read from these numbers, so nothing can drift out of place.
const DIAGRAM = {
  width: 1100,
  height: 440,
  center: { x: 550, y: 220, r: 50 },
  nodeR: 20,
  cornerR: 16,
  gap: 10, // breathing room between a line and the shape it approaches
  leftX: 330,
  rightX: 770,
  topY: 115,
  bottomY: 325,
  card: { width: 210, height: 106 },
};

const pct = (value, total) => `${(value / total) * 100}%`;

const NodeIcon = ({ feature }) => {
  const Icon = feature.icon;
  const cx = feature.side === "left" ? DIAGRAM.leftX : DIAGRAM.rightX;
  const cy = feature.position === "top" ? DIAGRAM.topY : DIAGRAM.bottomY;

  return (
    <div
      className="absolute flex items-center justify-center rounded-full border border-[#2DBBC4]/20 bg-[#2DBBC4]/[0.07]"
      style={{
        left: pct(cx, DIAGRAM.width),
        top: pct(cy, DIAGRAM.height),
        width: pct(DIAGRAM.nodeR * 2, DIAGRAM.width),
        height: pct(DIAGRAM.nodeR * 2, DIAGRAM.height),
        transform: "translate(-50%, -50%)",
      }}
    >
      <Icon size={16} className="text-[#2DBBC4]" strokeWidth={1.8} />
    </div>
  );
};

const FeatureCard = ({ feature }) => {
  const x =
    feature.side === "left" ? 60 : DIAGRAM.width - 60 - DIAGRAM.card.width;
  const iconY = feature.position === "top" ? DIAGRAM.topY : DIAGRAM.bottomY;
  const y = iconY - DIAGRAM.card.height / 2;

  return (
    <div
      className="absolute flex flex-col justify-center rounded-xl bg-[#f4f6f7] p-8 px-8 py-"
      style={{
        left: pct(x, DIAGRAM.width),
        top: pct(y, DIAGRAM.height),
        width: pct(DIAGRAM.card.width, DIAGRAM.width),
        height: pct(DIAGRAM.card.height, DIAGRAM.height),
        textAlign: feature.side === "left" ? "left" : "right",
      }}
    >
      <h4 className="text-[16px] font-semibold leading-6 text-[#0E2A47]">
        {feature.title}
      </h4>
      <p className="mt-2 text-[13.5px] leading-6 text-[#6E7C87]">
        {feature.desc}
      </p>
    </div>
  );
};

const Connectors = () => {
  const { leftX, rightX, topY, bottomY, nodeR, cornerR, center, gap } =
    DIAGRAM;

  const leftStopX = center.x - center.r - gap;
  const rightStopX = center.x + center.r + gap;

  const lineStart = 6; // small gap between the icon edge and the line

  const paths = [
    // top-left
    `M${leftX},${topY + nodeR + lineStart} L${leftX},${center.y - cornerR} Q${leftX},${center.y} ${leftX + cornerR},${center.y} L${leftStopX},${center.y}`,
    // bottom-left
    `M${leftX},${bottomY - nodeR - lineStart} L${leftX},${center.y + cornerR} Q${leftX},${center.y} ${leftX + cornerR},${center.y} L${leftStopX},${center.y}`,
    // top-right
    `M${rightX},${topY + nodeR + lineStart} L${rightX},${center.y - cornerR} Q${rightX},${center.y} ${rightX - cornerR},${center.y} L${rightStopX},${center.y}`,
    // bottom-right
    `M${rightX},${bottomY - nodeR - lineStart} L${rightX},${center.y + cornerR} Q${rightX},${center.y} ${rightX - cornerR},${center.y} L${rightStopX},${center.y}`,
  ];

  // small solid anchor dots sitting right at each icon edge
  const anchors = [
    [leftX, topY + nodeR],
    [leftX, bottomY - nodeR],
    [rightX, topY + nodeR],
    [rightX, bottomY - nodeR],
  ];

  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox={`0 0 ${DIAGRAM.width} ${DIAGRAM.height}`}
      preserveAspectRatio="none"
      fill="none"
    >
      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          stroke="#d3dde1"
          strokeWidth="2"
          strokeDasharray="0.1 9"
          strokeLinecap="round"
        />
      ))}
      {anchors.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.5" fill="#c3cfd5" />
      ))}
    </svg>
  );
};

const WhyUs = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* BADGE */}
        <div className="flex justify-center">
          <span className="rounded-full border border-[#dbe7ea] px-4 py-1.5 text-[12px] font-medium text-[#6E7C87]">
            Why Choose Us
          </span>
        </div>

        {/* HEADING */}
        <h2 className="mt-5 text-center text-[32px] font-semibold leading-[1.15] tracking-[-1px] text-[#0E2A47] sm:text-[38px] md:text-[42px]">
          Why Thousands Trust FaceDent
        </h2>

        {/* SUBTEXT */}
        <p className="mx-auto mt-4 max-w-xl text-center text-[14.5px] leading-7 text-[#6E7C87]">
          Patients choose FaceDent because we combine expert dental care with
          compassion, modern technology, and a patient-first approach.
        </p>
      </div>

      {/* DIAGRAM — DESKTOP */}
      <div
        className="relative mx-auto mt-10 hidden w-full max-w-6xl lg:block"
        style={{ aspectRatio: `${DIAGRAM.width} / ${DIAGRAM.height}` }}
      >
        <Connectors />

        {features.map((feature, index) => (
          <NodeIcon key={index} feature={feature} />
        ))}

        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}

        {/* CENTER ICON */}
        <div
          className="absolute flex items-center justify-center rounded-full bg-linear-to-br from-[#2DBBC4] to-[#0E2A47] shadow-[0_0_0_9px_rgba(45,187,196,0.08)]"
          style={{
            left: pct(DIAGRAM.center.x, DIAGRAM.width),
            top: pct(DIAGRAM.center.y, DIAGRAM.height),
            width: pct(DIAGRAM.center.r * 2, DIAGRAM.width),
            height: pct(DIAGRAM.center.r * 2, DIAGRAM.height),
            transform: "translate(-50%, -50%)",
          }}
        >
          <Stethoscope size={36} className="text-white" strokeWidth={1.6} />
        </div>
      </div>

      {/* DIAGRAM — MOBILE / TABLET FALLBACK */}
      <div className="mx-auto mt-10 flex max-w-md flex-col items-center gap-8 lg:hidden">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#2DBBC4] to-[#0E2A47] shadow-[0_0_0_9px_rgba(45,187,196,0.08)]">
          <Stethoscope size={30} className="text-white" strokeWidth={1.6} />
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col gap-3 rounded-xl bg-[#f4f6f7] px-6 py-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2DBBC4]/20 bg-[#2DBBC4]/[0.07]">
                  <Icon size={16} className="text-[#2DBBC4]" strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="text-[15px] font-semibold leading-6 text-[#0E2A47]">
                    {feature.title}
                  </h4>
                  <p className="mt-1.5 text-[13px] leading-6 text-[#6E7C87]">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;