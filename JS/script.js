// Coded by Maluli
const cursor=document.querySelector('.cursor');
let tx=innerWidth/2,ty=innerHeight/2,x=tx,y=ty;
addEventListener('pointermove',e=>{
  tx=e.clientX;
  ty=e.clientY
}

);
document.querySelectorAll('a').forEach(a=>{
  a.addEventListener('pointerenter',()=>cursor.classList.add('active'));
  a.addEventListener('pointerleave',()=>cursor.classList.remove('active'))
}

);
const title=document.querySelector('.intro h1');
const introCopy=document.querySelector('.intro p');
if(title)title.innerHTML='תכנון עם <em>תכלית.</em><br>ביצוע עם <em>אחריות.</em>';
if(introCopy)introCopy.textContent='NS מאחדת אדריכלות, הנדסה וביצוע תחת קורת גג אחת כדי שהדרך שלכם לבית תהיה מדויקת, ברורה ונעימה.';
function move(){
  x+=(tx-x)*.28;
  y+=(ty-y)*.28;
  const s=cursor.classList.contains('active')?205:165;
  cursor.style.transform=`translate3d(${x-s}px,${y-s}px,0)`;
  requestAnimationFrame(move)
}

move();
const footerLabel=document.querySelector('footer span');
if(footerLabel)footerLabel.textContent='האתר נבנה ע״י גיא מאלול';
const revealTargets=document.querySelectorAll('.intro,.services,.projects,.contact,.services article');
revealTargets.forEach(item=>item.classList.add('reveal'));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){
    entry.target.classList.add('shown');
    observer.unobserve(entry.target)
  }
}

),{
  threshold:.12
}

);
revealTargets.forEach(item=>observer.observe(item));
const instagramContainer=document.querySelector('.contact-buttons');
if(instagramContainer){
  const instagramLink=document.createElement('a');
  instagramLink.className='instagram-link';
  instagramLink.href='https://www.instagram.com/ne.si.projects?igsh=d252MjJzZmhkZWl3';
  instagramLink.target='_blank';
  instagramLink.rel='noopener';
  instagramLink.setAttribute('aria-label','Instagram');
  instagramLink.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.1 2h9.8A5.1 5.1 0 0 1 22 7.1v9.8a5.1 5.1 0 0 1-5.1 5.1H7.1A5.1 5.1 0 0 1 2 16.9V7.1A5.1 5.1 0 0 1 7.1 2Zm-.2 2A2.9 2.9 0 0 0 4 6.9v10.2A2.9 2.9 0 0 0 6.9 20h10.2a2.9 2.9 0 0 0 2.9-2.9V6.9A2.9 2.9 0 0 0 17.1 4H6.9ZM12 6.8A5.2 5.2 0 1 1 6.8 12 5.2 5.2 0 0 1 12 6.8Zm0 2A3.2 3.2 0 1 0 15.2 12 3.2 3.2 0 0 0 12 8.8Zm5.4-3.5a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2Z"/></svg><span>Instagram</span>';
  instagramContainer.appendChild(instagramLink);
}
