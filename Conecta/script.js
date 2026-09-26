var comunicados = [
    {
        titulo: 'Alteração da sala de Banco de Dados',
        texto: 'A aula de segunda-feira será realizada no Laboratório 4.',
        prioridade: 'Importante',
        autor: 'Coordenação de ADS',
        data: 'Hoje, 10h20',
        lido: false
    },
    {
        titulo: 'Material de revisão disponível',
        texto: 'O roteiro de normalização foi adicionado aos documentos da disciplina.',
        prioridade: 'Normal',
        autor: 'Prof. Ricardo Almeida',
        data: 'Ontem, 18h45',
        lido: false
    },
    {
        titulo: 'Prazo do Projeto Integrador',
        texto: 'A primeira versão do protótipo deverá ser apresentada até 30 de setembro.',
        prioridade: 'Normal',
        autor: 'Profª. Camila Torres',
        data: '18 de setembro',
        lido: true
    }
];

var documentos = [
    {
        nome: 'Contrato de estágio',
        categoria: 'pessoais',
        tipo: 'PDF',
        descricao: 'Documento pessoal enviado para validação.',
        status: 'Em análise',
        icone: '◫'
    },
    {
        nome: 'Declaração de matrícula',
        categoria: 'pessoais',
        tipo: 'PDF',
        descricao: 'Declaração emitida no semestre atual.',
        status: 'Disponível',
        icone: '✓'
    },
    {
        nome: 'Calendário acadêmico 2026',
        categoria: 'institucionais',
        tipo: 'PDF',
        descricao: 'Datas letivas, recessos e períodos de avaliação.',
        status: 'Atualizado',
        icone: '▣'
    },
    {
        nome: 'Manual do aluno',
        categoria: 'institucionais',
        tipo: 'PDF',
        descricao: 'Direitos, deveres e orientações acadêmicas.',
        status: 'Institucional',
        icone: '◧'
    },
    {
        nome: 'Manual de iniciação científica',
        categoria: 'institucionais',
        tipo: 'PDF',
        descricao: 'Regras para projetos, submissões e bolsas.',
        status: 'Institucional',
        icone: '◇'
    },
    {
        nome: 'Matriz curricular de ADS',
        categoria: 'curso',
        tipo: 'PDF',
        descricao: 'Disciplinas e organização curricular do curso.',
        status: 'Meu curso',
        icone: '▦'
    },
    {
        nome: 'Regulamento de estágio — ADS',
        categoria: 'curso',
        tipo: 'PDF',
        descricao: 'Carga horária, supervisão e documentação exigida.',
        status: 'Meu curso',
        icone: '◫'
    }
];

var agenda = [
    {
        dia: '23',
        mes: 'SET',
        tipo: 'ATIVIDADE',
        titulo: 'Palestra: carreiras em tecnologia',
        hora: '19h30',
        local: 'Anfiteatro',
        cor: 'roxa'
    },
    {
        dia: '25',
        mes: 'SET',
        tipo: 'AVALIAÇÃO',
        titulo: 'Prova de Banco de Dados',
        hora: '19h',
        local: 'Sala 12',
        cor: 'azul'
    },
    {
        dia: '30',
        mes: 'SET',
        tipo: 'ENTREGA',
        titulo: 'Entrega do Projeto Web',
        hora: 'até 23h59',
        local: 'Portal acadêmico',
        cor: 'verde'
    },
    {
        dia: '09',
        mes: 'OUT',
        tipo: 'EVENTO',
        titulo: 'Hackathon de Tecnologia',
        hora: '18h',
        local: 'Bloco 6',
        cor: 'rosa'
    }
];

