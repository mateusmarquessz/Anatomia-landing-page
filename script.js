const modal = document.getElementById('modalOverlay')

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        modal.classList.remove('hidden')
        modal.querySelector('#modalTitle').innerText = card.dataset.title
        modal.querySelector('#modalTag').innerText = card.dataset.tag
        modal.querySelector('#modalImage').src = card.dataset.image
        modal.querySelector('#modalDescription').innerText = card.dataset.description
        const prognosticList = modal.querySelector('#modalPrognostic')
        prognosticList.innerHTML = "" // limpa antes

        const items = card.dataset.prognostic.split('|')

        items.forEach(item => {
            const li = document.createElement('li')
            li.innerText = item
            prognosticList.appendChild(li)
        })

        const treatmentList = modal.querySelector('#modalTreatment')
        treatmentList.innerHTML = "" // limpa antes

        const treatmentItems = card.dataset.treatment.split('|')

        treatmentItems.forEach(item => {
            const li = document.createElement('li')
            li.innerText = item
            treatmentList.appendChild(li)
        })

    })
})

document.getElementById('closeModal').onclick = () => modal.classList.add('hidden')
modal.onclick = e => { if (e.target === modal) modal.classList.add('hidden') }

document.querySelectorAll(".faq-toggle").forEach((button) => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector("span:last-child");

        content.classList.toggle("hidden");
        icon.textContent = content.classList.contains("hidden") ? "▼" : "▲";
    });
});


const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

document.querySelectorAll(".fade-up").forEach(el => {
    observer.observe(el);
});


document.querySelectorAll(".faq-toggle").forEach(button => {
    button.addEventListener("click", () => {
        const item = button.closest(".faq-item");
        item.classList.toggle("active");
    });
});
document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.closest('.faq-item');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.faq-icon');
        const title = item.querySelector('.faq-title');

        content.classList.toggle('hidden');

        item.classList.toggle('bg-green-50');
        item.classList.toggle('border-green-300');

        title.classList.toggle('text-green-700');

        icon.classList.toggle('rotate-180');
        icon.classList.toggle('text-green-600');
    });
});


    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');

    btn.addEventListener('click', () => {
        // Verifica se está fechado
        const isClosed = menu.classList.contains('max-h-0');

        if (isClosed) {
            // Abre o menu
            menu.classList.remove('max-h-0', 'opacity-0');
            menu.classList.add('max-h-[300px]', 'opacity-100'); // 300px é um valor seguro para caber os links
            icon.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // Transforma em X
        } else {
            // Fecha o menu
            menu.classList.remove('max-h-[300px]', 'opacity-100');
            menu.classList.add('max-h-0', 'opacity-0');
            icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Volta para Hambúrguer
        }
    });

    // Fecha ao clicar em um link (opcional, mas recomendado)
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('max-h-[300px]', 'opacity-100');
            menu.classList.add('max-h-0', 'opacity-0');
            icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        });
    });