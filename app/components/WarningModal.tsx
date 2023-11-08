"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { AiOutlineWarning } from "react-icons/ai";

type ModalProps = {
  isOpen: boolean;
  onClose: (confirmed: boolean) => void;
  message1: string;
  message2: string;
};

const WarningModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  message1,
  message2,
}) => {
  function closeModal(confirmed: boolean) {
    onClose(confirmed);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div id="modal-card" className="fixed inset-0 flex items-center justify-center m-36">
            <div className="flex min-h-full items-center justify-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform rounded-2xl p-10 bg-white shadow-xl transition-all">
                  <AiOutlineWarning className="w-full text-[200px] justify-center text-orange-500"/>
                  <p className="text-center text-lg font-bold leading-6 text-slate-600">
                  {message1}
                  </p>
                  <div className="mt-2">
                    <p className="text-center text-sm text-slate-600 w-full">
                      {message2}
                    </p>
                  </div>

                  <div className="w-full mt-4 inline-flex justify-center space-x-8 relative">
                    <button
                      type="button"
                      className="large-button-orange-recall"
                      onClick={() => closeModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="large-button-orange"
                      onClick={() => closeModal(true)}
                    >
                      Confirm
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default WarningModal;
