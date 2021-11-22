#Comandos de Inpu e Output

echo 'navegue até unix_tests'
cd unix_tests

echo 'Crie um arquivo skills2.txt'
touch skills2.txt

echo 'Adicione Internet,Unix e Bash em skills2.txt'
echo "Internet" >> skills2.txt
echo "Unix" >> skills2.txt
echo "Bash" >> skills2.txt

echo 'Adicione mais 5 intens a skills e imprima a lista ordenada'
echo "HTML" >> skills2.txt
echo "CSS"  >> skills2.txt
echo "JavaScript" >> skills2.txt
echo "Comunicação" >> skills2.txt
echo "Trabalho em equipe" >> skills2.txt
sort < skills2.txt

echo 'Conte quantas linhas tem o arquivo skills2.txt'
cat skills2.txt | wc -l

echo 'Crie um arquivo chamado top_skills.txt usando skills2.txt, contendo as 3 primeiras skills em ordem alfabetica'
sort < skills2.txt | head -n 3 > top_skills.txt

echo 'Crie um arquivo chamdo phrases2.txt e adicione frases'
touch phrases2.txt
echo "Eu amo musicais" >> phrases2.txt
echo "É muito bom viajar" >> phrases2.txt
echo "Eu prefiro o calor" >> phrases2.txt

echo 'Conte o numero de linhas que contêm as letras br'
grep br phrases2.txt | wc -l

echo 'Conte o numero de linahs que não contêm as letras br'
grep -v br phrases2.txt | wc -l

echo 'Adicione dois nomes de paises ao final de phrases2.txt'
echo "Coreia do Sul" >> phrases2.txt
echo "França" >> phrases2.txt

echo 'Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos de phrases2.txt e countries.txt'
cp countries.txt bunch_of_things.txt
cat phrases2.txt >> bunch_of_things

echo 'Ordene o arquivo bunch_of_things.txt'
sort bunch_of_things.txt -o bunch_of_things.txt

