### link do projeto
https://e-commerce2-0.vercel.app/


![alt text](./public/siteImg.png)


### Site feito em React.js utilizando frameworks como Material UI, Bootstrap. Também se fez uso de Redux para mudança de estados. Este app está consumindo a api https://github.com/fabio460/api-E-commerce. 

#### O sistema permite expor os produtos com uma lista com 8 itens por tela, usando paginação e um campo de busca dinâmica. Possui um header com os itens separando idades, sexo e plus size. 

O sistema também possui uma tela de carrinho de compras que o usuário pode adicionar alterar e excluir itens no carrinho, um campo de CEPs que busca o endereço correspondente utilizando a API dos correios, quando inserido o CEP o sistema puxa as informações correspondentes ao CEP informado. Quando a lista está vazia, o botão de concluir a compra fica desabilitado.  

Quando o carrinho não está cheio e o campo cep não está vazio, o botão concluir habilita e se o usuário estiver deslogado, aparece um botão direcionando o usuário ao login, com usuário devidamente logado e passando pelas restrições mencionadas, então aparece um modal com as informações da compra junto com as informações do usuário. 
