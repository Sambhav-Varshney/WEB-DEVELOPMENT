document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            
            // Close all other open answers
            document.querySelectorAll('.faq-answer.open').forEach(openAnswer => {
                if (openAnswer !== answer) {
                    openAnswer.classList.remove('open');
                    openAnswer.previousElementSibling.classList.remove('active');
                }
            });

            // Toggle the clicked answer
            answer.classList.toggle('open');
            question.classList.toggle('active');
        });
    });

    // Language Selector Functionality
    const languageSelectors = document.querySelectorAll('.language-select, .language-select-footer');

    languageSelectors.forEach(selector => {
        selector.addEventListener('change', (event) => {
            const selectedLanguage = event.target.value;
            console.log('Language changed to:', selectedLanguage);

            // Sync both dropdowns
            languageSelectors.forEach(otherSelector => {
                otherSelector.value = selectedLanguage;
            });
        });
    });

    // --- New Code for 'Get Started' Button ---
    const getStartedButtons = document.querySelectorAll('.btn-red');
    const emailInputs = document.querySelectorAll('input[type="email"]');

    getStartedButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevents the form from submitting in a real scenario
            
            // Find the closest email input to the button that was clicked
            const parentSection = button.closest('.hero, .faq');
            const emailInput = parentSection.querySelector('input[type="email"]');
            
            if (emailInput && emailInput.value) {
                alert(`Thank you for your interest! An account would be created for ${emailInput.value} on a real Netflix website. This is a project clone.`);
                emailInput.value = ''; // Clear the input field
            } else {
                alert('Please enter a valid email address to get started.');
            }
        });
    });
});