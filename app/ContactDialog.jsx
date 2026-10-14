"use client";

import { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogClose,
} from "@/components/ui/dialog";
import {
    MessageCircle,
    HelpCircle,
    X,
    ExternalLink,
    Send
} from "lucide-react";

export default function ContactDialog() {
    const [isOpen, setIsOpen] = useState(true);

    const whatsappNumber = "212674180102"; // Replace with your WhatsApp number (without +)
    const defaultMessage = encodeURIComponent(
        "السلام عليكم، واجهت مشكلة في موقع My Section أثناء البحث عن فوجي الدراسي."
    );

    useEffect(() => {
        // Check if the user has visited before
        const hasSeenPrompt = localStorage.getItem("mysection_contact_seen");
        if (!hasSeenPrompt) {
            // Small timeout ensures layout hydration completes before mounting the overlay
            const timer = setTimeout(() => {
                setIsOpen(true);
                localStorage.setItem("mysection_contact_seen", "true");
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            {/* Dialog container styled matching the existing modal */}
            <DialogContent
                className=" w-full max-w-md overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xl outline-none"
                dir="rtl"
                showCloseButton={false}
            >
                {/* Subtle Ambient Light Accents */}
                <div className="pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full bg-emerald-500/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-blue-500/10 blur-3xl" />

                {/* Close Button */}
                <DialogClose asChild>
                    <button
                        type="button"
                        className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-800"
                        aria-label="إغلاق"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </DialogClose>

                <div className="space-y-6 pt-1 text-right">
                    {/* Header Badge & Title */}
                    <div className="space-y-2">
                        {/* <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                            <HelpCircle className="h-3.5 w-3.5" />
                            <span>مرحبا بك في الموقع</span>
                        </div> */}
                        <h2 className="text-xl font-black tracking-tight text-slate-900">
                            تحتاج أي مساعدة في العثور على فوجك؟
                        </h2>
                        <p className="text-xs sm:text-sm leading-relaxed text-slate-500">
                            إذا واجهتك أي صعوبة أثناء البحث أو لاحظت أي خطأ في بيانات الأقسام، يمكنك التواصل معي مباشرة على واتساب وسأساعدك فوراً.
                        </p>
                    </div>

                    {/* Contact Highlight Card */}
                    {/* <div className="w-full rounded-2xl border border-emerald-200 bg-emerald-50/60 p-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                            قناة الدعم الفوري
                        </span>
                        <div className="mt-2.5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-sm">
                                    <MessageCircle className="h-5 w-5" />
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-slate-900">واتساب (WhatsApp)</p>
                                    <p className="text-xs text-slate-500">دعم مباشر للطلبة</p>
                                </div>
                            </div>
                            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-bold text-emerald-800">
                                متاح الآن
                            </span>
                        </div>
                    </div> */}

                    {/* Actions */}
                    <div className="flex items-center gap-2.5 pt-2 border-t border-slate-100">
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 transition-all active:scale-[0.98]"
                        >
                            <Send className="h-4 w-4" />
                            <span>تواصل عبر واتساب</span>
                            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                        </a>

                        <DialogClose asChild>
                            <button
                                type="button"
                                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                            >
                                فهمت، شكراً
                            </button>
                        </DialogClose>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}