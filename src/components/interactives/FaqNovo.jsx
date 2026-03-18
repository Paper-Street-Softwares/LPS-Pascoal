import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-border", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, colorMode = "dark", ...props }, ref) => {
    let textBase, hoverText, activeText;

    switch (colorMode) {
      case "light":
        textBase = "text-corTitulosPreto";
        hoverText = "hover:text-primaryDark";
        activeText = "data-[state=open]:text-primaryDark";
        break;

      case "dark":
        textBase = "text-corTitulosBranca";
        hoverText = "hover:text-primaryLight";
        activeText = "data-[state=open]:text-primaryLight";
        break;

      case "defaultDark":
        textBase = "text-corTitulosPreto";
        hoverText = "hover:text-primaryDark";
        activeText = "data-[state=open]:text-primaryDark";
        break;

      case "defaultLight":
        textBase = "text-corTitulosBranca";
        hoverText = "hover:text-primaryLight";
        activeText = "data-[state=open]:text-white";
    }

    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          ref={ref}
          {...props}
          className={cn(
            // base
            "group flex flex-1 items-center justify-between py-6 text-left font-mainFont text-lg font-medium transition-colors",

            // cores dinâmicas
            textBase,
            hoverText,
            activeText,

            // rotação do ícone
            "[&[data-state=open]>svg]:rotate-180",

            className,
          )}
        >
          {children}
          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  },
);

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      {...props}
      className={cn(
        "overflow-hidden text-sm font-secondFont transition-all",
        "data-[state=open]:animate-accordion-down",
        "data-[state=closed]:animate-accordion-up",
        className,
      )}
    >
      <div className="pb-6 pt-0">{children}</div>
    </AccordionPrimitive.Content>
  ),
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
