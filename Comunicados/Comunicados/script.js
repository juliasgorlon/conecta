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
    },
    {
        titulo: 'Inscrições para Semana de Tecnologia',
        texto: 'As inscrições para a Semana de Tecnologia já estão abertas. Os alunos interessados devem realizar a inscrição pelo portal acadêmico.',
        prioridade: 'Normal',
        autor: 'Coordenação de ADS',
        data: 'Hoje, 11h15',
        lido: false
    },
    {
        titulo: 'Mudança no horário da aula',
        texto: 'A aula de Desenvolvimento Web desta quinta-feira começará às 19h30 devido a uma reunião dos professores.',
        prioridade: 'Importante',
        autor: 'Coordenação de ADS',
        data: 'Hoje, 09h40',
        lido: false
    },
    {
        titulo: 'Notas disponíveis no portal',
        texto: 'As notas das últimas atividades já estão disponíveis para consulta no portal do aluno.',
        prioridade: 'Normal',
        autor: 'Secretaria Acadêmica',
        data: 'Ontem, 14h25',
        lido: true
    }
];

var filtroComunicado = 'todos';

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

function abrirPerfil() {
    abrirModal(`
        <p class="subtitulo">MEU PERFIL</p>
        <h2>João Silva</h2>
        <p class="texto-suave">
            Análise e Desenvolvimento de Sistemas • 2º termo •
            <b class="texto-verde">Ativo</b>
        </p>
        <dl class="dados-curso">
            <div>
                <dt>Duração do curso</dt>
                <dd>3 anos</dd>
            </div>
            <div>
                <dt>Data de início</dt>
                <dd>Fevereiro de 2026</dd>
            </div>
            <div>
                <dt>Previsão de conclusão</dt>
                <dd>Dezembro de 2028</dd>
            </div>
        </dl>
    `);
}

function renderComunicados() {
    var lista = document.getElementById('listaComunicados');

    if (!lista) {
        return;
    }

    lista.innerHTML = '';

    comunicados.forEach(function (comunicado, indice) {
        if (filtroComunicado === 'nao-lidos' && comunicado.lido) {
            return;
        }

        if (filtroComunicado === 'importantes' && comunicado.prioridade !== 'Importante') {
            return;
        }

        lista.innerHTML += `
            <article class="item-comunicado ${!comunicado.lido ? 'nao-lido' : ''}">
                <div class="comunicado-topo">
                    <span class="tag ${comunicado.prioridade === 'Importante' ? 'importante' : ''}">
                        ${comunicado.prioridade.toUpperCase()}
                    </span>

                    <button class="marcar-lido" onclick="marcarLido(${indice})">
                        ${comunicado.lido ? 'Lido' : 'Marcar como lido'}
                    </button>
                </div>

                <h3>${comunicado.titulo}</h3>
                <p>${comunicado.texto}</p>

                <div class="comunicado-rodape">
                    <div class="meta">${comunicado.autor} • ADS — 2º termo</div>
                    <time>${comunicado.data}</time>
                </div>
            </article>
        `;
    });
}

function marcarLido(indice) {
    comunicados[indice].lido = true;
    renderComunicados();
}

document.querySelectorAll('[data-comunicado]').forEach(function (botao) {
    botao.addEventListener('click', function () {
        filtroComunicado = botao.dataset.comunicado;

        document.querySelectorAll('[data-comunicado]').forEach(function (outroBotao) {
            outroBotao.classList.remove('ativo');
        });

        botao.classList.add('ativo');
        renderComunicados();
    });
});

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
        abrirModal(`
            <p class="subtitulo">ATUALIZAÇÕES</p>
            <h2>Notificações</h2>
            <div class="painel-item">
                <b>Renovação do ProUni</b>
                <span>Prazo até 05 de dezembro</span>
            </div>
            <div class="painel-item">
                <b>Alteração de sala</b>
                <span>Banco de Dados • Hoje</span>
            </div>
            <div class="painel-item">
                <b>Nova palestra</b>
                <span>Adicionada à sua agenda</span>
            </div>
        `);
    });
}

var btnNovo = document.getElementById('btnNovoComunicado');

if (btnNovo) {
    btnNovo.addEventListener('click', function () {
        document.getElementById('formComunicado').classList.remove('escondido');
    });
}

var cancelar = document.getElementById('cancelarComunicado');

if (cancelar) {
    cancelar.addEventListener('click', function () {
        document.getElementById('formComunicado').classList.add('escondido');
    });
}

var salvar = document.getElementById('salvarComunicado');

if (salvar) {
    salvar.addEventListener('click', function () {
        var titulo = document.getElementById('tituloComunicado');
        var texto = document.getElementById('textoComunicado');

        if (!titulo.value.trim() || !texto.value.trim()) {
            mostrarMensagem('Preencha título e mensagem.');
            return;
        }

        comunicados.unshift({
            titulo: titulo.value.trim(),
            texto: texto.value.trim(),
            prioridade: 'Normal',
            autor: 'Coordenação de Curso',
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

// No projeto original a visualização é de aluno,
// então o botão de publicar fica escondido.
document.querySelectorAll('.publicar-permitido').forEach(function (botao) {
    botao.classList.add('escondido');
});

renderComunicados();
