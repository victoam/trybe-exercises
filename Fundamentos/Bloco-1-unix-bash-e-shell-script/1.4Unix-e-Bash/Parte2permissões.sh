#Permissões
echo 'Navegue até unix_tests'
cd unix_tests

echo 'Veja as permissões dos arquivos'
ls -l

echo 'Mude a permissão do arquivo bunch_of_things.txt para que todos os usuarios possam ter acesso á leitura e escrita e verifique se está correto'
chmod a+rw bunch_of_things.txt
ls -l

echo 'Tire a permissão de escrita do arquivo bunch_of_things.txt para todos os usuários, verifique se está correto'
chmod a-w bunch_of_things.txt
ls -l

echo 'Volte a permissão do arquivo bunch_of_things.txt para a listada inicialmente'
chmod 644 bunch_of_things.txt
ls -l
