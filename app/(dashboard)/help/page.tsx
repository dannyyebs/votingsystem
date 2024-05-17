import { AccordionForHelp } from "@/components/accordionForHelp"
import { Separator } from "@/components/ui/separator"

const HelpPage = () => {
  return (
    <div className="lg:mt-2 mt-16">
      <h2 className="text-2xl font-bold">Do you need help?</h2>
      <Separator className="my-4" />
      <AccordionForHelp />
    </div>
  )
}

export default HelpPage