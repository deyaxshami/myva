import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
    return (
        <div className="mt-36 flex-col justify-center font-[family-name:var(--font-geist-sans)]">
            <div className="m-auto  max-w-9xl mx-auto">
                <h1 className="text-5xl my-10">
                    FREQUENTLY ASKED QUESTIONS
                </h1>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

        </div>
    );
}
