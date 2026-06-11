"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const DialogBlock = () => {
  return (
    <Dialog defaultOpen>
      <DialogContent className="md:max-w-4xl p-0 rounded-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>
            SH Tech Lab Consultation Popup
          </DialogTitle>

          <DialogDescription>
            Get a free consultation and project estimate from SH Tech Lab.
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-[45%_55%] md:min-h-[550px]">
          {/* Desktop Image Only */}
          <div className="hidden md:block h-[550px]">
            <img
              src="/images/project-consultation.png"
              alt="SH Tech Lab Consultation"
              className="w-full object-cover sm:h-full h-40"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12">
            <div>
              <h2 className="text-card-foreground text-3xl font-medium">
                Ready to Build Your Website?
              </h2>

              <p className="text-muted-foreground text-base font-normal">
                Get a free consultation and project estimate from
                SH Tech Lab.
              </p>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                Whether you need a business website, website redesign,
                maintenance, SEO optimization, or a custom web
                application, our team is here to help your business
                grow online.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <Button
                asChild
                size="lg"
                className="w-full"
              >
                <Link href="/ConsultationForm">
                  Book Free Consultation
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full"
              >
                <Link href="/start-project">
                  Start Your Project
                </Link>
              </Button>

              <Button
                asChild
                variant="secondary"
                size="lg"
                className="w-full"
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBlock;