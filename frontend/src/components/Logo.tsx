export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="60"
    >
      <circle
        cx="20"
        cy="30"
        r="15"
        fill="none"
        stroke="#000"
        strokeWidth="4"
      ></circle>
      <circle
        cx="20"
        cy="30"
        r="10"
        fill="none"
        stroke="#000"
        strokeWidth="2"
      ></circle>
      <path
        stroke="#000"
        strokeWidth="2"
        d="M20 15v30M5 30h30M10 20l20 20M10 40l20-20"
      ></path>
      <text
        x="45"
        y="39"
        fontFamily="Menlo, Monaco, Helvetica, Arial, sans-serif"
        fontSize="24"
      >
        ToNotes
      </text>
    </svg>
  );
}
