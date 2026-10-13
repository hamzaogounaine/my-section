import React from 'react';
import { Compass, GraduationCap } from 'lucide-react';

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-all">
            <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" dir="rtl">
                {/* Brand */}
                <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm shadow-primary/30">
                        <GraduationCap className="h-6 w-6" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground">
                        My Section
                    </span>
                </div>

                {/* Links */}
                <nav className="hidden items-center gap-6 md:flex">
                    <a href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        الرئيسية
                    </a>
                    <a href="#faculties" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        الكليات
                    </a>
                    <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                        عن المنصة
                    </a>
                </nav>

                {/* Action Button */}
                <div className="flex items-center gap-3">
                    <a
                        href="#search"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-all active:scale-[0.98]"
                    >
                        <Compass className="h-4 w-4" />
                        <span>ابحث عن فوجك</span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;