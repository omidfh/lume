export default function UpperHeader() {
  return (
    <div className="hidden md:flex flex flex-row justify-between bg-surface px-1 py-2 border-b border-border text-muted ">
      <p className="text">PARIS • TOKYO • NEW YORK • LONDON</p>
      <p>COMPLIMENTARY WHITE-GLOVE COURIER ON ORDERS OVER $400</p>
      <div>
        <select>
          <option>EN / USD ($)</option>
          <option>FR / EUR (€)</option>
          <option>EN / GBP (£)</option>
        </select>
      </div>
    </div>
  );
}
