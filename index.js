const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');

conexao.connect(erro => {
    if (erro) {
        console.log(erro);
    } else {
        Tabelas.init(conexao);
        console.log('CONECTADO com sucesso!!');
    }
});

const app = customExpress();
