/* RANGKUMAN MATERI & KUIS INTERAKTIF IPAS KELAS 5 — Erna Trisnawati, S.Pd.I
   Sumber: Buku Siswa IPAS Kelas V (Edisi Revisi). Tiap bab: 20 soal PG (10 reguler + 10 HOTS). */
const GURU_WA = "6281234567890"; // GANTI dengan nomor WhatsApp guru (awali 62, tanpa + atau 0)
const API = "api.php";
const $ = id => document.getElementById(id);
const S = { nama:"", sekolah:"", tid:null, i:0, ok:0, done:false, scores:{} };

const TOPICS = [
{id:1,title:"Di Mana Indonesia Berada?",sub:"Daratan, lautan, dan letak geografis Indonesia",c1:"#0ea5e9",c2:"#38bdf8",
materi:`<h4>🏝️ Daratan dan Lautan di Indonesia</h4>
<p><b>Pulau</b> adalah daratan yang dikelilingi air dan tetap di atas permukaan saat air pasang. <b>Kepulauan</b> adalah gugusan pulau beserta perairan di antaranya. Indonesia memiliki lebih dari 17.000 pulau dan disebut negara kepulauan (<i>archipelago</i>) terbesar. Menurut pandangan Indonesia, laut adalah <b>penghubung</b> antarpulau, bukan pemisah.</p>
<h4>💎 Indonesia, Zamrud di Khatulistiwa</h4>
<ul><li>Indonesia dilalui garis <b>khatulistiwa</b> sehingga beriklim <b>tropis</b>: sinar matahari berlimpah dan curah hujan tinggi.</li>
<li>Kondisi ini membuat hutan hujan tropis luas, tanah subur, serta flora dan fauna beragam, bagaikan batu zamrud yang hijau.</li>
<li>Indonesia berada di pertemuan lempeng tektonik aktif, sehingga rawan gempa tetapi tanahnya subur.</li>
<li>Puncak Jaya (4.884 mdpl) di Papua adalah titik tertinggi dengan salju abadi.</li></ul>
<h4>⚓ Negara Maritim dan Agraris</h4>
<p>Negara yang sebagian besar penduduknya bertani disebut <b>agraris</b>. Perairan yang luas dan budaya mengarungi laut membuat Indonesia disebut <b>maritim</b>. Rempah-rempah dulu diperebutkan bangsa lain. <b>ALKI</b> (Alur Laut Kepulauan Indonesia) menghubungkan Samudra Hindia dan Samudra Pasifik sebagai jalur pelayaran dunia.</p>
<div class="ingat"><b>Ingat!</b> Kondisi geografis memengaruhi mata pencaharian dan budaya, misalnya perahu tradisional dan festival Pacu Jalur di Riau.</div>`,
quiz:[
{q:"Gugusan pulau beserta perairan di antaranya disebut ...",o:["Kepulauan","Semenanjung","Tanjung","Teluk"],a:0,e:"Kepulauan adalah gugusan pulau, termasuk perairan di antara pulau-pulau tersebut."},
{q:"Jumlah pulau di Indonesia lebih dari ...",o:["1.700","17.000","70.000","170.000"],a:1,e:"Indonesia memiliki lebih dari 17.000 pulau."},
{q:"Garis khayal yang membagi bumi menjadi belahan utara dan selatan adalah ...",o:["Khatulistiwa","Meridian","Garis tanggal","Garis bujur"],a:0,e:"Khatulistiwa (ekuator) membagi bumi menjadi belahan utara dan selatan."},
{q:"Karena dilalui khatulistiwa, Indonesia memiliki iklim ...",o:["Tropis","Kutub","Sedang","Gurun"],a:0,e:"Wilayah khatulistiwa beriklim tropis."},
{q:"Negara yang sebagian besar penduduknya bekerja sebagai petani disebut negara ...",o:["Maritim","Agraris","Industri","Kepulauan"],a:1,e:"Negara agraris adalah negara yang sebagian besar penduduknya bertani."},
{q:"Titik tertinggi di Indonesia yang memiliki salju abadi adalah ...",o:["Puncak Jaya","Gunung Semeru","Gunung Kerinci","Gunung Merapi"],a:0,e:"Puncak Jaya di Pegunungan Jayawijaya, Papua, setinggi 4.884 mdpl."},
{q:"Indonesia terletak di antara dua samudra, yaitu ...",o:["Hindia dan Pasifik","Atlantik dan Pasifik","Hindia dan Atlantik","Arktik dan Hindia"],a:0,e:"Indonesia berada di antara Samudra Hindia dan Samudra Pasifik."},
{q:"Lagu \"Nenek Moyangku Seorang Pelaut\" menggambarkan Indonesia sebagai negara ...",o:["Maritim","Agraris","Padang pasir","Industri"],a:0,e:"Budaya mengarungi laut menunjukkan Indonesia sebagai negara maritim."},
{q:"Festival Pacu Jalur merupakan budaya perahu dari provinsi ...",o:["Riau","Bali","Papua","Aceh"],a:0,e:"Pacu Jalur adalah festival perahu tradisional dari Riau."},
{q:"Alur pelayaran dan penerbangan internasional yang melintasi perairan Indonesia disingkat ...",o:["ALKI","ASEAN","APEC","ALBA"],a:0,e:"ALKI = Alur Laut Kepulauan Indonesia."},
{q:"Mengapa Indonesia dijuluki \"Zamrud di Khatulistiwa\"?",o:["Hutan hujan tropisnya hijau dan subur karena sinar matahari serta hujan melimpah","Banyak tambang batu zamrud","Peta Indonesia berwarna hijau","Ditemukan zamrud raksasa"],a:0,e:"Letak di khatulistiwa membuat hutan tropis hijau subur seperti zamrud.",hots:1},
{q:"Warga pesisir banyak menjadi nelayan, sedangkan warga dataran subur banyak bertani. Kesimpulan yang tepat ...",o:["Kondisi geografis memengaruhi mata pencaharian","Mata pencaharian tidak dipengaruhi apa pun","Nelayan hanya ada di pegunungan","Petani hanya ada di pantai"],a:0,e:"Kondisi geografis suatu wilayah memengaruhi mata pencaharian warganya.",hots:1},
{q:"Banyak kapal asing melintasi ALKI. Dampak positif yang mungkin didapat Indonesia adalah ...",o:["Peluang ekonomi dari perdagangan dan pelabuhan","Laut menjadi sepi","Jumlah pulau bertambah","Iklim berubah menjadi sedang"],a:0,e:"Jalur strategis membuka peluang perdagangan, pelabuhan, dan jasa.",hots:1},
{q:"Indonesia memandang laut sebagai ... antarpulau.",o:["Penghubung","Pemisah","Penghalang","Batas tanpa manfaat"],a:0,e:"Bagi Indonesia, laut adalah penghubung antarpulau.",hots:1},
{q:"Salju abadi di Puncak Jaya makin menyusut dari tahun ke tahun. Hal ini menandakan ...",o:["Suhu bumi meningkat sehingga es mencair","Hujan di gunung berhenti","Gunung semakin tinggi","Khatulistiwa bergeser"],a:0,e:"Menyusutnya salju abadi menunjukkan es mencair akibat suhu yang meningkat.",hots:1},
{q:"Rempah-rempah diperebutkan bangsa asing pada masa lalu karena ...",o:["Nilai jualnya tinggi dan Indonesia subur menghasilkannya","Tidak ada yang menyukainya","Tumbuh di semua negara","Hanya untuk hiasan"],a:0,e:"Rempah bernilai jual tinggi, dan Indonesia adalah penghasil rempah yang subur.",hots:1},
{q:"Indonesia berada di pertemuan lempeng tektonik aktif. Dampaknya ...",o:["Rawan gempa, tetapi tanah subur di sekitar gunung api","Tidak pernah terjadi gempa","Tanah menjadi tandus","Tidak memiliki gunung api"],a:0,e:"Pertemuan lempeng menyebabkan gempa, sementara abu gunung api menyuburkan tanah.",hots:1},
{q:"Desa Rani berada di pesisir pantai. Transportasi lokal yang paling sesuai dikembangkan adalah ...",o:["Perahu atau kapal","Kereta salju","Unta","Kereta gantung gunung"],a:0,e:"Wilayah pesisir memanfaatkan perahu/kapal sesuai kondisi geografisnya.",hots:1},
{q:"Sebuah negara terdiri dari ribuan pulau yang dipisahkan laut. Sebutan yang tepat adalah negara ...",o:["Kepulauan","Daratan","Kutub","Benua"],a:0,e:"Negara yang terdiri atas gugusan pulau disebut negara kepulauan.",hots:1},
{q:"Mengapa kita harus menjaga hutan dan laut Indonesia?",o:["Keduanya sumber kehidupan dan ekonomi bagi negara agraris dan maritim","Agar terlihat indah di peta","Hanya untuk turis","Tidak ada alasan khusus"],a:0,e:"Hutan dan laut menopang kehidupan, pangan, dan ekonomi bangsa.",hots:1}
]},
{id:2,title:"Majulah Daerahku!",sub:"Kebutuhan, kegiatan ekonomi, dan pelaku ekonomi bijak",c1:"#f97316",c2:"#fbbf24",materi:"",quiz:[]},
{id:3,title:"Harmoni dalam Ekosistem",sub:"Ekosistem, interaksi komponen, dan peran manusia",c1:"#22c55e",c2:"#4ade80",materi:"",quiz:[]},
{id:4,title:"Air Sumber Kehidupan",sub:"Aliran air, siklus air, dan air bersih",c1:"#06b6d4",c2:"#67e8f9",materi:"",quiz:[]},
{id:5,title:"Daerahku yang Bersejarah",sub:"Sejarah daerah dan warisan budaya",c1:"#a855f7",c2:"#c084fc",materi:"",quiz:[]},
{id:6,title:"Perubahan pada Diriku",sub:"Masa puber, sehat tubuh dan pikiran, privasi",c1:"#ec4899",c2:"#f9a8d4",materi:"",quiz:[]},
{id:7,title:"Bermain dengan Cahaya",sub:"Melihat, bayangan, dan warna",c1:"#eab308",c2:"#fde047",materi:"",quiz:[]},
{id:8,title:"Ramai karena Bunyi",sub:"Mendengar, perambatan, pemantulan bunyi",c1:"#ef4444",c2:"#fb923c",materi:"",quiz:[]}
];

