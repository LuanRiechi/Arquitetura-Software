# Arquitetura-Software
Repositório criado para desenvolver as atividades da disciplina de arquitetura de software

# Projeto 1

## Descição:
O Projeto 1 da disciplina ES46A - Arquitetura de Software envolve a implementação
de funcionalidades em um projeto e a sua refatoração utilizando padrões de projeto. As funcionalidades e refatorações devem ser implementadas no projeto disponível em: https://github.com/watinha/es46a-2023-2/tree/strategy/
01-design-patterns-template-strategy. Os alunos devem implementar individualmente ou em dupla o projeto.

## Requsitos escolhidos para implementação:
1- Carregar multiplos formatos XML, CSV, YAML, HTML - Padrão de projeto: Decorator;

2- Imprimir multiplos formatos de saída XML, CSV, HTML, JSON - Padrão de projeto: Command

### Rodando o projeto:
Crie um clone do repositorio em seu dispositivo e baixe as dependencias do sistema(Sera necessario ter o node instalado na sua maquina, junto com um gerenciador de pacotes)

Para rodar o projeto pode-se utlizar o comando: node index "formatoEntrada" "formatoSaida"

Valores validos para formato de entrada: json, csv, xml, html, yaml.

Valores validos para saida: html, txt, json, csv, xml