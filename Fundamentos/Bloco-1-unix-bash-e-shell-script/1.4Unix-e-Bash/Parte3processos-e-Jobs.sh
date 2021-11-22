#Processos e Jobs

echo 'Liste todos os processos'
ps

echo 'Agora execute o comando [sleep](https://linux.die.net/man/3/sleep) {: .external-link target="_blank" rel="noreferrer noopener" } 30 [&](https://linuxhandbook.com/run-process-background/) {: .external-link target="_blank" rel="noreferrer noopener" }'
sleep 30 &

echo 'Encontre o PID do processo que está executando o comando sleep 30 e termine sua execução'
ps | grep sleep
kill 1234 

echo 'Execute novamente o comando sleep 30 , mas agora sem o & . Depois, faça com que ele continue executando em background
'
sleep 30
#aperte "Ctrl z"
bg 

echo 'Crie um processo em background que rode o comando sleep por 300 segundos'
sleep 300 &

echo 'Crie mais dois processos que rodem o comando sleep por 200 e 100 segundos, respectivamente. Você deve criá-los em foreground (sem usar o & ) e enviá-los para background após cada um começar a executar'
sleep 200
#ctrl+Z
sleep 100
#ctrl+z

echo 'Verifique que apenas o processo sleep 300 está em execução com o comando jobs . Suspenda a execução desse processo'
jobs
fg %1
#ctrl+z
jobs

echo 'Retome a execução do processo sleep 100 em background'
bg %3
jobs

echo 'Termine a execução de todos os processos sleep'
killall sleep

