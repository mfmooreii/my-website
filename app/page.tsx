"use client";
import { useState } from "react";

const menuCategories = [
  {
    name: "Smoked Meats",
    items: [
      { name: "Brisket (1/2 lb)", price: "$18", desc: "14-hour oak-smoked USDA prime brisket, sliced or chopped" },
      { name: "Baby Back Ribs (full rack)", price: "$32", desc: "Slow-smoked pork ribs with our signature dry rub" },
      { name: "Pulled Pork (1/2 lb)", price: "$14", desc: "Hickory-smoked pork shoulder, fall-apart tender" },
      { name: "Smoked Sausage Links (2 pc)", price: "$12", desc: "House-made jalapeño cheddar sausage links" },
      { name: "Smoked Chicken (half)", price: "$16", desc: "Free-range chicken, rubbed and smoked over mesquite" },
      { name: "Beef Ribs (1 bone)", price: "$22", desc: "Massive beef rib, 12-hour smoked — the Texas classic" },
    ],
  },
  {
    name: "Sandwiches & Burgers",
    items: [
      { name: "Brisket Sandwich", price: "$16", desc: "Sliced brisket on a toasted brioche bun with pickles and onions" },
      { name: "Pulled Pork Sandwich", price: "$13", desc: "Pulled pork, coleslaw, and BBQ sauce on a brioche bun" },
      { name: "BBQ Bacon Burger", price: "$15", desc: "1/2 lb smash patty, cheddar, bacon, and smoky BBQ sauce" },
      { name: "Smoked Chicken Sandwich", price: "$14", desc: "Smoked chicken breast, pickled jalapeños, and ranch slaw" },
    ],
  },
  {
    name: "Sides",
    items: [
      { name: "Mac & Cheese", price: "$6", desc: "Creamy three-cheese baked mac" },
      { name: "Baked Beans", price: "$5", desc: "Slow-cooked pinto beans with brisket burnt ends" },
      { name: "Coleslaw", price: "$4", desc: "Creamy house-made coleslaw" },
      { name: "Jalapeño Cornbread", price: "$5", desc: "Cast iron skillet cornbread with honey butter" },
      { name: "Potato Salad", price: "$5", desc: "Southern-style mustard potato salad" },
      { name: "Fried Okra", price: "$6", desc: "Crispy golden fried okra with ranch dipping sauce" },
      { name: "Onion Rings", price: "$7", desc: "Beer-battered thick-cut onion rings" },
      { name: "Collard Greens", price: "$5", desc: "Slow-cooked with smoked ham hock" },
    ],
  },
  {
    name: "Appetizers",
    items: [
      { name: "Burnt Ends Basket", price: "$14", desc: "Caramelized brisket burnt ends tossed in BBQ glaze" },
      { name: "Smoked Wings (6 pc)", price: "$14", desc: "Smoked then fried wings with your choice of sauce" },
      { name: "Nachos", price: "$12", desc: "Loaded with pulled pork, queso, jalapeños, and pico de gallo" },
      { name: "BBQ Sampler Board", price: "$24", desc: "A taste of everything — brisket, ribs, sausage, and two sides" },
    ],
  },
  {
    name: "Desserts",
    items: [
      { name: "Peach Cobbler", price: "$7", desc: "Warm peach cobbler with a scoop of vanilla ice cream" },
      { name: "Banana Pudding", price: "$6", desc: "Homemade layered banana pudding with vanilla wafers" },
      { name: "Pecan Pie", price: "$7", desc: "Classic Texas pecan pie, served warm" },
    ],
  },
  {
    name: "Drinks",
    items: [
      { name: "Sweet Tea", price: "$4", desc: "House-brewed Southern sweet tea" },
      { name: "Lemonade", price: "$4", desc: "Fresh-squeezed lemonade" },
      { name: "Draft Beer", price: "$6", desc: "Ask your server for today's selection" },
      { name: "Lone Star Beer", price: "$5", desc: "The national beer of Texas" },
      { name: "Soft Drinks", price: "$3", desc: "Coke, Diet Coke, Sprite, Dr Pepper" },
    ],
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Smoked Meats");
  const [navOpen, setNavOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", time: "", guests: "", room: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-stone-950 text-stone-100 min-h-screen">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-stone-950/95 backdrop-blur border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <span className="text-xl font-bold text-amber-500 tracking-tight">TEXAS BBQ</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#menu" className="text-stone-300 hover:text-amber-500 transition-colors">Menu</a>
            <a href="#reservations" className="text-stone-300 hover:text-amber-500 transition-colors">Reservations</a>
            <a href="#about" className="text-stone-300 hover:text-amber-500 transition-colors">About</a>
            <a href="#contact" className="text-stone-300 hover:text-amber-500 transition-colors">Contact</a>
            <a href="#reservations" className="bg-amber-500 text-stone-950 px-4 py-2 rounded font-bold hover:bg-amber-400 transition-colors">Book a Table</a>
          </div>
          <button className="md:hidden text-stone-300" onClick={() => setNavOpen(!navOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {navOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {navOpen && (
          <div className="md:hidden bg-stone-900 border-t border-stone-800 px-6 py-4 flex flex-col gap-4 text-sm font-medium">
            {["#menu", "#reservations", "#about", "#contact"].map((href) => (
              <a key={href} href={href} onClick={() => setNavOpen(false)} className="text-stone-300 hover:text-amber-500 transition-colors capitalize">{href.slice(1)}</a>
            ))}
            <a href="#reservations" onClick={() => setNavOpen(false)} className="bg-amber-500 text-stone-950 px-4 py-2 rounded font-bold text-center hover:bg-amber-400 transition-colors">Book a Table</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900/80 to-stone-950 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=1600&q=80')" }}
        />
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <p className="text-amber-500 font-semibold tracking-widest uppercase text-sm mb-4">Est. 1987 · Austin, Texas</p>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Real Texas BBQ.<br />
            <span className="text-amber-500">Slow. Smoked. Perfect.</span>
          </h1>
          <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto">
            Award-winning pit-smoked meats cooked low and slow the way they were meant to be. No shortcuts. No gas. Just wood, fire, and time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#menu" className="bg-amber-500 text-stone-950 px-8 py-4 rounded font-bold text-lg hover:bg-amber-400 transition-colors">View Our Menu</a>
            <a href="#reservations" className="border-2 border-amber-500 text-amber-500 px-8 py-4 rounded font-bold text-lg hover:bg-amber-500 hover:text-stone-950 transition-colors">Reserve a Room</a>
          </div>
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-stone-400 text-sm">
            <div className="flex flex-col items-center gap-1"><span className="text-3xl font-black text-amber-500">35+</span>Years Smokin&apos;</div>
            <div className="flex flex-col items-center gap-1"><span className="text-3xl font-black text-amber-500">14hr</span>Slow Smoked</div>
            <div className="flex flex-col items-center gap-1"><span className="text-3xl font-black text-amber-500">100%</span>Oak &amp; Mesquite</div>
            <div className="flex flex-col items-center gap-1"><span className="text-3xl font-black text-amber-500">⭐ 4.9</span>Google Rating</div>
          </div>
        </div>
        <div className="absolute bottom-8 z-20 animate-bounce left-1/2 -translate-x-1/2">
          <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ANNOUNCEMENT BAR */}
      <div className="bg-amber-500 text-stone-950 text-center py-3 px-6 text-sm font-semibold">
        🔥 Happy Hour Mon–Fri 3–6PM · Half-price appetizers &amp; $4 draft beers · <a href="#reservations" className="underline">Reserve your spot</a>
      </div>

      {/* MENU */}
      <section id="menu" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-amber-500 tracking-widest uppercase text-sm font-semibold mb-2">What We&apos;re Serving</p>
          <h2 className="text-4xl md:text-5xl font-black mb-4">Our Menu</h2>
          <p className="text-stone-400 max-w-xl mx-auto">Everything is made fresh daily. We sell out — come early or call ahead.</p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {menuCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === cat.name
                  ? "bg-amber-500 text-stone-950"
                  : "bg-stone-800 text-stone-300 hover:bg-stone-700"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        {menuCategories.filter((c) => c.name === activeCategory).map((cat) => (
          <div key={cat.name} className="grid md:grid-cols-2 gap-4">
            {cat.items.map((item) => (
              <div key={item.name} className="flex justify-between items-start bg-stone-900 border border-stone-800 rounded-xl p-5 hover:border-amber-500/50 transition-colors">
                <div className="flex-1 pr-4">
                  <h3 className="font-bold text-stone-100 mb-1">{item.name}</h3>
                  <p className="text-stone-400 text-sm">{item.desc}</p>
                </div>
                <span className="text-amber-500 font-black text-lg whitespace-nowrap">{item.price}</span>
              </div>
            ))}
          </div>
        ))}
        <p className="text-center text-stone-500 text-sm mt-8">Menu items subject to availability. Prices exclude tax. Ask about our daily specials.</p>
      </section>

      {/* RESERVATIONS */}
      <section id="reservations" className="py-24 px-6 bg-stone-900">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-amber-500 tracking-widest uppercase text-sm font-semibold mb-2">Book Your Experience</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Reserve a Room</h2>
            <p className="text-stone-400">We offer private dining rooms for groups and events. Fill out the form and we&apos;ll confirm within 24 hours.</p>
          </div>
          {submitted ? (
            <div className="bg-stone-800 border border-amber-500/50 rounded-2xl p-12 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-black mb-2 text-amber-500">Reservation Request Sent!</h3>
              <p className="text-stone-400">Thanks, <strong className="text-stone-100">{form.name}</strong>! We&apos;ll reach out to <strong className="text-stone-100">{form.email}</strong> within 24 hours to confirm your reservation.</p>
              <button onClick={() => setSubmitted(false)} className="mt-6 text-amber-500 underline text-sm">Make another reservation</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-stone-800 border border-stone-700 rounded-2xl p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-stone-300 mb-3">Select a Room</label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    { id: "smokehouse", label: "The Smokehouse", desc: "Up to 20 guests", emoji: "🍖" },
                    { id: "pitmaster", label: "Pitmaster Suite", desc: "Up to 50 guests", emoji: "🔥" },
                    { id: "lone-star", label: "Lone Star Hall", desc: "Up to 120 guests", emoji: "⭐" },
                  ].map((room) => (
                    <button
                      key={room.id}
                      type="button"
                      onClick={() => setForm({ ...form, room: room.id })}
                      className={`p-4 rounded-xl border-2 text-left transition-colors ${
                        form.room === room.id ? "border-amber-500 bg-amber-500/10" : "border-stone-600 hover:border-stone-500"
                      }`}
                    >
                      <div className="text-2xl mb-1">{room.emoji}</div>
                      <div className="font-bold text-sm">{room.label}</div>
                      <div className="text-stone-400 text-xs">{room.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-stone-300 mb-1">Full Name *</label>
                  <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full bg-stone-700 border border-stone-600 rounded-lg px-4 py-3 text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-300 mb-1">Email Address *</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@email.com"
                    className="w-full bg-stone-700 border border-stone-600 rounded-lg px-4 py-3 text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-300 mb-1">Phone Number *</label>
                  <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="(512) 555-0100"
                    className="w-full bg-stone-700 border border-stone-600 rounded-lg px-4 py-3 text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-300 mb-1">Number of Guests *</label>
                  <select required value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full bg-stone-700 border border-stone-600 rounded-lg px-4 py-3 text-stone-100 focus:outline-none focus:border-amber-500 transition-colors">
                    <option value="">Select...</option>
                    {["1–5", "6–10", "11–20", "21–50", "51–120"].map((g) => <option key={g} value={g}>{g} guests</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-300 mb-1">Date *</label>
                  <input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full bg-stone-700 border border-stone-600 rounded-lg px-4 py-3 text-stone-100 focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-300 mb-1">Preferred Time *</label>
                  <select required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full bg-stone-700 border border-stone-600 rounded-lg px-4 py-3 text-stone-100 focus:outline-none focus:border-amber-500 transition-colors">
                    <option value="">Select...</option>
                    {["11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM"].map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-stone-300 mb-1">Special Requests / Notes</label>
                <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  rows={3} placeholder="Allergies, decorations, occasion details..."
                  className="w-full bg-stone-700 border border-stone-600 rounded-lg px-4 py-3 text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full bg-amber-500 text-stone-950 py-4 rounded-lg font-black text-lg hover:bg-amber-400 transition-colors">
                Request Reservation
              </button>
              <p className="text-stone-500 text-xs text-center">We&apos;ll confirm your reservation by email within 24 hours. A deposit may be required for large parties.</p>
            </form>
          )}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber-500 tracking-widest uppercase text-sm font-semibold mb-2">Our Story</p>
            <h2 className="text-4xl md:text-5xl font-black mb-6">Born in Texas.<br />Built on Smoke.</h2>
            <p className="text-stone-400 mb-4 leading-relaxed">
              Texas BBQ started in 1987 when Bobby Ray Moore drove a rusted-out smoker from his ranch outside Lockhart into downtown Austin. He had one recipe, one belief: low and slow is the only way.
            </p>
            <p className="text-stone-400 mb-4 leading-relaxed">
              Over 35 years later, nothing has changed. We still fire our pits at 4am every morning. We still only use post oak and mesquite. We still make every sauce, every rub, and every side from scratch.
            </p>
            <p className="text-stone-400 mb-8 leading-relaxed">
              We&apos;ve been named Austin&apos;s #1 BBQ joint by Texas Monthly, Thrillist, and Eater. But honestly, we just care that you leave full and happy.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-stone-800 rounded-xl p-4 text-center min-w-[100px]">
                <div className="text-2xl font-black text-amber-500">2x</div>
                <div className="text-xs text-stone-400">Texas Monthly<br />Best BBQ</div>
              </div>
              <div className="bg-stone-800 rounded-xl p-4 text-center min-w-[100px]">
                <div className="text-2xl font-black text-amber-500">#1</div>
                <div className="text-xs text-stone-400">Eater Austin<br />2023</div>
              </div>
              <div className="bg-stone-800 rounded-xl p-4 text-center min-w-[100px]">
                <div className="text-2xl font-black text-amber-500">4.9★</div>
                <div className="text-xs text-stone-400">Google<br />6,200+ reviews</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80"
              alt="BBQ Pitmaster"
              className="rounded-2xl w-full object-cover h-96 md:h-[500px]"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-500 text-stone-950 rounded-xl p-4 font-black shadow-xl">
              <div className="text-3xl">35+</div>
              <div className="text-sm">Years of BBQ</div>
            </div>
          </div>
        </div>
      </section>

      {/* HOURS & CONTACT */}
      <section id="contact" className="py-24 px-6 bg-stone-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-500 tracking-widest uppercase text-sm font-semibold mb-2">Find Us</p>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Hours &amp; Location</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-stone-800 rounded-2xl p-8 border border-stone-700">
              <div className="text-3xl mb-4">🕐</div>
              <h3 className="font-black text-lg mb-4">Hours</h3>
              <div className="space-y-2 text-sm text-stone-400">
                <div className="flex justify-between"><span>Mon – Thu</span><span className="text-stone-200">11am – 9pm</span></div>
                <div className="flex justify-between"><span>Fri – Sat</span><span className="text-stone-200">11am – 10pm</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="text-stone-200">12pm – 8pm</span></div>
              </div>
              <p className="text-amber-500 text-xs mt-4">* Kitchen closes 30 min early. We often sell out — come before 7pm!</p>
            </div>
            <div className="bg-stone-800 rounded-2xl p-8 border border-stone-700">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="font-black text-lg mb-4">Location</h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                2420 South Lamar Blvd<br />
                Austin, TX 78704<br /><br />
                Ample parking behind the building.<br />
                Bus: Route 1 (South Lamar stop)
              </p>
            </div>
            <div className="bg-stone-800 rounded-2xl p-8 border border-stone-700">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-black text-lg mb-4">Get In Touch</h3>
              <div className="space-y-3 text-sm text-stone-400">
                <div><span className="text-stone-200 font-semibold">Phone:</span><br />(512) 555-0187</div>
                <div><span className="text-stone-200 font-semibold">Email:</span><br />info@texasbbq.com</div>
                <div><span className="text-stone-200 font-semibold">Private Events:</span><br />events@texasbbq.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-950 border-t border-stone-800 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <span className="text-xl font-bold text-amber-500">TEXAS BBQ</span>
          </div>
          <div className="flex gap-6 text-sm text-stone-500">
            <a href="#menu" className="hover:text-amber-500 transition-colors">Menu</a>
            <a href="#reservations" className="hover:text-amber-500 transition-colors">Reservations</a>
            <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a>
          </div>
          <p className="text-stone-600 text-sm">© 2024 Texas BBQ. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
