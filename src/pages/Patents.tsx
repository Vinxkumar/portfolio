import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const Patents = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  const [pos, setPos] = useState({
    y1: 0, y2: 0,
    cx: 0,
    lx_start: 0, lx_end: 0,
    rx_start: 0, rx_end: 0,
    totalH: 0,
  });

 // 1. add a ResizeObserver on the section, not just window resize
useEffect(() => {
  if (!sectionRef.current) return;

  const observer = new ResizeObserver(() => {
    if (!sectionRef.current || !card1Ref.current || !card2Ref.current) return;

    const sectionRect = sectionRef.current.getBoundingClientRect();
    const w = window.innerWidth;
    const totalH = sectionRef.current.offsetHeight;

    const card1Rect = card1Ref.current.getBoundingClientRect();
    const card2Rect = card2Ref.current.getBoundingClientRect();

    const y1 = card1Rect.top - sectionRect.top + card1Rect.height / 2;
    const y2 = card2Rect.top - sectionRect.top + card2Rect.height / 2;
    const cx = w * 0.5;

    setPos({
      y1, y2, cx,
      lx_start: cx,
      lx_end: card1Rect.right - sectionRect.left,
      rx_start: cx,
      rx_end: card2Rect.left - sectionRect.left,
      totalH,
    });
  });

  observer.observe(sectionRef.current);
  return () => observer.disconnect();
}, []);

// 2. also recalculate on scroll since getBoundingClientRect is viewport-relative
useEffect(() => {
  const handleScroll = () => {
    if (!sectionRef.current || !card1Ref.current || !card2Ref.current) return;

    const sectionRect = sectionRef.current.getBoundingClientRect();
    const w = window.innerWidth;
    const totalH = sectionRef.current.offsetHeight;

    const card1Rect = card1Ref.current.getBoundingClientRect();
    const card2Rect = card2Ref.current.getBoundingClientRect();

    const y1 = card1Rect.top - sectionRect.top + card1Rect.height / 2;
    const y2 = card2Rect.top - sectionRect.top + card2Rect.height / 2;
    const cx = w * 0.5;

    setPos({
      y1, y2, cx,
      lx_start: cx,
      lx_end: card1Rect.right - sectionRect.left,
      rx_start: cx,
      rx_end: card2Rect.left - sectionRect.left,
      totalH,
    });
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  // recalculate on resize
  useEffect(() => {
  if (!isInView) return;

  // wait for layout to settle before measuring
  const timer = setTimeout(() => {
    if (!sectionRef.current || !card1Ref.current || !card2Ref.current) return;

    const sectionRect = sectionRef.current.getBoundingClientRect();
    const w = window.innerWidth;
    const totalH = sectionRef.current.offsetHeight;

    const card1Rect = card1Ref.current.getBoundingClientRect();
    const card2Rect = card2Ref.current.getBoundingClientRect();

    const y1 = card1Rect.top - sectionRect.top + card1Rect.height / 2;
    const y2 = card2Rect.top - sectionRect.top + card2Rect.height / 2;
    const cx = w * 0.5;

    // card 1 right edge minus a tiny offset so dot sits ON the border
    const lx_end = card1Rect.right - sectionRect.left - 1;
    // card 2 left edge plus tiny offset
    const rx_end = card2Rect.left - sectionRect.left + 1;

    setPos({
      y1, y2, cx,
      lx_start: cx, lx_end,
      rx_start: cx, rx_end,
      totalH,
    });
  }, 100);

  return () => clearTimeout(timer);
}, [isInView]);

  return (
    <div
      id="research-works"
      ref={sectionRef}
      className="relative z-10 w-screen min-h-[140vh] bg-gh-surface"
    > <span className="absolute top-1/2 left-0 text-sm text-gh-muted uppercase rotate-270">patents</span>

      <svg
        className="absolute top-0 left-0 w-full pointer-events-none"
        style={{ height: pos.totalH, overflow: "hidden" }}
      >
        {/* trunk — bleeds past top and bottom */}
        <motion.line
          x1={pos.cx} y1={-150}
          x2={pos.cx} y2={pos.totalH + 150}
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />

        {/* branch 1 — curves LEFT from trunk to right edge of card 1 */}
        <motion.path
          d={`M ${pos.cx} ${pos.y1 - 60} C ${pos.cx} ${pos.y1} ${pos.lx_end} ${pos.y1} ${pos.lx_end} ${pos.y1}`}
          stroke="#e8805e"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.9 }}
        />
        {/* dot at card 1 right edge */}
        <motion.circle
          cx={pos.lx_end} cy={pos.y1} r="5"
          fill="#e8805e"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, ease: "backOut", delay: 1.8 }}
        />

        {/* branch 2 — curves RIGHT from trunk to left edge of card 2 */}
        <motion.path
          d={`M ${pos.cx} ${pos.y2 - 60} C ${pos.cx} ${pos.y2} ${pos.rx_end} ${pos.y2} ${pos.rx_end} ${pos.y2}`}
          stroke="#818cf8"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut", delay: 1.4 }}
        />
        {/* dot at card 2 left edge */}
        <motion.circle
          cx={pos.rx_end} cy={pos.y2} r="5"
          fill="#818cf8"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, ease: "backOut", delay: 2.3 }}
        />
      </svg>

      {/* cards */}
      <div className="relative w-full flex flex-col pt-[18%] pb-[12%] gap-48">

        {/* card 1 — left */}
        <div className="flex justify-start pl-[5%]">
          <motion.div
            ref={card1Ref}
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.9 }}
            className="w-[38%] border border-white/10 rounded-xl p-5 bg-gh-bg/50 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-white/30 tracking-widest font-mono">Jan 2025</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full border border-[#e8805e]/30 text-[#e8805e] bg-[#e8805e]/10">
                Published
              </span>
            </div>
            <p className="text-white font-medium leading-snug text-sm mb-1">
              Smart Motion Indicator Helmet
            </p>
            <p className="text-white/40 text-xs bg-gh-border rounded-xl p-4 leading-relaxed mb-4">
              Bicycle helmet with turn-indicators represents a fusion of safety, technology, and user-
friendly design. By addressing real-world challenges faced by cyclists, you’re contribuƟng to a

safer and more efficient urban mobility experience. Kudos to your invenƟve spirit!
            </p>
            <div className="flex gap-4 text-xs text-white/25 font-mono">
              <span>App.No.202541040855 A </span>
            </div>
          </motion.div>
        </div>

        {/* card 2 — right */}
        <div className="flex justify-end pr-[5%]">
          <motion.div
            ref={card2Ref}
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 2.4 }}
            className="w-[38%] border border-white/10 rounded-xl p-5 bg-gh-bg/50 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-white/30 tracking-widest font-mono">Dec 2025</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full border border-[#818cf8]/30 text-[#818cf8] bg-[#818cf8]/10">
                Published
              </span>
            </div>
            <p className="text-white font-medium leading-snug text-sm mb-1">
              QuickPeek
            </p>
            <p className="text-white/40 text-xs bg-gh-border rounded-xl p-4 leading-relaxed mb-4">
              This invention introduced a utility tool that allows users to preview files directly from the Recycle Bin using a custom keyboard shortcut. It provides real-time visual previews of deleted content, such as images and PDF’s, without requiring restoration.

            </p>
            <div className="flex gap-4 text-xs text-white/25 font-mono">
              <span>App. No.202541115534 A </span>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Patents;