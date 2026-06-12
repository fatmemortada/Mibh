"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculate = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        setIsExpired(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    calculate();
    const timer = setInterval(calculate, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  if (isExpired) {
    return (
      <div className="text-center py-2">
        <span className="text-gold font-bold text-lg">🕌 Muharram 1448 AH has begun</span>
      </div>
    );
  }

  const boxes = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Mins" },
    { value: timeLeft.seconds, label: "Secs" },
  ];

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      {boxes.map((box, i) => (
        <div key={box.label} className="flex items-center gap-1 sm:gap-2">
          <div className="bg-white/10 backdrop-blur rounded-lg px-3 py-2 text-center min-w-[60px] border border-gold/30">
            <span className="block text-2xl sm:text-3xl font-bold text-gold-light tabular-nums">
              {String(box.value).padStart(2, "0")}
            </span>
            <span className="text-xs text-white/70 uppercase tracking-wider">{box.label}</span>
          </div>
          {i < 3 && <span className="text-gold-light text-xl font-bold">:</span>}
        </div>
      ))}
    </div>
  );
}
