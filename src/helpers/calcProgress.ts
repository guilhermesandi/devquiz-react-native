export const calcProgress = (total: number, completed: number) => {
  return (1 / (total / completed));
}