var disciplinas = [
    {
        nome: 'Banco de Dados',
        professor: 'Prof. Ricardo Almeida',
        faltas: 30,
        n1: '8,2',
        n2: '—',
        total: 2
    },
    {
        nome: 'Desenvolvimento Web',
        professor: 'Profª. Camila Torres',
        faltas: 20,
        n1: '9,0',
        n2: '—',
        total: 0
    },
    {
        nome: 'Fábrica de Projetos Ágeis II',
        professor: 'Prof. Lucas Ferreira',
        faltas: 10,
        n1: '7,8',
        n2: '—',
        total: 0
    },
    {
        nome: 'Fundamentos de Sistemas de Informação',
        professor: 'Profª. Ana Ribeiro',
        faltas: 20,
        n1: '8,5',
        n2: '—',
        total: 0
    },
    {
        nome: 'Programação Orientada a Objetos',
        professor: 'Prof. Marcos Lima',
        faltas: 20,
        n1: '7,4',
        n2: '—',
        total: 4
    },
    {
        nome: 'Projeto de Vida e Soft Skills II',
        professor: 'Profª. Júlia Prado',
        faltas: 10,
        n1: '9,3',
        n2: '—',
        total: 0
    }
];

var posts = [
    {
        autor: 'Secretaria Acadêmica',
        iniciais: 'SA',
        selo: 'IMPORTANTE',
        categoria: 'beneficios',
        data: '19 de setembro de 2026',
        texto: 'A renovação mantém a regularidade do benefício para o próximo período letivo. Consulte sua situação com antecedência e procure a Secretaria Acadêmica caso precise de orientação.',
        imagem: 'assets/prouni.png',
        visualizacoes: 684,
        salvo: false,
        comentarios: []
    },
    {
        autor: 'Coordenação de Tecnologia',
        iniciais: 'CT',
        selo: 'TECNOLOGIA E INOVAÇÃO',
        categoria: 'curso',
        data: '12 de setembro de 2026',
        texto: 'Uma maratona para transformar conhecimento em solução. O desafio valoriza colaboração, criatividade e apresentação de ideias — uma oportunidade de ampliar o portfólio e conhecer estudantes de diferentes áreas.',
        imagem: 'assets/hackathon.png',
        visualizacoes: 527,
        salvo: false,
        link: 'https://docs.google.com/forms/d/e/1FAIpQLScyXlIU94NGnMwRe8YLp4cp4z_-tscxS3wrZ2vejcwO5tcYKg/viewform',
        linkTexto: 'Inscrever-se no formulário',
        comentarios: [
            {
                autor: 'Rafael',
                texto: 'As equipes podem reunir alunos de cursos diferentes?'
            }
        ]
    },
    {
        autor: 'Coordenação de Psicologia',
        iniciais: 'CP',
        selo: 'EVENTO ACADÊMICO',
        categoria: 'eventos',
        data: '18 de agosto de 2026',
        texto: 'A programação propõe diferentes olhares sobre a escuta, os vínculos e a vida contemporânea. Um espaço de troca entre estudantes, profissionais convidados e comunidade acadêmica.',
        imagem: 'assets/psicologia.png',
        visualizacoes: 493,
        salvo: false,
        comentarios: []
    },
    {
        autor: 'Coordenação de Enfermagem',
        iniciais: 'CE',
        selo: 'SAÚDE E COMUNIDADE',
        categoria: 'eventos',
        data: '10 de maio de 2026',
        texto: 'A ação extensionista do 2º termo aproxima formação e cuidado coletivo. Além de contribuir com a prevenção, os estudantes vivenciam na prática o atendimento e a orientação em saúde.',
        imagem: 'assets/vacinacao.png',
        visualizacoes: 416,
        salvo: false,
        comentarios: []
    },
    {
        autor: 'Secretaria Acadêmica',
        iniciais: 'SA',
        selo: 'COMUNICADO OFICIAL',
        categoria: 'institucional',
        data: '8 de setembro de 2026',
        texto: 'A medida preventiva prioriza a segurança de estudantes e colaboradores diante das condições climáticas previstas. Acompanhe os canais oficiais para eventuais atualizações.',
        imagem: 'assets/suspensao-aulas.png',
        visualizacoes: 812,
        salvo: false,
        comentarios: []
    }
];

