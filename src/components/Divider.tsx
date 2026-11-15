export default function Divider({ width = 100 }) {
  return (
    <hr
      style={{ width: `${width}%` }}
      className="my-4 h-px border-0 bg-gradient-to-r from-transparent via-main to-transparent"
    />
  );
}
