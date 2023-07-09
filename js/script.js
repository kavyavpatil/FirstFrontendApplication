let previewCountries= document.querySelector('.countries-preview');
let previewBox = previewCountries.querySelectorAll('.preview');

document.querySelectorAll('.countriesinf .flags').forEach(product =>{
    product.onclick = () =>{
        previewCountries.style.display='flex';
        let name = flags.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target= preview.getAttribute('data-target');
            if(name == target){
                previewBox.classList.add('active');
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
  

