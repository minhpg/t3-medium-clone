import { inter } from "@/pages/fonts";
import { Dialog } from "@headlessui/react";
import { useState, type Dispatch, type SetStateAction } from "react";
import LoginModal from "./LoginModal.component";
import RegisterModal from "./RegisterModal.component";
import { useAuthModalContext } from "@/pages/contexts/AuthModal.context";

export interface AuthModalSwitchProps {
  setLoginModal: Dispatch<SetStateAction<boolean>>;
}

export default function AuthModal() {
  const { isOpen, setIsOpen, isLogin, setIsLogin } = useAuthModalContext();

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-white/85" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div
        className={`fixed inset-0 flex w-screen items-center justify-center p-4 font-sans ${inter.variable}`}
      >
        {/* The actual dialog panel  */}
        {isLogin && <LoginModal setLoginModal={setIsLogin} />}
        {!isLogin && <RegisterModal setLoginModal={setIsLogin} />}
      </div>
    </Dialog>
  );
}
