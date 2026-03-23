/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Layout, 
  Database, 
  Zap, 
  Smartphone, 
  Monitor, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  BarChart3, 
  ShieldCheck,
  Menu,
  X,
  Star,
  Quote,
  TrendingUp,
  AlertCircle,
  Mail,
  Clock,
  Settings,
  Users,
  Briefcase,
  Wrench,
  Check,
  Send,
  Bot,
  Loader2,
  UserX,
  DollarSign,
  ShieldAlert
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Demonstração', href: '#demonstracao' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center neon-glow-blue">
            <Zap className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tighter">SISTEMATIZE</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-400 hover:text-neon-blue transition-colors">
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5561981633722" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-neon-blue hover:text-white transition-all"
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5561981633722" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3 bg-neon-blue text-white text-center font-bold rounded-xl"
            >
              Solicitar Orçamento
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden dashboard-grid">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-blue/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-purple/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] font-mono text-neon-blue mb-6 tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-blue"></span>
            </span>
            Tecnologia de Ponta para sua Empresa
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            Transformo sua empresa com <span className="text-gradient">sistemas e sites</span> profissionais
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            Criação de sistemas personalizados para gestão de demandas, organização de processos e aumento de produtividade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5561981633722" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-neon-blue text-black font-bold rounded-xl hover:scale-105 transition-transform neon-glow-blue"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <a 
              href="#contato"
              className="flex items-center justify-center gap-2 px-8 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
            >
              Solicitar orçamento
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative glass rounded-2xl p-4 neon-glow-purple overflow-hidden">
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <div className="ml-auto text-[10px] font-mono text-gray-500">demand_manager_v1.ts</div>
            </div>
            <div className="space-y-4">
              <div className="h-8 w-full bg-white/5 rounded animate-pulse" />
              <div className="grid grid-cols-3 gap-4">
                <div className="h-20 bg-neon-blue/10 rounded border border-neon-blue/20" />
                <div className="h-20 bg-neon-purple/10 rounded border border-neon-purple/20" />
                <div className="h-20 bg-white/5 rounded" />
              </div>
              <div className="h-32 w-full bg-white/5 rounded" />
            </div>
            {/* Floating UI elements */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-1/4 -right-6 glass p-4 rounded-xl shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neon-blue/20 flex items-center justify-center">
                  <TrendingUp className="text-neon-blue w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400 uppercase">Produtividade</div>
                  <div className="text-lg font-bold">+200%</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const PainPointsSection = () => {
  const problems = [
    { icon: <AlertCircle className="w-6 h-6" />, text: "Falta de organização nos atendimentos" },
    { icon: <UserX className="w-6 h-6" />, text: "Clientes esquecidos ou sem resposta" },
    { icon: <DollarSign className="w-6 h-6" />, text: "Dificuldade para controlar financeiro" },
    { icon: <ShieldAlert className="w-6 h-6" />, text: "Imagem pouco profissional" }
  ];

  return (
    <section className="py-20 bg-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Você está tocando seu negócio <span className="text-neon-blue">sem um site ou sistema</span> de gestão?
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Se você ainda controla tudo pelo WhatsApp, caderno ou planilhas, pode estar perdendo clientes e dinheiro sem perceber.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {problems.map((problem, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 p-4 glass rounded-xl border-white/5 hover:border-neon-blue/30 transition-all"
                >
                  <div className="text-neon-blue">{problem.icon}</div>
                  <span className="text-sm font-medium text-gray-200">{problem.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 md:p-12 rounded-[40px] border-neon-blue/20 bg-neon-blue/5 relative"
          >
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-neon-blue rounded-full flex items-center justify-center neon-glow-blue">
              <Zap className="text-black w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-6">A Solução que seu Negócio Precisa</h3>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              "Eu te ajudo a transformar seu negócio com sistemas e sites profissionais, organizando sua rotina, automatizando processos e aumentando sua produtividade."
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5561981633722" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#128C7E] transition-all shadow-lg shadow-green-500/20"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
              <a 
                href="#contato"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 glass text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
              >
                Solicitar orçamento
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Layout className="w-8 h-8 text-neon-blue" />,
      title: "Criação de Sites",
      description: "Desenvolvo sites modernos, rápidos e profissionais para destacar sua empresa e atrair mais clientes.",
      tags: ["SEO", "Responsivo", "Performance"]
    },
    {
      icon: <Database className="w-8 h-8 text-neon-purple" />,
      title: "Sistemas de Gestão",
      description: "Criação de sistemas personalizados para controle de demandas em geral, processos internos, clientes e organização completa.",
      tags: ["CRM", "ERP", "Demandas"]
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Automação de Processos",
      description: "Automatizo tarefas e integro fluxos para aumentar produtividade e reduzir erros operacionais.",
      tags: ["Integrações", "Workflow", "Eficiência"]
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-card-bg/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Serviços Profissionais</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Soluções tecnológicas sob medida para o seu negócio.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl hover:border-neon-blue/50 transition-colors group"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono px-2 py-1 bg-white/5 rounded border border-white/10 text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <ShieldCheck />, title: "Sistemas sob medida", desc: "Desenvolvido exatamente para a necessidade do seu negócio." },
    { icon: <Monitor />, title: "Interface Simples", desc: "Design intuitivo e fácil de usar para toda a sua equipe." },
    { icon: <Smartphone />, title: "Acesso Mobile", desc: "Acesse pelo celular ou computador de qualquer lugar do mundo." },
    { icon: <BarChart3 />, title: "Controle em Tempo Real", desc: "Acompanhe suas demandas e processos no momento que acontecem." },
    { icon: <Settings />, title: "Organização Total", desc: "Centralize todas as informações em um único lugar seguro." },
    { icon: <MessageCircle />, title: "Suporte Direto", desc: "Atendimento rápido e direto para resolver qualquer dúvida." }
  ];

  return (
    <section id="diferenciais" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-square rounded-3xl overflow-hidden glass p-4 flex items-center justify-center bg-gradient-to-br from-neon-blue/5 to-neon-purple/5">
              <div className="w-full h-full rounded-2xl border border-white/10 p-4 bg-black/40 overflow-hidden">
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/50" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  <div className="ml-auto text-[8px] font-mono text-gray-500">system_architecture.svg</div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 w-3/4 bg-neon-blue/20 rounded" />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-16 bg-white/5 rounded border border-white/5 flex items-center justify-center">
                      <Database className="w-6 h-6 text-neon-blue/40" />
                    </div>
                    <div className="h-16 bg-white/5 rounded border border-white/5 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-neon-purple/40" />
                    </div>
                  </div>
                  <div className="h-20 w-full bg-white/5 rounded flex items-center justify-center">
                    <Layout className="w-8 h-8 text-gray-500/20" />
                  </div>
                  <div className="h-4 w-1/2 bg-white/5 rounded" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -left-8 glass p-6 rounded-2xl max-w-[240px] animate-float">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-mono text-gray-400">Sistema Ativo</span>
              </div>
              <div className="text-sm font-bold">Organização Garantida</div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Diferenciais que impulsionam resultados</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-neon-blue/10 flex items-center justify-center text-neon-blue">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{f.title}</h4>
                    <p className="text-sm text-gray-400">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Showcase = () => {
  const [activeTab, setActiveTab] = useState(0);

  const DemandList = () => (
    <div className="w-full bg-black/40 rounded-xl border border-white/10 overflow-hidden font-sans">
      <div className="p-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
        <h4 className="font-bold text-sm">Lista de Demandas</h4>
        <div className="flex gap-2">
          <div className="w-24 h-8 bg-white/5 rounded border border-white/10" />
          <div className="w-8 h-8 bg-neon-blue rounded flex items-center justify-center">
            <X className="w-4 h-4 text-black rotate-45" />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-white/5 text-gray-500 uppercase tracking-wider">
              <th className="p-4 font-medium">Nome da Demanda</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Responsável</th>
              <th className="p-4 font-medium">Prazo</th>
              <th className="p-4 font-medium">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {[
              { name: "Desenvolvimento Landing Page", status: "Em andamento", color: "text-blue-400", user: "Carlos Silva", date: "25 Mar" },
              { name: "Ajuste de Banco de Dados", status: "Pendente", color: "text-yellow-400", user: "Ana Oliveira", date: "28 Mar" },
              { name: "Integração API WhatsApp", status: "Finalizado", color: "text-green-400", user: "Marcos Souza", date: "20 Mar" },
              { name: "Criação de Dashboard", status: "Em andamento", color: "text-blue-400", user: "Carlos Silva", date: "30 Mar" }
            ].map((row, i) => (
              <tr key={i} className="hover:bg-white/5 transition-colors">
                <td className="p-4 font-medium">{row.name}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full bg-white/5 border border-white/10 ${row.color}`}>
                    {row.status}
                  </span>
                </td>
                <td className="p-4 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple text-[8px] flex items-center justify-center font-bold">
                    {row.user.split(' ').map(n => n[0]).join('')}
                  </div>
                  {row.user}
                </td>
                <td className="p-4 text-gray-400">{row.date}</td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <button className="p-1 hover:text-neon-blue"><Settings className="w-4 h-4" /></button>
                    <button className="p-1 hover:text-neon-purple"><ArrowRight className="w-4 h-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const StatusKanban = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans">
      {[
        { title: "Pendente", color: "bg-yellow-500", items: ["Revisão de contrato", "Briefing inicial"] },
        { title: "Em andamento", color: "bg-blue-500", items: ["Desenvolvimento Front-end", "Configuração Servidor"] },
        { title: "Finalizado", color: "bg-green-500", items: ["Design aprovado", "Deploy inicial"] }
      ].map((col, i) => (
        <div key={i} className="bg-white/5 rounded-xl border border-white/10 p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className={`w-2 h-2 rounded-full ${col.color}`} />
            <h4 className="font-bold text-sm uppercase tracking-wider">{col.title}</h4>
            <span className="ml-auto text-[10px] text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">{col.items.length}</span>
          </div>
          <div className="space-y-3">
            {col.items.map((item, j) => (
              <div key={j} className="p-3 bg-black/40 rounded-lg border border-white/5 text-xs hover:border-neon-blue/30 transition-colors cursor-pointer">
                <p className="mb-2">{item}</p>
                <div className="flex justify-between items-center">
                  <div className="w-4 h-4 rounded-full bg-white/10" />
                  <Clock className="w-3 h-3 text-gray-500" />
                </div>
              </div>
            ))}
            <button className="w-full py-2 border border-dashed border-white/10 rounded-lg text-[10px] text-gray-500 hover:text-white hover:border-white/20 transition-all">
              + Adicionar Demanda
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const SystemDashboard = () => (
    <div className="space-y-6 font-sans">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Demandas", value: "124", icon: <Briefcase className="w-4 h-4" />, color: "text-neon-blue" },
          { label: "Em Aberto", value: "42", icon: <Clock className="w-4 h-4" />, color: "text-yellow-400" },
          { label: "Finalizadas", value: "82", icon: <CheckCircle2 className="w-4 h-4" />, color: "text-green-400" },
          { label: "Produtividade", value: "94%", icon: <TrendingUp className="w-4 h-4" />, color: "text-neon-purple" }
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10">
            <div className={`mb-2 ${stat.color}`}>{stat.icon}</div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-[10px] text-gray-500 uppercase font-bold">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 h-64 flex flex-col">
          <h4 className="text-sm font-bold mb-6">Demandas por Status</h4>
          <div className="flex-1 flex items-end justify-around gap-4 px-4">
            {[60, 40, 90, 30].map((h, i) => (
              <div key={i} className="relative group w-full">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  className={`w-full rounded-t-lg bg-gradient-to-t ${i % 2 === 0 ? 'from-neon-blue/20 to-neon-blue' : 'from-neon-purple/20 to-neon-purple'}`}
                />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] text-gray-500 whitespace-nowrap">Setor {i+1}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 h-64">
          <h4 className="text-sm font-bold mb-6">Indicadores por Cliente</h4>
          <div className="space-y-4">
            {[
              { name: "Cliente Alpha", progress: 75, color: "bg-neon-blue" },
              { name: "Beta Corp", progress: 45, color: "bg-neon-purple" },
              { name: "Gamma Solutions", progress: 90, color: "bg-green-400" }
            ].map((client, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-[10px]">
                  <span className="text-gray-400">{client.name}</span>
                  <span className="font-bold">{client.progress}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${client.progress}%` }}
                    className={`h-full ${client.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const demos = [
    { 
      title: "Gestão de Demandas", 
      component: <DemandList />,
      desc: "Controle completo de demandas com registro, responsável, prazos e acompanhamento em tempo real."
    },
    { 
      title: "Status & Controle", 
      component: <StatusKanban />,
      desc: "Acompanhe o andamento de todas as demandas com status organizados."
    },
    { 
      title: "Dashboard Gerencial", 
      component: <SystemDashboard />,
      desc: "Visualização completa da operação com indicadores e produtividade."
    }
  ];

  return (
    <section id="demonstracao" className="py-24 bg-card-bg/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Veja na prática como funciona</h2>
          <p className="text-gray-400">Sistemas inteligentes para controle por cliente ou setor.</p>
        </div>

        <div className="glass rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <div className="flex border-b border-white/10 overflow-x-auto scrollbar-hide bg-black/20">
            {demos.map((demo, idx) => (
              <button 
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-8 py-6 text-sm font-bold whitespace-nowrap transition-all flex-1 relative ${activeTab === idx ? 'text-neon-blue' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
              >
                {demo.title}
                {activeTab === idx && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-neon-blue neon-glow-blue"
                  />
                )}
              </button>
            ))}
          </div>
          <div className="p-6 md:p-12 bg-gradient-to-b from-transparent to-black/20">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="glass rounded-2xl p-1 md:p-2 border-white/5 shadow-inner">
                  <div className="bg-[#0a0a0a] rounded-xl p-4 md:p-8 min-h-[400px] flex flex-col justify-center">
                    {demos[activeTab].component}
                  </div>
                </div>
                <div className="max-w-2xl mx-auto text-center">
                  <p className="text-lg text-white font-medium mb-2">{demos[activeTab].title}</p>
                  <p className="text-gray-400 leading-relaxed">{demos[activeTab].desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">O Impacto da Organização</h2>
          <p className="text-gray-400">A evolução do seu negócio com a tecnologia certa.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass p-10 rounded-3xl border-red-500/20 bg-red-500/5"
          >
            <div className="flex items-center gap-4 mb-8 text-red-500">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                <AlertCircle className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold">Antes: Desorganização</h3>
            </div>
            <ul className="space-y-5">
              {[
                "Demandas desorganizadas",
                "Falta de controle total",
                "Perda constante de prazos",
                "Informações espalhadas em planilhas"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 text-gray-400">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="glass p-10 rounded-3xl border-neon-blue/20 bg-neon-blue/5 neon-glow-blue"
          >
            <div className="flex items-center gap-4 mb-8 text-neon-blue">
              <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold">Depois: Sistematizado</h3>
            </div>
            <ul className="space-y-5">
              {[
                "Demandas centralizadas",
                "Controle total dos processos",
                "Prazos acompanhados automaticamente",
                "Mais produtividade e organização"
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 text-gray-200">
                  <Check className="w-5 h-5 text-neon-blue flex-shrink-0 mt-1" />
                  <span className="text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const DemandTypes = () => {
  const types = [
    { icon: <Users />, label: "Atendimento ao cliente" },
    { icon: <Briefcase />, label: "Solicitações internas" },
    { icon: <Settings />, label: "Processos administrativos" },
    { icon: <Wrench />, label: "Chamados técnicos" },
    { icon: <Layout />, label: "Projetos e tarefas" }
  ];

  return (
    <section className="py-24 bg-card-bg/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Quais demandas você pode organizar?</h2>
          <p className="text-gray-400">O sistema se adapta a qualquer fluxo de trabalho.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {types.map((type, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="glass px-8 py-6 rounded-2xl flex items-center gap-4 border-white/5 hover:border-neon-purple/50 transition-all"
            >
              <div className="text-neon-purple">{type.icon}</div>
              <span className="font-bold text-lg">{type.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Modal = ({ isOpen, onClose, title, description, plans, buttonText, buttonLink, color }: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  plans: { name: string; features: string[]; price: string }[];
  buttonText: string;
  buttonLink: string;
  color: 'blue' | 'purple';
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="glass max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-[32px] p-6 md:p-12 relative border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="mb-8 pr-8">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 tracking-tight ${color === 'blue' ? 'text-neon-blue' : 'text-neon-purple'}`}>
                {title}
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">{description}</p>
            </div>

            <div className="space-y-4 md:space-y-6 mb-10">
              {plans.map((plan, idx) => (
                <div key={idx} className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-4">
                    <h4 className="text-lg md:text-xl font-bold flex items-center gap-2">
                      <span className={color === 'blue' ? 'text-neon-blue' : 'text-neon-purple'}>🔹</span> {plan.name}
                    </h4>
                    <div className={`text-base md:text-lg font-bold px-3 py-1 rounded-lg bg-white/5 border border-white/5 ${color === 'blue' ? 'text-neon-blue' : 'text-neon-purple'}`}>
                      {plan.price}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-gray-400 text-xs md:text-sm flex items-start gap-2">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${color === 'blue' ? 'text-neon-blue/40' : 'text-neon-purple/40'}`} /> 
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full py-4 text-center font-bold rounded-xl transition-all hover:scale-[1.02] shadow-xl ${
                color === 'blue' 
                  ? 'bg-neon-blue text-black neon-glow-blue' 
                  : 'bg-neon-purple text-white neon-glow-purple'
              }`}
            >
              {buttonText}
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Pricing = () => {
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    type: 'sites' | 'sistemas' | null;
  }>({ isOpen: false, type: null });

  const sitesData = {
    title: "Criação de Sites Profissionais",
    description: "Desenvolvimento de sites modernos, responsivos e personalizados para destacar sua empresa e atrair mais clientes.",
    buttonText: "Falar no WhatsApp",
    buttonLink: "https://wa.me/5561981633722",
    color: 'blue' as const,
    plans: [
      {
        name: "Site Essencial",
        features: ["Até 3 páginas", "Design moderno", "Responsivo (celular e computador)"],
        price: "R$ 700 a R$ 1.000"
      },
      {
        name: "Site Profissional",
        features: ["Até 6 páginas", "Seções completas", "Integração com WhatsApp"],
        price: "R$ 1.000 a R$ 1.500"
      },
      {
        name: "Landing Page",
        features: ["Página focada em vendas", "Alta conversão"],
        price: "R$ 500 a R$ 900"
      }
    ]
  };

  const sistemasData = {
    title: "Sistemas de Gestão Personalizados",
    description: "Criação de sistemas completos para controle de demandas, processos e organização da sua empresa.",
    buttonText: "Solicitar orçamento no WhatsApp",
    buttonLink: "https://wa.me/5561981633722",
    color: 'purple' as const,
    plans: [
      {
        name: "Sistema Básico",
        features: ["Controle de demandas", "Cadastro simples", "Status básico"],
        price: "R$ 1.500 a R$ 2.000"
      },
      {
        name: "Sistema Intermediário",
        features: ["Controle completo", "Status personalizados", "Filtros e organização"],
        price: "R$ 2.000 a R$ 3.500"
      },
      {
        name: "Sistema Profissional",
        features: ["Dashboard gerencial", "Automações", "Controle avançado"],
        price: "R$ 3.500 a R$ 6.000"
      }
    ]
  };

  const activeData = modalData.type === 'sites' ? sitesData : sistemasData;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Investimento Inteligente</h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          Projetos personalizados sob orçamento para atender exatamente o que sua empresa precisa.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            whileHover={{ y: -5 }}
            onClick={() => setModalData({ isOpen: true, type: 'sites' })}
            className="glass p-10 rounded-3xl border-white/5 hover:border-neon-blue/30 transition-all cursor-pointer group text-left"
          >
            <h3 className="text-2xl font-bold mb-4 group-hover:text-neon-blue transition-colors">Sites Profissionais</h3>
            <p className="text-gray-400 mb-6">Presença digital de alto impacto.</p>
            <div className="text-3xl font-bold text-neon-blue mb-8">Sob Consulta</div>
            <button className="block w-full py-4 bg-white/5 border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-all">Ver Detalhes</button>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            onClick={() => setModalData({ isOpen: true, type: 'sistemas' })}
            className="glass p-10 rounded-3xl border-neon-purple/20 bg-neon-purple/5 neon-glow-purple cursor-pointer group text-left"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-neon-purple text-white text-[10px] font-bold mb-4 uppercase">Mais Procurado</div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-neon-purple transition-colors">Sistemas de Gestão</h3>
            <p className="text-gray-400 mb-6">Organização e automação completa.</p>
            <div className="text-3xl font-bold text-neon-purple mb-8">Sob Consulta</div>
            <button className="block w-full py-4 bg-neon-purple text-white rounded-xl font-bold hover:scale-105 transition-all">Ver Detalhes</button>
          </motion.div>
        </div>
      </div>

      <Modal 
        isOpen={modalData.isOpen} 
        onClose={() => setModalData({ ...modalData, isOpen: false })}
        {...activeData}
      />
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      text: "Organizou totalmente nosso controle interno. Hoje temos tudo centralizado e fácil de usar.",
      author: "Empresa de Logística"
    },
    {
      text: "Hoje temos tudo centralizado e fácil de usar. A produtividade da equipe aumentou drasticamente.",
      author: "Escritório de Advocacia"
    },
    {
      text: "Melhorou muito nossa produtividade. O sistema é intuitivo e resolveu nossos gargalos.",
      author: "Clínica Médica"
    }
  ];

  return (
    <section id="depoimentos" className="py-24 bg-card-bg/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">O que dizem nossos clientes</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="glass p-10 rounded-3xl relative">
              <Quote className="absolute top-6 right-8 text-white/5 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-neon-blue text-neon-blue" />)}
              </div>
              <p className="text-gray-300 mb-8 italic text-lg leading-relaxed">"{t.text}"</p>
              <div className="font-bold text-neon-blue">— {t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[40px] p-8 md:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-blue/5 to-transparent -z-10" />
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Vamos impulsionar sua empresa?</h2>
              <p className="text-xl text-gray-400 mb-12">
                Entre em contato agora e solicite seu orçamento sem compromisso.
              </p>
              
              <div className="space-y-6">
                <a 
                  href="https://wa.me/5561981633722" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass rounded-2xl hover:border-neon-blue/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold">WhatsApp</div>
                    <div className="text-lg font-bold">(61) 98163-3722</div>
                  </div>
                </a>
                
                <a 
                  href="mailto:lucienedemesquita194@gmail.com"
                  className="flex items-center gap-4 p-4 glass rounded-2xl hover:border-neon-purple/50 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-neon-purple/10 flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase font-bold">E-mail</div>
                    <div className="text-lg font-bold break-all">lucienedemesquita194@gmail.com</div>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="glass p-8 rounded-3xl border-white/5">
              <h3 className="text-2xl font-bold mb-6">Solicite uma Proposta</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Seu Nome" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:border-neon-blue outline-none transition-all" />
                <input type="email" placeholder="Seu E-mail" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:border-neon-blue outline-none transition-all" />
                <textarea placeholder="Como posso ajudar seu negócio?" rows={4} className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:border-neon-blue outline-none transition-all resize-none"></textarea>
                <button className="w-full py-4 bg-neon-blue text-black font-bold rounded-xl hover:scale-[1.02] transition-all neon-glow-blue">Enviar Mensagem</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded flex items-center justify-center">
            <Zap className="text-white w-5 h-5" />
          </div>
          <span className="text-lg font-bold tracking-tighter">SISTEMATIZE</span>
        </div>
        
        <div className="text-gray-500 text-sm text-center">
          Soluções digitais personalizadas para organizar e impulsionar sua empresa.<br />
          © 2026 Sistematize. Todos os direitos reservados.
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

const AIChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Olá! 👋 Posso te ajudar a entender melhor nossos serviços, valores e sistemas. O que você gostaria de saber?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      // Map history for Gemini API
      const history = messages.map(msg => ({
        role: msg.role === 'ai' ? 'model' : 'user',
        parts: [{ text: msg.text }]
      }));

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...history,
          {
            role: 'user',
            parts: [{ text: userMessage }]
          }
        ],
        config: {
          systemInstruction: `Você é o Assistente Virtual da Sistematize, uma empresa de desenvolvimento de sites e sistemas de gestão. Seu objetivo é tirar dúvidas sobre serviços, valores e funcionamento dos sistemas de forma clara, profissional e objetiva. 

          BASE DE CONHECIMENTO:
          SERVIÇOS:
          - Criação de sites profissionais (modernos, responsivos, personalizados).
          - Sistemas personalizados de gestão (controle de demandas, processos, organização).
          - Sistemas de faturamento e controle financeiro.
          - Automação de processos (eliminação de tarefas manuais).
          - Sistemas para clínicas (faturamento, controle, prontuários).

          VALORES MÉDIOS:
          - Sites: a partir de R$ 700 até R$ 1.500+.
          - Sistemas: a partir de R$ 1.500 até R$ 6.000+.

          FUNCIONAMENTO E PRAZOS:
          - Desenvolvimento: Briefing -> Design -> Desenvolvimento -> Testes -> Lançamento.
          - Prazos: Sites (7 a 15 dias), Sistemas (20 a 45 dias dependendo da complexidade).

          BENEFÍCIOS:
          - Organização total, aumento de produtividade, presença digital 24h, profissionalismo e automação de tarefas repetitivas.

          DIFERENCIAIS:
          - Sistemas sob medida (exatamente o que a empresa precisa).
          - Dashboard em tempo real (indicadores e produtividade).
          - Automação completa (integrações e fluxos inteligentes).
          - Interface simples e moderna (fácil de usar).

          CONDUÇÃO E CONVERSÃO:
          - Sempre seja cordial e use emojis moderadamente.
          - Seja objetivo e profissional.
          - Após responder, tente conduzir o cliente para um orçamento, demonstração ou contato direto no WhatsApp (https://wa.me/5561981633722). 
          - Se o cliente parecer interessado, sugira: 'Posso te explicar melhor e montar uma solução ideal pra você. Quer falar direto no WhatsApp?' ou 'Gostaria de agendar uma demonstração rápida?'

          Responda sempre em Português do Brasil. Seja breve e direto.`
        }
      });

      const aiText = response.text || "Desculpe, tive um problema ao processar sua pergunta. Pode tentar novamente ou falar conosco no WhatsApp?";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error("AI Chat Error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "Ops! Tive um problema técnico. Que tal falar diretamente com um especialista no WhatsApp?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] glass rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-white/10"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-neon-blue to-neon-purple flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Assistente Virtual</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-white/80">Online agora</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X className="text-white w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide bg-black/20">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-neon-blue text-black font-medium rounded-tr-none' 
                      : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none">
                    <Loader2 className="w-4 h-4 text-neon-blue animate-spin" />
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-white/10 bg-black/40">
              <div className="flex gap-2 mb-3">
                <a 
                  href="https://wa.me/5561981633722" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 py-2 bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-green-500/20 transition-all"
                >
                  <MessageCircle className="w-3 h-3" /> Falar no WhatsApp
                </a>
              </div>
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Digite sua dúvida..."
                  className="w-full p-3 pr-12 bg-white/5 border border-white/10 rounded-xl focus:border-neon-blue outline-none transition-all text-sm"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-neon-blue hover:text-white transition-colors disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center shadow-2xl neon-glow-blue relative"
      >
        {isOpen ? <X className="text-white w-8 h-8" /> : <Bot className="text-white w-8 h-8" />}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-black animate-bounce" />
        )}
      </motion.button>
    </div>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/5561981633722" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-28 right-8 z-50 group flex items-center gap-3"
    >
      <div className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm shadow-2xl opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
        Fale comigo agora
      </div>
      <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform neon-glow-blue">
        <MessageCircle className="text-white w-8 h-8" />
      </div>
    </a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-neon-blue selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <PainPointsSection />
        <Services />
        <Features />
        <Showcase />
        <Comparison />
        <DemandTypes />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <AIChatAssistant />
    </div>
  );
}
