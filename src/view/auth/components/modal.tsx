import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  ctaText: string;
  cta: () => void;
  headText: string;
  message: string;
  icon: JSX.Element;
};
const Modal: React.FC<Props> = ({
  headText,
  message,
  cta,
  ctaText,
  isOpen,
  onClose,
  icon,
}) => {
  return (
    <Dialog
      open={isOpen}
      as="div"
      className="h-screen w-screen bg-black/50 fixed top-0 left-0 z-[5]"
      onClose={onClose}
      __demoMode
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md rounded-xl bg-green-300/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 border border-green-100">
            <div>{icon}</div>
            <DialogTitle as="h3" className="text-base/7 font-medium text-white">
              {headText}
            </DialogTitle>
            <p className="mt-2 text-sm/6 text-white">{message}</p>
            <div className="mt-4">
              <Button
                className="inline-flex items-center gap-2 rounded-md bg-green-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-green-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-green-700 duration-150"
                onClick={cta}
              >
                {ctaText}
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
