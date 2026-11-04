const topo=require('topojson-client'),w=require('world-atlas/countries-110m.json');
const fc=topo.feature(w,w.objects.countries);
const W=2048,LATT=84,LATB=-57,H=Math.round(W*(LATT-LATB)/360);
const px=lon=>Math.round((lon+180)/360*W),py=lat=>Math.round((LATT-lat)/(LATT-LATB)*H);
const out=[];
for(const f of fc.features){ if(f.id==='010')continue; const g=f.geometry; if(!g)continue;
  const polys=g.type==='Polygon'?[g.coordinates]:g.coordinates; const rings=[];
  for(const poly of polys)for(const ring0 of poly){ let off=0,prev=null;const un=ring0.map(([lo,la])=>{if(prev!==null){if(lo+off-prev>180)off-=360;else if(lo+off-prev<-180)off+=360;}prev=lo+off;return [lo+off,la];});const mx=Math.max(...un.map(p=>p[0])),mn=Math.min(...un.map(p=>p[0]));const copies=[0];if(mx>180)copies.push(-360);if(mn<-180)copies.push(360);for(const sh of copies){ let pts=[],last=''; for(const [lo0,la] of un){const lo=lo0+sh;const s=px(lo)+','+py(la); if(s!==last){pts.push(s);last=s;}} if(pts.length>2)rings.push(pts.join(' ')); }}
  out.push(rings.join('|')); }
require('fs').writeFileSync('map.txt',out.join(';'));
console.log(W,H,out.length,require('fs').statSync('map.txt').size);
