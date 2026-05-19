// ═══════════════════════════════════════════════════════════
//  CLOUDOPS DASHBOARD — 4 MESES (v11 FINAL - OPERATIONAL EXCELLENCE)
// ═══════════════════════════════════════════════════════════

const PLAN_START = new Date('2026-05-11');

const STUDY_PLAN = [
  {
    id: 'm1', month: 1, 
    title: 'GCP + Sprint Darede & Operação', subtitle: 'Jira, Troubleshooting, CI/CD, Linux Profundo', cssClass: 'm1',
    weeks: [
      {
        label: 'Semana 1: Fundação & CI/CD Pipeline',
        days: [
          { label: 'Segunda - Setup Base & Pipeline', tasks: [
            { id: 'w1_d1_1', text: 'GCP: Lab Diário', tag: 'gcp' },
            { id: 'w1_d1_2', text: 'Terraform: Estrutura Modular (VPC + EC2)', tag: 'terraform' },
            { id: 'w1_d1_3', text: 'CI/CD: Pipeline GitHub Actions (fmt, validate, plan)', tag: 'cicd' }
          ]},
          { label: 'Terça - ITSM & Incident Mgmt', tasks: [
            { id: 'w1_d2_1', text: 'Jira: Board Kanban + Workflow de Incidentes', tag: 'itsm' },
            { id: 'w1_d2_2', text: 'CI/CD: Quebrar Pipeline (tfsec fail) e abrir INC-001 no Jira', tag: 'cicd' },
            { id: 'w1_d2_3', text: 'Jira: Resolver INC-001 e realizar RCA técnico', tag: 'itsm' }
          ]},
          { label: 'Quarta - Acesso & Linux', tasks: [
            { id: 'w1_d3_1', text: 'Linux: Acesso via SSM + IAM Policy (Least Privilege)', tag: 'linux' },
            { id: 'w1_d3_2', text: 'Linux: User management (chown, chmod, visudo)', tag: 'linux' },
            { id: 'w1_d3_3', text: '♻️ Revisão: Recriar estrutura de SSM de cabeça', tag: 'review' }
          ]},
          { label: 'Quinta - Redes & Troubleshoot', tasks: [
            { id: 'w1_d4_1', text: 'AWS: VPC Flow Logs + Athena para análise de tráfego', tag: 'aws' },
            { id: 'w1_d4_2', text: 'Troubleshooting: Isolar tráfego com SG/NACL (lab maker)', tag: 'aws' }
          ]},
          { label: 'Sexta - Automatização Bash', tasks: [
            { id: 'w1_d5_1', text: '📜 Shell: Script para auditoria de permissões (check_permissions.sh)', tag: 'linux' },
            { id: 'w1_d5_2', text: '🔥 Rebuild: Infra completa da S1 do zero sem doc', tag: 'terraform' }
          ]}
        ]
      },
      {
        label: 'Semana 2: Logs, IAM Avançado e Patching',
        days: [
          { label: 'Segunda - IAM Profissional', tasks: [
            { id: 'w2_d1_1', text: 'AWS: Cross-account role (AssumeRole) - lab lab maker', tag: 'aws' },
            { id: 'w2_d1_2', text: 'Terraform: IAM Permission Boundaries via código', tag: 'terraform' }
          ]},
          { label: 'Terça - CloudWatch Logs', tasks: [
            { id: 'w2_d2_1', text: 'AWS: CloudWatch Agent (Logs + Métricas de Memória)', tag: 'aws' },
            { id: 'w2_d2_2', text: 'CW Insights: Queries avançadas para erro 5xx', tag: 'aws' }
          ]},
          { label: 'Quarta - Linux & Patching', tasks: [
            { id: 'w2_d3_1', text: 'Linux: Patching automatizado com SSM Patch Manager', tag: 'linux' },
            { id: 'w2_d3_2', text: 'Linux: Diagnóstico de processo com lsof/netstat/ss', tag: 'linux' },
            { id: 'w2_d3_3', text: '♻️ Revisão: Pipeline CI/CD com ambientes (PRD/HML)', tag: 'review' }
          ]},
          { label: 'Quinta - EBS & Storage', tasks: [
            { id: 'w2_d4_1', text: 'Linux: growpart, resize2fs para expansão de volume', tag: 'linux' },
            { id: 'w2_d4_2', text: 'AWS: Lifecycle Policy para Snapshots via Terraform', tag: 'terraform' }
          ]},
          { label: 'Sexta - RCA & Review', tasks: [
            { id: 'w2_d5_1', text: 'CI/CD: Validar TFSec/Checkov no pipeline', tag: 'cicd' },
            { id: 'w2_d5_2', text: '🔥 Rebuild: Todo pipeline de infra do zero', tag: 'cicd' }
          ]}
        ]
      },
      {
        label: 'Semana 3: Well-Architected & Caos',
        days: [
          { label: 'Segunda - SRE & Processos', tasks: [
            { id: 'w3_d1_1', text: 'Linux SRE: Htop, top, kill -9 e análise de zombie process', tag: 'linux' },
            { id: 'w3_d1_2', text: 'SRE: Estudo de caso (RCA) - Queda de serviço por falta de memória', tag: 'itsm' }
          ]},
          { label: 'Terça - FinOps & Custos', tasks: [
            { id: 'w3_d2_1', text: 'FinOps: Cost Explorer + Tagging Enforcement', tag: 'aws' },
            { id: 'w3_d2_2', text: 'Terraform: AWS Budgets via HCL', tag: 'terraform' }
          ]},
          { label: 'Quarta - Performance & Automação', tasks: [
            { id: 'w3_d3_1', text: 'Linux/Bash: Automação de limpeza de EBS ociosos', tag: 'linux' },
            { id: 'w3_d3_2', text: '♻️ Revisão: IAM Policy Evaluation Logic (debugar Access Denied)', tag: 'review' }
          ]},
          { label: 'Quinta - Resiliência', tasks: [
            { id: 'w3_d4_1', text: 'Linux: Apache Benchmark (ab) para stress test de carga', tag: 'linux' },
            { id: 'w3_d4_2', text: 'AWS: Regras de WAF para proteção de ALB', tag: 'aws' }
          ]},
          { label: 'Sexta - DR', tasks: [
            { id: 'w3_d5_1', text: 'AWS: Backup Fundamentals + Restore Test', tag: 'aws' },
            { id: 'w3_d5_2', text: '🔥 Rebuild: Todo o pilar de Resiliência da semana', tag: 'terraform' }
          ]}
        ]
      },
      {
        label: 'Semana 4: Containers & Mock Interview',
        days: [
          { label: 'Segunda - Docker Core', tasks: [
            { id: 'w4_d1_1', text: 'Docker: Dockerfile, volumes e docker-compose.yml', tag: 'linux' },
            { id: 'w4_d1_2', text: 'Docker: Logs de container para CloudWatch', tag: 'linux' }
          ]},
          { label: 'Terça - ECR & ECS', tasks: [
            { id: 'w4_d2_1', text: 'AWS: ECR (Push de imagem) e ECS Basics', tag: 'aws' },
            { id: 'w4_d2_2', text: 'IaC: Provisionar ECS Cluster básico via Terraform', tag: 'terraform' }
          ]},
          { label: 'Quarta - Kubernetes (Intro)', tasks: [
            { id: 'w4_d3_1', text: 'K8s: minikube, pods, services, deployments', tag: 'linux' },
            { id: 'w4_d3_2', text: '♻️ Revisão: Como Docker resolve os problemas que o deploy comum cria?', tag: 'review' }
          ]},
          { label: 'Quinta - IaC & Secret Mgmt', tasks: [
            { id: 'w4_d4_1', text: 'AWS: Secrets Manager (Gerenciar credenciais via código)', tag: 'aws' },
            { id: 'w4_d4_2', text: 'Terraform: Módulo de Secret + RDS', tag: 'terraform' }
          ]},
          { label: 'Sexta - Review & Interview', tasks: [
            { id: 'w4_d5_1', text: '🎙️ Mock Interview M1: Explique docker vs container, S3 lifecycle, e RCA de downtime', tag: 'itsm' },
            { id: 'w4_d5_2', text: '🔥 Rebuild: Docker Compose stack completa sem tutorial', tag: 'linux' }
          ]}
        ]
      }
    ]
  },
  {
    id: 'm2', month: 2, 
    title: 'Networking & Observability Full', subtitle: 'VPC + Stack Zabbix/Grafana', cssClass: 'm2',
    weeks: [
      {
        label: 'Semana 5: Infraestrutura de Redes',
        days: [
          { label: 'Segunda - Routing', tasks: [
            { id: 'w5_d1_1', text: 'Terraform: VPC Multi-AZ, NAT Gateway, Endpoints', tag: 'terraform' },
            { id: 'w5_d1_2', text: 'Linux: ipcalc para validar subnets', tag: 'linux' }
          ]},
          { label: 'Terça - Transit Gateway', tasks: [
            { id: 'w5_d2_1', text: 'AWS: Transit Gateway + Route Table propagation', tag: 'aws' },
            { id: 'w5_d2_2', text: 'Troubleshooting: Route Table misconfiguration', tag: 'aws' }
          ]},
          { label: 'Quarta - Revisão', tasks: [
            { id: 'w5_d3_1', text: '♻️ Revisão: Explique o fluxo de tráfego de uma requisição privada', tag: 'review' },
            { id: 'w5_d3_2', text: 'Terraform: Provisionar rede completa via módulos', tag: 'terraform' }
          ]},
          { label: 'Quinta - Jam Sessions', tasks: [
            { id: 'w5_d4_1', text: 'AWS Jam: Networking Troubleshooting (Dificuldade Alta)', tag: 'aws' },
            { id: 'w5_d4_2', text: 'Jira: Postmortem de incidente de rede do Jam', tag: 'itsm' }
          ]},
          { label: 'Sexta - Delivery', tasks: [
            { id: 'w5_d5_1', text: 'GitHub: Git flow completo (Branch PR Merge)', tag: 'cicd' },
            { id: 'w5_d5_2', text: '🔥 Rebuild: Criar rede completa via CLI/Terraform sem doc', tag: 'terraform' }
          ]}
        ]
      },
      {
        label: 'Semana 6: Monitoramento e Logs',
        days: [
          { label: 'Segunda - Zabbix Deploy', tasks: [
            { id: 'w6_d1_1', text: 'Linux: Script de deploy Zabbix + banco', tag: 'linux' },
            { id: 'w6_d1_2', text: 'Troubleshooting: systemctl status, logs (journalctl)', tag: 'linux' }
          ]},
          { label: 'Terça - IaC Zabbix', tasks: [
            { id: 'w6_d2_1', text: 'Terraform: User Data + Instância Zabbix', tag: 'terraform' },
            { id: 'w6_d2_2', text: 'Linux: Teste de conectividade porta 10050 (ss/netstat)', tag: 'linux' }
          ]},
          { label: 'Quarta - Revisão', tasks: [
            { id: 'w6_d3_1', text: '♻️ Revisão: Como você configuraria alerta de DB Down no Zabbix?', tag: 'review' },
            { id: 'w6_d3_2', text: 'AWS: EventBridge + SNS para alertas de status da EC2', tag: 'aws' }
          ]},
          { label: 'Quinta - SNS/EventBridge', tasks: [
            { id: 'w6_d4_1', text: 'Terraform: SNS topic + Subscription via IaC', tag: 'terraform' },
            { id: 'w6_d4_2', text: 'AWS: Integração Zabbix alerta -> SNS', tag: 'aws' }
          ]},
          { label: 'Sexta - Performance', tasks: [
            { id: 'w6_d5_1', text: 'Linux: Apache Benchmark (ab) load test', tag: 'linux' },
            { id: 'w6_d5_2', text: '🔥 Rebuild: Deploy do Zabbix do zero', tag: 'linux' }
          ]}
        ]
      },
      {
        label: 'Semana 7: APM, Grafana & Revisão',
        days: [
          { label: 'Segunda - Grafana Stack', tasks: [
            { id: 'w7_d1_1', text: 'Terraform: Provisionar EC2 Grafana + liberação porta 3000', tag: 'terraform' },
            { id: 'w7_d1_2', text: 'Linux: Instalação, DataSource Zabbix', tag: 'linux' }
          ]},
          { label: 'Terça - Dashboards', tasks: [
            { id: 'w7_d2_1', text: 'AWS: CloudWatch Agent custom metrics (Disk/Memory)', tag: 'aws' },
            { id: 'w7_d2_2', text: 'Terraform: Provisionar exportadores de métrica', tag: 'terraform' }
          ]},
          { label: 'Quarta - Revisão', tasks: [
            { id: 'w7_d3_1', text: '♻️ Revisão: Explique a diferença de Logs, Métricas e Traces', tag: 'review' },
            { id: 'w7_d3_2', text: 'Docker: Prometheus + Node Exporter', tag: 'linux' }
          ]},
          { label: 'Quinta - Integrations', tasks: [
            { id: 'w7_d4_1', text: 'Excalidraw: Desenhar arquitetura de monitoramento', tag: 'itsm' },
            { id: 'w7_d4_2', text: 'AWS: CloudWatch Dashboard customizado', tag: 'aws' }
          ]},
          { label: 'Sexta - Sprint End', tasks: [
            { id: 'w7_d5_1', text: 'GitHub: Documentar stack completa no Readme', tag: 'cicd' },
            { id: 'w7_d5_2', text: '🔥 Rebuild: Refazer DataSource Grafana de cabeça', tag: 'linux' }
          ]}
        ]
      },
      {
        label: 'Semana 8: DNS, Troubleshooting & RCA',
        days: [
          { label: 'Segunda - DNS Logs', tasks: [
            { id: 'w8_d1_1', text: 'Linux: awk/sed para parser de logs Nginx', tag: 'linux' },
            { id: 'w8_d1_2', text: 'AWS: CloudWatch Logs Insights (Queries avançadas)', tag: 'aws' }
          ]},
          { label: 'Terça - Route53', tasks: [
            { id: 'w8_d2_1', text: 'Linux: Troubleshooting DNS (dig, nslookup, resolve)', tag: 'linux' },
            { id: 'w8_d2_2', text: 'Terraform: Route53 zone + records', tag: 'terraform' }
          ]},
          { label: 'Quarta - Revisão', tasks: [
            { id: 'w8_d3_1', text: '♻️ Revisão: Explique como DNS failover funciona na prática', tag: 'review' },
            { id: 'w8_d3_2', text: 'AWS Jam: Troubleshooting DNS', tag: 'aws' }
          ]},
          { label: 'Quinta - Health Checks', tasks: [
            { id: 'w8_d4_1', text: 'AWS: Health Checks, R53 Failover', tag: 'aws' },
            { id: 'w8_d4_2', text: 'Script: dns_debug.sh (dig/nslookup/cache check)', tag: 'linux' }
          ]},
          { label: 'Sexta - Final M2', tasks: [
            { id: 'w8_d5_1', text: 'Jira: RCA de incidente de rede', tag: 'itsm' },
            { id: 'w8_d5_2', text: '🔥 Rebuild: Route53 Zone via Terraform do zero', tag: 'terraform' }
          ]}
        ]
      }
    ]
  },
  {
    id: 'm3', month: 3, 
    title: 'Well-Architected & CI/CD', subtitle: 'Incident Response + Automação', cssClass: 'm3',
    weeks: [
      {
        label: 'Semana 9: Resposta a Incidentes (RCA)',
        days: [
          { label: 'Segunda - Incident Mng', tasks: [
            { id: 'w9_d1_1', text: 'Skill Builder: AWS Incident Response Demonstrated', tag: 'aws' },
            { id: 'w9_d1_2', text: 'Jira: Documentar workflow de RCA corporativo', tag: 'itsm' }
          ]},
          { label: 'Terça - State Lock', tasks: [
            { id: 'w9_d2_1', text: 'Terraform: Migrar State para S3 + DynamoDB', tag: 'terraform' },
            { id: 'w9_d2_2', text: 'Terraform: Simular conflito de state lock', tag: 'terraform' }
          ]},
          { label: 'Quarta - CloudTrail RCA & Revisão', tasks: [
            { id: 'w9_d3_1', text: 'AWS: CloudTrail Lookup (deleção bucket)', tag: 'aws' },
            { id: 'w9_d3_2', text: '♻️ Revisão: Como gerenciar tfstate em time?', tag: 'review' }
          ]},
          { label: 'Quinta - Incident Isolation', tasks: [
            { id: 'w9_d4_1', text: 'Lab Maker: Simular EC2 comprometida (isolar SG)', tag: 'aws' },
            { id: 'w9_d4_2', text: 'CI/CD: Pipeline com linting rigoroso (tfsec)', tag: 'cicd' }
          ]},
          { label: 'Sexta - Forensics', tasks: [
            { id: 'w9_d5_1', text: 'Linux SRE: Análise forense via journalctl', tag: 'linux' },
            { id: 'w9_d5_2', text: '🔥 Rebuild: Configurar S3 Backend + DynamoDB Lock', tag: 'terraform' }
          ]}
        ]
      },
      {
        label: 'Semana 10: Governance & Pipelines',
        days: [
          { label: 'Segunda - Organizations', tasks: [
            { id: 'w10_d1_1', text: 'AWS: Organizations + SCP de região', tag: 'aws' },
            { id: 'w10_d1_2', text: 'Terraform: Drift (alterar tag manualmente e validar tf plan)', tag: 'terraform' }
          ]},
          { label: 'Terça - CI/CD Approval', tasks: [
            { id: 'w10_d2_1', text: 'CI/CD: GitHub Environments + Manual Approval', tag: 'cicd' },
            { id: 'w10_d2_2', text: 'Git: PRD/HML branch strategy', tag: 'cicd' }
          ]},
          { label: 'Quarta - Patching & Revisão', tasks: [
            { id: 'w10_d3_1', text: 'AWS: SSM Patch Manager', tag: 'aws' },
            { id: 'w10_d3_2', text: '♻️ Revisão: Como impedir deploys não aprovados?', tag: 'review' }
          ]},
          { label: 'Quinta - Compliance', tasks: [
            { id: 'w10_d4_1', text: 'AWS: S3 Bucket Policy (KMS Encriptação)', tag: 'aws' },
            { id: 'w10_d4_2', text: 'CI/CD: Testar fluxo Approve -> Apply', tag: 'cicd' }
          ]},
          { label: 'Sexta - Doc & Quest', tasks: [
            { id: 'w10_d5_1', text: 'Jira: Documentar regras da esteira', tag: 'itsm' },
            { id: 'w10_d5_2', text: '🔥 Rebuild: SCP de restrição de região', tag: 'aws' }
          ]}
        ]
      },
      {
        label: 'Semana 11: Nginx, ALB e 502/503',
        days: [
          { label: 'Segunda - Nginx Proxy', tasks: [
            { id: 'w11_d1_1', text: 'Linux: Nginx Reverse Proxy básico', tag: 'linux' },
            { id: 'w11_d1_2', text: 'HTTP: curl -v headers troubleshooting', tag: 'linux' }
          ]},
          { label: 'Terça - ALB Health', tasks: [
            { id: 'w11_d2_1', text: 'Terraform: ALB + Target Groups + Health Checks', tag: 'terraform' },
            { id: 'w11_d2_2', text: 'AWS: Target Health inspection', tag: 'aws' }
          ]},
          { label: 'Quarta - Errors & Revisão', tasks: [
            { id: 'w11_d3_1', text: 'AWS: Forçar erro 502 (Nginx down) e 503 (Target Unhealthy)', tag: 'aws' },
            { id: 'w11_d3_2', text: '♻️ Revisão: Como correlacionar CW Logs e o 502?', tag: 'review' }
          ]},
          { label: 'Quinta - Auto Scaling', tasks: [
            { id: 'w11_d4_1', text: 'Terraform: ASG + ALB', tag: 'terraform' },
            { id: 'w11_d4_2', text: 'Linux: Stress CPU test forçando scale-out', tag: 'linux' }
          ]},
          { label: 'Sexta - Spot', tasks: [
            { id: 'w11_d5_1', text: 'Terraform: Spot Fleet Launch Template', tag: 'terraform' },
            { id: 'w11_d5_2', text: '🔥 Rebuild: ALB + ASG de cabeça', tag: 'aws' }
          ]}
        ]
      },
      {
        label: 'Semana 12: Consolidação Ops',
        days: [
          { label: 'Segunda - DR', tasks: [
            { id: 'w12_d1_1', text: 'AWS: EBS Snapshots Restore Test', tag: 'aws' },
            { id: 'w12_d1_2', text: 'AWS Jam: Operations incident mgmt', tag: 'aws' }
          ]},
          { label: 'Terça - Disaster Recovery', tasks: [
            { id: 'w12_d2_1', text: 'Lab Maker: Recuperação de AZ', tag: 'aws' },
            { id: 'w12_d2_2', text: 'Jira: Documentar RCA do Jam', tag: 'itsm' }
          ]},
          { label: 'Quarta - Revisão', tasks: [
            { id: 'w12_d3_1', text: '♻️ Revisão: Explique a diferença de RPO e RTO', tag: 'review' },
            { id: 'w12_d3_2', text: 'Terraform: Refatoração final do módulo Computação', tag: 'terraform' }
          ]},
          { label: 'Quinta - Docker Docs', tasks: [
            { id: 'w12_d4_1', text: 'Docker: Stack App+Nginx+DB', tag: 'linux' },
            { id: 'w12_d4_2', text: 'ITSM: Guia de restrições do Learner Lab', tag: 'itsm' }
          ]},
          { label: 'Sexta - Mock Interview', tasks: [
            { id: 'w12_d5_1', text: '🎙️ Mock: State Lock, SCP, Auto Scaling, 502', tag: 'itsm' },
            { id: 'w12_d5_2', text: '🔥 Rebuild: Pipeline CI/CD completo', tag: 'cicd' }
          ]}
        ]
      }
    ]
  },
  {
    id: 'm4', month: 4, 
    title: 'FinOps, K8s & Projeto Final', subtitle: 'Custos, SLO e Portfolio', cssClass: 'm4',
    weeks: [
      {
        label: 'Semana 13: FinOps, S3 & K8s Intro',
        days: [
          { label: 'Segunda - FinOps', tasks: [
            { id: 'w13_d1_1', text: 'AWS: Lifecycle Rules (S3 Glacier)', tag: 'aws' },
            { id: 'w13_d1_2', text: 'AWS: Cost Explorer', tag: 'aws' }
          ]},
          { label: 'Terça - Budgets', tasks: [
            { id: 'w13_d2_1', text: 'Terraform: AWS Budgets via HCL', tag: 'terraform' },
            { id: 'w13_d2_2', text: 'AWS: Tag Enforcement (Tag Editor)', tag: 'aws' }
          ]},
          { label: 'Quarta - Revisão', tasks: [
            { id: 'w13_d3_1', text: '♻️ Revisão: Como otimizar custos de log?', tag: 'review' },
            { id: 'w13_d3_2', text: 'Docker: Logs Rotation', tag: 'linux' }
          ]},
          { label: 'Quinta - K8s Intro', tasks: [
            { id: 'w13_d4_1', text: 'K8s: Minikube + kubectl pods, services', tag: 'linux' },
            { id: 'w13_d4_2', text: 'K8s: ECS vs EKS (conceitual)', tag: 'aws' }
          ]},
          { label: 'Sexta - Docker Log', tasks: [
            { id: 'w13_d5_1', text: 'GitHub: Readme FinOps', tag: 'cicd' },
            { id: 'w13_d5_2', text: '🔥 Rebuild: Alertas de budget console', tag: 'aws' }
          ]}
        ]
      },
      {
        label: 'Semana 14: Projeto Final (Docker/ALB)',
        days: [
          { label: 'Segunda - Topologia', tasks: [
            { id: 'w14_d1_1', text: 'Excalidraw: Arquitetura Final (ALB+ASG+EC2+RDS)', tag: 'project' },
            { id: 'w14_d1_2', text: 'Terraform: Setup AWS Base', tag: 'terraform' }
          ]},
          { label: 'Terça - Docker App', tasks: [
            { id: 'w14_d2_1', text: 'Linux: EC2 User Data (Docker install)', tag: 'linux' },
            { id: 'w14_d2_2', text: 'Terraform: RDS MySQL', tag: 'terraform' }
          ]},
          { label: 'Quarta - Revisão', tasks: [
            { id: 'w14_d3_1', text: '♻️ Revisão: Como debugar logs de container?', tag: 'review' },
            { id: 'w14_d3_2', text: 'Terraform: IAM Instance Profile', tag: 'terraform' }
          ]},
          { label: 'Quinta - ALB', tasks: [
            { id: 'w14_d4_1', text: 'Terraform: ALB e Target Groups', tag: 'terraform' },
            { id: 'w14_d4_2', text: 'AWS: Health Check validation', tag: 'aws' }
          ]},
          { label: 'Sexta - CI/CD', tasks: [
            { id: 'w14_d5_1', text: 'Git: Infra AWS + App CI/CD', tag: 'cicd' },
            { id: 'w14_d5_2', text: '🔥 Rebuild: DB dev do zero', tag: 'terraform' }
          ]}
        ]
      },
      {
        label: 'Semana 15: Governança & SLO',
        days: [
          { label: 'Segunda - App Monitoring', tasks: [
            { id: 'w15_d1_1', text: 'CloudWatch: Dashboards Consolidado', tag: 'aws' },
            { id: 'w15_d1_2', text: 'Terraform: SNS Topic', tag: 'terraform' }
          ]},
          { label: 'Terça - Nginx Bypass', tasks: [
            { id: 'w15_d2_1', text: 'Linux: Troubleshooting Nginx direto', tag: 'linux' },
            { id: 'w15_d2_2', text: 'Terraform: SGs Least Privilege', tag: 'terraform' }
          ]},
          { label: 'Quarta - SLO', tasks: [
            { id: 'w15_d3_1', text: 'SRE: Definir SLO (99.5% disponibilidade)', tag: 'sre' },
            { id: 'w15_d3_2', text: '♻️ Revisão: Como mapear SAA com esse projeto?', tag: 'review' }
          ]},
          { label: 'Quinta - Compliance', tasks: [
            { id: 'w15_d4_1', text: 'AWS: Config Rules', tag: 'aws' },
            { id: 'w15_d4_2', text: 'AWS: Session Manager', tag: 'aws' }
          ]},
          { label: 'Sexta - Doc Final', tasks: [
            { id: 'w15_d5_1', text: 'Doc: Troubleshooting Guide do Projeto', tag: 'itsm' },
            { id: 'w15_d5_2', text: '🔥 Rebuild: Config Rule via CLI', tag: 'aws' }
          ]}
        ]
      },
      {
        label: 'Semana 16: O Arquiteto (Portfolio Final)',
        days: [
          { label: 'Segunda - QA', tasks: [
            { id: 'w16_d1_1', text: 'ITSM: Postmortem Final', tag: 'itsm' },
            { id: 'w16_d1_2', text: 'Projeto: QA (Restart Policy)', tag: 'linux' },
            { id: 'w16_d1_3', text: 'AWS: RDS Failover', tag: 'aws' }
          ]},
          { label: 'Terça - Deploy Final', tasks: [
            { id: 'w16_d2_1', text: 'Jira: Fechar Bugs', tag: 'itsm' },
            { id: 'w16_d2_2', text: '✅ Projeto Final Lançamento', tag: 'project' }
          ]},
          { label: 'Quarta - Review Final', tasks: [
            { id: 'w16_d3_1', text: '✅ AWS Cloud Quest Concluído', tag: 'aws' },
            { id: 'w16_d3_2', text: '♻️ Mega Review M4: Repassar o Projeto', tag: 'review' }
          ]},
          { label: 'Quinta - Carreira', tasks: [
            { id: 'w16_d4_1', text: 'Update LinkedIn (SRE/FinOps/CloudOps)', tag: 'itsm' },
            { id: 'w16_d4_2', text: 'GitHub: Pinned Repository', tag: 'cicd' }
          ]},
          { label: 'Sexta - Master', tasks: [
            { id: 'w16_d5_1', text: '✅ Portfolio Master', tag: 'aws' },
            { id: 'w16_d5_2', text: 'Mentoria: Apresentação Final', tag: 'itsm' },
            { id: 'w16_d5_3', text: '🔥 Rebuild: Tudo.', tag: 'terraform' }
          ]}
        ]
      }
    ]
  }
];

