document.addEventListener("DOMContentLoaded", function () {
    // Diagnóstico interactivo
    const form = document.getElementById('diagnostico-form');
    const resultDiv = document.getElementById('diagnostico-result');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const question1 = parseInt(document.getElementById('question1').value);
        const question2 = parseInt(document.getElementById('question2').value);
        const score = question1 + question2;

        let resultMessage = '';
        if (score < 2) {
            resultMessage = 'Riesgo bajo de ludopatía.';
        } else if (score < 4) {
            resultMessage = 'Riesgo moderado de ludopatía.';
        } else {
            resultMessage = 'Alto riesgo de ludopatía. Se recomienda tratamiento inmediato.';
        }

        resultDiv.textContent = resultMessage;
    });

    // Interacción con recursos
    document.querySelectorAll('.resource-card button').forEach(button => {
        button.addEventListener('click', () => {
            alert('Recurso en desarrollo. Pronto estará disponible.');
        });
    });

    // Contacto
    const contactoForm = document.getElementById('contacto-form');
    contactoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Mensaje enviado exitosamente.');
    });
});
