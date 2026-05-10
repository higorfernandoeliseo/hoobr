import data from '../db/projects.json' with { type: 'json' }

const projetosGridDiv = document.querySelector('.projetos-grid');
const divDefault = document.querySelector('#defaultDisplay');
const divListProjects = document.querySelector('#filterDisplay');
const btnLoadMore = document.querySelector('#loadMore');
const h2titleListProjs = document.querySelector('#titleListProjs');
const pInfoCategories = document.querySelector('.info-categories');
const inputsearchEngine = document.querySelector('#searchEngine');
const sidebarDiv = document.querySelector('#sidebar');
const btnAddProject = document.querySelector('#btnContribute')
const modalAddProject = document.querySelector('#modalAddProjeto');
const BtncloseModal = document.querySelector('#closemodalAddProject');
const divOverlaymod = document.querySelector('#overlay');
const divfooter = document.querySelector('#footer');
const datenow = new Date();

const openSobreNos = document.querySelector('#sobrenos');
const modalSobreNos = document.querySelector('#modalSobreNos');
const BtncloseModalSobreNos = document.querySelector('#closemodalSobreNos');

const hamburguer = document.querySelector('.toggle-btn');
hamburguer.addEventListener('click', () => {
    sidebarDiv.classList.toggle('collapsed')
})

divDefault.style.display = 'block';
divListProjects.style.display = 'none';

let ArrayProjects = []
let itensExibidos = 0;
let QuantidadePorVez = 10;

const tirarSelecao = () => {
    const tdSelecionados = [...document.querySelectorAll('.active')];
    tdSelecionados.forEach(el => el.classList.remove('active'))
}

const openModal = (idmodal) => {
    idmodal.style.display = "block";
    divOverlaymod.style.display = "block";
}

const closeModal = (idmodal) => {
    idmodal.style.display = "none";
    divOverlaymod.style.display = "none";
}

const createGrid = (list) => {
        
        const card = document.createElement('article');
        card.classList.add('card-project');

        const titulo = document.createElement('h2');
        
        const titleLink = document.createElement('a');
        titleLink.textContent = list.name;
        titleLink.onclick = () => {
            window.open(`${list.url}`, '_blank');
        }


        const developers = document.createElement('p');
        developers.classList.add('author')
        developers.innerHTML = `Autor: <span>${list.desenvolvedor}</span>`;

        const descricao = document.createElement('p');
        descricao.textContent = list.description;

        const linguagens = document.createElement('p');
        linguagens.classList.add('languages');
        
        const link_ling = document.createElement('p');

        link_ling.innerHTML = `${list.languages.map(ling => `<span>${ling}</span>` ).join('')}`;


        const btnCTARepositorio = document.createElement('button');
        btnCTARepositorio.id = 'openGithub';
        btnCTARepositorio.textContent = 'Ver no Github';
        btnCTARepositorio.onclick = () => {
            window.open(`${list.url}`, '_blank');
        }

        const statusDev = document.createElement('p');


        const categoria = document.createElement('p');
        categoria.classList.add('cat')
        categoria.innerHTML = `Categoria: <span>${list.category}</span>`;

        if(list.status === 0) {
            statusDev.textContent = 'Status: Em Desenvolvimento';
        }else{
            statusDev.style.color = 'red'
            statusDev.textContent = 'Status: Abandonado';
        }

        

        titulo.appendChild(titleLink)
        card.appendChild(titulo)
        card.appendChild(developers);
        card.appendChild(descricao)
        linguagens.appendChild(link_ling)
        card.appendChild(linguagens)
        card.appendChild(btnCTARepositorio)
        card.appendChild(categoria)
        card.appendChild(statusDev)
        projetosGridDiv.appendChild(card);


}

const listGrids = (lists) => { 
    
    projetosGridDiv.innerHTML = '';

    ArrayProjects = [];
    itensExibidos = 0;

    const results = lists.slice().reverse()

    ArrayProjects = results;
    carregarMais();

}


const carregarMais = () => {

    const proximaCarregamento = ArrayProjects.slice(itensExibidos, itensExibidos + QuantidadePorVez);

    proximaCarregamento.forEach(item => {
        createGrid(item)
    })

    itensExibidos += proximaCarregamento.length;

    btnLoadMore.style.display = itensExibidos < ArrayProjects.length ? "block" : "none";

}

