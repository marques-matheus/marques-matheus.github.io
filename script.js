// ═══════════════════════════════════════════════════════════
//  CLOUDOPS DASHBOARD — Data & Logic (v.Final)
// ═══════════════════════════════════════════════════════════

const PLAN_START = new Date('2026-05-11'); // Start: Segunda-feira, 11 de maio de 2026

const STUDY_PLAN = [
  {
    id: 'm1',
    month: 1,
    title: 'GCP Sprint + WA Deep Dive & Acessos',
    subtitle: 'Deadline GCP + Teoria e Prática (Ops)',
    cssClass: 'm1',
    weeks: [
      {
        label: 'Semana 1 (11/05 a 15/05)',
        tasks: [
          { id: 't1', text: 'GCP: Fazer 1 Lab Prático por dia (Foco em Load Balancing e Dev Apps)', tag: 'gcp' },
          { id: 't2', text: 'Terraform & CI/CD: Subir EC2 básica + Criar Pipeline GitHub Actions (Lint/Validate)', tag: 'terraform' },
          { id: 't3', text: 'Deep Dive: Teoria WA (Pilar Segurança) + Prática AWS Lab Maker (IAM Roles)', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 2 (18/05 a 22/05)',
        tasks: [
          { id: 't4', text: 'GCP: Fazer 1 Lab Prático por dia (Foco em Rede Segura)', tag: 'gcp' },
          { id: 't5', text: 'Terraform: Remote State no S3 e DynamoDB para Locking', tag: 'terraform' },
          { id: 't6', text: 'Deep Dive: Revisão IAM Base + Prática AWS Jam Journey: Security', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 3 (25/05 a 29/05)',
        tasks: [
          { id: 't7', text: 'GCP: Fazer 1 Lab Prático por dia (APIs de ML) — Deadline batendo', tag: 'gcp' },
          { id: 't8', text: 'Linux & SRE: Gerenciamento de Processos (top, htop, ps, kill)', tag: 'linux' },
          { id: 't9', text: 'Deep Dive: Teoria WA (Custos/Resiliência) + Prática Advanced Labs', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 4 (01/06 a 05/06)',
        tasks: [
          { id: 't10', text: '✅ GCP: Emitir Certificado Foundations (Deadline 02/06)', tag: 'gcp' },
          { id: 't11', text: 'AWS Cloud Quest: Iniciar trilha de Security (Missões 1-4)', tag: 'aws' },
          { id: 't12', text: 'Terraform: Variáveis, Locals e modularização base', tag: 'terraform' },
        ]
      },
    ]
  },
  {
    id: 'm2',
    month: 2,
    title: 'Networking & Observability Full',
    subtitle: 'VPC + Stack Zabbix/Grafana/Dynatrace',
    cssClass: 'm2',
    weeks: [
      {
        label: 'Semana 5 (08/06 a 12/06)',
        tasks: [
          { id: 't13', text: 'Skill Builder: AWS Network Monitoring and Troubleshooting', tag: 'aws' },
          { id: 't14', text: 'Terraform: Criar VPC Multi-AZ, Subnets e IGW do zero', tag: 'terraform' },
          { id: 't15', text: 'AWS Cloud Quest: Continuar trilha de Security', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 6 (15/06 a 19/06)',
        tasks: [
          { id: 't16', text: 'Linux & Terraform: Subir Zabbix Server via User Data', tag: 'linux' },
          { id: 't17', text: 'Skill Builder: AWS Observability (Logs, Metrics, Traces)', tag: 'aws' },
          { id: 't18', text: 'Deep Dive AWS: Networking Core Badge (Hybrid Connectivity)', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 7 (22/06 a 26/06)',
        tasks: [
          { id: 't19', text: 'Terraform: Integrar Grafana como Dashboard do Zabbix', tag: 'terraform' },
          { id: 't20', text: 'Deep Dive SRE: Dynatrace APM vs CloudWatch (Estudo de Arquitetura)', tag: 'sre' },
          { id: 't21', text: 'AWS Jam Journey: Networking / Connectivity', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 8 (29/06 a 03/07)',
        tasks: [
          { id: 't22', text: 'CloudWatch: Setup de Log Groups e Alertas via Terraform', tag: 'terraform' },
          { id: 't23', text: 'Fechar AWS Cloud Quest: Security (Badge obtida)', tag: 'aws' },
          { id: 't24', text: 'Revisão: Arquitetura de Redes & Monitoramento para CLF', tag: 'aws' },
        ]
      },
    ]
  },
  {
    id: 'm3',
    month: 3,
    title: 'Well-Architected & CI/CD',
    subtitle: 'Incident Response + Automação',
    cssClass: 'm3',
    weeks: [
      {
        label: 'Semana 9 (06/07 a 10/07)',
        tasks: [
          { id: 't25', text: 'Skill Builder: AWS Incident Response Demonstrated', tag: 'aws' },
          { id: 't26', text: 'Terraform: Iniciar Pipeline no GitHub Actions (Plan/Apply)', tag: 'cicd' },
          { id: 't27', text: 'AWS Cloud Quest: Iniciar trilha Solutions Architect', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 10 (13/07 a 17/07)',
        tasks: [
          { id: 't28', text: 'Skill Builder: Advanced Well-Architected Best Practices (Pilar 1-2)', tag: 'aws' },
          { id: 't29', text: 'GitHub Actions: Implementar aprovação manual e locks', tag: 'cicd' },
          { id: 't30', text: 'Continuar AWS Cloud Quest: Solutions Architect', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 11 (20/07 a 24/07)',
        tasks: [
          { id: 't31', text: 'Linux & SRE: Simulação de Incidente (derrubar e recuperar serviço)', tag: 'linux' },
          { id: 't32', text: 'Skill Builder: Advanced Well-Architected Lab (Pilar 3-4)', tag: 'aws' },
          { id: 't33', text: 'Deep Dive AWS: Compute Core Badge (ASG e Spot Fleet)', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 12 (27/07 a 31/07)',
        tasks: [
          { id: 't34', text: 'AWS Jam Journey: Operations / Incident Management', tag: 'aws' },
          { id: 't35', text: 'Concluir Compute Core Badge e Advanced WAF Labs', tag: 'aws' },
          { id: 't36', text: 'Documentação: Guia prático de falhas comuns para Mentoria', tag: 'aws' },
        ]
      },
    ]
  },
  {
    id: 'm4',
    month: 4,
    title: 'FinOps & Multi-Cloud',
    subtitle: 'Cloud8, Custos e Projeto Final',
    cssClass: 'm4',
    weeks: [
      {
        label: 'Semana 13 (03/08 a 07/08)',
        tasks: [
          { id: 't37', text: 'FinOps: Mapeamento de Custos AWS (Cost Explorer, Trusted Advisor)', tag: 'aws' },
          { id: 't38', text: 'Deep Dive SRE: Ecossistema Cloud8 (Automação e Redução de Custos BR)', tag: 'sre' },
          { id: 't39', text: 'GCP: Iniciar trilha "Google Cloud for AWS Professionals"', tag: 'multicloud' },
        ]
      },
      {
        label: 'Semana 14 (10/08 a 14/08)',
        tasks: [
          { id: 't40', text: 'Projeto Final: Setup Infra Multi-Cloud (AWS+GCP) via Terraform', tag: 'terraform' },
          { id: 't41', text: 'Skill Builder: AWS Cost Management and Optimization', tag: 'aws' },
          { id: 't42', text: 'Continuar Cloud Quest: Solutions Architect', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 15 (17/08 a 21/08)',
        tasks: [
          { id: 't43', text: 'Projeto Final: Peer Connectivity e Monitoramento Centralizado', tag: 'multicloud' },
          { id: 't44', text: 'Skill Builder: Builder Lab - Automating Governance with AWS Config', tag: 'aws' },
          { id: 't45', text: 'Revisão Geral: Mapeamento SAA/Ops para a realidade CLF-C02', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 16 (24/08 a 28/08)',
        tasks: [
          { id: 't46', text: 'Projeto Final Concluído e Documentado no GitHub', tag: 'multicloud' },
          { id: 't47', text: 'Fechar AWS Cloud Quest: Solutions Architect', tag: 'aws' },
          { id: 't48', text: 'Portfolio Pronto: CloudOps/SAA Master', tag: 'aws' },
        ]
      },
    ]
  },
];

const DAILY_ROUTINE = [
  { time: '30min', desc: 'Skill Builder / GCP (Teoria Guiada)', cls: 'r-cert', icon: '📜' },
  { time: '45min', desc: 'Terraform & Linux — Bater lata no terminal', cls: 'r-terraform', icon: '⌨️' },
  { time: '30min', desc: 'Cloud Quest / AWS Jam (Terças e Quintas)', cls: 'r-quest', icon: '🎮' },
  { time: '45min', desc: 'Engenharia de Lousa & Troubleshooting (Excalidraw)', cls: 'r-deep', icon: '🧠' },
  { time: '15min', desc: 'Fechamento: Commits e Logs no ERROS.md', cls: 'r-github', icon: '🔒' },
];

// ─── State ───
const STORAGE_KEY = 'cloudops-dashboard-v1';

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getCurrentWeek() {
  const now = new Date();
  const diff = now - PLAN_START;
  if (diff < 0) return 0;
  return Math.min(Math.floor(diff / (7 * 24 * 60 * 60 * 1000)) + 1, 16);
}

function getAllTaskIds() {
  const ids = [];
  STUDY_PLAN.forEach(m => m.weeks.forEach(w => w.tasks.forEach(t => ids.push(t.id))));
  return ids;
}

function getCompletionStats(state) {
  const all = getAllTaskIds();
  const done = all.filter(id => state[id]);
  return { total: all.length, done: done.length, pct: all.length ? Math.round((done.length / all.length) * 100) : 0 };
}

function getMonthStats(month, state) {
  const tasks = [];
  month.weeks.forEach(w => w.tasks.forEach(t => tasks.push(t.id)));
  const done = tasks.filter(id => state[id]);
  return { total: tasks.length, done: done.length, pct: tasks.length ? Math.round((done.length / tasks.length) * 100) : 0 };
}

// ─── Rendering ───
function renderClock() {
  const el = document.getElementById('live-clock');
  const now = new Date();
  const time = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  el.textContent = time;
}

function renderWeekBadge() {
  const el = document.getElementById('week-badge');
  const w = getCurrentWeek();
  el.textContent = w === 0 ? 'PRÉ-INÍCIO' : w > 16 ? 'CONCLUÍDO' : `SEMANA ${w}/16`;
}

function renderOverallProgress(state) {
  const { pct } = getCompletionStats(state);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-pct').textContent = pct + '%';
}

function renderStats(state) {
  const { total, done } = getCompletionStats(state);
  document.getElementById('stat-completed').textContent = done;
  document.getElementById('stat-remaining').textContent = total - done;
  document.getElementById('stat-week').textContent = getCurrentWeek() || '—';
  document.getElementById('stat-streak').textContent = calcStreak(state);
  document.getElementById('tasks-badge').textContent = `${done}/${total} tasks`;
}

function calcStreak(state) {
  return state._streak || 0;
}

function renderStudyPlan(state) {
  const container = document.getElementById('study-plan');
  container.innerHTML = '';
  const currentWeek = getCurrentWeek();
  let globalWeek = 0;

  STUDY_PLAN.forEach((month, mi) => {
    const mStats = getMonthStats(month, state);
    const block = document.createElement('div');
    block.className = 'month-block';

    const isCurrentMonth = currentWeek > 0 && currentWeek >= (mi * 4 + 1) && currentWeek <= (mi * 4 + 4);
    const expanded = isCurrentMonth || mi === 0;

    block.innerHTML = `
      <div class="month-header ${month.cssClass} ${expanded ? 'expanded' : ''}" data-month="${mi}">
        <span class="month-number">M${month.month}</span>
        <span class="month-title-text">${month.title} <span style="color:var(--text-muted);font-size:0.65rem;font-weight:400">${month.subtitle}</span></span>
        <span class="month-progress">${mStats.done}/${mStats.total}</span>
        <div class="mini-progress">
          <div class="mini-progress-fill" style="width:${mStats.pct}%;background:${getMonthColor(mi)}"></div>
        </div>
        <span class="month-chevron">▶</span>
      </div>
      <div class="month-content ${expanded ? 'open' : ''}">
        ${month.weeks.map((week, wi) => {
      globalWeek++;
      const wk = mi * 4 + wi + 1;
      const isCurrent = wk === currentWeek;
      return `
            <div class="week-group">
              <div class="week-label ${isCurrent ? 'current-week' : ''}">${isCurrent ? '▸ ' : ''}${week.label}${isCurrent ? ' (atual)' : ''}</div>
              ${week.tasks.map(task => {
        const checked = !!state[task.id];
        return `
                  <div class="task-item ${checked ? 'checked' : ''}" data-task="${task.id}">
                    <div class="task-checkbox ${checked ? 'checked' : ''}">✓</div>
                    <span class="task-text">${task.text} <span class="task-tag tag-${task.tag}">${task.tag.toUpperCase()}</span></span>
                  </div>`;
      }).join('')}
            </div>`;
    }).join('')}
      </div>`;

    container.appendChild(block);
  });

  document.querySelectorAll('.month-header').forEach(header => {
    header.addEventListener('click', () => {
      header.classList.toggle('expanded');
      const content = header.nextElementSibling;
      content.classList.toggle('open');
    });
  });

  document.querySelectorAll('.task-item').forEach(item => {
    item.addEventListener('click', () => {
      const id = item.dataset.task;
      const s = loadState();
      s[id] = !s[id];
      const today = new Date().toDateString();
      if (s[id]) {
        if (s._lastActivity !== today) {
          s._streak = (s._streak || 0) + 1;
          s._lastActivity = today;
        }
      }
      saveState(s);
      renderStudyPlan(s);
      renderOverallProgress(s);
      renderStats(s);
      addLog(s[id] ? 'ok' : 'warn', s[id] ? `Task ${id} concluída` : `Task ${id} desmarcada`);
    });
  });
}

function getMonthColor(i) {
  return ['#00ff41', '#00d4ff', '#bd93f9', '#ffd700'][i];
}

function renderDailyRoutine() {
  const container = document.getElementById('daily-routine');
  container.innerHTML = DAILY_ROUTINE.map(r => `
    <div class="routine-item ${r.cls}">
      <div class="routine-time">${r.icon} ${r.time}</div>
      <div class="routine-desc">${r.desc}</div>
    </div>
  `).join('');
}

function renderLegend() {
  const tags = [
    { label: 'GCP', color: '#4285f4' },
    { label: 'AWS', color: '#ff9900' },
    { label: 'Terraform', color: '#7b42bc' },
    { label: 'Linux', color: '#ffd700' },
    { label: 'CI/CD', color: '#00ff41' },
    { label: 'SRE', color: '#ff3366' },
    { label: 'Multi-Cloud', color: '#00d4ff' },
  ];
  const container = document.getElementById('legend');
  container.innerHTML = tags.map(t => `
    <div class="legend-item">
      <div class="legend-dot" style="background:${t.color}"></div>
      ${t.label}
    </div>
  `).join('');
}

// ─── Terminal Log ───
const logLines = [];
function addLog(level, msg) {
  const now = new Date();
  const ts = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  logLines.push({ ts, level, msg });
  if (logLines.length > 30) logLines.shift();
  renderLog();
}

function renderLog() {
  const container = document.getElementById('terminal-log');
  container.innerHTML = logLines.map((l, i) => `
    <div class="log-line" style="animation-delay:${i * 0.05}s">
      <span class="timestamp">[${l.ts}]</span>
      <span class="level-${l.level}">[${l.level.toUpperCase()}]</span>
      <span class="msg">${l.msg}</span>
    </div>
  `).join('');
  container.scrollTop = container.scrollHeight;
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  const state = loadState();

  renderClock();
  setInterval(renderClock, 1000);
  renderWeekBadge();
  renderOverallProgress(state);
  renderStats(state);
  renderStudyPlan(state);
  renderDailyRoutine();
  renderLegend();

  addLog('info', 'Dashboard CloudOps inicializado');
  addLog('info', `Semana atual: ${getCurrentWeek() || 'pré-início'}`);
  addLog('ok', 'Sistema de persistência localStorage ativo');

  document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm('⚠️ Resetar todo o progresso? Esta ação não pode ser desfeita.')) {
      localStorage.removeItem(STORAGE_KEY);
      const s = loadState();
      renderStudyPlan(s);
      renderOverallProgress(s);
      renderStats(s);
      addLog('warn', 'Progresso resetado');
    }
  });
});