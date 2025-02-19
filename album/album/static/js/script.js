function verImagen(indice) {
    const imagenes = [
      ['https://is4-ssl.mzstatic.com/image/thumb/Video123/v4/3b/8e/c3/3b8ec32a-9e26-2def-0168-3574637a0abc/pr_source.lsr/1200x675.jpg', 'https://image.tmdb.org/t/p/original/br7n8b3ELexcvs6l30IH2x9P2ux.jpg', 'https://imagenes.20minutos.es/files/gallery_desktop_default_content/uploads/imagenes/2022/07/16/harry-potter-y-la-orden-del-fenix-2007-4.jpeg'],
      ['https://th.bing.com/th/id/OIP.ZHI34IvkovtZnLou1OOgDwHaHa?rs=1&pid=ImgDetMain', 'https://th.bing.com/th/id/OIP.-u5Ys-cUAquD4iI8mG_RvgHaHg?rs=1&pid=ImgDetMain', 'https://th.bing.com/th/id/OIP.hKNBJlznC9zr-gPVq8CAzwHaHa?rs=1&pid=ImgDetMain'],
      ['https://th.bing.com/th/id/OIP.PCcuBkPzzHHrThk09qVnpwHaJL?rs=1&pid=ImgDetMain', 'https://th.bing.com/th/id/OIP.HAu8l9ToJmaNvUVYqmDe2AHaE8?rs=1&pid=ImgDetMain', 'https://th.bing.com/th/id/R.a4dc4cb6e12140010af594d430490ada?rik=1SRmIHwXQdpiHg&riu=http%3a%2f%2fwww.unileverfoodsolutions.com.co%2fdam%2fglobal-ufs%2fmcos%2fNOLA%2fcalcmenu%2frecipes%2fcol-recipies%2ffruco-tomate-cocineros%2fHAMBURGUESA+1200x709.png&ehk=12fD27rm5Fj4INOTvgq3Z0yMS3mcsABh5%2fS%2b0d7m3II%3d&risl=&pid=ImgRaw&r=0'],
      ['https://th.bing.com/th/id/R.fd65627d643a08c7690e5ec27b9a6518?rik=iNIkSSoePR6OpQ&pid=ImgRaw&r=0', 'https://th.bing.com/th/id/R.7457066d1d93c40a82035705c39707d0?rik=mY9smNs1DrTkqQ&riu=http%3a%2f%2fwww.passthecontroller.co.uk%2fuploads%2f6%2f9%2f2%2f8%2f69285419%2f1920x1080_orig.jpg&ehk=KtVe4Md47gQ7Ck2NdPzL%2fAHLftCCJErOpSZ9sDGuPfc%3d&risl=&pid=ImgRaw&r=0', 'https://cdn1.epicgames.com/offer/fn/Blade_2560x1440_2560x1440-95718a8046a942675a0bc4d27560e2bb'],
      ['https://th.bing.com/th/id/OIP.BQ8nJo_lRPiUVp9UBuV4GgHaEi?rs=1&pid=ImgDetMain', 'https://th.bing.com/th/id/OIP.Qo2zz9QUVRS5fiEBvPsxuwHaES?rs=1&pid=ImgDetMain', 'https://th.bing.com/th/id/R.8f98430c45eb73d107944359dab48a41?rik=ChZ1gsJhIjVtIA&pid=ImgRaw&r=0'],
      ['https://th.bing.com/th/id/OIP.MSTm4Uc1YcZMmOrrAjFGrAHaEK?rs=1&pid=ImgDetMain', 'https://content.skyscnr.com/m/7e1dce4212154ea9/original/GettyImages-490642704.jpg?resize=1800px:1800px&quality=100', 'https://elluchador.info/wp-content/uploads/2025/02/bandera-colombia-getty-images.jpg']
    ];

    const imagenesSeleccionadas = imagenes[indice];
    const carouselImages = document.getElementById('carouselImages');
    carouselImages.innerHTML = '';

    imagenesSeleccionadas.forEach((imgSrc, i) => {
      const div = document.createElement('div');
      div.classList.add('carousel-item');
      if (i === 0) div.classList.add('active');
      div.innerHTML = `<img src="${imgSrc}" class="d-block w-100" alt="Imagen ${i + 1}">`;
      carouselImages.appendChild(div);
    });

    const modal = new bootstrap.Modal(document.getElementById('modal'));
    modal.show();
  }

  function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const button = document.querySelector('.theme-toggle');
    if (body.classList.contains('dark-theme')) {
      button.innerHTML = '🌞';
    } else {
      button.innerHTML = '🌙';
    }
  }