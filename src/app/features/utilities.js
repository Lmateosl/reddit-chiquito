export function tiempoDesde(epoch) {
    const segundos = Math.floor(Date.now() / 1000) - epoch;
    const horas = Math.floor(segundos / 3600);
    const dias = Math.floor(horas / 24);
  
    if (horas < 24) {
      return horas + ' hours ago';
    } else {
      return dias + ' days ago';
    }
  }
  
export const arraySubreddits = [
  'Dog', 'Pizza', 'Ecuador', 'Futbol', 'IceCream', 'Maquillaje', 'Messi', 'Fortnite', 'Apex', 'Tesla'
]