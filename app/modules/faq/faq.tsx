import { Button } from "~/components/ui/button";

export function FAQPage() {
  const faqs = [
    {
      question: "What is the difference between ceremonial and culinary matcha?",
      answer:
        "Ceremonial grade matcha is made from the youngest tea leaves, with stems and veins removed, resulting in a vibrant green color and smooth, delicate flavor meant to be whisked with water. Culinary grade is made from older leaves, has a more robust flavor, and is ideal for baking, smoothies, and lattes.",
    },
    {
      question: "How should I store my matcha?",
      answer:
        "Matcha is sensitive to light, heat, and moisture. Store it in an airtight container in the refrigerator to preserve its color and flavor. Once opened, it's best consumed within 1-2 months.",
    },
    {
      question: "Does matcha contain caffeine?",
      answer:
        "Yes, matcha contains caffeine (about 30-70mg per serving), but it also contains L-theanine, an amino acid that promotes relaxation. This combination provides a sustained, calm energy boost without the jitters often associated with coffee.",
    },
    {
      question: "How do I prepare traditional matcha?",
      answer:
        "Sift 1-2 scoops (about 1/2 tsp) of matcha into a bowl. Add 2 oz of hot (not boiling, around 175°F/80°C) water. Whisk vigorously in a W or M motion with a bamboo chasen until a frothy layer forms on top.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we only ship within Indonesia. We are working on expanding our shipping options to international destinations soon.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-4 text-center">Frequently Asked Questions</h1>
      <p className="text-center text-muted-foreground mb-12">Find answers to common questions about our matcha and services.</p>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-emerald-100/50">
            <h3 className="text-lg font-semibold text-emerald-900 mb-3">{faq.question}</h3>
            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
        <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-4">Still have questions?</h3>
        <p className="text-gray-600 mb-6">Our customer support team is here to help you with any inquiries.</p>
        <Button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8">Contact Support</Button>
      </div>
    </div>
  );
}
