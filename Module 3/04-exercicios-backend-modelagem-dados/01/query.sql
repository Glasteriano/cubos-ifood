 -- Criação da Base de Dados
CREATE DATABASE
  ecommerce;

-- Criação das Tabelas
CREATE TABLE
  clientes (cpf CHAR(11) UNIQUE, nome VARCHAR(150));

CREATE TABLE
  vendedores (cpf CHAR(11) UNIQUE, nome VARCHAR(150));

CREATE TABLE
  pedidos (
    id SERIAL PRIMARY KEY,
    valor INTEGER,
    cliente_cpf CHAR(11) REFERENCES clientes (cpf),
    vendedor_cpf CHAR(11) REFERENCES vendedores (cpf)
  );

CREATE TABLE
  categorias (id SERIAL PRIMARY KEY, nome VARCHAR(50));

CREATE TABLE
  produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    descricao TEXT,
    preco INTEGER,
    quantidade_em_estoque INTEGER,
    categoria_id INTEGER REFERENCES categorias (id)
  );

CREATE TABLE
  itens_do_pedido (
    id SERIAL PRIMARY KEY,
    pedido_id INTEGER REFERENCES pedidos (id),
    quantidade INTEGER,
    produto_id INTEGER REFERENCES produtos (id)
  );

-- 1 - Alimentar a Tabela "categoria"
INSERT INTO
  categorias (nome)
VALUES
  ('frutas'),
  ('verduras'),
  ('massas'),
  ('bebidas'),
  ('utilidades');

-- 2 - Alimentar a Tabela "produtos"
INSERT INTO
  produtos (
    nome,
    descricao,
    preco,
    quantidade_em_estoque,
    categoria_id
  )
VALUES
  (
    'Mamão',
    'Rico em vitamina A, potássio e vitamina C',
    300,
    123,
    1
  );

INSERT INTO
  produtos (
    nome,
    descricao,
    preco,
    quantidade_em_estoque,
    categoria_id
  )
VALUES
  ('Maçã', 'Fonte de potássio e fibras.', 90, 34, 1),
  (
    'Cebola',
    'Rico em quercetina, antocianinas, vitaminas do complexo B, C.',
    50,
    76,
    2
  ),
  ('Abacate', 'NÃO CONTÉM GLÚTEN.', 150, 64, 1),
  (
    'Tomate',
    'Rico em vitaminas A, B e C.',
    125,
    88,
    2
  ),
  ('Acelga', 'NÃO CONTÉM GLÚTEN.', 235, 13, 2),
  (
    'Macarrão Parafuso',
    'Sêmola de trigo enriquecida com ferro e ácido fólico, ovos e corantes naturais',
    690,
    5,
    3
  ),
  (
    'Massa para Lasanha',
    'Uma reunião de família precisa ter comida boa e muita alegria.',
    875,
    19,
    3
  ),
  (
    'Refrigerante Coca-Cola lata',
    'Sabor original',
    350,
    189,
    4
  ),
  (
    'Refrigerante Pepsi 2l',
    'NÃO CONTÉM GLÚTEN. NÃO ALCOÓLICO.',
    700,
    12,
    4
  ),
  (
    'Cerveja Heineken 600ml',
    'Heineken é uma cerveja lager Puro Malte, refrescante e de cor amarelo-dourado',
    1200,
    500,
    4
  ),
  (
    'Agua mineral sem gás',
    'Smartwater é água adicionado de sais mineirais (cálcio, potássio e magnésio) livre de sódio e com pH neutro.',
    130,
    478,
    4
  ),
  (
    'Vassoura',
    'Pigmento, matéria sintética e metal.',
    2350,
    30,
    5
  ),
  (
    'Saco para Lixo',
    'Reforçado para garantir mais segurança',
    1340,
    90,
    5
  ),
  (
    'Escova Dental',
    'Faça uma limpeza profunda com a tecnologia inovadora',
    1000,
    44,
    5
  ),
  (
    'Balde para Lixo 50l',
    'Possui tampa e fabricado com material reciclado',
    2290,
    55,
    5
  ),
  (
    'Manga',
    'Rico em Vitamina A, potássio e vitamina C',
    198,
    176,
    1
  ),
  ('Uva', 'NÃO CONTÉM GLÚTEN.', 420, 90, 1);

-- 3 Alimentar a Tabela "clientes"
INSERT INTO
  clientes (cpf, nome)
VALUES
  ('80371350042', 'José Augusto Silva'),
  ('67642869061', 'Antonio Oliveira'),
  ('63193310034', 'Ana Rodrigues'),
  ('75670505018', 'Maria da Conceição');

-- 4 Alimentar a Tabela "vendedores"
INSERT INTO
  vendedores (cpf, nome)
VALUES
  ('82539841031', 'Rodrigo Sampaio'),
  ('23262546003', 'Beatriz Souza Santos'),
  ('28007155023', 'Carlos Eduardo');

-- 5 - Simulando algumas vendas
-- [a]
INSERT INTO
  pedidos (cliente_cpf, vendedor_cpf)
VALUES
  ('80371350042', '28007155023');

UPDATE
  pedidos
SET
  valor = 300 + 700 + (6 * 1200) + 1000 + (5 * 90)
WHERE
  id = 1;

INSERT INTO
  itens_do_pedido (pedido_id, quantidade, produto_id)
VALUES
  (1, 1, 1),
  (1, 1, 10),
  (1, 6, 11),
  (1, 1, 15),
  (1, 5, 2);

UPDATE
  produtos
SET
  quantidade_em_estoque = quantidade_em_estoque - 1
WHERE
  id = 1;

UPDATE
  produtos
SET
  quantidade_em_estoque = quantidade_em_estoque - 1
WHERE
  id = 10;

UPDATE
  produtos
SET
  quantidade_em_estoque = quantidade_em_estoque - 6
WHERE
  id = 11;

UPDATE
  produtos
SET
  quantidade_em_estoque = quantidade_em_estoque - 1
WHERE
  id = 15;

UPDATE
  produtos
SET
  quantidade_em_estoque = quantidade_em_estoque - 5
WHERE
  id = 2;