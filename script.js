// ═══════════════════════════════════════════════════════════
//  CLOUDOPS DASHBOARD — Data & Logic (v.Final)
// ═══════════════════════════════════════════════════════════

const PLAN_START = new Date('2026-05-04'); // Segunda-feira, 4 de maio

const STUDY_PLAN = [
  {
    id: 'm1',
    month: 1,
    title: 'GCP Catch-up + Base IaC',
    subtitle: 'Deadline GCP 02/06 + Managing Access',
    cssClass: 'm1',
    weeks: [
      {
        label: 'Semana 1 (04/05 a 08/05)',
        tasks: [
          { id: 't1', text: 'GCP: Condensar Módulos "Rede/Segurança" e "Dados/ML/IA"', tag: 'gcp' },
          { id: 't2', text: 'Terraform: Provisionar EC2 básica sem usar o console', tag: 'terraform' },
          { id: 't3', text: 'Deep Dive AWS: Curso "CloudOps Engineer - Managing Access"', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 2 (11/05 a 15/05)',
        tasks: [
          { id: 't4', text: 'GCP: Prática 1 (Load Balancing) e Prática 2 (Dev Apps)', tag: 'gcp' },
          { id: 't5', text: 'Terraform: Remote State no S3, DynamoDB Lock e Variáveis', tag: 'terraform' },
          { id: 't6', text: 'Deep Dive AWS: Concluir "Managing Access" e revisar PARC', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 3 (18/05 a 22/05)',
        tasks: [
          { id: 't7', text: 'GCP: Prática 3 (Como criar uma rede segura)', tag: 'gcp' },
          { id: 't8', text: 'Terraform: Provisionar VPC, Subnets e Security Groups', tag: 'terraform' },
          { id: 't9', text: 'Deep Dive AWS: Iniciar Security Core Badge', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 4 (25/05 a 29/05)',
        tasks: [
          { id: 't10', text: 'GCP: Prática 4 (APIs de ML - Preparação Final)', tag: 'gcp' },
          { id: 't11', text: 'Terraform: CloudWatch básico (Alarmes EC2) via IaC', tag: 'terraform' },
          { id: 't12', text: 'Deep Dive AWS: Concluir Security Core Badge', tag: 'aws' },
        ]
      },
    ]
  },
  {
    id: 'm2',
    month: 2,
    title: 'Deadline EdN & Observabilidade',
    subtitle: 'Prática 4, Zabbix & CQ Security',
    cssClass: 'm2',
    weeks: [
      {
        label: 'Semana 5 (01/06 a 05/06)',
        tasks: [
          { id: 't13', text: '✅ GCP: Concluir Prática 4 e Emitir Certificado (Prazo: 02/06)', tag: 'gcp' },
          { id: 't14', text: 'Terraform: Subir Zabbix Server via user_data', tag: 'terraform' },
          { id: 't15', text: 'AWS Cloud Quest: Iniciar trilha Security', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 6 (08/06 a 12/06)',
        tasks: [
          { id: 't16', text: 'Terraform: Subir Grafana + Datasource Zabbix', tag: 'terraform' },
          { id: 't17', text: 'CloudWatch: Integração avançada e Logs Insights', tag: 'aws' },
          { id: 't18', text: 'Deep Dive AWS: Iniciar Networking Core Badge', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 7 (15/06 a 19/06)',
        tasks: [
          { id: 't19', text: 'Deep Dive AWS: Concluir Networking Core Badge', tag: 'aws' },
          { id: 't20', text: 'Review: Stack completa de observabilidade', tag: 'linux' },
          { id: 't21', text: 'Continuar AWS Cloud Quest: Security', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 8 (22/06 a 26/06)',
        tasks: [
          { id: 't22', text: 'Integrar Grafana + CloudWatch como datasource', tag: 'aws' },
          { id: 't23', text: '✅ Fechar AWS Cloud Quest: Security', tag: 'aws' },
          { id: 't24', text: 'Preparar repositório Git para pipeline CI/CD', tag: 'cicd' },
        ]
      },
    ]
  },
  {
    id: 'm3',
    month: 3,
    title: 'Well-Architected & CI/CD',
    subtitle: 'Labs Avançados & CQ Sol. Architect',
    cssClass: 'm3',
    weeks: [
      {
        label: 'Semana 9 (29/06 a 03/07)',
        tasks: [
          { id: 't25', text: 'GitHub Actions: Workflow terraform fmt + validate', tag: 'cicd' },
          { id: 't26', text: 'Deep Dive AWS: Advanced Well-Architected Best Practices Lab', tag: 'aws' },
          { id: 't27', text: 'Iniciar trilha AWS Cloud Quest: Solutions Architect', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 10 (06/07 a 10/07)',
        tasks: [
          { id: 't28', text: 'GitHub Actions: Terraform apply com approval manual', tag: 'cicd' },
          { id: 't29', text: 'Documentar Runbook: SLA/SLO para a infraestrutura', tag: 'sre' },
          { id: 't30', text: 'Continuar AWS Cloud Quest: Solutions Architect', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 11 (13/07 a 17/07)',
        tasks: [
          { id: 't31', text: 'Simulação de Troubleshooting (incidentes controlados)', tag: 'sre' },
          { id: 't32', text: 'Deep Dive AWS: Continuar Advanced Well-Architected Labs', tag: 'aws' },
          { id: 't33', text: 'Iniciar Compute Core Badge', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 12 (20/07 a 24/07)',
        tasks: [
          { id: 't34', text: 'Fechamento dos Advanced Well-Architected Labs', tag: 'aws' },
          { id: 't35', text: 'Concluir Compute Core Badge', tag: 'aws' },
          { id: 't36', text: 'Pipeline CI/CD completo, funcional e documentado', tag: 'cicd' },
        ]
      },
    ]
  },
  {
    id: 'm4',
    month: 4,
    title: 'CloudOps Multi-Cloud',
    subtitle: 'Projeto Final AWS+GCP',
    cssClass: 'm4',
    weeks: [
      {
        label: 'Semana 13 (27/07 a 31/07)',
        tasks: [
          { id: 't37', text: 'Iniciar GCP Infra for AWS Professionals', tag: 'multicloud' },
          { id: 't38', text: 'Projeto Final: Setup do repositório Terraform multi-cloud', tag: 'terraform' },
          { id: 't39', text: 'Iniciar Storage Core Badge', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 14 (03/08 a 07/08)',
        tasks: [
          { id: 't40', text: 'Projeto Final: VPC espelhada AWS + GCP via código', tag: 'multicloud' },
          { id: 't41', text: 'Técnica de Lousa: Arquitetura multi-cloud no Excalidraw', tag: 'multicloud' },
          { id: 't42', text: 'Continuar GCP Infra for AWS Professionals', tag: 'gcp' },
        ]
      },
      {
        label: 'Semana 15 (10/08 a 14/08)',
        tasks: [
          { id: 't43', text: 'Projeto Final: Compute + Storage espelhados', tag: 'multicloud' },
          { id: 't44', text: 'Concluir Storage Core Badge', tag: 'aws' },
          { id: 't45', text: 'Continuar AWS Cloud Quest: Solutions Architect', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 16 (17/08 a 21/08)',
        tasks: [
          { id: 't46', text: '✅ Projeto Final concluído e repositório validado', tag: 'multicloud' },
          { id: 't47', text: '✅ Concluir GCP Infra for AWS Professionals', tag: 'gcp' },
          { id: 't48', text: '✅ Fechar CQ: Solutions Architect & Review Geral do Portfólio', tag: 'aws' },
        ]
      },
    ]
  },
];

const DAILY_ROUTINE = [
  { time: '30min', desc: 'Certificação / Skill Builder (GCP Foundations no Mês 1)', cls: 'r-cert', icon: '📜' },
  { time: '45min', desc: 'Lab Terraform — Bater lata com código HCL', cls: 'r-terraform', icon: '⌨️' },
  { time: '30min', desc: 'AWS Cloud Quest (Security -> Solutions Architect)', cls: 'r-quest', icon: '🎮' },
  { time: '45min', desc: 'Deep Dive & Engenharia de Lousa (Feynman)', cls: 'r-deep', icon: '🧠' },
  { time: '15min', desc: 'Fechamento GitHub (Commits, ERROS.md)', cls: 'r-github', icon: '🔒' },
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