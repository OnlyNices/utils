export const isPrimaryProcess = (): boolean =>
  process.env.name === undefined
    ? true
    : process.env.name.search(/primary/) !== -1;
