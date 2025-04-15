import { Button } from "@/components/ui/button";
import { Portal } from "@radix-ui/react-portal";
import { MenuIcon, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import React, { ComponentProps } from "react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const sidebar = {
  open: { x: 0 },
  closed: { x: "-100%" },
};

const overlay = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

function Sidebar({ open, onClose, children }: SidebarProps) {
  return (
    <Portal>
      <AnimatePresence>
        {open && (
          <React.Fragment>
            <motion.div
              className="fixed inset-0 bg-gray-950/50 h-screen z-40"
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlay}
              onClick={onClose}
            />

            <motion.aside
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebar}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex flex-col justify-center fixed top-0 left-0 h-screen w-[75dvw] bg-background z-50 p-6 border-r border-card/10 shadow-lg"
            >
              {children}
              <SidebarClose onClick={onClose} />
            </motion.aside>
          </React.Fragment>
        )}
      </AnimatePresence>
    </Portal>
  );
}

type SidebarTriggerProps = ComponentProps<typeof Button>;

function SidebarTrigger(props: SidebarTriggerProps) {
  return (
    <Button variant="outline" size="icon" {...props}>
      <MenuIcon />
    </Button>
  );
}

type SidebarCloseProps = ComponentProps<typeof Button>;

function SidebarClose(props: SidebarCloseProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="absolute top-4 right-4 hover:bg-white/10 hover:text-foreground"
      {...props}
    >
      <XIcon size="16" />
    </Button>
  );
}

export { Sidebar, SidebarTrigger };
