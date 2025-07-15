"use client"

import { useState, useEffect } from "react"
import { Heart, Star, ArrowDown, Quote, Users, Camera, Lightbulb, BookOpen } from "lucide-react"

export default function FarewellStory() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero - A Heartfelt Reflection */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-orange-900/20"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.8) 70%)`,
          }}
        ></div>

        {/* Gentle corner elements */}
        <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-amber-400"></div>
        <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-amber-400"></div>
        <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-amber-400"></div>
        <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-amber-400"></div>

        <div className="text-center z-10 px-6">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto bg-white rounded-full p-4 mb-4">
              <img
                src="/au-united-logo.png"
                alt="AU United Photography Club Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-orange-300 to-red-400 bg-clip-text text-transparent">
            "A Journey- AU United Photography Club"
          </h1>
          <p className="text-xl md:text-2xl text-amber-200 mb-4 font-light">
            Reflections on Three Years of Growth, Community, and Countless Memories
          </p>
          <div className="text-lg text-amber-300/80 space-y-2">
            <p className="text-xl">By Keshav Atal, Outgoing Head</p>
            <p className="text-amber-400">AU United Photography Club • 2022—2025</p>
          </div>

          <div className="mt-12 animate-bounce">
            <ArrowDown className="h-8 w-8 mx-auto text-amber-400" />
          </div>
        </div>
      </section>


      {/* The Beginning - Our Foundation */}
      <section className="relative py-20 bg-gradient-to-b from-black via-slate-900 to-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Where Our Story Began</h2>
            <p className="text-xl text-amber-200">From a simple idea to a thriving family</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* The Club Logo */}
            <div className="relative">
              <div className="bg-white p-6 pb-16 transform rotate-1 shadow-2xl">
                <div className="bg-gradient-to-br from-amber-100 to-orange-200 h-80 flex items-center justify-center overflow-hidden rounded p-8">
                  <img
                    src="/au-united-logo.png"
                    alt="AU United Photography Club Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-slate-800 font-handwriting text-lg">The symbol of our shared passion</p>
                </div>
              </div>

              {/* Gentle achievement notes */}
              <div className="absolute -top-4 -right-4 bg-amber-400 text-black px-4 py-2 rounded-full font-bold text-sm transform rotate-12">
                250+ Family
              </div>
              <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm transform -rotate-12">
                Together We Grew
              </div>
            </div>

            {/* The Humble Story */}
            <div className="space-y-6">
              <Quote className="h-12 w-12 text-amber-400 mb-6" />
              <blockquote className="text-2xl font-light leading-relaxed text-amber-100">
                "When I first joined AU United Photography Club, it was merely a name with no structured identity. What
                happened next was beyond anything I could have imagined - we became a family of 250+ passionate souls."
              </blockquote>

              <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-6 rounded-lg border-l-4 border-amber-400">
                <h3 className="text-xl font-bold text-white mb-3">Our Collective Growth</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-amber-400">1</div>
                    <p className="text-amber-200 text-sm">Where we started</p>
                    <p className="text-amber-300/70 text-xs">2022</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-amber-400">250+</div>
                    <p className="text-amber-200 text-sm">Where we are today</p>
                    <p className="text-amber-300/70 text-xs">2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Dedication and Presence */}
      <section className="relative py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Users className="h-16 w-16 mx-auto text-amber-400 mb-6" />
            <h2 className="text-5xl font-bold text-white mb-4">Our Unwavering Dedication</h2>
            <p className="text-xl text-amber-200">How we showed up, every single time</p>
          </div>

          {/* The Heart of Our Commitment */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 p-12 rounded-lg border border-amber-400/30 text-center">
              <Quote className="h-12 w-12 mx-auto text-amber-400 mb-6" />
              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-amber-100 mb-8">
                "We showed up at every event, in rain or shine. We stayed up late editing photos, helped each other
                learn, and turned every little opportunity into something big. We built a space where people felt seen —
                both in front of the lens and behind it."
              </blockquote>
              <p className="text-amber-300 text-lg">— The spirit that defined us</p>
            </div>
          </div>

          {/* Major Events We Covered */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-amber-300 mb-8">Major University Events We Covered</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "AURORA 2022", desc: "National Cultural & Technical Fest", impact: "Complete team coverage" },
                { name: "SIH 2023", desc: "Smart India Hackathon", impact: "Innovation documented" },
                { name: "PERIScope 2022", desc: "National Engineering Conference", impact: "Research showcased" },
                { name: "VAANI 2024", desc: "AICTE AI/ML Initiative", impact: "Bridging language gaps" },
                { name: "Orientation Programs", desc: "2022, 2023, 2024", impact: "Welcoming new students" },
                { name: "AU Foundation Day", desc: "6th Foundation Celebration", impact: "University legacy captured" },
              ].map((event, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-lg border border-amber-400/30 hover:border-amber-400 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-amber-400 rounded-full group-hover:animate-pulse"></div>
                    <h4 className="font-bold text-white">{event.name}</h4>
                  </div>
                  <p className="text-amber-200 text-sm mb-2">{event.desc}</p>
                  <p className="text-amber-400 text-xs font-semibold">{event.impact}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-amber-200 text-lg">
                ...and countless workshops, seminars, departmental events, and university celebrations
              </p>
              <p className="text-amber-300/80 text-sm mt-2">
                Because every moment at our university deserved to be captured with care
              </p>
            </div>
          </div>

          {/* Community Activities We Created */}
          <div>
            <h3 className="text-3xl font-bold text-center text-amber-300 mb-8">Community Activities We Organized</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 p-8 rounded-lg border border-amber-400/30">
                <h4 className="text-xl font-bold text-white mb-4">📸 Photography Contests</h4>
                <ul className="space-y-2 text-amber-100">
                  <li>• Photography Contest 2023: Engaging mobile & DSLR enthusiasts</li>
                  <li>• Vibrant Summer 2024: Celebrating nature's colors</li>
                  <li>• Dussehra Contest 2024: Village life and festivities</li>
                  <li>• ...and many more creative competitions that sparked imagination</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 p-8 rounded-lg border border-amber-400/30">
                <h4 className="text-xl font-bold text-white mb-4">🌟 Community Building</h4>
                <ul className="space-y-2 text-amber-100">
                  <li>• Active social media presence</li>
                  <li>• Sunday-Funday: Monthly creative challenges</li>
                  <li>• RK Beach Photowalks</li>
                  <li>• Portrait Photography Sessions</li>
                  <li>• ...and countless moments of connection and growth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Moment Captured by Our Family */}
      <section className="relative py-20 bg-gradient-to-b from-black via-slate-900 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <Camera className="h-16 w-16 mx-auto text-amber-400 mb-6" />
            <h2 className="text-5xl font-bold text-white mb-4">Through the Eyes of Our Family</h2>
            <p className="text-xl text-amber-200">A moment captured and designed by one of our talented juniors during recruitment</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white p-4 transform -rotate-1 shadow-2xl rounded-lg">
              <img
                src="https://i.ibb.co/1f07RdrM/f8f0da20-e972-40bd-ab3a-0d6d9e7638ce.jpg"
                alt="Keshav Atal during club recruitment - captured by a junior member"
                className="w-full h-auto rounded"
              />
              <div className="mt-4 text-center">
                <p className="text-slate-800 font-handwriting text-lg">
                  "Captured during recruitment - when passion meets purpose"
                </p>
                <p className="text-slate-600 text-sm mt-1">— Created with love by our junior family member</p>
              </div>
            </div>

            {/* Gentle decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-4 border-amber-400 rounded-full opacity-30"></div>
            <div className="absolute -bottom-6 -right-6 w-8 h-8 border-4 border-orange-400 rounded-full opacity-40"></div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-amber-200 italic">
              "This is what our club is about - nurturing talent, capturing moments, and creating memories together."
            </p>
          </div>
          {/* Recruitment/Spirit Video */}
          <div className="text-center mt-20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Club Spirit: The Recruitment Video</h3>
            <p className="text-lg text-amber-200 mb-6 max-w-2xl mx-auto">
              This video, created by our juniors for the 2024 recruitment, captures the energy, passion, and welcoming spirit of AU United Photography Club. It’s a reminder of how our journey inspired many to join and create memories together.
            </p>
            <div className="relative w-full aspect-video max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl border-4 border-amber-400">
              <iframe
                src="https://www.youtube.com/embed/MYA3wdF2WPM?si=tazul1Hpv4U6DMbI"
                title="AU United Photography Club Recruitment Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                style={{ minHeight: 300 }}
              />
            </div>
            <p className="text-amber-300 mt-4 text-base">Thank you to our juniors for this wonderful tribute and for welcoming new members!</p>
          </div>
        </div>
      </section>

      {/* Lessons We Learned Together */}
      <section className="relative py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <Lightbulb className="h-16 w-16 mx-auto text-amber-400 mb-6" />
            <h2 className="text-5xl font-bold text-white mb-4">What This Journey Taught Us</h2>
            <p className="text-xl text-amber-200">Lessons learned through collective experience</p>
          </div>

          <div className="space-y-8">
            {[
              {
                lesson: "Community Over Individual",
                insight:
                  "The most beautiful photographs are the ones that bring people together. Our strength was never in one person, but in how we supported each other.",
              },
              {
                lesson: "Growth Through Collaboration",
                insight:
                  "Every event we covered, every contest we organized, every photowalk we took - it was our collective passion that made the magic happen.",
              },
              {
                lesson: "Building Something Lasting",
                insight:
                  "We didn't just capture moments; we created a culture. A place where creativity meets community, where every member feels valued and heard.",
              },
              {
                lesson: "Gratitude and Humility",
                insight:
                  "Every achievement was possible because of the trust, support, and dedication of our 250+ family members and our wonderful mentor.",
              },
            ].map((item, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-8 border-l-4 border-amber-400 hover:border-amber-300 transition-all duration-300 group-hover:transform group-hover:translate-x-2">
                  <h3 className="text-2xl font-bold text-amber-300 mb-4">{item.lesson}</h3>
                  <p className="text-xl text-amber-100 leading-relaxed italic">"{item.insight}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Thanks */}
      <section className="relative py-20 bg-gradient-to-br from-amber-900/20 via-black to-orange-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Heart className="h-16 w-16 mx-auto text-amber-400 mb-8" />
          <h2 className="text-5xl font-bold text-white mb-16">Special Thanks</h2>

          <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 p-12 rounded-lg border border-amber-400/30 mb-12">
            <BookOpen className="h-12 w-12 mx-auto text-amber-400 mb-6" />
            <h3 className="text-3xl font-bold text-white mb-6">To Our Club Mentor</h3>
            <p className="text-2xl text-amber-200 mb-4">Prof. Paul Douglas</p>
            <p className="text-xl text-amber-100 leading-relaxed">
              For always supporting us, believing in our vision, and guiding us through every challenge. Your mentorship
              made all the difference in our journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="text-4xl font-bold text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                250+
              </div>
              <p className="text-amber-200 font-semibold">Family Members</p>
              <p className="text-sm text-amber-300/70 mt-2">Each one precious</p>
            </div>

            <div className="group">
              <div className="text-4xl font-bold text-amber-400 mb-4 group-hover:scale-110 transition-transform">∞</div>
              <p className="text-amber-200 font-semibold">Memories Created</p>
              <p className="text-sm text-amber-300/70 mt-2">Together we captured</p>
            </div>

            <div className="group">
              <div className="text-4xl font-bold text-amber-400 mb-4 group-hover:scale-110 transition-transform">3</div>
              <p className="text-amber-200 font-semibold">Years of Growth</p>
              <p className="text-sm text-amber-300/70 mt-2">Side by side</p>
            </div>
          </div>
        </div>
      </section>

      {/* Passing the Responsibility */}
      <section className="relative py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Star className="h-16 w-16 mx-auto text-amber-400 mb-8" />
          <h2 className="text-5xl font-bold text-white mb-8">Passing the Responsibility</h2>

          <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 p-12 rounded-lg border border-amber-400/30">
            <p className="text-2xl text-amber-100 leading-relaxed mb-8">
              As I step back, the responsibility now belongs to all 250+ members of AU United Photography Club.
              Together, we built this family, and together you will continue to grow it.
            </p>
            <div className="flex justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Camera className="h-10 w-10 text-black" />
                </div>
                <p className="text-2xl font-bold text-white">Yuvraj</p>
                <p className="text-amber-300">Leading the Vision</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Heart className="h-10 w-10 text-black" />
                </div>
                <p className="text-2xl font-bold text-white">Sai Diwakar</p>
                <p className="text-amber-300">Guiding the Journey</p>
              </div>
            </div>
            <p className="text-xl text-amber-200 mb-4">
              May you continue to nurture this beautiful community we've built together.
            </p>
            <p className="text-lg text-amber-300/80 italic">
              "Every member is a leader, every voice matters, every contribution counts."
            </p>
          </div>
        </div>
      </section>

      {/* Our Visual Legacy */}
      <section className="relative py-20 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Camera className="h-16 w-16 mx-auto text-amber-400 mb-8" />
          <h2 className="text-5xl font-bold text-white mb-8">Our Visual Legacy Lives On</h2>

          <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 p-12 rounded-lg border border-amber-400/30 mb-12">
            <p className="text-2xl text-amber-100 leading-relaxed mb-8">
              Every event, every moment, every smile we captured together tells our story.
            </p>
            <a
              href="https://auunitedclub.netlify.app/clubs/photography"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-amber-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105"
            >
              <Camera className="h-6 w-6" />
              Explore Our Gallery
            </a>
            <p className="text-amber-300 text-sm mt-4">
              Witness the moments that defined our journey together
            </p>
          </div>
        </div>
      </section>

      {/* Final Gratitude */}
      <section className="relative py-20 bg-gradient-to-t from-amber-900/20 to-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
            <Quote className="h-16 w-16 mx-auto text-amber-400 mb-8" />
            <blockquote className="text-3xl md:text-4xl font-light leading-relaxed text-amber-100 mb-8">
              "I came with a camera and a passion. I leave with 250+ friendships, countless memories, and a heart full of
              gratitude for this incredible journey we shared."
            </blockquote>
          </div>

          <div className="space-y-6">
            <p className="text-2xl text-amber-200">With heartfelt gratitude,</p>
            <div className="text-5xl font-bold bg-gradient-to-r from-amber-200 via-orange-300 to-red-400 bg-clip-text text-transparent">
              Keshav Atal
            </div>
            <p className="text-xl text-amber-300">Outgoing Head (2022–2025)</p>
            <p className="text-lg text-amber-400">AU United Photography Club</p>
            <p className="text-amber-500">[Andhra University]</p>
          </div>

          {/* Connect & Explore */}
          <div className="mt-12 space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://www.instagram.com/an_imaginator_world"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
              >
                📸 Connect on Instagram
              </a>
              <a
                href="https://keshavatal.com.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-400 hover:to-cyan-400 transition-all duration-300 transform hover:scale-105"
              >
                🌐 Visit My Portfolio
              </a>
            </div>
            <a
              href="https://auunitedphotographyclub.netlify.app/"
              className="inline-block text-amber-400 hover:text-amber-300 underline text-lg"
            >
              auunitedphotographyclub.netlify.app
            </a>
          </div>

          {/* Final gentle effect */}
          <div className="mt-16">
            <div className="w-24 h-24 mx-auto border-4 border-amber-400 rounded-full flex items-center justify-center animate-pulse">
              <Heart className="h-12 w-12 text-amber-400" />
            </div>
            <p className="mt-4 text-amber-300 text-sm">*With Love & Gratitude*</p>
            <p className="mt-2 text-amber-400/60 text-xs">
              "Keep capturing, keep creating, keep connecting"
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
