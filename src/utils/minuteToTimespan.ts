export function minutesToTimespan(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  let timespan = '';

  // Se houver horas, mostra as horas
  if (hours > 0) {
    timespan += `${String(hours).padStart(2, '0')}h`;
  }

  // Se houver minutos e não for zero, mostra os minutos
  if (remainingMinutes > 0) {
    timespan += `${String(remainingMinutes).padStart(2, '0')}min`;
  }

  return timespan || '0h';
}
