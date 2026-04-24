import React from 'react';

export const PLAYLISTS = [
  { id:'p1', name:'My Favs 🎵', count:847, cover:'145', owner:'you' },
  { id:'p2', name:'Late Night Drives', count:312, cover:'310', owner:'you' },
  { id:'p3', name:'Gym Hits', count:214, cover:'25', owner:'you' },
  { id:'p4', name:'Top Global 50', count:50, cover:'225', owner:'Spotify' },
  { id:'p5', name:'Chill Vibes', count:198, cover:'145', owner:'you' },
  { id:'p6', name:'throwback 2000s', count:430, cover:'55', owner:'you' },
];

export const GENRES = [
  { id:'pop',       label:'Pop',        color:'lime',   emoji:'✦' },
  { id:'hiphop',    label:'Hip-Hop',    color:'coral',  emoji:'◈' },
  { id:'electronic',label:'Electronic', color:'sky',    emoji:'◉' },
  { id:'rnb',       label:'R&B',        color:'violet', emoji:'◆' },
  { id:'rock',      label:'Rock',       color:'coral',  emoji:'⬡' },
  { id:'jazz',      label:'Jazz',       color:'lime',   emoji:'◎' },
  { id:'classical', label:'Classical',  color:'sky',    emoji:'◇' },
  { id:'latin',     label:'Latin',      color:'violet', emoji:'◑' },
  { id:'indie',     label:'Indie',      color:'lime',   emoji:'△' },
  { id:'metal',     label:'Metal',      color:'coral',  emoji:'▣' },
  { id:'soul',      label:'Soul',       color:'violet', emoji:'❋' },
  { id:'country',   label:'Country',    color:'sky',    emoji:'◐' },
];

export const MOODS = [
  { id:'happy',      label:'Happy',      color:'lime' },
  { id:'melancholic',label:'Melancholic',color:'violet' },
  { id:'energetic',  label:'Energetic',  color:'coral' },
  { id:'calm',       label:'Calm',       color:'sky' },
  { id:'dark',       label:'Dark',       color:'violet' },
  { id:'romantic',   label:'Romantic',   color:'coral' },
];

export const ERAS = ['60s', '70s', '80s', '90s', '00s', '10s', '20s'];

export const SAMPLE_SONGS = [
  { id:1, title:'Blinding Lights',    artist:'The Weeknd',          genre:'pop',        dur:'3:20', match:98 },
  { id:2, title:'HUMBLE.',            artist:'Kendrick Lamar',       genre:'hiphop',     dur:'2:57', match:95 },
  { id:3, title:'Lose Yourself',      artist:'Eminem',               genre:'hiphop',     dur:'5:26', match:91 },
  { id:4, title:'Levitating',         artist:'Dua Lipa',             genre:'pop',        dur:'3:23', match:94 },
  { id:5, title:'Redbone',            artist:'Childish Gambino',     genre:'rnb',        dur:'5:26', match:89 },
  { id:6, title:'Anti-Hero',          artist:'Taylor Swift',         genre:'pop',        dur:'3:20', match:97 },
  { id:7, title:'Midnight Rain',      artist:'Taylor Swift',         genre:'pop',        dur:'2:54', match:93 },
  { id:8, title:'As It Was',          artist:'Harry Styles',         genre:'pop',        dur:'2:37', match:96 },
  { id:9, title:'Stayed Gone',        artist:'The Used',             genre:'rock',       dur:'3:55', match:87 },
  { id:10,title:'Circles',            artist:'Post Malone',          genre:'pop',        dur:'3:35', match:92 },
  { id:11,title:'Industry Baby',      artist:'Lil Nas X',            genre:'hiphop',     dur:'3:32', match:90 },
  { id:12,title:'Heat Waves',         artist:'Glass Animals',        genre:'indie',      dur:'3:59', match:88 },
  { id:13,title:'Bad Guy',            artist:'Billie Eilish',        genre:'pop',        dur:'3:14', match:96 },
  { id:14,title:'Essence',            artist:'Wizkid',               genre:'rnb',        dur:'4:01', match:85 },
  { id:15,title:'Starboy',            artist:'The Weeknd',           genre:'pop',        dur:'3:50', match:93 },
];