var perfis = {
    aluno: {
        titulo: 'Aluno',
        iniciais: 'JS',
        podePublicar: false
    },
    professor: {
        titulo: 'Professor',
        iniciais: 'PR',
        podePublicar: true
    },
    coordenacao: {
        titulo: 'Coordenação de Curso',
        iniciais: 'CC',
        podePublicar: true
    },
    secretaria: {
        titulo: 'Secretaria Acadêmica',
        iniciais: 'SA',
        podePublicar: true
    },
    comunicacao: {
        titulo: 'Comunicação Institucional',
        iniciais: 'CI',
        podePublicar: true
    }
};

var filtroFeed = 'todos';
var filtroDocumento = 'todos';
var filtroComunicado = 'todos';

function assetPath(path) {
    if (!path || path.indexOf('http') === 0 || path.indexOf('../') === 0) {
        return path;
    }

    return window.location.pathname.indexOf('/paginas/') !== -1 ? '../' + path : path;
}

function mostrarMensagem(texto) {
    var mensagem = document.getElementById('mensagem');

    if (!mensagem) {
        return;
    }

    mensagem.textContent = texto;
    mensagem.classList.add('mostrar');

    setTimeout(function () {
        mensagem.classList.remove('mostrar');
    }, 2400);
}

function abrirModal(html) {
    var modal = document.getElementById('modal');
    var conteudo = document.getElementById('modalConteudo');

    if (!modal || !conteudo) {
        return;
    }

    conteudo.innerHTML = html;
    modal.classList.remove('escondido');
}

function fecharModal() {
    var modal = document.getElementById('modal');

    if (modal) {
        modal.classList.add('escondido');
    }
}

function abrirContato(nome) {
    var iniciais = nome === 'Secretaria Acadêmica' ? 'SA' : 'CA';

    abrirModal(
        '<div class="contato-titulo">' +
            '<span class="contato-avatar grande-contato">' + iniciais + '</span>' +
            '<div><h2>Falar com a ' + nome + '</h2><p>Envie sua mensagem diretamente</p></div>' +
        '</div>' +
        '<form class="form-contato" onsubmit="enviarContato(event)">' +
            '<label>Assunto</label>' +
            '<input required placeholder="Digite o assunto da mensagem">' +
            '<label>Mensagem</label>' +
            '<textarea required placeholder="Descreva sua mensagem..."></textarea>' +
            '<button class="botao largura-total" type="submit">Enviar mensagem</button>' +
        '</form>'
    );
}

function enviarContato(event) {
    event.preventDefault();
    fecharModal();
    mostrarMensagem('Mensagem enviada com sucesso.');
}

function abrirHorarios() {
    abrirModal(
        '<div class="modal-horario">' +
            '<h2>HORÁRIO DE AULA</h2>' +
            '<div class="tabela-horarios">' +
                '<table>' +
                    '<thead><tr><th>Horário</th><th>Segunda</th><th>Terça</th><th>Quarta</th><th>Quinta</th><th>Sexta</th></tr></thead>' +
                    '<tbody>' +
                        '<tr><th>19:25</th><td>Banco de Dados</td><td>Engenharia de Software</td><td>Desenvolvimento Web</td><td>Fábrica de Projetos Ágeis</td><td>—</td></tr>' +
                        '<tr><th>20:15</th><td>Banco de Dados</td><td>Engenharia de Software</td><td>Desenvolvimento Web</td><td>Fábrica de Projetos Ágeis</td><td>—</td></tr>' +
                        '<tr><th>21:30</th><td>Desenvolvimento Web</td><td>Fábrica de Projetos Ágeis</td><td>Banco de Dados</td><td>Engenharia de Software</td><td>—</td></tr>' +
                        '<tr><th>22:20</th><td>Desenvolvimento Web</td><td>Fábrica de Projetos Ágeis</td><td>Banco de Dados</td><td>Engenharia de Software</td><td>—</td></tr>' +
                    '</tbody>' +
                '</table>' +
            '</div>' +
        '</div>'
    );
}