function post(a,d){return fetch(API+"?a="+a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...d,a})}).then(r=>r.json()).catch(()=>({ok:false}));}
function show(id){["s-cover","s-home","s-topic","s-rank"].forEach(x=>$(x).classList.toggle("hide",x!==id));window.scrollTo(0,0);}

function startApp(){
  const n=$("nama").value.trim(), s=$("sekolah").value.trim();
  if(!n||!s){$("err").style.display="block";return;}
  S.nama=n;S.sekolah=s;
  post("daftar",{nama:n,sekolah:s});
  $("h-nama").textContent=n;$("h-sek").textContent=s;
  toHome();
}
function toHome(){
  let d=0;$("list").innerHTML="";
  TOPICS.forEach(t=>{
    const r=S.scores[t.id];if(r!=null)d++;
    const el=document.createElement("div");el.className="item";el.onclick=()=>openTopic(t.id);
    el.innerHTML=`<div class="num" style="background:linear-gradient(135deg,${t.c1},${t.c2})">${t.id}</div><div class="t">Bab ${t.id}. ${t.title}<small>${t.sub}</small></div><div class="sc ${r!=null?"done":""}">${r!=null?r+"/20":"Belum"}</div>`;
    $("list").appendChild(el);
  });
  $("h-prog").textContent=d+"/"+TOPICS.length+" selesai";
  show("s-home");
}
function openTopic(id){
  const t=TOPICS.find(x=>x.id===id);S.tid=id;
  document.documentElement.style.setProperty("--ac",t.c1);
  $("thead").style.background=`linear-gradient(160deg,${t.c1},${t.c2})`;
  $("t-title").textContent="Bab "+t.id+". "+t.title;$("t-sub").textContent=t.sub;
  $("p-m").innerHTML=t.materi||'<p>🚧 Rangkuman materi bab ini segera hadir.</p>';
  show("s-topic");showTab("m");
}
function showTab(k){
  $("tb-m").classList.toggle("active",k==="m");$("tb-k").classList.toggle("active",k==="k");
  $("p-m").classList.toggle("hide",k!=="m");$("p-k").classList.toggle("hide",k==="m");
  if(k==="k"){S.i=0;S.ok=0;S.done=false;renderQ();}
}
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]];}return a;};
function renderQ(){
  const t=TOPICS.find(x=>x.id===S.tid),p=$("p-k");
  if(!t.quiz.length){p.innerHTML='<p style="text-align:center">🚧 Kuis bab ini segera hadir.</p>';return;}
  if(S.i>=t.quiz.length)return result(t);
  const q=t.quiz[S.i];
  S.opts=shuffle(q.o.map((x,i)=>({x,c:i===q.a})));S.answered=false;
  p.innerHTML=`<div class="qtop"><span>Soal ${S.i+1} dari ${t.quiz.length}</span>${q.hots?'<span class="hots">HOTS</span>':""}</div>
  <div class="bar"><div style="width:${S.i/t.quiz.length*100}%"></div></div><div class="q">${q.q}</div>
  ${S.opts.map((o,i)=>`<button class="opt" onclick="answer(${i})">${"ABCD"[i]}. ${o.x}</button>`).join("")}
  <div class="exp" id="exp">💡 ${q.e}</div><button class="next" id="next" onclick="S.i++;renderQ()">${S.i+1===t.quiz.length?"Lihat Hasil 🎉":"Soal Berikutnya →"}</button>`;
}
function answer(i){
  if(S.answered)return;S.answered=true;
  document.querySelectorAll(".opt").forEach((b,k)=>{b.disabled=true;if(S.opts[k].c)b.classList.add("ok");else if(k===i)b.classList.add("no");});
  if(S.opts[i].c)S.ok++;
  $("exp").classList.add("show");$("next").classList.add("show");
}
function result(t){
  const n=S.ok;S.scores[t.id]=Math.max(S.scores[t.id]||0,n);
  post("skor",{nama:S.nama,sekolah:S.sekolah,bab:t.id,nilai:n});
  const m=n>=18?"Luar biasa! Kamu jagoan IPAS! 🌟":n>=14?"Hebat! Sedikit lagi sempurna! 👏":n>=10?"Bagus! Pelajari lagi materinya ya 📖":"Ayo semangat, coba lagi! 💪";
  $("p-k").innerHTML=`<div class="res"><div style="font-size:44px">🏅</div><div class="big">${n}/${t.quiz.length}</div><p>Bab ${t.id}. ${t.title}</p><p>${m}</p>
  <button class="wa" onclick="sendWA()">📲 Kirim Hasil ke WhatsApp Guru</button>
  <button class="sec" onclick="showTab('k')">🔁 Ulangi Kuis</button>
  <button class="sec" onclick="openRank()">🏆 Lihat Peringkat Global</button>
  <button class="sec" onclick="toHome()">🏠 Kembali ke Daftar Bab</button></div>`;
}
function sendWA(){
  const t=TOPICS.find(x=>x.id===S.tid);
  const txt=`Assalamualaikum Bu Guru 🙏\nHasil Kuis IPAS Kelas 5\nNama: ${S.nama}\nSekolah: ${S.sekolah}\nBab ${t.id}: ${t.title}\nNilai: ${S.ok}/${t.quiz.length}`;
  window.open("https://wa.me/"+GURU_WA+"?text="+encodeURIComponent(txt),"_blank");
}
async function openRank(){
  show("s-rank");$("rank-body").textContent="Memuat...";
  try{
    const r=await fetch(API+"?a=rank").then(x=>x.json());
    if(!r.ok||!r.data.length){$("rank-body").textContent="Belum ada data peringkat.";return;}
    const em=["🥇","🥈","🥉"];
    $("rank-body").innerHTML=r.data.map((d,i)=>`<div class="rk"><div class="n">${em[i]||i+1}</div><div class="w">${esc(d.nama)}<small>${esc(d.sekolah)} · ${d.jml} bab</small></div><div class="p">${d.total}</div></div>`).join("");
  }catch(e){$("rank-body").textContent="Peringkat belum dapat dimuat. Periksa koneksi/hosting.";}
}
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