export const SONG_FRAGMENTS = [
  'Blinding Lights','HUMBLE.','Levitating','Anti-Hero','Redbone',
  'As It Was','Heat Waves','Bad Guy','Starboy','Circles',
  'Industry Baby','Stay','Watermelon Sugar','Peaches','Montero',
  'drivers license','good 4 u','Shivers','Easy On Me','Ghost',
];

export const ALBUMS = [
  // The Wall (Pink Floyd)
  { size: 180, rot: -4, dur: '18s', delay: '0s', top: '7%', left: '3%',
    bg: '#050505',
    inner: <img src="https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/3e/17/ec/3e17ec6d-f980-c64f-19e0-a6fd8bbf0c10/886445635850.jpg/600x600bb.jpg" alt="The Wall" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} /> },

  // Seedhe Maut
  { size: 160, rot: 3, dur: '19s', delay: '-2s', top: '25%', right: '12%',
    bg: '#000',
    inner: <img src="https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/8c/3c/10/8c3c1016-be7e-666c-225d-00b671fb38e0/199066150108.jpg/600x600bb.jpg" alt="Seedhe Maut" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} /> },

  // Starboy (The Weeknd)
  { size: 190, rot: 2, dur: '22s', delay: '-4s', top: '70%', left: '3%',
    bg: '#000',
    inner: <img src="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/600x600bb.jpg" alt="Starboy" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} /> },

  // Thriller (Michael Jackson)
  { size: 170, rot: -5, dur: '17s', delay: '-1s', top: '78%', left: '25%',
    bg: '#000',
    inner: <img src="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/32/4f/fd/324ffda2-9e51-8f6a-0c2d-c6fd2b41ac55/074643811224.jpg/600x600bb.jpg" alt="Thriller" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} /> },

  // Random Access Memories (Daft Punk)
  { size: 175, rot: 6, dur: '20s', delay: '-3s', top: '6%', right: '4%',
    bg: '#000',
    inner: <img src="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/e8/43/5f/e8435ffa-b6b9-b171-40ab-4ff3959ab661/886443919266.jpg/600x600bb.jpg" alt="Random Access Memories" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} /> },

  // DAMN. (Kendrick Lamar)
  { size: 150, rot: 1, dur: '19s', delay: '-6s', top: '65%', right: '8%',
    bg: '#000',
    inner: <img src="https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ab/16/ef/ab16efe9-e7f1-66ec-021c-5592a23f0f9e/17UMGIM88793.rgb.jpg/600x600bb.jpg" alt="DAMN." style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} /> },

  // Tyla
  { size: 155, rot: -3, dur: '21s', delay: '-5s', top: '20%', left: '20%',
    bg: '#000',
    inner: <img src="https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/6f/e3/09/6fe30938-89fb-e4ae-d67a-648746c26db1/196871668248.jpg/600x600bb.jpg" alt="Tyla" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} /> },

  // Graduation (Kanye West)
  { size: 165, rot: 4, dur: '18.5s', delay: '-7s', top: '45%', left: '6%',
    bg: '#000',
    inner: <img src="https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/39/25/2d/39252d65-2d50-b991-0962-f7a98a761271/00602517483507.rgb.jpg/600x600bb.jpg" alt="Graduation" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} /> },

  // Rumours (Fleetwood Mac)
  { size: 160, rot: -2, dur: '20.5s', delay: '-4.5s', top: '82%', right: '28%',
    bg: '#000',
    inner: <img src="https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/4d/13/ba/4d13bac3-d3d5-7581-2c74-034219eadf2b/081227970949.jpg/600x600bb.jpg" alt="Rumours" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} /> },

  // 1989 (Taylor Swift)
  { size: 170, rot: 5, dur: '19.5s', delay: '-1.5s', top: '50%', right: '4%',
    bg: '#000',
    inner: <img src="https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/89/4a/4a/894a4ab9-b0b0-9ea5-ca41-8da0b9b79453/14UMDIM03405.rgb.jpg/600x600bb.jpg" alt="1989" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} /> },
];