const SearchResults = (lists, query) => { 

    projetosGridDiv.innerHTML = '';

    divDefault.style.display = 'none';
    divListProjects.style.display = 'block';

    ArrayProjects = [];
    itensExibidos = 0;

    const results = lists.filter(list => list.name.toLowerCase().includes(query) || list.description.toLowerCase().includes(query))

    if(results.length > 0) {
        
        pInfoCategories.textContent = `${results.length} resultado encontrado.`;

        ArrayProjects = results;
        carregarMais();

    }else{
        pInfoCategories.textContent = `0 resultado encontrado.`;
    }

}


const viewFiltred = (lists, filtro) => {

    projetosGridDiv.innerHTML = '';

    divDefault.style.display = 'none';
    divListProjects.style.display = 'block';

    ArrayProjects = [];
    itensExibidos = 0;

    const findCategory = lists.filter(list => list.category === filtro);
    
    pInfoCategories.textContent = (findCategory.length > 0 ) ? `Essa categoria possui ${findCategory.length} projeto.`: `Essa categoria possui ${findCategory.length} projetos.`;

    ArrayProjects = findCategory;
    carregarMais();

}




const generateMenu = (lists) => {

    const map = new Map();
    for(const item of lists) {
        const key = `${item.category}`;
        map.set(key, item);
    }

    const unicas = Array.from(map.keys());

    const ulmenu = document.querySelector('.sidebar-nav');

        const limenu = document.createElement('li');
        limenu.classList.add('sidebar-item');

        const ahrefmenu = document.createElement('a');
        ahrefmenu.href = `?`;
        ahrefmenu.classList.add('sidebar-link');
        ahrefmenu.textContent = `All`;

        ahrefmenu.addEventListener('click', (e) => {
            e.preventDefault();
            tirarSelecao();
            ahrefmenu.classList.add('active')
            window.history.pushState({}, '', `?` + ``)
            let params = new URLSearchParams(document.location.search);

            divDefault.style.display = 'block';
            divListProjects.style.display = 'none';

            listGrids(data)

        })

        limenu.appendChild(ahrefmenu);
        ulmenu.appendChild(limenu);

    const lista = unicas.map(item => {

        const limenu = document.createElement('li');
        limenu.classList.add('sidebar-item');

        const ahrefmenu = document.createElement('a');
        ahrefmenu.href = `?c=${item}`;
        ahrefmenu.classList.add('sidebar-link');
        ahrefmenu.textContent = `${item}`;

        ahrefmenu.addEventListener('click', (e) => {
            e.preventDefault();
            tirarSelecao();
            ahrefmenu.classList.add('active')
            window.history.pushState({ path: `c=${item}` }, '', `?` + `c=${item}`)
            let params = new URLSearchParams(document.location.search);

            h2titleListProjs.textContent = `${item}`;

            viewFiltred(data, params.get('c'),'')

        })


        limenu.appendChild(ahrefmenu);
        ulmenu.appendChild(limenu);

    })

}

const buscaProjetos = (termos) => {

    if(!termos || termos.trim().length < 3) {
        btnLoadMore.style.display = 'none';
        return;
    }

    SearchResults(data, termos);

}

divfooter.innerHTML = `<p>&copy; ${datenow.getFullYear()} hoobr - Feito por <a href="https://github.com/higorfernandoeliseo">Igor Eliseo</a></p>`

if(window.innerWidth <= 768) {
    document.querySelector('#sidebar').classList.add('collapsed');
}

generateMenu(data)
listGrids(data)
btnLoadMore.addEventListener('click', carregarMais);

openSobreNos.onclick = () => {
    openModal(modalSobreNos);
}

BtncloseModalSobreNos.onclick = () => {
    closeModal(modalSobreNos);
}

btnAddProject.onclick = () => {
    openModal(modalAddProject)
}

BtncloseModal.onclick = () => {
    closeModal(modalAddProject)
}

inputsearchEngine.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {       
        buscaProjetos(inputsearchEngine.value);
    }
})
