
// Obtém o título da página atual
const titulo = document.getElementById('titulo').textContent;

// Obtém a área onde o conteúdo será inserido
const conteudo = document.getElementById('conteudo');

// Define o conteúdo de acordo com o título da página
switch (titulo) {
    case 'pagina principal':
        conteudo.innerHTML = '<h1>Ofertas do super</h1><img src="url_da_imagem_principal.jpg" alt="Página Principal" />'; // Substitua pela URL da sua imagem
        break;
    case 'Via 2':
    conteudo.innerHTML = '<img src="via21.jpg" alt="Página 1" /> <br> <img src="via22.jpg" alt="Página 1" /> <br> <img src="via23.jpg" alt="Página 1" /> <img src="via24.jpg" alt="Página 1" />'
        break;
    case 'Dotta':
        conteudo.innerHTML = '<img src="dotta1.jpg" alt="Página 1" /> <br> <img src="dotta2.jpg" alt="Página 1" /> <br> <img src="dotta3.jpg" alt="Página 1" /> <img src="dotta4.jpg" alt="Página 1" />' 
        break;
    case 'Stock':
        conteudo.innerHTML = '<img src="stock.jpg" alt="Página 1" /> <br>'; // Substitua pela URL da sua imagem
        break;
    case 'Pomier':
        conteudo.innerHTML = '<img src="pomier1.jpg" alt="Página 1" /> <br> <img src="pomier2.jpg" alt="Página 1" /> <br> <img src="pomier3.jpg" alt="Página 1" /> <br> <img src="pomier4.jpg" alt="Página 1" /> <br> <img src="pomier5.jpg" alt="Página 1" /> <br> <img src="pomier6.jpg" alt="Página 1" /> <br> <img src="pomier7.jpg" alt="Página 1" />'; // Substitua pela URL da sua imagem
        break; 
    
    case 'Super Correa':
            conteudo.innerHTML = '<img src="correa1.jpg" alt="Página 1" /> <br> <img src="corre2.jpg" alt="panfleto2" /> <br> <img src="corre3.jpg" alt="Página 1" /> <br> <img src="corre4.jpg" alt="Página 1" /> <br> <img src="correa5.jpg" alt="Página 1" /> <br> <img src="correa6.jpg" alt="Página 1" /> <br> <img src="correa7.jpg" alt="Página 1" />'; // Substitua pela URL da sua imagem
            break;
    case 'Super do sul':
        conteudo.innerHTML = '<img src="sul1.jpg" alt="Página 1" />   <br> <img src="sul2.jpg" alt="Página 1" />'; // Substitua pela URL da sua imagem
        break;  
    case 'Ramos':
        conteudo.innerHTML = '<img src="ramos.jpg" alt="Página 1" /> <br> <img src="ramos1.jpg" alt="Página 1" /> <br> <img src="ramos2.jpg" alt="Página 1" /> <br> <img src="ramos3.jpg" alt="Página 1" /> <br> <img src="ramos4.jpg" alt="Página 1" /> <br> <img src="ramos5.jpg" alt="Página 1" /> <br> <img src="ramos6.jpg" alt="Página 1" /> <br> <img src="ramos7.jpg" alt="Página 1" /> <br> <img src="ramos8.jpg" alt="Página 1" /> '; // Substitua pela URL da sua imagem
        break;
    case 'Super santa Rita':
        conteudo.innerHTML = '<img src="file:///C:/Users/Andr%C3%A9/Downloads/download.jfif" alt="Página 1" /> <br> <img src="file:///C:/Users/Andr%C3%A9/Downloads/download.jfif" alt="Página 1" />'; // Substitua pela URL da sua imagem
        break;                        
    default:
        conteudo.innerHTML = '<img src="url_da_imagem_nao_encontrada.jpg" alt="Conteúdo não encontrado" />'; // Substitua pela URL da sua imagem
        break;
}
