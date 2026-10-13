"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    CheckCircle2,
    RotateCcw,
    Users,
    ArrowRight,
    Search,
    X,
    GraduationCap,
    Sparkles,
    BookOpen
} from "lucide-react";
import { determineSection, faculties } from "@/public/faculties";

const PageComponent = ({ fac }) => {
    const [selectedClass, setSelectedClass] = useState(null);
    const [lastName, setLastName] = useState("");
    const [section, setSection] = useState("");
    const faculty = faculties.find((f) => f.id === fac);

    const getSection = () => {
        if (!lastName.trim() || !selectedClass) return;
        setSection(determineSection(fac, selectedClass.id, lastName));
    };

    const handleClose = () => {
        setSelectedClass(null);
        setLastName("");
        setSection("");
    };

    // Keyboard accessibility: Escape to dismiss, scroll lock while open
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") handleClose();
        };
        if (selectedClass) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [selectedClass]);

    if (!faculty) {
        return (
            <div className="min-h-screen bg-slate-50/60 p-6 sm:p-10 flex flex-col items-center justify-center text-center" dir="rtl">
                <div className="w-full max-w-md bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm flex flex-col items-center gap-6">
                    <div className="flex items-center justify-start w-full border-b border-slate-100 pb-4">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
                        >
                            <ArrowRight className="w-4 h-4" />
                            العودة للخلف
                        </Link>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-2xl font-bold tracking-tight text-slate-900">الكلية غير موجودة</h1>
                        <p className="text-sm text-slate-500">يرجى التأكد من الرابط أو العودة إلى الصفحة الرئيسية.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50/60 p-6 sm:p-10 flex flex-col items-center gap-8" dir="rtl">
            {/* Top Navigation */}
            <div className="flex items-center justify-between w-full max-w-4xl border-b border-slate-200/80 pb-4">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
                >
                    <ArrowRight className="w-4 h-4" />
                    العودة للخلف
                </Link>
                <span className="text-xs font-mono font-bold text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-lg shadow-2xs">
                    {faculty.code}
                </span>
            </div>

            {/* Faculty Meta Header */}
            <div className="relative overflow-hidden w-full max-w-4xl bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col items-center justify-center text-center">
                <div className="pointer-events-none absolute -top-16 -left-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

                <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-3.5 py-1.5 rounded-full mb-3">
                    {faculty.badge}
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
                    الفصول الدراسية
                </h1>
                <p className="text-base font-bold text-slate-700">{faculty.title}</p>
                <p className="text-sm text-slate-400 mt-1">{faculty.campus}</p>
            </div>

            {/* Classes Grid */}
            <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {faculty.classes.map((cla) => (
                    <div
                        key={cla.id}
                        onClick={() => {
                            cla?.boundes?.length &&
                                setSelectedClass(cla);
                            setSection("");
                        }}
                        className="group relative flex items-center justify-center p-6 bg-white border border-slate-200/80 rounded-2xl shadow-xs hover:border-primary/50 hover:shadow-md hover:-translate-y-0.5 transition-all text-center cursor-pointer select-none"
                    >
                        <div className="flex items-center gap-3">
                            {cla?.boundes?.length > 0 ? <>
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                    <BookOpen className="h-5 w-5" />
                                </div>
                                <p className="font-bold text-slate-800 group-hover:text-primary transition-colors">
                                    {cla.name}
                                </p> </> :
                                <>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 group-hover:bg-primary/10 group-hover:text-primary transition-colors ">
                                        <X className="h-5 w-5 text-destructive" />
                                    </div>
                                    <div className="font-bold text-slate-800 group-hover:text-primary transition-colors">
                                        {cla.name}
                                        <p className="text-xs text-destructive ">سيتم تحديثه قريبا</p>
                                    </div> </>
                            }
                        </div>
                    </div>
                ))}
            </div>

            {/* Modern Custom Modal */}
            {selectedClass && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" dir="rtl">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-slate-950/50 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
                        onClick={handleClose}
                    />

                    {/* Modal Container */}
                    <div className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/40 bg-white/95 p-6 sm:p-8 shadow-2xl backdrop-blur-xl transition-all dark:border-slate-800 dark:bg-slate-900/95 animate-in zoom-in-95 duration-200">
                        {/* Ambient Background Accents */}
                        <div className="pointer-events-none absolute -top-16 -right-16 h-36 w-36 rounded-full bg-primary/15 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-emerald-500/15 blur-3xl" />

                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={handleClose}
                            className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white"
                        >
                            <X className="h-4 w-4" />
                        </button>

                        {!section ? (
                            /* FORM STATE */
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    getSection();
                                }}
                                className="space-y-6"
                            >
                                {/* Header */}
                                <div className="space-y-2 text-right">
                                    <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                                        <GraduationCap className="h-3.5 w-3.5" />
                                        <span>{selectedClass?.name}</span>
                                    </div>
                                    <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
                                        إدخال النسب (الكنية بالفرنسية)
                                    </h2>
                                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                                        أدخل النسب العائلي بالأحرف اللاتينية كما هو مدون في بطاقتك الوطنية أو موقع الكلية.
                                    </p>
                                </div>

                                {/* Input Field */}
                                <div className="space-y-2 text-right">
                                    <label
                                        htmlFor="family-name-input"
                                        className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                                    >
                                        النسب (Nom de famille)
                                    </label>
                                    <div className="relative group">
                                        <Search className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
                                        <input
                                            id="family-name-input"
                                            type="text"
                                            name="name"
                                            value={lastName}
                                            placeholder="مثال: LAKTAL, OUAZIZ..."
                                            autoFocus
                                            required
                                            onChange={(e) => setLastName(e.target.value)}
                                            className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 py-3.5 pl-4 pr-11 text-sm font-bold uppercase tracking-wider text-slate-900 outline-none transition-all placeholder:font-normal placeholder:normal-case placeholder:tracking-normal placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 dark:border-slate-800 dark:bg-slate-800/60 dark:text-white dark:focus:border-primary"
                                        />
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                                    <button
                                        type="submit"
                                        className="flex-1 rounded-xl bg-primary py-3 text-sm font-bold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all active:scale-[0.98]"
                                    >
                                        تأكيد البحث
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleClose}
                                        className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
                                    >
                                        إلغاء
                                    </button>
                                </div>
                            </form>
                        ) : (
                            /* RESULT SUCCESS STATE */
                            <div className="flex flex-col items-center justify-center space-y-5 py-2 text-center">
                                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                                    <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-emerald-500 animate-pulse" />
                                    <CheckCircle2 className="h-9 w-9" />
                                </div>

                                <div className="space-y-1">
                                    <span className="text-xs font-semibold text-slate-400">
                                        {selectedClass?.name}
                                    </span>
                                    <h3 className="text-xl font-black text-slate-900 dark:text-white">
                                        تم تحديد الفوج بنجاح
                                    </h3>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">
                                        بناءً على التوزيع الأبجدي المعتمد من الكلية
                                    </p>

                                </div>

                                {/* Section Output Card */}
                                <div className="w-full rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 dark:border-emerald-500/10 dark:bg-emerald-950/20">
                                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                                        فوجك الدراسي
                                    </span>
                                    <div className="mt-2 flex items-center justify-center gap-2">
                                        <Users className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                                        <span className="text-3xl font-black text-slate-900 dark:text-white">
                                            {section}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-[10px] text-red-500 dark:text-slate-400">
                                    ملاحظة: هذا التوزيع يعتمد على التوزيع الأبجدي الرسمي للكلية
                                    إذا كنت تعتقد أن هناك خطأ، يرجى التواصل مع إدارة الكلية
                                    للمزيد من المعلومات أو في حالة وجود استثناءات خاصة
                                </p>
                                {/* Result Actions */}
                                <div className="flex w-full items-center gap-2.5 pt-3 border-t border-slate-100 dark:border-slate-800">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSection("");
                                            setLastName("");
                                        }}
                                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
                                    >
                                        <RotateCcw className="h-4 w-4" />
                                        <span>بحث آخر</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleClose}
                                        className="flex-1 rounded-xl bg-slate-900 py-3 text-sm font-bold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-all active:scale-[0.98]"
                                    >
                                        إغلاق
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PageComponent;