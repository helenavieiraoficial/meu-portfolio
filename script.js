// Exemplo de como os dados serão estruturados
const ofertas = [
    {
        titulo: "Produto em Oferta - Shopee",
        imagem: "https://via.placeholder.com/150",
        link: "https://shopee.com.br/seu-link-afiliado",
        preco: "R$ 49,90"
    },
    {
        titulo: "Oferta Especial - Magalu",
        imagem: "https://via.placeholder.com/150",
        link: "https://www.magalu.com.br/seu-link",
        preco: "R$ 89,00"
    }
];

function carregarOfertas() {
    const grid = document.querySelector('.grid');
    
    // Limpa o conteúdo atual para carregar os novos
    grid.innerHTML = '';

    ofertas.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <img src="${item.imagem}" alt="${item.titulo}" style="width:100%; border-radius:8px;">
            <h3>${item.titulo}</h3>
            <p style="color: #e67e22; font-weight: bold;">${item.preco}</p>
            <a href="${item.link}" target="_blank" style="display:block; background:#27ae60; color:#fff; text-align:center; padding:10px; border-radius:5px; text-decoration:none;">Ver Oferta</a>
        `;
        
        grid.appendChild(card);
    });
}

// Executa a função ao carregar a página
window.onload = carregarOfertas;