function abrirHorasComplementares() {
    abrirModal(
        '<div class="horas-modal">' +
            '<p class="subtitulo">ATIVIDADES COMPLEMENTARES</p>' +
            '<h2>Seu progresso</h2>' +
            '<div class="horas-resumo">' +
                '<div><b>100h</b><span>necessárias</span></div>' +
                '<div><b>62h</b><span>realizadas</span></div>' +
                '<div><b>38h</b><span>restantes</span></div>' +
            '</div>' +
            '<div class="progresso-topo"><b>Progresso total</b><strong>62%</strong></div>' +
            '<div class="barra-progresso"><i style="width:62%"></i></div>' +
            '<h3>Atividades recentes</h3>' +
            '<div class="atividade-recente"><div><b>Hackathon de Tecnologia</b><span>Participação em evento</span></div><strong>+ 8h</strong></div>' +
            '<div class="atividade-recente"><div><b>Palestra: Carreiras em Tecnologia</b><span>Atividade acadêmica</span></div><strong>+ 4h</strong></div>' +
        '</div>'
    );
}

function abrirPerfil() {
    abrirModal(
        '<p class="subtitulo">MEU PERFIL</p>' +
        '<h2>João Silva</h2>' +
        '<p class="texto-suave">Análise e Desenvolvimento de Sistemas • 2º termo • <b class="texto-verde">Ativo</b></p>' +
        '<dl class="dados-curso perfil-modal">' +
            '<div><dt>Duração do curso</dt><dd>3 anos</dd></div>' +
            '<div><dt>Data de início</dt><dd>Fevereiro de 2026</dd></div>' +
            '<div><dt>Previsão de conclusão</dt><dd>Dezembro de 2028</dd></div>' +
        '</dl>'
    );
}

function renderComunicados() {
    var lista = document.getElementById('listaComunicados');
    var inicio = document.getElementById('comunicadosInicio');

    if (lista) {
        lista.innerHTML = '';

        comunicados.forEach(function (comunicado, i) {
            if (
                (filtroComunicado === 'nao-lidos' && comunicado.lido) ||
                (filtroComunicado === 'importantes' && comunicado.prioridade !== 'Importante')
            ) {
                return;
            }

            lista.innerHTML +=
                '<article class="item-comunicado ' + (!comunicado.lido ? 'nao-lido' : '') + '">' +
                    '<div class="comunicado-topo">' +
                        '<span class="tag ' + (comunicado.prioridade === 'Importante' ? 'importante' : '') + '">' + comunicado.prioridade.toUpperCase() + '</span>' +
                        '<button class="marcar-lido" onclick="marcarLido(' + i + ')">' + (comunicado.lido ? 'Lido' : 'Marcar como lido') + '</button>' +
                    '</div>' +
                    '<h3>' + comunicado.titulo + '</h3>' +
                    '<p>' + comunicado.texto + '</p>' +
                    '<div class="comunicado-rodape"><div class="meta">' + comunicado.autor + ' • ADS — 2º termo</div><time>' + comunicado.data + '</time></div>' +
                '</article>';
        });
    }

    if (inicio) {
        inicio.innerHTML = '';

        comunicados.slice(0, 3).forEach(function (comunicado) {
            inicio.innerHTML +=
                '<div class="comunicado-resumo">' +
                    '<div><b>' + comunicado.titulo + '</b><p>' + comunicado.texto + '</p></div>' +
                '</div>';
        });
    }
}

function marcarLido(index) {
    comunicados[index].lido = true;
    renderComunicados();
}

