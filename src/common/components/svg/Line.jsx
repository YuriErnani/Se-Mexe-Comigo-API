export default function Line({ width = 1560, height = 66, ...props }) {
  return (
    <svg
      {...props}
    //   width={width}
    //   height={height}
      viewBox="0 0 1560 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="4" x2="1560" y2="4" stroke="#aaa" strokeWidth="3" />
      <line y1="19" x2="1560" y2="19" stroke="#aaa" strokeWidth="3" />
      <line y1="34" x2="1560" y2="34" stroke="#aaa" strokeWidth="3" />
      <line y1="49" x2="1560" y2="49" stroke="#aaa" strokeWidth="3" />
      <line y1="64" x2="1560" y2="64" stroke="#aaa" strokeWidth="3" />
    </svg>
  )
}
