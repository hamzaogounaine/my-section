import React from 'react';
import { ArrowLeft, School, Sparkles, Search } from 'lucide-react';
import { faculties } from '@/public/faculties';
import Link from 'next/link';

const HomePage = () => {
    return (
        <main className="min-h-screen bg-slate-50/60" dir="rtl">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-primary/10 via-white to-slate-50/60 py-20 md:py-28">
                <div className="container mx-auto max-w-4xl px-4 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary mb-6 shadow-2xs">
                        <Sparkles className="h-3.5 w-3.5 text-primary" />
                        <span>الموسم الجامعي الجديد • جامعة ابن زهر</span>
                    </div>

                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl leading-[1.2]">
                        مرحباً بك في منصة <span className="text-primary">My Section</span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-base text-slate-600 sm:text-lg leading-relaxed">
                        اعثر على فوجك الدراسي، المدرج، وجدول الحصص الخاص بك في كليات جامعة ابن زهر بنقرة واحدة وبدون تعقيد.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                            href="#faculties"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-[0.98]"
                        >
                            <Search className="h-4 w-4" />
                            <span>اختر كليتك وابدأ البحث</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* College Selection Cards */}
            <section id="faculties" className="container mx-auto max-w-5xl px-4 py-16 sm:py-24">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                        اختر مؤسستك الجامعية
                    </h2>
                    <p className="mt-2 text-sm text-slate-500 font-medium">
                        حدد الكلية المسجل بها لعرض الأفواج وقوائم الطلبة المعتمدة
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {faculties.map((fac) => (
                        <div
                            key={fac.id}
                            className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                                        <School className="h-3.5 w-3.5" />
                                        {fac.badge}
                                    </span>
                                    <span className="text-xs font-mono font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md">
                                        {fac.code}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                                    {fac.title}
                                </h3>
                                <p className="mt-2 text-sm text-slate-500 leading-normal">
                                    {fac.campus}
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <Link href={`/${fac.id}`}>
                                    <button
                                        type="button"
                                        className="w-full flex items-center justify-between rounded-xl bg-slate-100 px-4 py-3 text-sm font-bold text-slate-700 transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-md group-hover:shadow-primary/20"
                                    >
                                        <span>الدخول لقوائم الأفواج</span>
                                        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1.5" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default HomePage;