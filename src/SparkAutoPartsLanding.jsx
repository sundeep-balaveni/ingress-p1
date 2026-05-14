import { useState } from "react";

const NAV_LINKS = ["Home","About","Contact","Shop by Brands","Flash Deals","Store","Trainer FAQs"];

const SIDEBAR_CATS = [
  "Exterior","Interior","Performance","Lighting",
  "Wheels & Tires","Audio & Electronics","Raptor Parts",
  "Body Parts","Tools & Garage","Specialty Shop","Today's Deals"
];

const HERO_CATS = [
  { name:"Headlights",    img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&q=80" },
  { name:"Brakes",        img:"https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=120&q=80" },
  { name:"Seat Covers",   img:"https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=120&q=80" },
  { name:"Body Parts",    img:"https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=120&q=80" },
  { name:"Custom Wheels", img:"https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=120&q=80" },
];

const NEW_PRODUCTS = [
  { id:1, name:"Carbon Fiber Hood",   badge:"New",          img:"https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=300&q=80", price:"$800 – $1,329", oldPrice:null },
  { id:2, name:"Cold Air Intake",     badge:"Sale",         img:"https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=300&q=80", price:"$509.00", oldPrice:"$649.00" },
  { id:3, name:"Performance Exhaust", badge:"Custom Label", img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80", price:"$309.00", oldPrice:null },
  { id:4, name:"Forged Alloy Wheel",  badge:"Custom Label", img:"https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=300&q=80", price:"$409 – $919", oldPrice:null },
  { id:5, name:"Stainless Manifold",  badge:"New",          img:"https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&q=80", price:"$1,200.00", oldPrice:null },
  { id:6, name:"Sport Brake Rotor",   badge:null,           img:"https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=300&q=80", price:"$400.00", oldPrice:null },
];

const FEATURED = [
  { id:1, name:"High-Perf Clutch",   img:"https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=300&q=80", price:"$750.00",           oldPrice:"$850.00", badge:null },
  { id:2, name:"Full Synthetic Oil",  img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80", price:"$29.50",            oldPrice:"$39.00",  badge:null },
  { id:3, name:"Short Ram Intake",   img:"https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=300&q=80", price:"$249.00",           oldPrice:"$299.00", badge:"New" },
  { id:4, name:"Cat-Back Exhaust",   img:"https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300&q=80", price:"$1,200.00",         oldPrice:null,      badge:"Custom Label" },
  { id:5, name:"Racing Brake Kit",   img:"https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=300&q=80", price:"$3,600 – $5,400",  oldPrice:"$4,000",  badge:"Custom Label" },
];

const SPECIAL_OFFERS = [
  { name:"Drilled Sport Rotor",  img:"https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=200&q=80", price:"$421.61", oldPrice:"$921.69", badge:null,           sizes:["S","M","XS","2XL"] },
  { name:"7-Spoke Alloy Wheel",  img:"https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=200&q=80", price:"$400.00", oldPrice:"$600.00", badge:"Custom Label",  sizes:["225","235","255","285"] },
];

const BADGE_COLORS = {
  "New":          "#c8102e",
  "Sale":         "#e65c00",
  "Custom Label": "#1565C0",
};

const S = {
  root: { fontFamily:"'Inter',system-ui,sans-serif", background:"#ebebeb", color:"#1a1a1a", fontSize:13 },

  // topbar
  topbar: { background:"#111", color:"#999", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"5px 16px", gap:12 },
  logo:   { fontFamily:"'Segoe UI',sans-serif", fontWeight:800, fontSize:22, letterSpacing:3, color:"#fff" },
  affirmBadge: { display:"flex", alignItems:"center", gap:5, background:"#1c1c1c", padding:"3px 10px", borderRadius:3, fontSize:10, border:"1px solid #2a2a2a" },
  searchBar: { display:"flex", flex:1, maxWidth:440, margin:"0 20px" },
  searchSelect: { background:"#222", border:"1px solid #333", borderRight:"none", color:"#aaa", fontSize:10, padding:"0 8px", borderRadius:"3px 0 0 3px", outline:"none", cursor:"pointer" },
  searchInput: { flex:1, background:"#fff", border:"none", padding:"5px 10px", fontSize:12, outline:"none" },
  searchBtn: { background:"#c8102e", border:"none", color:"#fff", padding:"0 14px", fontSize:13, borderRadius:"0 3px 3px 0", cursor:"pointer" },
  topIcons: { display:"flex", gap:18, alignItems:"center" },
  iconBtn:  { display:"flex", flexDirection:"column", alignItems:"center", cursor:"pointer", position:"relative", gap:2 },

  // nav
  nav: { background:"#fff", borderBottom:"2px solid #e5e5e5", display:"flex", padding:"0 16px" },
  navLink: (active) => ({ padding:"11px 13px", fontSize:12, fontWeight:500, color: active ? "#c8102e" : "#555", borderBottom: active ? "2px solid #c8102e" : "2px solid transparent", marginBottom:-2, cursor:"pointer", transition:"all .15s", whiteSpace:"nowrap", textDecoration:"none" }),

  // sidebar
  sidebar: { width:162, minWidth:162, background:"#fff", borderRight:"1px solid #e5e5e5" },
  sidebarHead: { padding:"9px 14px", fontSize:10, fontWeight:700, color:"#999", textTransform:"uppercase", letterSpacing:.8, borderBottom:"1px solid #eee", background:"#fafafa" },
  sidebarItem: (active) => ({ display:"flex", alignItems:"center", padding:"8px 14px", fontSize:12, color: active ? "#c8102e" : "#444", background: active ? "#fff5f5" : "transparent", borderLeft: active ? "3px solid #c8102e" : "3px solid transparent", cursor:"pointer", transition:"all .15s", fontWeight: active ? 600 : 400 }),

  // hero
  heroBanner: { position:"relative", overflow:"hidden", background:"linear-gradient(120deg,#040404 0%,#0d111c 60%,#1a2340 100%)", minHeight:232 },
  heroImg: { position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", opacity:.35 },
  heroOverlay: { position:"absolute", inset:0, background:"linear-gradient(90deg,rgba(4,4,4,.93) 0%,rgba(4,4,4,.5) 55%,rgba(4,4,4,.05) 100%)" },
  heroContent: { position:"relative", zIndex:2, padding:"36px 30px", maxWidth:340 },
  heroTag: { display:"inline-block", background:"#c8102e", color:"#fff", fontSize:9, fontWeight:700, letterSpacing:1.5, textTransform:"uppercase", padding:"3px 8px", borderRadius:2, marginBottom:10 },
  heroTitle: { fontSize:30, fontWeight:800, color:"#fff", lineHeight:1.1, marginBottom:10, letterSpacing:.3 },
  heroSub: { fontSize:11, color:"#aaa", lineHeight:1.65, marginBottom:18, maxWidth:270 },
  heroCta: { display:"inline-block", background:"#c8102e", color:"#fff", padding:"9px 22px", fontSize:11, fontWeight:700, letterSpacing:1.5, textTransform:"uppercase", border:"none", borderRadius:3, cursor:"pointer" },

  // cat bar
  catBar: { background:"#fff", borderTop:"1px solid #eee", borderBottom:"1px solid #eee", display:"flex" },
  catItem: { flex:1, display:"flex", flexDirection:"column", alignItems:"center", padding:"11px 6px", cursor:"pointer", borderRight:"1px solid #eee", borderBottom:"2px solid transparent", gap:5, transition:"all .15s" },
  catImg: { width:50, height:50, borderRadius:"50%", objectFit:"cover", border:"2px solid #eee" },
  catName: { fontSize:10, fontWeight:600, color:"#333", textAlign:"center" },
  catSub: { fontSize:8, color:"#bbb", textAlign:"center" },

  // special offers
  offersPanel: { width:194, minWidth:194, background:"#fff", borderLeft:"1px solid #e5e5e5", maxHeight:365, overflowY:"auto" },
  sectionHead: { padding:"10px 12px", fontSize:12, fontWeight:700, color:"#1a1a1a", borderBottom:"2px solid #c8102e", display:"flex", justifyContent:"space-between", alignItems:"center", background:"#fafafa", position:"sticky", top:0, zIndex:2 },
  viewMore: { fontSize:10, color:"#c8102e", fontWeight:600, cursor:"pointer" },
  offerCard: { padding:"12px", borderBottom:"1px solid #f0f0f0", cursor:"pointer" },
  offerImg: { width:"100%", height:78, objectFit:"contain", borderRadius:4, marginBottom:7, background:"#f8f8f8" },

  // product cards
  prodCard: { background:"#fff", borderRadius:5, padding:10, flex:1, minWidth:0, position:"relative", cursor:"pointer", border:"1px solid #e8e8e8" },
  prodImg: { width:"100%", height:72, objectFit:"contain", borderRadius:3, marginBottom:7, background:"#f8f8f8" },
  prodBadge: (color) => ({ position:"absolute", top:7, left:7, fontSize:8, fontWeight:700, padding:"2px 6px", borderRadius:2, textTransform:"uppercase", letterSpacing:.4, background:color, color:"#fff" }),
  prodName: { fontSize:10, fontWeight:700, color:"#1a1a1a", marginBottom:3, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" },
  prodPrice: { fontSize:10, fontWeight:700, color:"#c8102e", marginTop:2 },
  prodOld: { fontSize:8, color:"#bbb", textDecoration:"line-through" },

  // carousel
  carouselBtn: { position:"absolute", top:"50%", transform:"translateY(-50%)", background:"#fff", border:"1px solid #ddd", width:26, height:26, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:15, color:"#555", zIndex:3, cursor:"pointer", boxShadow:"0 2px 6px rgba(0,0,0,.1)" },

  // vehicle panel
  vehiclePanel: { width:194, minWidth:194, background:"#fff", borderLeft:"1px solid #e5e5e5", padding:15 },
  vSelect: { width:"100%", padding:"8px 10px", border:"1px solid #ddd", borderRadius:3, fontSize:11, color:"#555", background:"#fff", outline:"none", cursor:"pointer", marginBottom:9, appearance:"none" },
  chooseBtn: { width:"100%", background:"#c8102e", color:"#fff", border:"none", padding:10, fontWeight:700, fontSize:12, letterSpacing:1, textTransform:"uppercase", borderRadius:3, marginBottom:9, cursor:"pointer" },
  resetBtn:  { width:"100%", background:"#fff", color:"#666", border:"1px solid #ddd", padding:8, fontSize:11, borderRadius:3, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:5 },

  footer: { background:"#111", color:"#555", fontSize:10, textAlign:"center", padding:"10px 0", letterSpacing:.3, marginTop:4 },
};

function Stars({ n = 4 }) {
  return (
    <div style={{ display:"flex", gap:1 }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ fontSize:9, color: i<=n ? "#f0a500" : "#ddd" }}>★</span>
      ))}
    </div>
  );
}

function ProdBadge({ label }) {
  if (!label) return null;
  return <span style={S.prodBadge(BADGE_COLORS[label] || "#555")}>{label}</span>;
}

function ProductCard({ p }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      style={{ ...S.prodCard, boxShadow: hov ? "0 4px 16px rgba(0,0,0,.12)" : "none", transform: hov ? "translateY(-2px)" : "none", transition:"all .2s" }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <ProdBadge label={p.badge} />
      <img style={S.prodImg} src={p.img} alt={p.name} loading="lazy" />
      <div style={S.prodName}>{p.name}</div>
      <Stars />
      {p.oldPrice && <div style={S.prodOld}>{p.oldPrice}</div>}
      <div style={S.prodPrice}>{p.price}</div>
      {hov && (
        <button style={{ position:"absolute", bottom:8, right:8, background:"#c8102e", color:"#fff", border:"none", fontSize:8, fontWeight:700, padding:"3px 7px", borderRadius:2, letterSpacing:.4, cursor:"pointer", textTransform:"uppercase" }}>
          + Cart
        </button>
      )}
    </div>
  );
}

export default function SparkLanding() {
  const [activeCat, setActiveCat] = useState("Performance");
  const [activeNav, setActiveNav] = useState("Home");
  const [idx, setIdx] = useState(0);

  const visible = NEW_PRODUCTS.slice(idx, idx + 5);

  return (
    <div style={S.root}>

      {/* TOP BAR */}
      <div style={S.topbar}>
        <div style={{ display:"flex", alignItems:"center", gap:12 }}>
          <span style={S.logo}>SPARK</span>
          <div style={S.affirmBadge}>
            <span style={{ color:"#00c2e0", fontWeight:700, fontSize:11 }}>affirm</span>
            <span>Buy Now, Pay Later.</span>
            <span style={{ color:"#00c2e0", cursor:"pointer", fontSize:10 }}>Learn More</span>
          </div>
        </div>

        <div style={S.searchBar}>
          <select style={S.searchSelect}>
            <option>All Categories</option>
            {SIDEBAR_CATS.map(c => <option key={c}>{c}</option>)}
          </select>
          <input style={S.searchInput} placeholder="Search for a product…" />
          <button style={S.searchBtn}>🔍</button>
        </div>

        <div style={S.topIcons}>
          {[["👤","Sign In",0],["❤️","Wish List",2],["🛒","My Cart",3]].map(([ic,lbl,cnt],i) => (
            <div key={i} style={S.iconBtn}>
              <span style={{ fontSize:17 }}>{ic}</span>
              {cnt > 0 && <span style={{ position:"absolute", top:-3, right:-6, background:"#c8102e", color:"#fff", borderRadius:"50%", fontSize:8, width:14, height:14, display:"flex", alignItems:"center", justifyContent:"center", fontWeight:700 }}>{cnt}</span>}
              <span style={{ fontSize:9, color:"#777" }}>{lbl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN NAV */}
      <nav style={S.nav}>
        {NAV_LINKS.map(l => (
          <a key={l} href="#" style={S.navLink(activeNav===l)} onClick={e => { e.preventDefault(); setActiveNav(l); }}>{l}</a>
        ))}
      </nav>

      {/* PAGE BODY */}
      <div style={{ display:"flex", minHeight:"calc(100vh - 80px)" }}>

        {/* SIDEBAR */}
        <div style={S.sidebar}>
          <div style={S.sidebarHead}>Shop All Categories</div>
          {SIDEBAR_CATS.map(c => (
            <div key={c} style={S.sidebarItem(activeCat===c)} onClick={() => setActiveCat(c)}>{c}</div>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div style={{ flex:1, overflow:"hidden" }}>

          {/* ── HERO ROW ── */}
          <div style={{ display:"flex" }}>
            <div style={{ flex:1 }}>
              {/* Hero Banner */}
              <div style={S.heroBanner}>
                <img style={S.heroImg} src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=80" alt="hero" />
                <div style={S.heroOverlay} />
                <div style={S.heroContent}>
                  <span style={S.heroTag}>Limited Edition</span>
                  <h1 style={S.heroTitle}>Milancelos<br />Cosmo</h1>
                  <p style={S.heroSub}>Upgrade your ride with precision-engineered performance parts — designed for speed, built to last.</p>
                  <button style={S.heroCta}>Shop Now →</button>
                </div>
              </div>

              {/* Category Icon Bar */}
              <div style={S.catBar}>
                {HERO_CATS.map((c, i) => (
                  <div key={c.name} style={{ ...S.catItem, borderRight: i < HERO_CATS.length-1 ? "1px solid #eee" : "none" }}>
                    <img style={S.catImg} src={c.img} alt={c.name} loading="lazy" />
                    <span style={S.catName}>{c.name}</span>
                    <span style={S.catSub}>Browse collection</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Offers Panel */}
            <div style={S.offersPanel}>
              <div style={S.sectionHead}>
                Special Offers
                <span style={S.viewMore}>View All</span>
              </div>
              {SPECIAL_OFFERS.map((item, i) => (
                <div key={i} style={S.offerCard}>
                  {item.badge && (
                    <span style={{ background: BADGE_COLORS[item.badge], color:"#fff", fontSize:8, padding:"2px 5px", borderRadius:2, fontWeight:700, display:"inline-block", marginBottom:5, textTransform:"uppercase", letterSpacing:.4 }}>{item.badge}</span>
                  )}
                  <img style={S.offerImg} src={item.img} alt={item.name} loading="lazy" />
                  <div style={{ fontSize:11, fontWeight:700, marginBottom:3 }}>{item.name}</div>
                  <div style={{ fontSize:9, color:"#888", marginBottom:6, lineHeight:1.4 }}>High-performance OEM-spec replacement with premium grade material and finish.</div>
                  <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:5 }}>
                    <span style={{ fontSize:9, textDecoration:"line-through", color:"#bbb" }}>{item.oldPrice}</span>
                    <span style={{ fontSize:13, fontWeight:700, color:"#c8102e" }}>{item.price}</span>
                  </div>
                  <Stars />
                  <div style={{ display:"flex", flexWrap:"wrap", gap:3, marginTop:6 }}>
                    {item.sizes.map(s => (
                      <span key={s} style={{ border:"1px solid #ddd", fontSize:8, padding:"2px 5px", borderRadius:2, cursor:"pointer", color:"#555" }}>{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── NEW PRODUCTS + PRE ORDER ── */}
          <div style={{ display:"flex", background:"#ebebeb", paddingTop:2 }}>

            <div style={{ flex:1, padding:"15px 18px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
                <span style={{ fontSize:14, fontWeight:700, color:"#1a1a1a", borderLeft:"3px solid #c8102e", paddingLeft:10 }}>New Products</span>
                <span style={S.viewMore}>View More →</span>
              </div>
              <div style={{ position:"relative" }}>
                <button style={{ ...S.carouselBtn, left:-13 }} onClick={() => setIdx(Math.max(0, idx-1))}>‹</button>
                <div style={{ display:"flex", gap:10, overflow:"hidden" }}>
                  {visible.map(p => <ProductCard key={p.id} p={p} />)}
                </div>
                <button style={{ ...S.carouselBtn, right:-13 }} onClick={() => setIdx(Math.min(NEW_PRODUCTS.length-5, idx+1))}>›</button>
              </div>
            </div>

            {/* Pre Order */}
            <div style={{ width:194, minWidth:194, background:"#fff", borderLeft:"1px solid #e5e5e5", padding:14 }}>
              <div style={{ ...S.sectionHead, margin:"-14px -14px 0" }}>Pre Order</div>
              {([{ name:"Forged Split-Spoke Rim", img:"https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=300&q=80", price:"$250 – $400" }]).map((p,i) => (
                <div key={i} style={{ textAlign:"center", marginTop:12 }}>
                  <img style={{ width:"100%", height:100, objectFit:"contain", borderRadius:4, background:"#f8f8f8", marginBottom:8 }} src={p.img} alt={p.name} loading="lazy" />
                  <div style={{ fontSize:11, fontWeight:700, marginBottom:3 }}>{p.name}</div>
                  <div style={{ fontSize:9, color:"#888", marginBottom:6, lineHeight:1.4 }}>OEM-grade forged aluminum. Available for pre-order now.</div>
                  <div style={{ fontSize:13, fontWeight:700, color:"#c8102e" }}>{p.price}</div>
                  <button style={{ width:"100%", marginTop:10, background:"#1a1a1a", color:"#fff", border:"none", padding:"8px", fontSize:10, fontWeight:700, letterSpacing:1, borderRadius:3, cursor:"pointer", textTransform:"uppercase" }}>Pre Order Now</button>
                </div>
              ))}
              <div style={{ display:"flex", justifyContent:"center", gap:5, marginTop:14 }}>
                {[0,1,2].map(i => <div key={i} style={{ width:7, height:7, borderRadius:"50%", background: i===0 ? "#c8102e" : "#ddd" }} />)}
              </div>
            </div>
          </div>

          {/* ── FEATURED PRODUCTS + VEHICLE ── */}
          <div style={{ display:"flex", background:"#ebebeb", paddingTop:4 }}>

            <div style={{ flex:1, padding:"15px 18px" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
                <span style={{ fontSize:14, fontWeight:700, color:"#1a1a1a", borderLeft:"3px solid #c8102e", paddingLeft:10 }}>Featured Products</span>
                <span style={S.viewMore}>View More →</span>
              </div>
              <div style={{ display:"flex", gap:10 }}>
                {FEATURED.map(p => <ProductCard key={p.id} p={p} />)}
              </div>
            </div>

            {/* Vehicle Selector */}
            <div style={S.vehiclePanel}>
              <div style={{ fontSize:14, fontWeight:700, marginBottom:4 }}>Select Your Vehicle</div>
              <div style={{ fontSize:10, color:"#888", marginBottom:14, lineHeight:1.4 }}>Find parts that fit your exact make, model, and year.</div>

              {[["Year","2024","2023","2022","2021"],["Make","Ford","Chevrolet","Toyota","BMW"],["Model","Mustang","Camaro","Supra","M3"]].map(([lbl,...opts]) => (
                <select key={lbl} style={S.vSelect}>
                  <option value="">Select {lbl}…</option>
                  {opts.map(o => <option key={o}>{o}</option>)}
                </select>
              ))}

              <button style={S.chooseBtn}>Find Parts</button>
              <button style={S.resetBtn}>↺ Reset Selection</button>

              {/* Trust badges */}
              <div style={{ marginTop:14, borderTop:"1px solid #f0f0f0", paddingTop:12, display:"flex", flexDirection:"column", gap:7 }}>
                {[["🚚","Free shipping over $99"],["🔒","Secure checkout"],["↩️","30-day returns"],["✅","Verified OEM parts"]].map(([ic,txt]) => (
                  <div key={txt} style={{ display:"flex", alignItems:"center", gap:6, fontSize:9, color:"#666" }}>
                    <span style={{ fontSize:12 }}>{ic}</span>{txt}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div style={S.footer}>
        © 2024 <strong style={{ color:"#888" }}>SPARK Performance Parts.</strong>&nbsp; All rights reserved. &nbsp;|&nbsp; Privacy Policy &nbsp;|&nbsp; Terms of Service
      </div>
    </div>
  );
}
