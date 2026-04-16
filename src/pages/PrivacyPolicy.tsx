import React, { useState, useEffect } from 'react';
import { ChevronRight, Shield, Lock, FileText, AlertCircle, Eye, Database, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState('introduction');

    const sections = [
        { id: 'introduction', label: '1. Introduction', icon: <FileText className="w-4 h-4" /> },
        { id: 'data-collection', label: '2. Data We Collect', icon: <Database className="w-4 h-4" /> },
        { id: 'data-usage', label: '3. How We Use Your Data', icon: <Eye className="w-4 h-4" /> },
        { id: 'data-protection', label: '4. Data Protection', icon: <Lock className="w-4 h-4" /> },
        { id: 'your-rights', label: '5. Your Rights', icon: <UserCheck className="w-4 h-4" /> },
        
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
                            Last Updated: January 15, 2026
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight text-white">
                            Privacy <span className="text-gradient">Policy</span>
                        </h1>
                        <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
                            Your privacy is our priority. Learn how Advantix AGI collects, uses, and protects your business information with the highest standards of security.
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
                                    At Advantix AGI, we understand that your business information is sensitive. This Privacy Policy outlines our commitment to protecting your data and explains how we collect, use, store, and safeguard your information in compliance with applicable privacy laws and professional standards.
                                </p>
                                <p className="mt-4">
                                    By using our AI automation platform and services, you entrust us with crucial operational data. We take this responsibility seriously and have implemented comprehensive security measures and enterprise-grade privacy practices to ensure your data remains confidential and secure.
                                </p>
                            </div>
                        </section>

                        {/* 2. Data We Collect */}
                        <section id="data-collection" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-blue/20 text-neon-blue border border-neon-blue/30 font-bold text-lg">02</span>
                                <h2 className="text-2xl font-bold text-white">Data We Collect</h2>
                            </div>
                            <div className="text-white/70 leading-relaxed max-w-none">
                                <p className="mb-6">
                                    We collect various types of information to provide you with secure and efficient AI automation services:
                                </p>

                                <div className="space-y-6">
                                    <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center text-neon-purple">
                                            <UserCheck className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2 mt-0">Business Information</h3>
                                            <p className="text-base m-0">
                                                Company details, contact information (email, phone number), billing credentials, and verified organizational scopes.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center text-neon-blue">
                                            <Database className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2 mt-0">Workflow & AI Data</h3>
                                            <p className="text-base m-0">
                                                Platform usage analytics, connected API credentials, automated workflow definitions, system inputs that you explicitly provide to our custom AI agents, and resultant outputs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 3. How We Use Your Data */}
                        <section id="data-usage" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-teal/20 text-neon-teal border border-neon-teal/30 font-bold text-lg">03</span>
                                <h2 className="text-2xl font-bold text-white">How We Use Your Data</h2>
                            </div>
                            <div className="text-white/70 leading-relaxed max-w-none">
                                <p className="mb-6">
                                    Your data is used exclusively for platform operations and delivering our tailored AI agents. We never sell your business data to third parties.
                                </p>
                                <ul className="list-disc pl-5 mt-4 space-y-3 marker:text-neon-purple">
                                    <li><strong>Service Delivery:</strong> Operating your custom agents and ensuring autonomous decisions map correctly to your business constraints.</li>
                                    <li><strong>Platform Operations:</strong> Managing infrastructure, processing authentications, and providing specialized technical support.</li>
                                    <li><strong>Model Refinement:</strong> Improving system responsiveness privately. We <strong className="text-white">do not</strong> train public foundational models on your private corporate data.</li>
                                </ul>
                            </div>
                        </section>

                        {/* 4. Data Protection */}
                        <section id="data-protection" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30 font-bold text-lg">04</span>
                                <h2 className="text-2xl font-bold text-white">Data Protection & Security</h2>
                            </div>
                            <div className="text-white/70 leading-relaxed max-w-none">
                                <p className="mb-8">
                                    We employ enterprise-grade security to isolate and protect your data from unauthorized access:
                                </p>

                                <div className="space-y-6">
                                    <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neon-purple/10 border border-neon-purple/20 flex items-center justify-center text-neon-purple">
                                            <Lock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2 mt-0">Encryption</h3>
                                            <p className="text-base m-0">All data is encrypted using AES-256 encryption at rest and TLS 1.3 in transit.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center text-neon-blue">
                                            <Shield className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2 mt-0">Access Controls</h3>
                                            <p className="text-base m-0">Strict role-based access limits internal access to your workflows on a strict need-to-know, fully audited basis.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                         {/* 5. Your Rights */}
                         <section id="your-rights" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-teal/20 text-neon-teal border border-neon-teal/30 font-bold text-lg">05</span>
                                <h2 className="text-2xl font-bold text-white">Your Privacy Rights</h2>
                            </div>
                            <div className="text-white/70 leading-relaxed max-w-none">
                                <p className="mb-6">
                                    You have complete control over your business configuration and data retention:
                                </p>
                                <ul className="list-disc pl-5 mt-4 space-y-4 marker:text-neon-blue">
                                    <li><strong>Right to Access:</strong> Request exports of all logged workflow activity and prompt history.</li>
                                    <li><strong>Right to Erasure:</strong> Delete AI agent instances and wipe associated token memories completely from our servers.</li>
                                    <li><strong>Revocation:</strong> Disconnect any integrated APIs and instantly revoke the agent's access to your ecosystem.</li>
                                </ul>
                            </div>
                        </section>

                        {/* 6. Contact Us */}
                        <section id="contact" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-purple/20 text-neon-purple border border-neon-purple/30 font-bold text-lg">06</span>
                                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
                            </div>
                            <div className="text-white/70 leading-relaxed max-w-none">
                                <p className="mb-8">
                                    If you have questions about how our AI agents process your data, please contact our security team.
                                </p>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex gap-4 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-purple/50 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                                        <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center text-neon-purple group-hover:bg-neon-purple group-hover:text-white transition-colors">
                                            <Shield className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white m-0">Privacy Officer</h3>
                                            <p className="text-sm text-white/50 mb-2">For platform inquiries</p>
                                            <a href="mailto:contact@advantixagi.com" className="text-neon-purple font-medium hover:underline">Contact@advantixagi.com</a>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-blue/50 hover:bg-white/10 transition-all duration-300 group cursor-pointer">
                                        <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center text-neon-blue group-hover:bg-neon-blue group-hover:text-white transition-colors">
                                            <Lock className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white m-0">Security Team</h3>
                                            <p className="text-sm text-white/50 mb-2">For technical architecture</p>
                                            <a href="mailto:contact@advantixagi.com" className="text-neon-blue font-medium hover:underline">Contact@advantixagi.com</a>
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

export default PrivacyPolicy;