function renderDocumentos() {
    var campoBusca = document.getElementById('buscaDocumento');
    var lista = document.getElementById('listaDocumentos');

    if (!lista) {
        return;
    }

    var busca = campoBusca ? campoBusca.value.toLowerCase() : '';
    lista.innerHTML = '';

    documentos.forEach(function (documento) {
        if (
            (filtroDocumento !== 'todos' && documento.categoria !== filtroDocumento) ||
            !documento.nome.toLowerCase().includes(busca)
        ) {
            return;
        }

        lista.innerHTML +=
            '<article class="documento">' +
                '<div class="documento-topo"><span class="doc-icone">' + documento.icone + '</span><span class="tag">' + documento.tipo + '</span></div>' +
                '<span class="categoria-doc">' + documento.status + '</span>' +
                '<h3>' + documento.nome + '</h3>' +
                '<p>' + documento.descricao + '</p>' +
                '<button onclick="mostrarMensagem(\'Download demonstrativo: ' + documento.nome.replace(/'/g, "\\'") + '\')">Baixar arquivo ↓</button>' +
            '</article>';
    });
}

function renderAgenda() {
    var lista = document.getElementById('listaAgenda');
    var inicio = document.getElementById('agendaInicio');

    if (lista) {
        lista.innerHTML = '';

        agenda.forEach(function (evento) {
            lista.innerHTML +=
                '<article class="agenda-item">' +
                    '<div class="data data-' + evento.cor + '"><strong>' + evento.dia + '</strong><span>' + evento.mes + '</span></div>' +
                    '<div class="agenda-conteudo"><span class="tag">' + evento.tipo + '</span><h3>' + evento.titulo + '</h3><p>◷ ' + evento.hora + ' &nbsp;⌖ ' + evento.local + '</p></div>' +
                    '<button class="icone-btn salvar-agenda" onclick="mostrarMensagem(\'Compromisso salvo.\')">☆</button>' +
                '</article>';
        });
    }

    if (inicio) {
        inicio.innerHTML = '';

        agenda.slice(0, 3).forEach(function (evento) {
            inicio.innerHTML +=
                '<div class="evento-resumo">' +
                    '<div class="data data-' + evento.cor + '"><strong>' + evento.dia + '</strong><span>' + evento.mes + '</span></div>' +
                    '<div><b>' + evento.titulo + '</b><p>' + evento.hora + ' • ' + evento.local + '</p></div>' +
                '</div>';
        });
    }
}

function renderDisciplinas() {
    var cards = document.getElementById('cardsDisciplinas');
    var tabela = document.getElementById('tabelaNotas');

    if (!cards || !tabela) {
        return;
    }

    cards.innerHTML = '';
    tabela.innerHTML = '';

    disciplinas.forEach(function (disciplina) {
        cards.innerHTML +=
            '<article class="disciplina-card">' +
                '<span class="disciplina-icone">▤</span>' +
                '<div><h3>' + disciplina.nome + '</h3><p>' + disciplina.professor + '</p></div>' +
            '</article>';

        tabela.innerHTML +=
            '<tr>' +
                '<td><b>' + disciplina.nome + '</b></td>' +
                '<td>' + disciplina.n1 + '</td>' +
                '<td>' + disciplina.n2 + '</td>' +
                '<td>' + String(disciplina.total).padStart(2, '0') + '</td>' +
                '<td>' + disciplina.faltas + '</td>' +
                '<td><span class="situacao-ok">Regular</span></td>' +
            '</tr>';
    });
}

function renderFeed() {
    var lista = document.getElementById('listaPosts');

    if (!lista) {
        return;
    }

    lista.innerHTML = '';

    posts.forEach(function (post, index) {
        if (filtroFeed !== 'todos' && post.categoria !== filtroFeed) {
            return;
        }

        var imagem = post.imagem ? '<img class="post-imagem" src="' + assetPath(post.imagem) + '" alt="' + post.selo + '">' : '';
        var link = post.link
            ? '<a class="post-link" href="' + post.link + '" target="_blank" rel="noopener">' + post.linkTexto + ' ↗</a>'
            : '';

        lista.innerHTML +=
            '<article class="post">' +
                '<div class="post-conteudo">' +
                    '<div class="post-cabecalho">' +
                        '<div class="avatar">' + post.iniciais + '</div>' +
                        '<div><b>' + post.autor + '</b><p>' + post.data + '</p></div>' +
                        '<button class="marcar-visto" onclick="marcarVisto(this)"><span class="icone-olho">◉</span> Marcar como visto</button>' +
                    '</div>' +
                    '<span class="post-categoria">' + post.selo + '</span>' +
                    '<p class="post-texto">' + post.texto + '</p>' +
                '</div>' +
                imagem +
                '<div class="post-conteudo">' +
                    link +
                    '<div class="post-acoes">' +
                        '<button aria-label="Salvar publicação" title="Salvar publicação" class="salvar-btn ' + (post.salvo ? 'salvo' : '') + '" onclick="salvarPost(' + index + ')">' +
                            '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12v17l-6-4-6 4z"/></svg>' +
                        '</button>' +
                        '<span class="visualizacoes"><span class="icone-olho">◉</span> ' + post.visualizacoes + ' visualizações</span>' +
                    '</div>' +
                '</div>' +
            '</article>';
    });
}

function marcarVisto(botao) {
    botao.classList.add('visto');
    botao.innerHTML = '✓ Visto';
}

function filtrarFeed(filtro) {
    filtroFeed = filtro;

    document.querySelectorAll('.filtro-feed').forEach(function (botao) {
        botao.classList.toggle('ativo', botao.dataset.filtro === filtro);
    });

    renderFeed();
}

function salvarPost(index) {
    posts[index].salvo = !posts[index].salvo;
    atualizarSalvos();
    renderFeed();

    mostrarMensagem(
        posts[index].salvo
            ? 'Publicação salva.'
            : 'Publicação removida dos salvos.'
    );
}

function atualizarSalvos() {
    var total = document.getElementById('totalSalvos');

    if (total) {
        total.textContent = posts.filter(function (post) {
            return post.salvo;
        }).length;
    }
}

function alternarComentarios(index) {
    var comentarios = document.getElementById('comentarios' + index);

    if (comentarios) {
        comentarios.classList.toggle('escondido');
    }
}

function comentarPost(index) {
    var input = document.getElementById('comentario' + index);

    if (!input || !input.value.trim()) {
        return;
    }

    posts[index].comentarios.push({
        autor: localStorage.getItem('conectaNome') || 'Beatriz',
        texto: input.value.trim()
    });

    renderFeed();
}

function mostrarPainel() {
    var salvos = posts.filter(function (post) {
        return post.salvo;
    });

    abrirModal(
        '<p class="subtitulo">SUA COLEÇÃO</p>' +
        '<h2>Itens salvos</h2>' +
        (
            salvos.length
                ? salvos.map(function (post) {
                    return '<div class="painel-item"><b>' + post.selo + '</b><span>' + post.autor + ' • ' + post.data + '</span></div>';
                }).join('')
                : '<p class="texto-suave">Você ainda não salvou nenhuma publicação.</p>'
        )
    );
}

function aplicarPerfil() {
    var perfil = perfis.aluno;
    var nome = 'João Silva';

    var nomeUsuario = document.getElementById('nomeUsuario');
    var primeiroNome = document.getElementById('primeiroNome');
    var perfilNome = document.getElementById('perfilNome');
    var tipoUsuario = document.getElementById('tipoUsuario');
    var perfilAtual = document.getElementById('perfilAtual');

    if (nomeUsuario) {
        nomeUsuario.textContent = 'João';
    }

    if (primeiroNome) {
        primeiroNome.textContent = 'João';
    }

    if (perfilNome) {
        perfilNome.textContent = nome;
    }

    if (tipoUsuario) {
        tipoUsuario.textContent = perfil.titulo;
    }

    if (perfilAtual) {
        perfilAtual.textContent = 'Visualização: Aluno';
    }

    document.querySelectorAll('.usuario-icone, .avatar.grande').forEach(function (avatar) {
        avatar.textContent = 'JS';
    });

    document.querySelectorAll('.publicar-permitido').forEach(function (botao) {
        botao.classList.add('escondido');
    });
}

document.querySelectorAll('[data-comunicado]').forEach(function (botao) {
    botao.addEventListener('click', function () {
        filtroComunicado = botao.dataset.comunicado;

        document.querySelectorAll('[data-comunicado]').forEach(function (item) {
            item.classList.remove('ativo');
        });

        botao.classList.add('ativo');
        renderComunicados();
    });
});

document.querySelectorAll('[data-doc]').forEach(function (botao) {
    botao.addEventListener('click', function () {
        filtroDocumento = botao.dataset.doc;

        document.querySelectorAll('[data-doc]').forEach(function (item) {
            item.classList.remove('ativo');
        });

        botao.classList.add('ativo');
        renderDocumentos();
    });
});

document.querySelectorAll('.filtro-feed').forEach(function (botao) {
    botao.addEventListener('click', function () {
        filtrarFeed(botao.dataset.filtro);
    });
});

var buscaDocumento = document.getElementById('buscaDocumento');

if (buscaDocumento) {
    buscaDocumento.addEventListener('input', renderDocumentos);
}

var btnSair = document.getElementById('btnSair');

if (btnSair) {
    btnSair.addEventListener('click', function () {
        mostrarMensagem('Você já está na visualização do aluno.');
    });
}

var btnPerfil = document.getElementById('btnPerfil');

if (btnPerfil) {
    btnPerfil.addEventListener('click', abrirPerfil);
}

var btnNotificacoes = document.getElementById('btnNotificacoes');

if (btnNotificacoes) {
    btnNotificacoes.addEventListener('click', function () {
        abrirModal(
            '<p class="subtitulo">ATUALIZAÇÕES</p>' +
            '<h2>Notificações</h2>' +
            '<div class="painel-item"><b>Renovação do ProUni</b><span>Prazo até 05 de dezembro</span></div>' +
            '<div class="painel-item"><b>Alteração de sala</b><span>Banco de Dados • Hoje</span></div>' +
            '<div class="painel-item"><b>Nova palestra</b><span>Adicionada à sua agenda</span></div>'
        );
    });
}

var btnNovoComunicado = document.getElementById('btnNovoComunicado');

if (btnNovoComunicado) {
    btnNovoComunicado.addEventListener('click', function () {
        document.getElementById('formComunicado').classList.remove('escondido');
    });
}

var cancelarComunicado = document.getElementById('cancelarComunicado');

if (cancelarComunicado) {
    cancelarComunicado.addEventListener('click', function () {
        document.getElementById('formComunicado').classList.add('escondido');
    });
}

var salvarComunicado = document.getElementById('salvarComunicado');

if (salvarComunicado) {
    salvarComunicado.addEventListener('click', function () {
        var titulo = document.getElementById('tituloComunicado');
        var texto = document.getElementById('textoComunicado');

        if (!titulo.value.trim() || !texto.value.trim()) {
            mostrarMensagem('Preencha título e mensagem.');
            return;
        }

        var perfilSelecionado = localStorage.getItem('conectaPerfil') || 'coordenacao';
        var perfil = perfis[perfilSelecionado] || perfis.coordenacao;

        comunicados.unshift({
            titulo: titulo.value.trim(),
            texto: texto.value.trim(),
            prioridade: 'Normal',
            autor: perfil.titulo,
            data: 'Agora',
            lido: false
        });

        titulo.value = '';
        texto.value = '';

        document.getElementById('formComunicado').classList.add('escondido');
        renderComunicados();
        mostrarMensagem('Comunicado direcionado publicado.');
    });
}

var btnPublicarPost = document.getElementById('btnPublicarPost');

if (btnPublicarPost) {
    btnPublicarPost.addEventListener('click', function () {
        var campo = document.getElementById('textoPost');

        if (!campo || !campo.value.trim()) {
            mostrarMensagem('Escreva uma informação.');
            return;
        }

        var tipo = localStorage.getItem('conectaPerfil') || 'aluno';
        var perfil = perfis[tipo];

        if (!perfil || !perfil.podePublicar) {
            mostrarMensagem('Seu perfil não possui permissão para publicar.');
            return;
        }

        posts.unshift({
            autor: perfil.titulo,
            iniciais: perfil.iniciais,
            selo: 'NOVA PUBLICAÇÃO',
            categoria: document.getElementById('categoriaPost').value,
            data: 'Agora',
            texto: campo.value.trim(),
            imagem: '',
            visualizacoes: 0,
            salvo: false,
            comentarios: []
        });

        campo.value = '';
        filtrarFeed('todos');
        mostrarMensagem('Publicação criada.');
    });
}

renderComunicados();
renderDocumentos();
renderAgenda();
renderDisciplinas();
renderFeed();
atualizarSalvos();
aplicarPerfil();
