/* ═══════════════════════════════════════
   Sistema Operador v2 — app.js
   ═══════════════════════════════════════ */

// ── DADOS FIXOS ──────────────────────────────────────────────────────────────

const TRILHAS = {
  fase1: [
    ['Modelo OSI — 7 camadas com função de cada uma', 'Redes'],
    ['TCP/IP — modelo e comparação com OSI', 'Redes'],
    ['Protocolos: TCP, UDP — diferenças e casos de uso', 'Protocolos'],
    ['DNS, DHCP, ARP, ICMP, HTTPS — funcionamento', 'Protocolos'],
    ['Sub-redes, CIDR e endereçamento IP', 'Redes'],
    ['Switches, roteadores e firewalls — conceito', 'Infra'],
    ['Cisco NetAcad — Introduction to Networks', 'Curso'],
    ['Linux CLI — navegação, permissões e processos', 'Linux'],
    ['Linux — logs em /var/log e journalctl', 'Linux'],
    ['Linux — systemd e gerenciamento de serviços', 'Linux'],
    ['Windows — Event Viewer e categorias de evento', 'Windows'],
    ['Windows — PowerShell básico', 'Windows'],
    ['OverTheWire Bandit — nível 0 ao 15', 'Lab'],
    ['Inglês técnico — leitura de docs sem travar', 'Idioma']
  ],
  fase2: [
    ['CIA Triad — Confidencialidade, Integridade, Disponibilidade', 'Base'],
    ['Malware, phishing, ransomware e engenharia social', 'Ameaças'],
    ['Vulnerabilidades, exploits e CVEs', 'Ameaças'],
    ['TryHackMe — Pre-Security (gratuito)', 'Lab'],
    ['TryHackMe — Introduction to Cybersecurity', 'Lab'],
    ['TryHackMe — SOC Level 1 Path', 'Lab'],
    ['MITRE ATT&CK — táticas T1059, T1566 e top 10', 'Framework'],
    ['Cyber Kill Chain — Lockheed Martin', 'Framework'],
    ['LGPD — noções básicas de conformidade', 'Governança'],
    ['ISO 27001 — conceitos introdutórios', 'Governança'],
    ['Threat intelligence — IOC, TTP, feed de ameaças', 'Blue Team'],
    ['Análise de e-mail phishing na prática', 'Blue Team']
  ],
  fase3: [
    ['Wazuh — instalação em VM e operação básica', 'SIEM'],
    ['Splunk — buscas, dashboards e correlação', 'SIEM'],
    ['Wireshark — análise de pacotes e filtros', 'Rede'],
    ['Nmap — varredura, versão e scripts NSE', 'Ferramenta'],
    ['CyberChef — decodificação e análise de artefatos', 'Ferramenta'],
    ['Security Onion — IDS e NSM', 'Lab'],
    ['NIST IR — Preparação, Detecção, Contenção, Erradicação', 'IR'],
    ['Playbook de resposta a incidente básico', 'IR'],
    ['Análise de log de endpoint (Sysmon)', 'Forense'],
    ['MalwareBazaar — análise de amostras simples', 'Forense']
  ]
};

const CERTIFICACOES = [
  ['fortinet', 'Fortinet NSE 1–4', 'Gratuita · Início imediato'],
  ['isc2cc',   'ISC2 CC',          'Gratuita · 3º semestre'],
  ['security', 'CompTIA Security+','~R$ 2.200 · 5º semestre'],
  ['btl1',     'BTL1 Blue Team',   '~R$ 2.700 · 7º semestre'],
  ['cysa',     'CySA+',            '~R$ 2.500 · Opcional']
];

const ROADMAP = [
  { fase:1, titulo:'Fundamentos',          periodo:'Meses 1–6',    desc:'OSI, TCP/IP, Linux, Windows, inglês técnico e base de lab.' },
  { fase:2, titulo:'Cibersegurança',        periodo:'Meses 6–18',   desc:'CIA Triad, threats, MITRE, TryHackMe e visão defensiva.' },
  { fase:3, titulo:'Ferramentas SOC',       periodo:'Meses 18–30',  desc:'SIEM, Wazuh, Wireshark, Nmap, NIST IR e correlação de eventos.' },
  { fase:4, titulo:'Portfólio e estágio',   periodo:'Meses 30–42',  desc:'Write-ups, home lab, projetos GitHub, suporte/NOC/estágio.' },
  { fase:5, titulo:'Empregabilidade',       periodo:'Meses 42–48',  desc:'LinkedIn, currículo, entrevistas e candidatura SOC Júnior.' }
];

