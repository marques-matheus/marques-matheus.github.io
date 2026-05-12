// ═══════════════════════════════════════════════════════════
//  CLOUDOPS DASHBOARD — 4 MESES (ALTA DENSIDADE / SKILL BUILDER)
// ═══════════════════════════════════════════════════════════

const PLAN_START = new Date('2026-05-11');

const STUDY_PLAN = [
  {
    id: 'm1', month: 1, 
    title: 'GCP + Sprint Darede & WA', subtitle: 'Foco Jira, Troubleshooting e Deadline', cssClass: 'm1',
    weeks: [
      {
        label: 'Semana 1: Fundação Operacional (Imersão Darede)',
        days: [
          { label: 'Segunda - Setup Base & CI/CD Intro', tasks: [
            { id: 't1', text: 'GCP: Lab Diário (Load Balancing)', tag: 'gcp' },
            { id: 't2', text: 'Vídeo: Assistir "GitHub Actions para Iniciantes" (LinuxTips no YouTube)', tag: 'cicd' },
            { id: 't3', text: 'Terraform: Criar VPC Privada + EC2 (SSM)', tag: 'terraform' },
            { id: 't4', text: 'CI/CD: Subir o pipeline básico (fmt e validate)', tag: 'cicd' }
          ]},
          { label: 'Terça - ITSM & Debug de Esteira', tasks: [
            { id: 't5', text: 'GCP: Lab Diário', tag: 'gcp' },
            { id: 't6', text: 'Jira: Criar board Kanban e configurar workflow de chamados (To Do > In Progress > Done)', tag: 'itsm' },
            { id: 't7', text: 'CI/CD: Quebrar a formatação do Terraform de propósito, dar Push e ler o log de erro no Actions', tag: 'cicd' },
            { id: 't8', text: 'Jira: Abrir ticket INC-001 relatando a quebra do pipeline e mover para Done ao corrigir', tag: 'itsm' }
          ]},
          { label: 'Quarta - Acesso & Linux Básico', tasks: [
            { id: 't9', text: 'GCP: Lab Diário', tag: 'gcp' },
            { id: 't10', text: 'Skill Builder: AWS Systems Manager - Session Manager (Curso Curto/Vídeo)', tag: 'aws' },
            { id: 't11', text: 'Linux: Acessar EC2, criar arquivo, alterar dono (chown) e permissão (chmod)', tag: 'linux' },
            { id: 't12', text: 'Linux: Criar um Shell Script simples (.sh) para automatizar a criação de usuários', tag: 'linux' }
          ]},
          { label: 'Quinta - Redes & Troubleshooting', tasks: [
            { id: 't13', text: 'GCP: Lab Diário', tag: 'gcp' },
            { id: 't14', text: 'Skill Builder: AWS Network Troubleshooting (Identificar falhas de Roteamento)', tag: 'aws' },
            { id: 't15', text: 'AWS Lab Maker: Criar Lab com EC2 isolada e configurar os VPC Endpoints do SSM do zero', tag: 'aws' },
            { id: 't16', text: 'Prática: Testar conectividade usando comandos ping, curl e telnet no terminal', tag: 'linux' }
          ]},
          { label: 'Sexta - Versionamento Básico', tasks: [
            { id: 't17', text: 'GCP: Lab Diário', tag: 'gcp' },
            { id: 't18', text: 'Git: Praticar comandos essenciais (git branch, git checkout, git merge)', tag: 'cicd' },
            { id: 't19', text: 'GitHub: Abrir um Pull Request simulado, aprovar e fazer o Merge na main', tag: 'cicd' },
            { id: 't20', text: 'Jira: Configurar automação simples (ex: se ticket fechar, adicionar comentário padrão de RCA)', tag: 'itsm' }
          ]}
        ]
      },
      {
        label: 'Semana 2: Operação e Logs (Mão na Massa N2)',
        days: [
          { label: 'Segunda - IaC Avançado e IAM', tasks: [
            { id: 't21', text: 'GCP: Lab Diário', tag: 'gcp' },
            { id: 't22', text: 'Skill Builder: IAM Access Analyzer (Teoria e Prática)', tag: 'aws' },
            { id: 't23', text: 'Terraform: Refatorar main.tf utilizando variáveis (variables.tf) e outputs (outputs.tf)', tag: 'terraform' },
            { id: 't24', text: 'GitHub: Passar credenciais da AWS via GitHub Secrets (Emulação de CI seguro)', tag: 'cicd' }
          ]},
          { label: 'Terça - Monitoramento Ativo', tasks: [
            { id: 't25', text: 'GCP: Lab Diário', tag: 'gcp' },
            { id: 't26', text: 'Skill Builder: Amazon CloudWatch Logs Deep Dive', tag: 'aws' },
            { id: 't27', text: 'Prática: Instalar e configurar o CloudWatch Agent manualmente na EC2', tag: 'linux' },
            { id: 't28', text: 'AWS: Criar Alarme no CloudWatch para uso de CPU acima de 80%', tag: 'aws' }
          ]},
          { label: 'Quarta - Caos e Análise de Logs', tasks: [
            { id: 't29', text: 'GCP: Lab Diário', tag: 'gcp' },
            { id: 't30', text: 'Linux: Instalar pacote "stress" e forçar CPU a 100% para triggar o Alarme AWS', tag: 'linux' },
            { id: 't31', text: 'Linux: Ler e interpretar logs reais em /var/log/auth.log e /var/log/syslog', tag: 'linux' },
            { id: 't32', text: 'Jira: Abrir INC-002 de CPU alta e escrever o RCA baseando-se no log do CloudWatch', tag: 'itsm' }
          ]},
          { label: 'Quinta - Storage Troubleshooting', tasks: [
            { id: 't33', text: 'GCP: Lab Diário', tag: 'gcp' },
            { id: 't34', text: 'Skill Builder: Amazon EBS Snapshots e Lifecycle Policies', tag: 'aws' },
            { id: 't35', text: 'Linux: Diagnosticar disco com `df -h` e `du -sh` e achar os maiores arquivos (find)', tag: 'linux' },
            { id: 't36', text: 'AWS/Linux: Aumentar o tamanho do volume EBS a quente e usar `growpart` no terminal', tag: 'aws' }
          ]},
          { label: 'Sexta - DevSecOps & Entrevista', tasks: [
            { id: 't37', text: 'GCP: Lab Diário', tag: 'gcp' },
            { id: 't38', text: 'Skill Builder: AWS Security Hub Overview', tag: 'aws' },
            { id: 't39', text: 'CI/CD: Instalar e rodar o `checkov` ou `tfsec` localmente para validar o Terraform', tag: 'cicd' },
            { id: 't40', text: 'Soft Skills: Gravar áudio de 2min explicando o troubleshooting de Disco (Mock Interview)', tag: 'itsm' }
          ]}
        ]
      },
      {
        label: 'Semana 3: SRE & Well-Architected',
        days: [
          { label: 'Segunda - Processos SRE', tasks: [
            { id: 't41', text: 'GCP: Lab Diário (APIs ML) - Foco Deadline', tag: 'gcp' },
            { id: 't42', text: 'Linux SRE: Gerenciamento de Processos (top, kill)', tag: 'linux' }
          ]},
          { label: 'Terça - WA Custos', tasks: [
            { id: 't43', text: 'GCP: Lab Diário', tag: 'gcp' },
            { id: 't44', text: 'Skill Builder: Deep Dive WA Pilar Otimização de Custos', tag: 'aws' }
          ]},
          { label: 'Quarta - Prática FinOps', tasks: [
            { id: 't45', text: 'GCP: Lab Diário', tag: 'gcp' },
            { id: 't46', text: 'Lab Maker: Gerar ambiente para análise de instâncias ociosas', tag: 'aws' }
          ]},
          { label: 'Quinta - WA Resiliência', tasks: [
            { id: 't47', text: 'GCP: Lab Diário', tag: 'gcp' },
            { id: 't48', text: 'Skill Builder: Deep Dive WA Pilar de Confiabilidade', tag: 'aws' }
          ]},
          { label: 'Sexta - Alta Disponibilidade', tasks: [
            { id: 't49', text: 'GCP: Lab Diário', tag: 'gcp' },
            { id: 't50', text: 'AWS Jam Journey / Lab Maker: Cenário de falha em AZ', tag: 'aws' }
          ]}
        ]
      },
      {
        label: 'Semana 4: Certificação & AWS Core',
        days: [
          { label: 'Segunda - Checkpoint GCP', tasks: [
            { id: 't51', text: '✅ GCP: Emitir Certificado Foundations (Deadline 02/06)', tag: 'gcp' },
            { id: 't52', text: 'Skill Builder: IAM Deep Dive Lab', tag: 'aws' }
          ]},
          { label: 'Terça - Gamificação Ops', tasks: [
            { id: 't53', text: 'AWS Cloud Quest: Trilha de Security (Missões 1 e 2)', tag: 'aws' },
            { id: 't54', text: 'Linux: Comandos de rede (ping, traceroute, netstat)', tag: 'linux' }
          ]},
          { label: 'Quarta - Estruturas', tasks: [
            { id: 't55', text: 'AWS Cloud Quest: Trilha de Security (Missões 3 e 4)', tag: 'aws' },
            { id: 't56', text: 'Skill Builder: VPC Flow Logs Hands-on', tag: 'aws' }
          ]},
          { label: 'Quinta - Terraform', tasks: [
            { id: 't57', text: 'Terraform: Criar módulo básico (Ex: Security Group)', tag: 'terraform' },
            { id: 't58', text: 'Jira: Documentar criação do Módulo no board', tag: 'itsm' }
          ]},
          { label: 'Sexta - Review Mensal', tasks: [
            { id: 't59', text: 'GitHub: Documentar o código no README.md (Portfolio)', tag: 'cicd' },
            { id: 't60', text: 'Skill Builder: AWS Shared Responsibility Model', tag: 'aws' }
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
          { label: 'Segunda', tasks: [
            { id: 't61', text: 'Skill Builder: AWS Network Troubleshooting (Teoria)', tag: 'aws' },
            { id: 't62', text: 'Terraform: Iniciar código da VPC Multi-AZ', tag: 'terraform' }
          ]},
          { label: 'Terça', tasks: [
            { id: 't63', text: 'Skill Builder: Transit Gateway Basics', tag: 'aws' },
            { id: 't64', text: 'Terraform: Criar Subnets, IGW e Route Tables', tag: 'terraform' }
          ]},
          { label: 'Quarta', tasks: [
            { id: 't65', text: 'Lab Maker: Provisionar ambiente com erro de VPC Peering', tag: 'aws' },
            { id: 't66', text: 'Terraform: Implementar NAT Gateway/Endpoints', tag: 'terraform' }
          ]},
          { label: 'Quinta', tasks: [
            { id: 't67', text: 'AWS Jam: Networking Challenges (Troubleshooting)', tag: 'aws' },
            { id: 't68', text: 'Jira: Relatar RCA das falhas de rede do Jam', tag: 'itsm' }
          ]},
          { label: 'Sexta', tasks: [
            { id: 't69', text: 'AWS Cloud Quest: Continuar trilha de Security', tag: 'aws' },
            { id: 't70', text: 'Git: Commitar VPC Completa via Action', tag: 'cicd' }
          ]}
        ]
      },
      {
        label: 'Semana 6: Stack de Monitoramento',
        days: [
          { label: 'Segunda', tasks: [
            { id: 't71', text: 'Skill Builder: AWS Observability (Logs, Metrics, Traces)', tag: 'aws' },
            { id: 't72', text: 'Linux: Criar script Shell (.sh) para instalar Zabbix', tag: 'linux' }
          ]},
          { label: 'Terça', tasks: [
            { id: 't73', text: 'Skill Builder: CloudWatch Metrics Deep Dive', tag: 'aws' },
            { id: 't74', text: 'Terraform: Subir Zabbix Server passando User Data', tag: 'terraform' }
          ]},
          { label: 'Quarta', tasks: [
            { id: 't75', text: 'Skill Builder: AWS X-Ray Basics', tag: 'aws' },
            { id: 't76', text: 'Linux: Troubleshooting do agente Zabbix na porta 10050', tag: 'linux' }
          ]},
          { label: 'Quinta', tasks: [
            { id: 't77', text: 'Skill Builder: Amazon EventBridge Fundamentals', tag: 'aws' },
            { id: 't78', text: 'Terraform: Integrar tópicos SNS para alertas', tag: 'terraform' }
          ]},
          { label: 'Sexta', tasks: [
            { id: 't79', text: 'Deep Dive: Iniciar Networking Core Badge', tag: 'aws' },
            { id: 't80', text: 'AWS Cloud Quest: Security Míssions', tag: 'aws' }
          ]}
        ]
      },
      {
        label: 'Semana 7: APM & Dashboards',
        days: [
          { label: 'Segunda', tasks: [
            { id: 't81', text: 'Skill Builder: CloudWatch Dashboards Lab', tag: 'aws' },
            { id: 't82', text: 'Terraform: Provisionar EC2 para o Grafana', tag: 'terraform' }
          ]},
          { label: 'Terça', tasks: [
            { id: 't83', text: 'Lab Maker: Gerar infra para testar EC2 Monitoring', tag: 'aws' },
            { id: 't84', text: 'Linux: Configurar integração Zabbix -> Grafana via API', tag: 'linux' }
          ]},
          { label: 'Quarta', tasks: [
            { id: 't85', text: 'SRE: Estudo Comparativo - Dynatrace APM vs CloudWatch', tag: 'sre' },
            { id: 't86', text: 'Terraform: Exportar métricas de disco via código', tag: 'terraform' }
          ]},
          { label: 'Quinta', tasks: [
            { id: 't87', text: 'Skill Builder: Application Insights for .NET/SQL', tag: 'aws' },
            { id: 't88', text: 'Arquitetura: Desenhar fluxo de monitoramento no Excalidraw', tag: 'itsm' }
          ]},
          { label: 'Sexta', tasks: [
            { id: 't89', text: 'AWS Jam Journey: Networking / Connectivity', tag: 'aws' },
            { id: 't90', text: 'GitHub: Atualizar Readme com arquitetura de Logs', tag: 'cicd' }
          ]}
        ]
      },
      {
        label: 'Semana 8: Fechamento de Redes',
        days: [
          { label: 'Segunda', tasks: [
            { id: 't91', text: 'Skill Builder: VPC Traffic Mirroring', tag: 'aws' },
            { id: 't92', text: 'Terraform: Centralizar CloudWatch Log Groups', tag: 'terraform' }
          ]},
          { label: 'Terça', tasks: [
            { id: 't93', text: 'Skill Builder: Route 53 Routing Policies', tag: 'aws' },
            { id: 't94', text: 'Linux: Troubleshooting DNS (dig, nslookup)', tag: 'linux' }
          ]},
          { label: 'Quarta', tasks: [
            { id: 't95', text: '✅ Fechar AWS Cloud Quest: Security Badge', tag: 'aws' },
            { id: 't96', text: 'AWS Jam: Resolver challenge de DNS/Routing', tag: 'aws' }
          ]},
          { label: 'Quinta', tasks: [
            { id: 't97', text: 'Lab Maker: Testar DNS Failover Multi-Region', tag: 'aws' },
            { id: 't98', text: 'Mentoria: Desenhar Lousa sobre Redes AWS', tag: 'itsm' }
          ]},
          { label: 'Sexta', tasks: [
            { id: 't99', text: 'Skill Builder: Review SAA Networking Domains', tag: 'aws' },
            { id: 't100', text: 'Git: Fechar Sprint de Networking e Commitar', tag: 'cicd' }
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
        label: 'Semana 9: Resposta a Incidentes',
        days: [
          { label: 'Segunda', tasks: [
            { id: 't101', text: 'Skill Builder: AWS Incident Response Demonstrated', tag: 'aws' },
            { id: 't102', text: 'Jira: Documentar workflow de RCA corporativo', tag: 'itsm' }
          ]},
          { label: 'Terça', tasks: [
            { id: 't103', text: 'Skill Builder: AWS Systems Manager Incident Manager', tag: 'aws' },
            { id: 't104', text: 'Terraform: Migrar para S3 Backend Remoto', tag: 'terraform' }
          ]},
          { label: 'Quarta', tasks: [
            { id: 't105', text: 'Skill Builder: AWS Config Basics', tag: 'aws' },
            { id: 't106', text: 'Terraform: Adicionar DynamoDB State Lock', tag: 'terraform' }
          ]},
          { label: 'Quinta', tasks: [
            { id: 't107', text: 'Lab Maker: Simular EC2 comprometida (Isolamento de Rede)', tag: 'aws' },
            { id: 't108', text: 'CI/CD: Refatorar YAML do GitHub Actions', tag: 'cicd' }
          ]},
          { label: 'Sexta', tasks: [
            { id: 't109', text: 'AWS Cloud Quest: Iniciar Trilha Solutions Architect', tag: 'aws' },
            { id: 't110', text: 'Linux SRE: Análise Forense básica de logs pós-incidente', tag: 'linux' }
          ]}
        ]
      },
      {
        label: 'Semana 10: WA e Aprovações',
        days: [
          { label: 'Segunda', tasks: [
            { id: 't111', text: 'Skill Builder: WA Best Practices (Pilares Segurança/Custos)', tag: 'aws' },
            { id: 't112', text: 'Terraform: Pipeline completo Plan -> Apply', tag: 'cicd' }
          ]},
          { label: 'Terça', tasks: [
            { id: 't113', text: 'Lab Maker: Cenário IAM Roles & Trust Relationships', tag: 'aws' },
            { id: 't114', text: 'CI/CD: Configurar Environments no GitHub (Require Approval)', tag: 'cicd' }
          ]},
          { label: 'Quarta', tasks: [
            { id: 't115', text: 'Skill Builder: AWS Security Hub Overview', tag: 'aws' },
            { id: 't116', text: 'Linux: Simular patching de segurança em instâncias', tag: 'linux' }
          ]},
          { label: 'Quinta', tasks: [
            { id: 't117', text: 'Lab Maker: Forçar encriptação KMS via S3 Bucket Policy', tag: 'aws' },
            { id: 't118', text: 'CI/CD: Testar aprovação manual de código ao vivo', tag: 'cicd' }
          ]},
          { label: 'Sexta', tasks: [
            { id: 't119', text: 'AWS Cloud Quest: Solutions Architect (Storage)', tag: 'aws' },
            { id: 't120', text: 'Jira: Documentar regras de aprovação da esteira', tag: 'itsm' }
          ]}
        ]
      },
      {
        label: 'Semana 11: Caos e Auto Scaling',
        days: [
          { label: 'Segunda', tasks: [
            { id: 't121', text: 'Skill Builder: Amazon EC2 Auto Scaling', tag: 'aws' },
            { id: 't122', text: 'Linux Chaos: Injetar carga de CPU (stress) para forçar Alarmes', tag: 'linux' }
          ]},
          { label: 'Terça', tasks: [
            { id: 't123', text: 'Skill Builder: Elastic Load Balancing Deep Dive', tag: 'aws' },
            { id: 't124', text: 'Terraform: Codificar Application Load Balancer (ALB)', tag: 'terraform' }
          ]},
          { label: 'Quarta', tasks: [
            { id: 't125', text: 'Skill Builder: WA Best Practices (Pilares Confiabilidade/Performance)', tag: 'aws' },
            { id: 't126', text: 'Terraform: Linkar ASG + ALB + Target Groups', tag: 'terraform' }
          ]},
          { label: 'Quinta', tasks: [
            { id: 't127', text: 'Deep Dive: Compute Core Badge (Auto Scaling)', tag: 'aws' },
            { id: 't128', text: 'AWS CLI: Gerenciar instâncias no ASG via terminal', tag: 'linux' }
          ]},
          { label: 'Sexta', tasks: [
            { id: 't129', text: 'Deep Dive: Compute Core Badge (Spot Instances)', tag: 'aws' },
            { id: 't130', text: 'Terraform: Provisionar Launch Template com Spot Fleet', tag: 'terraform' }
          ]}
        ]
      },
      {
        label: 'Semana 12: Consolidação Ops',
        days: [
          { label: 'Segunda', tasks: [
            { id: 't131', text: 'Skill Builder: AWS Fault Injection Simulator (Teoria SRE)', tag: 'aws' },
            { id: 't132', text: 'AWS Jam Journey: Operations (Incident Mgmt)', tag: 'aws' }
          ]},
          { label: 'Terça', tasks: [
            { id: 't133', text: 'Lab Maker: Testar recuperação de AZ caída', tag: 'aws' },
            { id: 't134', text: 'AWS Jam Journey: Operations (Finalização)', tag: 'aws' }
          ]},
          { label: 'Quarta', tasks: [
            { id: 't135', text: '✅ Concluir Compute Core Badge', tag: 'aws' },
            { id: 't136', text: 'Terraform: Refatoração final do módulo de Computação', tag: 'terraform' }
          ]},
          { label: 'Quinta', tasks: [
            { id: 't137', text: 'Skill Builder: Disaster Recovery on AWS', tag: 'aws' },
            { id: 't138', text: 'Doc: Guia de restrições do Learner Lab (Para Mentoria)', tag: 'itsm' }
          ]},
          { label: 'Sexta', tasks: [
            { id: 't139', text: 'AWS Cloud Quest: Solutions Architect (Networking)', tag: 'aws' },
            { id: 't140', text: 'Mentoria: Lousa e planejamento de conteúdo CloudOps', tag: 'aws' }
          ]}
        ]
      }
    ]
  },
  {
    id: 'm4', month: 4, 
    title: 'FinOps & Multi-Cloud', subtitle: 'Cloud8, Custos e Projeto Final', cssClass: 'm4',
    weeks: [
      {
        label: 'Semana 13: Controle de Custos',
        days: [
          { label: 'Segunda', tasks: [
            { id: 't141', text: 'Skill Builder: AWS Cost Explorer / Trusted Advisor', tag: 'aws' },
            { id: 't142', text: 'FinOps: Definir estratégia de Tagging Obrigatória', tag: 'itsm' }
          ]},
          { label: 'Terça', tasks: [
            { id: 't143', text: 'Skill Builder: AWS Budgets and Alerts', tag: 'aws' },
            { id: 't144', text: 'Terraform: Implementar AWS Budgets via HCL', tag: 'terraform' }
          ]},
          { label: 'Quarta', tasks: [
            { id: 't145', text: 'SRE: Estudo do Ecossistema Cloud8 (Automação BR)', tag: 'sre' },
            { id: 't146', text: 'Skill Builder: Cost Optimization Techniques', tag: 'aws' }
          ]},
          { label: 'Quinta', tasks: [
            { id: 't147', text: 'GCP: Retomar módulo "Google Cloud for AWS Prof" (IAM/VPC)', tag: 'multicloud' },
            { id: 't148', text: 'Lab Maker: Right-sizing de EC2 (Redução de custo)', tag: 'aws' }
          ]},
          { label: 'Sexta', tasks: [
            { id: 't149', text: 'GCP: "Google Cloud for AWS Prof" (Compute Engine)', tag: 'multicloud' },
            { id: 't150', text: 'GitHub: Documentar FinOps e Tagging no README', tag: 'cicd' }
          ]}
        ]
      },
      {
        label: 'Semana 14: O Grande Projeto',
        days: [
          { label: 'Segunda', tasks: [
            { id: 't151', text: 'Skill Builder: AWS Compute Optimizer Overview', tag: 'aws' },
            { id: 't152', text: 'Projeto Final: Excalidraw Topologia AWS+GCP', tag: 'itsm' }
          ]},
          { label: 'Terça', tasks: [
            { id: 't153', text: 'GCP: "Google Cloud for AWS Prof" (Cloud Storage)', tag: 'multicloud' },
            { id: 't154', text: 'Terraform: Setup da infra base AWS do Projeto', tag: 'terraform' }
          ]},
          { label: 'Quarta', tasks: [
            { id: 't155', text: 'GCP: "Google Cloud for AWS Prof" (Databases)', tag: 'multicloud' },
            { id: 't156', text: 'Terraform: Setup da infra base GCP do Projeto', tag: 'terraform' }
          ]},
          { label: 'Quinta', tasks: [
            { id: 't157', text: 'Skill Builder: Cost Management Labs Práticos', tag: 'aws' },
            { id: 't158', text: 'Terraform: Integrar Outputs AWS para Inputs GCP', tag: 'terraform' }
          ]},
          { label: 'Sexta', tasks: [
            { id: 't159', text: 'AWS Cloud Quest: Solutions Architect (Databases)', tag: 'aws' },
            { id: 't160', text: 'Git: Commit da infraestrutura Multi-Cloud parcial', tag: 'cicd' }
          ]}
        ]
      },
      {
        label: 'Semana 15: Conectividade Cross-Cloud',
        days: [
          { label: 'Segunda', tasks: [
            { id: 't161', text: 'Skill Builder: AWS Site-to-Site VPN', tag: 'aws' },
            { id: 't162', text: 'Projeto: Arquitetar túnel IPsec AWS <-> GCP', tag: 'multicloud' }
          ]},
          { label: 'Terça', tasks: [
            { id: 't163', text: 'GCP: "Google Cloud for AWS Prof" (Networking)', tag: 'multicloud' },
            { id: 't164', text: 'Projeto: Configurar chaves e BGP da VPN (Teoria/Prática)', tag: 'multicloud' }
          ]},
          { label: 'Quarta', tasks: [
            { id: 't165', text: 'Skill Builder: Automating Governance com AWS Config', tag: 'aws' },
            { id: 't166', text: 'Terraform: Habilitar AWS Config na VPC', tag: 'terraform' }
          ]},
          { label: 'Quinta', tasks: [
            { id: 't167', text: 'Lab Maker: Testar compliance rules do AWS Config', tag: 'aws' },
            { id: 't168', text: 'Revisão Lousa: Mapeamento da ementa SAA-C03', tag: 'aws' }
          ]},
          { label: 'Sexta', tasks: [
            { id: 't169', text: 'AWS Cloud Quest: Reta final das missões de Arquitetura', tag: 'aws' },
            { id: 't170', text: 'Projeto: Documentar topologia no repositório final', tag: 'cicd' }
          ]}
        ]
      },
      {
        label: 'Semana 16: O Arquiteto',
        days: [
          { label: 'Segunda', tasks: [
            { id: 't171', text: 'Skill Builder: AWS Well-Architected Tool Hands-on', tag: 'aws' },
            { id: 't172', text: 'Projeto: Teste de ponta a ponta e ping AWS->GCP', tag: 'multicloud' }
          ]},
          { label: 'Terça', tasks: [
            { id: 't173', text: 'Lab Maker: Simular Arquitetura Multi-tier (Web/App/DB)', tag: 'aws' },
            { id: 't174', text: '✅ Projeto Final Documentado e Lançado no GitHub', tag: 'cicd' }
          ]},
          { label: 'Quarta', tasks: [
            { id: 't175', text: '✅ Fechar AWS Cloud Quest: Solutions Architect', tag: 'aws' },
            { id: 't176', text: 'Jira: Fechar Epic "Preparação Solutions Architect"', tag: 'itsm' }
          ]},
          { label: 'Quinta', tasks: [
            { id: 't177', text: 'Skill Builder: Exam Readiness Solutions Architect / SysOps', tag: 'aws' },
            { id: 't178', text: 'Carreira: Update LinkedIn (Multi-Cloud, FinOps, SRE)', tag: 'itsm' }
          ]},
          { label: 'Sexta', tasks: [
            { id: 't179', text: '✅ Portfolio CloudOps Master Completo', tag: 'aws' },
            { id: 't180', text: 'Mentoria Final: Preparar discurso para alunos da EdN', tag: 'itsm' }
          ]}
        ]
      }
    ]
  }
];

const DAILY_ROUTINE = [
  { time: '30min', desc: 'GCP Labs / Skill Builder Theory', cls: 'r-cert', icon: '📜' },
  { time: '60min', desc: 'Terraform & Linux & Lab Maker', cls: 'r-terraform', icon: '⌨️' },
  { time: '30min', desc: 'Cloud Quest & Troubleshooting', cls: 'r-quest', icon: '🔧' },
  { time: '15min', desc: 'Jira e Git Push', cls: 'r-github', icon: '📋' },
];

const STORAGE_KEY = 'cloudops-dashboard-v6-maxdensity';

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
      addLog(s[id] ? 'ok' : 'warn', s[id] ? `Task ${id} concluída` : `Task ${id} reaberta`);
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
    { label: 'ITSM', color: '#4b8ffd' },
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

  addLog('info', 'Dashboard Atualizado (High Density Total)');
  addLog('info', `Semana atual: ${getCurrentWeek() || 'pré-início'}`);

  document.getElementById('reset-btn').addEventListener('click', () => {
    if (confirm('⚠️ Resetar todo o board?')) {
      localStorage.removeItem(STORAGE_KEY);
      const s = loadState();
      renderStudyPlan(s);
      renderOverallProgress(s);
      renderStats(s);
      addLog('warn', 'Board resetado pelo usuário');
    }
  });
});