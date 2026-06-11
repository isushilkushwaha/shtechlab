import { Card, CardContent } from "@/components/ui/card";
import {
  Rocket,
  ShieldCheck,
  MonitorSmartphone,
  Smartphone,
  Search,
  TrendingUp,
} from "lucide-react";
import { playfair } from "@/lib/fonts";

const technologies = [
  {
    title: "Fast Performance",
    icon: Rocket,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    titleColor: "text-blue-700",
    points: [
      "Powered by Next.js",
      "Quick page loading",
      "Better SEO performance",
    ],
  },
  {
    title: "Secure & Reliable",
    icon: ShieldCheck,
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconColor: "text-green-600",
    titleColor: "text-green-700",
    points: [
      "Firebase Backend",
      "Secure Data Storage",
      "Scalable Infrastructure",
    ],
  },
  {
    title: "Modern Experience",
    icon: MonitorSmartphone,
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    iconColor: "text-yellow-600",
    titleColor: "text-yellow-700",
    points: [
      "React Technology",
      "Interactive Components",
      "Smooth Navigation",
    ],
  },
  {
    title: "Mobile Responsive",
    icon: Smartphone,
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    iconColor: "text-purple-600",
    titleColor: "text-purple-700",
    points: [
      "Tailwind CSS",
      "Mobile Friendly",
      "Tablet & Desktop Ready",
    ],
  },
  {
    title: "SEO Optimized",
    icon: Search,
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    iconColor: "text-orange-600",
    titleColor: "text-orange-700",
    points: [
      "Google Friendly Structure",
      "Faster Indexing",
      "Higher Search Visibility",
    ],
  },
  {
    title: "Future Ready",
    icon: TrendingUp,
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    iconColor: "text-pink-600",
    titleColor: "text-pink-700",
    points: [
      "Scalable Architecture",
      "Easy Feature Expansion",
      "Built For Growth",
    ],
  },
];

export default function Technologies() {
  return (
    <section className="py-5 md:py-16 lg:py-5">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="max-w-3xl">
          <h2
            className={`${playfair.className} text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl`}
          >
            Technology That Powers <br />
            <span className="text-blue-600">Your Success</span>
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            We use industry-leading technologies to create websites that are
            fast, secure, mobile-friendly, and optimized for search engines.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <Card
                key={tech.title}
                className={`
                  min-w-[300px]
                  max-w-[300px]
                  rounded-3xl
                  border
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                  ${tech.bgColor}
                  ${tech.borderColor}
                `}
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Icon className={`h-7 w-7 ${tech.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3
                    className={`mb-5 text-xl font-bold ${tech.titleColor}`}
                  >
                    {tech.title}
                  </h3>

                  {/* Features */}
                  <ul className="space-y-4">
                    {tech.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-slate-700"
                      >
                        <div
                          className={`mt-2 h-2.5 w-2.5 rounded-full ${tech.iconColor.replace(
                            "text",
                            "bg"
                          )}`}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}