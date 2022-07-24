let iframes = [
    "https://www.youtube.com/embed/iiHKnpiXm-o",
    "https://www.youtube.com/embed/z2spS4Lc3CM",
    "https://www.youtube.com/embed/uSNOWCY9VRA",
    "https://www.youtube.com/embed/iG-dkHen-tk",
    "https://www.youtube.com/embed/bli7v4IQxUs",
    "https://www.youtube.com/embed/AH1dYPbT6Hg",
    "https://www.youtube.com/embed/ld9m8Xrpko0",
    "https://www.youtube.com/embed/3bFCqK81s7Y",
    "https://www.youtube.com/embed/R4sGOhNqOpQ",
    "https://www.youtube.com/embed/midBr3d3MUg"
]

let sinopses = [
    'Joe Potter (Rafe Spall) e Matt Trent (Jon Hamm) estão abrigados em um pequeno e remoto posto avançado no meio de um deserto nevado. Joe acorda em um dia de Natal e encontra Matt preparando uma ceia natalina, a música "I Wish It Could Be Christmas Everyday" está tocando no rádio. Matt tenta fazer com que Joe fale sobre o que o levou até o posto avançado, assunto este que Matt diz que eles nunca discutiram nos cinco anos em que estiveram juntos.',
    'Uma mulher (Lenora Crichlow) acorda em uma casa e descobre que está com amnésia. Ela se vê cercada por imagens de uma menina pequena (Imani Jackman) — que ela assume como sua filha —, bem como fotos de si mesma e um homem (Nick Ofield). A mulher sai da casa e vê várias pessoas gravando-a em seus telefones, mas ignorando seus pedidos de ajuda. Um homem mascarado chega e começa a atirar nela com uma espingarda.',
    'Situado em um futuro distópico, onde a maioria da sociedade deve pedalar bicicletas de exercícios para produzir eletricidade e ganhar uma moeda chamada "Méritos", o episódio conta a história de Bing (Daniel Kaluuya), que tem sua vida mudada quando conhece Abi (Jessica Brown Findlay). Convencido de que Abi tem um talento único para cantar, ele também a convence e a ajuda a participar de um show de talentos para que ela possa escapar do mundo escravo à sua volta.',
    'O episódio conta a história de um adolescente que é chantageado por um misterioso hacker que possui um vídeo íntimo dele. Forçado a cometer atos bizarros e criminosos, o jovem é acompanhado por um homem de meia-idade, também uma vítima que o hacker está chantageando com provas de infidelidade conjugal.',
    'Lacie Pound (Bryce Dallas Howard) vive em um mundo onde as pessoas podem avaliar popularidades com cinco estrelas. Lacie, que é obcecada por ser bem recebida, começa o episódio com um índice de aprovação em torno de 4.2. Ela mora com seu irmão Ryan (James Norton), que tem um índice de aprovação inferior e não se preocupa com isso',
    'Amy (Georgina Campbell) e Frank (Joe Cole) são duas de muitas pessoas em um Sistema que são instruídos por uma companheira digital, a Assistente (voz de Gina Bramhill), em relacionamentos românticos com os outros. A assistente determina quanto tempo os parceiros podem gastar juntos, coleta seus dados e os ajuda a encontrar sua "alma gêmea".',
    'Martha (Hayley Atwell) e Ash (Domhnall Gleeson) são um jovem casal que se mudam para uma casa remota no campo. Um dia após a mudança, Ash é morto ao tentar retornar para casa em uma van alugada. Depois de descobrir que está grávida, Martha relutantemente experimenta um novo serviço online que permite que as pessoas permaneçam em contato com o falecido. Usando todos os seus últimos perfis de comunicação online e redes sociais, um novo "Ash" pôde ser criado virtualmente.',
    'O episódio é ambientado em uma realidade alternativa onde a maioria das pessoas possuem implantes em forma de "grãos" que gravam tudo o que fazem, vêem ou ouvem, e também permite que eles reproduzam suas lembranças na frente de seus olhos ou em uma tela. A história segue Liam (Toby Kebbell), um homem que começa a suspeitar que sua esposa Ffion (Jodie Whittaker) poderia ter tido um caso com um amante.',
    '"Arkangel" é o nome de uma tecnologia de implante que permite que os pais acompanharem e monitorarem seus filhos, que também traz imagens pixeladas que lhes causam aflição. A mãe solteira Marie (interpretada por Rosemarie DeWitt) tem sua filha, Sara (Brenna Harding) implantada com o Arkangel, que, enquanto efetivamente eficaz, se torna um obstáculo perigoso.',
    'No episódio, o primeiro-ministro britânico (Rory Kinnear) desperta de manhã para ser informado pelo Ministro do Interior (Lindsay Duncan) que a Princesa Susannah (Lydia Wilson), um membro muito amado da Família Real, foi sequestrada e será assassinada caso o primeiro-ministro se recuse a ter relações sexuais com um porco na televisão nacional.',
]

let titles = [
    "White Christmas",
    "White Bear",
    "Fifteen Million Merits",
    "Shut Up and Dance",
    "Nosedive",
    "Hang the DJ",
    "Be Right Back",
    "The Entire History of You",
    "Arkangel",
    "The National Anthem",
]

let epsCardImg = document.querySelectorAll(".eps-cardImg");
let teste = document.querySelector("#teste");
let modal = document.querySelector("#modal");
let btCLose = document.querySelector("#bt_close");
let iframe = document.querySelector(".iframe");
let sinopse = document.querySelector(".modal-sinopse");
let title = document.querySelector(".modal-title");
let srcValor = ""; 

btCLose.addEventListener("click", function(){
    modal.classList.toggle('show');

    srcValor = "";
    iframe.setAttribute("src", srcValor);
});

for (let i = 0; i <= epsCardImg.length; i++) {
    epsCardImg[i].addEventListener("click", function() {
        modal.classList.toggle('show');
        srcValor = iframes[i];
        iframe.setAttribute("src", srcValor);
        sinopseText = sinopses[i];
        sinopse.innerHTML = sinopseText;
        titleText = titles[i];
        title.innerHTML = titleText;
    });
}


