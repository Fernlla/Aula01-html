📌 Descrição do Produto – SideLook (PT-BR)

SideLook é um aplicativo leve (mobile/web) que permite que usuários enviem de 5 a 20 fotos de roupas, utilize visão computacional + LLM para catalogar automaticamente as peças e gere sugestões de looks curados.
Fluxos principais: upload do guarda-roupa, categorização automática via IA, geração de três looks por evento, salvar/compartilhar looks e receber diariamente um “Look do Dia” baseado no clima.
O MVP foca em validação rápida e retenção, com limites no plano gratuito e um plano Premium simples.

🎯 Principais Funcionalidades

Usuários podem criar conta e autenticar

Usuários podem concluir onboarding e definir preferências de estilo

Usuários podem enviar fotos e catalogar roupas

Usuários podem usar IA para tagueamento automático

Usuários podem gerar 3 looks por evento usando seu guarda-roupa

Usuários podem ajustar, trocar peças e regerar looks

Usuários podem salvar, organizar, baixar e compartilhar looks

Usuários podem receber um “Look do Dia” baseado no clima

Usuários podem fazer upgrade para Premium e respeitar limites do plano gratuito

👤 User Stories (Histórias de Usuário)
1. Signup e Autenticação
Como visitante, quero me cadastrar com e-mail para criar uma conta.

DADO que o visitante está na página de cadastro
QUANDO ele envia nome, e-mail válido e senha
ENTÃO a conta é criada
E ele é direcionado para o onboarding

Como usuário, quero login com Google para entrar rapidamente.

DADO que o visitante está na página de login
QUANDO ele clicar em “Entrar com Google” e concluir o OAuth
ENTÃO ele é autenticado
E vai para o guarda-roupa (ou onboarding, caso seja primeiro acesso)

Como usuário, quero redefinir minha senha para recuperar acesso.

DADO que o usuário está na página de login
QUANDO ele solicitar “Esqueci a senha” e seguir o link enviado
ENTÃO ele pode definir uma nova senha
E entrar com as novas credenciais

2. Onboarding e Preferências de Estilo
Como novo usuário, quero definir minha cidade para que os looks sigam o clima local.

DADO que o usuário recém cadastrado inicia o onboarding
QUANDO selecionar sua cidade e salvar
ENTÃO a cidade é salva no perfil
E recursos baseados em clima usam essa cidade

Como novo usuário, quero escolher preferências de estilo para receber sugestões alinhadas a mim.

DADO que o onboarding está visível
QUANDO o usuário selecionar gênero e estilos preferidos
ENTÃO essas preferências são salvas
E usadas para recomendações futuras

Como usuário, quero editar minhas preferências para melhorar recomendações.

DADO que o usuário está logado em Perfil > Preferências
QUANDO alterar cidade ou estilos e salvar
ENTÃO as novas preferências são aplicadas
E afetam recomendações subsequentes

3. Upload e Catalogação de Roupas
Como usuário, quero enviar várias fotos para montar meu guarda-roupa.

DADO que o usuário está em “Adicionar Peças”
QUANDO selecionar 5–20 fotos e enviar
ENTÃO as imagens são armazenadas na nuvem
E cada upload entra na fila para análise de IA

Como usuário, quero ajustar a categoria manualmente para garantir que esteja correta.

DADO que um item foi enviado
QUANDO o usuário editar a categoria e salvar
ENTÃO a categoria manual substitui a classificação automática

Como usuário, quero ver minhas peças para gerenciá-las.

DADO que o usuário abre “Minhas Peças”
QUANDO a página carrega
ENTÃO é exibida uma grade/lista paginada com fotos e tags

4. Análise de IA para Tagueamento Automático
Como usuário, quero que a IA detecte categoria e cor para catalogar rapidamente.

DADO que o upload foi concluído
QUANDO o sistema chamar a IA de visão
ENTÃO o item é tagueado com categoria, cor principal e nível de confiança

Como usuário, quero que a IA sugira estilo e clima ideal para melhorar combinações.

DADO que a análise de IA foi concluída
QUANDO os resultados incluírem estilo e clima adequado
ENTÃO as tags são salvas no metadata do item

Como usuário, quero corrigir tags da IA para manter tudo preciso.

DADO que o item tem tags de IA
QUANDO o usuário editar e confirmar
ENTÃO os valores corrigidos substituem os anteriores
E a alteração marca feedback para o sistema

5. Geração de Looks
Como usuário, quero solicitar looks para um evento e receber opções.

DADO que o usuário está em “Gerar Look”
QUANDO escolher o tipo de evento e clicar “Gerar”
ENTÃO o sistema produz três sugestões usando suas peças

Como usuário, quero três sugestões diferentes para ter variedade.

DADO que a geração é concluída
QUANDO os resultados aparecem
ENTÃO três looks distintos são exibidos com fotos das peças usadas

Como usuário, quero filtros para resultados contextualizados.

DADO que o usuário aplica filtros (clima, formalidade, modo clima)
QUANDO gerar looks
ENTÃO os resultados respeitam os filtros
E exibem quais filtros foram aplicados

6. Ajustes e Regeneração de Looks
Como usuário, quero trocar uma peça do look para ajustá-lo ao meu gosto.

DADO que um look está aberto
QUANDO o usuário clicar em “Trocar” e escolher outra peça
ENTÃO o look é atualizado instantaneamente

Como usuário, quero regerar variações para ver outras combinações.

DADO que o usuário visualiza um look
QUANDO clicar “Regenerar variações”
ENTÃO o sistema mostra 2–3 novas alternativas

Como usuário, quero priorizar uma peça favorita para incluí-la nos looks.

DADO que um item é marcado como favorito
QUANDO o usuário gerar looks
ENTÃO a IA tenta incluir a peça prioritária quando possível

7. Salvar, Organizar, Baixar e Compartilhar Looks
Como usuário, quero salvar um look para usar depois.

DADO que o look está visível
QUANDO clicar “Salvar” e nomear
ENTÃO o look aparece em “Looks Salvos”

Como usuário, quero criar coleções para organizar meus looks.

DADO que está em “Looks Salvos”
QUANDO criar uma coleção e adicionar looks
ENTÃO os looks ficam agrupados nela

Como usuário, quero baixar ou compartilhar um look.

DADO que o look salvo está aberto
QUANDO clicar “Compartilhar” ou “Download”
ENTÃO o app gera uma imagem ou link compartilhável

8. Look do Dia
Como usuário, quero um look diário baseado na minha cidade.

DADO que o usuário tem cidade definida e peças enviadas
QUANDO a tarefa diária rodar
ENTÃO um look é gerado automaticamente

Como usuário, quero receber notificação matinal para abrir o app.

DADO que notificações estão ativadas
QUANDO o look diário for gerado
ENTÃO o usuário recebe um push/email

Como usuário, quero gerar variações do look diário.

DADO que o look do dia está visível
QUANDO clicar “Gerar variações”
ENTÃO 2–3 alternativas são produzidas

9. Premium e Limites do Freemium
Como usuário gratuito, quero entender claramente os limites.

DADO que o usuário gratuito tenta uma ação premium
QUANDO ultrapassar limites
ENTÃO um modal explica restrições e mostra CTA de upgrade

Como usuário, quero fazer upgrade para Premium e liberar tudo.

DADO que o usuário escolhe o plano
QUANDO o pagamento for concluído
ENTÃO a conta é atualizada imediatamente

Como usuário, quero ser avisado se houver falha no pagamento.

DADO que uma cobrança falha
QUANDO o provedor retornar erro
ENTÃO o usuário recebe email e notificação no app