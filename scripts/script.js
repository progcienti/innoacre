document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
  
    links.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
  
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 50, // Ajusta para não cobrir o topo
            behavior: "smooth"
          });
        }
      });
    });
  });

function showProjectDetails(projectId) {
    let details = {
      'project1': '<h2>Impressora 3D de Baixo Custo</h2><p>A proposta da impressora 3D de baixo custo da InnoAcre é criar uma solução acessível, sustentável e funcional, utilizando componentes reaproveitados e de fácil obtenção. Nossa impressora é projetada para ser montada com materiais acessíveis, aproveitando peças recicladas e adaptadas, sem comprometer a qualidade das impressões. Essa proposta reflete a evolução das tecnologias de manufatura aditiva e a capacidade de integrar inovação com sustentabilidade.</p>',
      'project2': '<h2>Máquina de Filamentos Reciclados</h2><p>A proposta da Máquina de Filamentos da InnoAcre é criar uma solução inovadora e sustentável para a fabricação de filamentos para impressão 3D utilizando garrafas PET. Essa abordagem promove a reutilização de materiais plásticos descartados, reduzindo o impacto ambiental e fornecendo uma alternativa acessível para a produção de filamentos de alta qualidade.</p>'
    };
    
    document.getElementById('projectDetails').innerHTML = details[projectId];
    document.getElementById('projectModal').style.display = 'block';
  }

  function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
  }