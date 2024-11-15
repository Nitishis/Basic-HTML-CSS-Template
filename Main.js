document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('input[name="unit"]');
  
    radioButtons.forEach((radio) => {
      radio.addEventListener('change', () => {
        // Remove active class from all unit options and their content sections
        document.querySelectorAll('.unit-option').forEach(option => {
          option.classList.remove('active');
          option.querySelector('.selection-container')?.classList.remove('active');
        });
  
        // Find the parent unit-option of the clicked radio button
        const parentOption = radio.closest('.unit-option');
        if (parentOption) {
          // Add active class to the selected unit option and its content
          parentOption.classList.add('active');
          const selectedContent = parentOption.querySelector('.selection-container');
          if (selectedContent) {
            selectedContent.classList.add('active');
          }
        }
      });
    });
  });
  