const DAILY_ROUTINE = [
  { time: '30min', desc: 'GCP Labs / Skill Builder Theory', cls: 'r-cert', icon: '📜' },
  { time: '60min', desc: 'Terraform & Linux & Docker (Terminal)', cls: 'r-terraform', icon: '⌨️' },
  { time: '30min', desc: 'Cloud Quest & RCA Troubleshooting', cls: 'r-quest', icon: '🔧' },
  { time: '15min', desc: 'Jira e Git Push', cls: 'r-github', icon: '📋' },
];

const STORAGE_KEY = 'cloudops-dashboard-v11-final';

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
  const current = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const start = new Date(PLAN_START.getFullYear(), PLAN_START.getMonth(), PLAN_START.getDate());
  const diffDays = Math.floor((current - start) / (1000 * 60 * 60 * 24));
  if (diffDays < 0) return 0;
  return Math.min(Math.floor(diffDays / 7) + 1, 16);
}

function getAllTaskIds() {
  const ids = [];
  STUDY_PLAN.forEach(m => m.weeks.forEach(w => w.days.forEach(d => d.tasks.forEach(t => ids.push(t.id)))));
  return ids;
}

function getCompletionStats(state) {
  const all = getAllTaskIds();
  const done = all.filter(id => state[id]);
  return { total: all.length, done: done.length, pct: all.length ? Math.round((done.length / all.length) * 100) : 0 };
}

