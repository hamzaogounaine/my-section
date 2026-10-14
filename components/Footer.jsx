"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Code2, Heart } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog";

const socialLinks = [
    {
        name: "LinkedIn",
        label: "LinkedIn Profile",
        href: "https://www.linkedin.com/in/hamza-ogounaine",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
        color: "hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/5",
        badge: "تواصل مهني",
    },
    {
        name: "Instagram",
        label: "@7amzaa_999",
        href: "https://instagram.com/7amzaa_999",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
        color: "hover:border-[#E4405F]/40 hover:bg-[#E4405F]/5",
        badge: "متابعة",
    },
    // {
    //     name: "WhatsApp",
    //     label: "WhatsApp Chat",
    //     href: "https://wa.me/+212674180102",
    //     image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
    //     color: "hover:border-[#25D366]/40 hover:bg-[#25D366]/5",
    //     badge: "مراسلة مباشرة",
    // },
];

const Footer = () => {
    const [dialogState, setDialogState] = useState(false);

    return (
        <footer className="border-t border-border/40 bg-card py-8 text-foreground" dir="rtl">
            <div className="container mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
                <div>
                    <p className="text-sm text-muted-foreground">
                        جميع الحقوق محفوظة ©  2026 {" "}
                        <span className="font-semibold text-foreground">My Section</span>.
                    </p>
                </div>

                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <span>تم التطوير بكل</span>
                    <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
                    <span>بواسطة</span>
                    <button
                        type="button"
                        onClick={() => setDialogState(true)}
                        className="font-semibold cursor-pointer text-foreground underline decoration-primary/50 underline-offset-4 hover:text-primary transition-colors focus:outline-none"
                    >
                        Hamza Ogounaine
                    </button>
                </div>
            </div>

            {/* Profile & Social Modal */}
            <Dialog open={dialogState} onOpenChange={setDialogState}>
                <DialogContent
                    className="sm:max-w-md rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900"
                    dir="rtl"
                >
                    <DialogHeader className="text-right space-y-2">
                        <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                            <Code2 className="h-3.5 w-3.5" />
                            <span>مطور المنصة</span>
                        </div>

                        <DialogTitle className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                            Hamza Ogounaine
                        </DialogTitle>

                        <DialogDescription className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                            تطبيق <strong className="text-slate-700 dark:text-slate-200">My Section</strong> منصة طلابية لتسهيل الوصول للأفواج وجداول الحصص في كليات جامعة ابن زهر.
                        </DialogDescription>
                    </DialogHeader>

                    {/* Social Links List with Brand Images */}
                    <div className="mt-4 space-y-2.5">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            قنوات التواصل والمتابعة
                        </p>

                        <div className="grid grid-cols-1 gap-2.5">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`group flex items-center justify-between p-3 rounded-2xl border border-slate-200/80 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-800/40 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs ${item.color}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-2xs border border-slate-100 dark:border-slate-700 dark:bg-slate-800">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width={28}
                                                height={28}
                                                className="object-contain transition-transform duration-200 group-hover:scale-110"
                                                unoptimized
                                            />
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm font-bold text-slate-900 dark:text-white">
                                                {item.name}
                                            </div>
                                            <div className="text-xs font-mono text-slate-400">
                                                {item.label}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="text-[11px] font-medium text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200">
                                            {item.badge}
                                        </span>
                                        <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-transform group-hover:-translate-x-0.5" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </footer>
    );
};

export default Footer;