const SEMANA = [
  ['Seg', 'TryHackMe / Redes TCP/IP',          'Upper Push — supino, desenvolvimento, dips',    'Faculdade + revisão 20 min'],
  ['Ter', 'Linux CLI / OverTheWire Bandit',     'Lower Explosão — agachamento, deadlift, jump',  'Faculdade + revisão 20 min'],
  ['Qua', 'Revisão / leituras / descanso ativo','Recuperação / mobilidade',                      'Faculdade + revisão 20 min'],
  ['Qui', 'Fortinet NSE / certs / labs',        'Upper Pull + Muay Thai — barra, remada, luta',  'Faculdade + revisão 20 min'],
  ['Sex', 'GitHub write-ups / revisão semanal', 'Lower Força + BJJ — box squat, afundo, luta',   'Faculdade + revisão 20 min'],
  ['Sáb', 'Planejamento semanal / descanso',    'Cardio Z2 / mobilidade ativa',                  'Livre'],
  ['Dom', 'Leitura técnica / preparação',       'Cardio Z2 / mobilidade / lazer',                'Livre']
];

const BLOCOS = [
  [360,  720,  '📚 Estudo da manhã',     'Redes, Linux, labs e revisão técnica'],
  [720,  870,  '⏸ Transição',            'Almoço, recuperação e preparo para treino'],
  [870,  1080, '🏋️ Treino 14:30',        'Força, cardio ou artes marciais'],
  [1080, 1320, '🎓 Noite acadêmica',     'Faculdade, revisão e fechamento do dia']
];

const MORNING = {1:'TryHackMe e redes',2:'Linux logs e OverTheWire',3:'Revisão e leituras',4:'Fortinet e labs',5:'GitHub write-ups',6:'Planejamento e descanso',0:'Leitura técnica'};
const AFTERNOON = {1:'Upper Push',2:'Lower Explosão',3:'Recuperação / mobilidade',4:'Upper Pull + luta',5:'Lower Força + BJJ',6:'Cardio Z2 / mobilidade',0:'Cardio Z2 / mobilidade'};

// ── HELPERS ───────────────────────────────────────────────────────────────────

const $ = sel => document.querySelector(sel);
const $$ = sel => [...document.querySelectorAll(sel)];
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2,7);

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function fmtDateTime(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return isNaN(d) ? iso : d.toLocaleString('pt-BR');
}

