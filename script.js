console.log('outside')

/**
 * Estem parlant dels temps de càrrega i parseig dels arxius, no d'execució.
 * Aquest timeout no canviarà ni el DOMContentLoaded ni el Load
 */
setTimeout(() => {
  console.log('inside')
}, 5000)