'use client';

import Link from 'next/link';
import { Zap, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                <Zap className="w-6 h-6 text-bg-primary" />
              </div>
              <span className="text-xl font-bold text-text-primary">AgentFlow</span>
            </Link>
            <p className="mt-4 text-text-secondary max-w-sm">
              Discover, share, and monetize pre-built automation workflows for GitHub. 
              Supercharge your development with agentic workflows.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-text-muted hover:text-accent-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-accent-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-accent-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-text-muted hover:text-accent-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/browse" className="text-text-secondary hover:text-accent-primary transition-colors">
                  Browse Workflows
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-text-secondary hover:text-accent-primary transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/create" className="text-text-secondary hover:text-accent-primary transition-colors">
                  Start Selling
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-text-secondary hover:text-accent-primary transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-text-secondary hover:text-accent-primary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-text-secondary hover:text-accent-primary transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-text-secondary hover:text-accent-primary transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-text-secondary hover:text-accent-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-text-primary font-semibold">Stay updated</h4>
              <p className="text-text-secondary text-sm mt-1">Get the latest workflows and updates delivered to your inbox.</p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field w-64"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} AgentFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-text-muted text-sm hover:text-text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-text-muted text-sm hover:text-text-secondary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
