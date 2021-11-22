echo 'Baixe um arquivo utilizando o curl'
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

echo 'Mostre o conteudo de countries.txt'
cat countries.txt

echo 'Mostre o conteudo de countries.txt, página por página, até encontrar a Zambia'
less countries.txt

echo 'Mostre novamente o conteúdo de countries.txt pagina por pagina, mas agora utilize um comando para buscar por Zambia '
less countries.txt
#agora que você está dentro do arquivo, digite '/' e pesquise zambia

echo ' Busque Brazil no countries.txt'
grep Brazil countries.txt

echo 'Busque novamente brazil, mas em lower case'
grep -i brazil countries.txt

echo 'Busque a palavra fox em phrases.txt'
grep -v fox phrases.txt

echo 'numero de palavras no arquivo phrases.txt'
wc -w phrases.txt

echo 'numero de linhas em phrases.txt'
wc -l phrases.txt

echo 'Crie empty.tbt e empty.pdf'
touch empty.tbt empty.pdf

echo 'Liste todos os arquivos de unix_tests'
ls -l 

echo 'liste todos os arquivos que terminem com txt'
ls -l *txt

echo 'Liste os que terminem com tbt ou txt'
ls -l *t?t

echo 'Manual de comando ls'
man ls


