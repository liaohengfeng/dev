navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)||(document.write('<canvas id="snow" style="position:fixed;top:0;left:0;width:100%;height:100%;z-index:100;pointer-events:none"></canvas>'),window&&(()=>{let e=50,t=150,n="255, 255, 255",i=2,o=.5,a=.2,d=.5;const s=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)};window.requestAnimationFrame=s;const r=document.getElementById("snow"),h=r.getContext("2d"),w=e;let l=-100,m=-100,c=[];r.width=window.innerWidth,r.height=window.innerHeight;const v=()=>{h.clearRect(0,0,r.width,r.height);const e=t;for(let t=0;t<w;t++){let i=c[t];const o=l,a=m,d=i.x,s=i.y,w=Math.sqrt((o-d)*(o-d)+(a-s)*(a-s));if(w<e){const t=(o-d)/w,n=(a-s)/w,r=e/(w*w)/2;i.velX-=r*t,i.velY-=r*n}else i.velX*=.98,i.velY<i.speed&&i.speed-i.velY>.01&&(i.velY+=.01*(i.speed-i.velY)),i.velX+=Math.cos(i.step+=.05)*i.stepSize;h.fillStyle="rgba("+n+", "+i.opacity+")",i.y+=i.velY,i.x+=i.velX,(i.y>=r.height||i.y<=0)&&p(i),(i.x>=r.width||i.x<=0)&&p(i),h.beginPath(),h.arc(i.x,i.y,i.size,0,2*Math.PI),h.fill()}s(v)},p=e=>{e.x=Math.floor(Math.random()*r.width),e.y=0,e.size=3*Math.random()+2,e.speed=1*Math.random()+.5,e.velY=e.speed,e.velX=0,e.opacity=.5*Math.random()+.1};document.addEventListener("mousemove",(e=>{l=e.clientX,m=e.clientY})),window.addEventListener("resize",(()=>{r.width=window.innerWidth,r.height=window.innerHeight})),(()=>{for(let e=0;e<w;e++){const e=Math.floor(Math.random()*r.width),t=Math.floor(Math.random()*r.height),n=3*Math.random()+i,s=1*Math.random()+o,h=.5*Math.random()+a;c.push({speed:s,velX:0,velY:s,x:e,y:t,size:n,stepSize:Math.random()/30*d,step:0,angle:180,opacity:h})}v()})()})());