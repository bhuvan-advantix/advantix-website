import React, { useRef, useCallback } from 'react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
// Using standard img tag for framework compatibility

// Team member data
const teamMembers = [
  {
    id: 1,
    name: 'Sathish Ravoor',
    role: 'FOUNDER / CTO',
    image: '/team/sathish.png.png'
  },
  {
    id: 2,
    name: 'Sheik Jailani',
    role: 'FOUNDER / COO',
    image: '/team/sheik.png.png'
  },
  {
    id: 3,
    name: 'Hakeemullah S',
    role: 'FOUNDER / CEO',
    image: '/team/hakim.png.png'
  },
  {
    id: 4,
    name: 'Sabrish Surender',
    role: 'FOUNDER / AI SCIENTIST',
    image: '/team/sabrish.png.png'
  },

];

const TeamSection: React.FC = () => {
  const swiperRef = useRef<any>(null);

  // Swiper parameters
  const swiperParams = {
    modules: [EffectCoverflow, Autoplay],
    effect: 'coverflow' as const,
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto' as const,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
      slideShadows: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      },
    },
    onSwiper: (swiper: any) => {
      swiperRef.current = swiper;
    },
  };

  const handleMouseEnter = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The brilliant minds behind our success. Passionate, dedicated, and always pushing boundaries.
          </p>
        </div>

        <div 
          className="py-8 px-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Swiper {...swiperParams} className="w-full">
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id} className="max-w-xs mx-auto">
                <div className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/20 hover:border-primary/30 transition-all duration-300 h-full flex flex-col">
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/10 group-hover:border-primary/30 transition-colors">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover ${member.name === 'Sheik Jailani' ? 'object-top' : ''}`}
                      style={member.name === 'Sheik Jailani' ? { objectPosition: 'center 20%' } : {}}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
                  <p className="text-primary text-center font-medium">{member.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
