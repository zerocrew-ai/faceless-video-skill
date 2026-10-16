// "Three reasons your houseplant is dying" — Opus run. Every `at` sits on its word in words.js.
// Frame maths at zoom 1: desk point (X, Y) of a station lands on frame (540, 820);
// frame x = 540 + (deskX - X), frame y = 820 + (deskY - Y). Safe area: frame x 70..930, y 220..1300.
window.FILM = {
  duration: 40.2,
  accent: "#ec5626",
  musicGain: -17,
  stations: [
    // HOOK — the plant is already there on frame 1
    { t: 0, x: 1000, y: 1100, zoom: 1.0, push: 1.05, items: [
      // desk dressing: real things lying around, seen on flights and in the overview
      { type: "image", src: "assets/props/d_mug.png", w: 300, x: 330, y: 250, at: -1, anim: "show", rot: 8 },
      { type: "image", src: "assets/props/d_clips.png", w: 200, x: 3250, y: 1700, at: -1, anim: "show", rot: -12 },
      { type: "image", src: "assets/props/d_tape.png", w: 260, x: 1850, y: 2050, at: -1, anim: "show" },
      { type: "image", src: "assets/props/d_glasses.png", w: 420, x: 1500, y: 3020, at: -1, anim: "show", rot: -20 },
      { type: "image", src: "assets/props/d_ruler.png", w: 560, x: 2700, y: 4150, at: -1, anim: "show", rot: 3 },
      { type: "image", src: "assets/props/pen.png", w: 440, x: 3450, y: 2350, at: -1, anim: "show", rot: 64 },
      { type: "image", src: "assets/props/d_eraser.png", w: 200, x: 330, y: 4350, at: -1, anim: "show", rot: 15 },
      { type: "image", src: "assets/props/d_binder.png", w: 220, x: 2500, y: 4900, at: -1, anim: "show", rot: -8 },
      { type: "cutout", src: "assets/img/dying_plant.png", w: 760, x: 620, y: 640, at: -0.3, rot: -2 },
      { type: "hand", text: "not you.", x: 1000, y: 1250, size: 104, rot: -7, at: 1.76 },
      { type: "text", text: "3 REASONS", x: 640, y: 520, size: 110, at: 4.16, rot: -1.5 },
      { type: "marker", kind: "underline", x: 630, y: 632, w: 720, h: 64, at: 4.48, rot: -1.5 },
    ] },

    // 01 — too much love
    { t: 5.45, flight: 0.75, x: 2800, y: 1050, zoom: 1.0, items: [
      { type: "card", wide: true, num: "01", title: "TOO MUCH\nLOVE", x: 2390, y: 470, at: 5.3, rot: -2 },
      { type: "cutout", src: "assets/img/watering_can.png", w: 470, x: 2340, y: 790, at: 6.32, rot: -6, anim: "slide", fx: -760, fy: 140 },
      { type: "print", src: "assets/img/finger_soil.png", w: 400, h: 330, x: 2790, y: 790, at: 10.64, rot: 3 },
      { type: "marker", kind: "ring2", x: 2905, y: 860, w: 190, h: 130, at: 12.64, rot: -8 },
      { type: "note", text: "dry →\nwater", color: "yellow", x: 2370, y: 1150, at: 13.84, rot: -5 },
      { type: "note", text: "damp →\nwait", color: "pink", x: 2660, y: 1170, at: 14.72, rot: 6 },
    ] },

    // 02 — the wrong window
    { t: 17.15, flight: 0.85, x: 2600, y: 3300, zoom: 1.0, items: [
      { type: "card", wide: true, num: "02", title: "THE WRONG\nWINDOW", x: 2190, y: 2720, at: 16.65, rot: 1.5 },
      { type: "print", src: "assets/img/north_window.png", w: 400, h: 600, x: 2160, y: 3040, caption: "north", at: 18.32, rot: -3 },
      { type: "marker", kind: "slash", x: 2160, y: 3230, w: 400, h: 130, at: 20.0, rot: -4 },
      { type: "print", src: "assets/img/south_window.png", w: 400, h: 600, x: 2580, y: 3025, caption: "south", at: 21.04, rot: 2.5 },
      { type: "cutout", src: "assets/img/healthy_plant.png", w: 300, x: 2621, y: 3148, at: 22.08, rot: 2, anim: "slide", fx: -440, fy: 20 },
      { type: "hand", text: "not the couch.", x: 2240, y: 3672, size: 72, rot: -4, at: 22.88 },
    ] },

    // 03 — the pot
    { t: 24.3, flight: 0.85, x: 1000, y: 3800, zoom: 1.0, items: [
      { type: "card", wide: true, num: "03", title: "THE POT", x: 590, y: 3220, at: 24.1, rot: -1.5 },
      { type: "cutout", src: "assets/img/pot_hole.png", w: 620, x: 560, y: 3550, at: 25.36 },
      { type: "marker", kind: "ring2", x: 754, y: 3712, w: 200, h: 150, at: 26.4, rot: -6 },
      { type: "print", src: "assets/img/root_rot.png", w: 400, h: 440, x: 990, y: 3620, caption: "root rot", at: 27.6, rot: 4 },
      { type: "label", text: "$3", x: 1180, y: 4110, at: 30.8, rot: -3 },
    ] },

    // close — the whole desk: every fix in one look
    { t: 32.4, flight: 0.9, x: 1900, y: 2750, zoom: 0.3, hop: 0.12, push: 1.06, items: [] },

    // CTA — the checklist, the stamp, Claude ticks it, the plane flies off
    { t: 35.0, flight: 0.9, x: 1900, y: 5600, zoom: 1.0, items: [
      { type: "page", title: "PLANT CHECKLIST", lines: ["[ ] dry 2 knuckles → water", "[ ] brightest window", "[ ] pot with a hole"], x: 1480, y: 5030, w: 840, h: 560, size: 40, lh: 70, at: 34.95, typeDur: 0.6 },
      { type: "stamp", text: "COMMENT\nPLANT", x: 1530, y: 5650, w: 740, h: 260, at: 35.76, rot: -6 },
      { type: "cutout", src: "assets/props/paper_plane.png", w: 300, x: 2020, y: 5900, at: 36.8, rot: -18, anim: "pop" },
      { type: "cursor", name: "Claude", path: [[36.95, 2360, 5480], [37.28, 1570, 5236], [37.53, 1570, 5306], [37.78, 1570, 5376], [38.6, 1760, 5500]], clicks: [37.3, 37.55, 37.8] },
      { type: "hand", text: "✓", x: 1548, y: 5196, size: 66, at: 37.32 },
      { type: "hand", text: "✓", x: 1548, y: 5266, size: 66, at: 37.57 },
      { type: "hand", text: "✓", x: 1548, y: 5336, size: 66, at: 37.82 },
    ] },
  ],
};
