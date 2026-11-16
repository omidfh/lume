export default function FooterMain() {
  return (
    <div className="flex w-full text-main justify-between py-16 uppercase">
      {/* //* Lume Part */}
      <div className="flex flex-col gap-8 w-[30%] ">
        <div className="flex flex-col gap-8">
          <h2 className="font-headline text-5xl tracking-[.6rem]">Lume</h2>
          <p className="font-thin text-md tracking-[.3rem]">
            A luxury design studio dedicated to disciplined tailoring,
            sculptural silhouettes, and unembellished sartorial endurance.
          </p>
        </div>
        <div>
          <p className="font-thin text-sm tracking-[.1rem] normal-case">
            © {new Date().getFullYear()} Omid Fh. All rights reserved.
          </p>
        </div>
      </div>

      {/* //*Collection */}
      <div className="flex flex-col font-thin text-md tracking-[.3rem] gap-3">
        <a href="/collection" className="font-bold">
          COLLECTION
        </a>
        <a href="/collection">Outerwear</a>
        <a href="/collection">Tailored Suiting</a>
        <a href="/collection">Silk & Dresses</a>
        <a href="/collection">Knitwear</a>
        <a href="/collection">Leather Goods</a>
      </div>

      <div className="flex flex-col font-thin text-md tracking-[.3rem] gap-3">
        <a href="#" className="font-bold">
          ASSISTANCE
        </a>
        <a href="#">Client Services</a>
        <a href="#">Complimentary Shipping</a>
        <a href="#">Returns & Exchanges</a>
        <a href="#">Legal & Privacy</a>
        <a href="#">Instagram</a>
      </div>
    </div>
  );
}
