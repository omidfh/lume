import { AiOutlineClose } from "react-icons/ai";
import { SlClose } from "react-icons/sl";

export default function ModalComponent({ children, close }) {
  return (
    <div
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          close(false);
        }
      }}
      className="fixed inset-0 z-50 flex md:hidden items-center justify-center bg-black/50 backdrop-blur-sm p-4 "
    >
      <div className="w-full max-w-md max-h-[90dvh] overflow-y-auto border border-border bg-bg2 p-6 text-main">
        <div className="flex flex-col gap-4 justify-center">
          <button
            onClick={() => close(false)}
            className="flex w-full text-lg justify-end"
          >
            <AiOutlineClose />{" "}
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}
