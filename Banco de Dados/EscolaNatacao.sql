-- 1. Criação do Schema
CREATE DATABASE IF NOT EXISTS EscolaNatacao;
USE EscolaNatacao;

-- 2. Tabela de Professores
CREATE TABLE Professores (
    id_professor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    especialidade VARCHAR(50),
    data_contratacao DATE
) ENGINE=InnoDB;

-- 3. Tabela de Níveis (Pedagógico)
CREATE TABLE Niveis (
    id_nivel INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(50) NOT NULL, -- Ex: Iniciante, Intermediário, Avançado
    preco_mensal DECIMAL(10,2) NOT NULL
) ENGINE=InnoDB;

-- 4. Tabela de Alunos
CREATE TABLE Alunos (
    id_alumno INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    cpf CHAR(11) UNIQUE,
    data_matricula TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 5. Tabela de Turmas
CREATE TABLE Turmas (
    id_turma INT AUTO_INCREMENT PRIMARY KEY,
    id_professor INT,
    id_nivel INT,
    horario TIME NOT NULL,
    dias_semana VARCHAR(50), -- Ex: 'Seg/Qua/Sex'
    FOREIGN KEY (id_professor) REFERENCES Professores(id_professor),
    FOREIGN KEY (id_nivel) REFERENCES Niveis(id_nivel)
) ENGINE=InnoDB;

-- 6. Matrículas (Relacionamento N:M entre Alunos e Turmas)
CREATE TABLE Matriculas (
    id_matricula INT AUTO_INCREMENT PRIMARY KEY,
    id_alumno INT,
    id_turma INT,
    status_aluno ENUM('Ativo', 'Inativo', 'Trancado') DEFAULT 'Ativo',
    FOREIGN KEY (id_alumno) REFERENCES Alunos(id_alumno),
    FOREIGN KEY (id_turma) REFERENCES Turmas(id_turma)
) ENGINE=InnoDB;

-- POPULANDO OS DADOS (DML)

INSERT INTO Professores (nome, especialidade, data_contratacao) VALUES 
('Ricardo Silva', 'Nado Borboleta', '2023-01-15'),
('Beatriz Souza', 'Infantil', '2023-05-10');

INSERT INTO Niveis (descricao, preco_mensal) VALUES 
('Iniciante - Adaptação', 250.00),
('Intermediário', 300.00),
('Treinamento Avançado', 450.00);

INSERT INTO Alunos (nome, data_nascimento, cpf) VALUES 
('João Pedro Carvalho', '2015-03-20', '12345678901'),
('Mariana Lins', '2010-07-12', '98765432100'),
('Carlos Alberto', '1985-11-30', '45678912344');

INSERT INTO Turmas (id_professor, id_nivel, horario, dias_semana) VALUES 
(2, 1, '09:00:00', 'Ter/Qui'),
(1, 3, '18:30:00', 'Seg/Qua/Sex');

INSERT INTO Matriculas (id_alumno, id_turma) VALUES 
(1, 1),
(2, 2),
(3, 2);


**Para criar MER

Passo a Passo: Engenharia Reversa
Acesse a Ferramenta: No menu superior do MySQL Workbench, vá em Database > Reverse Engineer... (ou use o atalho Ctrl + R).

Conexão: Selecione a conexão do banco de dados onde as tabelas já estão criadas e clique em Next.

Seleção do Schema: O Workbench se conectará ao servidor. Clique em Next novamente e, na tela seguinte, selecione o Schema (banco de dados) que você deseja visualizar como MER.

Execução: Clique em Next e depois em Execute. O software lerá os metadados das tabelas, chaves primárias e estrangeiras.

Finalização: Clique em Next e Finish. O Workbench abrirá automaticamente uma aba de "Model" com o diagrama montado.