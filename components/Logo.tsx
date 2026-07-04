type LogoProps = {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
};

const TEAL = "#1B7A8A";

export default function Logo({
  variant = "light",
  showTagline = true,
  className = "h-14 w-auto",
}: LogoProps) {
  const text = variant === "light" ? "#0D1B1E" : "#FFFFFF";
  const tagline = variant === "light" ? TEAL : "#2A9BAC";
  const y = showTagline ? 28 : 26;

  return (
    <svg
      viewBox={showTagline ? "0 0 200 50" : "0 0 200 36"}
      fill="none"
      className={className}
      role="img"
      aria-label="BAMEA — Web • Brand • Growth"
    >
      {/* B icon with circuit nodes */}
      <g transform={`translate(0, ${showTagline ? 3 : 0})`}>
        <circle cx="10" cy="12" r="2.2" fill={TEAL} />
        <circle cx="6" cy="22" r="2.2" fill={TEAL} />
        <circle cx="10" cy="32" r="2.2" fill={TEAL} />
        <circle cx="27" cy="22" r="1.8" fill={TEAL} />
        <path
          d="M10 12H24M6 22H24M10 32H24"
          stroke={TEAL}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M26 7V37M26 7H33.5C37.5 7 40 9.8 40 13.2C40 16.2 38.2 18.5 35.5 19.2C38.8 19.8 41 22.5 41 26C41 30.2 37.8 33 33.5 33H26V22"
          stroke={TEAL}
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* BAMEA wordmark */}
      <text
        x="50"
        y={y}
        fill={text}
        fontFamily="Sora, sans-serif"
        fontWeight="700"
        fontSize="26"
        letterSpacing="5"
      >
        BAMEA
      </text>

      {showTagline && (
        <text
          x="50"
          y="44"
          fill={tagline}
          fontFamily="Inter, sans-serif"
          fontWeight="600"
          fontSize="7.5"
          letterSpacing="3"
        >
          WEB • BRAND • GROWTH
        </text>
      )}
    </svg>
  );
}

/** Compact icon for favicon */
export function LogoIcon({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" fill="none" className={className} aria-hidden>
      <circle cx="10" cy="12" r="2.2" fill={TEAL} />
      <circle cx="6" cy="22" r="2.2" fill={TEAL} />
      <circle cx="10" cy="32" r="2.2" fill={TEAL} />
      <circle cx="27" cy="22" r="1.8" fill={TEAL} />
      <path d="M10 12H24M6 22H24M10 32H24" stroke={TEAL} strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M26 7V37M26 7H33.5C37.5 7 40 9.8 40 13.2C40 16.2 38.2 18.5 35.5 19.2C38.8 19.8 41 22.5 41 26C41 30.2 37.8 33 33.5 33H26V22"
        stroke={TEAL}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
