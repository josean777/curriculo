# 🚀 Guia de Deploy - Currículo Profissional

## GitHub Pages - Deploy Automático

Este projeto está configurado para fazer deploy automático no GitHub Pages usando GitHub Actions.

### ✅ Pré-requisitos

1. Ter um repositório no GitHub
2. Ter Node.js 22+ instalado localmente

### 📋 Passos para Configurar

#### 1. **Clone ou crie o repositório**
```bash
git clone https://github.com/josean777/curriculo-profissional.git
cd curriculo-profissional
```

#### 2. **Instale as dependências**
```bash
npm install
```

#### 3. **Teste localmente**
```bash
npm run dev
```
Acesse: `http://localhost:5173`

#### 4. **Faça o build**
```bash
npm run build
```

#### 5. **Configure o GitHub Pages**

No seu repositório do GitHub:
- Vá para **Settings** → **Pages**
- Em "Build and deployment":
  - Source: **GitHub Actions**
  - O workflow já está configurado em `.github/workflows/deploy.yml`

#### 6. **Faça push para o repositório**
```bash
git add .
git commit -m "Deploy currículo profissional"
git push origin main
```

#### 7. **Acompanhe o deploy**
- Vá para a aba **Actions** do seu repositório
- Veja o workflow `Deploy to GitHub Pages` sendo executado
- Quando terminar com ✅, seu site estará live!

### 🌐 Acessar o Site

Seu currículo estará disponível em:
```
https://josean777.github.io
```

### 📝 Atualizar o Conteúdo

Para fazer qualquer alteração:

1. Edite os arquivos no seu editor favorito
2. Faça commit e push:
```bash
git add .
git commit -m "Descrição da alteração"
git push origin main
```
3. O GitHub Actions fará o build e deploy automaticamente!

### 🔧 Troubleshooting

**Página em branco?**
- Verifique se o workflow foi executado com sucesso (aba Actions)
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Aguarde 2-3 minutos para o DNS atualizar

**Imagens não aparecem?**
- Certifique-se de que `josean7_.png` está em `client/public/images/`
- Faça push novamente para disparar o rebuild

### 📚 Estrutura do Projeto

```
curriculo-profissional/
├── client/
│   ├── public/
│   │   └── images/          # Suas imagens aqui
│   └── src/
│       └── pages/
│           └── Home.tsx     # Conteúdo principal
├── .github/
│   └── workflows/
│       └── deploy.yml       # Configuração de deploy
└── package.json
```

### 💡 Dicas

- Sempre faça teste local com `npm run dev` antes de fazer push
- Mantenha a pasta `client/public/images/` com suas imagens
- O build automático leva ~2-3 minutos

---

**Pronto! Seu currículo está no ar! 🎉**
