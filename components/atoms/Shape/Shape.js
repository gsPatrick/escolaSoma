/* Formas da linguagem gráfica do Instagram da SOMA:
   estrela de 4 pontas, quarto de círculo, sorriso, lupa, capelo, brilhos. */

const shapes = {
  star: (c) => (
    <path
      d="M50 2C54 36 64 46 98 50C64 54 54 64 50 98C46 64 36 54 2 50C36 46 46 36 50 2Z"
      fill={c}
      stroke={c}
      strokeWidth="3"
      strokeLinejoin="round"
    />
  ),
  quarter: (c) => <path d="M0 100A100 100 0 0 1 100 0V100Z" fill={c} />,
  half: (c) => <path d="M0 100A50 50 0 0 1 100 100Z" fill={c} />,
  circle: (c) => <circle cx="50" cy="50" r="48" fill={c} />,
  smile: (c) => (
    <>
      <path d="M14 38C28 74 72 74 86 38" fill="none" stroke={c} strokeWidth="11" strokeLinecap="round" />
      <path d="M8 32L20 42M92 32L80 42" stroke={c} strokeWidth="7" strokeLinecap="round" />
    </>
  ),
  magnifier: (c) => (
    <>
      <circle cx="42" cy="42" r="28" fill="none" stroke={c} strokeWidth="9" />
      <path d="M63 63L88 88" stroke={c} strokeWidth="11" strokeLinecap="round" />
      <path d="M28 34a16 16 0 0 1 10-10" fill="none" stroke={c} strokeWidth="5" strokeLinecap="round" />
    </>
  ),
  cap: (c) => (
    <>
      <path d="M50 16L96 38L50 60L4 38Z" fill={c} />
      <path d="M24 49V70C24 78 76 78 76 70V49L50 61Z" fill={c} />
      <path d="M88 42V70" stroke={c} strokeWidth="4" strokeLinecap="round" />
      <circle cx="88" cy="74" r="5" fill={c} />
    </>
  ),
  sparkles: (c) => (
    <>
      <path d="M40 8C43 34 50 41 76 44C50 47 43 54 40 80C37 54 30 47 4 44C30 41 37 34 40 8Z" fill={c} />
      <path d="M80 56C81.5 68 84 70.5 96 72C84 73.5 81.5 76 80 88C78.5 76 76 73.5 64 72C76 70.5 78.5 68 80 56Z" fill={c} />
    </>
  ),
  heart: (c) => (
    <path d="M50 88C22 68 6 52 6 33A21 21 0 0 1 50 22A21 21 0 0 1 94 33C94 52 78 68 50 88Z" fill={c} />
  ),
  bubble: (c) => (
    <>
      <path d="M14 14H74A12 12 0 0 1 86 26V56A12 12 0 0 1 74 68H42L24 84V68H14A12 12 0 0 1 2 56V26A12 12 0 0 1 14 14Z" fill={c} />
      <circle cx="26" cy="41" r="6" fill="var(--shape-cut, #fff)" />
      <circle cx="44" cy="41" r="6" fill="var(--shape-cut, #fff)" />
      <circle cx="62" cy="41" r="6" fill="var(--shape-cut, #fff)" />
    </>
  ),
  globe: (c) => (
    <>
      <circle cx="50" cy="50" r="40" fill="none" stroke={c} strokeWidth="8" />
      <ellipse cx="50" cy="50" rx="17" ry="40" fill="none" stroke={c} strokeWidth="7" />
      <path d="M12 50H88M18 30H82M18 70H82" stroke={c} strokeWidth="6" strokeLinecap="round" />
    </>
  ),
  phone: (c) => (
    <>
      <rect x="24" y="4" width="52" height="92" rx="12" fill={c} />
      <rect x="31" y="16" width="38" height="62" rx="4" fill="var(--shape-cut, #fff)" />
      <circle cx="50" cy="87" r="4" fill="var(--shape-cut, #fff)" />
      <path d="M38 40l8 8 16-16" fill="none" stroke={c} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  people: (c) => (
    <>
      <circle cx="32" cy="30" r="14" fill={c} />
      <circle cx="70" cy="34" r="12" fill={c} />
      <path d="M6 86C6 64 18 52 32 52S58 64 58 86Z" fill={c} />
      <path d="M52 86C52 68 60 58 70 58S94 68 94 86Z" fill={c} opacity="0.75" />
    </>
  ),
  rocket: (c) => (
    <g fill="none" stroke={c} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 5.5">
      <path d="M50 6C66 20 72 42 68 66H32C28 42 34 20 50 6Z" strokeDasharray="none" />
      <circle cx="50" cy="36" r="9" strokeDasharray="none" />
      <path d="M32 50L18 66V80L32 70M68 50L82 66V80L68 70" strokeDasharray="none" />
      <path d="M40 72L36 94M50 72V98M60 72L64 94" />
    </g>
  ),
  squiggle: (c) => (
    <path
      d="M4 60C16 30 28 30 38 50S62 76 72 50S90 24 96 40"
      fill="none"
      stroke={c}
      strokeWidth="9"
      strokeLinecap="round"
    />
  ),
};

export default function Shape({ type = "star", color = "currentColor", className = "", style, label }) {
  const draw = shapes[type];
  if (!draw) return null;
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={style}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : "true"}
      focusable="false"
    >
      {draw(color)}
    </svg>
  );
}
