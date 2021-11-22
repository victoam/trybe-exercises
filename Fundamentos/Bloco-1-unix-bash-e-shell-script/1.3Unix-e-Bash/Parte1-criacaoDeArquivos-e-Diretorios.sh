#Criação de arquivos e diretórios

echo 'crie um diretorio unix_tests e navegue até ele'
mkdir unix_tests
cd unix_tests

echo 'Crie um arquivo de texto com o nome trybe.txt'
touch trybe.txt

echo 'Coṕia do arquivo trybe.txt com o nome trybe_backup.txt'
cp trybe.txt trybe_backup.txt

echo 'Renomeie trybe.txt'
mv trybe.txt trybe.txt1

echo 'Crie um novo diretorio chamado backup' 
mkdir backup

echo 'Mova trybe_backup.txt para backup'
mv trybe_backup.txt backup

echo 'Crie um novo diretório chamado backup2'
mkdir backup2

echo 'Mova trybe_backup.txt da pasta backup para a pasta backup2'
mv backup/trybe_backup.txt backup2

echo 'Apague backup'
rmdir backup

echo 'Renomeie a pasta backup2 para backup'
mv backup2 backup

echo 'Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele'
pwd
ls -a

echo 'Apague o diretório backup '
rm -r backup

echo 'Limpe o terminal'
clear

echo 'Crie um arquivo de texto chamado skills.txt'
touch skills.txt

echo 'Mostre na tela as 5 primeiras skills do arquivo skills.txt'
head -5 skills.txt

echo 'Mostre na tela as 4 últimas skills do arquivo skills.txt'
tail -4 skills.txt

echo 'Apague todos os arquivos que terminem em .txt'
rm *.txt
