"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import GlowCard from "./GlowCard";

type Props = {
  title: string;
  description: string;
  icon: any;
  slug: string;
};

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  slug,
}: Props) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Link href={`/services/${slug}`}>

        <GlowCard>

          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition">
            <Icon className="w-7 h-7 text-white" />
          </div>

          <h3 className="text-xl font-semibold text-white mb-4">
            {title}
          </h3>

          <p className="text-zinc-400 leading-relaxed text-sm mb-6">
            {description}
          </p>

          <div className="flex items-center gap-2 text-white text-sm font-medium">
            Learn More
            <ArrowRight className="w-4 h-4" />
          </div>

        </GlowCard>

      </Link>
    </motion.div>
  );
};

export default ServiceCard;