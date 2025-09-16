import { useEffect, useRef, useState } from "preact/hooks";

interface FadeInProps {
  children: preact.ComponentChildren;
}

export default function FadeIn({ children }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // solo se anima la primera vez
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      class={`transition-opacity duration-700 ${
        isVisible ? "animate-fadeIn" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
