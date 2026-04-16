import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Lock, FileText, AlertCircle, HelpCircle } from 'lucide-react';

const TermsOfService = () => {
    const [activeSection, setActiveSection] = useState('introduction');

    const sections = [
        { id: 'introduction', label: '1. Introduction', icon: <FileText className="w-4 h-4" /> },
        { id: 'service-disclaimer', label: '2. Service Disclaimer', icon: <AlertCircle className="w-4 h-4" /> },
        { id: 'privacy-security', label: '3. Data Privacy & Security', icon: <Lock className="w-4 h-4" /> },
        { id: 'user-responsibilities', label: '4. User Responsibilities', icon: <Shield className="w-4 h-4" /> },
        { id: 'contact', label: '5. Contact Us', icon: <HelpCircle className="w-4 h-4" /> },
    ];

    // Scroll Spy for Table of Contents
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Account for fixed header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-16 section-padding">
            {/* Hero Section */}
            <header className="relative mb-16 overflow-hidden">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto text-center animate-on-scroll animate-active">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-white/50 mb-6">
                            <AlertCircle className="w-4 h-4 text-neon-purple" />
                            Last Updated: April 15, 2026
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight text-white">
                            Terms & <span className="text-gradient">Conditions</span>
                        </h1>
                        <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
                            Please read these terms carefully before using our AI automation services. By accessing Advantix AGI, you agree to be bound by these terms to ensure a secure operating environment.
                        </p>
                    </div>
                </div>
            </header>

            <main className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">

                    {/* Sidebar Navigation */}
                    <aside className="lg:w-1/4 w-full relative">
                        <div className="sticky top-28 z-30 bg-[#121212]/95 backdrop-blur-sm lg:bg-transparent py-4 lg:py-0 px-4 lg:px-0 border-b lg:border-0 border-white/10 lg:top-32 space-y-0 lg:space-y-1 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-3 lg:gap-1 scrollbar-hide">
                            <p className="hidden lg:block text-xs font-semibold text-white/40 uppercase tracking-wider mb-4 px-3">
                                Table of Contents
                            </p>
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`flex-shrink-0 lg:w-full flex items-center justify-between px-4 py-2.5 lg:py-3 text-sm rounded-full lg:rounded-xl transition-all duration-200 whitespace-nowrap ${
                                        activeSection === section.id
                                            ? 'bg-neon-purple/10 text-neon-purple border border-neon-purple/30 font-bold'
                                            : 'bg-white/5 border border-white/5 text-white/60 hover:bg-white/10 hover:text-white font-medium'
                                    }`}
                                >
                                    <div className="flex items-center gap-2 lg:gap-3">
                                        {section.icon}
                                        {section.label}
                                    </div>
                                    {activeSection === section.id && (
                                        <ChevronRight className="w-4 h-4 text-neon-purple hidden lg:block" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Content Area */}
                    <div className="lg:w-3/4 space-y-16 pb-20">

                        {/* 1. Introduction */}
                        <section id="introduction" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30 font-bold text-lg">01</span>
                                <h2 className="text-2xl font-bold text-white">Introduction</h2>
                            </div>
                            <div className="prose prose-invert prose-lg text-white/70 leading-relaxed max-w-none">
                                <p>
                                    Welcome to Advantix AGI. By accessing or using our platform, website, and custom AI agent solutions, you agree to comply with and be bound by these Terms and Conditions. These terms constitute a legally binding agreement between you ("Client", "User", or "Organization") and Advantix AGI LLP ("Company", "we", "us", or "our").
                                </p>
                                <p className="mt-4">
                                    Advantix AGI is a state-of-the-art intelligent automation agency designed to securely streamline business operations and data processing. We are dedicated to maintaining the highest standards of operational integrity and data privacy. By utilizing our services, you acknowledge that you have read, understood, and agreed to these terms, as well as our Privacy Policy.
                                </p>
                                <p className="mt-4">
                                    We reserve the right to modify these terms at any time to reflect changes in our technology, services, or legal obligations. Continued use of the platform after such modifications constitutes your acceptance of the new terms.
                                </p>
                            </div>
                        </section>

                        {/* 2. Service Disclaimer */}
                        <section id="service-disclaimer" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-blue/20 text-neon-blue border border-neon-blue/30 font-bold text-lg">02</span>
                                <h2 className="text-2xl font-bold text-white">Service Disclaimer</h2>
                            </div>
                            <div className="text-white/70 leading-relaxed max-w-none">
                                <div className="bg-white/5 border-l-4 border-neon-purple p-6 rounded-r-xl mb-6">
                                    <p className="font-bold text-white mb-2">CRITICAL NOTICE: Not Business or Legal Advice</p>
                                    <p className="text-white/70 text-base m-0">
                                        Advantix AGI is an automation technology provider, not an authorized financial, legal, or professional advisory firm. The automated insights, AI-generated outputs, and workflow recommendations provided are for operational efficiency and informational purposes only.
                                    </p>
                                </div>
                                <ul className="list-disc pl-5 mt-4 space-y-2 marker:text-neon-blue">
                                    <li><strong>No Professional Reliance:</strong> Automated reports routing or AI judgments generated through our platform should be independently verified by human professionals within your organization before making critical business decisions.</li>
                                    <li><strong>Third-Party Integrations:</strong> We do not hold liability for the uptime, accuracy, or changes to third-party endpoints or APIs connected via our automated workflows.</li>
                                    <li><strong>System Availability:</strong> While we target high-availability architectures, we do not guarantee completely uninterrupted platform performance during extreme system failures or designated maintenance windows.</li>
                                </ul>
                            </div>
                        </section>

                        {/* 3. Data Privacy & Security */}
                        <section id="privacy-security" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-teal/20 text-neon-teal border border-neon-teal/30 font-bold text-lg">03</span>
                                <h2 className="text-2xl font-bold text-white">Data Privacy & Security</h2>
                            </div>
                            <div className="text-white/70 leading-relaxed max-w-none">
                                <p className="mb-8">
                                    Safeguarding your intellectual property and operational data is the core pillar of our architecture. We employ enterprise-grade encryption standards to ensure your proprietary workflows remain strictly confidential and secure.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center text-neon-purple">
                                            <Lock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2 mt-0">End-to-End Encryption</h3>
                                            <p className="text-base m-0">
                                                All sensitive operational data and API keys are encrypted at rest using <strong>AES-256</strong> and transferred securely via <strong>TLS 1.3</strong>. Your proprietary datasets and credentials remain strictly inaccessible to unauthorized systems.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center text-neon-blue">
                                            <Shield className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2 mt-0">Zero Trust Architecture</h3>
                                            <p className="text-base m-0">
                                                We implement strict permission-based access controls for AI agents executing tasks in your environment. Our AI does not access resources outside of the explicitly defined scopes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 4. User Responsibilities */}
                        <section id="user-responsibilities" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30 font-bold text-lg">04</span>
                                <h2 className="text-2xl font-bold text-white">User Responsibilities</h2>
                            </div>
                            <div className="text-white/70 leading-relaxed max-w-none">
                                <p>
                                    To maintain the integrity of our automated solutions, you agree to the following operational responsibilities:
                                </p>
                                <ul className="list-disc pl-5 mt-4 space-y-4 marker:text-neon-purple">
                                    <li>
                                        <strong>Authorization:</strong> You certify that you hold the legal authority to grant our AI agents access to your organization's internal workflows, databases, and connected software platforms.
                                    </li>
                                    <li>
                                        <strong>API Endpoint Security:</strong> You are responsible for ensuring any internal webhooks or APIs provided to Advantix AGI for automation integrations are properly secured against independent external threats.
                                    </li>
                                    <li>
                                        <strong>Lawful Automation:</strong> You agree to use the custom agents exclusively for lawful business processes. Generating automated spam, deploying malicious network requests, or circumventing external platform rate-limits through our infrastructure is strictly prohibited.
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* 5. Contact Us */}
                        <section id="contact" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-blue/20 text-neon-blue border border-neon-blue/30 font-bold text-lg">05</span>
                                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
                            </div>
                            <div className="text-white/70 leading-relaxed max-w-none">
                                <p className="mb-8">
                                    We value your partnership and are here to securely assist you. If you have any inquiries regarding these terms or your service level agreements, please reach out.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-teal/50 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                                        <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-neon-teal/10 flex items-center justify-center text-neon-teal group-hover:bg-neon-teal group-hover:text-white transition-colors">
                                            <HelpCircle className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white m-0">General Support</h3>
                                            <p className="text-sm text-white/50 mb-2">For account and usage queries</p>
                                            <a href="mailto:contact@advantixagi.com" className="text-neon-teal font-medium hover:underline">contact@advantixagi.com</a>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-purple/50 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                                        <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center text-neon-purple group-hover:bg-neon-purple group-hover:text-white transition-colors">
                                            <Shield className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white m-0">Legal & Compliance</h3>
                                            <p className="text-sm text-white/50 mb-2">For contract and security matters</p>
                                            <a href="mailto:contact@advantixagi.com" className="text-neon-purple font-medium hover:underline">contact@advantixagi.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default TermsOfService;
