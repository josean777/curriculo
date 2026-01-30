import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Linkedin, 
  Github, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Play, 
  Pause, 
  ExternalLink,
  GraduationCap,
  User,
  Music,
  Download,
  FileText,
  Sun,
  Moon,
  School
} from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Load YouTube API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: 'LdoCkKxR5FQ',
        playerVars: {
          autoplay: 0,
          controls: 0,
          modestbranding: 1,
          rel: 0
        },
        events: {
          onStateChange: (event: any) => {
            if (event.data === (window as any).YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else {
              setIsPlaying(false);
            }
          }
        }
      });
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      playerRef.current?.pauseVideo();
    } else {
      playerRef.current?.playVideo();
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/10 selection:text-primary">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <span className="font-display text-xl font-bold tracking-tighter text-primary">JN.</span>
          <nav className="hidden md:flex gap-8">
            <a href="#sobre" className="nav-link">Sobre</a>
            <a href="#escolaridade" className="nav-link">Escolaridade</a>
            <a href="#contato" className="nav-link">Contato</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden md:flex rounded-full border-primary/20 text-primary hover:bg-primary/5"
              onClick={() => window.print()}
            >
              <Download className="mr-2 h-4 w-4" /> Baixar PDF
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-all"
              aria-label="Alternar tema"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMusic}
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-all"
              aria-label={isPlaying ? "Pausar música" : "Tocar música"}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Music className="h-5 w-5" />}
            </Button>
            <div id="youtube-player" className="hidden"></div>
          </div>
        </div>
      </header>

      <main className="container py-12 md:py-24">
        {/* Hero Section */}
        <section id="sobre" className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-24">
          <motion.div 
            className="md:col-span-7 space-y-6"
            {...fadeIn}
          >
            <Badge variant="outline" className="px-3 py-1 text-xs font-medium uppercase tracking-widest text-primary border-primary/20 bg-primary/5">
              Disponível para Oportunidades
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight">
              Josean Nascimento <span className="text-primary">Simões</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Desenvolvedor Full Stack especializado em criar soluções digitais robustas, escaláveis e de alta performance. Expertise em múltiplas linguagens e arquiteturas modernas.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="rounded-full px-8 h-12 text-base font-medium shadow-lg shadow-primary/20">
                <a href="mailto:joseannascimentosimoes@gmail.com">
                  <Mail className="mr-2 h-5 w-5" /> Entrar em Contato
                </a>
              </Button>
              <Button variant="outline" className="md:hidden rounded-full px-8 h-12 text-base font-medium border-primary/20 text-primary" onClick={() => window.print()}>
                <Download className="mr-2 h-5 w-5" /> Baixar PDF
              </Button>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary">
                  <a href="https://www.linkedin.com/in/josean-nascimento-sim%C3%B5es-5a8a5b2a8/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary">
                  <a href="https://github.com/josean777" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-primary/10 hover:text-primary">
                  <a href="https://www.instagram.com/josean7_?igsh=YWFyNW5qbXptZzF3&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-border bg-muted relative group">
              <img 
                src="/public/images/josean7_.png" 
                alt="Josean Nascimento Simões" 
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-sm font-medium text-foreground">Josean Nascimento Simões</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
          </motion.div>
        </section>

        <div className="section-divider"></div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Left Column: Escolaridade */}
          <section id="escolaridade" className="md:col-span-8 space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <GraduationCap className="h-6 w-6" />
                <h2 className="text-3xl font-display font-bold">Escolaridade</h2>
              </div>
              <p className="text-muted-foreground">Minha jornada acadêmica e técnica atual.</p>
            </div>

            <div className="space-y-8">
              <motion.div 
                className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors group"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true }}
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-primary group-hover:bg-primary transition-all"></div>
                <div className="space-y-2">
                  <span className="text-sm font-bold text-green-600 uppercase tracking-wider">Concluído em 2025</span>
                  <h3 className="text-xl font-bold">Técnico em Desenvolvimento de Sistemas</h3>
                  <p className="text-lg font-medium text-foreground/80">SENAI Bahia</p>
                  <Button variant="link" asChild className="p-0 h-auto text-primary hover:text-primary/80">
                    <a href="https://www.senaibahia.com.br/" target="_blank" rel="noopener noreferrer">
                      Visitar Instituição <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </motion.div>

              <motion.div 
                className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors group"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-primary group-hover:bg-primary transition-all"></div>
                <div className="space-y-2">
                  <span className="text-sm font-bold text-green-600 uppercase tracking-wider">Concluído em 2022</span>
                  <h3 className="text-xl font-bold">Ensino Médio Completo</h3>
                  <p className="text-lg font-medium text-foreground/80">Instituto Educacional de Entre Rios (IEER)</p>
                  <p className="text-sm text-muted-foreground">Instituição de Ensino Particular</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Right Column: Info & Contato */}
          <aside id="contato" className="md:col-span-4 space-y-12">
            <motion.section 
              className="space-y-6"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-primary">
                <User className="h-6 w-6" />
                <h2 className="text-2xl font-display font-bold">Dados Pessoais</h2>
              </div>
              <Card className="border-none bg-muted/30 shadow-none">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Endereço</p>
                      <p className="text-sm font-medium">Rua da Olinda, Nº 81, Entre Rios - BA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Telefone</p>
                      <p className="text-sm font-medium">(75) 99279-3379</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">Email</p>
                      <a href="mailto:joseannascimentosimoes@gmail.com" className="text-sm font-medium hover:text-primary transition-colors break-all">
                        joseannascimentosimoes@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            <motion.section 
              className="space-y-6"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-display font-bold">Habilidades Técnicas</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Full Stack Development", "PHP", "Python", "C++", "JavaScript (ES6+)", 
                  "React", "Node.js", "HTML5", "CSS3", "TailwindCSS", 
                  "SQL", "Git & GitHub", "Arquitetura de Software", "APIs RESTful"
                ].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-background border border-border hover:border-primary/30 transition-colors px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.section>

            <motion.section 
              className="space-y-6"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-display font-bold">Idiomas</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">Português (Brasil)</span>
                  <Badge className="bg-green-600/20 text-green-700 border-green-600/30">Nativo</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">Inglês</span>
                  <Badge className="bg-blue-600/20 text-blue-700 border-blue-600/30">Intermediário</Badge>
                </div>
              </div>
            </motion.section>
          </aside>
        </div>
      </main>

      <footer className="border-t border-border/40 py-12 bg-muted/20">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="font-display text-xl font-bold tracking-tighter text-primary">JN.</span>
            <p className="text-sm text-muted-foreground">© 2025 Josean Nascimento Simões. Todos os direitos reservados.</p>
          </div>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/josean-nascimento-sim%C3%B5es-5a8a5b2a8/" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com/josean777" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/josean7_?igsh=YWFyNW5qbXptZzF3&utm_source=qr" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
