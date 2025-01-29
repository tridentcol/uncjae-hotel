import os

def extract_code(src_dir, output_file):
    with open(output_file, 'w', encoding='utf-8') as f:
        # Escribir encabezado
        f.write('CÓDIGO DEL PROYECTO JAELEN HOTEL\n')
        f.write('=' * 80 + '\n\n')

        # Escribir estructura de carpetas
        f.write('ESTRUCTURA DE CARPETAS\n')
        f.write('=' * 80 + '\n')
        f.write("""├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── sections/
│   │   │   │   ├── places/
│   │   │   │   │   ├── socorro/
│   │   │   │   │   │   ├── places-socorro.jpg
│   │   │   │   │   │   ├── room-bathroom.jpg
│   │   │   │   │   │   ├── room-bedroom.jpg
│   │   │   │   │   │   ├── room-living.jpg
│   │   │   │   │   │   ├── room-main.jpg
│   │   │   │   │   │   └── room-view.jpg
│   │   │   │   │   ├── zaragocilla/
│   │   │   │   │   │   └── places-zaragocilla.jpg
│   │   │   │   │   └── places-hero.jpg
│   │   │   │   ├── services/
│   │   │   │   │   └── services-hero.jpg
│   │   ├── videos/
│   │   │   ├── captivating-moments.mp4
│   │   │   ├── luxurious-accommodations.mp4
│   │   │   ├── main-video.mp4
│   │   │   ├── personalized-attention.mp4
│   │   │   └── premium-services.mp4
│   │   └── react.svg
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   ├── Navigation.jsx
│   │   │   └── layout.jsx
│   │   ├── ui/
│   │   │   ├── AnimatedNavbar.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ImageGallery.jsx
│   │   │   ├── MainHero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Section.jsx
│   │   │   ├── SectionPreview.jsx
│   │   │   ├── SideNavBar.jsx
│   │   │   └── ThemeToggle.jsx
│   │   └── VideoSectionManager.jsx
│   ├── config/
│   │   └── rooms.js
│   ├── constants/
│   │   └── booking.js       
│   ├── context/
│   │   └── BookingContext.jsx 
│   ├── hooks/
│   │   └── useTheme.js
│   ├── pages/
│   │   ├── Contact.jsx
│   │   ├── Gallery.jsx
│   │   ├── MainPage.jsx
│   │   ├── Places.jsx
│   │   ├── Services.jsx
│   │   └── SocorroProject.jsx
│   ├── styles/
│   │   └── index.css
│   ├── utils/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── python estructura_carpetas.py
├── tailwind.config.js
└── vite.config.js
""")
        f.write('\n' + '=' * 80 + '\n\n')

        # Extraer código de todos los archivos .jsx, .js y .css
        for dirpath, dirnames, filenames in os.walk(src_dir):
            # Saltar la carpeta de imágenes
            if 'images' in dirpath:
                continue
            
            for filename in filenames:
                if filename.endswith(('.jsx', '.js', '.css')):
                    filepath = os.path.join(dirpath, filename)
                    relative_path = os.path.relpath(filepath, src_dir)
                    
                    f.write('\n' + '=' * 80 + '\n')
                    f.write(f'File: {relative_path}\n')
                    f.write('=' * 80 + '\n\n')
                    
                    try:
                        with open(filepath, 'r', encoding='utf-8') as source_file:
                            content = source_file.read()
                            f.write(content)
                            if not content.endswith('\n'):
                                f.write('\n')
                    except Exception as e:
                        f.write(f'Error reading file: {str(e)}\n')

# Uso del script
src_directory = './src'  # Carpeta src del proyecto
output_file = 'jaelen_hotel_code_complete.txt'
extract_code(src_directory, output_file)
print(f"Código extraído y guardado en {output_file}")