function getMonthStats(month, state) {
  const tasks = [];
  month.weeks.forEach(w => w.days.forEach(d => d.tasks.forEach(t => tasks.push(t.id))));
  const done = tasks.filter(id => state[id]);
  return { total: tasks.length, done: done.length, pct: tasks.length ? Math.round((done.length / tasks.length) * 100) : 0 };
}

function renderClock() {
  const el = document.getElementById('live-clock');
  const now = new Date();
  el.textContent = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
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
          const globalWeek = (mi * 4) + wi + 1;
          const isCurrentWk = globalWeek === currentWeek;
          return `
            <div class="week-group" style="margin-bottom: 20px;">
              <div class="week-title">${week.label} ${isCurrentWk ? '<span style="color:var(--accent-green)">(Atual)</span>' : ''}</div>
              ${week.days.map(day => `
                <div class="day-group">
                  <div class="day-label">${day.label}</div>
                  ${day.tasks.map(task => {
                    const checked = !!state[task.id];
                    return `
                      <div class="task-item ${checked ? 'checked' : ''}" data-task="${task.id}">
                        <div class="task-checkbox ${checked ? 'checked' : ''}">✓</div>
                        <span class="task-text">${task.text} <span class="task-tag tag-${task.tag}">${task.tag.toUpperCase()}</span></span>
                      </div>`;
                  }).join('')}
                </div>
              `).join('')}
            </div>
          `;
        }).join('')}
      </div>`;

    container.appendChild(block);
  });

  document.querySelectorAll('.month-header').forEach(header => {
    header.addEventListener('click', () => {
      header.classList.toggle('expanded');
      header.nextElementSibling.classList.toggle('open');
    });
  });

  document.querySelectorAll('.task-item').forEach(item => {
    item.addEventListener('click', () => {
      const id = item.dataset.task;
      const s = loadState();
      s[id] = !s[id];
      const today = new Date().toDateString();
      if (s[id] && s._lastActivity !== today) {
        s._streak = (s._streak || 0) + 1;
        s._lastActivity = today;
      }
      saveState(s);
      renderStudyPlan(s);
      renderOverallProgress(s);
      renderStats(s);
      addLog(s[id] ? 'ok' : 'warn', `[${id}] ${s[id] ? 'Task concluída' : 'Task reaberta'}`);
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
    { label: 'Linux/Docker', color: '#ffd700' },
    { label: 'CI/CD', color: '#00ff41' },
    { label: 'ITSM/SRE', color: '#4b8ffd' },
    { label: 'Project', color: '#ff5f5f' },
    { label: 'Review', color: '#a8e6cf' },
  ];
  const container = document.getElementById('legend');
  container.innerHTML = tags.map(t => `
    <div class="legend-item">
      <div class="legend-dot" style="background:${t.color}"></div>
      ${t.label}
    </div>
  `).join('');
}

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

  addLog('info', 'Dashboard v11 Final carregado');
  addLog('info', `Semana atual: ${getCurrentWeek() || 'pré-início'}`);

  document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm('⚠️ Resetar todo o board?')) {
      localStorage.removeItem(STORAGE_KEY);
      const s = loadState();
      renderStudyPlan(s);
      renderOverallProgress(s);
      renderStats(s);
      addLog('warn', 'Sistema resetado');
    }
  });
});