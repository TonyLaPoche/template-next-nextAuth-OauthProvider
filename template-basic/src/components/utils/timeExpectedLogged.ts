export default function timeExpectedLogged(dateFutureStr: string) {
    const dateActuelle = new Date();
    const dateFuture = new Date(dateFutureStr);
  
    const differenceEnMillisecondes = dateFuture.getTime() - dateActuelle.getTime();
  
    const millisecondsParJour = 24 * 60 * 60 * 1000;
    const millisecondsParHeure = 60 * 60 * 1000;
    const millisecondsParMinute = 60 * 1000;
    const millisecondsParSeconde = 1000;
  
    const joursRestants = Math.floor(differenceEnMillisecondes / millisecondsParJour);
    const heuresRestantes = Math.floor((differenceEnMillisecondes % millisecondsParJour) / millisecondsParHeure);
    const minutesRestantes = Math.floor((differenceEnMillisecondes % millisecondsParHeure) / millisecondsParMinute);
    const secondesRestantes = Math.floor((differenceEnMillisecondes % millisecondsParMinute) / millisecondsParSeconde);
  
    return {
      days: joursRestants,
      hours: heuresRestantes,
      minutes: minutesRestantes,
      seconds: secondesRestantes
    };
  }
  