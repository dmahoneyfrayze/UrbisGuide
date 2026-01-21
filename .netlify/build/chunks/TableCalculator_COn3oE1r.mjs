import { d as createComponent, m as maybeRenderHead, o as renderScript, r as renderTemplate } from './astro/server_BnC5UhzS.mjs';
import 'piccolore';
import 'clsx';

const $$TableCalculator = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-[#1a1a1a] rounded-xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto border border-gray-800 text-white"> <div class="mb-12 text-center"> <h2 class="font-heading text-3xl md:text-4xl font-bold mb-4">
Live Edge Sizing Calculator
</h2> <p class="text-gray-400">
Find the perfect slab dimensions for your space and guest count.
</p> </div> <div class="grid md:grid-cols-2 gap-12"> <!-- Input Section --> <div class="space-y-8"> <!-- Guest Slider --> <div> <div class="flex justify-between items-center mb-4"> <label class="text-xs uppercase tracking-widest font-bold text-gray-500">Number of Guests</label> <span id="guest-count-display" class="text-xl font-bold text-primary">6 People</span> </div> <input type="range" id="guest-slider" min="4" max="12" step="2" value="6" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"> <div class="flex justify-between text-xs text-gray-600 mt-2"> <span>4</span> <span>6</span> <span>8</span> <span>10</span> <span>12+</span> </div> </div> <!-- Room Dimensions --> <div> <label class="text-xs uppercase tracking-widest font-bold text-gray-500 block mb-4">Room Dimensions (Feet)</label> <div class="grid grid-cols-2 gap-4"> <div> <label for="room-width" class="block text-xs text-gray-400 mb-2">Width</label> <input type="number" id="room-width" value="12" class="w-full bg-[#2a2a2a] border border-gray-700 rounded p-3 text-white focus:border-primary focus:outline-none transition-colors"> </div> <div> <label for="room-length" class="block text-xs text-gray-400 mb-2">Length</label> <input type="number" id="room-length" value="15" class="w-full bg-[#2a2a2a] border border-gray-700 rounded p-3 text-white focus:border-primary focus:outline-none transition-colors"> </div> </div> </div> </div> <!-- Results Section --> <div class="bg-[#2a2a2a] rounded-xl p-8 border border-gray-700 flex flex-col justify-between relative overflow-hidden"> <!-- Decor Icon --> <div class="absolute top-4 right-4 opacity-10 pointer-events-none"> <svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path> </svg> </div> <div> <p class="text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">
Recommended Slab
</p> <div id="recommendation-display" class="font-heading text-5xl font-bold text-white mb-2">
6' <span class="text-2xl text-gray-400 font-sans font-normal">x</span> 40"
</div> <p id="recommendation-text" class="text-sm text-gray-400 leading-relaxed mt-4">
Standard seating for 6 guests requires approx. 6 feet of
                    length. We recommend a width of at least 40 inches for
                    comfortable center-of-table serving.
</p> <!-- Fit Status --> <div id="fit-status" class="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 text-green-400 text-xs font-bold uppercase tracking-widest border border-green-900"> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg>
Fits Your Room
</div> </div> <div class="mt-8 pt-6 border-t border-gray-600"> <a href="https://urbisconcepts.com/collections/live-edge" class="block w-full bg-primary hover:bg-primary/90 text-white font-bold text-center py-4 rounded transition-colors uppercase tracking-widest text-sm">
Browse Recommended Slabs
</a> </div> </div> </div> <!-- Email Capture --> <div class="mt-12 pt-8 border-t border-gray-800"> <div class="flex flex-col md:flex-row items-center justify-between gap-6"> <div> <h3 class="font-heading font-bold text-xl mb-1">
Get the Complete Sizing Guide
</h3> <p class="text-sm text-gray-400">
Download our printable PDF with room layout templates.
</p> </div> <form id="email-form" class="flex w-full md:w-auto gap-2"> <input type="email" id="email-input" placeholder="Email Address" class="bg-[#2a2a2a] border border-gray-700 text-white px-4 py-3 rounded w-full md:w-64 focus:border-primary focus:outline-none" required> <button type="submit" id="submit-btn" class="bg-gray-100 text-secondary font-bold px-6 py-3 rounded hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
Send
</button> </form> <p id="form-message" class="hidden text-sm mt-2 font-bold"></p> </div> </div> </div> ${renderScript($$result, "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/components/TableCalculator.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/denismahoney/Desktop/Websites/Urbis-Guide/src/components/TableCalculator.astro", void 0);

export { $$TableCalculator as $ };
