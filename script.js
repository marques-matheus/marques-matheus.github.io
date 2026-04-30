// ═══════════════════════════════════════════════════════════
//  CLOUDOPS DASHBOARD — Data & Logic
// ═══════════════════════════════════════════════════════════

const PLAN_START = new Date('2026-05-04'); // First Monday of May

const STUDY_PLAN = [
  {
    id: 'm1',
    month: 1,
    title: 'Força-Tarefa GCP + Base IaC',
    subtitle: 'Prazo EdN — Maio',
    cssClass: 'm1',
    weeks: [
      {
        label: 'Semana 1',
        tasks: [
          { id: 't1', text: 'Iniciar Google Cloud Computing Foundations', tag: 'gcp' },
          { id: 't2', text: 'Provisionar EC2 básica com Terraform', tag: 'terraform' },
          { id: 't3', text: 'Configurar provider AWS e backend S3', tag: 'terraform' },
        ]
      },
      {
        label: 'Semana 2',
        tasks: [
          { id: 't4', text: 'Módulo Networking (VPC) no GCP Foundations', tag: 'gcp' },
          { id: 't5', text: 'Provisionar VPC básica na AWS via Terraform', tag: 'terraform' },
          { id: 't6', text: 'Deep Dive: IAM Google vs IAM AWS (comparativo)', tag: 'gcp' },
        ]
      },
      {
        label: 'Semana 3',
        tasks: [
          { id: 't7', text: 'Módulo Compute & Storage no GCP Foundations', tag: 'gcp' },
          { id: 't8', text: 'Terraform: módulos reutilizáveis (EC2 + VPC)', tag: 'terraform' },
          { id: 't9', text: 'Preparar material de mentoria IAM', tag: 'gcp' },
        ]
      },
      {
        label: 'Semana 4',
        tasks: [
          { id: 't10', text: '✅ Concluir GCP Foundations — Prazo EdN', tag: 'gcp' },
          { id: 't11', text: 'Terraform: Security Groups e outputs', tag: 'terraform' },
          { id: 't12', text: 'Revisão geral e commit de toda IaC Mês 1', tag: 'terraform' },
        ]
      },
    ]
  },
  {
    id: 'm2',
    month: 2,
    title: 'Observabilidade e Linux',
    subtitle: 'Peso na AWS',
    cssClass: 'm2',
    weeks: [
      {
        label: 'Semana 5',
        tasks: [
          { id: 't13', text: 'Subir Zabbix Server via Terraform', tag: 'terraform' },
          { id: 't14', text: 'Configurar monitoramento de EC2 no Zabbix', tag: 'linux' },
          { id: 't15', text: 'Iniciar Security Core Badge (Skill Builder)', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 6',
        tasks: [
          { id: 't16', text: 'Subir Grafana via Terraform + datasource Zabbix', tag: 'terraform' },
          { id: 't17', text: 'Criar dashboards de métricas no Grafana', tag: 'linux' },
          { id: 't18', text: 'CloudWatch: métricas customizadas e alarmes', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 7',
        tasks: [
          { id: 't19', text: 'CloudWatch Logs Insights: queries avançadas', tag: 'aws' },
          { id: 't20', text: 'Concluir Security Core Badge', tag: 'aws' },
          { id: 't21', text: 'Iniciar Networking Core Badge', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 8',
        tasks: [
          { id: 't22', text: 'Concluir Networking Core Badge', tag: 'aws' },
          { id: 't23', text: 'Integrar Grafana + CloudWatch como datasource', tag: 'aws' },
          { id: 't24', text: 'Review: stack completa de observabilidade', tag: 'linux' },
        ]
      },
    ]
  },
  {
    id: 'm3',
    month: 3,
    title: 'Cultura SRE, CI/CD e Simuladores',
    subtitle: 'Automação & Ops',
    cssClass: 'm3',
    weeks: [
      {
        label: 'Semana 9',
        tasks: [
          { id: 't25', text: 'GitHub Actions: workflow terraform fmt + validate', tag: 'cicd' },
          { id: 't26', text: 'Pipeline: terraform plan como PR check', tag: 'cicd' },
          { id: 't27', text: 'Iniciar AWS Cloud Quest: Cloud Operations', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 10',
        tasks: [
          { id: 't28', text: 'GitHub Actions: terraform apply com approval', tag: 'cicd' },
          { id: 't29', text: 'Documentar Runbook: SLA/SLO para o ambiente', tag: 'sre' },
          { id: 't30', text: 'Continuar Cloud Quest: Cloud Operations', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 11',
        tasks: [
          { id: 't31', text: 'Simulação de Troubleshooting (incidentes)', tag: 'sre' },
          { id: 't32', text: 'Documentar runbooks de resposta a incidentes', tag: 'sre' },
          { id: 't33', text: 'Iniciar Compute Core Badge', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 12',
        tasks: [
          { id: 't34', text: '✅ Fechar Cloud Quest: Cloud Operations', tag: 'aws' },
          { id: 't35', text: 'Concluir Compute Core Badge', tag: 'aws' },
          { id: 't36', text: 'Pipeline CI/CD completo e documentado', tag: 'cicd' },
        ]
      },
    ]
  },
  {
    id: 'm4',
    month: 4,
    title: 'CloudOps Multi-Cloud',
    subtitle: 'Projeto Final',
    cssClass: 'm4',
    weeks: [
      {
        label: 'Semana 13',
        tasks: [
          { id: 't37', text: 'Iniciar GCP Infra for AWS Professionals', tag: 'multicloud' },
          { id: 't38', text: 'Projeto Final: setup do repositório Terraform multi-cloud', tag: 'terraform' },
          { id: 't39', text: 'Iniciar Storage Core Badge', tag: 'aws' },
        ]
      },
      {
        label: 'Semana 14',
        tasks: [
          { id: 't40', text: 'Projeto Final: VPC espelhada AWS + GCP', tag: 'multicloud' },
          { id: 't41', text: 'Técnica de Lousa: arquitetura multi-cloud no Excalidraw', tag: 'multicloud' },
          { id: 't42', text: 'Continuar GCP Infra for AWS Professionals', tag: 'gcp' },
        ]
      },
      {
        label: 'Semana 15',
        tasks: [
          { id: 't43', text: 'Projeto Final: compute + storage espelhados', tag: 'multicloud' },
          { id: 't44', text: 'Concluir Storage Core Badge', tag: 'aws' },
          { id: 't45', text: 'Preparar aula complexa com técnica Feynman', tag: 'multicloud' },
        ]
      },
      {
        label: 'Semana 16',
        tasks: [
          { id: 't46', text: '✅ Projeto Final completo e documentado', tag: 'multicloud' },
          { id: 't47', text: '✅ Concluir GCP Infra for AWS Professionals', tag: 'gcp' },
          { id: 't48', text: '🎓 Review geral — CloudOps Multi-Cloud pronto', tag: 'multicloud' },
        ]
      },
    ]
  },
];

const DAILY_ROUTINE = [
  { time: '30min', desc: 'Certificação / Skill Builder (GCP Foundations no Mês 1)', cls: 'r-cert', icon: '📜' },
  { time: '45min', desc: 'Lab Terraform — escrever código HCL', cls: 'r-terraform', icon: '⌨️' },
  { time: '30min', desc: 'AWS Cloud Quest (Gamificação Ops)', cls: 'r-quest', icon: '🎮' },
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
  // Simple streak: count consecutive days with at least one task checked
  // (stored as streak in state)
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

  // Event listeners
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
      // update streak
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

  // Reset button
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
