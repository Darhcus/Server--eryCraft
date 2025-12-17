ServerEvents.recipes(event => {
  // Elimina el crafteo de la venda normal
  event.remove({ output: 'majruszsdifficulty:bandage' })

  // Elimina el crafteo de la venda de oro
  event.remove({ output: 'majruszsdifficulty:golden_bandage' })
})
