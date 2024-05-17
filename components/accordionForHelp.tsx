import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export function AccordionForHelp() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How can I register?</AccordionTrigger>
        <AccordionContent>
          Unfortunately, we do not give an option for registration. All users
          are picked using our database for parents.
          <span>
            The database contains details of the guardian or parent of each
            student in the school
          </span>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          I am facing challenges, who should I contact?
        </AccordionTrigger>
        <AccordionContent>
          You can cantact the support team at{" "}
          <Link href="+233595350354" className="text-blue-800 font-black">
            059 535 0354
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Why is it saying, I have voted already?
        </AccordionTrigger>
        <AccordionContent>
          This means you have already voted or someone who have access to your details has done that on your behalf. Contact us if you need further assistance. Phone:{" "}
          <Link href="+233595350354" className="text-blue-800 font-black">
            059 535 0354
          </Link>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
