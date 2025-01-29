import os
from typing import Optional, Set

def generar_estructura_carpetas(ruta_inicial: str, nivel: int = 0, archivo_salida: Optional[str] = None, carpetas_ignoradas: Set[str] = None) -> str:
    """
    Genera una representación de la estructura de carpetas y archivos.
    """
    if carpetas_ignoradas is None:
        carpetas_ignoradas = set()
        
    if not os.path.exists(ruta_inicial):
        return "Error: La ruta especificada no existe"
    
    estructura = ""
    prefijo = "│   " * (nivel - 1) + "├── " if nivel > 0 else ""
    
    # Obtener el nombre de la carpeta actual
    nombre_carpeta = os.path.basename(ruta_inicial) or ruta_inicial
    if nivel > 0:  # Solo mostrar el nombre de la carpeta si no es la raíz
        estructura += f"{prefijo}{nombre_carpeta}/\n"
    
    try:
        elementos = os.listdir(ruta_inicial)
        elementos.sort()
        
        # Separar carpetas y archivos
        carpetas = []
        archivos = []
        
        for elemento in elementos:
            ruta_completa = os.path.join(ruta_inicial, elemento)
            if os.path.isdir(ruta_completa):
                if elemento not in carpetas_ignoradas:
                    carpetas.append(elemento)
            else:
                archivos.append(elemento)
        
        # Procesar carpetas
        for i, carpeta in enumerate(carpetas):
            ruta_completa = os.path.join(ruta_inicial, carpeta)
            estructura += generar_estructura_carpetas(
                ruta_completa, 
                nivel + 1, 
                carpetas_ignoradas=carpetas_ignoradas
            )
        
        # Procesar archivos
        for i, archivo in enumerate(archivos):
            es_ultimo = (i == len(archivos) - 1)
            prefijo_archivo = "│   " * (nivel) + "└── " if es_ultimo else "│   " * (nivel) + "├── "
            estructura += f"{prefijo_archivo}{archivo}\n"
                
    except PermissionError:
        estructura += f"│   " * (nivel + 1) + "Error: Permiso denegado\n"
    except Exception as e:
        estructura += f"│   " * (nivel + 1) + f"Error: {str(e)}\n"
    
    if archivo_salida and nivel == 0:
        try:
            with open(archivo_salida, 'w', encoding='utf-8') as f:
                f.write(estructura)
        except Exception as e:
            print(f"Error al guardar el archivo: {str(e)}")
    
    return estructura

if __name__ == "__main__":
    # Ruta a analizar
    ruta = r"C:\Users\Daniel-PC.Daniel\Documents\Trusted folder Visual\jaelen-hotel"
    
    # Carpetas a ignorar
    carpetas_ignoradas = {'dist', 'node_modules', 'public'}
    
    # Archivo donde guardar la estructura
    archivo_salida = "estructura_archivos.txt"
    
    # Generar y mostrar la estructura
    estructura = generar_estructura_carpetas(ruta, carpetas_ignoradas=carpetas_ignoradas, archivo_salida=archivo_salida)
    print("\nEstructura del proyecto:")
    print(estructura)
    
    if archivo_salida:
        print(f"\nLa estructura ha sido guardada en: {archivo_salida}")