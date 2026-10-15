"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogClose,
} from "@/components/ui/dialog";
import {
    X,
    ExternalLink,
    Send,
    FileText
} from "lucide-react";

export default function NewsDialog() {
    const [isOpen, setIsOpen] = useState(true);

    const whatsappNumber = "212674180102";
    const defaultMessage = encodeURIComponent(
        "السلام عليكم، بخصوص قسم الدروس (PDFs) / المساعدة في موقع My Section:"
    );

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent
                className="w-full max-w-md  overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xl outline-none"
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
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                            <FileText className="h-3.5 w-3.5" />
                            <span>قريباً: مكتبة الدروس (PDF)</span>
                        </div>

                        <h2 className="text-xl font-black tracking-tight text-slate-900 leading-snug">
                            نعمل على إضافة قسم خاص بملفات ودروس الشعب
                        </h2>

                        <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                            بهدف مساعدة الجميع، سنقوم بتوفير دروس وملخصات بصيغة <span className="font-bold text-slate-800">PDF</span> داخل الموقع. إذا كانت لديك أي دروس، ملخصات، أو امتحانات سابقة وتريد مشاركتها مع زملائك، يمكنك إرسالها إليّ عبر واتساب وسأقوم بنشرها.
                        </p>
                    </div>

                    {/* Notice / Contribution Box */}
                    <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-3.5 text-xs text-emerald-800 leading-relaxed">
                        💡 مساهمتك بالملفات ستساعد باقي الطلبة في مسارهم الدراسي. يمكنك أيضاً مراسلتي إذا واجهت أي مشكلة تقنية.
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2.5 pt-2 border-t border-slate-100">
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-sm hover:bg-emerald-700 transition-all active:scale-[0.98]"
                        >
                            <Send className="h-4 w-4" />
                            <span>أرسل الملفات عبر واتساب</span>
                            <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                        </a>

                        <DialogClose asChild>
                            <button
                                type="button"
                                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                            >
                                إغلاق
                            </button>
                        </DialogClose>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}