CREATE DATABASE sistema_eventos;

USE sistema_eventos;

CREATE TABLE
    participantes (
        id_participante INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        telefone VARCHAR(15)
    );

CREATE TABLE
    eventos (
        id_evento INT AUTO_INCREMENT PRIMARY KEY,
        nome_evento VARCHAR(100) NOT NULL,
        data_evento DATE NOT NULL,
        local_evento VARCHAR(100)
    );

CREATE TABLE
    inscricoes (
        id_inscricao INT AUTO_INCREMENT PRIMARY KEY,
        id_participante INT NOT NULL,
        id_evento INT NOT NULL,
        data_inscricao DATE NOT NULL,
        -- FK
        FOREIGN KEY (id_participante) REFERENCES participantes (id_participante),
        FOREIGN KEY (id_evento) REFERENCES eventos (id_evento)
    );

SHOW TABLES;

DESCRIBE participantes;

DESCRIBE eventos;

DESCRIBE inscricoes
INSERT INTO
    participantes (nome, email, telefone)
VALUES
    ('Ana Lima', 'ana@email.com', '11999990001'),
    ('Carlos Melo', 'carlos@email.com', '11999990002');

INSERT INTO
    eventos (nome_evento, data_evento, local_evento)
VALUES
    ('TechDay 2025', '2025-06-15', 'Auditorio Central'),
    (
        'Data Summit 2025',
        '2025-07-20',
        'Centro de Converncoes'
    );

INSERT INTO
    inscricoes (id_participante, id_evento, data_inscricao)
VALUES
    (1, 1, '2025-05-01');

SELECT
    *
FROM
    participantes;

SELECT
    *
FROM
    eventos;

SELECT
    *
FROM
    inscricoes;

SELECT
    p.nome AS participante,
    e.nome_evento AS evento,
    e.data_evento,
    i.data_inscricao
FROM
    inscricoes i
    INNER JOIN participantes p ON i.id_participante = p.id_participante
    INNER JOIN eventos e ON i.id_evento = e.id_evento;

UPDATE participantes
SET
    nome = 'Ana Lima Santos'
WHERE
    id_participante = 1;

SELECT
    *
FROM
    participantes;

DELETE FROM inscricoes
WHERE
    id_inscricao = 1;

SELECT
    *
FROM
    inscricoes