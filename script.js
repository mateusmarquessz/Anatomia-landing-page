const modal = document.getElementById('modalOverlay')

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        modal.classList.remove('hidden')
        modal.querySelector('#modalTitle').innerText = card.dataset.title
        modal.querySelector('#modalTag').innerText = card.dataset.tag
        modal.querySelector('#modalImage').src = card.dataset.image
        modal.querySelector('#modalDescription').innerText = card.dataset.description
        modal.querySelector('#modalTreatment').innerText = card.dataset.treatment
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


