let previewCountries= document.querySelector('.countries-preview');
let previewBox = previewCountries.querySelectorAll('.preview');

document.querySelectorAll('.countriesinf .flags').forEach(flags =>{
    flags.onclick = () =>{
        previewCountries.style.display='flex';
        let name = flags.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target= preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});
previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = () =>{
      close.classList.remove('active');
      previewCountries.style.display = 'none';
    };
  })
  

