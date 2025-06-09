import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '@/blocks/ui/dialog';
import LocationCard from '../About Me/LocationCard';
import Bento from '../About Me/Bento'

const AboutSection = () => {

  return (
    <section id="about" className="py-20 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-firebase-red">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-firebase-orange to-firebase-purple mx-auto mb-8" />
        </div>

      <Bento></Bento>

      </div>
    </section>
  );
};

export default AboutSection;