function monthKey(dateStr) {
  const d = new Date(dateStr + (dateStr.length === 10 ? 'T12:00:00' : ''));
  return isNaN(d) ? '' : `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
}

function thisMonth() {
  const n = new Date();
  return `${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,'0')}`;
}

// ── NAVEGAÇÃO ─────────────────────────────────────────────────────────────────

const SECTIONS = ['dashboard','estudo','treino','agenda','carreira','doutrina'];

function goTo(id) {
  SECTIONS.forEach(s => {
    document.getElementById('section-'+s).classList.toggle('active', s===id);
  });
  $$('.nav-link').forEach(b => b.classList.toggle('active', b.dataset.section===id));
  $('#pageTitle').textContent = (document.querySelector(`.nav-link[data-section="${id}"]`)?.textContent || id).trim();
  closeSidebar();
}

function openSidebar()  { $('#sidebar').classList.add('open'); $('#overlay').classList.add('show'); }
function closeSidebar() { $('#sidebar').classList.remove('open'); $('#overlay').classList.remove('show'); }

// ── RELÓGIO E BLOCO ATUAL ─────────────────────────────────────────────────────

function updateClock() {
  const now = new Date();
  const hhmm = now.toLocaleTimeString('pt-BR');
  const dateLong = now.toLocaleDateString('pt-BR', {weekday:'long',day:'2-digit',month:'long',year:'numeric'});

  $('#clockLabel').textContent = hhmm;
  $('#todayLabel').textContent = dateLong;

  const t = now.getHours()*60 + now.getMinutes();
  const block = BLOCOS.find(([s,e]) => t>=s && t<e);
  const [, , bName, bDesc] = block || [0,0,'🌙 Recuperação','Sono e recuperação para a próxima missão'];

  $('#currentBlockChip').textContent = bName;
  $('#blockName').textContent = bName;
  $('#blockDesc').textContent = bDesc;

  const day = now.getDay();
  $('#morningMission').textContent   = MORNING[day]   || 'Estudo livre';
  $('#afternoonMission').textContent = AFTERNOON[day] || 'Treino livre';
  $('#nightMission').textContent     = day>=1 && day<=5 ? 'Faculdade + revisão 20 min' : 'Fechamento e planejamento';
}

// ── PROGRESSO E FASE SOC ──────────────────────────────────────────────────────

function trilhaPct(key) {
  const done = DB.get('done_'+key, []);
  return Math.round((done.length / TRILHAS[key].length) * 100);
}

function socFase() {
  if (trilhaPct('fase1') < 80) return {n:1, label:'Fundamentos'};
  if (trilhaPct('fase2') < 80) return {n:2, label:'Cibersegurança'};
  if (trilhaPct('fase3') < 80) return {n:3, label:'Ferramentas SOC'};
  return {n:4, label:'Portfólio e estágio'};
}

// ── STREAK ────────────────────────────────────────────────────────────────────

function calcStreak() {
  const dias = [...new Set(
    DB.get('estudos',[]).filter(s => Number(s.minutos||0)>=20).map(s=>s.data)
  )].sort().reverse();
  let streak = 0;
  const cur = new Date(todayISO()+'T12:00:00');
  while (true) {
    const key = cur.toISOString().slice(0,10);
    if (dias.includes(key)) { streak++; cur.setDate(cur.getDate()-1); }
    else break;
  }
  return streak;
}

// ── RENDERIZAÇÕES ──────────────────────────────────────────────────────────────

function renderStats() {
  const stats  = DB.get('stats',{});
  const m      = thisMonth();
  const treinos   = DB.get('treinos',[]);
  const estudos   = DB.get('estudos',[]);
  const comps     = DB.get('compromissos',[]);
  const certs     = DB.get('certs',[]);

  const trMes  = treinos.filter(t => monthKey(t.data)===m);
  const estMes = estudos.filter(s => monthKey(s.data)===m);
  const horas  = estMes.reduce((a,s)=>a+Number(s.minutos||0),0)/60;
  const muay   = trMes.filter(t=>t.tipo==='Muay Thai').length;
  const bjj    = trMes.filter(t=>t.tipo==='BJJ').length;
  const future = comps.filter(c=>new Date(c.data)>=Date.now()).length;

  const p1=trilhaPct('fase1'), p2=trilhaPct('fase2'), p3=trilhaPct('fase3');
  const certPct = Math.round((certs.length/CERTIFICACOES.length)*100);
  const geral   = Math.round((p1+p2+p3+certPct)/4);
  const fase    = socFase();

  setText('statPeso',    stats.peso     ? stats.peso+' kg'     : '—');
  setText('statDeadlift',stats.deadlift ? stats.deadlift+' kg' : '—');
  setText('statSupino',  stats.supino   ? stats.supino+' kg'   : '—');
  setText('statTreinos', String(trMes.length));
  setText('statHoras',   horas.toFixed(1)+'h');
  setText('statStreak',  calcStreak()+' dias');
  setText('statFase',    String(fase.n));
  setText('statFaseLabel',fase.label);
  setText('statGeral',   geral+'%');

  setText('metEstudos',  String(estMes.length));
  setText('metTreinos',  String(trMes.length));
  setText('metMuay',     String(muay));
  setText('metBjj',      String(bjj));
  setText('metComps',    String(future));
  setText('metCerts',    `${certs.length}/${CERTIFICACOES.length}`);

  // Inputs de stats de treino
  setVal('iPeso',     stats.peso||'');
  setVal('iDeadlift', stats.deadlift||'');
  setVal('iSupino',   stats.supino||'');
  setVal('iAgach',    stats.agachamento||'');
  setVal('iPu',       stats.pullups||'');
  setVal('iGord',     stats.gordura||'');
}

function setText(id, val) { const e=document.getElementById(id); if(e) e.textContent=val; }
function setVal(id, val)  { const e=document.getElementById(id); if(e) e.value=val; }

function renderChecklist(key, listId, badgeId) {
  const done = DB.get('done_'+key, []);
  const el   = document.getElementById(listId);
  if (!el) return;
  el.innerHTML = TRILHAS[key].map(([title,tag],i) => {
    const ok = done.includes(i);
    return `<div class="chk-item ${ok?'done':''}">
      <button class="chk-btn" onclick="toggleCheck('${key}',${i})">${ok?'✓':'○'}</button>
      <div class="chk-body"><span>${title}</span><small>${tag}</small></div>
      <small class="chk-st">${ok?'✓ feito':'pendente'}</small>
    </div>`;
  }).join('');
  document.getElementById(badgeId).textContent = trilhaPct(key)+'%';
}

function toggleCheck(key, idx) {
  const done = DB.get('done_'+key, []);
  DB.set('done_'+key, done.includes(idx) ? done.filter(i=>i!==idx) : [...done,idx]);
  renderAll();
}
window.toggleCheck = toggleCheck;

function renderList(elId, items, kind) {
  const el = document.getElementById(elId);
  if (!el) return;
  if (!items.length) { el.innerHTML='<div class="empty-msg">Nenhum registro ainda.</div>'; return; }
  el.innerHTML = items.map(item => {
    if (kind==='diario') return `
      <div class="list-card">
        <div class="lc-top"><div><strong>${fmtDateTime(item.data)}</strong><small>Diário</small></div>
          <button class="del-btn" onclick="del('diario','${item.id}')">🗑</button></div>
        ${item.executado?`<p><b>Executado:</b> ${item.executado}</p>`:''}
        ${item.delta    ?`<p><b>Delta:</b> ${item.delta}</p>`:''}
        ${item.proximo  ?`<p><b>Próximo:</b> ${item.proximo}</p>`:''}
      </div>`;
    if (kind==='study') return `
      <div class="list-card">
        <div class="lc-top"><div><strong>${item.tema}</strong><small>${item.data} · ${item.minutos} min · ${item.fase}</small></div>
          <button class="del-btn" onclick="del('estudos','${item.id}')">🗑</button></div>
        ${item.notas?`<p>${item.notas}</p>`:''}
      </div>`;
    if (kind==='treino') return `
      <div class="list-card">
        <div class="lc-top"><div><strong>${item.tipo}</strong><small>${item.data} · ${item.duracao||0} min · RPE ${item.rpe||'—'}</small></div>
          <button class="del-btn" onclick="del('treinos','${item.id}')">🗑</button></div>
        ${item.obs?`<p>${item.obs}</p>`:''}
      </div>`;
    return `
      <div class="list-card">
        <div class="lc-top"><div><strong>${item.titulo}</strong><small>${fmtDateTime(item.data)} · ${item.tipo}</small></div>
          <button class="del-btn" onclick="del('compromissos','${item.id}')">🗑</button></div>
      </div>`;
  }).join('');
}

function del(key, id) { DB.removeFromArray(key, id); renderAll(); }
window.del = del;

function renderCerts() {
  const done = DB.get('certs',[]);
  $('#certList').innerHTML = CERTIFICACOES.map(([key,title,desc]) => {
    const ok = done.includes(key);
    return `<div class="chk-item ${ok?'done':''}">
      <button class="chk-btn" onclick="toggleCert('${key}')">${ok?'✓':'○'}</button>
      <div class="chk-body"><span>${title}</span><small>${desc}</small></div>
      <small class="chk-st">${ok?'✓ concluída':'pendente'}</small>
    </div>`;
  }).join('');
}

function toggleCert(key) {
  const done = DB.get('certs',[]);
  DB.set('certs', done.includes(key)?done.filter(k=>k!==key):[...done,key]);
  renderAll();
}
window.toggleCert = toggleCert;

function renderRoadmap() {
  const cur = socFase().n;
  $('#roadmapList').innerHTML = ROADMAP.map(r => {
    let pct = 0;
    if (r.fase===1) pct = trilhaPct('fase1');
    if (r.fase===2) pct = trilhaPct('fase2');
    if (r.fase===3) pct = trilhaPct('fase3');
    if (r.fase < cur) pct = 100;
    return `<div class="rm-item ${r.fase===cur?'active':''}">
      <h4>Fase ${r.fase} — ${r.titulo}</h4>
      <p>${r.periodo} · ${r.desc}</p>
      <div class="progress"><div style="width:${pct}%"></div></div>
    </div>`;
  }).join('');
}

function renderWeek() {
  const g = $('#weekGrid');
  if (!g) return;
  g.innerHTML =
    ['Dia','Manhã','14:30','Noite'].map(h=>`<div class="wk-head">${h}</div>`).join('') +
    SEMANA.flatMap(([d,m,t,n])=>[
      `<div class="wk-day">${d}</div>`,
      `<div class="wk-cell">${m}</div>`,
      `<div class="wk-cell hide-mob">${t}</div>`,
      `<div class="wk-cell hide-mob">${n}</div>`
    ]).join('');
}

function renderAll() {
  updateClock();
  renderStats();
  renderChecklist('fase1','fase1List','fase1Badge');
  renderChecklist('fase2','fase2List','fase2Badge');
  renderChecklist('fase3','fase3List','fase3Badge');
  renderList('diarioList', DB.get('diario',[]), 'diario');
  renderList('studyList',  DB.get('estudos',[]), 'study');
  renderList('treinoList', DB.get('treinos',[]), 'treino');
  const sorted = DB.get('compromissos',[]).slice().sort((a,b)=>new Date(a.data)-new Date(b.data));
  renderList('compList', sorted, 'comp');
  renderWeek();
  renderRoadmap();
  renderCerts();
}

// ── SAVES ─────────────────────────────────────────────────────────────────────

function saveDiary() {
  const ex=$('#diarioEx').value.trim(), dl=$('#diarioDl').value.trim(), pr=$('#diarioPr').value.trim();
  if (!ex&&!dl&&!pr) return;
  DB.push('diario', {id:uid(), data:new Date().toISOString(), executado:ex, delta:dl, proximo:pr});
  ['#diarioEx','#diarioDl','#diarioPr'].forEach(s=>$(s).value='');
  renderAll();
}

function saveStudy() {
  const tema=$('#sTema').value.trim();
  if (!tema) return;
  DB.push('estudos', {
    id:uid(), tema, minutos:Number($('#sMin').value||0),
    data:$('#sData').value||todayISO(), fase:$('#sFase').value,
    notas:$('#sNotas').value.trim(), createdAt:new Date().toISOString()
  });
  $('#sTema').value=''; $('#sMin').value=''; $('#sNotas').value='';
  renderAll();
}

function saveTreino() {
  const tipo=$('#tTipo').value;
  if (!tipo) return;
  DB.push('treinos', {
    id:uid(), tipo, data:$('#tData').value||todayISO(),
    duracao:Number($('#tDur').value||0), rpe:Number($('#tRpe').value||0),
    obs:$('#tObs').value.trim(), createdAt:new Date().toISOString()
  });
  $('#tDur').value=''; $('#tRpe').value=''; $('#tObs').value='';
  renderAll();
}

function saveStats() {
  DB.set('stats',{
    peso:$('#iPeso').value, deadlift:$('#iDeadlift').value,
    supino:$('#iSupino').value, agachamento:$('#iAgach').value,
    pullups:$('#iPu').value, gordura:$('#iGord').value
  });
  renderAll();
}

function saveComp() {
  const titulo=$('#cTit').value.trim(), data=$('#cData').value;
  if (!titulo||!data) return;
  DB.push('compromissos', {id:uid(), titulo, data, tipo:$('#cTipo').value, createdAt:new Date().toISOString()});
  $('#cTit').value=''; $('#cData').value='';
  renderAll();
}

// ── EXPORT / IMPORT ───────────────────────────────────────────────────────────

function exportJSON() {
  const blob = new Blob([JSON.stringify(DB.exportAll(),null,2)],{type:'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `operador-backup-${todayISO()}.json`;
  a.click(); URL.revokeObjectURL(a.href);
}

function importJSON(file) {
  const r = new FileReader();
  r.onload = () => { try { DB.importAll(JSON.parse(r.result)); renderAll(); } catch { alert('Arquivo inválido.'); } };
  r.readAsText(file);
}

// ── INIT ──────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  $$('.nav-link').forEach(b=>b.addEventListener('click',()=>goTo(b.dataset.section)));
  $('#menuBtn').addEventListener('click', openSidebar);
  $('#overlay').addEventListener('click', closeSidebar);

  $('#saveDiaryBtn') .addEventListener('click', saveDiary);
  $('#saveStudyBtn') .addEventListener('click', saveStudy);
  $('#saveTreinoBtn').addEventListener('click', saveTreino);
  $('#saveStatsBtn') .addEventListener('click', saveStats);
  $('#saveCompBtn')  .addEventListener('click', saveComp);

  $('#exportBtn').addEventListener('click', exportJSON);
  $('#importBtn').addEventListener('click', ()=>$('#importFile').click());
  $('#importFile').addEventListener('change', e=>e.target.files[0]&&importJSON(e.target.files[0]));
  $('#resetBtn').addEventListener('click', ()=>{
    if (confirm('Apagar todos os dados locais? Essa ação não pode ser desfeita.')) {
      DB.clearAll(); renderAll();
    }
  });

  // preencher data de hoje nos campos de data
  ['#sData','#tData'].forEach(s=>{ if($(s)) $(s).value=todayISO(); });

  renderAll();
  setInterval(updateClock, 1000);
});
